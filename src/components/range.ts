
import products from '../scripts/data-parser';
import {data} from '../assets/data/data';
import {changeFilters} from './filterItem';
let priceMin = 0;
let priceMax = 0;
let stockMin = 0;
let stockMax = 0;

export function fillValues() {
  let pro = products.getProducts(data.products);
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

function addRangeFunctionality(prop: string): void {
  const fromSlider: HTMLInputElement | null = document.querySelector(`#fromSlider${prop}`);
  const toSlider: HTMLInputElement | null = document.querySelector(`#toSlider${prop}`);
  const fromInput: HTMLInputElement | null = document.querySelector(`#fromInput${prop}`);
  const toInput: HTMLInputElement | null = document.querySelector(`#toInput${prop}`);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#bb1b23', toSlider);
  setToggleAccessible(toSlider);

  if (fromSlider && toSlider && fromInput && toInput) {
    (fromSlider as HTMLInputElement).oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
    (toSlider as HTMLInputElement).oninput = () => controlToSlider(fromSlider, toSlider, toInput);
    (fromInput as HTMLInputElement).oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    (toInput as HTMLInputElement).oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
  }



  function controlFromInput(fromSlider: HTMLInputElement , fromInput: HTMLInputElement , toInput: HTMLInputElement , controlSlider: HTMLInputElement ): void {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#bb1b23', controlSlider);
    if (from > to) {
        fromSlider.value = String(to);
        fromInput.value = String(to);
    } else {
        fromSlider.value = String(from);
    }
  }
    
  function controlToInput(toSlider: HTMLInputElement, fromInput: HTMLInputElement, toInput: HTMLInputElement, controlSlider: HTMLInputElement) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#bb1b23', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = String(to);
        toInput.value = String(to);
    } else {
        toInput.value = String(from);
    }
  }

  function controlFromSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, fromInput: HTMLInputElement) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#bb1b23', toSlider);
  if (from > to) {
    fromSlider.value = String(to);
    fromInput.value = String(to);
  } else {
    fromInput.value = String(from);
  }
  }

  function controlToSlider(fromSlider: HTMLInputElement, toSlider: HTMLInputElement, toInput: HTMLInputElement) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, '#C6C6C6', '#bb1b23', toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = String(to);
    toInput.value = String(to);
  } else {
    toInput.value = String(from);
    toSlider.value = String(from);
  }
  }

  function getParsed(currentFrom: HTMLInputElement, currentTo: HTMLInputElement) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
  }

  function fillSlider(from: HTMLInputElement | null, to: HTMLInputElement | null, sliderColor:string, rangeColor: string, controlSlider: HTMLInputElement | null) {
    if (from && to && controlSlider) {
      const rangeDistance = Number(to.max)-Number(to.min);
      const fromPosition = Number(from.value) - Number(to.min);
      const toPosition = Number(to.value) - Number(to.min);
      controlSlider.style.background = `linear-gradient(
        to right,
        ${sliderColor} 0%,
        ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
        ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
        ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
        ${sliderColor} 100%)`;
    }
  }

  function setToggleAccessible(currentTarget: HTMLInputElement|null) {
    const toSlider = document.querySelector(`#toSlider${prop}`);
    if (currentTarget && Number(currentTarget.value) <= 0 && toSlider) {
      (toSlider as HTMLElement).style.zIndex = String(2);
    } else {
      if (toSlider) {
        (toSlider as HTMLElement).style.zIndex = String(0);
      }
    }
  }
}

export function changePriceRange() {
  renderRange("price", products.priceRange.min, products.priceRange.max);
  //addRangeFunctionality("price");
}

export function changeStockRange() {
  renderRange("stock", products.stockRange.min, products.stockRange.max);
  //addRangeFunctionality("stock");
}

export function changeRange() {
  changePriceRange();
  changeStockRange();
}
