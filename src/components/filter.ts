import products from '../scripts/parse-data';

function renderCategories() {
  const categoriesArea = document.querySelector('.filter__category_area');
  const brands = products.getCategories();
  let categoryInner = `<div class='category__container'>`
  
  for (let key in brands) {
    categoryInner += `<div class='category__item'>
      <input type = 'checkbox' class='category__checkbox'>
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
  const brands = products.getBrands();
  let brandsInner = `<div class='brand__container'>`
  
  for (let key in brands) {
    brandsInner += `<div class='brand__item'>
      <input type = 'checkbox' class='brand__checkbox'>
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