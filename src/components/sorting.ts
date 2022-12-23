import products from "../scripts/data-parser";
import {renderGoods} from "./goods";

function addListenerSortingButtons() {
  const buttonSort = document.querySelectorAll('.sorters__button');
  buttonSort.forEach(button => {
    button.addEventListener('click', (e) => {
      sortGoods(e);
      changeActiveButton(e)})
  })
}

function changeActiveButton(event: Event) {
  const buttonSort = document.querySelectorAll('.sorters__button');
  buttonSort.forEach(button => {
    button.classList.remove("sorters__button_active")
  });
  (event.currentTarget as HTMLElement).classList.add("sorters__button_active")
}

function sortGoods(event: Event) {
  let option = (event.currentTarget as HTMLElement).dataset.option;
  let direction = (event.currentTarget as HTMLElement).dataset.direction;
  console.log(option, direction)
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


addListenerSortingButtons()