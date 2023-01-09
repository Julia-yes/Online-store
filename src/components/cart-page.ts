import products from "../scripts/data-parser";
import cart from "../scripts/cart";
import { createNode } from "../scripts/helpers";
import { updateHeader } from "./header";
import { setUrlParameter, getUrlParameterValue } from "../scripts/helpers";
import { addListenerButtonBuy } from "./modal-page";

const defaultProductsPerPage = '4';
const defaultPage = '1';

export function renderCartPage() : void {
  const content = document.querySelector('.main');
  if (content) {
    if (localStorage.cart && JSON.parse(localStorage.cart).products.length) {
      const productsBlock = renderProductsBlock();
      const summaryBlock = renderSummaryBlock();
      
      const productsSummaryBlock = createNode('products-summary');
      productsSummaryBlock.append(productsBlock, summaryBlock);
      const paginationBlock = renderPagination();
      content.append(productsSummaryBlock, paginationBlock);
      addListenerButtonBuy();
    } else {
      content.textContent = 'Cart is Empty';
    }
  }
}

function renderProductsBlock() {
  const productsBlock = createNode('products');
  const productsHeader = createNode('products__header', 'Products');
  productsBlock.append(productsHeader);
  renderProductsList(productsBlock);
  return productsBlock;
}

function renderProductsList(productsBlock?: HTMLElement) {
  if (!productsBlock) productsBlock = document.querySelector('.products') as HTMLElement;
  
  let productsList = document.querySelector('.products-list');
  if (productsList) productsList.remove();
  productsList = createNode('products-list');
  const cartProducts = JSON.parse(localStorage.cart);

  const productsPerPage = getUrlParameterValue('itemsPerPage') || +defaultProductsPerPage;
  const currentPage = getUrlParameterValue('page') || +defaultPage;
  const startIdx = productsPerPage * (currentPage - 1);
  for (let i = startIdx; i < cartProducts.products.length && i < startIdx + productsPerPage; i++ ) {
    const currentProduct = products.getProductById(cartProducts.products[i].id);
    if (currentProduct) {
      const product = createNode('cart__product');
      const productOrder = createNode('product__order', `${i + 1}`);
      const productThumbnail = createNode('product__thumbnail');
      const productThumbnailImg = document.createElement('img');
      productThumbnailImg.className = 'product__thumbnail-img'
      productThumbnailImg.src = currentProduct.thumbnail;
      productThumbnail.append(productThumbnailImg);
      const productData = createNode('product__data');
      const productDataName = createNode('product__data-name', currentProduct.title);
      const productDescription = createNode('product__data-description', currentProduct.description);
      const productRating = createNode('product__data-rating', currentProduct.rating);
      const productDiscount = createNode('product__data-discount', currentProduct.discountPercentage);
      productData.append(productDataName, productDescription, productRating, productDiscount);

      const productBuyData = createNode('product__buy-data');
      const productStock = createNode('product__stock', `Stock: `);
      const productStockValue = createNode('product__stock-value', currentProduct.stock)
      productStock.append(productStockValue);
      const amountControl = createNode('product-amount-control');
      amountControl.dataset.productId = `${currentProduct.id}`;
      const increaseAmount = createNode('product-amount__el product-amount__increase', '+');
      const currentAmount = createNode('product-amount__current', cartProducts.products[i].amount);
      const decreaseAmount = createNode('product-amount__el product-amount__decrease', '-');
      const productPrice = createNode('product__price', `Price: `);
      const productPriceValue = createNode('product__price-value', `${currentProduct.price * cartProducts.products[i].amount}`);
      productPrice.append(productPriceValue);

      amountControl.append(increaseAmount, currentAmount, decreaseAmount, productPrice);
      productBuyData.append(productStock, amountControl, productPrice)
      product.append(productOrder, productThumbnail, productData, productBuyData);
      productsList.append(product);
      setChangeAmountListener([increaseAmount, decreaseAmount]);
    }
  }
  productsBlock?.append(productsList);
}

function setChangeAmountListener(items: HTMLElement[]) {
  items.forEach(el => {
    el.addEventListener('click', (e) => {
      const currentElement = <HTMLElement>e.target;
      const productAmountControlBlock = <HTMLElement>(currentElement).parentNode
      const productBuyDataBlock = <HTMLElement>(productAmountControlBlock).parentNode;
      const productId = productAmountControlBlock.dataset.productId;
      if (productId) {
        const cartProductId = cart.getCartProductId(+productId);

        const currentAmount = productAmountControlBlock.querySelector('.product-amount__current');
        let isUpdatedPageEmpty = false;
        if (currentElement.classList.contains('product-amount__increase')) {
          const productStockValue = productBuyDataBlock.parentElement?.querySelector('.product__stock-value')?.textContent;
          if (productStockValue && currentAmount && currentAmount.textContent && +productStockValue > +currentAmount.textContent) cart.addProduct(+productId);
          else return;
        }
        else {
          if (cartProductId !== undefined && cart.products[cartProductId].amount === 1) {
            productBuyDataBlock.parentElement?.remove();
          }
          cart.removeProduct(+productId);

          const productsPerPage = getUrlParameterValue('itemsPerPage') || +defaultProductsPerPage;
          let currentPage = getUrlParameterValue('page') || +defaultPage;
          if (cart.products.length === 0) {
            const content = document.querySelector('.main');
            if (content) {
              content.textContent = 'Cart is Empty';
              return;
            }
          }
          if (cart.products.length <= productsPerPage * (currentPage - 1)) {
            currentPage--;
            setUrlParameter('page', currentPage);
            const currentPageValue = document.querySelector('.switch-page__current');
            if (currentPageValue?.textContent) currentPageValue.textContent = '' + currentPage;
            isUpdatedPageEmpty = true;
          }
        }

        updateHeader();
        const summaryAmount = document.querySelector('.content__amount-value');
        const summaryPrice = document.querySelector('.content__price-value');
        if (currentAmount && summaryAmount && summaryPrice) {
          if (cartProductId !== undefined) {
            if (JSON.parse(localStorage.cart).products && JSON.parse(localStorage.cart).products.length) {
              if (!isUpdatedPageEmpty) {
                currentAmount.textContent = "" + cart.products[cartProductId].amount;
                summaryAmount.textContent = "" + cart.totalItems;
                summaryPrice.textContent = "" + cart.totalPrice;
              }

              const newProductsPriceValue = document.querySelector('.content__price-value-new');
              if (newProductsPriceValue && newProductsPriceValue?.textContent) {
                newProductsPriceValue.textContent = '' + cart.totalPrice * (1 - (document.querySelectorAll('.promo-table__row').length / 10));
              }
            } 
            else {
              const content = document.querySelector('.main');
              if (content) content.innerHTML = 'Cart is Empty';
            }
          }
        }
      }
      renderProductsList();
    })
  })
}

function renderSummaryBlock() {
  const summaryBlock = createNode('summary');
  const summaryHeader = createNode('summary__header', 'Header');
  const summaryContent = createNode('content');
  const totalProductsAmount = createNode('content__amount', `Products: `);
  const totalProductsAmountValue = createNode('content__amount-value', cart.totalItems);
  totalProductsAmount.append(totalProductsAmountValue);
  const totalProductsPrice = createNode('content__price', `Total: `);
  const totalProductsPriceValue = createNode('content__price-value', cart.totalPrice);
  totalProductsPrice.append(totalProductsPriceValue);
  
  const buttonBuy = document.createElement('button');
  buttonBuy.className = 'button button__buy';
  buttonBuy.textContent = 'Buy';

  summaryContent.append(totalProductsAmount, totalProductsPrice, buttonBuy);

  const promoBlock = createNode('promo');
  const promoInput = document.createElement('input');
  promoInput.className = 'promo__input';

  const appliedPromocodes : string[] = [];
  const promocodes = ['dima', 'julia'];

  promoInput.addEventListener('input', (e) => {
    const inputValue = (e.target as HTMLTextAreaElement).value;
    
    if (promocodes.includes(inputValue)) {
      if (appliedPromocodes.includes(inputValue)) return;

      const addButton = document.createElement('button');
      addButton.textContent = 'Apply';
      addButton.className = 'promo__add';
      addButton.addEventListener('click', () => {
        let promoTable = document.querySelector('.promo-table');
        appliedPromocodes.push(inputValue);
        promoBlock.querySelector('.promo__add')?.remove();
        if (!promoTable) {
          promoTable = createNode('promo-table');
          const promoTableHeader = createNode('promo-table__header');
          promoTable.append(promoTableHeader);
        }
        const promoCodeRow = createNode('promo-table__row');
        const promoCodeValue = createNode('promo-table__row-value', inputValue);
        const promoAmount = createNode('promo-table__row-amount', '10%');
        const promoRemoveButton = createNode('promo-table__row-remove', 'x');

        promoCodeRow.append(promoCodeValue, promoAmount, promoRemoveButton);
        promoTable.append(promoCodeRow);
        promoBlock.append(promoTable);

        const originalPrice = document.querySelector('.content__price') as HTMLElement;
        originalPrice.style.textDecoration = 'line-through';

        let newProductsPrice = document.querySelector('.content__price-new');
        if (newProductsPrice) {
          const newProductsPriceValue = document.querySelector('.content__price-value-new');
          if (newProductsPriceValue) {
            newProductsPriceValue.textContent = '' + cart.totalPrice * (1 - (appliedPromocodes.length / 10));
          }
        }
        else {
          newProductsPrice = createNode('content__price-new', `Total: `);
          const newProductsPriceValue = createNode('content__price-value-new', cart.totalPrice * (1 - (appliedPromocodes.length / 10)));
          newProductsPrice.append(newProductsPriceValue);
        }
        const contentBlock = document.querySelector('.content');
        contentBlock?.append(newProductsPrice);

        promoRemoveButton.addEventListener('click', (e) => {
          const parentPromoNode = (e.target as HTMLElement).parentNode as HTMLElement;
          const promocodeToRemove = parentPromoNode?.textContent;
          if (promocodeToRemove) {
            appliedPromocodes.splice(appliedPromocodes.indexOf(promocodeToRemove), 1);
          }
          if (appliedPromocodes.length) {
            parentPromoNode?.remove();
            if (newProductsPrice) {
              const newProductsPriceValue = document.querySelector('.content__price-value-new');
              if (newProductsPriceValue) {
                newProductsPriceValue.textContent = '' + cart.totalPrice * (1 - (appliedPromocodes.length / 10));
              }
            }
          }
          else {
            promoBlock.querySelector('.promo-table')?.remove();
            originalPrice.style.textDecoration = '';
            newProductsPrice?.remove();
          }
        })
      })

      promoBlock.append(addButton);

    } else if (promoBlock.querySelector('.promo__add')) {
      promoBlock.querySelector('.promo__add')?.remove();
    }
  })
  const promoHint = createNode('promo__hint', `Promocodes: `);
  const promoHintValue = createNode('promo__hint-value', promocodes.join(', '));
  promoHint.append(promoHintValue);
  promoBlock.append(promoHint, promoInput);
  
  summaryBlock.append(summaryHeader, summaryContent, promoBlock);
  return summaryBlock;
}

function renderPagination() {
  const paginationBlock = createNode('pagination');
  
  let currentPage = getUrlParameterValue('page') || 1;
  const itemsPerPage = getUrlParameterValue('itemsPerPage') || +defaultProductsPerPage;
  const itemsPerPageBlock = createNode('pagination__per-page', 'Items per page: ');

  const itemsPerPageValue = document.createElement('input');
  itemsPerPageValue.type = 'number';
  itemsPerPageValue.className = 'pagination__per-page-value';
  itemsPerPageValue.value = '' + itemsPerPage;
  itemsPerPageBlock.append(itemsPerPageValue);
  itemsPerPageValue.addEventListener('input', (e) => {
    const inputNewValue = (e.target as HTMLInputElement).value;
    if (inputNewValue === '') return;
    currentPage = getUrlParameterValue('page') || 1;
    if (cart.products.length < +inputNewValue * currentPage) {
      currentPage = Math.ceil(cart.products.length / +inputNewValue);
      const currentPageValue = document.querySelector('.switch-page__current');
      if (currentPageValue?.textContent) currentPageValue.textContent = '' + currentPage;
      setUrlParameter('page', currentPage);
    } 
    setUrlParameter('itemsPerPage', inputNewValue);
    renderProductsList();
  })

  const switchPageBlock = createNode('switch-page');
  const switchText = createNode('switch-page__text', 'Page: ');
  const switchPrev = createNode('switch-page__control switch-page__prev', '<');
  const currentPageValue = createNode('switch-page__current', currentPage);
  const switchNext = createNode('switch-page__control switch-page__next', '>');
  switchPageBlock.append(switchText, switchPrev, currentPageValue, switchNext);

  const pageControlElements = [switchPrev, switchNext];
  pageControlElements.forEach((el) => {
    el.addEventListener('click', (e) => {
      const currentPage = getUrlParameterValue('page') || +defaultPage;
      if (currentPage) {
        if ((<HTMLElement>e.target).classList.contains('switch-page__prev')) {
          if (currentPage === 1) {
            return;
          }
          setUrlParameter('page', +currentPage - 1);
          currentPageValue.textContent = `${+currentPage - 1}`;
          renderProductsList();
        }
        else {
          const productsPerPage = getUrlParameterValue('itemsPerPage') || +defaultProductsPerPage;
          if (currentPage * productsPerPage < cart.products.length) {
            setUrlParameter('page', +currentPage + 1);
            currentPageValue.textContent = `${+currentPage + 1}`;
            renderProductsList();
          }
        }
      }
    })
  })

  paginationBlock.append(itemsPerPageBlock, switchPageBlock);
  return paginationBlock;
}