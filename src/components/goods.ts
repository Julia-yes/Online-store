import products from '../scripts/data-parser';
import { data } from '../assets/data/data';
import {renderProductPage} from './product-page';
import {addPathUrl} from './routing';


export function renderGoods() {
  const goodsArea = document.querySelector('.goods__area');
  const goods = products.products;
  let goodsInner = `<div class='goods__wrapper'>`;
  console.log("!!!", goods.length)
  if (goods.length == 0) {
    goodsInner += `<div class='goods__empty'> No products found </div>`
  }
  else {
    for (let key in goods) {
      let good = goods[key];
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
          <button class='card__button card__button_add'>Add to cart</button>
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
    let goodID = (e.currentTarget as HTMLElement).dataset.goodid;
    addPathUrl(`/product/${goodID}`);
    renderProductPage();
  })});
  const buttonCart = document.querySelectorAll(".card__button_add");
  buttonCart.forEach(button => {
    button.addEventListener('click', (e) => {changeButtonCart(e.currentTarget as HTMLElement)});
  })
}

function changeButtonCart(e: Element) {
  if (e?.innerHTML == "Add to cart") {
    console.log("!!!")
    e.innerHTML = "Delete from cart"
  }
  else if (e?.innerHTML == "Delete from cart") {
    console.log("##")
    e.innerHTML = "Add to cart"
  }
}

renderGoods();