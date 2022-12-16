import {handleLocation} from './routing';

const templateArea = document.querySelector(".store__project");

function renderTemplate() : void {
  if (templateArea) {
    templateArea.innerHTML = `
    <div class = 'wrapper'>
      <header class = 'header'>Header
        <a href='/'>Logo</a>
        <a href='/cart'>Cart</a>
      </header>
      <main class = 'main'>Main
        <a href='/product'>Product</a>
      </main>
      <footer class = 'footer'>Footer</footer>
    </div>`
  }
}

function initProject() : void {
  renderTemplate();
  handleLocation();
}

initProject()