function renderRange(): void {
  const rangePlace = document.querySelector(".filter__range");
  if (rangePlace) {
    rangePlace.innerHTML = `<div class="range_container">
    <div class="sliders_control">
        <input id="fromSlider" type="range" value="10" min="0" max="100"/>
        <input id="toSlider" type="range" value="40" min="0" max="100"/>
    </div>
    <div class="form_control">
        <div class="form_control_container">
            <input class="form_control_container__time__input" type="number" id="fromInput" value="10" min="0" max="100"/>
        </div>
        <div class="form_control_container">
            <input class="form_control_container__time__input" type="number" id="toInput" value="40" min="0" max="100"/>
        </div>
    </div>
</div>`
  }
  
}

renderRange();

const fromSlider: HTMLInputElement | null = document.querySelector('#fromSlider');
const toSlider: HTMLInputElement | null = document.querySelector('#toSlider');
const fromInput: HTMLInputElement | null = document.querySelector('#fromInput');
const toInput: HTMLInputElement | null = document.querySelector('#toInput');
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
  const toSlider = document.querySelector('#toSlider');
  if (currentTarget && Number(currentTarget.value) <= 0 && toSlider) {
    (toSlider as HTMLElement).style.zIndex = String(2);
  } else {
    if (toSlider) {
      (toSlider as HTMLElement).style.zIndex = String(0);
    }
  }
}

