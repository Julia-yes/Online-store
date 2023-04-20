export function renderErrorPage() : void {
  const errorArea = document.querySelector(".main");
  if (errorArea) {
    errorArea.innerHTML = `<div class='error__block'>PAGE NOT FOUND (404)</div>`
  }
}