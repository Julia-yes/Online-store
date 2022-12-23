/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/cart-page.ts":
/*!*************************************!*\
  !*** ./src/components/cart-page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeFilters": () => (/* binding */ changeFilters)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _scripts_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/filter */ "./src/scripts/filter.ts");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods */ "./src/components/goods.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-page */ "./src/components/store-page.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./range */ "./src/components/range.ts");





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
        if (param === "price" || param === "stock") {
            let side = event.currentTarget.dataset.side;
            if (side !== undefined) {
                if (side === 'min') {
                    filter[param].min = Number(newFilter);
                }
                else {
                    filter[param].max = Number(newFilter);
                }
            }
        }
        else {
            if (filter[param].indexOf(newFilter) !== -1) {
                let ind = filter[param].indexOf(newFilter);
                filter[param].splice(ind, 1);
            }
            else {
                filter[param].push(newFilter);
            }
        }
    }
    if (param) {
        runFiltration(param);
    }
}
function runFiltration(prop) {
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
    if (filter.price.min !== null) {
        filterDownloaded.setPrice("min", filter.price.min);
    }
    if (filter.price.max !== null) {
        filterDownloaded.setPrice("max", filter.price.max);
    }
    if (filter.stock.min !== null) {
        filterDownloaded.setStock("min", filter.stock.min);
    }
    if (filter.stock.max !== null) {
        filterDownloaded.setStock("max", filter.stock.max);
    }
    _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].applyFilter(filterDownloaded);
    console.log(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"]);
    if (prop === 'price') {
        (0,_range__WEBPACK_IMPORTED_MODULE_4__.changeStockRange)();
    }
    else if (prop === 'stock') {
        (0,_range__WEBPACK_IMPORTED_MODULE_4__.changePriceRange)();
    }
    else {
        (0,_range__WEBPACK_IMPORTED_MODULE_4__.changeRange)();
    }
    (0,_goods__WEBPACK_IMPORTED_MODULE_2__.renderGoods)();
    rerenderGoodsQuantity();
    (0,_store_page__WEBPACK_IMPORTED_MODULE_3__.renderGoodsQuantity)();
}
function changeRangePoints(prop) {
    let rangeMin = document.getElementById(`fromSlider${prop}`);
    let rangeMinNum = document.getElementById(`fromInput${prop}`);
    let rangeMax = document.getElementById(`toSlider${prop}`);
    let rangeMaxNum = document.getElementById(`toInput${prop}`);
    if (filter[prop].min !== null) {
        rangeMin.value = `${filter[prop].min}`;
        rangeMinNum.value = `${filter[prop].min}`;
    }
    if (filter[prop].max !== null) {
        rangeMax.value = `${filter[prop].max}`;
        rangeMaxNum.value = `${filter[prop].max}`;
    }
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
    runFiltration(null);
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
        <div class='card__price_new'>${good.price}&#36;</div>
        <div class='card__price_old'>${Math.floor(good.price / (100 - good.discountPercentage) * 100)}&#36;</div>
      </div>
      <div class='card__bottom'>
        <div class='card__rating'>${good.rating}&starf;</div>
        <div class='card__stock'>Stock &#58; &#32; ${good.stock}</div>
      </div>
      <div class='card__buttons'>
        <button class='card__button card__button_add'>Add to cart</button>
        <button class='card__button card__button_more' data-goodID = "${good.id}">See more</button>
      </div>
    </div>`;
    }
    if (goodsArea) {
        goodsArea.innerHTML = goodsInner;
    }
    const buttonsToProduct = document.querySelectorAll('.card__button_more');
    buttonsToProduct.forEach(button => {
        button.addEventListener('click', (e) => {
            let goodID = e.currentTarget.dataset.goodid;
            (0,_routing__WEBPACK_IMPORTED_MODULE_2__.addPathUrl)(`/product/${goodID}`);
            (0,_product_page__WEBPACK_IMPORTED_MODULE_1__.renderProductPage)();
        });
    });
    const buttonCart = document.querySelectorAll(".card__button_add");
    buttonCart.forEach(button => {
        button.addEventListener('click', (e) => { changeButtonCart(e.currentTarget); });
    });
}
function changeButtonCart(e) {
    if ((e === null || e === void 0 ? void 0 : e.innerHTML) == "Add to cart") {
        console.log("!!!");
        e.innerHTML = "Delete from cart";
    }
    else if ((e === null || e === void 0 ? void 0 : e.innerHTML) == "Delete from cart") {
        console.log("##");
        e.innerHTML = "Add to cart";
    }
}
renderGoods();


/***/ }),

/***/ "./src/components/main-template.ts":
/*!*****************************************!*\
  !*** ./src/components/main-template.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePriceRange": () => (/* binding */ changePriceRange),
/* harmony export */   "changeRange": () => (/* binding */ changeRange),
/* harmony export */   "changeStockRange": () => (/* binding */ changeStockRange)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _filterItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterItem */ "./src/components/filterItem.ts");


function renderRange(prop, min, max, minValue, maxValue) {
    const rangePlace = document.querySelector(`.filter__range_${prop}`);
    if (rangePlace) {
        rangePlace.innerHTML = `<div class="range__container range">
      <div class="range__control_sliders">
          <input class = "range__input range__input_min" id="fromSlider${prop}" type="range" value="${minValue}" min="${min}" max="${max}" data-param="${prop}" data-side ="min"/>
          <input class = "range__input range__input_max" id="toSlider${prop}" type="range" value="${maxValue}" min="${min}" max="${max}" data-param="${prop}" data-side ="max"/>
      </div>
      <div class="range__control_form">
          <div class="form_control_container">
              <input class="range__input_number" type="number" id="fromInput${prop}" value="${minValue}" min="${min}" max=${max}/>
          </div>
          <div class="form_control_container">
              <input class="range__input_number" type="number" id="toInput${prop}" value="${maxValue}" min="${min}" max=${max}/>
          </div>
      </div>
    </div>`;
    }
    const range = document.querySelectorAll('.range__input');
    range.forEach(item => {
        item.addEventListener('change', e => { (0,_filterItem__WEBPACK_IMPORTED_MODULE_1__.changeFilters)(e); });
    });
}
function addRangeFunctionality(prop) {
    const fromSlider = document.querySelector(`#fromSlider${prop}`);
    const toSlider = document.querySelector(`#toSlider${prop}`);
    const fromInput = document.querySelector(`#fromInput${prop}`);
    const toInput = document.querySelector(`#toInput${prop}`);
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
        const toSlider = document.querySelector(`#toSlider${prop}`);
        if (currentTarget && Number(currentTarget.value) <= 0 && toSlider) {
            toSlider.style.zIndex = String(2);
        }
        else {
            if (toSlider) {
                toSlider.style.zIndex = String(0);
            }
        }
    }
}
function changePriceRange() {
    renderRange("price", 10, 1749, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max);
    addRangeFunctionality("price");
}
function changeStockRange() {
    renderRange("stock", 2, 150, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].stockRange.min, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].stockRange.max);
    addRangeFunctionality("stock");
}
function changeRange() {
    changePriceRange();
    changeStockRange();
}
changeRange();


/***/ }),

/***/ "./src/components/routing.ts":
/*!***********************************!*\
  !*** ./src/components/routing.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPathUrl": () => (/* binding */ addPathUrl),
/* harmony export */   "handleLocation": () => (/* binding */ handleLocation)
/* harmony export */ });
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page */ "./src/components/error-page.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-page */ "./src/components/cart-page.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-page */ "./src/components/product-page.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-page */ "./src/components/store-page.ts");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");

function runSearch() {
    const searchInput = document.querySelector('.search__input');
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', () => {
        runFilter(searchInput.value);
    });
}
function runFilter(prop) {
    console.log(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"]);
}
runSearch();


/***/ }),

/***/ "./src/components/sorting.ts":
/*!***********************************!*\
  !*** ./src/components/sorting.ts ***!
  \***********************************/
/***/ (() => {


function sortGoods() {
}
sortGoods();


/***/ }),

/***/ "./src/components/store-page.ts":
/*!**************************************!*\
  !*** ./src/components/store-page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGoodsQuantity": () => (/* binding */ renderGoodsQuantity),
/* harmony export */   "renderStorePage": () => (/* binding */ renderStorePage)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");

function renderStorePage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = `
    <article class='store__page store'>
      <div class='store__search search'>
        <div class='search__block'>
          <img alt='search' class='search__img' src='../src/assets/img/search3.png'>
          <input type='search' class='search__input' placeholder ='Search product'></input> 
        </div>
      </div>
      <div class='store__main'>
        <aside class='store__filters filter'>
          <div class='filter__item filter__category'>
            <div class='filter__title'>Category</div>
            <div class='filter__area filter__category_area'></div>
          </div>
          <div class='filter__item filter__brand'>
            <div class='filter__title'>Brand</div>
            <div class='filter__area filter__brand_area'></div>
          </div>
          <div class='filter__item filter__price'>
            <div class='filter__title'>Price</div>
            <div class='filter__area filter__area_range filter__range_price'></div>
          </div>
          <div class='filter__item filter__stock'>
            <div class='filter__title'>Stock</div>
            <div class='filter__area filter__area_range filter__range_stock'></div>
          </div>
          <div class='filter__item filter__buttons'>
            <button class='filter__button filter__button_reset button'>Reset filters</button>
            <button class='filter__button filter__button_save button'>Save filters</button>
          </div>
        </aside>
        <section class='store__goods goods'>
          <h2 class='goods__title'>Found: <span class='goods__quantity'>${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.length}</span>
          </h2>
          <div class='goods__options'>
            <div class='goods__sorters sorters'>
              <button class='sorters__button sorters__price sorters__price_low'>price &#8595;</button>
              <button class='sorters__button sorters__price sorters__price_high'>price &#8593;</button>
              <button class='sorters__button sorters__rating sorters__rating_low'>rating &#8595;</button>
              <button class='sorters__button sorters__rating sorters__rating_high'>rating &#8593;</button>
            </div>
            <div class='goods__view view'>
              <div class='view__button'><img alt='grid' class='view__button_img view__button_many' src='../src/assets/img/003-grid-1.png'></div>
              <div class='view__button'><img alt='grid' class='view__button_active view__button_img view__button_few' src='../src/assets/img/004-menu-1.png'></div>
            </div>
          </div>
          <div class='goods__area'>
          </div>
        </section>
      </div>
    </article>`;
    }
}
function renderGoodsQuantity() {
    const goodsquantity = document.querySelector('.goods__quantity');
    if (goodsquantity) {
        goodsquantity.innerHTML = `${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.length}`;
    }
}


/***/ }),

/***/ "./src/components/view.ts":
/*!********************************!*\
  !*** ./src/components/view.ts ***!
  \********************************/
/***/ (() => {


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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/data */ "./src/assets/data/data.js");

class Products {
    constructor(data) {
        this.products = [];
        this.brands = {};
        this.categories = {};
        this.priceRange = {
            min: -1,
            max: -1,
        };
        this.stockRange = {
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
            if (this.stockRange.min === -1 || this.stockRange.min > product.stock)
                this.stockRange.min = product.stock;
            if (this.stockRange.min === -1 || this.stockRange.max < product.stock)
                this.stockRange.max = product.stock;
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
        this.products = this.getProducts(_assets_data_data__WEBPACK_IMPORTED_MODULE_0__.data.products);
        this.brands = {};
        this.categories = {};
        this.priceRange = {
            min: -1,
            max: -1,
        };
        this.stockRange = {
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
const products = new Products(_assets_data_data__WEBPACK_IMPORTED_MODULE_0__.data.products);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (products);


/***/ }),

/***/ "./src/scripts/filter.ts":
/*!*******************************!*\
  !*** ./src/scripts/filter.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/assets/data/data.js":
/*!*********************************!*\
  !*** ./src/assets/data/data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "products": [
  {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/1/1.jpg",
  "https://i.dummyjson.com/data/products/1/2.jpg",
  "https://i.dummyjson.com/data/products/1/3.jpg",
  "https://i.dummyjson.com/data/products/1/4.jpg",
  "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
  },
  {
  "id": 2,
  "title": "iPhone X",
  "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/2/1.jpg",
  "https://i.dummyjson.com/data/products/2/2.jpg",
  "https://i.dummyjson.com/data/products/2/3.jpg",
  "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  ]
  },
  {
  "id": 3,
  "title": "Samsung Universe 9",
  "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
  "price": 1249,
  "discountPercentage": 15.46,
  "rating": 4.09,
  "stock": 36,
  "brand": "Samsung",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/3/1.jpg"
  ]
  },
  {
  "id": 4,
  "title": "OPPOF19",
  "description": "OPPO F19 is officially announced on April 2021.",
  "price": 280,
  "discountPercentage": 17.91,
  "rating": 4.3,
  "stock": 123,
  "brand": "OPPO",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/4/1.jpg",
  "https://i.dummyjson.com/data/products/4/2.jpg",
  "https://i.dummyjson.com/data/products/4/3.jpg",
  "https://i.dummyjson.com/data/products/4/4.jpg",
  "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
  ]
  },
  {
  "id": 5,
  "title": "Huawei P30",
  "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  "price": 499,
  "discountPercentage": 10.58,
  "rating": 4.09,
  "stock": 32,
  "brand": "Huawei",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/5/1.jpg",
  "https://i.dummyjson.com/data/products/5/2.jpg",
  "https://i.dummyjson.com/data/products/5/3.jpg"
  ]
  },
  {
  "id": 6,
  "title": "MacBook Pro",
  "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
  "price": 1749,
  "discountPercentage": 11.02,
  "rating": 4.57,
  "stock": 83,
  "brand": "Apple",
  "category": "laptops",
  "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
  "images": [
  "https://i.dummyjson.com/data/products/6/1.png",
  "https://i.dummyjson.com/data/products/6/2.jpg",
  "https://i.dummyjson.com/data/products/6/3.png",
  "https://i.dummyjson.com/data/products/6/4.jpg"
  ]
  },
  {
  "id": 7,
  "title": "Samsung Galaxy Book",
  "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
  "price": 1499,
  "discountPercentage": 4.15,
  "rating": 4.25,
  "stock": 50,
  "brand": "Samsung",
  "category": "laptops",
  "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/7/1.jpg",
  "https://i.dummyjson.com/data/products/7/2.jpg",
  "https://i.dummyjson.com/data/products/7/3.jpg",
  "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
  ]
  },
  {
  "id": 8,
  "title": "Microsoft Surface Laptop 4",
  "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
  "price": 1499,
  "discountPercentage": 10.23,
  "rating": 4.43,
  "stock": 68,
  "brand": "Microsoft Surface",
  "category": "laptops",
  "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/8/1.jpg",
  "https://i.dummyjson.com/data/products/8/2.jpg",
  "https://i.dummyjson.com/data/products/8/3.jpg",
  "https://i.dummyjson.com/data/products/8/4.jpg",
  "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
  ]
  },
  {
  "id": 9,
  "title": "Infinix INBOOK",
  "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
  "price": 1099,
  "discountPercentage": 11.83,
  "rating": 4.54,
  "stock": 96,
  "brand": "Infinix",
  "category": "laptops",
  "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/9/1.jpg",
  "https://i.dummyjson.com/data/products/9/2.png",
  "https://i.dummyjson.com/data/products/9/3.png",
  "https://i.dummyjson.com/data/products/9/4.jpg",
  "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
  ]
  },
  {
  "id": 10,
  "title": "HP Pavilion 15-DK1056WM",
  "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
  "price": 1099,
  "discountPercentage": 6.18,
  "rating": 4.43,
  "stock": 89,
  "brand": "HP Pavilion",
  "category": "laptops",
  "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  "images": [
  "https://i.dummyjson.com/data/products/10/1.jpg",
  "https://i.dummyjson.com/data/products/10/2.jpg",
  "https://i.dummyjson.com/data/products/10/3.jpg",
  "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
  ]
  },
  {
  "id": 11,
  "title": "perfume Oil",
  "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
  "price": 13,
  "discountPercentage": 8.4,
  "rating": 4.26,
  "stock": 65,
  "brand": "Impression of Acqua Di Gio",
  "category": "fragrances",
  "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/11/1.jpg",
  "https://i.dummyjson.com/data/products/11/2.jpg",
  "https://i.dummyjson.com/data/products/11/3.jpg",
  "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
  ]
  },
  {
  "id": 12,
  "title": "Brown Perfume",
  "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
  "price": 40,
  "discountPercentage": 15.66,
  "rating": 4,
  "stock": 52,
  "brand": "Royal_Mirage",
  "category": "fragrances",
  "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/12/1.jpg",
  "https://i.dummyjson.com/data/products/12/2.jpg",
  "https://i.dummyjson.com/data/products/12/3.png",
  "https://i.dummyjson.com/data/products/12/4.jpg",
  "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
  ]
  },
  {
  "id": 13,
  "title": "Fog Scent Xpressio Perfume",
  "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
  "price": 13,
  "discountPercentage": 8.14,
  "rating": 4.59,
  "stock": 61,
  "brand": "Fog Scent Xpressio",
  "category": "fragrances",
  "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/13/1.jpg",
  "https://i.dummyjson.com/data/products/13/2.png",
  "https://i.dummyjson.com/data/products/13/3.jpg",
  "https://i.dummyjson.com/data/products/13/4.jpg",
  "https://i.dummyjson.com/data/products/13/thumbnail.webp"
  ]
  },
  {
  "id": 14,
  "title": "Non-Alcoholic Concentrated Perfume Oil",
  "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
  "price": 120,
  "discountPercentage": 15.6,
  "rating": 4.21,
  "stock": 114,
  "brand": "Al Munakh",
  "category": "fragrances",
  "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/14/1.jpg",
  "https://i.dummyjson.com/data/products/14/2.jpg",
  "https://i.dummyjson.com/data/products/14/3.jpg",
  "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
  ]
  },
  {
  "id": 15,
  "title": "Eau De Perfume Spray",
  "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
  "price": 30,
  "discountPercentage": 10.99,
  "rating": 4.7,
  "stock": 105,
  "brand": "Lord - Al-Rehab",
  "category": "fragrances",
  "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/15/1.jpg",
  "https://i.dummyjson.com/data/products/15/2.jpg",
  "https://i.dummyjson.com/data/products/15/3.jpg",
  "https://i.dummyjson.com/data/products/15/4.jpg",
  "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
  ]
  },
  {
  "id": 16,
  "title": "Hyaluronic Acid Serum",
  "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
  "price": 19,
  "discountPercentage": 13.31,
  "rating": 4.83,
  "stock": 110,
  "brand": "L'Oreal Paris",
  "category": "skincare",
  "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/16/1.png",
  "https://i.dummyjson.com/data/products/16/2.webp",
  "https://i.dummyjson.com/data/products/16/3.jpg",
  "https://i.dummyjson.com/data/products/16/4.jpg",
  "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
  ]
  },
  {
  "id": 17,
  "title": "Tree Oil 30ml",
  "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
  "price": 12,
  "discountPercentage": 4.09,
  "rating": 4.52,
  "stock": 78,
  "brand": "Hemani Tea",
  "category": "skincare",
  "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/17/1.jpg",
  "https://i.dummyjson.com/data/products/17/2.jpg",
  "https://i.dummyjson.com/data/products/17/3.jpg",
  "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
  ]
  },
  {
  "id": 18,
  "title": "Oil Free Moisturizer 100ml",
  "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
  "price": 40,
  "discountPercentage": 13.1,
  "rating": 4.56,
  "stock": 88,
  "brand": "Dermive",
  "category": "skincare",
  "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/18/1.jpg",
  "https://i.dummyjson.com/data/products/18/2.jpg",
  "https://i.dummyjson.com/data/products/18/3.jpg",
  "https://i.dummyjson.com/data/products/18/4.jpg",
  "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
  ]
  },
  {
  "id": 19,
  "title": "Skin Beauty Serum.",
  "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
  "price": 46,
  "discountPercentage": 10.68,
  "rating": 4.42,
  "stock": 54,
  "brand": "ROREC White Rice",
  "category": "skincare",
  "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/19/1.jpg",
  "https://i.dummyjson.com/data/products/19/2.jpg",
  "https://i.dummyjson.com/data/products/19/3.png",
  "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
  ]
  },
  {
  "id": 20,
  "title": "Freckle Treatment Cream- 15gm",
  "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
  "price": 70,
  "discountPercentage": 16.99,
  "rating": 4.06,
  "stock": 140,
  "brand": "Fair & Clear",
  "category": "skincare",
  "thumbnail": "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/20/1.jpg",
  "https://i.dummyjson.com/data/products/20/2.jpg",
  "https://i.dummyjson.com/data/products/20/3.jpg",
  "https://i.dummyjson.com/data/products/20/4.jpg",
  "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
  ]
  },
  {
  "id": 21,
  "title": "- Daal Masoor 500 grams",
  "description": "Fine quality Branded Product Keep in a cool and dry place",
  "price": 20,
  "discountPercentage": 4.81,
  "rating": 4.44,
  "stock": 133,
  "brand": "Saaf & Khaas",
  "category": "groceries",
  "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
  "images": [
  "https://i.dummyjson.com/data/products/21/1.png",
  "https://i.dummyjson.com/data/products/21/2.jpg",
  "https://i.dummyjson.com/data/products/21/3.jpg"
  ]
  },
  {
  "id": 22,
  "title": "Elbow Macaroni - 400 gm",
  "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
  "price": 14,
  "discountPercentage": 15.58,
  "rating": 4.57,
  "stock": 146,
  "brand": "Bake Parlor Big",
  "category": "groceries",
  "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/22/1.jpg",
  "https://i.dummyjson.com/data/products/22/2.jpg",
  "https://i.dummyjson.com/data/products/22/3.jpg"
  ]
  },
  {
  "id": 23,
  "title": "Orange Essence Food Flavou",
  "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
  "price": 14,
  "discountPercentage": 8.04,
  "rating": 4.85,
  "stock": 26,
  "brand": "Baking Food Items",
  "category": "groceries",
  "thumbnail": "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/23/1.jpg",
  "https://i.dummyjson.com/data/products/23/2.jpg",
  "https://i.dummyjson.com/data/products/23/3.jpg",
  "https://i.dummyjson.com/data/products/23/4.jpg",
  "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
  ]
  },
  {
  "id": 24,
  "title": "cereals muesli fruit nuts",
  "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
  "price": 46,
  "discountPercentage": 16.8,
  "rating": 4.94,
  "stock": 113,
  "brand": "fauji",
  "category": "groceries",
  "thumbnail": "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/24/1.jpg",
  "https://i.dummyjson.com/data/products/24/2.jpg",
  "https://i.dummyjson.com/data/products/24/3.jpg",
  "https://i.dummyjson.com/data/products/24/4.jpg",
  "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
  ]
  },
  {
  "id": 25,
  "title": "Gulab Powder 50 Gram",
  "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
  "price": 70,
  "discountPercentage": 13.58,
  "rating": 4.87,
  "stock": 47,
  "brand": "Dry Rose",
  "category": "groceries",
  "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/25/1.png",
  "https://i.dummyjson.com/data/products/25/2.jpg",
  "https://i.dummyjson.com/data/products/25/3.png",
  "https://i.dummyjson.com/data/products/25/4.jpg",
  "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
  ]
  },
  {
  "id": 26,
  "title": "Plant Hanger For Home",
  "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
  "price": 41,
  "discountPercentage": 17.86,
  "rating": 4.08,
  "stock": 131,
  "brand": "Boho Decor",
  "category": "home-decoration",
  "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/26/1.jpg",
  "https://i.dummyjson.com/data/products/26/2.jpg",
  "https://i.dummyjson.com/data/products/26/3.jpg",
  "https://i.dummyjson.com/data/products/26/4.jpg",
  "https://i.dummyjson.com/data/products/26/5.jpg",
  "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
  ]
  },
  {
  "id": 27,
  "title": "Flying Wooden Bird",
  "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
  "price": 51,
  "discountPercentage": 15.58,
  "rating": 4.41,
  "stock": 17,
  "brand": "Flying Wooden",
  "category": "home-decoration",
  "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/27/1.jpg",
  "https://i.dummyjson.com/data/products/27/2.jpg",
  "https://i.dummyjson.com/data/products/27/3.jpg",
  "https://i.dummyjson.com/data/products/27/4.jpg",
  "https://i.dummyjson.com/data/products/27/thumbnail.webp"
  ]
  },
  {
  "id": 28,
  "title": "3D Embellishment Art Lamp",
  "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
  "price": 20,
  "discountPercentage": 16.49,
  "rating": 4.82,
  "stock": 54,
  "brand": "LED Lights",
  "category": "home-decoration",
  "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/28/1.jpg",
  "https://i.dummyjson.com/data/products/28/2.jpg",
  "https://i.dummyjson.com/data/products/28/3.png",
  "https://i.dummyjson.com/data/products/28/4.jpg",
  "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
  ]
  },
  {
  "id": 29,
  "title": "Handcraft Chinese style",
  "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
  "price": 60,
  "discountPercentage": 15.34,
  "rating": 4.44,
  "stock": 7,
  "brand": "luxury palace",
  "category": "home-decoration",
  "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/29/1.jpg",
  "https://i.dummyjson.com/data/products/29/2.jpg",
  "https://i.dummyjson.com/data/products/29/3.webp",
  "https://i.dummyjson.com/data/products/29/4.webp",
  "https://i.dummyjson.com/data/products/29/thumbnail.webp"
  ]
  },
  {
  "id": 30,
  "title": "Key Holder",
  "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
  "price": 30,
  "discountPercentage": 2.92,
  "rating": 4.92,
  "stock": 54,
  "brand": "Golden",
  "category": "home-decoration",
  "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/30/1.jpg",
  "https://i.dummyjson.com/data/products/30/2.jpg",
  "https://i.dummyjson.com/data/products/30/3.jpg",
  "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
  ]
  },
  {
  "id": 31,
  "title": "Mornadi Velvet Bed",
  "description": "Mornadi Velvet Bed Base with Headboard Slats Support Classic Style Bedroom Furniture Bed Set",
  "price": 40,
  "discountPercentage": 17,
  "rating": 4.16,
  "stock": 140,
  "brand": "Furniture Bed Set",
  "category": "furniture",
  "thumbnail": "https://i.dummyjson.com/data/products/31/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/31/1.jpg",
  "https://i.dummyjson.com/data/products/31/2.jpg",
  "https://i.dummyjson.com/data/products/31/3.jpg",
  "https://i.dummyjson.com/data/products/31/4.jpg",
  "https://i.dummyjson.com/data/products/31/thumbnail.jpg"
  ]
  },
  {
  "id": 32,
  "title": "Sofa for Coffe Cafe",
  "description": "Ratttan Outdoor furniture Set Waterproof  Rattan Sofa for Coffe Cafe",
  "price": 50,
  "discountPercentage": 15.59,
  "rating": 4.74,
  "stock": 30,
  "brand": "Ratttan Outdoor",
  "category": "furniture",
  "thumbnail": "https://i.dummyjson.com/data/products/32/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/32/1.jpg",
  "https://i.dummyjson.com/data/products/32/2.jpg",
  "https://i.dummyjson.com/data/products/32/3.jpg",
  "https://i.dummyjson.com/data/products/32/thumbnail.jpg"
  ]
  },
  {
  "id": 33,
  "title": "3 Tier Corner Shelves",
  "description": "3 Tier Corner Shelves | 3 PCs Wall Mount Kitchen Shelf | Floating Bedroom Shelf",
  "price": 700,
  "discountPercentage": 17,
  "rating": 4.31,
  "stock": 106,
  "brand": "Kitchen Shelf",
  "category": "furniture",
  "thumbnail": "https://i.dummyjson.com/data/products/33/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/33/1.jpg",
  "https://i.dummyjson.com/data/products/33/2.jpg",
  "https://i.dummyjson.com/data/products/33/3.jpg",
  "https://i.dummyjson.com/data/products/33/4.jpg",
  "https://i.dummyjson.com/data/products/33/thumbnail.jpg"
  ]
  },
  {
  "id": 34,
  "title": "Plastic Table",
  "description": "V﻿ery good quality plastic table for multi purpose now in reasonable price",
  "price": 50,
  "discountPercentage": 4,
  "rating": 4.01,
  "stock": 136,
  "brand": "Multi Purpose",
  "category": "furniture",
  "thumbnail": "https://i.dummyjson.com/data/products/34/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/34/1.jpg",
  "https://i.dummyjson.com/data/products/34/2.jpg",
  "https://i.dummyjson.com/data/products/34/3.jpg",
  "https://i.dummyjson.com/data/products/34/4.jpg",
  "https://i.dummyjson.com/data/products/34/thumbnail.jpg"
  ]
  },
  {
  "id": 35,
  "title": "3 DOOR PORTABLE",
  "description": "Material: Stainless Steel and Fabric  Item Size: 110 cm x 45 cm x 175 cm Package Contents: 1 Storage Wardrobe",
  "price": 41,
  "discountPercentage": 7.98,
  "rating": 4.06,
  "stock": 68,
  "brand": "AmnaMart",
  "category": "furniture",
  "thumbnail": "https://i.dummyjson.com/data/products/35/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/35/1.jpg",
  "https://i.dummyjson.com/data/products/35/2.jpg",
  "https://i.dummyjson.com/data/products/35/3.jpg",
  "https://i.dummyjson.com/data/products/35/4.jpg",
  "https://i.dummyjson.com/data/products/35/thumbnail.jpg"
  ]
  },
  {
  "id": 36,
  "title": "Sleeve Shirt Womens",
  "description": "Cotton Solid Color Professional Wear Sleeve Shirt Womens Work Blouses Wholesale Clothing Casual Plain Custom Top OEM Customized",
  "price": 90,
  "discountPercentage": 10.89,
  "rating": 4.26,
  "stock": 39,
  "brand": "Professional Wear",
  "category": "tops",
  "thumbnail": "https://i.dummyjson.com/data/products/36/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/36/1.jpg",
  "https://i.dummyjson.com/data/products/36/2.webp",
  "https://i.dummyjson.com/data/products/36/3.webp",
  "https://i.dummyjson.com/data/products/36/4.jpg",
  "https://i.dummyjson.com/data/products/36/thumbnail.jpg"
  ]
  },
  {
  "id": 37,
  "title": "ank Tops for Womens/Girls",
  "description": "PACK OF 3 CAMISOLES ,VERY COMFORTABLE SOFT COTTON STUFF, COMFORTABLE IN ALL FOUR SEASONS",
  "price": 50,
  "discountPercentage": 12.05,
  "rating": 4.52,
  "stock": 107,
  "brand": "Soft Cotton",
  "category": "tops",
  "thumbnail": "https://i.dummyjson.com/data/products/37/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/37/1.jpg",
  "https://i.dummyjson.com/data/products/37/2.jpg",
  "https://i.dummyjson.com/data/products/37/3.jpg",
  "https://i.dummyjson.com/data/products/37/4.jpg",
  "https://i.dummyjson.com/data/products/37/thumbnail.jpg"
  ]
  },
  {
  "id": 38,
  "title": "sublimation plain kids tank",
  "description": "sublimation plain kids tank tops wholesale",
  "price": 100,
  "discountPercentage": 11.12,
  "rating": 4.8,
  "stock": 20,
  "brand": "Soft Cotton",
  "category": "tops",
  "thumbnail": "https://i.dummyjson.com/data/products/38/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/38/1.png",
  "https://i.dummyjson.com/data/products/38/2.jpg",
  "https://i.dummyjson.com/data/products/38/3.jpg",
  "https://i.dummyjson.com/data/products/38/4.jpg"
  ]
  },
  {
  "id": 39,
  "title": "Women Sweaters Wool",
  "description": "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women' S Crop Top Sweater",
  "price": 600,
  "discountPercentage": 17.2,
  "rating": 4.55,
  "stock": 55,
  "brand": "Top Sweater",
  "category": "tops",
  "thumbnail": "https://i.dummyjson.com/data/products/39/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/39/1.jpg",
  "https://i.dummyjson.com/data/products/39/2.jpg",
  "https://i.dummyjson.com/data/products/39/3.jpg",
  "https://i.dummyjson.com/data/products/39/4.jpg",
  "https://i.dummyjson.com/data/products/39/thumbnail.jpg"
  ]
  },
  {
  "id": 40,
  "title": "women winter clothes",
  "description": "women winter clothes thick fleece hoodie top with sweat pantjogger women sweatsuit set joggers pants two piece pants set",
  "price": 57,
  "discountPercentage": 13.39,
  "rating": 4.91,
  "stock": 84,
  "brand": "Top Sweater",
  "category": "tops",
  "thumbnail": "https://i.dummyjson.com/data/products/40/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/40/1.jpg",
  "https://i.dummyjson.com/data/products/40/2.jpg"
  ]
  },
  {
  "id": 41,
  "title": "NIGHT SUIT",
  "description": "NIGHT SUIT RED MICKY MOUSE..  For Girls. Fantastic Suits.",
  "price": 55,
  "discountPercentage": 15.05,
  "rating": 4.65,
  "stock": 21,
  "brand": "RED MICKY MOUSE..",
  "category": "womens-dresses",
  "thumbnail": "https://i.dummyjson.com/data/products/41/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/41/1.jpg",
  "https://i.dummyjson.com/data/products/41/2.webp",
  "https://i.dummyjson.com/data/products/41/3.jpg",
  "https://i.dummyjson.com/data/products/41/4.jpg",
  "https://i.dummyjson.com/data/products/41/thumbnail.webp"
  ]
  },
  {
  "id": 42,
  "title": "Stiched Kurta plus trouser",
  "description": "FABRIC: LILEIN CHEST: 21 LENGHT: 37 TROUSER: (38) :ARABIC LILEIN",
  "price": 80,
  "discountPercentage": 15.37,
  "rating": 4.05,
  "stock": 148,
  "brand": "Digital Printed",
  "category": "womens-dresses",
  "thumbnail": "https://i.dummyjson.com/data/products/42/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/42/1.png",
  "https://i.dummyjson.com/data/products/42/2.png",
  "https://i.dummyjson.com/data/products/42/3.png",
  "https://i.dummyjson.com/data/products/42/4.jpg",
  "https://i.dummyjson.com/data/products/42/thumbnail.jpg"
  ]
  },
  {
  "id": 43,
  "title": "frock gold printed",
  "description": "Ghazi fabric long frock gold printed ready to wear stitched collection (G992)",
  "price": 600,
  "discountPercentage": 15.55,
  "rating": 4.31,
  "stock": 150,
  "brand": "Ghazi Fabric",
  "category": "womens-dresses",
  "thumbnail": "https://i.dummyjson.com/data/products/43/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/43/1.jpg",
  "https://i.dummyjson.com/data/products/43/2.jpg",
  "https://i.dummyjson.com/data/products/43/3.jpg",
  "https://i.dummyjson.com/data/products/43/4.jpg",
  "https://i.dummyjson.com/data/products/43/thumbnail.jpg"
  ]
  },
  {
  "id": 44,
  "title": "Ladies Multicolored Dress",
  "description": "This classy shirt for women gives you a gorgeous look on everyday wear and specially for semi-casual wears.",
  "price": 79,
  "discountPercentage": 16.88,
  "rating": 4.03,
  "stock": 2,
  "brand": "Ghazi Fabric",
  "category": "womens-dresses",
  "thumbnail": "https://i.dummyjson.com/data/products/44/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/44/1.jpg",
  "https://i.dummyjson.com/data/products/44/2.jpg",
  "https://i.dummyjson.com/data/products/44/3.jpg",
  "https://i.dummyjson.com/data/products/44/4.jpg",
  "https://i.dummyjson.com/data/products/44/thumbnail.jpg"
  ]
  },
  {
  "id": 45,
  "title": "Malai Maxi Dress",
  "description": "Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff",
  "price": 50,
  "discountPercentage": 5.07,
  "rating": 4.67,
  "stock": 96,
  "brand": "IELGY",
  "category": "womens-dresses",
  "thumbnail": "https://i.dummyjson.com/data/products/45/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/45/1.jpg",
  "https://i.dummyjson.com/data/products/45/2.webp",
  "https://i.dummyjson.com/data/products/45/3.jpg",
  "https://i.dummyjson.com/data/products/45/4.jpg",
  "https://i.dummyjson.com/data/products/45/thumbnail.jpg"
  ]
  },
  {
  "id": 46,
  "title": "women's shoes",
  "description": "Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber",
  "price": 40,
  "discountPercentage": 16.96,
  "rating": 4.14,
  "stock": 72,
  "brand": "IELGY fashion",
  "category": "womens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/46/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/46/1.webp",
  "https://i.dummyjson.com/data/products/46/2.jpg",
  "https://i.dummyjson.com/data/products/46/3.jpg",
  "https://i.dummyjson.com/data/products/46/4.jpg",
  "https://i.dummyjson.com/data/products/46/thumbnail.jpg"
  ]
  },
  {
  "id": 47,
  "title": "Sneaker shoes",
  "description": "Synthetic Leather Casual Sneaker shoes for Women/girls Sneakers For Women",
  "price": 120,
  "discountPercentage": 10.37,
  "rating": 4.19,
  "stock": 50,
  "brand": "Synthetic Leather",
  "category": "womens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/47/thumbnail.jpeg",
  "images": [
  "https://i.dummyjson.com/data/products/47/1.jpg",
  "https://i.dummyjson.com/data/products/47/2.jpg",
  "https://i.dummyjson.com/data/products/47/3.jpg",
  "https://i.dummyjson.com/data/products/47/thumbnail.jpeg"
  ]
  },
  {
  "id": 48,
  "title": "Women Strip Heel",
  "description": "Features: Flip-flops, Mid Heel, Comfortable, Striped Heel, Antiskid, Striped",
  "price": 40,
  "discountPercentage": 10.83,
  "rating": 4.02,
  "stock": 25,
  "brand": "Sandals Flip Flops",
  "category": "womens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/48/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/48/1.jpg",
  "https://i.dummyjson.com/data/products/48/2.jpg",
  "https://i.dummyjson.com/data/products/48/3.jpg",
  "https://i.dummyjson.com/data/products/48/4.jpg",
  "https://i.dummyjson.com/data/products/48/thumbnail.jpg"
  ]
  },
  {
  "id": 49,
  "title": "Chappals & Shoe Ladies Metallic",
  "description": "Womens Chappals & Shoe Ladies Metallic Tong Thong Sandal Flat Summer 2020 Maasai Sandals",
  "price": 23,
  "discountPercentage": 2.62,
  "rating": 4.72,
  "stock": 107,
  "brand": "Maasai Sandals",
  "category": "womens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/49/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/49/1.jpg",
  "https://i.dummyjson.com/data/products/49/2.jpg",
  "https://i.dummyjson.com/data/products/49/3.webp",
  "https://i.dummyjson.com/data/products/49/thumbnail.jpg"
  ]
  },
  {
  "id": 50,
  "title": "Women Shoes",
  "description": "2020 New Arrivals Genuine Leather Fashion Trend Platform Summer Women Shoes",
  "price": 36,
  "discountPercentage": 16.87,
  "rating": 4.33,
  "stock": 46,
  "brand": "Arrivals Genuine",
  "category": "womens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/50/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/50/1.jpeg",
  "https://i.dummyjson.com/data/products/50/2.jpg",
  "https://i.dummyjson.com/data/products/50/3.jpg"
  ]
  },
  {
  "id": 51,
  "title": "half sleeves T shirts",
  "description": "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
  "price": 23,
  "discountPercentage": 12.76,
  "rating": 4.26,
  "stock": 132,
  "brand": "Vintage Apparel",
  "category": "mens-shirts",
  "thumbnail": "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/51/1.png",
  "https://i.dummyjson.com/data/products/51/2.jpg",
  "https://i.dummyjson.com/data/products/51/3.jpg",
  "https://i.dummyjson.com/data/products/51/thumbnail.jpg"
  ]
  },
  {
  "id": 52,
  "title": "FREE FIRE T Shirt",
  "description": "quality and professional print - It doesn't just look high quality, it is high quality.",
  "price": 10,
  "discountPercentage": 14.72,
  "rating": 4.52,
  "stock": 128,
  "brand": "FREE FIRE",
  "category": "mens-shirts",
  "thumbnail": "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/52/1.png",
  "https://i.dummyjson.com/data/products/52/2.png",
  "https://i.dummyjson.com/data/products/52/3.jpg",
  "https://i.dummyjson.com/data/products/52/4.jpg",
  "https://i.dummyjson.com/data/products/52/thumbnail.jpg"
  ]
  },
  {
  "id": 53,
  "title": "printed high quality T shirts",
  "description": "Brand: vintage Apparel ,Export quality",
  "price": 35,
  "discountPercentage": 7.54,
  "rating": 4.89,
  "stock": 6,
  "brand": "Vintage Apparel",
  "category": "mens-shirts",
  "thumbnail": "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/53/1.webp",
  "https://i.dummyjson.com/data/products/53/2.jpg",
  "https://i.dummyjson.com/data/products/53/3.jpg",
  "https://i.dummyjson.com/data/products/53/4.jpg",
  "https://i.dummyjson.com/data/products/53/thumbnail.jpg"
  ]
  },
  {
  "id": 54,
  "title": "Pubg Printed Graphic T-Shirt",
  "description": "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
  "price": 46,
  "discountPercentage": 16.44,
  "rating": 4.62,
  "stock": 136,
  "brand": "The Warehouse",
  "category": "mens-shirts",
  "thumbnail": "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/54/1.jpg",
  "https://i.dummyjson.com/data/products/54/2.jpg",
  "https://i.dummyjson.com/data/products/54/3.jpg",
  "https://i.dummyjson.com/data/products/54/4.jpg",
  "https://i.dummyjson.com/data/products/54/thumbnail.jpg"
  ]
  },
  {
  "id": 55,
  "title": "Money Heist Printed Summer T Shirts",
  "description": "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
  "price": 66,
  "discountPercentage": 15.97,
  "rating": 4.9,
  "stock": 122,
  "brand": "The Warehouse",
  "category": "mens-shirts",
  "thumbnail": "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/55/1.jpg",
  "https://i.dummyjson.com/data/products/55/2.webp",
  "https://i.dummyjson.com/data/products/55/3.jpg",
  "https://i.dummyjson.com/data/products/55/4.jpg",
  "https://i.dummyjson.com/data/products/55/thumbnail.jpg"
  ]
  },
  {
  "id": 56,
  "title": "Sneakers Joggers Shoes",
  "description": "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
  "price": 40,
  "discountPercentage": 12.57,
  "rating": 4.38,
  "stock": 6,
  "brand": "Sneakers",
  "category": "mens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/56/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/56/1.jpg",
  "https://i.dummyjson.com/data/products/56/2.jpg",
  "https://i.dummyjson.com/data/products/56/3.jpg",
  "https://i.dummyjson.com/data/products/56/4.jpg",
  "https://i.dummyjson.com/data/products/56/5.jpg",
  "https://i.dummyjson.com/data/products/56/thumbnail.jpg"
  ]
  },
  {
  "id": 57,
  "title": "Loafers for men",
  "description": "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
  "price": 47,
  "discountPercentage": 10.91,
  "rating": 4.91,
  "stock": 20,
  "brand": "Rubber",
  "category": "mens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/57/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/57/1.jpg",
  "https://i.dummyjson.com/data/products/57/2.jpg",
  "https://i.dummyjson.com/data/products/57/3.jpg",
  "https://i.dummyjson.com/data/products/57/4.jpg",
  "https://i.dummyjson.com/data/products/57/thumbnail.jpg"
  ]
  },
  {
  "id": 58,
  "title": "formal offices shoes",
  "description": "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
  "price": 57,
  "discountPercentage": 12,
  "rating": 4.41,
  "stock": 68,
  "brand": "The Warehouse",
  "category": "mens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/58/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/58/1.jpg",
  "https://i.dummyjson.com/data/products/58/2.jpg",
  "https://i.dummyjson.com/data/products/58/3.jpg",
  "https://i.dummyjson.com/data/products/58/4.jpg",
  "https://i.dummyjson.com/data/products/58/thumbnail.jpg"
  ]
  },
  {
  "id": 59,
  "title": "Spring and summershoes",
  "description": "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
  "price": 20,
  "discountPercentage": 8.71,
  "rating": 4.33,
  "stock": 137,
  "brand": "Sneakers",
  "category": "mens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/59/1.jpg",
  "https://i.dummyjson.com/data/products/59/2.jpg",
  "https://i.dummyjson.com/data/products/59/3.jpg",
  "https://i.dummyjson.com/data/products/59/4.jpg",
  "https://i.dummyjson.com/data/products/59/thumbnail.jpg"
  ]
  },
  {
  "id": 60,
  "title": "Stylish Casual Jeans Shoes",
  "description": "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
  "price": 58,
  "discountPercentage": 7.55,
  "rating": 4.55,
  "stock": 129,
  "brand": "Sneakers",
  "category": "mens-shoes",
  "thumbnail": "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/60/1.jpg",
  "https://i.dummyjson.com/data/products/60/2.jpg",
  "https://i.dummyjson.com/data/products/60/3.jpg",
  "https://i.dummyjson.com/data/products/60/thumbnail.jpg"
  ]
  },
  {
  "id": 61,
  "title": "Leather Straps Wristwatch",
  "description": "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
  "price": 120,
  "discountPercentage": 7.14,
  "rating": 4.63,
  "stock": 91,
  "brand": "Naviforce",
  "category": "mens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/61/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/61/1.jpg",
  "https://i.dummyjson.com/data/products/61/2.png",
  "https://i.dummyjson.com/data/products/61/3.jpg"
  ]
  },
  {
  "id": 62,
  "title": "Waterproof Leather Brand Watch",
  "description": "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
  "price": 46,
  "discountPercentage": 3.15,
  "rating": 4.05,
  "stock": 95,
  "brand": "SKMEI 9117",
  "category": "mens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/62/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/62/1.jpg",
  "https://i.dummyjson.com/data/products/62/2.jpg"
  ]
  },
  {
  "id": 63,
  "title": "Royal Blue Premium Watch",
  "description": "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
  "price": 50,
  "discountPercentage": 2.56,
  "rating": 4.89,
  "stock": 142,
  "brand": "SKMEI 9117",
  "category": "mens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/63/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/63/1.jpg",
  "https://i.dummyjson.com/data/products/63/2.jpg",
  "https://i.dummyjson.com/data/products/63/3.png",
  "https://i.dummyjson.com/data/products/63/4.jpeg"
  ]
  },
  {
  "id": 64,
  "title": "Leather Strap Skeleton Watch",
  "description": "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
  "price": 46,
  "discountPercentage": 10.2,
  "rating": 4.98,
  "stock": 61,
  "brand": "Strap Skeleton",
  "category": "mens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/64/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/64/1.jpg",
  "https://i.dummyjson.com/data/products/64/2.webp",
  "https://i.dummyjson.com/data/products/64/3.jpg",
  "https://i.dummyjson.com/data/products/64/thumbnail.jpg"
  ]
  },
  {
  "id": 65,
  "title": "Stainless Steel Wrist Watch",
  "description": "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
  "price": 47,
  "discountPercentage": 17.79,
  "rating": 4.79,
  "stock": 94,
  "brand": "Stainless",
  "category": "mens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/65/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/65/1.jpg",
  "https://i.dummyjson.com/data/products/65/2.webp",
  "https://i.dummyjson.com/data/products/65/3.jpg",
  "https://i.dummyjson.com/data/products/65/4.webp",
  "https://i.dummyjson.com/data/products/65/thumbnail.webp"
  ]
  },
  {
  "id": 66,
  "title": "Steel Analog Couple Watches",
  "description": "Elegant design, Stylish ,Unique & Trendy,Comfortable wear",
  "price": 35,
  "discountPercentage": 3.23,
  "rating": 4.79,
  "stock": 24,
  "brand": "Eastern Watches",
  "category": "womens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/66/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/66/1.jpg",
  "https://i.dummyjson.com/data/products/66/2.jpg",
  "https://i.dummyjson.com/data/products/66/3.jpg",
  "https://i.dummyjson.com/data/products/66/4.JPG",
  "https://i.dummyjson.com/data/products/66/thumbnail.jpg"
  ]
  },
  {
  "id": 67,
  "title": "Fashion Magnetic Wrist Watch",
  "description": "Buy this awesome  The product is originally manufactured by the company and it's a top selling product with a very reasonable",
  "price": 60,
  "discountPercentage": 16.69,
  "rating": 4.03,
  "stock": 46,
  "brand": "Eastern Watches",
  "category": "womens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/67/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/67/1.jpg",
  "https://i.dummyjson.com/data/products/67/2.jpg",
  "https://i.dummyjson.com/data/products/67/3.jpg",
  "https://i.dummyjson.com/data/products/67/4.jpg",
  "https://i.dummyjson.com/data/products/67/thumbnail.jpg"
  ]
  },
  {
  "id": 68,
  "title": "Stylish Luxury Digital Watch",
  "description": "Stylish Luxury Digital Watch For Girls / Women - Led Smart Ladies Watches For Girls",
  "price": 57,
  "discountPercentage": 9.03,
  "rating": 4.55,
  "stock": 77,
  "brand": "Luxury Digital",
  "category": "womens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/68/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/68/1.jpg",
  "https://i.dummyjson.com/data/products/68/2.jpg"
  ]
  },
  {
  "id": 69,
  "title": "Golden Watch Pearls Bracelet Watch",
  "description": "Product details of Golden Watch Pearls Bracelet Watch For Girls - Golden Chain Ladies Bracelate Watch for Women",
  "price": 47,
  "discountPercentage": 17.55,
  "rating": 4.77,
  "stock": 89,
  "brand": "Watch Pearls",
  "category": "womens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/69/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/69/1.jpg",
  "https://i.dummyjson.com/data/products/69/2.jpg",
  "https://i.dummyjson.com/data/products/69/3.webp",
  "https://i.dummyjson.com/data/products/69/4.jpg",
  "https://i.dummyjson.com/data/products/69/thumbnail.jpg"
  ]
  },
  {
  "id": 70,
  "title": "Stainless Steel Women",
  "description": "Fashion Skmei 1830 Shell Dial Stainless Steel Women Wrist Watch Lady Bracelet Watch Quartz Watches Ladies",
  "price": 35,
  "discountPercentage": 8.98,
  "rating": 4.08,
  "stock": 111,
  "brand": "Bracelet",
  "category": "womens-watches",
  "thumbnail": "https://i.dummyjson.com/data/products/70/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/70/1.jpg",
  "https://i.dummyjson.com/data/products/70/2.jpg",
  "https://i.dummyjson.com/data/products/70/thumbnail.jpg"
  ]
  },
  {
  "id": 71,
  "title": "Women Shoulder Bags",
  "description": "LouisWill Women Shoulder Bags Long Clutches Cross Body Bags Phone Bags PU Leather Hand Bags Large Capacity Card Holders Zipper Coin Purses Fashion Crossbody Bags for Girls Ladies",
  "price": 46,
  "discountPercentage": 14.65,
  "rating": 4.71,
  "stock": 17,
  "brand": "LouisWill",
  "category": "womens-bags",
  "thumbnail": "https://i.dummyjson.com/data/products/71/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/71/1.jpg",
  "https://i.dummyjson.com/data/products/71/2.jpg",
  "https://i.dummyjson.com/data/products/71/3.webp",
  "https://i.dummyjson.com/data/products/71/thumbnail.jpg"
  ]
  },
  {
  "id": 72,
  "title": "Handbag For Girls",
  "description": "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
  "price": 23,
  "discountPercentage": 17.5,
  "rating": 4.91,
  "stock": 27,
  "brand": "LouisWill",
  "category": "womens-bags",
  "thumbnail": "https://i.dummyjson.com/data/products/72/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/72/1.jpg",
  "https://i.dummyjson.com/data/products/72/2.png",
  "https://i.dummyjson.com/data/products/72/3.webp",
  "https://i.dummyjson.com/data/products/72/4.jpg",
  "https://i.dummyjson.com/data/products/72/thumbnail.webp"
  ]
  },
  {
  "id": 73,
  "title": "Fancy hand clutch",
  "description": "This fashion is designed to add a charming effect to your casual outfit. This Bag is made of synthetic leather.",
  "price": 44,
  "discountPercentage": 10.39,
  "rating": 4.18,
  "stock": 101,
  "brand": "Bracelet",
  "category": "womens-bags",
  "thumbnail": "https://i.dummyjson.com/data/products/73/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/73/1.jpg",
  "https://i.dummyjson.com/data/products/73/2.webp",
  "https://i.dummyjson.com/data/products/73/3.jpg",
  "https://i.dummyjson.com/data/products/73/thumbnail.jpg"
  ]
  },
  {
  "id": 74,
  "title": "Leather Hand Bag",
  "description": "It features an attractive design that makes it a must have accessory in your collection. We sell different kind of bags for boys, kids, women, girls and also for unisex.",
  "price": 57,
  "discountPercentage": 11.19,
  "rating": 4.01,
  "stock": 43,
  "brand": "Copenhagen Luxe",
  "category": "womens-bags",
  "thumbnail": "https://i.dummyjson.com/data/products/74/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/74/1.jpg",
  "https://i.dummyjson.com/data/products/74/2.jpg",
  "https://i.dummyjson.com/data/products/74/3.jpg",
  "https://i.dummyjson.com/data/products/74/4.jpg",
  "https://i.dummyjson.com/data/products/74/thumbnail.jpg"
  ]
  },
  {
  "id": 75,
  "title": "Seven Pocket Women Bag",
  "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
  "price": 68,
  "discountPercentage": 14.87,
  "rating": 4.93,
  "stock": 13,
  "brand": "Steal Frame",
  "category": "womens-bags",
  "thumbnail": "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/75/1.jpg",
  "https://i.dummyjson.com/data/products/75/2.jpg",
  "https://i.dummyjson.com/data/products/75/3.jpg",
  "https://i.dummyjson.com/data/products/75/thumbnail.jpg"
  ]
  },
  {
  "id": 76,
  "title": "Silver Ring Set Women",
  "description": "Jewelry Type:RingsCertificate Type:NonePlating:Silver PlatedShapeattern:noneStyle:CLASSICReligious",
  "price": 70,
  "discountPercentage": 13.57,
  "rating": 4.61,
  "stock": 51,
  "brand": "Darojay",
  "category": "womens-jewellery",
  "thumbnail": "https://i.dummyjson.com/data/products/76/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/76/1.jpg",
  "https://i.dummyjson.com/data/products/76/2.jpg",
  "https://i.dummyjson.com/data/products/76/thumbnail.jpg"
  ]
  },
  {
  "id": 77,
  "title": "Rose Ring",
  "description": "Brand: The Greetings Flower Colour: RedRing Colour: GoldenSize: Adjustable",
  "price": 100,
  "discountPercentage": 3.22,
  "rating": 4.21,
  "stock": 149,
  "brand": "Copenhagen Luxe",
  "category": "womens-jewellery",
  "thumbnail": "https://i.dummyjson.com/data/products/77/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/77/1.jpg",
  "https://i.dummyjson.com/data/products/77/2.jpg",
  "https://i.dummyjson.com/data/products/77/3.jpg",
  "https://i.dummyjson.com/data/products/77/thumbnail.jpg"
  ]
  },
  {
  "id": 78,
  "title": "Rhinestone Korean Style Open Rings",
  "description": "Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women",
  "price": 30,
  "discountPercentage": 8.02,
  "rating": 4.69,
  "stock": 9,
  "brand": "Fashion Jewellery",
  "category": "womens-jewellery",
  "thumbnail": "https://i.dummyjson.com/data/products/78/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/78/thumbnail.jpg"
  ]
  },
  {
  "id": 79,
  "title": "Elegant Female Pearl Earrings",
  "description": "Elegant Female Pearl Earrings Set Zircon Pearl Earings Women Party Accessories 9 Pairs/Set",
  "price": 30,
  "discountPercentage": 12.8,
  "rating": 4.74,
  "stock": 16,
  "brand": "Fashion Jewellery",
  "category": "womens-jewellery",
  "thumbnail": "https://i.dummyjson.com/data/products/79/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/79/1.jpg"
  ]
  },
  {
  "id": 80,
  "title": "Chain Pin Tassel Earrings",
  "description": "Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)",
  "price": 45,
  "discountPercentage": 17.75,
  "rating": 4.59,
  "stock": 9,
  "brand": "Cuff Butterfly",
  "category": "womens-jewellery",
  "thumbnail": "https://i.dummyjson.com/data/products/80/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/80/1.jpg",
  "https://i.dummyjson.com/data/products/80/2.jpg",
  "https://i.dummyjson.com/data/products/80/3.png",
  "https://i.dummyjson.com/data/products/80/4.jpg",
  "https://i.dummyjson.com/data/products/80/thumbnail.jpg"
  ]
  },
  {
  "id": 81,
  "title": "Round Silver Frame Sun Glasses",
  "description": "A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,",
  "price": 19,
  "discountPercentage": 10.1,
  "rating": 4.94,
  "stock": 78,
  "brand": "Designer Sun Glasses",
  "category": "sunglasses",
  "thumbnail": "https://i.dummyjson.com/data/products/81/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/81/1.jpg",
  "https://i.dummyjson.com/data/products/81/2.jpg",
  "https://i.dummyjson.com/data/products/81/3.jpg",
  "https://i.dummyjson.com/data/products/81/4.webp",
  "https://i.dummyjson.com/data/products/81/thumbnail.jpg"
  ]
  },
  {
  "id": 82,
  "title": "Kabir Singh Square Sunglass",
  "description": "Orignal Metal Kabir Singh design 2020 Sunglasses Men Brand Designer Sun Glasses Kabir Singh Square Sunglass",
  "price": 50,
  "discountPercentage": 15.6,
  "rating": 4.62,
  "stock": 78,
  "brand": "Designer Sun Glasses",
  "category": "sunglasses",
  "thumbnail": "https://i.dummyjson.com/data/products/82/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/82/1.jpg",
  "https://i.dummyjson.com/data/products/82/2.webp",
  "https://i.dummyjson.com/data/products/82/3.jpg",
  "https://i.dummyjson.com/data/products/82/4.jpg",
  "https://i.dummyjson.com/data/products/82/thumbnail.jpg"
  ]
  },
  {
  "id": 83,
  "title": "Wiley X Night Vision Yellow Glasses",
  "description": "Wiley X Night Vision Yellow Glasses for Riders - Night Vision Anti Fog Driving Glasses - Free Night Glass Cover - Shield Eyes From Dust and Virus- For Night Sport Matches",
  "price": 30,
  "discountPercentage": 6.33,
  "rating": 4.97,
  "stock": 115,
  "brand": "mastar watch",
  "category": "sunglasses",
  "thumbnail": "https://i.dummyjson.com/data/products/83/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/83/1.jpg",
  "https://i.dummyjson.com/data/products/83/2.jpg",
  "https://i.dummyjson.com/data/products/83/3.jpg",
  "https://i.dummyjson.com/data/products/83/4.jpg",
  "https://i.dummyjson.com/data/products/83/thumbnail.jpg"
  ]
  },
  {
  "id": 84,
  "title": "Square Sunglasses",
  "description": "Fashion Oversized Square Sunglasses Retro Gradient Big Frame Sunglasses For Women One Piece Gafas Shade Mirror Clear Lens 17059",
  "price": 28,
  "discountPercentage": 13.89,
  "rating": 4.64,
  "stock": 64,
  "brand": "mastar watch",
  "category": "sunglasses",
  "thumbnail": "https://i.dummyjson.com/data/products/84/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/84/1.jpg",
  "https://i.dummyjson.com/data/products/84/2.jpg",
  "https://i.dummyjson.com/data/products/84/thumbnail.jpg"
  ]
  },
  {
  "id": 85,
  "title": "LouisWill Men Sunglasses",
  "description": "LouisWill Men Sunglasses Polarized Sunglasses UV400 Sunglasses Day Night Dual Use Safety Driving Night Vision Eyewear AL-MG Frame Sun Glasses with Free Box for Drivers",
  "price": 50,
  "discountPercentage": 11.27,
  "rating": 4.98,
  "stock": 92,
  "brand": "LouisWill",
  "category": "sunglasses",
  "thumbnail": "https://i.dummyjson.com/data/products/85/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/85/1.jpg",
  "https://i.dummyjson.com/data/products/85/2.jpg",
  "https://i.dummyjson.com/data/products/85/thumbnail.jpg"
  ]
  },
  {
  "id": 86,
  "title": "Bluetooth Aux",
  "description": "Bluetooth Aux Bluetooth Car Aux Car Bluetooth Transmitter Aux Audio Receiver Handfree Car Bluetooth Music Receiver Universal 3.5mm Streaming A2DP Wireless Auto AUX Audio Adapter With Mic For Phone MP3",
  "price": 25,
  "discountPercentage": 10.56,
  "rating": 4.57,
  "stock": 22,
  "brand": "Car Aux",
  "category": "automotive",
  "thumbnail": "https://i.dummyjson.com/data/products/86/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/86/1.jpg",
  "https://i.dummyjson.com/data/products/86/2.webp",
  "https://i.dummyjson.com/data/products/86/3.jpg",
  "https://i.dummyjson.com/data/products/86/4.jpg",
  "https://i.dummyjson.com/data/products/86/thumbnail.jpg"
  ]
  },
  {
  "id": 87,
  "title": "t Temperature Controller Incubator Controller",
  "description": "Both Heat and Cool Purpose, Temperature control range; -50 to +110, Temperature measurement accuracy; 0.1, Control accuracy; 0.1",
  "price": 40,
  "discountPercentage": 11.3,
  "rating": 4.54,
  "stock": 37,
  "brand": "W1209 DC12V",
  "category": "automotive",
  "thumbnail": "https://i.dummyjson.com/data/products/87/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/87/1.jpg",
  "https://i.dummyjson.com/data/products/87/2.jpg",
  "https://i.dummyjson.com/data/products/87/3.jpg",
  "https://i.dummyjson.com/data/products/87/4.jpg",
  "https://i.dummyjson.com/data/products/87/thumbnail.jpg"
  ]
  },
  {
  "id": 88,
  "title": "TC Reusable Silicone Magic Washing Gloves",
  "description": "TC Reusable Silicone Magic Washing Gloves with Scrubber, Cleaning Brush Scrubber Gloves Heat Resistant Pair for Cleaning of Kitchen, Dishes, Vegetables and Fruits, Bathroom, Car Wash, Pet Care and Multipurpose",
  "price": 29,
  "discountPercentage": 3.19,
  "rating": 4.98,
  "stock": 42,
  "brand": "TC Reusable",
  "category": "automotive",
  "thumbnail": "https://i.dummyjson.com/data/products/88/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/88/1.jpg",
  "https://i.dummyjson.com/data/products/88/2.jpg",
  "https://i.dummyjson.com/data/products/88/3.jpg",
  "https://i.dummyjson.com/data/products/88/4.webp",
  "https://i.dummyjson.com/data/products/88/thumbnail.jpg"
  ]
  },
  {
  "id": 89,
  "title": "Qualcomm original Car Charger",
  "description": "best Quality CHarger , Highly Recommended to all best Quality CHarger , Highly Recommended to all",
  "price": 40,
  "discountPercentage": 17.53,
  "rating": 4.2,
  "stock": 79,
  "brand": "TC Reusable",
  "category": "automotive",
  "thumbnail": "https://i.dummyjson.com/data/products/89/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/89/1.jpg",
  "https://i.dummyjson.com/data/products/89/2.jpg",
  "https://i.dummyjson.com/data/products/89/3.jpg",
  "https://i.dummyjson.com/data/products/89/4.jpg",
  "https://i.dummyjson.com/data/products/89/thumbnail.jpg"
  ]
  },
  {
  "id": 90,
  "title": "Cycle Bike Glow",
  "description": "Universal fitment and easy to install no special wires, can be easily installed and removed. Fits most standard tyre air stem valves of road, mountain bicycles, motocycles and cars.Bright led will turn on w",
  "price": 35,
  "discountPercentage": 11.08,
  "rating": 4.1,
  "stock": 63,
  "brand": "Neon LED Light",
  "category": "automotive",
  "thumbnail": "https://i.dummyjson.com/data/products/90/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/90/1.jpg",
  "https://i.dummyjson.com/data/products/90/2.jpg",
  "https://i.dummyjson.com/data/products/90/3.jpg",
  "https://i.dummyjson.com/data/products/90/4.jpg",
  "https://i.dummyjson.com/data/products/90/thumbnail.jpg"
  ]
  },
  {
  "id": 91,
  "title": "Black Motorbike",
  "description": "Engine Type:Wet sump, Single Cylinder, Four Stroke, Two Valves, Air Cooled with SOHC (Single Over Head Cam) Chain Drive Bore & Stroke:47.0 x 49.5 MM",
  "price": 569,
  "discountPercentage": 13.63,
  "rating": 4.04,
  "stock": 115,
  "brand": "METRO 70cc Motorcycle - MR70",
  "category": "motorcycle",
  "thumbnail": "https://i.dummyjson.com/data/products/91/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/91/1.jpg",
  "https://i.dummyjson.com/data/products/91/2.jpg",
  "https://i.dummyjson.com/data/products/91/3.jpg",
  "https://i.dummyjson.com/data/products/91/4.jpg",
  "https://i.dummyjson.com/data/products/91/thumbnail.jpg"
  ]
  },
  {
  "id": 92,
  "title": "HOT SALE IN EUROPE electric racing motorcycle",
  "description": "HOT SALE IN EUROPE electric racing motorcycle electric motorcycle for sale adult electric motorcycles",
  "price": 920,
  "discountPercentage": 14.4,
  "rating": 4.19,
  "stock": 22,
  "brand": "BRAVE BULL",
  "category": "motorcycle",
  "thumbnail": "https://i.dummyjson.com/data/products/92/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/92/1.jpg",
  "https://i.dummyjson.com/data/products/92/2.jpg",
  "https://i.dummyjson.com/data/products/92/3.jpg",
  "https://i.dummyjson.com/data/products/92/4.jpg"
  ]
  },
  {
  "id": 93,
  "title": "Automatic Motor Gas Motorcycles",
  "description": "150cc 4-Stroke Motorcycle Automatic Motor Gas Motorcycles Scooter motorcycles 150cc scooter",
  "price": 1050,
  "discountPercentage": 3.34,
  "rating": 4.84,
  "stock": 127,
  "brand": "shock absorber",
  "category": "motorcycle",
  "thumbnail": "https://i.dummyjson.com/data/products/93/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/93/1.jpg",
  "https://i.dummyjson.com/data/products/93/2.jpg",
  "https://i.dummyjson.com/data/products/93/3.jpg",
  "https://i.dummyjson.com/data/products/93/4.jpg",
  "https://i.dummyjson.com/data/products/93/thumbnail.jpg"
  ]
  },
  {
  "id": 94,
  "title": "new arrivals Fashion motocross goggles",
  "description": "new arrivals Fashion motocross goggles motorcycle motocross racing motorcycle",
  "price": 900,
  "discountPercentage": 3.85,
  "rating": 4.06,
  "stock": 109,
  "brand": "JIEPOLLY",
  "category": "motorcycle",
  "thumbnail": "https://i.dummyjson.com/data/products/94/thumbnail.webp",
  "images": [
  "https://i.dummyjson.com/data/products/94/1.webp",
  "https://i.dummyjson.com/data/products/94/2.jpg",
  "https://i.dummyjson.com/data/products/94/3.jpg",
  "https://i.dummyjson.com/data/products/94/thumbnail.webp"
  ]
  },
  {
  "id": 95,
  "title": "Wholesale cargo lashing Belt",
  "description": "Wholesale cargo lashing Belt Tie Down end Ratchet strap customized strap 25mm motorcycle 1500kgs with rubber handle",
  "price": 930,
  "discountPercentage": 17.67,
  "rating": 4.21,
  "stock": 144,
  "brand": "Xiangle",
  "category": "motorcycle",
  "thumbnail": "https://i.dummyjson.com/data/products/95/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/95/1.jpg",
  "https://i.dummyjson.com/data/products/95/2.jpg",
  "https://i.dummyjson.com/data/products/95/3.jpg",
  "https://i.dummyjson.com/data/products/95/4.jpg",
  "https://i.dummyjson.com/data/products/95/thumbnail.jpg"
  ]
  },
  {
  "id": 96,
  "title": "lighting ceiling kitchen",
  "description": "Wholesale slim hanging decorative kid room lighting ceiling kitchen chandeliers pendant light modern",
  "price": 30,
  "discountPercentage": 14.89,
  "rating": 4.83,
  "stock": 96,
  "brand": "lightingbrilliance",
  "category": "lighting",
  "thumbnail": "https://i.dummyjson.com/data/products/96/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/96/1.jpg",
  "https://i.dummyjson.com/data/products/96/2.jpg",
  "https://i.dummyjson.com/data/products/96/3.jpg",
  "https://i.dummyjson.com/data/products/96/4.jpg",
  "https://i.dummyjson.com/data/products/96/thumbnail.jpg"
  ]
  },
  {
  "id": 97,
  "title": "Metal Ceramic Flower",
  "description": "Metal Ceramic Flower Chandelier Home Lighting American Vintage Hanging Lighting Pendant Lamp",
  "price": 35,
  "discountPercentage": 10.94,
  "rating": 4.93,
  "stock": 146,
  "brand": "Ifei Home",
  "category": "lighting",
  "thumbnail": "https://i.dummyjson.com/data/products/97/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/97/1.jpg",
  "https://i.dummyjson.com/data/products/97/2.jpg",
  "https://i.dummyjson.com/data/products/97/3.jpg",
  "https://i.dummyjson.com/data/products/97/4.webp",
  "https://i.dummyjson.com/data/products/97/thumbnail.jpg"
  ]
  },
  {
  "id": 98,
  "title": "3 lights lndenpant kitchen islang",
  "description": "3 lights lndenpant kitchen islang dining room pendant rice paper chandelier contemporary led pendant light modern chandelier",
  "price": 34,
  "discountPercentage": 5.92,
  "rating": 4.99,
  "stock": 44,
  "brand": "DADAWU",
  "category": "lighting",
  "thumbnail": "https://i.dummyjson.com/data/products/98/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/98/1.jpg",
  "https://i.dummyjson.com/data/products/98/2.jpg",
  "https://i.dummyjson.com/data/products/98/3.jpg",
  "https://i.dummyjson.com/data/products/98/4.jpg",
  "https://i.dummyjson.com/data/products/98/thumbnail.jpg"
  ]
  },
  {
  "id": 99,
  "title": "American Vintage Wood Pendant Light",
  "description": "American Vintage Wood Pendant Light Farmhouse Antique Hanging Lamp Lampara Colgante",
  "price": 46,
  "discountPercentage": 8.84,
  "rating": 4.32,
  "stock": 138,
  "brand": "Ifei Home",
  "category": "lighting",
  "thumbnail": "https://i.dummyjson.com/data/products/99/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/99/1.jpg",
  "https://i.dummyjson.com/data/products/99/2.jpg",
  "https://i.dummyjson.com/data/products/99/3.jpg",
  "https://i.dummyjson.com/data/products/99/4.jpg",
  "https://i.dummyjson.com/data/products/99/thumbnail.jpg"
  ]
  },
  {
  "id": 100,
  "title": "Crystal chandelier maria theresa for 12 light",
  "description": "Crystal chandelier maria theresa for 12 light",
  "price": 47,
  "discountPercentage": 16,
  "rating": 4.74,
  "stock": 133,
  "brand": "YIOSI",
  "category": "lighting",
  "thumbnail": "https://i.dummyjson.com/data/products/100/thumbnail.jpg",
  "images": [
  "https://i.dummyjson.com/data/products/100/1.jpg",
  "https://i.dummyjson.com/data/products/100/2.jpg",
  "https://i.dummyjson.com/data/products/100/3.jpg",
  "https://i.dummyjson.com/data/products/100/thumbnail.jpg"
  ]
  }
  ],
  "total": 100,
  "skip": 0,
  "limit": 100
  }


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/routing */ "./src/components/routing.ts");
/* harmony import */ var _components_main_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-template */ "./src/components/main-template.ts");
/* harmony import */ var _components_store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/store-page */ "./src/components/store-page.ts");
/* harmony import */ var _components_error_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error-page */ "./src/components/error-page.ts");
/* harmony import */ var _components_cart_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart-page */ "./src/components/cart-page.ts");
/* harmony import */ var _components_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-page */ "./src/components/product-page.ts");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/range */ "./src/components/range.ts");
/* harmony import */ var _components_filterItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _components_goods__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/goods */ "./src/components/goods.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/view */ "./src/components/view.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_view__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search */ "./src/components/search.ts");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.ts");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_sorting__WEBPACK_IMPORTED_MODULE_12__);














})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDUDtBQUNoQztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBUTtBQUM1QiwyQkFBMkIsdURBQU07QUFDakM7QUFDQTtBQUNBLFFBQVEsd0VBQW9CO0FBQzVCLG9CQUFvQiw0REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDhDO0FBQ1A7QUFDRDtBQUNhO0FBQ3VCO0FBQzFFO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxJQUFJO0FBQ3JFLHFDQUFxQyxJQUFJLE1BQU07QUFDL0MscURBQXFELElBQUksS0FBSyx1QkFBdUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxJQUFJO0FBQ3JFLGtDQUFrQyxJQUFJLE1BQU07QUFDNUMsa0RBQWtELElBQUksS0FBSyxtQkFBbUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsbUJBQW1CO0FBQ3JFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFvQjtBQUN4QixnQkFBZ0IsNERBQVE7QUFDeEI7QUFDQSxRQUFRLHdEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEI7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkI7QUFDQSxJQUFJLG1EQUFXO0FBQ2Y7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0QsMERBQTBELEtBQUs7QUFDL0Qsc0RBQXNELEtBQUs7QUFDM0Qsd0RBQXdELEtBQUs7QUFDN0Q7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQWU7QUFDM0M7QUFDQSx5Q0FBeUMsbUVBQWUsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQix1RUFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1RUFBbUI7QUFDL0M7QUFDQSx5Q0FBeUMsdUVBQW1CLGFBQWE7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNOEM7QUFDSztBQUNaO0FBQ2hDO0FBQ1A7QUFDQSxrQkFBa0IscUVBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsZUFBZTtBQUNoRSxxQ0FBcUMsd0JBQXdCLEtBQUs7QUFDbEU7QUFDQSxpQ0FBaUMsV0FBVztBQUM1QztBQUNBLHVDQUF1QyxXQUFXLEtBQUs7QUFDdkQsdUNBQXVDLCtEQUErRCxLQUFLO0FBQzNHO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWSxPQUFPO0FBQ3ZELDZDQUE2QyxNQUFNLEVBQUUsV0FBVztBQUNoRTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsUUFBUTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVUsYUFBYSxPQUFPO0FBQzFDLFlBQVksZ0VBQWlCO0FBQzdCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGtEQUFrRCxvQ0FBb0M7QUFDdEYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZEMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYztBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDhDO0FBQ0Q7QUFDN0M7QUFDQSxnRUFBZ0UsS0FBSztBQUNyRTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsS0FBSyx3QkFBd0IsU0FBUyxTQUFTLElBQUksU0FBUyxJQUFJLGdCQUFnQixLQUFLO0FBQzlKLHVFQUF1RSxLQUFLLHdCQUF3QixTQUFTLFNBQVMsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEtBQUs7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLEtBQUssV0FBVyxTQUFTLFNBQVMsSUFBSSxRQUFRLElBQUk7QUFDaEk7QUFDQTtBQUNBLDRFQUE0RSxLQUFLLFdBQVcsU0FBUyxTQUFTLElBQUksUUFBUSxJQUFJO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwREFBYSxNQUFNO0FBQ2xFLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNERBQTRELEtBQUs7QUFDakUsd0RBQXdELEtBQUs7QUFDN0QsMERBQTBELEtBQUs7QUFDL0Qsc0RBQXNELEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkIsVUFBVSxhQUFhLEVBQUUsdUNBQXVDO0FBQ2hFLFVBQVUsWUFBWSxFQUFFLHlDQUF5QztBQUNqRSxVQUFVLFlBQVksRUFBRSxxQ0FBcUM7QUFDN0QsVUFBVSxhQUFhLEVBQUUscUNBQXFDO0FBQzlELFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DLDJFQUF1QixFQUFFLDJFQUF1QjtBQUNuRjtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsMkVBQXVCLEVBQUUsMkVBQXVCO0FBQ2pGO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDK0M7QUFDRjtBQUNNO0FBQ0o7QUFDL0M7QUFDQSxTQUFTLHdEQUFlO0FBQ3hCLGdCQUFnQiw0REFBaUI7QUFDakMsYUFBYSxzREFBYztBQUMzQixhQUFhLHdEQUFlO0FBQzVCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7QUNwQzhDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQVE7QUFDeEI7QUFDQTs7Ozs7Ozs7Ozs7QUNWYTtBQUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIOEM7QUFDdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw0RUFBd0IsQ0FBQztBQUNuRztBQUNBO0FBQ0E7QUFDQSw2RkFBNkY7QUFDN0YsOEZBQThGO0FBQzlGLGdHQUFnRztBQUNoRyxpR0FBaUc7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxxQ0FBcUMsNEVBQXdCLENBQUM7QUFDOUQ7QUFDQTs7Ozs7Ozs7Ozs7QUM5RGE7QUFDYjtBQUNBLGdDQUFnQyw4Q0FBOEMsb0JBQW9CLElBQUk7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDREQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0REFBYTtBQUMzQyxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hIeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdENmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDZCQUE2QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSwrQ0FBK0MsdUJBQXVCO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcnpEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDUTtBQUNNO0FBQ0g7QUFDQTtBQUNEO0FBQ0c7QUFDUDtBQUNLO0FBQ0w7QUFDRDtBQUNFO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXguc2Nzcz9jZjBhIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9lcnJvci1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlckl0ZW0udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcm91dGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc29ydGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zdG9yZS1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZGF0YS1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9hc3NldHMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9zY3JpcHRzL2RhdGEtcGFyc2VyXCI7XHJcbmltcG9ydCBGaWx0ZXIgZnJvbSBcIi4uL3NjcmlwdHMvZmlsdGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXJ0UGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiQ2FydFwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcbiAgICAgICAgZmlsdGVyLnN3aXRjaEJyYW5kKCdBcHBsZScpO1xyXG4gICAgICAgIGZpbHRlci5zd2l0Y2hCcmFuZCgnU2Ftc3VuZycpO1xyXG4gICAgICAgIHByb2R1Y3RzLmFwcGx5RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIC8vIGZpbHRlci5zZXRTdG9jaygnbWF4JywgNTEpO1xyXG4gICAgICAgIC8vIHByb2R1Y3RzLmFwcGx5RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJDYXJ0XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVycm9yUGFnZSgpIHtcclxuICAgIGNvbnN0IGVycm9yQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIGlmIChlcnJvckFyZWEpIHtcclxuICAgICAgICBlcnJvckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2Vycm9yX19ibG9jayc+UEFHRSBOT1QgRk9VTkQgKDQwNCk8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9zY3JpcHRzL2ZpbHRlcic7XHJcbmltcG9ydCB7IHJlbmRlckdvb2RzIH0gZnJvbSAnLi9nb29kcyc7XHJcbmltcG9ydCB7IHJlbmRlckdvb2RzUXVhbnRpdHkgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VSYW5nZSwgY2hhbmdlUHJpY2VSYW5nZSwgY2hhbmdlU3RvY2tSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xyXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19jYXRlZ29yeV9hcmVhJyk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gcHJvZHVjdHMuY2F0ZWdvcmllcztcclxuICAgIGxldCBjYXRlZ29yeUlubmVyID0gYDxkaXYgY2xhc3M9J2NhdGVnb3J5X19jb250YWluZXInPmA7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNhdGVnb3J5SW5uZXIgKz0gYDxkaXYgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94JyB2YWx1ZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnY2F0ZWdvcnknPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fcXVhbnRpdHknIGRhdGEtcGFyYW0gPVwiJHtrZXl9XCI+KCR7Y2F0ZWdvcmllc1trZXldLmxlbmd0aH0pPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgY2F0ZWdvcnlJbm5lciArPSBgPC9kaXY+YDtcclxuICAgIGlmIChjYXRlZ29yaWVzQXJlYSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNBcmVhLmlubmVySFRNTCA9IGNhdGVnb3J5SW5uZXI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQnJhbmRzKCkge1xyXG4gICAgY29uc3QgYnJhbmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2JyYW5kX2FyZWEnKTtcclxuICAgIGNvbnN0IGJyYW5kcyA9IHByb2R1Y3RzLmJyYW5kcztcclxuICAgIGxldCBicmFuZHNJbm5lciA9IGA8ZGl2IGNsYXNzPSdicmFuZF9fY29udGFpbmVyJz5gO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGJyYW5kcykge1xyXG4gICAgICAgIGJyYW5kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3N0cmluZyc+XHJcbiAgICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94JyBjbGFzcz0nZmlsdGVyX19jaGVja2JveCcgdmFsdWU9XCIke2tleX1cIiBkYXRhLXBhcmFtID0gJ2JyYW5kJz5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3RpdGxlJz4ke2tleX0mZW5zcDs8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3F1YW50aXR5JyBkYXRhLXBhcmFtID1cIiR7a2V5fVwiPigke2JyYW5kc1trZXldLmxlbmd0aH0pPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgYnJhbmRzSW5uZXIgKz0gYDwvZGl2PmA7XHJcbiAgICBpZiAoYnJhbmRzQXJlYSkge1xyXG4gICAgICAgIGJyYW5kc0FyZWEuaW5uZXJIVE1MID0gYnJhbmRzSW5uZXI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkRmlsdGVyUGFyYW1zKCkge1xyXG4gICAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fY2hlY2tib3gnKTtcclxuICAgIGNoZWNrYm94cy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyBjaGFuZ2VGaWx0ZXJzKGUpOyB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcclxuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnV0dG9uX3Jlc2V0Jyk7XHJcbiAgICBidXR0b25SZXNldCA9PT0gbnVsbCB8fCBidXR0b25SZXNldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZpbHRlcnMpO1xyXG59XHJcbmNvbnN0IGZpbHRlck51bGwgPSB7XHJcbiAgICBjYXRlZ29yeTogW10sXHJcbiAgICBicmFuZDogW10sXHJcbiAgICBwcmljZTogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG4gICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxufTtcclxubGV0IGZpbHRlciA9IHtcclxuICAgIGNhdGVnb3J5OiBbXSxcclxuICAgIGJyYW5kOiBbXSxcclxuICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmlsdGVycyhldmVudCkge1xyXG4gICAgbGV0IHBhcmFtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhcmFtO1xyXG4gICAgbGV0IG5ld0ZpbHRlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBpZiAocGFyYW0pIHtcclxuICAgICAgICBpZiAocGFyYW0gPT09IFwicHJpY2VcIiB8fCBwYXJhbSA9PT0gXCJzdG9ja1wiKSB7XHJcbiAgICAgICAgICAgIGxldCBzaWRlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnNpZGU7XHJcbiAgICAgICAgICAgIGlmIChzaWRlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzaWRlID09PSAnbWluJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ubWluID0gTnVtYmVyKG5ld0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLm1heCA9IE51bWJlcihuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyW3BhcmFtXS5pbmRleE9mKG5ld0ZpbHRlcikgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kID0gZmlsdGVyW3BhcmFtXS5pbmRleE9mKG5ld0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLnNwbGljZShpbmQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5wdXNoKG5ld0ZpbHRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW0pIHtcclxuICAgICAgICBydW5GaWx0cmF0aW9uKHBhcmFtKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBydW5GaWx0cmF0aW9uKHByb3ApIHtcclxuICAgIGxldCBmaWx0ZXJEb3dubG9hZGVkID0gbmV3IEZpbHRlcjtcclxuICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlci5jYXRlZ29yeS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaENhdGVnb3J5KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyLmJyYW5kLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGZpbHRlckRvd25sb2FkZWQuc3dpdGNoQnJhbmQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnByaWNlLm1pbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0UHJpY2UoXCJtaW5cIiwgZmlsdGVyLnByaWNlLm1pbik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnByaWNlLm1heCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0UHJpY2UoXCJtYXhcIiwgZmlsdGVyLnByaWNlLm1heCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnN0b2NrLm1pbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RvY2soXCJtaW5cIiwgZmlsdGVyLnN0b2NrLm1pbik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnN0b2NrLm1heCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RvY2soXCJtYXhcIiwgZmlsdGVyLnN0b2NrLm1heCk7XHJcbiAgICB9XHJcbiAgICBwcm9kdWN0cy5hcHBseUZpbHRlcihmaWx0ZXJEb3dubG9hZGVkKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcclxuICAgIGlmIChwcm9wID09PSAncHJpY2UnKSB7XHJcbiAgICAgICAgY2hhbmdlU3RvY2tSYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0b2NrJykge1xyXG4gICAgICAgIGNoYW5nZVByaWNlUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNoYW5nZVJhbmdlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJHb29kcygpO1xyXG4gICAgcmVyZW5kZXJHb29kc1F1YW50aXR5KCk7XHJcbiAgICByZW5kZXJHb29kc1F1YW50aXR5KCk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlUmFuZ2VQb2ludHMocHJvcCkge1xyXG4gICAgbGV0IHJhbmdlTWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyb21TbGlkZXIke3Byb3B9YCk7XHJcbiAgICBsZXQgcmFuZ2VNaW5OdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZnJvbUlucHV0JHtwcm9wfWApO1xyXG4gICAgbGV0IHJhbmdlTWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvU2xpZGVyJHtwcm9wfWApO1xyXG4gICAgbGV0IHJhbmdlTWF4TnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvSW5wdXQke3Byb3B9YCk7XHJcbiAgICBpZiAoZmlsdGVyW3Byb3BdLm1pbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJhbmdlTWluLnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1pbn1gO1xyXG4gICAgICAgIHJhbmdlTWluTnVtLnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1pbn1gO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlcltwcm9wXS5tYXggIT09IG51bGwpIHtcclxuICAgICAgICByYW5nZU1heC52YWx1ZSA9IGAke2ZpbHRlcltwcm9wXS5tYXh9YDtcclxuICAgICAgICByYW5nZU1heE51bS52YWx1ZSA9IGAke2ZpbHRlcltwcm9wXS5tYXh9YDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZXJlbmRlckdvb2RzUXVhbnRpdHkoKSB7XHJcbiAgICBjb25zdCBxdWFudGl0eUFyZWFCcmFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEJyYW5kcyA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmJyYW5kcykge1xyXG4gICAgICAgIGZpbHRlcmVkQnJhbmRzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHF1YW50aXR5QXJlYUJyYW5kcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZEJyYW5kcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgKCR7cHJvZHVjdHMuYnJhbmRzW2tleV0ubGVuZ3RofSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMCknO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRDYXRlZ29yaWVzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHF1YW50aXR5QXJlYUNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGl0ZW0uZGF0YXNldC5wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCgke3Byb2R1Y3RzLmNhdGVnb3JpZXNba2V5XS5sZW5ndGh9KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gJygwKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fY2hlY2tib3gnKTtcclxuICAgIGNoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBmaWx0ZXIgPSBmaWx0ZXJOdWxsO1xyXG4gICAgcnVuRmlsdHJhdGlvbihudWxsKTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJGaWx0ZXJzKCkge1xyXG4gICAgcmVuZGVyQ2F0ZWdvcmllcygpO1xyXG4gICAgcmVuZGVyQnJhbmRzKCk7XHJcbiAgICBhZGRGaWx0ZXJQYXJhbXMoKTtcclxuICAgIGFkZEV2ZW50cygpO1xyXG59XHJcbnJlbmRlckZpbHRlcnMoKTtcclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9kdWN0UGFnZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlJztcclxuaW1wb3J0IHsgYWRkUGF0aFVybCB9IGZyb20gJy4vcm91dGluZyc7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHb29kcygpIHtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgY29uc3QgZ29vZHMgPSBwcm9kdWN0cy5wcm9kdWN0cztcclxuICAgIGxldCBnb29kc0lubmVyID0gYDxkaXYgY2xhc3M9J2dvb2RzX193cmFwcGVyJz5gO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGdvb2RzKSB7XHJcbiAgICAgICAgbGV0IGdvb2QgPSBnb29kc1trZXldO1xyXG4gICAgICAgIGdvb2RzSW5uZXIgKz0gYDxkaXYgY2xhc3M9J2dvb2RzX19jYXJkIGNhcmQnPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aHVtYm5haWwnPlxyXG4gICAgICAgIDxpbWcgYWx0PSdnb29kJyBjbGFzcz0nY2FyZF9faW1nJyBzcmM9JyR7Z29vZC50aHVtYm5haWx9Jz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19kaXNjb250Jz4ke2dvb2QuZGlzY291bnRQZXJjZW50YWdlfSYjMzc7PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aXRsZSc+JHtnb29kLnRpdGxlfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2VfbmV3Jz4ke2dvb2QucHJpY2V9JiMzNjs8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZV9vbGQnPiR7TWF0aC5mbG9vcihnb29kLnByaWNlIC8gKDEwMCAtIGdvb2QuZGlzY291bnRQZXJjZW50YWdlKSAqIDEwMCl9JiMzNjs8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2JvdHRvbSc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcmF0aW5nJz4ke2dvb2QucmF0aW5nfSZzdGFyZjs8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19zdG9jayc+U3RvY2sgJiM1ODsgJiMzMjsgJHtnb29kLnN0b2NrfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fYnV0dG9ucyc+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9hZGQnPkFkZCB0byBjYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9tb3JlJyBkYXRhLWdvb2RJRCA9IFwiJHtnb29kLmlkfVwiPlNlZSBtb3JlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGlmIChnb29kc0FyZWEpIHtcclxuICAgICAgICBnb29kc0FyZWEuaW5uZXJIVE1MID0gZ29vZHNJbm5lcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbnNUb1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYnV0dG9uX21vcmUnKTtcclxuICAgIGJ1dHRvbnNUb1Byb2R1Y3QuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBnb29kSUQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5nb29kaWQ7XHJcbiAgICAgICAgICAgIGFkZFBhdGhVcmwoYC9wcm9kdWN0LyR7Z29vZElEfWApO1xyXG4gICAgICAgICAgICByZW5kZXJQcm9kdWN0UGFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkX19idXR0b25fYWRkXCIpO1xyXG4gICAgYnV0dG9uQ2FydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgY2hhbmdlQnV0dG9uQ2FydChlLmN1cnJlbnRUYXJnZXQpOyB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUJ1dHRvbkNhcnQoZSkge1xyXG4gICAgaWYgKChlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUuaW5uZXJIVE1MKSA9PSBcIkFkZCB0byBjYXJ0XCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiEhIVwiKTtcclxuICAgICAgICBlLmlubmVySFRNTCA9IFwiRGVsZXRlIGZyb20gY2FydFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5pbm5lckhUTUwpID09IFwiRGVsZXRlIGZyb20gY2FydFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjI1wiKTtcclxuICAgICAgICBlLmlubmVySFRNTCA9IFwiQWRkIHRvIGNhcnRcIjtcclxuICAgIH1cclxufVxyXG5yZW5kZXJHb29kcygpO1xyXG4iLCJpbXBvcnQgeyBoYW5kbGVMb2NhdGlvbiB9IGZyb20gJy4vcm91dGluZyc7XHJcbmNvbnN0IHRlbXBsYXRlQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RvcmVfX3Byb2plY3RcIik7XHJcbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKCkge1xyXG4gICAgaWYgKHRlbXBsYXRlQXJlYSkge1xyXG4gICAgICAgIHRlbXBsYXRlQXJlYS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gJ3dyYXBwZXInPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzID0gJ2hlYWRlcic+SGVhZGVyXHJcbiAgICAgICAgPGEgaHJlZj0nLyc+TG9nbzwvYT5cclxuICAgICAgICA8YSBocmVmPScvY2FydCc+Q2FydDwvYT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzID0gJ21haW4nPk1haW5cclxuICAgICAgICA8YSBocmVmPScvcHJvZHVjdCc+UHJvZHVjdDwvYT5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzID0gJ2Zvb3Rlcic+Rm9vdGVyPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGluaXRQcm9qZWN0KCkge1xyXG4gICAgcmVuZGVyVGVtcGxhdGUoKTtcclxuICAgIGhhbmRsZUxvY2F0aW9uKCk7XHJcbn1cclxuaW5pdFByb2plY3QoKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJQcm9kdWN0XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgeyBjaGFuZ2VGaWx0ZXJzIH0gZnJvbSAnLi9maWx0ZXJJdGVtJztcclxuZnVuY3Rpb24gcmVuZGVyUmFuZ2UocHJvcCwgbWluLCBtYXgsIG1pblZhbHVlLCBtYXhWYWx1ZSkge1xyXG4gICAgY29uc3QgcmFuZ2VQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5maWx0ZXJfX3JhbmdlXyR7cHJvcH1gKTtcclxuICAgIGlmIChyYW5nZVBsYWNlKSB7XHJcbiAgICAgICAgcmFuZ2VQbGFjZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInJhbmdlX19jb250YWluZXIgcmFuZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJhbmdlX19jb250cm9sX3NsaWRlcnNcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwicmFuZ2VfX2lucHV0IHJhbmdlX19pbnB1dF9taW5cIiBpZD1cImZyb21TbGlkZXIke3Byb3B9XCIgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIke21pblZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4fVwiIGRhdGEtcGFyYW09XCIke3Byb3B9XCIgZGF0YS1zaWRlID1cIm1pblwiLz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwicmFuZ2VfX2lucHV0IHJhbmdlX19pbnB1dF9tYXhcIiBpZD1cInRvU2xpZGVyJHtwcm9wfVwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiJHttYXhWYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9XCIke21heH1cIiBkYXRhLXBhcmFtPVwiJHtwcm9wfVwiIGRhdGEtc2lkZSA9XCJtYXhcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmFuZ2VfX2NvbnRyb2xfZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fY29udHJvbF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyXCIgdHlwZT1cIm51bWJlclwiIGlkPVwiZnJvbUlucHV0JHtwcm9wfVwiIHZhbHVlPVwiJHttaW5WYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9JHttYXh9Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fY29udHJvbF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyXCIgdHlwZT1cIm51bWJlclwiIGlkPVwidG9JbnB1dCR7cHJvcH1cIiB2YWx1ZT1cIiR7bWF4VmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PSR7bWF4fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX2lucHV0Jyk7XHJcbiAgICByYW5nZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7IGNoYW5nZUZpbHRlcnMoZSk7IH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUmFuZ2VGdW5jdGlvbmFsaXR5KHByb3ApIHtcclxuICAgIGNvbnN0IGZyb21TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZnJvbVNsaWRlciR7cHJvcH1gKTtcclxuICAgIGNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvU2xpZGVyJHtwcm9wfWApO1xyXG4gICAgY29uc3QgZnJvbUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Zyb21JbnB1dCR7cHJvcH1gKTtcclxuICAgIGNvbnN0IHRvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9JbnB1dCR7cHJvcH1gKTtcclxuICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XHJcbiAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvU2xpZGVyKTtcclxuICAgIGlmIChmcm9tU2xpZGVyICYmIHRvU2xpZGVyICYmIGZyb21JbnB1dCAmJiB0b0lucHV0KSB7XHJcbiAgICAgICAgZnJvbVNsaWRlci5vbmlucHV0ID0gKCkgPT4gY29udHJvbEZyb21TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIGZyb21JbnB1dCk7XHJcbiAgICAgICAgdG9TbGlkZXIub25pbnB1dCA9ICgpID0+IGNvbnRyb2xUb1NsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgdG9JbnB1dCk7XHJcbiAgICAgICAgZnJvbUlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjb250cm9sRnJvbUlucHV0KGZyb21TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xyXG4gICAgICAgIHRvSW5wdXQub25pbnB1dCA9ICgpID0+IGNvbnRyb2xUb0lucHV0KHRvU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIHRvU2xpZGVyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbnRyb2xGcm9tSW5wdXQoZnJvbVNsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XHJcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xyXG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbUlucHV0LCB0b0lucHV0LCAnI0M2QzZDNicsICcjYmIxYjIzJywgY29udHJvbFNsaWRlcik7XHJcbiAgICAgICAgaWYgKGZyb20gPiB0bykge1xyXG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29udHJvbFRvSW5wdXQodG9TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgY29udHJvbFNsaWRlcikge1xyXG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcclxuICAgICAgICBmaWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIGNvbnRyb2xTbGlkZXIpO1xyXG4gICAgICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9JbnB1dCk7XHJcbiAgICAgICAgaWYgKGZyb20gPD0gdG8pIHtcclxuICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29udHJvbEZyb21TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIGZyb21JbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xyXG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XHJcbiAgICAgICAgaWYgKGZyb20gPiB0bykge1xyXG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpIHtcclxuICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21TbGlkZXIsIHRvU2xpZGVyKTtcclxuICAgICAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xyXG4gICAgICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xyXG4gICAgICAgIGlmIChmcm9tIDw9IHRvKSB7XHJcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgICAgICAgICB0b1NsaWRlci52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRQYXJzZWQoY3VycmVudEZyb20sIGN1cnJlbnRUbykge1xyXG4gICAgICAgIGNvbnN0IGZyb20gPSBwYXJzZUludChjdXJyZW50RnJvbS52YWx1ZSwgMTApO1xyXG4gICAgICAgIGNvbnN0IHRvID0gcGFyc2VJbnQoY3VycmVudFRvLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgcmV0dXJuIFtmcm9tLCB0b107XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmaWxsU2xpZGVyKGZyb20sIHRvLCBzbGlkZXJDb2xvciwgcmFuZ2VDb2xvciwgY29udHJvbFNsaWRlcikge1xyXG4gICAgICAgIGlmIChmcm9tICYmIHRvICYmIGNvbnRyb2xTbGlkZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2VEaXN0YW5jZSA9IE51bWJlcih0by5tYXgpIC0gTnVtYmVyKHRvLm1pbik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IE51bWJlcihmcm9tLnZhbHVlKSAtIE51bWJlcih0by5taW4pO1xyXG4gICAgICAgICAgICBjb25zdCB0b1Bvc2l0aW9uID0gTnVtYmVyKHRvLnZhbHVlKSAtIE51bWJlcih0by5taW4pO1xyXG4gICAgICAgICAgICBjb250cm9sU2xpZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICR7c2xpZGVyQ29sb3J9IDAlLFxyXG4gICAgICAgICR7c2xpZGVyQ29sb3J9ICR7KGZyb21Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSxcclxuICAgICAgICAke3JhbmdlQ29sb3J9ICR7KChmcm9tUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpKSAqIDEwMH0lLFxyXG4gICAgICAgICR7cmFuZ2VDb2xvcn0gJHsodG9Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSwgXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gJHsodG9Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSwgXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gMTAwJSlgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFRvZ2dsZUFjY2Vzc2libGUoY3VycmVudFRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvU2xpZGVyJHtwcm9wfWApO1xyXG4gICAgICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIE51bWJlcihjdXJyZW50VGFyZ2V0LnZhbHVlKSA8PSAwICYmIHRvU2xpZGVyKSB7XHJcbiAgICAgICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IFN0cmluZygyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0b1NsaWRlcikge1xyXG4gICAgICAgICAgICAgICAgdG9TbGlkZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmljZVJhbmdlKCkge1xyXG4gICAgcmVuZGVyUmFuZ2UoXCJwcmljZVwiLCAxMCwgMTc0OSwgcHJvZHVjdHMucHJpY2VSYW5nZS5taW4sIHByb2R1Y3RzLnByaWNlUmFuZ2UubWF4KTtcclxuICAgIGFkZFJhbmdlRnVuY3Rpb25hbGl0eShcInByaWNlXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTdG9ja1JhbmdlKCkge1xyXG4gICAgcmVuZGVyUmFuZ2UoXCJzdG9ja1wiLCAyLCAxNTAsIHByb2R1Y3RzLnN0b2NrUmFuZ2UubWluLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1heCk7XHJcbiAgICBhZGRSYW5nZUZ1bmN0aW9uYWxpdHkoXCJzdG9ja1wiKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUmFuZ2UoKSB7XHJcbiAgICBjaGFuZ2VQcmljZVJhbmdlKCk7XHJcbiAgICBjaGFuZ2VTdG9ja1JhbmdlKCk7XHJcbn1cclxuY2hhbmdlUmFuZ2UoKTtcclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyByZW5kZXJFcnJvclBhZ2UgfSBmcm9tICcuL2Vycm9yLXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJDYXJ0UGFnZSB9IGZyb20gJy4vY2FydC1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyUHJvZHVjdFBhZ2UgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlclN0b3JlUGFnZSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAgICcvJzogcmVuZGVyU3RvcmVQYWdlLFxyXG4gICAgJy9wcm9kdWN0JzogcmVuZGVyUHJvZHVjdFBhZ2UsXHJcbiAgICAnL2NhcnQnOiByZW5kZXJDYXJ0UGFnZSxcclxuICAgICdlcnJvcic6IHJlbmRlckVycm9yUGFnZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbcGF0aF0gfHwgcm91dGVzLmVycm9yO1xyXG4gICAgcm91dGUoKTtcclxufSk7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXRoVXJsKHByb3ApIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcHJvcCk7XHJcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xyXG59XHJcbi8vIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RfX2l0ZW1cIik7XHJcbi8vIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4vLyAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4vLyAgICAgY29uc3QgcGF0aDogc3RyaW5nID0gKGUudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmO1xyXG4vLyAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgIH0pXHJcbi8vIH0pXHJcbndpbmRvdy5vbnBvcHN0YXRlID0gaGFuZGxlTG9jYXRpb247XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5mdW5jdGlvbiBydW5TZWFyY2goKSB7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0Jyk7XHJcbiAgICBzZWFyY2hJbnB1dCA9PT0gbnVsbCB8fCBzZWFyY2hJbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgcnVuRmlsdGVyKHNlYXJjaElucHV0LnZhbHVlKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJ1bkZpbHRlcihwcm9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbn1cclxucnVuU2VhcmNoKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5mdW5jdGlvbiBzb3J0R29vZHMoKSB7XHJcbn1cclxuc29ydEdvb2RzKCk7XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RvcmVQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGFydGljbGUgY2xhc3M9J3N0b3JlX19wYWdlIHN0b3JlJz5cclxuICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX3NlYXJjaCBzZWFyY2gnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3NlYXJjaF9fYmxvY2snPlxyXG4gICAgICAgICAgPGltZyBhbHQ9J3NlYXJjaCcgY2xhc3M9J3NlYXJjaF9faW1nJyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nL3NlYXJjaDMucG5nJz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzZWFyY2gnIGNsYXNzPSdzZWFyY2hfX2lucHV0JyBwbGFjZWhvbGRlciA9J1NlYXJjaCBwcm9kdWN0Jz48L2lucHV0PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J3N0b3JlX19tYWluJz5cclxuICAgICAgICA8YXNpZGUgY2xhc3M9J3N0b3JlX19maWx0ZXJzIGZpbHRlcic+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19jYXRlZ29yeSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPkNhdGVnb3J5PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2NhdGVnb3J5X2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19icmFuZCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPkJyYW5kPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2JyYW5kX2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19wcmljZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlByaWNlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2FyZWFfcmFuZ2UgZmlsdGVyX19yYW5nZV9wcmljZSc+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX3N0b2NrJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+U3RvY2s8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYXJlYV9yYW5nZSBmaWx0ZXJfX3JhbmdlX3N0b2NrJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fYnV0dG9ucyc+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ZpbHRlcl9fYnV0dG9uIGZpbHRlcl9fYnV0dG9uX3Jlc2V0IGJ1dHRvbic+UmVzZXQgZmlsdGVyczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdmaWx0ZXJfX2J1dHRvbiBmaWx0ZXJfX2J1dHRvbl9zYXZlIGJ1dHRvbic+U2F2ZSBmaWx0ZXJzPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPSdzdG9yZV9fZ29vZHMgZ29vZHMnPlxyXG4gICAgICAgICAgPGgyIGNsYXNzPSdnb29kc19fdGl0bGUnPkZvdW5kOiA8c3BhbiBjbGFzcz0nZ29vZHNfX3F1YW50aXR5Jz4ke3Byb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX29wdGlvbnMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fc29ydGVycyBzb3J0ZXJzJz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfbG93Jz5wcmljZSAmIzg1OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3ByaWNlIHNvcnRlcnNfX3ByaWNlX2hpZ2gnPnByaWNlICYjODU5Mzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcmF0aW5nIHNvcnRlcnNfX3JhdGluZ19sb3cnPnJhdGluZyAmIzg1OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3JhdGluZyBzb3J0ZXJzX19yYXRpbmdfaGlnaCc+cmF0aW5nICYjODU5Mzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX192aWV3IHZpZXcnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdfX2J1dHRvbic+PGltZyBhbHQ9J2dyaWQnIGNsYXNzPSd2aWV3X19idXR0b25faW1nIHZpZXdfX2J1dHRvbl9tYW55JyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nLzAwMy1ncmlkLTEucG5nJz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24nPjxpbWcgYWx0PSdncmlkJyBjbGFzcz0ndmlld19fYnV0dG9uX2FjdGl2ZSB2aWV3X19idXR0b25faW1nIHZpZXdfX2J1dHRvbl9mZXcnIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvMDA0LW1lbnUtMS5wbmcnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX2FyZWEnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5gO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHb29kc1F1YW50aXR5KCkge1xyXG4gICAgY29uc3QgZ29vZHNxdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fcXVhbnRpdHknKTtcclxuICAgIGlmIChnb29kc3F1YW50aXR5KSB7XHJcbiAgICAgICAgZ29vZHNxdWFudGl0eS5pbm5lckhUTUwgPSBgJHtwcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGh9YDtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuY29uc3QgYnV0dG9uc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld19fYnV0dG9uX2ltZycpO1xyXG5idXR0b25zVmlldy5mb3JFYWNoKGJ1dHRvbiA9PiB7IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4geyBjaGFuZ2VWaWV3KGV2ZW50KTsgfSk7IH0pO1xyXG5mdW5jdGlvbiBjaGFuZ2VWaWV3KGV2KSB7XHJcbiAgICBidXR0b25zVmlldy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGFjdGl2ZUJ1dHRvbiA9IGV2LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlld19fYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX193cmFwcGVyJyk7XHJcbiAgICBnb29kc0FyZWEgPT09IG51bGwgfHwgZ29vZHNBcmVhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnb29kc0FyZWEuY2xhc3NMaXN0LnRvZ2dsZSgnZ29vZHNfX3dyYXBwZXJfbWFueScpO1xyXG59XHJcbiIsImltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi9hc3NldHMvZGF0YS9kYXRhJztcclxuY2xhc3MgUHJvZHVjdHMge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmJyYW5kcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvY2tSYW5nZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmdldFByb2R1Y3RzKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNNZXRhZGF0YSgpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdHMoZGF0YSkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBicmFuZDogZWwuYnJhbmQsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZWwuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZWwuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBkaXNjb3VudFBlcmNlbnRhZ2U6IGVsLmRpc2NvdW50UGVyY2VudGFnZSxcclxuICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcclxuICAgICAgICAgICAgICAgIGltYWdlczogZWwuaW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IGVsLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgcmF0aW5nOiBlbC5yYXRpbmcsXHJcbiAgICAgICAgICAgICAgICBzdG9jazogZWwuc3RvY2ssXHJcbiAgICAgICAgICAgICAgICB0aHVtYm5haWw6IGVsLnRodW1ibmFpbCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBlbC50aXRsZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cztcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RzTWV0YWRhdGEoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMucHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMucHJpY2VSYW5nZS5taW4gPiBwcm9kdWN0LnByaWNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVJhbmdlLm1pbiA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWF4IDwgcHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5tYXggPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9ja1JhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5zdG9ja1JhbmdlLm1pbiA+IHByb2R1Y3Quc3RvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b2NrUmFuZ2UubWluID0gcHJvZHVjdC5zdG9jaztcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvY2tSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMuc3RvY2tSYW5nZS5tYXggPCBwcm9kdWN0LnN0b2NrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9ja1JhbmdlLm1heCA9IHByb2R1Y3Quc3RvY2s7XHJcbiAgICAgICAgICAgIGlmICghKHByb2R1Y3QuYnJhbmQgaW4gdGhpcy5icmFuZHMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyYW5kc1twcm9kdWN0LmJyYW5kXSA9IFtwcm9kdWN0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJyYW5kc1twcm9kdWN0LmJyYW5kXS5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICBpZiAoIShwcm9kdWN0LmNhdGVnb3J5IGluIHRoaXMuY2F0ZWdvcmllcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twcm9kdWN0LmNhdGVnb3J5XSA9IFtwcm9kdWN0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcHJvZHVjdC5jYXRlZ29yeV0ucHVzaChwcm9kdWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0QnlJZChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzW2lkIC0gMV07XHJcbiAgICB9XHJcbiAgICBhcHBseUZpbHRlcihmaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuICAgICAgICB0aGlzLmJyYW5kcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvY2tSYW5nZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IGluZCA9IDA7IGluZCA8IHRoaXMucHJvZHVjdHMubGVuZ3RoOyBpbmQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMucHJvZHVjdHNbaW5kXTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpbmQtLTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci5jYXRlZ29yeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGZpbHRlci5jYXRlZ29yeS5pbmNsdWRlcyhlbC5jYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShmaWx0ZXIuYnJhbmQuaW5jbHVkZXMoZWwuYnJhbmQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnByaWNlLm1pbiAhPT0gLTEgJiYgZWwucHJpY2UgPCBmaWx0ZXIucHJpY2UubWluKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnByaWNlLm1heCAhPT0gLTEgJiYgZWwucHJpY2UgPiBmaWx0ZXIucHJpY2UubWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0b2NrLm1pbiAhPT0gLTEgJiYgZWwuc3RvY2sgPCBmaWx0ZXIuc3RvY2subWluKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0b2NrLm1heCAhPT0gLTEgJiYgZWwuc3RvY2sgPiBmaWx0ZXIuc3RvY2subWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBwcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XHJcbiIsImNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZCA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hDYXRlZ29yeShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnkuaW5jbHVkZXMoaXRlbSkpXHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5LmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hCcmFuZChpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnJhbmQuaW5jbHVkZXMoaXRlbSkpXHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmJyYW5kLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzZXRQcmljZShwYXJhbWV0ZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlciA9PT0gJ21pbicpXHJcbiAgICAgICAgICAgIHRoaXMucHJpY2UubWluID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByaWNlLm1heCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0U3RvY2socGFyYW1ldGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIgPT09ICdtaW4nKVxyXG4gICAgICAgICAgICB0aGlzLnN0b2NrLm1pbiA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdG9jay5tYXggPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBcInByb2R1Y3RzXCI6IFtcbiAge1xuICBcImlkXCI6IDEsXG4gIFwidGl0bGVcIjogXCJpUGhvbmUgOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gYXBwbGUgbW9iaWxlIHdoaWNoIGlzIG5vdGhpbmcgbGlrZSBhcHBsZVwiLFxuICBcInByaWNlXCI6IDU0OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuOTYsXG4gIFwicmF0aW5nXCI6IDQuNjksXG4gIFwic3RvY2tcIjogOTQsXG4gIFwiYnJhbmRcIjogXCJBcHBsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyLFxuICBcInRpdGxlXCI6IFwiaVBob25lIFhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNJTS1GcmVlLCBNb2RlbCBBMTkyMTEgNi41LWluY2ggU3VwZXIgUmV0aW5hIEhEIGRpc3BsYXkgd2l0aCBPTEVEIHRlY2hub2xvZ3kgQTEyIEJpb25pYyBjaGlwIHdpdGggLi4uXCIsXG4gIFwicHJpY2VcIjogODk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy45NCxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiAzNCxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMsXG4gIFwidGl0bGVcIjogXCJTYW1zdW5nIFVuaXZlcnNlIDlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbXN1bmcncyBuZXcgdmFyaWFudCB3aGljaCBnb2VzIGJleW9uZCBHYWxheHkgdG8gdGhlIFVuaXZlcnNlXCIsXG4gIFwicHJpY2VcIjogMTI0OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNDYsXG4gIFwicmF0aW5nXCI6IDQuMDksXG4gIFwic3RvY2tcIjogMzYsXG4gIFwiYnJhbmRcIjogXCJTYW1zdW5nXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMvMS5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0LFxuICBcInRpdGxlXCI6IFwiT1BQT0YxOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT1BQTyBGMTkgaXMgb2ZmaWNpYWxseSBhbm5vdW5jZWQgb24gQXByaWwgMjAyMS5cIixcbiAgXCJwcmljZVwiOiAyODAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjkxLFxuICBcInJhdGluZ1wiOiA0LjMsXG4gIFwic3RvY2tcIjogMTIzLFxuICBcImJyYW5kXCI6IFwiT1BQT1wiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1LFxuICBcInRpdGxlXCI6IFwiSHVhd2VpIFAzMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSHVhd2Vp4oCZcyByZS1iYWRnZWQgUDMwIFBybyBOZXcgRWRpdGlvbiB3YXMgb2ZmaWNpYWxseSB1bnZlaWxlZCB5ZXN0ZXJkYXkgaW4gR2VybWFueSBhbmQgbm93IHRoZSBkZXZpY2UgaGFzIG1hZGUgaXRzIHdheSB0byB0aGUgVUsuXCIsXG4gIFwicHJpY2VcIjogNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC41OCxcbiAgXCJyYXRpbmdcIjogNC4wOSxcbiAgXCJzdG9ja1wiOiAzMixcbiAgXCJicmFuZFwiOiBcIkh1YXdlaVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNixcbiAgXCJ0aXRsZVwiOiBcIk1hY0Jvb2sgUHJvXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWNCb29rIFBybyAyMDIxIHdpdGggbWluaS1MRUQgZGlzcGxheSBtYXkgbGF1bmNoIGJldHdlZW4gU2VwdGVtYmVyLCBOb3ZlbWJlclwiLFxuICBcInByaWNlXCI6IDE3NDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjAyLFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDgzLFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvdGh1bWJuYWlsLnBuZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNyxcbiAgXCJ0aXRsZVwiOiBcIlNhbXN1bmcgR2FsYXh5IEJvb2tcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbXN1bmcgR2FsYXh5IEJvb2sgUyAoMjAyMCkgTGFwdG9wIFdpdGggSW50ZWwgTGFrZWZpZWxkIENoaXAsIDhHQiBvZiBSQU0gTGF1bmNoZWRcIixcbiAgXCJwcmljZVwiOiAxNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjE1LFxuICBcInJhdGluZ1wiOiA0LjI1LFxuICBcInN0b2NrXCI6IDUwLFxuICBcImJyYW5kXCI6IFwiU2Ftc3VuZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgsXG4gIFwidGl0bGVcIjogXCJNaWNyb3NvZnQgU3VyZmFjZSBMYXB0b3AgNFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGUgYW5kIHNwZWVkLiBTdGFuZCBvdXQgb24gSEQgdmlkZW8gY2FsbHMgYmFja2VkIGJ5IFN0dWRpbyBNaWNzLiBDYXB0dXJlIGlkZWFzIG9uIHRoZSB2aWJyYW50IHRvdWNoc2NyZWVuLlwiLFxuICBcInByaWNlXCI6IDE0OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjIzLFxuICBcInJhdGluZ1wiOiA0LjQzLFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiTWljcm9zb2Z0IFN1cmZhY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5LFxuICBcInRpdGxlXCI6IFwiSW5maW5peCBJTkJPT0tcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluZmluaXggSW5ib29rIFgxIENpMyAxMHRoIDhHQiAyNTZHQiAxNCBXaW4xMCBHcmV5IOKAkyAxIFllYXIgV2FycmFudHlcIixcbiAgXCJwcmljZVwiOiAxMDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS44MyxcbiAgXCJyYXRpbmdcIjogNC41NCxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcIkluZmluaXhcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMCxcbiAgXCJ0aXRsZVwiOiBcIkhQIFBhdmlsaW9uIDE1LURLMTA1NldNXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTSBHYW1pbmcgTGFwdG9wIDEwdGggR2VuIENvcmUgaTUsIDhHQiwgMjU2R0IgU1NELCBHVFggMTY1MCA0R0IsIFdpbmRvd3MgMTBcIixcbiAgXCJwcmljZVwiOiAxMDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA2LjE4LFxuICBcInJhdGluZ1wiOiA0LjQzLFxuICBcInN0b2NrXCI6IDg5LFxuICBcImJyYW5kXCI6IFwiSFAgUGF2aWxpb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTEsXG4gIFwidGl0bGVcIjogXCJwZXJmdW1lIE9pbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVnYSBEaXNjb3VudCwgSW1wcmVzc2lvbiBvZiBBY3F1YSBEaSBHaW8gYnkgR2lvcmdpb0FybWFuaSBjb25jZW50cmF0ZWQgYXR0YXIgcGVyZnVtZSBPaWxcIixcbiAgXCJwcmljZVwiOiAxMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC40LFxuICBcInJhdGluZ1wiOiA0LjI2LFxuICBcInN0b2NrXCI6IDY1LFxuICBcImJyYW5kXCI6IFwiSW1wcmVzc2lvbiBvZiBBY3F1YSBEaSBHaW9cIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEyLFxuICBcInRpdGxlXCI6IFwiQnJvd24gUGVyZnVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUm95YWxfTWlyYWdlIFNwb3J0IEJyb3duIFBlcmZ1bWUgZm9yIE1lbiAmIFdvbWVuIC0gMTIwbWxcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNjYsXG4gIFwicmF0aW5nXCI6IDQsXG4gIFwic3RvY2tcIjogNTIsXG4gIFwiYnJhbmRcIjogXCJSb3lhbF9NaXJhZ2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMyxcbiAgXCJ0aXRsZVwiOiBcIkZvZyBTY2VudCBYcHJlc3NpbyBQZXJmdW1lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgQmVzdCBGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZSAxMDBtbCBGb3IgTWVuIGNvb2wgbG9uZyBsYXN0aW5nIHBlcmZ1bWVzIGZvciBNZW5cIixcbiAgXCJwcmljZVwiOiAxMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4xNCxcbiAgXCJyYXRpbmdcIjogNC41OSxcbiAgXCJzdG9ja1wiOiA2MSxcbiAgXCJicmFuZFwiOiBcIkZvZyBTY2VudCBYcHJlc3Npb1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTQsXG4gIFwidGl0bGVcIjogXCJOb24tQWxjb2hvbGljIENvbmNlbnRyYXRlZCBQZXJmdW1lIE9pbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT3JpZ2luYWwgQWwgTXVuYWtowq4gYnkgTWFoYWwgQWwgTXVzayB8IE91ciBJbXByZXNzaW9uIG9mIENsaW1hdGUgfCA2bWwgTm9uLUFsY29ob2xpYyBDb25jZW50cmF0ZWQgUGVyZnVtZSBPaWxcIixcbiAgXCJwcmljZVwiOiAxMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjYsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTE0LFxuICBcImJyYW5kXCI6IFwiQWwgTXVuYWtoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNSxcbiAgXCJ0aXRsZVwiOiBcIkVhdSBEZSBQZXJmdW1lIFNwcmF5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHZW51aW5lICBBbC1SZWhhYiBzcHJheSBwZXJmdW1lIGZyb20gVUFFL1NhdWRpIEFyYWJpYS9ZZW1lbiBIaWdoIFF1YWxpdHlcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTksXG4gIFwicmF0aW5nXCI6IDQuNyxcbiAgXCJzdG9ja1wiOiAxMDUsXG4gIFwiYnJhbmRcIjogXCJMb3JkIC0gQWwtUmVoYWJcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNixcbiAgXCJ0aXRsZVwiOiBcIkh5YWx1cm9uaWMgQWNpZCBTZXJ1bVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTCdPcsODwqlhbCBQYXJpcyBpbnRyb2R1Y2VzIEh5YWx1cm9uIEV4cGVydCBSZXBsdW1waW5nIFNlcnVtIGZvcm11bGF0ZWQgd2l0aCAxLjUlIEh5YWx1cm9uaWMgQWNpZFwiLFxuICBcInByaWNlXCI6IDE5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4zMSxcbiAgXCJyYXRpbmdcIjogNC44MyxcbiAgXCJzdG9ja1wiOiAxMTAsXG4gIFwiYnJhbmRcIjogXCJMJ09yZWFsIFBhcmlzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNyxcbiAgXCJ0aXRsZVwiOiBcIlRyZWUgT2lsIDMwbWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRlYSB0cmVlIG9pbCBjb250YWlucyBhIG51bWJlciBvZiBjb21wb3VuZHMsIGluY2x1ZGluZyB0ZXJwaW5lbi00LW9sLCB0aGF0IGhhdmUgYmVlbiBzaG93biB0byBraWxsIGNlcnRhaW4gYmFjdGVyaWEsXCIsXG4gIFwicHJpY2VcIjogMTIsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQuMDksXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogNzgsXG4gIFwiYnJhbmRcIjogXCJIZW1hbmkgVGVhXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTgsXG4gIFwidGl0bGVcIjogXCJPaWwgRnJlZSBNb2lzdHVyaXplciAxMDBtbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRGVybWl2ZSBPaWwgRnJlZSBNb2lzdHVyaXplciB3aXRoIFNQRiAyMCBpcyBzcGVjaWZpY2FsbHkgZm9ybXVsYXRlZCB3aXRoIGNlcmFtaWRlcywgaHlhbHVyb25pYyBhY2lkICYgc3Vuc2NyZWVuLlwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4xLFxuICBcInJhdGluZ1wiOiA0LjU2LFxuICBcInN0b2NrXCI6IDg4LFxuICBcImJyYW5kXCI6IFwiRGVybWl2ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxOSxcbiAgXCJ0aXRsZVwiOiBcIlNraW4gQmVhdXR5IFNlcnVtLlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBuYW1lOiByb3JlYyBjb2xsYWdlbiBoeWFsdXJvbmljIGFjaWQgd2hpdGUgZmFjZSBzZXJ1bSByaWNlTmV0IHdlaWdodDogMTUgbVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC42OCxcbiAgXCJyYXRpbmdcIjogNC40MixcbiAgXCJzdG9ja1wiOiA1NCxcbiAgXCJicmFuZFwiOiBcIlJPUkVDIFdoaXRlIFJpY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMCxcbiAgXCJ0aXRsZVwiOiBcIkZyZWNrbGUgVHJlYXRtZW50IENyZWFtLSAxNWdtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYWlyICYgQ2xlYXIgaXMgUGFraXN0YW4ncyBvbmx5IHB1cmUgRnJlY2tsZSBjcmVhbSB3aGljaCBoZWxwc2ZhZGUgRnJlY2tsZXMsIERhcmtzcG90cyBhbmQgcGlnbWVudHMuIE1lcmN1cnkgbGV2ZWwgaXMgMCUsIHNvIHRoZXJlIGFyZSBubyBzaWRlIGVmZmVjdHMuXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk5LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDE0MCxcbiAgXCJicmFuZFwiOiBcIkZhaXIgJiBDbGVhclwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMSxcbiAgXCJ0aXRsZVwiOiBcIi0gRGFhbCBNYXNvb3IgNTAwIGdyYW1zXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGaW5lIHF1YWxpdHkgQnJhbmRlZCBQcm9kdWN0IEtlZXAgaW4gYSBjb29sIGFuZCBkcnkgcGxhY2VcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC44MSxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiAxMzMsXG4gIFwiYnJhbmRcIjogXCJTYWFmICYgS2hhYXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvdGh1bWJuYWlsLnBuZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjIsXG4gIFwidGl0bGVcIjogXCJFbGJvdyBNYWNhcm9uaSAtIDQwMCBnbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJha2UgUGFybG9yIEJpZyBFbGJvdyBNYWNhcm9uaSAtIDQwMCBnbVwiLFxuICBcInByaWNlXCI6IDE0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OCxcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiAxNDYsXG4gIFwiYnJhbmRcIjogXCJCYWtlIFBhcmxvciBCaWdcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjMsXG4gIFwidGl0bGVcIjogXCJPcmFuZ2UgRXNzZW5jZSBGb29kIEZsYXZvdVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWNhdGlvbnMgb2YgT3JhbmdlIEVzc2VuY2UgRm9vZCBGbGF2b3VyIEZvciBDYWtlcyBhbmQgQmFraW5nIEZvb2QgSXRlbVwiLFxuICBcInByaWNlXCI6IDE0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjA0LFxuICBcInJhdGluZ1wiOiA0Ljg1LFxuICBcInN0b2NrXCI6IDI2LFxuICBcImJyYW5kXCI6IFwiQmFraW5nIEZvb2QgSXRlbXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI0LFxuICBcInRpdGxlXCI6IFwiY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwib3JpZ2luYWwgZmF1amkgY2VyZWFsIG11ZXNsaSAyNTBnbSBib3ggcGFjayBvcmlnaW5hbCBmYXVqaSBjZXJlYWxzIG11ZXNsaSBmcnVpdCBudXRzIGZsYWtlcyBicmVha2Zhc3QgY2VyZWFsIGJyZWFrIGZhc3QgZmF1amljZXJlYWxzIGNlcmVscyBjZXJlbCBmb2ppIGZvdWppXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjgsXG4gIFwicmF0aW5nXCI6IDQuOTQsXG4gIFwic3RvY2tcIjogMTEzLFxuICBcImJyYW5kXCI6IFwiZmF1amlcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI1LFxuICBcInRpdGxlXCI6IFwiR3VsYWIgUG93ZGVyIDUwIEdyYW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRyeSBSb3NlIEZsb3dlciBQb3dkZXIgR3VsYWIgUG93ZGVyIDUwIEdyYW0g4oCiIFRyZWF0cyBXb3VuZHNcIixcbiAgXCJwcmljZVwiOiA3MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNTgsXG4gIFwicmF0aW5nXCI6IDQuODcsXG4gIFwic3RvY2tcIjogNDcsXG4gIFwiYnJhbmRcIjogXCJEcnkgUm9zZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjYsXG4gIFwidGl0bGVcIjogXCJQbGFudCBIYW5nZXIgRm9yIEhvbWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJvaG8gRGVjb3IgUGxhbnQgSGFuZ2VyIEZvciBIb21lIFdhbGwgRGVjb3JhdGlvbiBNYWNyYW1lIFdhbGwgSGFuZ2luZyBTaGVsZlwiLFxuICBcInByaWNlXCI6IDQxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy44NixcbiAgXCJyYXRpbmdcIjogNC4wOCxcbiAgXCJzdG9ja1wiOiAxMzEsXG4gIFwiYnJhbmRcIjogXCJCb2hvIERlY29yXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzUuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjcsXG4gIFwidGl0bGVcIjogXCJGbHlpbmcgV29vZGVuIEJpcmRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhY2thZ2UgSW5jbHVkZSA2IEJpcmRzIHdpdGggQWRoZXNpdmUgVGFwZSBTaGFwZTogM0QgU2hhcGVkIFdvb2RlbiBCaXJkcyBNYXRlcmlhbDogV29vZGVuIE1ERiwgTGFtaW5hdGVkIDMuNW1tXCIsXG4gIFwicHJpY2VcIjogNTEsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU4LFxuICBcInJhdGluZ1wiOiA0LjQxLFxuICBcInN0b2NrXCI6IDE3LFxuICBcImJyYW5kXCI6IFwiRmx5aW5nIFdvb2RlblwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyOCxcbiAgXCJ0aXRsZVwiOiBcIjNEIEVtYmVsbGlzaG1lbnQgQXJ0IExhbXBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjNEIGxlZCBsYW1wIHN0aWNrZXIgV2FsbCBzdGlja2VyIDNkIHdhbGwgYXJ0IGxpZ2h0IG9uL29mZiBidXR0b24gIGNlbGwgb3BlcmF0ZWQgKGluY2x1ZGVkKVwiLFxuICBcInByaWNlXCI6IDIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi40OSxcbiAgXCJyYXRpbmdcIjogNC44MixcbiAgXCJzdG9ja1wiOiA1NCxcbiAgXCJicmFuZFwiOiBcIkxFRCBMaWdodHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI5LFxuICBcInRpdGxlXCI6IFwiSGFuZGNyYWZ0IENoaW5lc2Ugc3R5bGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhhbmRjcmFmdCBDaGluZXNlIHN0eWxlIGFydCBsdXh1cnkgcGFsYWNlIGhvdGVsIHZpbGxhIG1hbnNpb24gaG9tZSBkZWNvciBjZXJhbWljIHZhc2Ugd2l0aCBicmFzcyBmcnVpdCBwbGF0ZVwiLFxuICBcInByaWNlXCI6IDYwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4zNCxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiA3LFxuICBcImJyYW5kXCI6IFwibHV4dXJ5IHBhbGFjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMwLFxuICBcInRpdGxlXCI6IFwiS2V5IEhvbGRlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQXR0cmFjdGl2ZSBEZXNpZ25NZXRhbGxpYyBtYXRlcmlhbEZvdXIga2V5IGhvb2tzUmVsaWFibGUgJiBEdXJhYmxlUHJlbWl1bSBRdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuOTIsXG4gIFwicmF0aW5nXCI6IDQuOTIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJHb2xkZW5cIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzEsXG4gIFwidGl0bGVcIjogXCJNb3JuYWRpIFZlbHZldCBCZWRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcm5hZGkgVmVsdmV0IEJlZCBCYXNlIHdpdGggSGVhZGJvYXJkIFNsYXRzIFN1cHBvcnQgQ2xhc3NpYyBTdHlsZSBCZWRyb29tIEZ1cm5pdHVyZSBCZWQgU2V0XCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LFxuICBcInJhdGluZ1wiOiA0LjE2LFxuICBcInN0b2NrXCI6IDE0MCxcbiAgXCJicmFuZFwiOiBcIkZ1cm5pdHVyZSBCZWQgU2V0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMixcbiAgXCJ0aXRsZVwiOiBcIlNvZmEgZm9yIENvZmZlIENhZmVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJhdHR0YW4gT3V0ZG9vciBmdXJuaXR1cmUgU2V0IFdhdGVycHJvb2YgIFJhdHRhbiBTb2ZhIGZvciBDb2ZmZSBDYWZlXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU5LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDMwLFxuICBcImJyYW5kXCI6IFwiUmF0dHRhbiBPdXRkb29yXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMzLFxuICBcInRpdGxlXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzIFRpZXIgQ29ybmVyIFNoZWx2ZXMgfCAzIFBDcyBXYWxsIE1vdW50IEtpdGNoZW4gU2hlbGYgfCBGbG9hdGluZyBCZWRyb29tIFNoZWxmXCIsXG4gIFwicHJpY2VcIjogNzAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNyxcbiAgXCJyYXRpbmdcIjogNC4zMSxcbiAgXCJzdG9ja1wiOiAxMDYsXG4gIFwiYnJhbmRcIjogXCJLaXRjaGVuIFNoZWxmXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNCxcbiAgXCJ0aXRsZVwiOiBcIlBsYXN0aWMgVGFibGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlbvu79lcnkgZ29vZCBxdWFsaXR5IHBsYXN0aWMgdGFibGUgZm9yIG11bHRpIHB1cnBvc2Ugbm93IGluIHJlYXNvbmFibGUgcHJpY2VcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNCxcbiAgXCJyYXRpbmdcIjogNC4wMSxcbiAgXCJzdG9ja1wiOiAxMzYsXG4gIFwiYnJhbmRcIjogXCJNdWx0aSBQdXJwb3NlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNSxcbiAgXCJ0aXRsZVwiOiBcIjMgRE9PUiBQT1JUQUJMRVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWF0ZXJpYWw6IFN0YWlubGVzcyBTdGVlbCBhbmQgRmFicmljICBJdGVtIFNpemU6IDExMCBjbSB4IDQ1IGNtIHggMTc1IGNtIFBhY2thZ2UgQ29udGVudHM6IDEgU3RvcmFnZSBXYXJkcm9iZVwiLFxuICBcInByaWNlXCI6IDQxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3Ljk4LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiQW1uYU1hcnRcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM2LFxuICBcInRpdGxlXCI6IFwiU2xlZXZlIFNoaXJ0IFdvbWVuc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ290dG9uIFNvbGlkIENvbG9yIFByb2Zlc3Npb25hbCBXZWFyIFNsZWV2ZSBTaGlydCBXb21lbnMgV29yayBCbG91c2VzIFdob2xlc2FsZSBDbG90aGluZyBDYXN1YWwgUGxhaW4gQ3VzdG9tIFRvcCBPRU0gQ3VzdG9taXplZFwiLFxuICBcInByaWNlXCI6IDkwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44OSxcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiAzOSxcbiAgXCJicmFuZFwiOiBcIlByb2Zlc3Npb25hbCBXZWFyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNyxcbiAgXCJ0aXRsZVwiOiBcImFuayBUb3BzIGZvciBXb21lbnMvR2lybHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBBQ0sgT0YgMyBDQU1JU09MRVMgLFZFUlkgQ09NRk9SVEFCTEUgU09GVCBDT1RUT04gU1RVRkYsIENPTUZPUlRBQkxFIElOIEFMTCBGT1VSIFNFQVNPTlNcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuMDUsXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogMTA3LFxuICBcImJyYW5kXCI6IFwiU29mdCBDb3R0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzOCxcbiAgXCJ0aXRsZVwiOiBcInN1YmxpbWF0aW9uIHBsYWluIGtpZHMgdGFua1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwic3VibGltYXRpb24gcGxhaW4ga2lkcyB0YW5rIHRvcHMgd2hvbGVzYWxlXCIsXG4gIFwicHJpY2VcIjogMTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4xMixcbiAgXCJyYXRpbmdcIjogNC44LFxuICBcInN0b2NrXCI6IDIwLFxuICBcImJyYW5kXCI6IFwiU29mdCBDb3R0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvNC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzOSxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFN3ZWF0ZXJzIFdvb2xcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjEgQ3VzdG9tIFdpbnRlciBGYWxsIFplYnJhIEtuaXQgQ3JvcCBUb3AgV29tZW4gU3dlYXRlcnMgV29vbCBNb2hhaXIgQ29zIEN1c3RvbWl6ZSBDcmV3IE5lY2sgV29tZW4nIFMgQ3JvcCBUb3AgU3dlYXRlclwiLFxuICBcInByaWNlXCI6IDYwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuMixcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiA1NSxcbiAgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDAsXG4gIFwidGl0bGVcIjogXCJ3b21lbiB3aW50ZXIgY2xvdGhlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwid29tZW4gd2ludGVyIGNsb3RoZXMgdGhpY2sgZmxlZWNlIGhvb2RpZSB0b3Agd2l0aCBzd2VhdCBwYW50am9nZ2VyIHdvbWVuIHN3ZWF0c3VpdCBzZXQgam9nZ2VycyBwYW50cyB0d28gcGllY2UgcGFudHMgc2V0XCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjM5LFxuICBcInJhdGluZ1wiOiA0LjkxLFxuICBcInN0b2NrXCI6IDg0LFxuICBcImJyYW5kXCI6IFwiVG9wIFN3ZWF0ZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwLzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDEsXG4gIFwidGl0bGVcIjogXCJOSUdIVCBTVUlUXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOSUdIVCBTVUlUIFJFRCBNSUNLWSBNT1VTRS4uICBGb3IgR2lybHMuIEZhbnRhc3RpYyBTdWl0cy5cIixcbiAgXCJwcmljZVwiOiA1NSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMDUsXG4gIFwicmF0aW5nXCI6IDQuNjUsXG4gIFwic3RvY2tcIjogMjEsXG4gIFwiYnJhbmRcIjogXCJSRUQgTUlDS1kgTU9VU0UuLlwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MixcbiAgXCJ0aXRsZVwiOiBcIlN0aWNoZWQgS3VydGEgcGx1cyB0cm91c2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGQUJSSUM6IExJTEVJTiBDSEVTVDogMjEgTEVOR0hUOiAzNyBUUk9VU0VSOiAoMzgpIDpBUkFCSUMgTElMRUlOXCIsXG4gIFwicHJpY2VcIjogODAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjM3LFxuICBcInJhdGluZ1wiOiA0LjA1LFxuICBcInN0b2NrXCI6IDE0OCxcbiAgXCJicmFuZFwiOiBcIkRpZ2l0YWwgUHJpbnRlZFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MyxcbiAgXCJ0aXRsZVwiOiBcImZyb2NrIGdvbGQgcHJpbnRlZFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2hhemkgZmFicmljIGxvbmcgZnJvY2sgZ29sZCBwcmludGVkIHJlYWR5IHRvIHdlYXIgc3RpdGNoZWQgY29sbGVjdGlvbiAoRzk5MilcIixcbiAgXCJwcmljZVwiOiA2MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU1LFxuICBcInJhdGluZ1wiOiA0LjMxLFxuICBcInN0b2NrXCI6IDE1MCxcbiAgXCJicmFuZFwiOiBcIkdoYXppIEZhYnJpY1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NCxcbiAgXCJ0aXRsZVwiOiBcIkxhZGllcyBNdWx0aWNvbG9yZWQgRHJlc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgY2xhc3N5IHNoaXJ0IGZvciB3b21lbiBnaXZlcyB5b3UgYSBnb3JnZW91cyBsb29rIG9uIGV2ZXJ5ZGF5IHdlYXIgYW5kIHNwZWNpYWxseSBmb3Igc2VtaS1jYXN1YWwgd2VhcnMuXCIsXG4gIFwicHJpY2VcIjogNzksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljg4LFxuICBcInJhdGluZ1wiOiA0LjAzLFxuICBcInN0b2NrXCI6IDIsXG4gIFwiYnJhbmRcIjogXCJHaGF6aSBGYWJyaWNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDUsXG4gIFwidGl0bGVcIjogXCJNYWxhaSBNYXhpIERyZXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSZWFkeSB0byB3ZWFyLCBVbmlxdWUgZGVzaWduIGFjY29yZGluZyB0byBtb2Rlcm4gc3RhbmRhcmQgZmFzaGlvbiwgQmVzdCBmaXR0aW5nICxJbXBvcnRlZCBzdHVmZlwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjA3LFxuICBcInJhdGluZ1wiOiA0LjY3LFxuICBcInN0b2NrXCI6IDk2LFxuICBcImJyYW5kXCI6IFwiSUVMR1lcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ2LFxuICBcInRpdGxlXCI6IFwid29tZW4ncyBzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ2xvc2U6IExhY2UsIFN0eWxlIHdpdGggYm90dG9tOiBJbmNyZWFzZWQgaW5zaWRlLCBTb2xlIE1hdGVyaWFsOiBSdWJiZXJcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuOTYsXG4gIFwicmF0aW5nXCI6IDQuMTQsXG4gIFwic3RvY2tcIjogNzIsXG4gIFwiYnJhbmRcIjogXCJJRUxHWSBmYXNoaW9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDcsXG4gIFwidGl0bGVcIjogXCJTbmVha2VyIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTeW50aGV0aWMgTGVhdGhlciBDYXN1YWwgU25lYWtlciBzaG9lcyBmb3IgV29tZW4vZ2lybHMgU25lYWtlcnMgRm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4zNyxcbiAgXCJyYXRpbmdcIjogNC4xOSxcbiAgXCJzdG9ja1wiOiA1MCxcbiAgXCJicmFuZFwiOiBcIlN5bnRoZXRpYyBMZWF0aGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3L3RodW1ibmFpbC5qcGVnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3L3RodW1ibmFpbC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDgsXG4gIFwidGl0bGVcIjogXCJXb21lbiBTdHJpcCBIZWVsXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGZWF0dXJlczogRmxpcC1mbG9wcywgTWlkIEhlZWwsIENvbWZvcnRhYmxlLCBTdHJpcGVkIEhlZWwsIEFudGlza2lkLCBTdHJpcGVkXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjgzLFxuICBcInJhdGluZ1wiOiA0LjAyLFxuICBcInN0b2NrXCI6IDI1LFxuICBcImJyYW5kXCI6IFwiU2FuZGFscyBGbGlwIEZsb3BzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0OSxcbiAgXCJ0aXRsZVwiOiBcIkNoYXBwYWxzICYgU2hvZSBMYWRpZXMgTWV0YWxsaWNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldvbWVucyBDaGFwcGFscyAmIFNob2UgTGFkaWVzIE1ldGFsbGljIFRvbmcgVGhvbmcgU2FuZGFsIEZsYXQgU3VtbWVyIDIwMjAgTWFhc2FpIFNhbmRhbHNcIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMi42MixcbiAgXCJyYXRpbmdcIjogNC43MixcbiAgXCJzdG9ja1wiOiAxMDcsXG4gIFwiYnJhbmRcIjogXCJNYWFzYWkgU2FuZGFsc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTAsXG4gIFwidGl0bGVcIjogXCJXb21lbiBTaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMjAyMCBOZXcgQXJyaXZhbHMgR2VudWluZSBMZWF0aGVyIEZhc2hpb24gVHJlbmQgUGxhdGZvcm0gU3VtbWVyIFdvbWVuIFNob2VzXCIsXG4gIFwicHJpY2VcIjogMzYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljg3LFxuICBcInJhdGluZ1wiOiA0LjMzLFxuICBcInN0b2NrXCI6IDQ2LFxuICBcImJyYW5kXCI6IFwiQXJyaXZhbHMgR2VudWluZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzEuanBlZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTEsXG4gIFwidGl0bGVcIjogXCJoYWxmIHNsZWV2ZXMgVCBzaGlydHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnkgc3RvcmUgaXMgY3JlYXRpbmcgbmV3IGRlc2lnbnMgYW5kIHRyZW5kIGV2ZXJ5IG1vbnRoIGFuZCBldmVyeSB5ZWFyLiBEYXJhei5wayBoYXZlIGEgYmVhdXRpZnVsIHJhbmdlIG9mIG1lbiBmYXNoaW9uIGJyYW5kc1wiLFxuICBcInByaWNlXCI6IDIzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi43NixcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiAxMzIsXG4gIFwiYnJhbmRcIjogXCJWaW50YWdlIEFwcGFyZWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MixcbiAgXCJ0aXRsZVwiOiBcIkZSRUUgRklSRSBUIFNoaXJ0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJxdWFsaXR5IGFuZCBwcm9mZXNzaW9uYWwgcHJpbnQgLSBJdCBkb2Vzbid0IGp1c3QgbG9vayBoaWdoIHF1YWxpdHksIGl0IGlzIGhpZ2ggcXVhbGl0eS5cIixcbiAgXCJwcmljZVwiOiAxMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNzIsXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogMTI4LFxuICBcImJyYW5kXCI6IFwiRlJFRSBGSVJFXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUzLFxuICBcInRpdGxlXCI6IFwicHJpbnRlZCBoaWdoIHF1YWxpdHkgVCBzaGlydHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJyYW5kOiB2aW50YWdlIEFwcGFyZWwgLEV4cG9ydCBxdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuNTQsXG4gIFwicmF0aW5nXCI6IDQuODksXG4gIFwic3RvY2tcIjogNixcbiAgXCJicmFuZFwiOiBcIlZpbnRhZ2UgQXBwYXJlbFwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTQsXG4gIFwidGl0bGVcIjogXCJQdWJnIFByaW50ZWQgR3JhcGhpYyBULVNoaXJ0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IERlc2NyaXB0aW9uIEZlYXR1cmVzOiAxMDAlIFVsdHJhIHNvZnQgUG9seWVzdGVyIEplcnNleS4gVmlicmFudCAmIGNvbG9yZnVsIHByaW50aW5nIG9uIGZyb250LiBGZWVscyBzb2Z0IGFzIGNvdHRvbiB3aXRob3V0IGV2ZXIgY3JhY2tpbmdcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDQsXG4gIFwicmF0aW5nXCI6IDQuNjIsXG4gIFwic3RvY2tcIjogMTM2LFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NSxcbiAgXCJ0aXRsZVwiOiBcIk1vbmV5IEhlaXN0IFByaW50ZWQgU3VtbWVyIFQgU2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYWJyaWMgSmVyY3ksIFNpemU6IE0gJiBMIFdlYXIgU3R5bGlzaCBEdWFsIFN0aWNoZWRcIixcbiAgXCJwcmljZVwiOiA2NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuOTcsXG4gIFwicmF0aW5nXCI6IDQuOSxcbiAgXCJzdG9ja1wiOiAxMjIsXG4gIFwiYnJhbmRcIjogXCJUaGUgV2FyZWhvdXNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NixcbiAgXCJ0aXRsZVwiOiBcIlNuZWFrZXJzIEpvZ2dlcnMgU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdlbmRlcjogTWVuICwgQ29sb3JzOiBTYW1lIGFzIERpc3BsYXllZENvbmRpdGlvbjogMTAwJSBCcmFuZCBOZXdcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuNTcsXG4gIFwicmF0aW5nXCI6IDQuMzgsXG4gIFwic3RvY2tcIjogNixcbiAgXCJicmFuZFwiOiBcIlNuZWFrZXJzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni81LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU3LFxuICBcInRpdGxlXCI6IFwiTG9hZmVycyBmb3IgbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZW4gU2hvZXMgLSBMb2FmZXJzIGZvciBtZW4gLSBSdWJiZXIgU2hvZXMgLSBOeWxvbiBTaG9lcyAtIFNob2VzIGZvciBtZW4gLSBNb2NjYXNzaW9uIC0gUHVyZSBOeWxvbiAoUnViYmVyKSBFeHBvdCBRdWFsaXR5LlwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45MSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiAyMCxcbiAgXCJicmFuZFwiOiBcIlJ1YmJlclwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU4LFxuICBcInRpdGxlXCI6IFwiZm9ybWFsIG9mZmljZXMgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhdHRlcm4gVHlwZTogU29saWQsIE1hdGVyaWFsOiBQVSwgVG9lIFNoYXBlOiBQb2ludGVkIFRvZSAsT3V0c29sZSBNYXRlcmlhbDogUnViYmVyXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLFxuICBcInJhdGluZ1wiOiA0LjQxLFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU5LFxuICBcInRpdGxlXCI6IFwiU3ByaW5nIGFuZCBzdW1tZXJzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ29tZm9ydGFibGUgc3RyZXRjaCBjbG90aCwgbGlnaHR3ZWlnaHQgYm9keTsgLHJ1YmJlciBzb2xlLCBhbnRpLXNraWQgd2VhcjtcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC43MSxcbiAgXCJyYXRpbmdcIjogNC4zMyxcbiAgXCJzdG9ja1wiOiAxMzcsXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYwLFxuICBcInRpdGxlXCI6IFwiU3R5bGlzaCBDYXN1YWwgSmVhbnMgU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhpZ2ggUXVhbGl0eSAsU3R5bGlzaCBkZXNpZ24gLENvbWZvcnRhYmxlIHdlYXIgLEZBc2hpb24gLER1cmFibGVcIixcbiAgXCJwcmljZVwiOiA1OCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy41NSxcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiAxMjksXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjEsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIFN0cmFwcyBXcmlzdHdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsZTpTcG9ydCAsQ2xhc3A6QnVja2xlcyAsV2F0ZXIgUmVzaXN0YW5jZSBEZXB0aDozQmFyXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjE0LFxuICBcInJhdGluZ1wiOiA0LjYzLFxuICBcInN0b2NrXCI6IDkxLFxuICBcImJyYW5kXCI6IFwiTmF2aWZvcmNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYyLFxuICBcInRpdGxlXCI6IFwiV2F0ZXJwcm9vZiBMZWF0aGVyIEJyYW5kIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXYXRjaCBDcm93biBXaXRoIEVudmlyb25tZW50YWwgSVBTIEJyb256ZSBFbGVjdHJvcGxhdGluZzsgRGlzcGxheSBzeXN0ZW0gb2YgMTIgaG91cnNcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xNSxcbiAgXCJyYXRpbmdcIjogNC4wNSxcbiAgXCJzdG9ja1wiOiA5NSxcbiAgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MyxcbiAgXCJ0aXRsZVwiOiBcIlJveWFsIEJsdWUgUHJlbWl1bSBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNpbHZlciBDaGFpbiBSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2ggTGF0ZXN0IEFuYWxvZyBXYXRjaFwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjU2LFxuICBcInJhdGluZ1wiOiA0Ljg5LFxuICBcInN0b2NrXCI6IDE0MixcbiAgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvNC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjQsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIFN0cmFwIFNrZWxldG9uIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMZWF0aGVyIFN0cmFwIFNrZWxldG9uIFdhdGNoIGZvciBNZW4gLSBTdHlsaXNoIGFuZCBMYXRlc3QgRGVzaWduXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjIsXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogNjEsXG4gIFwiYnJhbmRcIjogXCJTdHJhcCBTa2VsZXRvblwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjUsXG4gIFwidGl0bGVcIjogXCJTdGFpbmxlc3MgU3RlZWwgV3Jpc3QgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxpc2ggV2F0Y2ggRm9yIE1hbiAoTHV4dXJ5KSBDbGFzc3kgTWVuJ3MgU3RhaW5sZXNzIFN0ZWVsIFdyaXN0IFdhdGNoIC0gQm94IFBhY2tlZFwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy43OSxcbiAgXCJyYXRpbmdcIjogNC43OSxcbiAgXCJzdG9ja1wiOiA5NCxcbiAgXCJicmFuZFwiOiBcIlN0YWlubGVzc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY2LFxuICBcInRpdGxlXCI6IFwiU3RlZWwgQW5hbG9nIENvdXBsZSBXYXRjaGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbGVnYW50IGRlc2lnbiwgU3R5bGlzaCAsVW5pcXVlICYgVHJlbmR5LENvbWZvcnRhYmxlIHdlYXJcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMyxcbiAgXCJyYXRpbmdcIjogNC43OSxcbiAgXCJzdG9ja1wiOiAyNCxcbiAgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvNC5KUEdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NyxcbiAgXCJ0aXRsZVwiOiBcIkZhc2hpb24gTWFnbmV0aWMgV3Jpc3QgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJ1eSB0aGlzIGF3ZXNvbWUgIFRoZSBwcm9kdWN0IGlzIG9yaWdpbmFsbHkgbWFudWZhY3R1cmVkIGJ5IHRoZSBjb21wYW55IGFuZCBpdCdzIGEgdG9wIHNlbGxpbmcgcHJvZHVjdCB3aXRoIGEgdmVyeSByZWFzb25hYmxlXCIsXG4gIFwicHJpY2VcIjogNjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjY5LFxuICBcInJhdGluZ1wiOiA0LjAzLFxuICBcInN0b2NrXCI6IDQ2LFxuICBcImJyYW5kXCI6IFwiRWFzdGVybiBXYXRjaGVzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY4LFxuICBcInRpdGxlXCI6IFwiU3R5bGlzaCBMdXh1cnkgRGlnaXRhbCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGlzaCBMdXh1cnkgRGlnaXRhbCBXYXRjaCBGb3IgR2lybHMgLyBXb21lbiAtIExlZCBTbWFydCBMYWRpZXMgV2F0Y2hlcyBGb3IgR2lybHNcIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOS4wMyxcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiA3NyxcbiAgXCJicmFuZFwiOiBcIkx1eHVyeSBEaWdpdGFsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjgvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4LzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjksXG4gIFwidGl0bGVcIjogXCJHb2xkZW4gV2F0Y2ggUGVhcmxzIEJyYWNlbGV0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgR29sZGVuIFdhdGNoIFBlYXJscyBCcmFjZWxldCBXYXRjaCBGb3IgR2lybHMgLSBHb2xkZW4gQ2hhaW4gTGFkaWVzIEJyYWNlbGF0ZSBXYXRjaCBmb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNTUsXG4gIFwicmF0aW5nXCI6IDQuNzcsXG4gIFwic3RvY2tcIjogODksXG4gIFwiYnJhbmRcIjogXCJXYXRjaCBQZWFybHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcwLFxuICBcInRpdGxlXCI6IFwiU3RhaW5sZXNzIFN0ZWVsIFdvbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIFNrbWVpIDE4MzAgU2hlbGwgRGlhbCBTdGFpbmxlc3MgU3RlZWwgV29tZW4gV3Jpc3QgV2F0Y2ggTGFkeSBCcmFjZWxldCBXYXRjaCBRdWFydHogV2F0Y2hlcyBMYWRpZXNcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC45OCxcbiAgXCJyYXRpbmdcIjogNC4wOCxcbiAgXCJzdG9ja1wiOiAxMTEsXG4gIFwiYnJhbmRcIjogXCJCcmFjZWxldFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzEsXG4gIFwidGl0bGVcIjogXCJXb21lbiBTaG91bGRlciBCYWdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3Vpc1dpbGwgV29tZW4gU2hvdWxkZXIgQmFncyBMb25nIENsdXRjaGVzIENyb3NzIEJvZHkgQmFncyBQaG9uZSBCYWdzIFBVIExlYXRoZXIgSGFuZCBCYWdzIExhcmdlIENhcGFjaXR5IENhcmQgSG9sZGVycyBaaXBwZXIgQ29pbiBQdXJzZXMgRmFzaGlvbiBDcm9zc2JvZHkgQmFncyBmb3IgR2lybHMgTGFkaWVzXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjY1LFxuICBcInJhdGluZ1wiOiA0LjcxLFxuICBcInN0b2NrXCI6IDE3LFxuICBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcyLFxuICBcInRpdGxlXCI6IFwiSGFuZGJhZyBGb3IgR2lybHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgZmFzaGlvbiBpcyBkZXNpZ25lZCB0byBhZGQgYSBjaGFybWluZyBlZmZlY3QgdG8geW91ciBjYXN1YWwgb3V0Zml0LiBUaGlzIEJhZyBpcyBtYWRlIG9mIHN5bnRoZXRpYyBsZWF0aGVyLlwiLFxuICBcInByaWNlXCI6IDIzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41LFxuICBcInJhdGluZ1wiOiA0LjkxLFxuICBcInN0b2NrXCI6IDI3LFxuICBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDczLFxuICBcInRpdGxlXCI6IFwiRmFuY3kgaGFuZCBjbHV0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgZmFzaGlvbiBpcyBkZXNpZ25lZCB0byBhZGQgYSBjaGFybWluZyBlZmZlY3QgdG8geW91ciBjYXN1YWwgb3V0Zml0LiBUaGlzIEJhZyBpcyBtYWRlIG9mIHN5bnRoZXRpYyBsZWF0aGVyLlwiLFxuICBcInByaWNlXCI6IDQ0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4zOSxcbiAgXCJyYXRpbmdcIjogNC4xOCxcbiAgXCJzdG9ja1wiOiAxMDEsXG4gIFwiYnJhbmRcIjogXCJCcmFjZWxldFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NCxcbiAgXCJ0aXRsZVwiOiBcIkxlYXRoZXIgSGFuZCBCYWdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkl0IGZlYXR1cmVzIGFuIGF0dHJhY3RpdmUgZGVzaWduIHRoYXQgbWFrZXMgaXQgYSBtdXN0IGhhdmUgYWNjZXNzb3J5IGluIHlvdXIgY29sbGVjdGlvbi4gV2Ugc2VsbCBkaWZmZXJlbnQga2luZCBvZiBiYWdzIGZvciBib3lzLCBraWRzLCB3b21lbiwgZ2lybHMgYW5kIGFsc28gZm9yIHVuaXNleC5cIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMTksXG4gIFwicmF0aW5nXCI6IDQuMDEsXG4gIFwic3RvY2tcIjogNDMsXG4gIFwiYnJhbmRcIjogXCJDb3BlbmhhZ2VuIEx1eGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzUsXG4gIFwidGl0bGVcIjogXCJTZXZlbiBQb2NrZXQgV29tZW4gQmFnXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZXZlbiBQb2NrZXQgV29tZW4gQmFnIEhhbmRiYWdzIExhZHkgU2hvdWxkZXIgQ3Jvc3Nib2R5IEJhZyBGZW1hbGUgUHVyc2UgU2V2ZW4gUG9ja2V0IEJhZ1wiLFxuICBcInByaWNlXCI6IDY4LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC44NyxcbiAgXCJyYXRpbmdcIjogNC45MyxcbiAgXCJzdG9ja1wiOiAxMyxcbiAgXCJicmFuZFwiOiBcIlN0ZWFsIEZyYW1lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzYsXG4gIFwidGl0bGVcIjogXCJTaWx2ZXIgUmluZyBTZXQgV29tZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkpld2VscnkgVHlwZTpSaW5nc0NlcnRpZmljYXRlIFR5cGU6Tm9uZVBsYXRpbmc6U2lsdmVyIFBsYXRlZFNoYXBlYXR0ZXJuOm5vbmVTdHlsZTpDTEFTU0lDUmVsaWdpb3VzXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjU3LFxuICBcInJhdGluZ1wiOiA0LjYxLFxuICBcInN0b2NrXCI6IDUxLFxuICBcImJyYW5kXCI6IFwiRGFyb2pheVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NyxcbiAgXCJ0aXRsZVwiOiBcIlJvc2UgUmluZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQnJhbmQ6IFRoZSBHcmVldGluZ3MgRmxvd2VyIENvbG91cjogUmVkUmluZyBDb2xvdXI6IEdvbGRlblNpemU6IEFkanVzdGFibGVcIixcbiAgXCJwcmljZVwiOiAxMDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMjIsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTQ5LFxuICBcImJyYW5kXCI6IFwiQ29wZW5oYWdlbiBMdXhlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3OCxcbiAgXCJ0aXRsZVwiOiBcIlJoaW5lc3RvbmUgS29yZWFuIFN0eWxlIE9wZW4gUmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5IDNQY3MgQWRqdXN0YWJsZSBQZWFybCBSaGluZXN0b25lIEtvcmVhbiBTdHlsZSBPcGVuIFJpbmdzIEZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjAyLFxuICBcInJhdGluZ1wiOiA0LjY5LFxuICBcInN0b2NrXCI6IDksXG4gIFwiYnJhbmRcIjogXCJGYXNoaW9uIEpld2VsbGVyeVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzksXG4gIFwidGl0bGVcIjogXCJFbGVnYW50IEZlbWFsZSBQZWFybCBFYXJyaW5nc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRWxlZ2FudCBGZW1hbGUgUGVhcmwgRWFycmluZ3MgU2V0IFppcmNvbiBQZWFybCBFYXJpbmdzIFdvbWVuIFBhcnR5IEFjY2Vzc29yaWVzIDkgUGFpcnMvU2V0XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjgsXG4gIFwicmF0aW5nXCI6IDQuNzQsXG4gIFwic3RvY2tcIjogMTYsXG4gIFwiYnJhbmRcIjogXCJGYXNoaW9uIEpld2VsbGVyeVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OS8xLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgwLFxuICBcInRpdGxlXCI6IFwiQ2hhaW4gUGluIFRhc3NlbCBFYXJyaW5nc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGFpciBPZiBFYXIgQ3VmZiBCdXR0ZXJmbHkgTG9uZyBDaGFpbiBQaW4gVGFzc2VsIEVhcnJpbmdzIC0gU2lsdmVyICggTG9uZyBMaWZlIFF1YWxpdHkgUHJvZHVjdClcIixcbiAgXCJwcmljZVwiOiA0NSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNzUsXG4gIFwicmF0aW5nXCI6IDQuNTksXG4gIFwic3RvY2tcIjogOSxcbiAgXCJicmFuZFwiOiBcIkN1ZmYgQnV0dGVyZmx5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODEsXG4gIFwidGl0bGVcIjogXCJSb3VuZCBTaWx2ZXIgRnJhbWUgU3VuIEdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgcGFpciBvZiBzdW5nbGFzc2VzIGNhbiBwcm90ZWN0IHlvdXIgZXllcyBmcm9tIGJlaW5nIGh1cnQuIEZvciBjYXIgZHJpdmluZywgdmFjYXRpb24gdHJhdmVsLCBvdXRkb29yIGFjdGl2aXRpZXMsIHNvY2lhbCBnYXRoZXJpbmdzLFwiLFxuICBcInByaWNlXCI6IDE5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4xLFxuICBcInJhdGluZ1wiOiA0Ljk0LFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODIsXG4gIFwidGl0bGVcIjogXCJLYWJpciBTaW5naCBTcXVhcmUgU3VuZ2xhc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9yaWduYWwgTWV0YWwgS2FiaXIgU2luZ2ggZGVzaWduIDIwMjAgU3VuZ2xhc3NlcyBNZW4gQnJhbmQgRGVzaWduZXIgU3VuIEdsYXNzZXMgS2FiaXIgU2luZ2ggU3F1YXJlIFN1bmdsYXNzXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjYsXG4gIFwicmF0aW5nXCI6IDQuNjIsXG4gIFwic3RvY2tcIjogNzgsXG4gIFwiYnJhbmRcIjogXCJEZXNpZ25lciBTdW4gR2xhc3Nlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MyxcbiAgXCJ0aXRsZVwiOiBcIldpbGV5IFggTmlnaHQgVmlzaW9uIFllbGxvdyBHbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaWxleSBYIE5pZ2h0IFZpc2lvbiBZZWxsb3cgR2xhc3NlcyBmb3IgUmlkZXJzIC0gTmlnaHQgVmlzaW9uIEFudGkgRm9nIERyaXZpbmcgR2xhc3NlcyAtIEZyZWUgTmlnaHQgR2xhc3MgQ292ZXIgLSBTaGllbGQgRXllcyBGcm9tIER1c3QgYW5kIFZpcnVzLSBGb3IgTmlnaHQgU3BvcnQgTWF0Y2hlc1wiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA2LjMzLFxuICBcInJhdGluZ1wiOiA0Ljk3LFxuICBcInN0b2NrXCI6IDExNSxcbiAgXCJicmFuZFwiOiBcIm1hc3RhciB3YXRjaFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg0LFxuICBcInRpdGxlXCI6IFwiU3F1YXJlIFN1bmdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gT3ZlcnNpemVkIFNxdWFyZSBTdW5nbGFzc2VzIFJldHJvIEdyYWRpZW50IEJpZyBGcmFtZSBTdW5nbGFzc2VzIEZvciBXb21lbiBPbmUgUGllY2UgR2FmYXMgU2hhZGUgTWlycm9yIENsZWFyIExlbnMgMTcwNTlcIixcbiAgXCJwcmljZVwiOiAyOCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuODksXG4gIFwicmF0aW5nXCI6IDQuNjQsXG4gIFwic3RvY2tcIjogNjQsXG4gIFwiYnJhbmRcIjogXCJtYXN0YXIgd2F0Y2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODUsXG4gIFwidGl0bGVcIjogXCJMb3Vpc1dpbGwgTWVuIFN1bmdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvdWlzV2lsbCBNZW4gU3VuZ2xhc3NlcyBQb2xhcml6ZWQgU3VuZ2xhc3NlcyBVVjQwMCBTdW5nbGFzc2VzIERheSBOaWdodCBEdWFsIFVzZSBTYWZldHkgRHJpdmluZyBOaWdodCBWaXNpb24gRXlld2VhciBBTC1NRyBGcmFtZSBTdW4gR2xhc3NlcyB3aXRoIEZyZWUgQm94IGZvciBEcml2ZXJzXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjI3LFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDkyLFxuICBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg2LFxuICBcInRpdGxlXCI6IFwiQmx1ZXRvb3RoIEF1eFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQmx1ZXRvb3RoIEF1eCBCbHVldG9vdGggQ2FyIEF1eCBDYXIgQmx1ZXRvb3RoIFRyYW5zbWl0dGVyIEF1eCBBdWRpbyBSZWNlaXZlciBIYW5kZnJlZSBDYXIgQmx1ZXRvb3RoIE11c2ljIFJlY2VpdmVyIFVuaXZlcnNhbCAzLjVtbSBTdHJlYW1pbmcgQTJEUCBXaXJlbGVzcyBBdXRvIEFVWCBBdWRpbyBBZGFwdGVyIFdpdGggTWljIEZvciBQaG9uZSBNUDNcIixcbiAgXCJwcmljZVwiOiAyNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNTYsXG4gIFwicmF0aW5nXCI6IDQuNTcsXG4gIFwic3RvY2tcIjogMjIsXG4gIFwiYnJhbmRcIjogXCJDYXIgQXV4XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg3LFxuICBcInRpdGxlXCI6IFwidCBUZW1wZXJhdHVyZSBDb250cm9sbGVyIEluY3ViYXRvciBDb250cm9sbGVyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCb3RoIEhlYXQgYW5kIENvb2wgUHVycG9zZSwgVGVtcGVyYXR1cmUgY29udHJvbCByYW5nZTsgLTUwIHRvICsxMTAsIFRlbXBlcmF0dXJlIG1lYXN1cmVtZW50IGFjY3VyYWN5OyAwLjEsIENvbnRyb2wgYWNjdXJhY3k7IDAuMVwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4zLFxuICBcInJhdGluZ1wiOiA0LjU0LFxuICBcInN0b2NrXCI6IDM3LFxuICBcImJyYW5kXCI6IFwiVzEyMDkgREMxMlZcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4OCxcbiAgXCJ0aXRsZVwiOiBcIlRDIFJldXNhYmxlIFNpbGljb25lIE1hZ2ljIFdhc2hpbmcgR2xvdmVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUQyBSZXVzYWJsZSBTaWxpY29uZSBNYWdpYyBXYXNoaW5nIEdsb3ZlcyB3aXRoIFNjcnViYmVyLCBDbGVhbmluZyBCcnVzaCBTY3J1YmJlciBHbG92ZXMgSGVhdCBSZXNpc3RhbnQgUGFpciBmb3IgQ2xlYW5pbmcgb2YgS2l0Y2hlbiwgRGlzaGVzLCBWZWdldGFibGVzIGFuZCBGcnVpdHMsIEJhdGhyb29tLCBDYXIgV2FzaCwgUGV0IENhcmUgYW5kIE11bHRpcHVycG9zZVwiLFxuICBcInByaWNlXCI6IDI5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjE5LFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDQyLFxuICBcImJyYW5kXCI6IFwiVEMgUmV1c2FibGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODksXG4gIFwidGl0bGVcIjogXCJRdWFsY29tbSBvcmlnaW5hbCBDYXIgQ2hhcmdlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiYmVzdCBRdWFsaXR5IENIYXJnZXIgLCBIaWdobHkgUmVjb21tZW5kZWQgdG8gYWxsIGJlc3QgUXVhbGl0eSBDSGFyZ2VyICwgSGlnaGx5IFJlY29tbWVuZGVkIHRvIGFsbFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41MyxcbiAgXCJyYXRpbmdcIjogNC4yLFxuICBcInN0b2NrXCI6IDc5LFxuICBcImJyYW5kXCI6IFwiVEMgUmV1c2FibGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MCxcbiAgXCJ0aXRsZVwiOiBcIkN5Y2xlIEJpa2UgR2xvd1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVW5pdmVyc2FsIGZpdG1lbnQgYW5kIGVhc3kgdG8gaW5zdGFsbCBubyBzcGVjaWFsIHdpcmVzLCBjYW4gYmUgZWFzaWx5IGluc3RhbGxlZCBhbmQgcmVtb3ZlZC4gRml0cyBtb3N0IHN0YW5kYXJkIHR5cmUgYWlyIHN0ZW0gdmFsdmVzIG9mIHJvYWQsIG1vdW50YWluIGJpY3ljbGVzLCBtb3RvY3ljbGVzIGFuZCBjYXJzLkJyaWdodCBsZWQgd2lsbCB0dXJuIG9uIHdcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMDgsXG4gIFwicmF0aW5nXCI6IDQuMSxcbiAgXCJzdG9ja1wiOiA2MyxcbiAgXCJicmFuZFwiOiBcIk5lb24gTEVEIExpZ2h0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTEsXG4gIFwidGl0bGVcIjogXCJCbGFjayBNb3RvcmJpa2VcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVuZ2luZSBUeXBlOldldCBzdW1wLCBTaW5nbGUgQ3lsaW5kZXIsIEZvdXIgU3Ryb2tlLCBUd28gVmFsdmVzLCBBaXIgQ29vbGVkIHdpdGggU09IQyAoU2luZ2xlIE92ZXIgSGVhZCBDYW0pIENoYWluIERyaXZlIEJvcmUgJiBTdHJva2U6NDcuMCB4IDQ5LjUgTU1cIixcbiAgXCJwcmljZVwiOiA1NjksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjYzLFxuICBcInJhdGluZ1wiOiA0LjA0LFxuICBcInN0b2NrXCI6IDExNSxcbiAgXCJicmFuZFwiOiBcIk1FVFJPIDcwY2MgTW90b3JjeWNsZSAtIE1SNzBcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MixcbiAgXCJ0aXRsZVwiOiBcIkhPVCBTQUxFIElOIEVVUk9QRSBlbGVjdHJpYyByYWNpbmcgbW90b3JjeWNsZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSE9UIFNBTEUgSU4gRVVST1BFIGVsZWN0cmljIHJhY2luZyBtb3RvcmN5Y2xlIGVsZWN0cmljIG1vdG9yY3ljbGUgZm9yIHNhbGUgYWR1bHQgZWxlY3RyaWMgbW90b3JjeWNsZXNcIixcbiAgXCJwcmljZVwiOiA5MjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjQsXG4gIFwicmF0aW5nXCI6IDQuMTksXG4gIFwic3RvY2tcIjogMjIsXG4gIFwiYnJhbmRcIjogXCJCUkFWRSBCVUxMXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTMsXG4gIFwidGl0bGVcIjogXCJBdXRvbWF0aWMgTW90b3IgR2FzIE1vdG9yY3ljbGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIxNTBjYyA0LVN0cm9rZSBNb3RvcmN5Y2xlIEF1dG9tYXRpYyBNb3RvciBHYXMgTW90b3JjeWNsZXMgU2Nvb3RlciBtb3RvcmN5Y2xlcyAxNTBjYyBzY29vdGVyXCIsXG4gIFwicHJpY2VcIjogMTA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4zNCxcbiAgXCJyYXRpbmdcIjogNC44NCxcbiAgXCJzdG9ja1wiOiAxMjcsXG4gIFwiYnJhbmRcIjogXCJzaG9jayBhYnNvcmJlclwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk0LFxuICBcInRpdGxlXCI6IFwibmV3IGFycml2YWxzIEZhc2hpb24gbW90b2Nyb3NzIGdvZ2dsZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIm5ldyBhcnJpdmFscyBGYXNoaW9uIG1vdG9jcm9zcyBnb2dnbGVzIG1vdG9yY3ljbGUgbW90b2Nyb3NzIHJhY2luZyBtb3RvcmN5Y2xlXCIsXG4gIFwicHJpY2VcIjogOTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjg1LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDEwOSxcbiAgXCJicmFuZFwiOiBcIkpJRVBPTExZXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8xLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NSxcbiAgXCJ0aXRsZVwiOiBcIldob2xlc2FsZSBjYXJnbyBsYXNoaW5nIEJlbHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldob2xlc2FsZSBjYXJnbyBsYXNoaW5nIEJlbHQgVGllIERvd24gZW5kIFJhdGNoZXQgc3RyYXAgY3VzdG9taXplZCBzdHJhcCAyNW1tIG1vdG9yY3ljbGUgMTUwMGtncyB3aXRoIHJ1YmJlciBoYW5kbGVcIixcbiAgXCJwcmljZVwiOiA5MzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjY3LFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDE0NCxcbiAgXCJicmFuZFwiOiBcIlhpYW5nbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NixcbiAgXCJ0aXRsZVwiOiBcImxpZ2h0aW5nIGNlaWxpbmcga2l0Y2hlblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2hvbGVzYWxlIHNsaW0gaGFuZ2luZyBkZWNvcmF0aXZlIGtpZCByb29tIGxpZ2h0aW5nIGNlaWxpbmcga2l0Y2hlbiBjaGFuZGVsaWVycyBwZW5kYW50IGxpZ2h0IG1vZGVyblwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC44OSxcbiAgXCJyYXRpbmdcIjogNC44MyxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcImxpZ2h0aW5nYnJpbGxpYW5jZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NyxcbiAgXCJ0aXRsZVwiOiBcIk1ldGFsIENlcmFtaWMgRmxvd2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZXRhbCBDZXJhbWljIEZsb3dlciBDaGFuZGVsaWVyIEhvbWUgTGlnaHRpbmcgQW1lcmljYW4gVmludGFnZSBIYW5naW5nIExpZ2h0aW5nIFBlbmRhbnQgTGFtcFwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45NCxcbiAgXCJyYXRpbmdcIjogNC45MyxcbiAgXCJzdG9ja1wiOiAxNDYsXG4gIFwiYnJhbmRcIjogXCJJZmVpIEhvbWVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk4LFxuICBcInRpdGxlXCI6IFwiMyBsaWdodHMgbG5kZW5wYW50IGtpdGNoZW4gaXNsYW5nXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzIGxpZ2h0cyBsbmRlbnBhbnQga2l0Y2hlbiBpc2xhbmcgZGluaW5nIHJvb20gcGVuZGFudCByaWNlIHBhcGVyIGNoYW5kZWxpZXIgY29udGVtcG9yYXJ5IGxlZCBwZW5kYW50IGxpZ2h0IG1vZGVybiBjaGFuZGVsaWVyXCIsXG4gIFwicHJpY2VcIjogMzQsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDUuOTIsXG4gIFwicmF0aW5nXCI6IDQuOTksXG4gIFwic3RvY2tcIjogNDQsXG4gIFwiYnJhbmRcIjogXCJEQURBV1VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTksXG4gIFwidGl0bGVcIjogXCJBbWVyaWNhbiBWaW50YWdlIFdvb2QgUGVuZGFudCBMaWdodFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW1lcmljYW4gVmludGFnZSBXb29kIFBlbmRhbnQgTGlnaHQgRmFybWhvdXNlIEFudGlxdWUgSGFuZ2luZyBMYW1wIExhbXBhcmEgQ29sZ2FudGVcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC44NCxcbiAgXCJyYXRpbmdcIjogNC4zMixcbiAgXCJzdG9ja1wiOiAxMzgsXG4gIFwiYnJhbmRcIjogXCJJZmVpIEhvbWVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTAwLFxuICBcInRpdGxlXCI6IFwiQ3J5c3RhbCBjaGFuZGVsaWVyIG1hcmlhIHRoZXJlc2EgZm9yIDEyIGxpZ2h0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDcnlzdGFsIGNoYW5kZWxpZXIgbWFyaWEgdGhlcmVzYSBmb3IgMTIgbGlnaHRcIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYsXG4gIFwicmF0aW5nXCI6IDQuNzQsXG4gIFwic3RvY2tcIjogMTMzLFxuICBcImJyYW5kXCI6IFwiWUlPU0lcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfVxuICBdLFxuICBcInRvdGFsXCI6IDEwMCxcbiAgXCJza2lwXCI6IDAsXG4gIFwibGltaXRcIjogMTAwXG4gIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3JvdXRpbmcnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYWluLXRlbXBsYXRlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc3RvcmUtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Vycm9yLXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYXJ0LXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9yYW5nZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2ZpbHRlckl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9nb29kcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZXcnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zb3J0aW5nJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9