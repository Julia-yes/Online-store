const errorArea = document.querySelector(".store__project");

function renderErrorPage() : void {
  if (errorArea) {
    errorArea.innerHTML = `<div class='error__block'>PAGE NOT FOUND (404)</div>`
  }
}

renderErrorPage()