import {changeFilters} from "./filterItem";

export function addListenerForSearch() {
  const searchInput = document.querySelector('.search__input');
  searchInput?.addEventListener('input', (e) => {
    changeFilters(e)
  })
}

export function fillInput(prop: string) {
  const searchInput = document.querySelector(".search__input");
  if (searchInput)
  (searchInput as HTMLInputElement).value = prop
}
