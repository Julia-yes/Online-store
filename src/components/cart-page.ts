import products from "../scripts/data-parser";
import cart from "../scripts/cart";

export function renderCartPage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = "Cart";
    console.log(cart);
    cart.addProduct(products.getProductById(1))
    cart.addProduct(products.getProductById(1))
    cart.addProduct(products.getProductById(3))
    //cart.removeProduct(products.getProductById(1));
    //cart.removeProduct(products.getProductById(3));
    console.log(cart);
    // filter.setStock('max', 51);

    // products.applyFilter(filter);
    // console.log(products);
    content.innerHTML = "Cart"
  }
}
