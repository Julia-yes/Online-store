import products from "../scripts/data-parser";
import Filter from "../scripts/filter";


export function renderCartPage() : void {
  const content = document.querySelector('.main');
  if (content) {
    content.innerHTML = "Cart";
    console.log(products);
    const filter = new Filter();
    filter.switchBrand('Apple');
    filter.switchBrand('Samsung');
    products.applyFilter(filter);
    console.log(products);
    // filter.setStock('max', 51);

    // products.applyFilter(filter);
    // console.log(products);
    content.innerHTML = "Cart"
  }
}
