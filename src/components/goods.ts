import products from '../scripts/data-parser';
import {renderProductPage} from './product-page';
import {addPathUrl} from './routing';
import cart from "../scripts/cart";

export function renderGoods() {
  const goodsArea = document.querySelector('.goods__area');
  const goods = products.products;
  let goodsInner = ``;
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
          <button class='card__button card__button_add' data-goodID = "${good.id}">Add to cart</button>
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
    button.addEventListener('click', (e) => {
      let goodID = (e.currentTarget as HTMLElement).dataset.goodid;
      if (goodID)
      changeButtonCart(e.currentTarget as HTMLElement, goodID)});
  })
}

function changeButtonCart(e: Element, id: string) {  
  if (e?.innerHTML == "Add to cart") {
    e.innerHTML = "Delete from cart";
    cart.addProduct(products.getProductById(Number(id)))
  }
  else if (e?.innerHTML == "Delete from cart") {
    e.innerHTML = "Add to cart";
    cart.removeProduct(products.getProductById(Number(id)))
  }
}
