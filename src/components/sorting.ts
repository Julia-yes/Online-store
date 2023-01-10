import products from "../scripts/data-parser";
import {renderGoods} from "./goods";
import {insertParam} from './routing'

export function addListenerSortingButtons() {
  const buttonSort = document.querySelectorAll('.sorters__button');
  buttonSort.forEach(button => {
    button.addEventListener('click', (e) => {
      sortGoods(e);
      changeActiveButton(e);
      insertParam("sort", `${(e.currentTarget as HTMLElement).dataset.option  as string}-${(e.currentTarget as HTMLElement).dataset.direction  as string}` );
    })
  })
}

function changeActiveButton(event: Event) {
  const buttonSort = document.querySelectorAll('.sorters__button');
  buttonSort.forEach(button => {
    button.classList.remove("sorters__button_active")
  });
  (event.currentTarget as HTMLElement).classList.add("sorters__button_active")
}

function sortGoods(event?: Event, opt?: string, dir?: string) {
  const option = event? (event.currentTarget as HTMLElement).dataset.option : opt;
  const direction = event? (event.currentTarget as HTMLElement).dataset.direction : dir;
  if (option == "price") {
    if (direction == "min") {
      products.products.sort(function(el1, el2) {
        return el2.price - el1.price
      })
    }
    if (direction == "max") {
      products.products.sort(function(el1, el2) {
        return el1.price - el2.price
      })
    }
  }
  else {
    if (direction == "min") {
      products.products.sort(function(el1, el2) {
        return el2.rating - el1.rating
      })
    }
    if (direction == "max") {
      products.products.sort(function(el1, el2) {
        return el1.rating - el2.rating
      })
    }
  }
  renderGoods()
}

export function makeSorting(prop: string) {
  const arr = prop.split('-');
  sortGoods(undefined, arr[0], arr[1]);
  const activeButton = document.querySelector(`[data-option="${arr[0]}"][data-direction="${arr[1]}"]`);
  activeButton?.classList.add("sorters__button_active");
}