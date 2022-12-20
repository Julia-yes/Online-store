import products from '../scripts/data-parser';
import Filter from '../scripts/filter';
import {data} from '../assets/data/data';

function renderCategories() {
  const categoriesArea = document.querySelector('.filter__category_area');
  const brands = products.categories;
  console.log(products)
  let categoryInner = `<div class='category__container'>`
  
  for (let key in brands) {
    categoryInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox'>
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity'>${brands[key].length}</div>
    </div>`
  }

  categoryInner += `</div>`;
  if (categoriesArea) {
    categoriesArea.innerHTML = categoryInner;
  }
}

function renderBrands() {
  const brandsArea = document.querySelector('.filter__brand_area');
  const brands = products.brands;
  let brandsInner = `<div class='brand__container'>`
  
  for (let key in brands) {
    brandsInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox'>
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity'>${brands[key].length}</div>
    </div>`
  }

  brandsInner += `</div>`;
  if (brandsArea) {
    brandsArea.innerHTML = brandsInner;
  }
}

renderCategories();
renderBrands();