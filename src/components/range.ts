import products from '../scripts/data-parser';
import {data} from '../assets/data/data';
import {changeFilters} from './filterItem';

let priceMin = 0;
let priceMax = 0;
let stockMin = 0;
let stockMax = 0;

export function fillValues() {
  const pro = products.getProducts(data.products);
  pro.sort(function(el1, el2) {
    return el1.price - el2.price
  })
  priceMax = pro[pro.length -1].price;
  priceMin = pro[0].price;
  pro.sort(function(el1, el2) {
    return el1.stock - el2.stock
  })
  stockMin = pro[0].stock;
  stockMax = pro[pro.length -1].stock;
}

function renderRange(prop: string, minValue: number, maxValue: number): void {
  let min = 0;
  let max = 0;
  if (prop == "price") {
    min = priceMin;
    max = priceMax;
  }
  else {
    min = stockMin;
    max = stockMax;
  }
  if (minValue == -1 || maxValue == -1) {
    minValue = min;
    maxValue = max;
  }
  const rangePlace = document.querySelector(`.filter__range_${prop}`);
  if (rangePlace) {
    let rangeInner = `<div class="range__container range">
      <div class="range__control_sliders">
          <input class = "range__input range__input_${prop} range__input_min" id="fromSlider${prop}" type="range" value="${minValue}" min="${min}" max="${max}" data-param="${prop}" data-side ="min"/>
          <input class = "range__input range__input_${prop} range__input_max" id="toSlider${prop}" type="range" value="${maxValue}" min="${min}" max="${max}" data-param="${prop}" data-side ="max"/>
      </div>`
      if (products.products.length > 0) {
        rangeInner += `<div class="range__control_form">
          <div class="form_control_container">
              <input class="range__input_number range__${prop}" type="number" id="fromInput${prop}" value="${minValue}" min="${min}" max=${max}/>&#36;
          </div>
          <div class="form_control_container">
              <input class="range__input_number range__${prop}" type="number" id="toInput${prop}" value="${maxValue}" min="${min}" max=${max}/>&#36;
          </div>
      </div>`
      }
      else {
        rangeInner += `<div class="range__empty">No products found</div>`
      }
      rangeInner += `</div>`;
    rangePlace.innerHTML = rangeInner;
  }
  const range = document.querySelectorAll('.range__input');
  range.forEach(item => {
    item.addEventListener('change', e => {
      changeFilters(e);
      changeRangeValue(prop);
    })
  })
}

function changeRangeValue(prop:string) {
  const rangeValues = document.querySelectorAll(`.range__${prop}`);
  const rangeInputs = document.querySelectorAll(`.range__input_${prop}`);
  for (let i =0; i < rangeValues.length; i++) {
    (rangeValues[0] as HTMLInputElement).value = (rangeInputs[0] as HTMLInputElement).value;
    (rangeValues[1] as HTMLInputElement).value = (rangeInputs[1] as HTMLInputElement).value;
  }
}

export function changePriceRange() {
  renderRange("price", products.priceRange.min, products.priceRange.max);
}

export function changeStockRange() {
  renderRange("stock", products.stockRange.min, products.stockRange.max);
}

export function changeRange() {
  changePriceRange();
  changeStockRange();
}
