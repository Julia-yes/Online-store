const errorArea = document.querySelector(".main");
console.log(errorArea)

function renderErrorPage() : void {
  if (errorArea) {
    errorArea.innerHTML = `<div class='error__block'>PAGE NOT FOUND (404)</div>`
  }
}

renderErrorPage()