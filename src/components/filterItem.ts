import { data } from '../assets/data/data';
import products from '../scripts/data-parser';
import Filter from '../scripts/filter';
import {renderGoods} from './goods';
import {renderGoodsQuantity} from './store-page';

function renderCategories(): void {
  const categoriesArea = document.querySelector('.filter__category_area');
  const categories = products.categories;
  let categoryInner = `<div class='category__container'>`
  
  for (let key in categories) {
    categoryInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox' value="${key}" data-param = 'category'>
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity' data-param ="${key}">(${categories[key].length})</div>
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
      <input type = 'checkbox' class='filter__checkbox' value="${key}" data-param = 'brand'>
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity' data-param ="${key}">(${brands[key].length})</div>
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
    checkbox.addEventListener('click', e => {changeFilters(e)})
  })
}

function addEvents() {
  const buttonReset = document.querySelector('.filter__button_reset');
  buttonReset?.addEventListener('click', resetFilters);
  
}

interface IselectedFilters {
  category: string[];
  brand: string[];
  price: { min: number | null; max: number | null; };
  stock: { min: number | null; max: number | null; };
}

const filterNull: IselectedFilters = {
  category : [],
  brand : [],
  price : {min: null, max : null},
  stock : {min: null, max : null},
}

let filter: IselectedFilters = {
  category : [],
  brand : [],
  price : {min: null, max : null},
  stock : {min: null, max : null},
}

function changeFilters(event: Event) : void {
  let param : string | undefined = (event.currentTarget as HTMLElement).dataset.param;

  let newFilter = (event.currentTarget as HTMLInputElement).value;
  if (param) {
    if ((filter[param as keyof IselectedFilters] as unknown as string[]).indexOf(newFilter) !== -1) {
      let ind = (filter[param as keyof IselectedFilters] as unknown as string[]).indexOf(newFilter);
      (filter[param as keyof IselectedFilters] as unknown as string[]).splice(ind, 1)
    }
    else {
      (filter[param as keyof IselectedFilters] as unknown as string[]).push(newFilter);
    }
  }
  runFiltration();
}

function runFiltration() {
  let filterDownloaded = new Filter;
  if (filter.category.length > 0) {
    (filter.category as unknown as string[]).forEach(item => {
      filterDownloaded.switchCategory(item)
    })
  }
  if (filter.brand.length > 0) {
    (filter.brand as unknown as string[]).forEach(item => {
      filterDownloaded.switchBrand(item)
    })
  }
  products.applyFilter(filterDownloaded);
  renderGoods();
  rerenderGoodsQuantity();
  renderGoodsQuantity();
}

function rerenderGoodsQuantity() {
  const quantityAreaBrands = document.querySelectorAll('.brand__quantity');
  const filteredBrands: string[] = [];
  for (let key in products.brands) {
    filteredBrands.push(key)
  };

  quantityAreaBrands.forEach(item => {
    if (filteredBrands.includes((item as HTMLElement).dataset.param as string)) {
      for (let key in products.brands) {
        if (key == (item as HTMLElement).dataset.param) {
          item.innerHTML = `(${products.brands[key].length})`;
        }
      }
    }
    else {
      item.innerHTML = '(0)';
    }
  })

  const quantityAreaCategory = document.querySelectorAll('.category__quantity');
  const filteredCategories: string[] = [];
  for (let key in products.categories) {
    filteredCategories.push(key)
  };

  quantityAreaCategory.forEach(item => {
    if (filteredCategories.includes((item as HTMLElement).dataset.param as string)) {
      for (let key in products.categories) {
        if (key == (item as HTMLElement).dataset.param) {
          item.innerHTML = `(${products.categories[key].length})`;
        }
      }
    }
    else {
      item.innerHTML = '(0)';
    }
  })
}

function resetFilters() {
  const checkboxs = document.querySelectorAll('.filter__checkbox');
  checkboxs.forEach(item => {
    (item as HTMLInputElement).checked = false;
  });
  filter = filterNull;
  runFiltration();
}

function renderFilters() {
  renderCategories();
  renderBrands();
  addFilterParams();
  addEvents();
  
}

renderFilters()
