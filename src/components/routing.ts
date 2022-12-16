const root = document.querySelector('.store__project');
if (root) {
  root.innerHTML = `<ul class='list'>
  <li class='list__item'><a href='/'>Home</a></li>
  <li class='list__item'><a href='/product'>Product card</a></li>
  <li class='list__item'><a href='/cart'>Cart</a></li>
  </ul>
  <div class='page__content'></div>`
}

const routes : { [key: string]: () => void } = {
  '/' : renderHome,
  '/product' : renderProductPage,
  '/cart' : renderCart,
  'error' : renderError,
};

const handleLocation = async() => {
  const path : string = window.location.pathname;
  const route = routes[path] || routes.error;
  route();
}

const buttons = document.querySelectorAll(".list__item");
buttons.forEach((element) => {
  element.addEventListener('click', (e) => {
    const path: string = (e.target as HTMLAnchorElement).href;
    console.log(path);
    e = e || window.event;
    e.preventDefault();
    history.pushState({}, '', path);
    handleLocation();
  })
})

function renderHome() : void {
  const content = document.querySelector('.page__content');
  if (content) {
    content.innerHTML = "Home"
  }  
}

function renderProductPage() : void {
  const content = document.querySelector('.page__content');
  if (content) {
    content.innerHTML = "Product"
  }  
}

function renderCart() : void {
  const content = document.querySelector('.page__content');
  if (content) {
    content.innerHTML = "Cart"
  }  
}

function renderError() : void {
  const content = document.querySelector('.page__content');
  if (content) {
    content.innerHTML = "Error"
  }
}

window.onpopstate = handleLocation;
handleLocation();
