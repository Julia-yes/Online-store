import products from "../scripts/data-parser";
import { createNode } from "../scripts/helpers";
import { IProduct } from "../scripts/data-parser";
import cart from "../scripts/cart";
import { updateHeader } from "./header";

let content: HTMLDivElement | null;

export function renderProductPage() : void {
  const productId = +window.location.pathname.split('/')[2];
  const product = products.getProductById(productId);
  if (product) {
    content = document.querySelector('.main');
    if (content) {
      content.innerHTML = '';
      content.classList.add("product-page")
    }
    renderCrumbs(product);
    renderProduct(product);
    renderPurchase(product);
  }
  addListenerPhotos()
}

function renderCrumbs(product: IProduct) {
  const crumbsBlock = createNode('crumbs');
  const storeCrumb = createNode('crumb', "Store");
  const categoryCrumb = createNode('crumb', product?.category);
  const brandCrumb = createNode('crumb', product?.brand);
  const titleCrumb = createNode('crumb', product?.title);

  crumbsBlock.append(storeCrumb, categoryCrumb, brandCrumb, titleCrumb);
  content?.append(crumbsBlock);
}

function renderProduct(product: IProduct) {
  const productBlock = createNode('product');

  const photosBlock = createNode('photos');
  const mainPhotoBlock = createNode('photos__main');
  const mainPhoto = createNode('main-photo');
  const mainPhotoImg = document.createElement('img');
  mainPhotoImg.className = 'main-photo__img';
  mainPhotoImg.src = product.thumbnail;
  mainPhoto.append(mainPhotoImg);
  mainPhotoBlock.append(mainPhoto);

  const smallPhotosBlock = createNode('small-photos');
  for (const image of product.images) {
    if (image === product.thumbnail) continue;
    const smallPhoto = createNode('small-photo');
    const smallPhotoImg = document.createElement('img');
    smallPhotoImg.src  = image;
    smallPhoto.append(smallPhotoImg);
    smallPhotosBlock.append(smallPhoto);
  }
  photosBlock.append(mainPhotoBlock, smallPhotosBlock);

  const productDataBlock = createNode('data');
  const productTitle = createNode('data__title data__item', product.title);
  const productCategory = createNode('data__category data__item', 'Category: ');
  const productCategoryContent = createNode('data__item-content', product.category);
  productCategory.append(productCategoryContent);
  const productBrand = createNode('data__brand data__item', 'Brand: ');
  const productBrandContent = createNode('data__item-content', product.brand);

  productBrand.append(productBrandContent);

  const productDescription = createNode('data__description data__item', 'Description: ');
  const productDescriptionContent = createNode('data__item-content', product.description);

  productDescription.append(productDescriptionContent);

  const productStats = createNode('stats');
  const productRating = createNode('data__rating stats__item', 'Rating: ' + product.rating);
  const productStock = createNode('data__stock stats__item', 'Stock: ' + product.stock);

  productStats.append(productRating, productStock);
  productDataBlock.append(productTitle, productCategory, productBrand, productDescription, productStats);
  productBlock.append(photosBlock, productDataBlock);
  content?.append(productBlock);
}

function renderPurchase(product: IProduct) {
  const purchaseBlock = createNode('purchase');
  const priceBlock = createNode('price');
  const discount = createNode('price__discount', `Discount: \n${product.discountPercentage}%`);
  const price = createNode('price__amount', `${product.price}$`);

  priceBlock.append(price, discount);

  const buttonsBlock = createNode('buttons');
  const buttonAdd = document.createElement('button');
  buttonAdd.className = 'button product-page__button product-page__button_left';
  
  let isProductInCart = false;
  for (let i = 0; i < cart.products.length; i++) {
    if (cart.products[i].id === product.id) {
      isProductInCart = true;
    }
  }
  if (isProductInCart) {
    buttonAdd.textContent = 'Remove from Cart';
    buttonAdd.classList.add('product-page__button-remove');
  } else {
    buttonAdd.textContent = 'Add to Cart';
    buttonAdd.classList.add('product-page__button-add');
  }

  buttonAdd.addEventListener('click', () => {
    isProductInCart = false;
    for (let i = 0; i < cart.products.length; i++) {
      if (cart.products[i].id === product.id) {
        isProductInCart = true;
      }
    }
    if (isProductInCart) {
      cart.removeProductCompletely(product.id);
      buttonAdd.textContent = 'Add to Cart';
      buttonAdd.classList.add('product-page__button-add');
      buttonAdd.classList.remove('product-page__button-remove');
    } else {
      cart.addProduct(product.id);
      buttonAdd.textContent = 'Remove from Cart';
      buttonAdd.classList.add('product-page__button-remove');
      buttonAdd.classList.remove('product-page__button-add');
    }
    updateHeader();
  })

  const buttonBuy = document.createElement('button');
  buttonBuy.className = 'button product-page__button product-page__button_buy';
  buttonBuy.textContent = 'Buy Now';
  
  buttonsBlock.append(buttonAdd, buttonBuy);
  purchaseBlock.append(priceBlock, buttonsBlock);
  content?.append(purchaseBlock);
}

function addListenerPhotos() {
  const photos = document.querySelectorAll('.small-photo');
  photos.forEach(photo => {
    photo.addEventListener('click', (e) => changeMainPhoto(e))
  })
} 

function changeMainPhoto(event: Event) {
  const mainPhoto = document.querySelector(".main-photo__img");
  const newSrc = (event.target as HTMLImageElement).src;
  if (mainPhoto)
  (mainPhoto as HTMLImageElement).src=`${newSrc}`;
}