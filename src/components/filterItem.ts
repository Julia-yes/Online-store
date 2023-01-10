import {products, allProducts} from '../scripts/data-parser';
import Filter from '../scripts/filter';
import {renderGoods} from './goods';
import {renderGoodsQuantity} from './store-page';
import {changeRange, changePriceRange, changeStockRange} from './range';
import {insertParam} from "./routing";

function renderCategories(): void {
  console.log(products);
  console.log(allProducts)
  const categoriesArea = document.querySelector('.filter__category_area');
  const categories = products.categories;
  const categoriesAll = allProducts.categories;
  let categoryInner = `<div class='category__container'>`
  
  for (const key in categories) {
    categoryInner += `<label class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_category' value="${key}" name="${key}" data-param = 'category' data-quantity="${categories[key].length}">
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity filter__quantity' data-param ="${key}">(${categories[key].length}/</div><span>${categoriesAll[key].length})</span>
    </label>`
  }

  categoryInner += `</div>`;
  if (categoriesArea) {
    categoriesArea.innerHTML = categoryInner;
  }
}

function renderBrands() : void {
  const brandsArea = document.querySelector('.filter__brand_area');
  const brands = products.brands;
  const brandsAll = allProducts.brands;
  let brandsInner = `<div class='brand__container'>`
  
  for (const key in brands) {
    brandsInner += `<label class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_brand' value="${key}" name="${key}" data-param = 'brand' data-quantity="${brands[key].length}">
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity filter__quantity' data-param ="${key}">(${brands[key].length}/</div><span>${brandsAll[key].length})</span>
    </label>`
  }

  brandsInner += `</div>`;
  if (brandsArea) {
    brandsArea.innerHTML = brandsInner;
  }
}

export function tickCheckboxes() {  
  if(filter.brand.length > 0) {
    const brandCheckboxs = document.querySelectorAll(".filter__checkbox_brand");
    brandCheckboxs.forEach(item => {
      for (let i =0; i < filter.brand.length; i++) {
        if ((item as HTMLInputElement).value == filter.brand[i]) {
          (item as HTMLInputElement).checked = true;
        }
      }
    })

  }
  if(filter.category.length > 0) {
    const brandCheckboxs = document.querySelectorAll(".filter__checkbox_category");
    brandCheckboxs.forEach(item => {
      for (let i =0; i < filter.category.length; i++) {
        if ((item as HTMLInputElement).value == filter.category[i]) {
          (item as HTMLInputElement).checked = true;
        }
      }
    })
  }
}

function addFilterParams() {
  const checkboxs = document.querySelectorAll('.filter__checkbox');
  checkboxs.forEach(checkbox => {
    checkbox.addEventListener('click', e => {
      changeFilters(e);
    })
  })
}

function addEvents() {
  const buttonReset = document.querySelector('.filter__button_reset');
  buttonReset?.addEventListener('click', resetFilters);
  const buttonSave = document.querySelector('.filter__button_save');
  buttonSave?.addEventListener('click', () => {
    saveUrl();
    changeSaveButton();
  });
}

export interface IselectedFilters {
  category: string[];
  brand: string[];
  price: { min: number | null; max: number | null; };
  stock: { min: number | null; max: number | null; };
  stringSearch: string;
}

const filterNull: IselectedFilters = {
  category : [],
  brand : [],
  price : {min: null, max : null},
  stock : {min: null, max : null},
  stringSearch: "",
}

let filter: IselectedFilters = {
  category : [],
  brand : [],
  price : {min: null, max : null},
  stock : {min: null, max : null},
  stringSearch: "",
}

export function changeFilters(event: Event) : void {
  const param : string | undefined = (event.currentTarget as HTMLElement).dataset.param;
  const newFilter: string | number = (event.currentTarget as HTMLInputElement).value;
  const side = (event.currentTarget as HTMLElement).dataset.side;
  if (param) {
    if (param === "price" || param === "stock") {
      if (side !== undefined) {
        if (side === 'min') {
          (filter[param as keyof IselectedFilters]as unknown as { min: number | null; max: number | null;}).min = Number(newFilter);
        }
        else {
          (filter[param as keyof IselectedFilters]as unknown as { min: number | null; max: number | null;}).max = Number(newFilter);
        }
      }
    }
    else if (param === "search") {
      filter.stringSearch = newFilter;
    }
    else {
      if ((filter[param as keyof IselectedFilters] as unknown as string[]).indexOf(newFilter) !== -1) {
        const ind = (filter[param as keyof IselectedFilters] as unknown as string[]).indexOf(newFilter);
        (filter[param as keyof IselectedFilters] as unknown as string[]).splice(ind, 1)
      }
      else {
        (filter[param as keyof IselectedFilters] as unknown as string[]).push(newFilter);
      }
    }
  }
  if (param) {
    runFiltration(param);
  }
  if(param === "price" || param === "stock") {
    insertParam(`${param}-${side}`, newFilter);
  }
  else {
    insertParam(param, newFilter);
  }
}

function runFiltration(prop: string | null) {
  const filterDownloaded = new Filter;
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
  if(filter.price.min !== null) {
    filterDownloaded.setPrice("min", filter.price.min)
  }
  if(filter.price.max !== null) {
    filterDownloaded.setPrice("max", filter.price.max)
  }
  if(filter.stock.min !== null) {
    filterDownloaded.setStock("min", filter.stock.min)
  }
  if(filter.stock.max !== null) {
    filterDownloaded.setStock("max", filter.stock.max)
  }
  if(filter.stringSearch !== "") {
    filterDownloaded.setStringSearch(filter.stringSearch)
  }
  products.applyFilter(filterDownloaded);
  if (prop === 'price') {
    changeStockRange();
  }
  else if (prop === 'stock') {
    changePriceRange();
  }
  else {
    changeRange();
  }
  renderGoods();
  rerenderGoodsQuantity();
  renderGoodsQuantity();
}

export function changeMainFilter(filt: IselectedFilters) {
  filter = filt;
  runFiltration(null);
}

function rerenderGoodsQuantity() {
  const quantityAreaBrands = document.querySelectorAll('.brand__quantity');
  const filteredBrands: string[] = [];
  for (const key in products.brands) {
    filteredBrands.push(key)
  }

  quantityAreaBrands.forEach(item => {
    if (filteredBrands.includes((item as HTMLElement).dataset.param as string)) {
      for (const key in products.brands) {
        if (key == (item as HTMLElement).dataset.param) {
          item.innerHTML = `(${products.brands[key].length}/`;
        }
      }
    }
    else {
      item.innerHTML = '(0/';
    }
  })

  const quantityAreaCategory = document.querySelectorAll('.category__quantity');
  const filteredCategories: string[] = [];
  for (const key in products.categories) {
    filteredCategories.push(key)
  }

  quantityAreaCategory.forEach(item => {
    if (filteredCategories.includes((item as HTMLElement).dataset.param as string)) {
      for (const key in products.categories) {
        if (key == (item as HTMLElement).dataset.param) {
          item.innerHTML = `(${products.categories[key].length}/`;
        }
      }
    }
    else {
      item.innerHTML = '(0/';
    }
  })
}

function resetFilters() {
  const checkboxs = document.querySelectorAll('.filter__checkbox');
  checkboxs.forEach(item => {
    (item as HTMLInputElement).checked = false;
  });
  filter = filterNull;
  runFiltration(null);
  document.location.search = "";
}

function saveUrl() {
  const url = document.location.href;
  
  const copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = url;
 
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
  // navigator.clipboard.writeText(url)
  // .then(() => {
  // })
  // .catch(err => {
  //   console.log('Something went wrong', err);
  // });
}

function changeSaveButton() {
  const button = document.querySelector(".filter__button_save");
  if (!button) return;
    button.innerHTML = "Saved";
    setTimeout(() => {
      button.innerHTML = "Save filters";
    }, 2000);
}

export function renderFilters() {
  renderCategories();
  renderBrands();
  addFilterParams();
  addEvents();
}

