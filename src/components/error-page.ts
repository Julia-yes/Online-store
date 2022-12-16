export function renderErrorPage() : void {
  const errorArea = document.querySelector(".main");
  console.log(errorArea)
  if (errorArea) {
    console.log("!!!")
    errorArea.innerHTML = `<div class='error__block'>PAGE NOT FOUND (404)</div>`
  }
}