import {handleLocation, parseUrl} from './routing';
import {renderGoods} from './goods';
import {renderFilters} from './filterItem';
import {changeRange, fillValues} from "./range";
import {addListenerForSearch} from './search';
import {addListenerSortingButtons} from "./sorting";
import {addListenerForView} from './view';
import {renderHeader, fillCart} from './header';
import {renderFooter} from "./footer";


const templateArea = document.querySelector(".store__project");

function renderTemplate() : void {
  if (templateArea) {
    templateArea.innerHTML = `
    <div class = 'wrapper__main'>
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
  renderGoods();
  renderFilters();
  fillValues();
  changeRange();
  parseUrl();
  addListenerSortingButtons();
  addListenerForView();
  renderHeader();
  renderFooter();
  addListenerForSearch();
  fillCart()
  
}

initProject()