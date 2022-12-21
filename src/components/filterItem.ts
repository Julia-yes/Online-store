import products from '../scripts/data-parser';
import Filter from '../scripts/filter';
import {data} from '../assets/data/data';
import {renderGoods} from './goods';

function renderCategories(): void {
  const categoriesArea = document.querySelector('.filter__category_area');
  const categories = products.categories;
  let categoryInner = `<div class='category__container'>`
  
  for (let key in categories) {
    categoryInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox' value='${key}' data-param = 'category'>
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity'>(${categories[key].length})</div>
    </div>`
  }

  categoryInner += `</div>`;
  if (categoriesArea) {
    categoriesArea.innerHTML = categoryInner;
  }
}

function renderBrands() : void {
  const brandsArea = document.querySelector('.filter__brand_area');
  const brands = products.brands;
  let brandsInner = `<div class='brand__container'>`
  
  for (let key in brands) {
    brandsInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox' value='${key}' data-param = 'brand'>
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity'>(${brands[key].length})</div>
    </div>`
  }

  brandsInner += `</div>`;
  if (brandsArea) {
    brandsArea.innerHTML = brandsInner;
  }
}

function addFilterParams() {
  const checkboxs = document.querySelectorAll('.filter__checkbox');
  checkboxs.forEach(checkbox => {
    checkbox.addEventListener('click', e => {makeFiltration(e)})
  })
}

function makeFiltration(event: Event) {
  let filter = new Filter;
  let param = (event.currentTarget as HTMLElement).dataset.param;
  if (param === 'brand') {
    filter.switchBrand((event.currentTarget as HTMLInputElement).value)
  }
  if (param === 'category') {
    filter.switchCategory((event.currentTarget as HTMLInputElement).value)
  }
  products.applyFilter(filter);
  console.log(products);
  renderGoods()
  
}

function renderFilters() {
  renderCategories();
  renderBrands();
  addFilterParams()
}

renderFilters()
