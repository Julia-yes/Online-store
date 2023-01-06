import products from "../scripts/data-parser";
import cart from "../scripts/cart";
import Filter from "../scripts/filter";


export function renderCartPage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = "Cart";
    // console.log(cart);
    cart.addProduct(1);
    console.log(localStorage.getItem('cart'));
    cart.addProduct(1);
    console.log(localStorage.getItem('cart'));
    // cart.addProduct(2);
    cart.removeProduct(1);
    console.log(localStorage.getItem('cart'));
    // cart.removeProduct(1);
    cart.clear();
    console.log(localStorage.getItem('cart'));
    console.log(cart);
    // filter.setStock('max', 51);

    // products.applyFilter(filter);
    // console.log(products);
    content.innerHTML = "Cart"
  }
}
