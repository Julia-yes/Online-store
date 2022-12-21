import products from '../scripts/data-parser';
import { data } from '../assets/data/data';
import {renderProductPage} from './product-page';
import {addPathUrl} from './routing';


export function renderGoods() {
  const goodsArea = document.querySelector('.goods__area');
  const goods = products.getProducts(data.products);
  let goodsInner = `<div class='goods__wrapper'>`;
  for (let key in goods) {
    let good = goods[key];
    goodsInner += `<div class='goods__card card'>
      <div class='card__thumbnail'>
        <img alt='good' class='card__img' src='${good.thumbnail}'>
        <div class='card__discont'>${good.discountPercentage}&#37;</div>
      </div>
      <div class='card__title'>${good.title}</div>
      <div class='card__price'>
        <div class='card__price_new'>${Math.floor(good.price * (100 - good.discountPercentage) / 100)}&#36;</div>
        <div class='card__price_old'>${good.price}&#36;</div>
      </div>
      <div class='card__bottom'>
        <div class='card__rating'>${good.rating}&starf;</div>
        <div class='card__stock'>Stock &#58; &#32; ${good.stock}</div>
      </div>
      <div class='card__buttons'>
        <button class='card__button card__button_add'>Add to cart</button>
        <button class='card__button card__button_more'>See more</button>
      </div>
    </div>`
  }
  if (goodsArea) {
    goodsArea.innerHTML = goodsInner;
  }
  const buttonsToProduct = document.querySelectorAll('.card__button_more');
  buttonsToProduct.forEach(button => {button.addEventListener('click', () => {
    addPathUrl('/product');
    renderProductPage();
  })})
}



renderGoods();