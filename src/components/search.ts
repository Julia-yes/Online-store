import products from "../scripts/data-parser";
import Filter from "../scripts/filter";

export function runSearch() {
  const searchInput = document.querySelector('.search__input');
  searchInput?.addEventListener('input', () => {
    // products.applyFilter()
    runFilter((searchInput as HTMLInputElement).value);
  })
}

function runFilter(prop: string | number) {
  if (typeof prop === 'number') prop = '' + prop;
  products.searchProductsByString(prop);
  console.log(products);
}
