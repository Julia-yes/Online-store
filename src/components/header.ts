import {cart} from "../scripts/cart";

export function renderHeader() {
  const headerArea = document.querySelector(".header");
  if (headerArea) {
    headerArea.innerHTML = `<div class="wrapper">
    <div class="header__template">
      <a href='/'><img class="header__logo" alt="shop logo" src="../src/assets/img/logo.png"></a>
      <div class="header__price">
      Cart total&#58; &#32;
      <span class="header__value">0</span>&#36
      </div>
      <a href='/cart' class="header__cart">
        <img class="header__cart_img" alt="cart" src="../src/assets/img/cart.png">
        <div class="header__cart_quantity">0</div>
      </a>
    </div>
  </div>`
  }
  updateHeader();
}

export function updateHeader() {
  if (localStorage.cart) {
    const headerPrice = document.querySelector('.header__value');
    const cartAmount = document.querySelector('.header__cart_quantity');
    if (headerPrice && cartAmount) {
      if (cart?.products.length) {
        headerPrice.textContent = '' + cart.totalPrice;
        cartAmount.textContent = '' + cart.totalItems;
      } else {
        headerPrice.textContent = '0';
        cartAmount.textContent = '0';
      }
    }
  }
}