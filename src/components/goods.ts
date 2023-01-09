import products from '../scripts/data-parser';
import cart from '../scripts/cart';
// import { updateHeader } from './header';
import {renderProductPage} from './product-page';
import {addPathUrl} from './routing';
import {addListenerButtonBuy} from "./modal-page";
import { updateHeader } from './header';


export function renderGoods() {
  let localStorageCart;
  if (localStorage.cart) {
    localStorageCart = JSON.parse(localStorage.cart);
  }
  const goodsArea = document.querySelector('.goods__area');
  const goods = products.products;
  let goodsInner = ``;
  if (goods.length == 0) {
    goodsInner += `<div class='goods__empty'> No products found </div>`
  }
  else {
    for (const key in goods) {
      const good = goods[key];
      let buttonStr = `<button class='card__button card__button_cart card__button_add' data-goodID = "${good.id}">Add to cart</button>`;
      if (localStorage.cart) {
        for (let i = 0; i < localStorageCart.products.length; i++) {
          if (+localStorageCart.products[i].id === good.id) {
            buttonStr = `<button class='card__button card__button_cart card__button_delete' data-goodID = "${good.id}">Delete from cart</button>`;
          }
        }
      }
      goodsInner += `<div class='goods__card card'>
        <div class='card__thumbnail'>
          <img alt='good' class='card__img' src='${good.thumbnail}'>
          <div class='card__discont'>${good.discountPercentage}&#37;</div>
        </div>
        <div class='card__title'>${good.title}</div>
        <div class='card__price'>
          <div class='card__price_new'>${good.price}&#36;</div>
          <div class='card__price_old'>${Math.floor(good.price / (100 - good.discountPercentage) * 100)}&#36;</div>
        </div>
        <div class='card__bottom'>
          <div class='card__rating'>${good.rating}&starf;</div>
          <div class='card__stock'>Stock &#58; &#32; ${good.stock}</div>
        </div>
        <div class='card__buttons'>
          ${buttonStr}
          <button class='card__button card__button_more' data-goodID = "${good.id}">See more</button>
        </div>
      </div>`
    }
  }
  if (goodsArea) {
    goodsArea.innerHTML = goodsInner;
  }
  const buttonsToProduct = document.querySelectorAll('.card__button_more');
  buttonsToProduct.forEach(button => {button.addEventListener('click', (e) => {
    const goodID = (e.currentTarget as HTMLElement).dataset.goodid;
    addPathUrl(`/product/${goodID}`);
    renderProductPage();
    addListenerButtonBuy();
  })});
  const buttonCart = document.querySelectorAll(".card__button_cart");
  buttonCart.forEach(button => {
    button.addEventListener('click', (e) => {proceedAddToCart(e.currentTarget as HTMLElement)});
  });
  updateHeader();
}

function proceedAddToCart(e: Element) {
  const goodID = Number((e as HTMLElement).dataset.goodid);
  if (goodID) {
    if (e.classList.contains('card__button_add')) {
      cart.addProduct(goodID);
      e.classList.remove('card__button_add');
      e.classList.add('card__button_delete');
      e.textContent = "Delete from cart";
    }
    else {
      cart.removeProduct(goodID);
      e.classList.remove('card__button_delete');
      e.classList.add('card__button_add');
      e.textContent = 'Add to cart';
    }
  }
  updateHeader();
}
