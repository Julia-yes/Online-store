/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/cart-page.ts":
/*!*************************************!*\
  !*** ./src/components/cart-page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCartPage": () => (/* binding */ renderCartPage)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _scripts_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/filter */ "./src/scripts/filter.ts");


function renderCartPage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = "Cart";
        console.log(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"]);
        const filter = new _scripts_filter__WEBPACK_IMPORTED_MODULE_1__["default"]();
        filter.switchBrand('Apple');
        filter.switchBrand('Samsung');
        _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].applyFilter(filter);
        console.log(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"]);
        // filter.setStock('max', 51);
        // products.applyFilter(filter);
        // console.log(products);
        content.innerHTML = "Cart";
    }
}


/***/ }),

/***/ "./src/components/error-page.ts":
/*!**************************************!*\
  !*** ./src/components/error-page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderErrorPage": () => (/* binding */ renderErrorPage)
/* harmony export */ });
function renderErrorPage() {
    const errorArea = document.querySelector(".main");
    if (errorArea) {
        errorArea.innerHTML = `<div class='error__block'>PAGE NOT FOUND (404)</div>`;
    }
}


/***/ }),

/***/ "./src/components/filterItem.ts":
/*!**************************************!*\
  !*** ./src/components/filterItem.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _scripts_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/filter */ "./src/scripts/filter.ts");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods */ "./src/components/goods.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-page */ "./src/components/store-page.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store_page__WEBPACK_IMPORTED_MODULE_3__);




function renderCategories() {
    const categoriesArea = document.querySelector('.filter__category_area');
    const categories = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].categories;
    let categoryInner = `<div class='category__container'>`;
    for (let key in categories) {
        categoryInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox' value="${key}" data-param = 'category'>
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity' data-param ="${key}">(${categories[key].length})</div>
    </div>`;
    }
    categoryInner += `</div>`;
    if (categoriesArea) {
        categoriesArea.innerHTML = categoryInner;
    }
}
function renderBrands() {
    const brandsArea = document.querySelector('.filter__brand_area');
    const brands = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].brands;
    let brandsInner = `<div class='brand__container'>`;
    for (let key in brands) {
        brandsInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox' value="${key}" data-param = 'brand'>
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity' data-param ="${key}">(${brands[key].length})</div>
    </div>`;
    }
    brandsInner += `</div>`;
    if (brandsArea) {
        brandsArea.innerHTML = brandsInner;
    }
}
function addFilterParams() {
    const checkboxs = document.querySelectorAll('.filter__checkbox');
    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('click', e => { changeFilters(e); });
    });
}
function addEvents() {
    const buttonReset = document.querySelector('.filter__button_reset');
    buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener('click', resetFilters);
}
const filterNull = {
    category: [],
    brand: [],
    price: { min: null, max: null },
    stock: { min: null, max: null },
};
let filter = {
    category: [],
    brand: [],
    price: { min: null, max: null },
    stock: { min: null, max: null },
};
function changeFilters(event) {
    let param = event.currentTarget.dataset.param;
    let newFilter = event.currentTarget.value;
    if (param) {
        if (filter[param].indexOf(newFilter) !== -1) {
            let ind = filter[param].indexOf(newFilter);
            filter[param].splice(ind, 1);
        }
        else {
            filter[param].push(newFilter);
        }
    }
    runFiltration();
}
function runFiltration() {
    let filterDownloaded = new _scripts_filter__WEBPACK_IMPORTED_MODULE_1__["default"];
    if (filter.category.length > 0) {
        filter.category.forEach(item => {
            filterDownloaded.switchCategory(item);
        });
    }
    if (filter.brand.length > 0) {
        filter.brand.forEach(item => {
            filterDownloaded.switchBrand(item);
        });
    }
    _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].applyFilter(filterDownloaded);
    (0,_goods__WEBPACK_IMPORTED_MODULE_2__.renderGoods)();
    rerenderGoodsQuantity();
    (0,_store_page__WEBPACK_IMPORTED_MODULE_3__.renderGoodsQuantity)();
}
function rerenderGoodsQuantity() {
    const quantityAreaBrands = document.querySelectorAll('.brand__quantity');
    const filteredBrands = [];
    for (let key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].brands) {
        filteredBrands.push(key);
    }
    ;
    quantityAreaBrands.forEach(item => {
        if (filteredBrands.includes(item.dataset.param)) {
            for (let key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].brands) {
                if (key == item.dataset.param) {
                    item.innerHTML = `(${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].brands[key].length})`;
                }
            }
        }
        else {
            item.innerHTML = '(0)';
        }
    });
    const quantityAreaCategory = document.querySelectorAll('.category__quantity');
    const filteredCategories = [];
    for (let key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].categories) {
        filteredCategories.push(key);
    }
    ;
    quantityAreaCategory.forEach(item => {
        if (filteredCategories.includes(item.dataset.param)) {
            for (let key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].categories) {
                if (key == item.dataset.param) {
                    item.innerHTML = `(${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].categories[key].length})`;
                }
            }
        }
        else {
            item.innerHTML = '(0)';
        }
    });
}
function resetFilters() {
    const checkboxs = document.querySelectorAll('.filter__checkbox');
    checkboxs.forEach(item => {
        item.checked = false;
    });
    filter = filterNull;
    runFiltration();
}
function renderFilters() {
    renderCategories();
    renderBrands();
    addFilterParams();
    addEvents();
}
renderFilters();


/***/ }),

/***/ "./src/components/goods.ts":
/*!*********************************!*\
  !*** ./src/components/goods.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGoods": () => (/* binding */ renderGoods)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-page */ "./src/components/product-page.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");



function renderGoods() {
    const goodsArea = document.querySelector('.goods__area');
    const goods = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products;
    let goodsInner = `<div class='goods__wrapper'>`;
    for (let key in goods) {
        let good = goods[key];
        goodsInner += `<div class='goods__card card'>
      <div class='card__thumbnail'>
        <img alt='good' class='card__img' src='${good.thumbnail}'>
        <div class='card__discont'>${good.discountPercentage}&#37;</div>
      </div>
      <div class='card__title'>${good.title}</div>
      <div class='card__price'>
        <div class='card__price_new'>${Math.floor(good.price * (100 - good.discountPercentage) / 100)}&#36;</div>
        <div class='card__price_old'>${good.price}&#36;</div>
      </div>
      <div class='card__bottom'>
        <div class='card__rating'>${good.rating}&starf;</div>
        <div class='card__stock'>Stock &#58; &#32; ${good.stock}</div>
      </div>
      <div class='card__buttons'>
        <button class='card__button card__button_add'>Add to cart</button>
        <button class='card__button card__button_more'>See more</button>
      </div>
    </div>`;
    }
    if (goodsArea) {
        goodsArea.innerHTML = goodsInner;
    }
    const buttonsToProduct = document.querySelectorAll('.card__button_more');
    buttonsToProduct.forEach(button => {
        button.addEventListener('click', () => {
            (0,_routing__WEBPACK_IMPORTED_MODULE_2__.addPathUrl)('/product');
            (0,_product_page__WEBPACK_IMPORTED_MODULE_1__.renderProductPage)();
        });
    });
}
renderGoods();


/***/ }),

/***/ "./src/components/main-template.ts":
/*!*****************************************!*\
  !*** ./src/components/main-template.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");

const templateArea = document.querySelector(".store__project");
function renderTemplate() {
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
    </div>`;
    }
}
function initProject() {
    renderTemplate();
    (0,_routing__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();
}
initProject();


/***/ }),

/***/ "./src/components/product-page.ts":
/*!****************************************!*\
  !*** ./src/components/product-page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProductPage": () => (/* binding */ renderProductPage)
/* harmony export */ });
function renderProductPage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = "Product";
    }
}


/***/ }),

/***/ "./src/components/range.ts":
/*!*********************************!*\
  !*** ./src/components/range.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");

function renderRange() {
    const rangePlace = document.querySelector(".filter__range");
    if (rangePlace) {
        rangePlace.innerHTML = `<div class="range__container range">
    <div class="range__control_sliders">
        <input class = "range__input range__input_min" id="fromSlider" type="range" value="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min}" min="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min}" max=${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max}/>
        <input class = "range__input" id="toSlider" type="range" value="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max}" min="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min}" max=${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max}/>
    </div>
    <div class="range__control_form">
        <div class="form_control_container">
            <input class="range__input_number form_control_container__time__input" type="number" id="fromInput" value="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min}" min="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min}" max=${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max}/>
        </div>
        <div class="form_control_container">
            <input class="range__input_number form_control_container__time__input" type="number" id="toInput" value="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max}" min="${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min}" max=${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max}/>
        </div>
    </div>
</div>`;
    }
    let rr = document.querySelector('.range__input_min');
    rr === null || rr === void 0 ? void 0 : rr.addEventListener('oninput', () => { console.log(rr.value); });
}
renderRange();
const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromInput = document.querySelector('#fromInput');
const toInput = document.querySelector('#toInput');
fillSlider(fromSlider, toSlider, '#C6C6C6', '#bb1b23', toSlider);
setToggleAccessible(toSlider);
if (fromSlider && toSlider && fromInput && toInput) {
    fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
    fromInput.oninput = () => controlFromInput(fromSlider, fromInput, toInput, toSlider);
    toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
}
function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#bb1b23', controlSlider);
    if (from > to) {
        fromSlider.value = String(to);
        fromInput.value = String(to);
    }
    else {
        fromSlider.value = String(from);
    }
}
function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, '#C6C6C6', '#bb1b23', controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
        toSlider.value = String(to);
        toInput.value = String(to);
    }
    else {
        toInput.value = String(from);
    }
}
function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#bb1b23', toSlider);
    if (from > to) {
        fromSlider.value = String(to);
        fromInput.value = String(to);
    }
    else {
        fromInput.value = String(from);
    }
}
function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#bb1b23', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = String(to);
        toInput.value = String(to);
    }
    else {
        toInput.value = String(from);
        toSlider.value = String(from);
    }
}
function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
}
function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    if (from && to && controlSlider) {
        const rangeDistance = Number(to.max) - Number(to.min);
        const fromPosition = Number(from.value) - Number(to.min);
        const toPosition = Number(to.value) - Number(to.min);
        controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition) / (rangeDistance) * 100}%,
      ${rangeColor} ${((fromPosition) / (rangeDistance)) * 100}%,
      ${rangeColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition) / (rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
    }
}
function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (currentTarget && Number(currentTarget.value) <= 0 && toSlider) {
        toSlider.style.zIndex = String(2);
    }
    else {
        if (toSlider) {
            toSlider.style.zIndex = String(0);
        }
    }
}


/***/ }),

/***/ "./src/components/routing.ts":
/*!***********************************!*\
  !*** ./src/components/routing.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPathUrl": () => (/* binding */ addPathUrl),
/* harmony export */   "handleLocation": () => (/* binding */ handleLocation)
/* harmony export */ });
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page */ "./src/components/error-page.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-page */ "./src/components/cart-page.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-page */ "./src/components/product-page.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-page */ "./src/components/store-page.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_store_page__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const routes = {
    '/': _store_page__WEBPACK_IMPORTED_MODULE_3__.renderStorePage,
    '/product': _product_page__WEBPACK_IMPORTED_MODULE_2__.renderProductPage,
    '/cart': _cart_page__WEBPACK_IMPORTED_MODULE_1__.renderCartPage,
    'error': _error_page__WEBPACK_IMPORTED_MODULE_0__.renderErrorPage,
};
const handleLocation = () => __awaiter(void 0, void 0, void 0, function* () {
    const path = window.location.pathname;
    const route = routes[path] || routes.error;
    route();
});
function addPathUrl(prop) {
    history.pushState({}, '', prop);
    handleLocation();
}
// const buttons = document.querySelectorAll(".list__item");
// buttons.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     const path: string = (e.target as HTMLAnchorElement).href;
//     e = e || window.event;
//     e.preventDefault();
//   })
// })
window.onpopstate = handleLocation;


/***/ }),

/***/ "./src/components/search.ts":
/*!**********************************!*\
  !*** ./src/components/search.ts ***!
  \**********************************/
/***/ (() => {

"use strict";



/***/ }),

/***/ "./src/components/store-page.ts":
/*!**************************************!*\
  !*** ./src/components/store-page.ts ***!
  \**************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (8:14)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|     content.innerHTML = `\n|             < article;\n>         class {\n|         }\n|         'store__page store' >");

/***/ }),

/***/ "./src/components/view.ts":
/*!********************************!*\
  !*** ./src/components/view.ts ***!
  \********************************/
/***/ (() => {

"use strict";

const buttonsView = document.querySelectorAll('.view__button_img');
buttonsView.forEach(button => { button.addEventListener('click', (event) => { changeView(event); }); });
function changeView(ev) {
    buttonsView.forEach(button => {
        button.classList.remove('view__button_active');
    });
    let activeButton = ev.currentTarget;
    activeButton.classList.add('view__button_active');
    const goodsArea = document.querySelector('.goods__wrapper');
    goodsArea === null || goodsArea === void 0 ? void 0 : goodsArea.classList.toggle('goods__wrapper_many');
}


/***/ }),

/***/ "./src/scripts/data-parser.ts":
/*!************************************!*\
  !*** ./src/scripts/data-parser.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../assets/data/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

class Products {
    constructor(data) {
        this.products = [];
        this.brands = {};
        this.categories = {};
        this.priceRange = {
            min: -1,
            max: -1,
        };
        this.products = this.getProducts(data);
        this.getProductsMetadata();
    }
    getProducts(data) {
        this.products = [];
        data.forEach((el) => {
            this.products.push({
                brand: el.brand,
                category: el.category,
                description: el.description,
                discountPercentage: el.discountPercentage,
                id: el.id,
                images: el.images,
                price: el.price,
                rating: el.rating,
                stock: el.stock,
                thumbnail: el.thumbnail,
                title: el.title
            });
        });
        return this.products;
    }
    getProductsMetadata() {
        for (const product of this.products) {
            if (this.priceRange.min === -1 || this.priceRange.min > product.price)
                this.priceRange.min = product.price;
            if (this.priceRange.min === -1 || this.priceRange.max < product.price)
                this.priceRange.max = product.price;
            if (!(product.brand in this.brands)) {
                this.brands[product.brand] = [product];
            }
            else
                this.brands[product.brand].push(product);
            if (!(product.category in this.categories)) {
                this.categories[product.category] = [product];
            }
            else
                this.categories[product.category].push(product);
        }
    }
    getProductById(id) {
        return this.products[id - 1];
    }
    applyFilter(filter) {
        this.products = this.getProducts(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../assets/data/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        this.brands = {};
        this.categories = {};
        this.priceRange = {
            min: -1,
            max: -1,
        };
        for (let ind = 0; ind < this.products.length; ind++) {
            const el = this.products[ind];
            const removeItem = () => {
                this.products.splice(ind, 1);
                ind--;
            };
            if (filter.category.length) {
                if (!(filter.category.includes(el.category))) {
                    removeItem();
                    continue;
                }
            }
            if (filter.brand.length) {
                if (!(filter.brand.includes(el.brand))) {
                    removeItem();
                    continue;
                }
            }
            if (filter.price.min !== -1 && el.price < filter.price.min) {
                removeItem();
                continue;
            }
            if (filter.price.max !== -1 && el.price > filter.price.max) {
                removeItem();
                continue;
            }
            if (filter.stock.min !== -1 && el.stock < filter.stock.min) {
                removeItem();
                continue;
            }
            if (filter.stock.max !== -1 && el.stock > filter.stock.max) {
                removeItem();
                continue;
            }
        }
        this.getProductsMetadata();
    }
}
const products = new Products(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../assets/data/data'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);


/***/ }),

/***/ "./src/scripts/filter.ts":
/*!*******************************!*\
  !*** ./src/scripts/filter.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Filter {
    constructor() {
        this.category = [];
        this.brand = [];
        this.price = {
            min: -1,
            max: -1,
        };
        this.stock = {
            min: -1,
            max: -1,
        };
    }
    switchCategory(item) {
        if (this.category.includes(item))
            this.category = this.category.filter(el => el !== item);
        else
            this.category.push(item);
    }
    switchBrand(item) {
        if (this.brand.includes(item))
            this.brand = this.brand.filter(el => el !== item);
        else
            this.brand.push(item);
    }
    setPrice(parameter, value) {
        if (parameter === 'min')
            this.price.min = value;
        else
            this.price.max = value;
    }
    setStock(parameter, value) {
        if (parameter === 'min')
            this.stock.min = value;
        else
            this.stock.max = value;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filter);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/routing */ "./src/components/routing.ts");
/* harmony import */ var _components_main_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-template */ "./src/components/main-template.ts");
/* harmony import */ var _components_store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/store-page */ "./src/components/store-page.ts");
/* harmony import */ var _components_store_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_store_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_error_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error-page */ "./src/components/error-page.ts");
/* harmony import */ var _components_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart-page */ "./src/components/cart-page.ts");
/* harmony import */ var _components_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-page */ "./src/components/product-page.ts");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/range */ "./src/components/range.ts");
/* harmony import */ var _components_filterItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _components_goods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/goods */ "./src/components/goods.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/view */ "./src/components/view.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_view__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search */ "./src/components/search.ts");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_search__WEBPACK_IMPORTED_MODULE_11__);













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNRO0FBQ007QUFDSDtBQUNBO0FBQ0Q7QUFDRztBQUNQO0FBQ0s7QUFDTDtBQUNEO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXguc2Nzcz9jZjBhIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9lcnJvci1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlckl0ZW0udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcm91dGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9kYXRhLXBhcnNlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vc2NyaXB0cy9maWx0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhcnRQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJDYXJ0XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAgICAgICBmaWx0ZXIuc3dpdGNoQnJhbmQoJ0FwcGxlJyk7XHJcbiAgICAgICAgZmlsdGVyLnN3aXRjaEJyYW5kKCdTYW1zdW5nJyk7XHJcbiAgICAgICAgcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICAgICAgLy8gZmlsdGVyLnNldFN0b2NrKCdtYXgnLCA1MSk7XHJcbiAgICAgICAgLy8gcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIkNhcnRcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRXJyb3JQYWdlKCkge1xyXG4gICAgY29uc3QgZXJyb3JBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgaWYgKGVycm9yQXJlYSkge1xyXG4gICAgICAgIGVycm9yQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nZXJyb3JfX2Jsb2NrJz5QQUdFIE5PVCBGT1VORCAoNDA0KTwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3NjcmlwdHMvZmlsdGVyJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHNRdWFudGl0eSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XHJcbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXMoKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2NhdGVnb3J5X2FyZWEnKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBwcm9kdWN0cy5jYXRlZ29yaWVzO1xyXG4gICAgbGV0IGNhdGVnb3J5SW5uZXIgPSBgPGRpdiBjbGFzcz0nY2F0ZWdvcnlfX2NvbnRhaW5lcic+YDtcclxuICAgIGZvciAobGV0IGtleSBpbiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlJbm5lciArPSBgPGRpdiBjbGFzcz0nZmlsdGVyX19zdHJpbmcnPlxyXG4gICAgICA8aW5wdXQgdHlwZSA9ICdjaGVja2JveCcgY2xhc3M9J2ZpbHRlcl9fY2hlY2tib3gnIHZhbHVlPVwiJHtrZXl9XCIgZGF0YS1wYXJhbSA9ICdjYXRlZ29yeSc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X190aXRsZSc+JHtrZXl9JmVuc3A7PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X19xdWFudGl0eScgZGF0YS1wYXJhbSA9XCIke2tleX1cIj4oJHtjYXRlZ29yaWVzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBjYXRlZ29yeUlubmVyICs9IGA8L2Rpdj5gO1xyXG4gICAgaWYgKGNhdGVnb3JpZXNBcmVhKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc0FyZWEuaW5uZXJIVE1MID0gY2F0ZWdvcnlJbm5lcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW5kZXJCcmFuZHMoKSB7XHJcbiAgICBjb25zdCBicmFuZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnJhbmRfYXJlYScpO1xyXG4gICAgY29uc3QgYnJhbmRzID0gcHJvZHVjdHMuYnJhbmRzO1xyXG4gICAgbGV0IGJyYW5kc0lubmVyID0gYDxkaXYgY2xhc3M9J2JyYW5kX19jb250YWluZXInPmA7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYnJhbmRzKSB7XHJcbiAgICAgICAgYnJhbmRzSW5uZXIgKz0gYDxkaXYgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94JyB2YWx1ZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnYnJhbmQnPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fcXVhbnRpdHknIGRhdGEtcGFyYW0gPVwiJHtrZXl9XCI+KCR7YnJhbmRzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBicmFuZHNJbm5lciArPSBgPC9kaXY+YDtcclxuICAgIGlmIChicmFuZHNBcmVhKSB7XHJcbiAgICAgICAgYnJhbmRzQXJlYS5pbm5lckhUTUwgPSBicmFuZHNJbm5lcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRGaWx0ZXJQYXJhbXMoKSB7XHJcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19jaGVja2JveCcpO1xyXG4gICAgY2hlY2tib3hzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7IGNoYW5nZUZpbHRlcnMoZSk7IH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG4gICAgY29uc3QgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idXR0b25fcmVzZXQnKTtcclxuICAgIGJ1dHRvblJlc2V0ID09PSBudWxsIHx8IGJ1dHRvblJlc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0RmlsdGVycyk7XHJcbn1cclxuY29uc3QgZmlsdGVyTnVsbCA9IHtcclxuICAgIGNhdGVnb3J5OiBbXSxcclxuICAgIGJyYW5kOiBbXSxcclxuICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG59O1xyXG5sZXQgZmlsdGVyID0ge1xyXG4gICAgY2F0ZWdvcnk6IFtdLFxyXG4gICAgYnJhbmQ6IFtdLFxyXG4gICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgIHN0b2NrOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbn07XHJcbmZ1bmN0aW9uIGNoYW5nZUZpbHRlcnMoZXZlbnQpIHtcclxuICAgIGxldCBwYXJhbSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5wYXJhbTtcclxuICAgIGxldCBuZXdGaWx0ZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgaWYgKGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgaW5kID0gZmlsdGVyW3BhcmFtXS5pbmRleE9mKG5ld0ZpbHRlcik7XHJcbiAgICAgICAgICAgIGZpbHRlcltwYXJhbV0uc3BsaWNlKGluZCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLnB1c2gobmV3RmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBydW5GaWx0cmF0aW9uKCk7XHJcbn1cclxuZnVuY3Rpb24gcnVuRmlsdHJhdGlvbigpIHtcclxuICAgIGxldCBmaWx0ZXJEb3dubG9hZGVkID0gbmV3IEZpbHRlcjtcclxuICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlci5jYXRlZ29yeS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaENhdGVnb3J5KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyLmJyYW5kLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGZpbHRlckRvd25sb2FkZWQuc3dpdGNoQnJhbmQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm9kdWN0cy5hcHBseUZpbHRlcihmaWx0ZXJEb3dubG9hZGVkKTtcclxuICAgIHJlbmRlckdvb2RzKCk7XHJcbiAgICByZXJlbmRlckdvb2RzUXVhbnRpdHkoKTtcclxuICAgIHJlbmRlckdvb2RzUXVhbnRpdHkoKTtcclxufVxyXG5mdW5jdGlvbiByZXJlbmRlckdvb2RzUXVhbnRpdHkoKSB7XHJcbiAgICBjb25zdCBxdWFudGl0eUFyZWFCcmFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEJyYW5kcyA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmJyYW5kcykge1xyXG4gICAgICAgIGZpbHRlcmVkQnJhbmRzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHF1YW50aXR5QXJlYUJyYW5kcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZEJyYW5kcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgKCR7cHJvZHVjdHMuYnJhbmRzW2tleV0ubGVuZ3RofSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMCknO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRDYXRlZ29yaWVzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHF1YW50aXR5QXJlYUNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGl0ZW0uZGF0YXNldC5wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCgke3Byb2R1Y3RzLmNhdGVnb3JpZXNba2V5XS5sZW5ndGh9KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gJygwKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fY2hlY2tib3gnKTtcclxuICAgIGNoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBmaWx0ZXIgPSBmaWx0ZXJOdWxsO1xyXG4gICAgcnVuRmlsdHJhdGlvbigpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckZpbHRlcnMoKSB7XHJcbiAgICByZW5kZXJDYXRlZ29yaWVzKCk7XHJcbiAgICByZW5kZXJCcmFuZHMoKTtcclxuICAgIGFkZEZpbHRlclBhcmFtcygpO1xyXG4gICAgYWRkRXZlbnRzKCk7XHJcbn1cclxucmVuZGVyRmlsdGVycygpO1xyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vc2NyaXB0cy9kYXRhLXBhcnNlcic7XHJcbmltcG9ydCB7IHJlbmRlclByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgeyBhZGRQYXRoVXJsIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdvb2RzKCkge1xyXG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XHJcbiAgICBjb25zdCBnb29kcyA9IHByb2R1Y3RzLnByb2R1Y3RzO1xyXG4gICAgbGV0IGdvb2RzSW5uZXIgPSBgPGRpdiBjbGFzcz0nZ29vZHNfX3dyYXBwZXInPmA7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gZ29vZHMpIHtcclxuICAgICAgICBsZXQgZ29vZCA9IGdvb2RzW2tleV07XHJcbiAgICAgICAgZ29vZHNJbm5lciArPSBgPGRpdiBjbGFzcz0nZ29vZHNfX2NhcmQgY2FyZCc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3RodW1ibmFpbCc+XHJcbiAgICAgICAgPGltZyBhbHQ9J2dvb2QnIGNsYXNzPSdjYXJkX19pbWcnIHNyYz0nJHtnb29kLnRodW1ibmFpbH0nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2Rpc2NvbnQnPiR7Z29vZC5kaXNjb3VudFBlcmNlbnRhZ2V9JiMzNzs8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3RpdGxlJz4ke2dvb2QudGl0bGV9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZV9uZXcnPiR7TWF0aC5mbG9vcihnb29kLnByaWNlICogKDEwMCAtIGdvb2QuZGlzY291bnRQZXJjZW50YWdlKSAvIDEwMCl9JiMzNjs8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZV9vbGQnPiR7Z29vZC5wcmljZX0mIzM2OzwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fYm90dG9tJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19yYXRpbmcnPiR7Z29vZC5yYXRpbmd9JnN0YXJmOzwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3N0b2NrJz5TdG9jayAmIzU4OyAmIzMyOyAke2dvb2Quc3RvY2t9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXJkX19idXR0b25zJz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjYXJkX19idXR0b24gY2FyZF9fYnV0dG9uX2FkZCc+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdjYXJkX19idXR0b24gY2FyZF9fYnV0dG9uX21vcmUnPlNlZSBtb3JlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGlmIChnb29kc0FyZWEpIHtcclxuICAgICAgICBnb29kc0FyZWEuaW5uZXJIVE1MID0gZ29vZHNJbm5lcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbnNUb1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYnV0dG9uX21vcmUnKTtcclxuICAgIGJ1dHRvbnNUb1Byb2R1Y3QuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgYWRkUGF0aFVybCgnL3Byb2R1Y3QnKTtcclxuICAgICAgICAgICAgcmVuZGVyUHJvZHVjdFBhZ2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbnJlbmRlckdvb2RzKCk7XHJcbiIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuY29uc3QgdGVtcGxhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9fcHJvamVjdFwiKTtcclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoKSB7XHJcbiAgICBpZiAodGVtcGxhdGVBcmVhKSB7XHJcbiAgICAgICAgdGVtcGxhdGVBcmVhLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSAnd3JhcHBlcic+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3MgPSAnaGVhZGVyJz5IZWFkZXJcclxuICAgICAgICA8YSBocmVmPScvJz5Mb2dvPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9Jy9jYXJ0Jz5DYXJ0PC9hPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3MgPSAnbWFpbic+TWFpblxyXG4gICAgICAgIDxhIGhyZWY9Jy9wcm9kdWN0Jz5Qcm9kdWN0PC9hPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3MgPSAnZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByb2plY3QoKSB7XHJcbiAgICByZW5kZXJUZW1wbGF0ZSgpO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxufVxyXG5pbml0UHJvamVjdCgpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlByb2R1Y3RcIjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vc2NyaXB0cy9kYXRhLXBhcnNlcic7XHJcbmZ1bmN0aW9uIHJlbmRlclJhbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZ2VQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19yYW5nZVwiKTtcclxuICAgIGlmIChyYW5nZVBsYWNlKSB7XHJcbiAgICAgICAgcmFuZ2VQbGFjZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInJhbmdlX19jb250YWluZXIgcmFuZ2VcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udHJvbF9zbGlkZXJzXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzID0gXCJyYW5nZV9faW5wdXQgcmFuZ2VfX2lucHV0X21pblwiIGlkPVwiZnJvbVNsaWRlclwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiJHtwcm9kdWN0cy5wcmljZVJhbmdlLm1pbn1cIiBtaW49XCIke3Byb2R1Y3RzLnByaWNlUmFuZ2UubWlufVwiIG1heD0ke3Byb2R1Y3RzLnByaWNlUmFuZ2UubWF4fS8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzID0gXCJyYW5nZV9faW5wdXRcIiBpZD1cInRvU2xpZGVyXCIgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIke3Byb2R1Y3RzLnByaWNlUmFuZ2UubWF4fVwiIG1pbj1cIiR7cHJvZHVjdHMucHJpY2VSYW5nZS5taW59XCIgbWF4PSR7cHJvZHVjdHMucHJpY2VSYW5nZS5tYXh9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJhbmdlX19jb250cm9sX2Zvcm1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyIGZvcm1fY29udHJvbF9jb250YWluZXJfX3RpbWVfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiIGlkPVwiZnJvbUlucHV0XCIgdmFsdWU9XCIke3Byb2R1Y3RzLnByaWNlUmFuZ2UubWlufVwiIG1pbj1cIiR7cHJvZHVjdHMucHJpY2VSYW5nZS5taW59XCIgbWF4PSR7cHJvZHVjdHMucHJpY2VSYW5nZS5tYXh9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyIGZvcm1fY29udHJvbF9jb250YWluZXJfX3RpbWVfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiIGlkPVwidG9JbnB1dFwiIHZhbHVlPVwiJHtwcm9kdWN0cy5wcmljZVJhbmdlLm1heH1cIiBtaW49XCIke3Byb2R1Y3RzLnByaWNlUmFuZ2UubWlufVwiIG1heD0ke3Byb2R1Y3RzLnByaWNlUmFuZ2UubWF4fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGxldCByciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZV9faW5wdXRfbWluJyk7XHJcbiAgICByciA9PT0gbnVsbCB8fCByciA9PT0gdm9pZCAwID8gdm9pZCAwIDogcnIuYWRkRXZlbnRMaXN0ZW5lcignb25pbnB1dCcsICgpID0+IHsgY29uc29sZS5sb2cocnIudmFsdWUpOyB9KTtcclxufVxyXG5yZW5kZXJSYW5nZSgpO1xyXG5jb25zdCBmcm9tU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zyb21TbGlkZXInKTtcclxuY29uc3QgdG9TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9TbGlkZXInKTtcclxuY29uc3QgZnJvbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zyb21JbnB1dCcpO1xyXG5jb25zdCB0b0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvSW5wdXQnKTtcclxuZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIHRvU2xpZGVyKTtcclxuc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XHJcbmlmIChmcm9tU2xpZGVyICYmIHRvU2xpZGVyICYmIGZyb21JbnB1dCAmJiB0b0lucHV0KSB7XHJcbiAgICBmcm9tU2xpZGVyLm9uaW5wdXQgPSAoKSA9PiBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KTtcclxuICAgIHRvU2xpZGVyLm9uaW5wdXQgPSAoKSA9PiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpO1xyXG4gICAgZnJvbUlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjb250cm9sRnJvbUlucHV0KGZyb21TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xyXG4gICAgdG9JbnB1dC5vbmlucHV0ID0gKCkgPT4gY29udHJvbFRvSW5wdXQodG9TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xyXG59XHJcbmZ1bmN0aW9uIGNvbnRyb2xGcm9tSW5wdXQoZnJvbVNsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21JbnB1dCwgdG9JbnB1dCk7XHJcbiAgICBmaWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIGNvbnRyb2xTbGlkZXIpO1xyXG4gICAgaWYgKGZyb20gPiB0bykge1xyXG4gICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbnRyb2xUb0lucHV0KHRvU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIGNvbnRyb2xTbGlkZXIpIHtcclxuICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcclxuICAgIGZpbGxTbGlkZXIoZnJvbUlucHV0LCB0b0lucHV0LCAnI0M2QzZDNicsICcjYmIxYjIzJywgY29udHJvbFNsaWRlcik7XHJcbiAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvSW5wdXQpO1xyXG4gICAgaWYgKGZyb20gPD0gdG8pIHtcclxuICAgICAgICB0b1NsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbnRyb2xGcm9tU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCBmcm9tSW5wdXQpIHtcclxuICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xyXG4gICAgZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIHRvU2xpZGVyKTtcclxuICAgIGlmIChmcm9tID4gdG8pIHtcclxuICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbnRyb2xUb1NsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgdG9JbnB1dCkge1xyXG4gICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tU2xpZGVyLCB0b1NsaWRlcik7XHJcbiAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xyXG4gICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XHJcbiAgICBpZiAoZnJvbSA8PSB0bykge1xyXG4gICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyc2VkKGN1cnJlbnRGcm9tLCBjdXJyZW50VG8pIHtcclxuICAgIGNvbnN0IGZyb20gPSBwYXJzZUludChjdXJyZW50RnJvbS52YWx1ZSwgMTApO1xyXG4gICAgY29uc3QgdG8gPSBwYXJzZUludChjdXJyZW50VG8udmFsdWUsIDEwKTtcclxuICAgIHJldHVybiBbZnJvbSwgdG9dO1xyXG59XHJcbmZ1bmN0aW9uIGZpbGxTbGlkZXIoZnJvbSwgdG8sIHNsaWRlckNvbG9yLCByYW5nZUNvbG9yLCBjb250cm9sU2xpZGVyKSB7XHJcbiAgICBpZiAoZnJvbSAmJiB0byAmJiBjb250cm9sU2xpZGVyKSB7XHJcbiAgICAgICAgY29uc3QgcmFuZ2VEaXN0YW5jZSA9IE51bWJlcih0by5tYXgpIC0gTnVtYmVyKHRvLm1pbik7XHJcbiAgICAgICAgY29uc3QgZnJvbVBvc2l0aW9uID0gTnVtYmVyKGZyb20udmFsdWUpIC0gTnVtYmVyKHRvLm1pbik7XHJcbiAgICAgICAgY29uc3QgdG9Qb3NpdGlvbiA9IE51bWJlcih0by52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcclxuICAgICAgICBjb250cm9sU2xpZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICB0byByaWdodCxcclxuICAgICAgJHtzbGlkZXJDb2xvcn0gMCUsXHJcbiAgICAgICR7c2xpZGVyQ29sb3J9ICR7KGZyb21Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSxcclxuICAgICAgJHtyYW5nZUNvbG9yfSAkeygoZnJvbVBvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSkgKiAxMDB9JSxcclxuICAgICAgJHtyYW5nZUNvbG9yfSAkeyh0b1Bvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcclxuICAgICAgJHtzbGlkZXJDb2xvcn0gJHsodG9Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSwgXHJcbiAgICAgICR7c2xpZGVyQ29sb3J9IDEwMCUpYDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXRUb2dnbGVBY2Nlc3NpYmxlKGN1cnJlbnRUYXJnZXQpIHtcclxuICAgIGNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvU2xpZGVyJyk7XHJcbiAgICBpZiAoY3VycmVudFRhcmdldCAmJiBOdW1iZXIoY3VycmVudFRhcmdldC52YWx1ZSkgPD0gMCAmJiB0b1NsaWRlcikge1xyXG4gICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IFN0cmluZygyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmICh0b1NsaWRlcikge1xyXG4gICAgICAgICAgICB0b1NsaWRlci5zdHlsZS56SW5kZXggPSBTdHJpbmcoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcmVuZGVyRXJyb3JQYWdlIH0gZnJvbSAnLi9lcnJvci1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyQ2FydFBhZ2UgfSBmcm9tICcuL2NhcnQtcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlclByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJTdG9yZVBhZ2UgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgICAnLyc6IHJlbmRlclN0b3JlUGFnZSxcclxuICAgICcvcHJvZHVjdCc6IHJlbmRlclByb2R1Y3RQYWdlLFxyXG4gICAgJy9jYXJ0JzogcmVuZGVyQ2FydFBhZ2UsXHJcbiAgICAnZXJyb3InOiByZW5kZXJFcnJvclBhZ2UsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2NhdGlvbiA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3BhdGhdIHx8IHJvdXRlcy5lcnJvcjtcclxuICAgIHJvdXRlKCk7XHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGF0aFVybChwcm9wKSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHByb3ApO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxufVxyXG4vLyBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0X19pdGVtXCIpO1xyXG4vLyBidXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZjtcclxuLy8gICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICB9KVxyXG4vLyB9KVxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGhhbmRsZUxvY2F0aW9uO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IGJ1dHRvbnNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXdfX2J1dHRvbl9pbWcnKTtcclxuYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4geyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgY2hhbmdlVmlldyhldmVudCk7IH0pOyB9KTtcclxuZnVuY3Rpb24gY2hhbmdlVmlldyhldikge1xyXG4gICAgYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aWV3X19idXR0b25fYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGxldCBhY3RpdmVCdXR0b24gPSBldi5jdXJyZW50VGFyZ2V0O1xyXG4gICAgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fd3JhcHBlcicpO1xyXG4gICAgZ29vZHNBcmVhID09PSBudWxsIHx8IGdvb2RzQXJlYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ29vZHNBcmVhLmNsYXNzTGlzdC50b2dnbGUoJ2dvb2RzX193cmFwcGVyX21hbnknKTtcclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XHJcbmNsYXNzIFByb2R1Y3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IGVsLmJyYW5kLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGVsLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRQZXJjZW50YWdlOiBlbC5kaXNjb3VudFBlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGVsLmltYWdlcyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBlbC5wcmljZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogZWwucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IGVsLnN0b2NrLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBlbC50aHVtYm5haWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZWwudGl0bGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0c01ldGFkYXRhKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWluID4gcHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5taW4gPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmljZVJhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5wcmljZVJhbmdlLm1heCA8IHByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5icmFuZCBpbiB0aGlzLmJyYW5kcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzW3Byb2R1Y3QuYnJhbmRdID0gW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzW3Byb2R1Y3QuYnJhbmRdLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGlmICghKHByb2R1Y3QuY2F0ZWdvcnkgaW4gdGhpcy5jYXRlZ29yaWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3Byb2R1Y3QuY2F0ZWdvcnldID0gW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twcm9kdWN0LmNhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RCeUlkKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHNbaWQgLSAxXTtcclxuICAgIH1cclxuICAgIGFwcGx5RmlsdGVyKGZpbHRlcikge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmdldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgICAgIHRoaXMuYnJhbmRzID0ge307XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge307XHJcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGluZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5wcm9kdWN0c1tpbmRdO1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgICAgIGluZC0tO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyLmNhdGVnb3J5LmluY2x1ZGVzKGVsLmNhdGVnb3J5KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGZpbHRlci5icmFuZC5pbmNsdWRlcyhlbC5icmFuZCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIucHJpY2UubWluICE9PSAtMSAmJiBlbC5wcmljZSA8IGZpbHRlci5wcmljZS5taW4pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIucHJpY2UubWF4ICE9PSAtMSAmJiBlbC5wcmljZSA+IGZpbHRlci5wcmljZS5tYXgpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RvY2subWluICE9PSAtMSAmJiBlbC5zdG9jayA8IGZpbHRlci5zdG9jay5taW4pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RvY2subWF4ICE9PSAtMSAmJiBlbC5zdG9jayA+IGZpbHRlci5zdG9jay5tYXgpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNNZXRhZGF0YSgpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IHByb2R1Y3RzID0gbmV3IFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcclxuIiwiY2xhc3MgRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBbXTtcclxuICAgICAgICB0aGlzLmJyYW5kID0gW107XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvY2sgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHN3aXRjaENhdGVnb3J5KGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeS5pbmNsdWRlcyhpdGVtKSlcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHN3aXRjaEJyYW5kKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5icmFuZC5pbmNsdWRlcyhpdGVtKSlcclxuICAgICAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHNldFByaWNlKHBhcmFtZXRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAocGFyYW1ldGVyID09PSAnbWluJylcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5taW4gPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHJpY2UubWF4ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXRTdG9jayhwYXJhbWV0ZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlciA9PT0gJ21pbicpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvY2subWluID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0b2NrLm1heCA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcm91dGluZyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21haW4tdGVtcGxhdGUnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdG9yZS1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXJyb3ItcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NhcnQtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3JhbmdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZmlsdGVySXRlbSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2dvb2RzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlldyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlYXJjaCc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==