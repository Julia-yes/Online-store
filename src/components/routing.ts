import {renderErrorPage} from './error-page';
import {renderCartPage} from './cart-page';
import {renderProductPage} from './product-page';
import {renderStorePage} from './store-page';


const routes : { [key: string]: () => void } = {
  '/' : renderStorePage,
  '/product' : renderProductPage,
  '/cart' : renderCartPage,
  'error' : renderErrorPage,
};

export const handleLocation = async() => {
  const path : string = window.location.pathname;
  const route = routes[path] || routes.error;
  route();
}

const buttons = document.querySelectorAll(".list__item");
buttons.forEach((element) => {
  element.addEventListener('click', (e) => {
    const path: string = (e.target as HTMLAnchorElement).href;
    e = e || window.event;
    e.preventDefault();
    history.pushState({}, '', path);
    handleLocation();
  })
})

window.onpopstate = handleLocation;
