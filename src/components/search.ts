import products from "../scripts/data-parser";

function runSearch() {
  const searchInput = document.querySelector('.search__input');
  searchInput?.addEventListener('input', () => {
    runFilter((searchInput as HTMLInputElement).value);
  })
}

function runFilter(prop: string | number) {
  console.log(products)
}

runSearch()