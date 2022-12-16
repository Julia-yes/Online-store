import products from "../scripts/parse-data";

export function renderCartPage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = "Cart"
    console.log(products.getProductById(2))
  }
}
