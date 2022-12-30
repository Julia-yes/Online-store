import products from "../scripts/data-parser";
import { IProduct } from "../scripts/data-parser";

let content: HTMLDivElement | null;

export function renderProductPage() : void {
  console.log(window.location)
  const productId = +window.location.pathname.split('/')[2];
  console.log(productId);
  const product = products.getProductById(productId);
  if (product) {
    content = document.querySelector('.main');
    if (content) {
      content.innerHTML = '';
    }
    renderCrumbs(product);
    renderProduct(product);
    renderPurchase(product);
  }
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
  const mainPhotoBlock = createNode('main');
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
  const productTitle = createNode('data__title', product.title);
  const productDescription = createNode('data__description', product.description);
  const productBrand = createNode('data__brand', product.brand);
  const productCategory = createNode('data__category', product.category);
  
  const productStats = createNode('stats');
  const productRating = createNode('data__rating', 'Rating: ' + product.rating);
  const productStock = createNode('data__stock', 'Stock: ' + product.stock);
  productStats.append(productRating, productStock);
  productDataBlock.append(productTitle, productDescription, productBrand, productCategory, productStats);

  productBlock.append(photosBlock, productDataBlock);
  content?.append(productBlock);
}

function renderPurchase(product: IProduct) {
  const purchaseBlock = createNode('purchase');

  const priceBlock = createNode('price');
  const discount = createNode('price__discount', `Discount: \n${product.discountPercentage}`);
  const price = createNode('price__amount', `Price: \n${product.price}`);
  priceBlock.append(discount, price);

  const buttonsBlock = createNode('buttons');
  const buttonAdd = document.createElement('button');
  buttonAdd.className = 'button button__add';
  buttonAdd.textContent = 'Add to Cart';
  const buttonBuy = document.createElement('button');
  buttonBuy.className = 'button button__buy';
  buttonBuy.textContent = 'Buy Now';
  buttonsBlock.append(buttonAdd, buttonBuy);

  purchaseBlock.append(priceBlock, buttonsBlock);

  content?.append(purchaseBlock);
}

function createNode(className: string, textContent?: string) {
  const node = document.createElement('div');
  node.className = className;
  if (textContent) node.textContent = textContent;
  return node;
}