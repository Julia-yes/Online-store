const templateArea = document.querySelector(".store__project");

function renderTemplate() : void {
  if (templateArea) {
    templateArea.innerHTML = `
    <div class = 'wrapper'>
      <header class = 'header'>Header</header>
      <main class = 'main'>Main</main>
      <footer class = 'footer'>Footer</footer>
    </div>`
  }
}

renderTemplate()