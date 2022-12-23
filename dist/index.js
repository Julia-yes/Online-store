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
    if (goods.length == 0) {
        goodsInner += `<div class='goods__empty'> No products found </div>`;
    }
    else {
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
        e.innerHTML = "Delete from cart";
    }
    else if ((e === null || e === void 0 ? void 0 : e.innerHTML) == "Delete from cart") {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods */ "./src/components/goods.ts");


function addListenerSortingButtons() {
    const buttonSort = document.querySelectorAll('.sorters__button');
    buttonSort.forEach(button => {
        button.addEventListener('click', (e) => {
            sortGoods(e);
            changeActiveButton(e);
        });
    });
}
function changeActiveButton(event) {
    const buttonSort = document.querySelectorAll('.sorters__button');
    buttonSort.forEach(button => {
        button.classList.remove("sorters__button_active");
    });
    event.currentTarget.classList.add("sorters__button_active");
}
function sortGoods(event) {
    let option = event.currentTarget.dataset.option;
    let direction = event.currentTarget.dataset.direction;
    console.log(option, direction);
    if (option == "price") {
        if (direction == "min") {
            _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.sort(function (el1, el2) {
                return el2.price - el1.price;
            });
        }
        if (direction == "max") {
            _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.sort(function (el1, el2) {
                return el1.price - el2.price;
            });
        }
    }
    else {
        if (direction == "min") {
            _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.sort(function (el1, el2) {
                return el2.rating - el1.rating;
            });
        }
        if (direction == "max") {
            _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.sort(function (el1, el2) {
                return el1.rating - el2.rating;
            });
        }
    }
    (0,_goods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)();
}
addListenerSortingButtons();


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
          <div class='goods__options'>
            <div class='goods__sorters sorters'>
              <button class='button sorters__button sorters__price sorters__price_low' data-option = "price" data-direction="min">price &#8595;</button>
              <button class='button sorters__button sorters__price sorters__price_high' data-option = "price" data-direction="max">price &#8593;</button>
              <button class='button sorters__button sorters__rating sorters__rating_low' data-option = "rating" data-direction="min">rating &#8595;</button>
              <button class='button sorters__button sorters__rating sorters__rating_high' data-option = "rating" data-direction="max">rating &#8593;</button>
            </div>
            <h2 class='goods__title'>Found: <span class='goods__quantity'>${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.length}</span></h2>
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














})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDUDtBQUNoQztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBUTtBQUM1QiwyQkFBMkIsdURBQU07QUFDakM7QUFDQTtBQUNBLFFBQVEsd0VBQW9CO0FBQzVCLG9CQUFvQiw0REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDhDO0FBQ1A7QUFDRDtBQUNhO0FBQ3VCO0FBQzFFO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxJQUFJO0FBQ3JFLHFDQUFxQyxJQUFJLE1BQU07QUFDL0MscURBQXFELElBQUksS0FBSyx1QkFBdUI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxJQUFJO0FBQ3JFLGtDQUFrQyxJQUFJLE1BQU07QUFDNUMsa0RBQWtELElBQUksS0FBSyxtQkFBbUI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsbUJBQW1CO0FBQ3JFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFvQjtBQUN4QixnQkFBZ0IsNERBQVE7QUFDeEI7QUFDQSxRQUFRLHdEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEI7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkI7QUFDQSxJQUFJLG1EQUFXO0FBQ2Y7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0Esd0RBQXdELEtBQUs7QUFDN0QsMERBQTBELEtBQUs7QUFDL0Qsc0RBQXNELEtBQUs7QUFDM0Qsd0RBQXdELEtBQUs7QUFDN0Q7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQWU7QUFDM0M7QUFDQSx5Q0FBeUMsbUVBQWUsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQix1RUFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1RUFBbUI7QUFDL0M7QUFDQSx5Q0FBeUMsdUVBQW1CLGFBQWE7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNOEM7QUFDSztBQUNaO0FBQ2hDO0FBQ1A7QUFDQSxrQkFBa0IscUVBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxlQUFlO0FBQ2xFLHVDQUF1Qyx3QkFBd0IsS0FBSztBQUNwRTtBQUNBLG1DQUFtQyxXQUFXO0FBQzlDO0FBQ0EseUNBQXlDLFdBQVcsS0FBSztBQUN6RCx5Q0FBeUMsK0RBQStELEtBQUs7QUFDN0c7QUFDQTtBQUNBLHNDQUFzQyxZQUFZLE9BQU87QUFDekQsK0NBQStDLE1BQU0sRUFBRSxXQUFXO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxRQUFRO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFVLGFBQWEsT0FBTztBQUMxQyxZQUFZLGdFQUFpQjtBQUM3QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxrREFBa0Qsb0NBQW9DO0FBQ3RGLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYztBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDhDO0FBQ0Q7QUFDN0M7QUFDQSxnRUFBZ0UsS0FBSztBQUNyRTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsS0FBSyx3QkFBd0IsU0FBUyxTQUFTLElBQUksU0FBUyxJQUFJLGdCQUFnQixLQUFLO0FBQzlKLHVFQUF1RSxLQUFLLHdCQUF3QixTQUFTLFNBQVMsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEtBQUs7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLEtBQUssV0FBVyxTQUFTLFNBQVMsSUFBSSxRQUFRLElBQUk7QUFDaEk7QUFDQTtBQUNBLDRFQUE0RSxLQUFLLFdBQVcsU0FBUyxTQUFTLElBQUksUUFBUSxJQUFJO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwREFBYSxNQUFNO0FBQ2xFLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNERBQTRELEtBQUs7QUFDakUsd0RBQXdELEtBQUs7QUFDN0QsMERBQTBELEtBQUs7QUFDL0Qsc0RBQXNELEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkIsVUFBVSxhQUFhLEVBQUUsdUNBQXVDO0FBQ2hFLFVBQVUsWUFBWSxFQUFFLHlDQUF5QztBQUNqRSxVQUFVLFlBQVksRUFBRSxxQ0FBcUM7QUFDN0QsVUFBVSxhQUFhLEVBQUUscUNBQXFDO0FBQzlELFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsbUNBQW1DLDJFQUF1QixFQUFFLDJFQUF1QjtBQUNuRjtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsMkVBQXVCLEVBQUUsMkVBQXVCO0FBQ2pGO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDK0M7QUFDRjtBQUNNO0FBQ0o7QUFDL0M7QUFDQSxTQUFTLHdEQUFlO0FBQ3hCLGdCQUFnQiw0REFBaUI7QUFDakMsYUFBYSxzREFBYztBQUMzQixhQUFhLHdEQUFlO0FBQzVCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7QUNwQzhDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQVE7QUFDeEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWOEM7QUFDUjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQXNCO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLDBFQUFzQjtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQXNCO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxZQUFZLDBFQUFzQjtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsSUFBSSxtREFBVztBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ4QztBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtJQUErSTtBQUMvSSxnSkFBZ0o7QUFDaEosbUpBQW1KO0FBQ25KLG9KQUFvSjtBQUNwSjtBQUNBLDRFQUE0RSw0RUFBd0IsQ0FBQztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxxQ0FBcUMsNEVBQXdCLENBQUM7QUFDOUQ7QUFDQTs7Ozs7Ozs7Ozs7QUM3RGE7QUFDYjtBQUNBLGdDQUFnQyw4Q0FBOEMsb0JBQW9CLElBQUk7QUFDdEc7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDREQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDRCQUE0QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0REFBYTtBQUMzQyxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hIeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdENmO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDZCQUE2QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSwrQ0FBK0MsdUJBQXVCO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcnpEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNRO0FBQ007QUFDSDtBQUNBO0FBQ0Q7QUFDRztBQUNQO0FBQ0s7QUFDTDtBQUNEO0FBQ0U7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC5zY3NzP2NmMGEiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Vycm9yLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVySXRlbS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9nb29kcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9tYWluLXRlbXBsYXRlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9yYW5nZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9yb3V0aW5nLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zb3J0aW5nLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3N0b3JlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvdmlldy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9kYXRhLXBhcnNlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vc2NyaXB0cy9maWx0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhcnRQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJDYXJ0XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAgICAgICBmaWx0ZXIuc3dpdGNoQnJhbmQoJ0FwcGxlJyk7XHJcbiAgICAgICAgZmlsdGVyLnN3aXRjaEJyYW5kKCdTYW1zdW5nJyk7XHJcbiAgICAgICAgcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICAgICAgLy8gZmlsdGVyLnNldFN0b2NrKCdtYXgnLCA1MSk7XHJcbiAgICAgICAgLy8gcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIkNhcnRcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRXJyb3JQYWdlKCkge1xyXG4gICAgY29uc3QgZXJyb3JBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgaWYgKGVycm9yQXJlYSkge1xyXG4gICAgICAgIGVycm9yQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nZXJyb3JfX2Jsb2NrJz5QQUdFIE5PVCBGT1VORCAoNDA0KTwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3NjcmlwdHMvZmlsdGVyJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHNRdWFudGl0eSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XHJcbmltcG9ydCB7IGNoYW5nZVJhbmdlLCBjaGFuZ2VQcmljZVJhbmdlLCBjaGFuZ2VTdG9ja1JhbmdlIH0gZnJvbSAnLi9yYW5nZSc7XHJcbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXMoKSB7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2NhdGVnb3J5X2FyZWEnKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBwcm9kdWN0cy5jYXRlZ29yaWVzO1xyXG4gICAgbGV0IGNhdGVnb3J5SW5uZXIgPSBgPGRpdiBjbGFzcz0nY2F0ZWdvcnlfX2NvbnRhaW5lcic+YDtcclxuICAgIGZvciAobGV0IGtleSBpbiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlJbm5lciArPSBgPGRpdiBjbGFzcz0nZmlsdGVyX19zdHJpbmcnPlxyXG4gICAgICA8aW5wdXQgdHlwZSA9ICdjaGVja2JveCcgY2xhc3M9J2ZpbHRlcl9fY2hlY2tib3gnIHZhbHVlPVwiJHtrZXl9XCIgZGF0YS1wYXJhbSA9ICdjYXRlZ29yeSc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X190aXRsZSc+JHtrZXl9JmVuc3A7PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X19xdWFudGl0eScgZGF0YS1wYXJhbSA9XCIke2tleX1cIj4oJHtjYXRlZ29yaWVzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBjYXRlZ29yeUlubmVyICs9IGA8L2Rpdj5gO1xyXG4gICAgaWYgKGNhdGVnb3JpZXNBcmVhKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc0FyZWEuaW5uZXJIVE1MID0gY2F0ZWdvcnlJbm5lcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZW5kZXJCcmFuZHMoKSB7XHJcbiAgICBjb25zdCBicmFuZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnJhbmRfYXJlYScpO1xyXG4gICAgY29uc3QgYnJhbmRzID0gcHJvZHVjdHMuYnJhbmRzO1xyXG4gICAgbGV0IGJyYW5kc0lubmVyID0gYDxkaXYgY2xhc3M9J2JyYW5kX19jb250YWluZXInPmA7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gYnJhbmRzKSB7XHJcbiAgICAgICAgYnJhbmRzSW5uZXIgKz0gYDxkaXYgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94JyB2YWx1ZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnYnJhbmQnPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fcXVhbnRpdHknIGRhdGEtcGFyYW0gPVwiJHtrZXl9XCI+KCR7YnJhbmRzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBicmFuZHNJbm5lciArPSBgPC9kaXY+YDtcclxuICAgIGlmIChicmFuZHNBcmVhKSB7XHJcbiAgICAgICAgYnJhbmRzQXJlYS5pbm5lckhUTUwgPSBicmFuZHNJbm5lcjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRGaWx0ZXJQYXJhbXMoKSB7XHJcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19jaGVja2JveCcpO1xyXG4gICAgY2hlY2tib3hzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7IGNoYW5nZUZpbHRlcnMoZSk7IH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG4gICAgY29uc3QgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idXR0b25fcmVzZXQnKTtcclxuICAgIGJ1dHRvblJlc2V0ID09PSBudWxsIHx8IGJ1dHRvblJlc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0RmlsdGVycyk7XHJcbn1cclxuY29uc3QgZmlsdGVyTnVsbCA9IHtcclxuICAgIGNhdGVnb3J5OiBbXSxcclxuICAgIGJyYW5kOiBbXSxcclxuICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG59O1xyXG5sZXQgZmlsdGVyID0ge1xyXG4gICAgY2F0ZWdvcnk6IFtdLFxyXG4gICAgYnJhbmQ6IFtdLFxyXG4gICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgIHN0b2NrOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWx0ZXJzKGV2ZW50KSB7XHJcbiAgICBsZXQgcGFyYW0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFyYW07XHJcbiAgICBsZXQgbmV3RmlsdGVyID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGlmIChwYXJhbSkge1xyXG4gICAgICAgIGlmIChwYXJhbSA9PT0gXCJwcmljZVwiIHx8IHBhcmFtID09PSBcInN0b2NrXCIpIHtcclxuICAgICAgICAgICAgbGV0IHNpZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2lkZTtcclxuICAgICAgICAgICAgaWYgKHNpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNpZGUgPT09ICdtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5taW4gPSBOdW1iZXIobmV3RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ubWF4ID0gTnVtYmVyKG5ld0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJbcGFyYW1dLmluZGV4T2YobmV3RmlsdGVyKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmQgPSBmaWx0ZXJbcGFyYW1dLmluZGV4T2YobmV3RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0uc3BsaWNlKGluZCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLnB1c2gobmV3RmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwYXJhbSkge1xyXG4gICAgICAgIHJ1bkZpbHRyYXRpb24ocGFyYW0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJ1bkZpbHRyYXRpb24ocHJvcCkge1xyXG4gICAgbGV0IGZpbHRlckRvd25sb2FkZWQgPSBuZXcgRmlsdGVyO1xyXG4gICAgaWYgKGZpbHRlci5jYXRlZ29yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyLmNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGZpbHRlckRvd25sb2FkZWQuc3dpdGNoQ2F0ZWdvcnkoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLmJyYW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXIuYnJhbmQuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zd2l0Y2hCcmFuZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXIucHJpY2UubWluICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRQcmljZShcIm1pblwiLCBmaWx0ZXIucHJpY2UubWluKTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXIucHJpY2UubWF4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRQcmljZShcIm1heFwiLCBmaWx0ZXIucHJpY2UubWF4KTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXIuc3RvY2subWluICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRTdG9jayhcIm1pblwiLCBmaWx0ZXIuc3RvY2subWluKTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXIuc3RvY2subWF4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRTdG9jayhcIm1heFwiLCBmaWx0ZXIuc3RvY2subWF4KTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RzLmFwcGx5RmlsdGVyKGZpbHRlckRvd25sb2FkZWQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgaWYgKHByb3AgPT09ICdwcmljZScpIHtcclxuICAgICAgICBjaGFuZ2VTdG9ja1JhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnc3RvY2snKSB7XHJcbiAgICAgICAgY2hhbmdlUHJpY2VSYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2hhbmdlUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIHJlbmRlckdvb2RzKCk7XHJcbiAgICByZXJlbmRlckdvb2RzUXVhbnRpdHkoKTtcclxuICAgIHJlbmRlckdvb2RzUXVhbnRpdHkoKTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VSYW5nZVBvaW50cyhwcm9wKSB7XHJcbiAgICBsZXQgcmFuZ2VNaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZnJvbVNsaWRlciR7cHJvcH1gKTtcclxuICAgIGxldCByYW5nZU1pbk51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcm9tSW5wdXQke3Byb3B9YCk7XHJcbiAgICBsZXQgcmFuZ2VNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9TbGlkZXIke3Byb3B9YCk7XHJcbiAgICBsZXQgcmFuZ2VNYXhOdW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9JbnB1dCR7cHJvcH1gKTtcclxuICAgIGlmIChmaWx0ZXJbcHJvcF0ubWluICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmFuZ2VNaW4udmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWlufWA7XHJcbiAgICAgICAgcmFuZ2VNaW5OdW0udmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWlufWA7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyW3Byb3BdLm1heCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHJhbmdlTWF4LnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1heH1gO1xyXG4gICAgICAgIHJhbmdlTWF4TnVtLnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1heH1gO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlcmVuZGVyR29vZHNRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHF1YW50aXR5QXJlYUJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icmFuZF9fcXVhbnRpdHknKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnJhbmRzID0gW107XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuYnJhbmRzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRCcmFuZHMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgcXVhbnRpdHlBcmVhQnJhbmRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkQnJhbmRzLmluY2x1ZGVzKGl0ZW0uZGF0YXNldC5wYXJhbSkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmJyYW5kcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBpdGVtLmRhdGFzZXQucGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGAoJHtwcm9kdWN0cy5icmFuZHNba2V5XS5sZW5ndGh9KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gJygwKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBxdWFudGl0eUFyZWFDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeV9fcXVhbnRpdHknKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmaWx0ZXJlZENhdGVnb3JpZXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRDYXRlZ29yaWVzLmluY2x1ZGVzKGl0ZW0uZGF0YXNldC5wYXJhbSkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgKCR7cHJvZHVjdHMuY2F0ZWdvcmllc1trZXldLmxlbmd0aH0pYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSAnKDApJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZXNldEZpbHRlcnMoKSB7XHJcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19jaGVja2JveCcpO1xyXG4gICAgY2hlY2tib3hzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIGZpbHRlciA9IGZpbHRlck51bGw7XHJcbiAgICBydW5GaWx0cmF0aW9uKG51bGwpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckZpbHRlcnMoKSB7XHJcbiAgICByZW5kZXJDYXRlZ29yaWVzKCk7XHJcbiAgICByZW5kZXJCcmFuZHMoKTtcclxuICAgIGFkZEZpbHRlclBhcmFtcygpO1xyXG4gICAgYWRkRXZlbnRzKCk7XHJcbn1cclxucmVuZGVyRmlsdGVycygpO1xyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vc2NyaXB0cy9kYXRhLXBhcnNlcic7XHJcbmltcG9ydCB7IHJlbmRlclByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgeyBhZGRQYXRoVXJsIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdvb2RzKCkge1xyXG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XHJcbiAgICBjb25zdCBnb29kcyA9IHByb2R1Y3RzLnByb2R1Y3RzO1xyXG4gICAgbGV0IGdvb2RzSW5uZXIgPSBgPGRpdiBjbGFzcz0nZ29vZHNfX3dyYXBwZXInPmA7XHJcbiAgICBpZiAoZ29vZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fZW1wdHknPiBObyBwcm9kdWN0cyBmb3VuZCA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGdvb2RzKSB7XHJcbiAgICAgICAgICAgIGxldCBnb29kID0gZ29vZHNba2V5XTtcclxuICAgICAgICAgICAgZ29vZHNJbm5lciArPSBgPGRpdiBjbGFzcz0nZ29vZHNfX2NhcmQgY2FyZCc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fdGh1bWJuYWlsJz5cclxuICAgICAgICAgIDxpbWcgYWx0PSdnb29kJyBjbGFzcz0nY2FyZF9faW1nJyBzcmM9JyR7Z29vZC50aHVtYm5haWx9Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2Rpc2NvbnQnPiR7Z29vZC5kaXNjb3VudFBlcmNlbnRhZ2V9JiMzNzs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aXRsZSc+JHtnb29kLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlX25ldyc+JHtnb29kLnByaWNlfSYjMzY7PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZV9vbGQnPiR7TWF0aC5mbG9vcihnb29kLnByaWNlIC8gKDEwMCAtIGdvb2QuZGlzY291bnRQZXJjZW50YWdlKSAqIDEwMCl9JiMzNjs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19ib3R0b20nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcmF0aW5nJz4ke2dvb2QucmF0aW5nfSZzdGFyZjs8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3N0b2NrJz5TdG9jayAmIzU4OyAmIzMyOyAke2dvb2Quc3RvY2t9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fYnV0dG9ucyc+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdjYXJkX19idXR0b24gY2FyZF9fYnV0dG9uX2FkZCc+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J2NhcmRfX2J1dHRvbiBjYXJkX19idXR0b25fbW9yZScgZGF0YS1nb29kSUQgPSBcIiR7Z29vZC5pZH1cIj5TZWUgbW9yZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChnb29kc0FyZWEpIHtcclxuICAgICAgICBnb29kc0FyZWEuaW5uZXJIVE1MID0gZ29vZHNJbm5lcjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJ1dHRvbnNUb1Byb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9fYnV0dG9uX21vcmUnKTtcclxuICAgIGJ1dHRvbnNUb1Byb2R1Y3QuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBnb29kSUQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5nb29kaWQ7XHJcbiAgICAgICAgICAgIGFkZFBhdGhVcmwoYC9wcm9kdWN0LyR7Z29vZElEfWApO1xyXG4gICAgICAgICAgICByZW5kZXJQcm9kdWN0UGFnZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkX19idXR0b25fYWRkXCIpO1xyXG4gICAgYnV0dG9uQ2FydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgY2hhbmdlQnV0dG9uQ2FydChlLmN1cnJlbnRUYXJnZXQpOyB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUJ1dHRvbkNhcnQoZSkge1xyXG4gICAgaWYgKChlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUuaW5uZXJIVE1MKSA9PSBcIkFkZCB0byBjYXJ0XCIpIHtcclxuICAgICAgICBlLmlubmVySFRNTCA9IFwiRGVsZXRlIGZyb20gY2FydFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5pbm5lckhUTUwpID09IFwiRGVsZXRlIGZyb20gY2FydFwiKSB7XHJcbiAgICAgICAgZS5pbm5lckhUTUwgPSBcIkFkZCB0byBjYXJ0XCI7XHJcbiAgICB9XHJcbn1cclxucmVuZGVyR29vZHMoKTtcclxuIiwiaW1wb3J0IHsgaGFuZGxlTG9jYXRpb24gfSBmcm9tICcuL3JvdXRpbmcnO1xyXG5jb25zdCB0ZW1wbGF0ZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0b3JlX19wcm9qZWN0XCIpO1xyXG5mdW5jdGlvbiByZW5kZXJUZW1wbGF0ZSgpIHtcclxuICAgIGlmICh0ZW1wbGF0ZUFyZWEpIHtcclxuICAgICAgICB0ZW1wbGF0ZUFyZWEuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9ICd3cmFwcGVyJz5cclxuICAgICAgPGhlYWRlciBjbGFzcyA9ICdoZWFkZXInPkhlYWRlclxyXG4gICAgICAgIDxhIGhyZWY9Jy8nPkxvZ288L2E+XHJcbiAgICAgICAgPGEgaHJlZj0nL2NhcnQnPkNhcnQ8L2E+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbiBjbGFzcyA9ICdtYWluJz5NYWluXHJcbiAgICAgICAgPGEgaHJlZj0nL3Byb2R1Y3QnPlByb2R1Y3Q8L2E+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3RlciBjbGFzcyA9ICdmb290ZXInPkZvb3RlcjwvZm9vdGVyPlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbml0UHJvamVjdCgpIHtcclxuICAgIHJlbmRlclRlbXBsYXRlKCk7XHJcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xyXG59XHJcbmluaXRQcm9qZWN0KCk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9kdWN0UGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiUHJvZHVjdFwiO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcclxuaW1wb3J0IHsgY2hhbmdlRmlsdGVycyB9IGZyb20gJy4vZmlsdGVySXRlbSc7XHJcbmZ1bmN0aW9uIHJlbmRlclJhbmdlKHByb3AsIG1pbiwgbWF4LCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcclxuICAgIGNvbnN0IHJhbmdlUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmlsdGVyX19yYW5nZV8ke3Byb3B9YCk7XHJcbiAgICBpZiAocmFuZ2VQbGFjZSkge1xyXG4gICAgICAgIHJhbmdlUGxhY2UuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udGFpbmVyIHJhbmdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udHJvbF9zbGlkZXJzXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInJhbmdlX19pbnB1dCByYW5nZV9faW5wdXRfbWluXCIgaWQ9XCJmcm9tU2xpZGVyJHtwcm9wfVwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiJHttaW5WYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9XCIke21heH1cIiBkYXRhLXBhcmFtPVwiJHtwcm9wfVwiIGRhdGEtc2lkZSA9XCJtaW5cIi8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInJhbmdlX19pbnB1dCByYW5nZV9faW5wdXRfbWF4XCIgaWQ9XCJ0b1NsaWRlciR7cHJvcH1cIiB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIiR7bWF4VmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCIgZGF0YS1wYXJhbT1cIiR7cHJvcH1cIiBkYXRhLXNpZGUgPVwibWF4XCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJhbmdlX19jb250cm9sX2Zvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmFuZ2VfX2lucHV0X251bWJlclwiIHR5cGU9XCJudW1iZXJcIiBpZD1cImZyb21JbnB1dCR7cHJvcH1cIiB2YWx1ZT1cIiR7bWluVmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PSR7bWF4fS8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmFuZ2VfX2lucHV0X251bWJlclwiIHR5cGU9XCJudW1iZXJcIiBpZD1cInRvSW5wdXQke3Byb3B9XCIgdmFsdWU9XCIke21heFZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD0ke21heH0vPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19pbnB1dCcpO1xyXG4gICAgcmFuZ2UuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4geyBjaGFuZ2VGaWx0ZXJzKGUpOyB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFJhbmdlRnVuY3Rpb25hbGl0eShwcm9wKSB7XHJcbiAgICBjb25zdCBmcm9tU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Zyb21TbGlkZXIke3Byb3B9YCk7XHJcbiAgICBjb25zdCB0b1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b1NsaWRlciR7cHJvcH1gKTtcclxuICAgIGNvbnN0IGZyb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmcm9tSW5wdXQke3Byb3B9YCk7XHJcbiAgICBjb25zdCB0b0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvSW5wdXQke3Byb3B9YCk7XHJcbiAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xyXG4gICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XHJcbiAgICBpZiAoZnJvbVNsaWRlciAmJiB0b1NsaWRlciAmJiBmcm9tSW5wdXQgJiYgdG9JbnB1dCkge1xyXG4gICAgICAgIGZyb21TbGlkZXIub25pbnB1dCA9ICgpID0+IGNvbnRyb2xGcm9tU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCBmcm9tSW5wdXQpO1xyXG4gICAgICAgIHRvU2xpZGVyLm9uaW5wdXQgPSAoKSA9PiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpO1xyXG4gICAgICAgIGZyb21JbnB1dC5vbmlucHV0ID0gKCkgPT4gY29udHJvbEZyb21JbnB1dChmcm9tU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIHRvU2xpZGVyKTtcclxuICAgICAgICB0b0lucHV0Lm9uaW5wdXQgPSAoKSA9PiBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCB0b1NsaWRlcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb250cm9sRnJvbUlucHV0KGZyb21TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgY29udHJvbFNsaWRlcikge1xyXG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcclxuICAgICAgICBmaWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIGNvbnRyb2xTbGlkZXIpO1xyXG4gICAgICAgIGlmIChmcm9tID4gdG8pIHtcclxuICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbnRyb2xUb0lucHV0KHRvU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIGNvbnRyb2xTbGlkZXIpIHtcclxuICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21JbnB1dCwgdG9JbnB1dCk7XHJcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tSW5wdXQsIHRvSW5wdXQsICcjQzZDNkM2JywgJyNiYjFiMjMnLCBjb250cm9sU2xpZGVyKTtcclxuICAgICAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvSW5wdXQpO1xyXG4gICAgICAgIGlmIChmcm9tIDw9IHRvKSB7XHJcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbnRyb2xGcm9tU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCBmcm9tSW5wdXQpIHtcclxuICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21TbGlkZXIsIHRvU2xpZGVyKTtcclxuICAgICAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xyXG4gICAgICAgIGlmIChmcm9tID4gdG8pIHtcclxuICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KSB7XHJcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tU2xpZGVyLCB0b1NsaWRlcik7XHJcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIHRvU2xpZGVyKTtcclxuICAgICAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvU2xpZGVyKTtcclxuICAgICAgICBpZiAoZnJvbSA8PSB0bykge1xyXG4gICAgICAgICAgICB0b1NsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0UGFyc2VkKGN1cnJlbnRGcm9tLCBjdXJyZW50VG8pIHtcclxuICAgICAgICBjb25zdCBmcm9tID0gcGFyc2VJbnQoY3VycmVudEZyb20udmFsdWUsIDEwKTtcclxuICAgICAgICBjb25zdCB0byA9IHBhcnNlSW50KGN1cnJlbnRUby52YWx1ZSwgMTApO1xyXG4gICAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmlsbFNsaWRlcihmcm9tLCB0bywgc2xpZGVyQ29sb3IsIHJhbmdlQ29sb3IsIGNvbnRyb2xTbGlkZXIpIHtcclxuICAgICAgICBpZiAoZnJvbSAmJiB0byAmJiBjb250cm9sU2xpZGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlRGlzdGFuY2UgPSBOdW1iZXIodG8ubWF4KSAtIE51bWJlcih0by5taW4pO1xyXG4gICAgICAgICAgICBjb25zdCBmcm9tUG9zaXRpb24gPSBOdW1iZXIoZnJvbS52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcclxuICAgICAgICAgICAgY29uc3QgdG9Qb3NpdGlvbiA9IE51bWJlcih0by52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcclxuICAgICAgICAgICAgY29udHJvbFNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAke3NsaWRlckNvbG9yfSAwJSxcclxuICAgICAgICAke3NsaWRlckNvbG9yfSAkeyhmcm9tUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpICogMTAwfSUsXHJcbiAgICAgICAgJHtyYW5nZUNvbG9yfSAkeygoZnJvbVBvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSkgKiAxMDB9JSxcclxuICAgICAgICAke3JhbmdlQ29sb3J9ICR7KHRvUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpICogMTAwfSUsIFxyXG4gICAgICAgICR7c2xpZGVyQ29sb3J9ICR7KHRvUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpICogMTAwfSUsIFxyXG4gICAgICAgICR7c2xpZGVyQ29sb3J9IDEwMCUpYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRUb2dnbGVBY2Nlc3NpYmxlKGN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICBjb25zdCB0b1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b1NsaWRlciR7cHJvcH1gKTtcclxuICAgICAgICBpZiAoY3VycmVudFRhcmdldCAmJiBOdW1iZXIoY3VycmVudFRhcmdldC52YWx1ZSkgPD0gMCAmJiB0b1NsaWRlcikge1xyXG4gICAgICAgICAgICB0b1NsaWRlci5zdHlsZS56SW5kZXggPSBTdHJpbmcoMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodG9TbGlkZXIpIHtcclxuICAgICAgICAgICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IFN0cmluZygwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUHJpY2VSYW5nZSgpIHtcclxuICAgIHJlbmRlclJhbmdlKFwicHJpY2VcIiwgMTAsIDE3NDksIHByb2R1Y3RzLnByaWNlUmFuZ2UubWluLCBwcm9kdWN0cy5wcmljZVJhbmdlLm1heCk7XHJcbiAgICBhZGRSYW5nZUZ1bmN0aW9uYWxpdHkoXCJwcmljZVwiKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU3RvY2tSYW5nZSgpIHtcclxuICAgIHJlbmRlclJhbmdlKFwic3RvY2tcIiwgMiwgMTUwLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1pbiwgcHJvZHVjdHMuc3RvY2tSYW5nZS5tYXgpO1xyXG4gICAgYWRkUmFuZ2VGdW5jdGlvbmFsaXR5KFwic3RvY2tcIik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJhbmdlKCkge1xyXG4gICAgY2hhbmdlUHJpY2VSYW5nZSgpO1xyXG4gICAgY2hhbmdlU3RvY2tSYW5nZSgpO1xyXG59XHJcbmNoYW5nZVJhbmdlKCk7XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcmVuZGVyRXJyb3JQYWdlIH0gZnJvbSAnLi9lcnJvci1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyQ2FydFBhZ2UgfSBmcm9tICcuL2NhcnQtcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlclByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJTdG9yZVBhZ2UgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xyXG5jb25zdCByb3V0ZXMgPSB7XHJcbiAgICAnLyc6IHJlbmRlclN0b3JlUGFnZSxcclxuICAgICcvcHJvZHVjdCc6IHJlbmRlclByb2R1Y3RQYWdlLFxyXG4gICAgJy9jYXJ0JzogcmVuZGVyQ2FydFBhZ2UsXHJcbiAgICAnZXJyb3InOiByZW5kZXJFcnJvclBhZ2UsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBoYW5kbGVMb2NhdGlvbiA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3BhdGhdIHx8IHJvdXRlcy5lcnJvcjtcclxuICAgIHJvdXRlKCk7XHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGF0aFVybChwcm9wKSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHByb3ApO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxufVxyXG4vLyBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0X19pdGVtXCIpO1xyXG4vLyBidXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZjtcclxuLy8gICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICB9KVxyXG4vLyB9KVxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGhhbmRsZUxvY2F0aW9uO1xyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuZnVuY3Rpb24gcnVuU2VhcmNoKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xyXG4gICAgc2VhcmNoSW5wdXQgPT09IG51bGwgfHwgc2VhcmNoSW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIHJ1bkZpbHRlcihzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBydW5GaWx0ZXIocHJvcCkge1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG59XHJcbnJ1blNlYXJjaCgpO1xyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tIFwiLi9nb29kc1wiO1xyXG5mdW5jdGlvbiBhZGRMaXN0ZW5lclNvcnRpbmdCdXR0b25zKCkge1xyXG4gICAgY29uc3QgYnV0dG9uU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0ZXJzX19idXR0b24nKTtcclxuICAgIGJ1dHRvblNvcnQuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNvcnRHb29kcyhlKTtcclxuICAgICAgICAgICAgY2hhbmdlQWN0aXZlQnV0dG9uKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnV0dG9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBidXR0b25Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRlcnNfX2J1dHRvbicpO1xyXG4gICAgYnV0dG9uU29ydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHNvcnRHb29kcyhldmVudCkge1xyXG4gICAgbGV0IG9wdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb247XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbjtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbiwgZGlyZWN0aW9uKTtcclxuICAgIGlmIChvcHRpb24gPT0gXCJwcmljZVwiKSB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1pblwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwyLnByaWNlIC0gZWwxLnByaWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1heFwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwxLnByaWNlIC0gZWwyLnByaWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWluXCIpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDIucmF0aW5nIC0gZWwxLnJhdGluZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtYXhcIikge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsMS5yYXRpbmcgLSBlbDIucmF0aW5nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJHb29kcygpO1xyXG59XHJcbmFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMoKTtcclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9zY3JpcHRzL2RhdGEtcGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdG9yZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8YXJ0aWNsZSBjbGFzcz0nc3RvcmVfX3BhZ2Ugc3RvcmUnPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdzdG9yZV9fc2VhcmNoIHNlYXJjaCc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nc2VhcmNoX19ibG9jayc+XHJcbiAgICAgICAgICA8aW1nIGFsdD0nc2VhcmNoJyBjbGFzcz0nc2VhcmNoX19pbWcnIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvc2VhcmNoMy5wbmcnPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9J3NlYXJjaCcgY2xhc3M9J3NlYXJjaF9faW5wdXQnIHBsYWNlaG9sZGVyID0nU2VhcmNoIHByb2R1Y3QnPjwvaW5wdXQ+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX21haW4nPlxyXG4gICAgICAgIDxhc2lkZSBjbGFzcz0nc3RvcmVfX2ZpbHRlcnMgZmlsdGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2NhdGVnb3J5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+Q2F0ZWdvcnk8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fY2F0ZWdvcnlfYXJlYSc+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2JyYW5kJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+QnJhbmQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYnJhbmRfYXJlYSc+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX3ByaWNlJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+UHJpY2U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYXJlYV9yYW5nZSBmaWx0ZXJfX3JhbmdlX3ByaWNlJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fc3RvY2snPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19hcmVhX3JhbmdlIGZpbHRlcl9fcmFuZ2Vfc3RvY2snPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19idXR0b25zJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZmlsdGVyX19idXR0b24gZmlsdGVyX19idXR0b25fcmVzZXQgYnV0dG9uJz5SZXNldCBmaWx0ZXJzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ZpbHRlcl9fYnV0dG9uIGZpbHRlcl9fYnV0dG9uX3NhdmUgYnV0dG9uJz5TYXZlIGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9J3N0b3JlX19nb29kcyBnb29kcyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fb3B0aW9ucyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19zb3J0ZXJzIHNvcnRlcnMnPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfbG93JyBkYXRhLW9wdGlvbiA9IFwicHJpY2VcIiBkYXRhLWRpcmVjdGlvbj1cIm1pblwiPnByaWNlICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3ByaWNlIHNvcnRlcnNfX3ByaWNlX2hpZ2gnIGRhdGEtb3B0aW9uID0gXCJwcmljZVwiIGRhdGEtZGlyZWN0aW9uPVwibWF4XCI+cHJpY2UgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcmF0aW5nIHNvcnRlcnNfX3JhdGluZ19sb3cnIGRhdGEtb3B0aW9uID0gXCJyYXRpbmdcIiBkYXRhLWRpcmVjdGlvbj1cIm1pblwiPnJhdGluZyAmIzg1OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19yYXRpbmcgc29ydGVyc19fcmF0aW5nX2hpZ2gnIGRhdGEtb3B0aW9uID0gXCJyYXRpbmdcIiBkYXRhLWRpcmVjdGlvbj1cIm1heFwiPnJhdGluZyAmIzg1OTM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3M9J2dvb2RzX190aXRsZSc+Rm91bmQ6IDxzcGFuIGNsYXNzPSdnb29kc19fcXVhbnRpdHknPiR7cHJvZHVjdHMucHJvZHVjdHMubGVuZ3RofTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fdmlldyB2aWV3Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24nPjxpbWcgYWx0PSdncmlkJyBjbGFzcz0ndmlld19fYnV0dG9uX2ltZyB2aWV3X19idXR0b25fbWFueScgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy8wMDMtZ3JpZC0xLnBuZyc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld19fYnV0dG9uJz48aW1nIGFsdD0nZ3JpZCcgY2xhc3M9J3ZpZXdfX2J1dHRvbl9hY3RpdmUgdmlld19fYnV0dG9uX2ltZyB2aWV3X19idXR0b25fZmV3JyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nLzAwNC1tZW51LTEucG5nJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19hcmVhJz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+YDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR29vZHNRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IGdvb2RzcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX3F1YW50aXR5Jyk7XHJcbiAgICBpZiAoZ29vZHNxdWFudGl0eSkge1xyXG4gICAgICAgIGdvb2RzcXVhbnRpdHkuaW5uZXJIVE1MID0gYCR7cHJvZHVjdHMucHJvZHVjdHMubGVuZ3RofWA7XHJcbiAgICB9XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IGJ1dHRvbnNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXdfX2J1dHRvbl9pbWcnKTtcclxuYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4geyBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgY2hhbmdlVmlldyhldmVudCk7IH0pOyB9KTtcclxuZnVuY3Rpb24gY2hhbmdlVmlldyhldikge1xyXG4gICAgYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aWV3X19idXR0b25fYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGxldCBhY3RpdmVCdXR0b24gPSBldi5jdXJyZW50VGFyZ2V0O1xyXG4gICAgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fd3JhcHBlcicpO1xyXG4gICAgZ29vZHNBcmVhID09PSBudWxsIHx8IGdvb2RzQXJlYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ29vZHNBcmVhLmNsYXNzTGlzdC50b2dnbGUoJ2dvb2RzX193cmFwcGVyX21hbnknKTtcclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XHJcbmNsYXNzIFByb2R1Y3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IGVsLmJyYW5kLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGVsLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRQZXJjZW50YWdlOiBlbC5kaXNjb3VudFBlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGVsLmltYWdlcyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBlbC5wcmljZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogZWwucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IGVsLnN0b2NrLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBlbC50aHVtYm5haWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZWwudGl0bGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0c01ldGFkYXRhKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWluID4gcHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5taW4gPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmljZVJhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5wcmljZVJhbmdlLm1heCA8IHByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvY2tSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMuc3RvY2tSYW5nZS5taW4gPiBwcm9kdWN0LnN0b2NrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9ja1JhbmdlLm1pbiA9IHByb2R1Y3Quc3RvY2s7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b2NrUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnN0b2NrUmFuZ2UubWF4IDwgcHJvZHVjdC5zdG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvY2tSYW5nZS5tYXggPSBwcm9kdWN0LnN0b2NrO1xyXG4gICAgICAgICAgICBpZiAoIShwcm9kdWN0LmJyYW5kIGluIHRoaXMuYnJhbmRzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0gPSBbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0ucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5jYXRlZ29yeSBpbiB0aGlzLmNhdGVnb3JpZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcHJvZHVjdC5jYXRlZ29yeV0gPSBbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3Byb2R1Y3QuY2F0ZWdvcnldLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0c1tpZCAtIDFdO1xyXG4gICAgfVxyXG4gICAgYXBwbHlGaWx0ZXIoZmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuZ2V0UHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKGxldCBpbmQgPSAwOyBpbmQgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLnByb2R1Y3RzW2luZF07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgaW5kLS07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShmaWx0ZXIuY2F0ZWdvcnkuaW5jbHVkZXMoZWwuY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLmJyYW5kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyLmJyYW5kLmluY2x1ZGVzKGVsLmJyYW5kKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5wcmljZS5taW4gIT09IC0xICYmIGVsLnByaWNlIDwgZmlsdGVyLnByaWNlLm1pbikge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5wcmljZS5tYXggIT09IC0xICYmIGVsLnByaWNlID4gZmlsdGVyLnByaWNlLm1heCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdG9jay5taW4gIT09IC0xICYmIGVsLnN0b2NrIDwgZmlsdGVyLnN0b2NrLm1pbikge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdG9jay5tYXggIT09IC0xICYmIGVsLnN0b2NrID4gZmlsdGVyLnN0b2NrLm1heCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0c01ldGFkYXRhKCk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgcHJvZHVjdHMgPSBuZXcgUHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7XHJcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xyXG4iLCJjbGFzcyBGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnJhbmQgPSBbXTtcclxuICAgICAgICB0aGlzLnByaWNlID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdG9jayA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgc3dpdGNoQ2F0ZWdvcnkoaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5LmluY2x1ZGVzKGl0ZW0pKVxyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeS5maWx0ZXIoZWwgPT4gZWwgIT09IGl0ZW0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoQnJhbmQoaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJyYW5kLmluY2x1ZGVzKGl0ZW0pKVxyXG4gICAgICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5maWx0ZXIoZWwgPT4gZWwgIT09IGl0ZW0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5icmFuZC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgc2V0UHJpY2UocGFyYW1ldGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIgPT09ICdtaW4nKVxyXG4gICAgICAgICAgICB0aGlzLnByaWNlLm1pbiA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5tYXggPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNldFN0b2NrKHBhcmFtZXRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAocGFyYW1ldGVyID09PSAnbWluJylcclxuICAgICAgICAgICAgdGhpcy5zdG9jay5taW4gPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RvY2subWF4ID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgXCJwcm9kdWN0c1wiOiBbXG4gIHtcbiAgXCJpZFwiOiAxLFxuICBcInRpdGxlXCI6IFwiaVBob25lIDlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGFwcGxlIG1vYmlsZSB3aGljaCBpcyBub3RoaW5nIGxpa2UgYXBwbGVcIixcbiAgXCJwcmljZVwiOiA1NDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjk2LFxuICBcInJhdGluZ1wiOiA0LjY5LFxuICBcInN0b2NrXCI6IDk0LFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMixcbiAgXCJ0aXRsZVwiOiBcImlQaG9uZSBYXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTSU0tRnJlZSwgTW9kZWwgQTE5MjExIDYuNS1pbmNoIFN1cGVyIFJldGluYSBIRCBkaXNwbGF5IHdpdGggT0xFRCB0ZWNobm9sb2d5IEExMiBCaW9uaWMgY2hpcCB3aXRoIC4uLlwiLFxuICBcInByaWNlXCI6IDg5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuOTQsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogMzQsXG4gIFwiYnJhbmRcIjogXCJBcHBsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzLFxuICBcInRpdGxlXCI6IFwiU2Ftc3VuZyBVbml2ZXJzZSA5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nJ3MgbmV3IHZhcmlhbnQgd2hpY2ggZ29lcyBiZXlvbmQgR2FsYXh5IHRvIHRoZSBVbml2ZXJzZVwiLFxuICBcInByaWNlXCI6IDEyNDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjQ2LFxuICBcInJhdGluZ1wiOiA0LjA5LFxuICBcInN0b2NrXCI6IDM2LFxuICBcImJyYW5kXCI6IFwiU2Ftc3VuZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zLzEuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNCxcbiAgXCJ0aXRsZVwiOiBcIk9QUE9GMTlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9QUE8gRjE5IGlzIG9mZmljaWFsbHkgYW5ub3VuY2VkIG9uIEFwcmlsIDIwMjEuXCIsXG4gIFwicHJpY2VcIjogMjgwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy45MSxcbiAgXCJyYXRpbmdcIjogNC4zLFxuICBcInN0b2NrXCI6IDEyMyxcbiAgXCJicmFuZFwiOiBcIk9QUE9cIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNSxcbiAgXCJ0aXRsZVwiOiBcIkh1YXdlaSBQMzBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkh1YXdlaeKAmXMgcmUtYmFkZ2VkIFAzMCBQcm8gTmV3IEVkaXRpb24gd2FzIG9mZmljaWFsbHkgdW52ZWlsZWQgeWVzdGVyZGF5IGluIEdlcm1hbnkgYW5kIG5vdyB0aGUgZGV2aWNlIGhhcyBtYWRlIGl0cyB3YXkgdG8gdGhlIFVLLlwiLFxuICBcInByaWNlXCI6IDQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNTgsXG4gIFwicmF0aW5nXCI6IDQuMDksXG4gIFwic3RvY2tcIjogMzIsXG4gIFwiYnJhbmRcIjogXCJIdWF3ZWlcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYsXG4gIFwidGl0bGVcIjogXCJNYWNCb29rIFByb1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFjQm9vayBQcm8gMjAyMSB3aXRoIG1pbmktTEVEIGRpc3BsYXkgbWF5IGxhdW5jaCBiZXR3ZWVuIFNlcHRlbWJlciwgTm92ZW1iZXJcIixcbiAgXCJwcmljZVwiOiAxNzQ5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4wMixcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiA4MyxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82L3RodW1ibmFpbC5wbmdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcsXG4gIFwidGl0bGVcIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rIFMgKDIwMjApIExhcHRvcCBXaXRoIEludGVsIExha2VmaWVsZCBDaGlwLCA4R0Igb2YgUkFNIExhdW5jaGVkXCIsXG4gIFwicHJpY2VcIjogMTQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4xNSxcbiAgXCJyYXRpbmdcIjogNC4yNSxcbiAgXCJzdG9ja1wiOiA1MCxcbiAgXCJicmFuZFwiOiBcIlNhbXN1bmdcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4LFxuICBcInRpdGxlXCI6IFwiTWljcm9zb2Z0IFN1cmZhY2UgTGFwdG9wIDRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxlIGFuZCBzcGVlZC4gU3RhbmQgb3V0IG9uIEhEIHZpZGVvIGNhbGxzIGJhY2tlZCBieSBTdHVkaW8gTWljcy4gQ2FwdHVyZSBpZGVhcyBvbiB0aGUgdmlicmFudCB0b3VjaHNjcmVlbi5cIixcbiAgXCJwcmljZVwiOiAxNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yMyxcbiAgXCJyYXRpbmdcIjogNC40MyxcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIk1pY3Jvc29mdCBTdXJmYWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOSxcbiAgXCJ0aXRsZVwiOiBcIkluZmluaXggSU5CT09LXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbmZpbml4IEluYm9vayBYMSBDaTMgMTB0aCA4R0IgMjU2R0IgMTQgV2luMTAgR3JleSDigJMgMSBZZWFyIFdhcnJhbnR5XCIsXG4gIFwicHJpY2VcIjogMTA5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuODMsXG4gIFwicmF0aW5nXCI6IDQuNTQsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJJbmZpbml4XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTAsXG4gIFwidGl0bGVcIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSFAgUGF2aWxpb24gMTUtREsxMDU2V00gR2FtaW5nIExhcHRvcCAxMHRoIEdlbiBDb3JlIGk1LCA4R0IsIDI1NkdCIFNTRCwgR1RYIDE2NTAgNEdCLCBXaW5kb3dzIDEwXCIsXG4gIFwicHJpY2VcIjogMTA5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4xOCxcbiAgXCJyYXRpbmdcIjogNC40MyxcbiAgXCJzdG9ja1wiOiA4OSxcbiAgXCJicmFuZFwiOiBcIkhQIFBhdmlsaW9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDExLFxuICBcInRpdGxlXCI6IFwicGVyZnVtZSBPaWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lZ2EgRGlzY291bnQsIEltcHJlc3Npb24gb2YgQWNxdWEgRGkgR2lvIGJ5IEdpb3JnaW9Bcm1hbmkgY29uY2VudHJhdGVkIGF0dGFyIHBlcmZ1bWUgT2lsXCIsXG4gIFwicHJpY2VcIjogMTMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguNCxcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiA2NSxcbiAgXCJicmFuZFwiOiBcIkltcHJlc3Npb24gb2YgQWNxdWEgRGkgR2lvXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMixcbiAgXCJ0aXRsZVwiOiBcIkJyb3duIFBlcmZ1bWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJveWFsX01pcmFnZSBTcG9ydCBCcm93biBQZXJmdW1lIGZvciBNZW4gJiBXb21lbiAtIDEyMG1sXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjY2LFxuICBcInJhdGluZ1wiOiA0LFxuICBcInN0b2NrXCI6IDUyLFxuICBcImJyYW5kXCI6IFwiUm95YWxfTWlyYWdlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTMsXG4gIFwidGl0bGVcIjogXCJGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJlc3QgRm9nIFNjZW50IFhwcmVzc2lvIFBlcmZ1bWUgMTAwbWwgRm9yIE1lbiBjb29sIGxvbmcgbGFzdGluZyBwZXJmdW1lcyBmb3IgTWVuXCIsXG4gIFwicHJpY2VcIjogMTMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMTQsXG4gIFwicmF0aW5nXCI6IDQuNTksXG4gIFwic3RvY2tcIjogNjEsXG4gIFwiYnJhbmRcIjogXCJGb2cgU2NlbnQgWHByZXNzaW9cIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE0LFxuICBcInRpdGxlXCI6IFwiTm9uLUFsY29ob2xpYyBDb25jZW50cmF0ZWQgUGVyZnVtZSBPaWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9yaWdpbmFsIEFsIE11bmFraMKuIGJ5IE1haGFsIEFsIE11c2sgfCBPdXIgSW1wcmVzc2lvbiBvZiBDbGltYXRlIHwgNm1sIE5vbi1BbGNvaG9saWMgQ29uY2VudHJhdGVkIFBlcmZ1bWUgT2lsXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDExNCxcbiAgXCJicmFuZFwiOiBcIkFsIE11bmFraFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTUsXG4gIFwidGl0bGVcIjogXCJFYXUgRGUgUGVyZnVtZSBTcHJheVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2VudWluZSAgQWwtUmVoYWIgc3ByYXkgcGVyZnVtZSBmcm9tIFVBRS9TYXVkaSBBcmFiaWEvWWVtZW4gSGlnaCBRdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjk5LFxuICBcInJhdGluZ1wiOiA0LjcsXG4gIFwic3RvY2tcIjogMTA1LFxuICBcImJyYW5kXCI6IFwiTG9yZCAtIEFsLVJlaGFiXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTYsXG4gIFwidGl0bGVcIjogXCJIeWFsdXJvbmljIEFjaWQgU2VydW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkwnT3LDg8KpYWwgUGFyaXMgaW50cm9kdWNlcyBIeWFsdXJvbiBFeHBlcnQgUmVwbHVtcGluZyBTZXJ1bSBmb3JtdWxhdGVkIHdpdGggMS41JSBIeWFsdXJvbmljIEFjaWRcIixcbiAgXCJwcmljZVwiOiAxOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMzEsXG4gIFwicmF0aW5nXCI6IDQuODMsXG4gIFwic3RvY2tcIjogMTEwLFxuICBcImJyYW5kXCI6IFwiTCdPcmVhbCBQYXJpc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTcsXG4gIFwidGl0bGVcIjogXCJUcmVlIE9pbCAzMG1sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUZWEgdHJlZSBvaWwgY29udGFpbnMgYSBudW1iZXIgb2YgY29tcG91bmRzLCBpbmNsdWRpbmcgdGVycGluZW4tNC1vbCwgdGhhdCBoYXZlIGJlZW4gc2hvd24gdG8ga2lsbCBjZXJ0YWluIGJhY3RlcmlhLFwiLFxuICBcInByaWNlXCI6IDEyLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjA5LFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiSGVtYW5pIFRlYVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE4LFxuICBcInRpdGxlXCI6IFwiT2lsIEZyZWUgTW9pc3R1cml6ZXIgMTAwbWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRlcm1pdmUgT2lsIEZyZWUgTW9pc3R1cml6ZXIgd2l0aCBTUEYgMjAgaXMgc3BlY2lmaWNhbGx5IGZvcm11bGF0ZWQgd2l0aCBjZXJhbWlkZXMsIGh5YWx1cm9uaWMgYWNpZCAmIHN1bnNjcmVlbi5cIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMSxcbiAgXCJyYXRpbmdcIjogNC41NixcbiAgXCJzdG9ja1wiOiA4OCxcbiAgXCJicmFuZFwiOiBcIkRlcm1pdmVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTksXG4gIFwidGl0bGVcIjogXCJTa2luIEJlYXV0eSBTZXJ1bS5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgbmFtZTogcm9yZWMgY29sbGFnZW4gaHlhbHVyb25pYyBhY2lkIHdoaXRlIGZhY2Ugc2VydW0gcmljZU5ldCB3ZWlnaHQ6IDE1IG1cIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNjgsXG4gIFwicmF0aW5nXCI6IDQuNDIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJST1JFQyBXaGl0ZSBSaWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjAsXG4gIFwidGl0bGVcIjogXCJGcmVja2xlIFRyZWF0bWVudCBDcmVhbS0gMTVnbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFpciAmIENsZWFyIGlzIFBha2lzdGFuJ3Mgb25seSBwdXJlIEZyZWNrbGUgY3JlYW0gd2hpY2ggaGVscHNmYWRlIEZyZWNrbGVzLCBEYXJrc3BvdHMgYW5kIHBpZ21lbnRzLiBNZXJjdXJ5IGxldmVsIGlzIDAlLCBzbyB0aGVyZSBhcmUgbm8gc2lkZSBlZmZlY3RzLlwiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi45OSxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiAxNDAsXG4gIFwiYnJhbmRcIjogXCJGYWlyICYgQ2xlYXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjEsXG4gIFwidGl0bGVcIjogXCItIERhYWwgTWFzb29yIDUwMCBncmFtc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmluZSBxdWFsaXR5IEJyYW5kZWQgUHJvZHVjdCBLZWVwIGluIGEgY29vbCBhbmQgZHJ5IHBsYWNlXCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQuODEsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogMTMzLFxuICBcImJyYW5kXCI6IFwiU2FhZiAmIEtoYWFzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxL3RodW1ibmFpbC5wbmdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIyLFxuICBcInRpdGxlXCI6IFwiRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBCYWtlIFBhcmxvciBCaWcgRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIixcbiAgXCJwcmljZVwiOiAxNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTgsXG4gIFwicmF0aW5nXCI6IDQuNTcsXG4gIFwic3RvY2tcIjogMTQ2LFxuICBcImJyYW5kXCI6IFwiQmFrZSBQYXJsb3IgQmlnXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIzLFxuICBcInRpdGxlXCI6IFwiT3JhbmdlIEVzc2VuY2UgRm9vZCBGbGF2b3VcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmljYXRpb25zIG9mIE9yYW5nZSBFc3NlbmNlIEZvb2QgRmxhdm91ciBGb3IgQ2FrZXMgYW5kIEJha2luZyBGb29kIEl0ZW1cIixcbiAgXCJwcmljZVwiOiAxNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4wNCxcbiAgXCJyYXRpbmdcIjogNC44NSxcbiAgXCJzdG9ja1wiOiAyNixcbiAgXCJicmFuZFwiOiBcIkJha2luZyBGb29kIEl0ZW1zXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNCxcbiAgXCJ0aXRsZVwiOiBcImNlcmVhbHMgbXVlc2xpIGZydWl0IG51dHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIm9yaWdpbmFsIGZhdWppIGNlcmVhbCBtdWVzbGkgMjUwZ20gYm94IHBhY2sgb3JpZ2luYWwgZmF1amkgY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0cyBmbGFrZXMgYnJlYWtmYXN0IGNlcmVhbCBicmVhayBmYXN0IGZhdWppY2VyZWFscyBjZXJlbHMgY2VyZWwgZm9qaSBmb3VqaVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44LFxuICBcInJhdGluZ1wiOiA0Ljk0LFxuICBcInN0b2NrXCI6IDExMyxcbiAgXCJicmFuZFwiOiBcImZhdWppXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNSxcbiAgXCJ0aXRsZVwiOiBcIkd1bGFiIFBvd2RlciA1MCBHcmFtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEcnkgUm9zZSBGbG93ZXIgUG93ZGVyIEd1bGFiIFBvd2RlciA1MCBHcmFtIOKAoiBUcmVhdHMgV291bmRzXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjU4LFxuICBcInJhdGluZ1wiOiA0Ljg3LFxuICBcInN0b2NrXCI6IDQ3LFxuICBcImJyYW5kXCI6IFwiRHJ5IFJvc2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI2LFxuICBcInRpdGxlXCI6IFwiUGxhbnQgSGFuZ2VyIEZvciBIb21lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCb2hvIERlY29yIFBsYW50IEhhbmdlciBGb3IgSG9tZSBXYWxsIERlY29yYXRpb24gTWFjcmFtZSBXYWxsIEhhbmdpbmcgU2hlbGZcIixcbiAgXCJwcmljZVwiOiA0MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuODYsXG4gIFwicmF0aW5nXCI6IDQuMDgsXG4gIFwic3RvY2tcIjogMTMxLFxuICBcImJyYW5kXCI6IFwiQm9obyBEZWNvclwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi81LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI3LFxuICBcInRpdGxlXCI6IFwiRmx5aW5nIFdvb2RlbiBCaXJkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYWNrYWdlIEluY2x1ZGUgNiBCaXJkcyB3aXRoIEFkaGVzaXZlIFRhcGUgU2hhcGU6IDNEIFNoYXBlZCBXb29kZW4gQmlyZHMgTWF0ZXJpYWw6IFdvb2RlbiBNREYsIExhbWluYXRlZCAzLjVtbVwiLFxuICBcInByaWNlXCI6IDUxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OCxcbiAgXCJyYXRpbmdcIjogNC40MSxcbiAgXCJzdG9ja1wiOiAxNyxcbiAgXCJicmFuZFwiOiBcIkZseWluZyBXb29kZW5cIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjgsXG4gIFwidGl0bGVcIjogXCIzRCBFbWJlbGxpc2htZW50IEFydCBMYW1wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzRCBsZWQgbGFtcCBzdGlja2VyIFdhbGwgc3RpY2tlciAzZCB3YWxsIGFydCBsaWdodCBvbi9vZmYgYnV0dG9uICBjZWxsIG9wZXJhdGVkIChpbmNsdWRlZClcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDksXG4gIFwicmF0aW5nXCI6IDQuODIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJMRUQgTGlnaHRzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyOSxcbiAgXCJ0aXRsZVwiOiBcIkhhbmRjcmFmdCBDaGluZXNlIHN0eWxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIYW5kY3JhZnQgQ2hpbmVzZSBzdHlsZSBhcnQgbHV4dXJ5IHBhbGFjZSBob3RlbCB2aWxsYSBtYW5zaW9uIGhvbWUgZGVjb3IgY2VyYW1pYyB2YXNlIHdpdGggYnJhc3MgZnJ1aXQgcGxhdGVcIixcbiAgXCJwcmljZVwiOiA2MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMzQsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogNyxcbiAgXCJicmFuZFwiOiBcImx1eHVyeSBwYWxhY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMCxcbiAgXCJ0aXRsZVwiOiBcIktleSBIb2xkZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkF0dHJhY3RpdmUgRGVzaWduTWV0YWxsaWMgbWF0ZXJpYWxGb3VyIGtleSBob29rc1JlbGlhYmxlICYgRHVyYWJsZVByZW1pdW0gUXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjkyLFxuICBcInJhdGluZ1wiOiA0LjkyLFxuICBcInN0b2NrXCI6IDU0LFxuICBcImJyYW5kXCI6IFwiR29sZGVuXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMxLFxuICBcInRpdGxlXCI6IFwiTW9ybmFkaSBWZWx2ZXQgQmVkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JuYWRpIFZlbHZldCBCZWQgQmFzZSB3aXRoIEhlYWRib2FyZCBTbGF0cyBTdXBwb3J0IENsYXNzaWMgU3R5bGUgQmVkcm9vbSBGdXJuaXR1cmUgQmVkIFNldFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNyxcbiAgXCJyYXRpbmdcIjogNC4xNixcbiAgXCJzdG9ja1wiOiAxNDAsXG4gIFwiYnJhbmRcIjogXCJGdXJuaXR1cmUgQmVkIFNldFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzIsXG4gIFwidGl0bGVcIjogXCJTb2ZhIGZvciBDb2ZmZSBDYWZlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSYXR0dGFuIE91dGRvb3IgZnVybml0dXJlIFNldCBXYXRlcnByb29mICBSYXR0YW4gU29mYSBmb3IgQ29mZmUgQ2FmZVwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OSxcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAzMCxcbiAgXCJicmFuZFwiOiBcIlJhdHR0YW4gT3V0ZG9vclwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMyxcbiAgXCJ0aXRsZVwiOiBcIjMgVGllciBDb3JuZXIgU2hlbHZlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzIHwgMyBQQ3MgV2FsbCBNb3VudCBLaXRjaGVuIFNoZWxmIHwgRmxvYXRpbmcgQmVkcm9vbSBTaGVsZlwiLFxuICBcInByaWNlXCI6IDcwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcsXG4gIFwicmF0aW5nXCI6IDQuMzEsXG4gIFwic3RvY2tcIjogMTA2LFxuICBcImJyYW5kXCI6IFwiS2l0Y2hlbiBTaGVsZlwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzQsXG4gIFwidGl0bGVcIjogXCJQbGFzdGljIFRhYmxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJW77u/ZXJ5IGdvb2QgcXVhbGl0eSBwbGFzdGljIHRhYmxlIGZvciBtdWx0aSBwdXJwb3NlIG5vdyBpbiByZWFzb25hYmxlIHByaWNlXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQsXG4gIFwicmF0aW5nXCI6IDQuMDEsXG4gIFwic3RvY2tcIjogMTM2LFxuICBcImJyYW5kXCI6IFwiTXVsdGkgUHVycG9zZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzUsXG4gIFwidGl0bGVcIjogXCIzIERPT1IgUE9SVEFCTEVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hdGVyaWFsOiBTdGFpbmxlc3MgU3RlZWwgYW5kIEZhYnJpYyAgSXRlbSBTaXplOiAxMTAgY20geCA0NSBjbSB4IDE3NSBjbSBQYWNrYWdlIENvbnRlbnRzOiAxIFN0b3JhZ2UgV2FyZHJvYmVcIixcbiAgXCJwcmljZVwiOiA0MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy45OCxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIkFtbmFNYXJ0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNixcbiAgXCJ0aXRsZVwiOiBcIlNsZWV2ZSBTaGlydCBXb21lbnNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvdHRvbiBTb2xpZCBDb2xvciBQcm9mZXNzaW9uYWwgV2VhciBTbGVldmUgU2hpcnQgV29tZW5zIFdvcmsgQmxvdXNlcyBXaG9sZXNhbGUgQ2xvdGhpbmcgQ2FzdWFsIFBsYWluIEN1c3RvbSBUb3AgT0VNIEN1c3RvbWl6ZWRcIixcbiAgXCJwcmljZVwiOiA5MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuODksXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogMzksXG4gIFwiYnJhbmRcIjogXCJQcm9mZXNzaW9uYWwgV2VhclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzcsXG4gIFwidGl0bGVcIjogXCJhbmsgVG9wcyBmb3IgV29tZW5zL0dpcmxzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQQUNLIE9GIDMgQ0FNSVNPTEVTICxWRVJZIENPTUZPUlRBQkxFIFNPRlQgQ09UVE9OIFNUVUZGLCBDT01GT1JUQUJMRSBJTiBBTEwgRk9VUiBTRUFTT05TXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjA1LFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDEwNyxcbiAgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzgsXG4gIFwidGl0bGVcIjogXCJzdWJsaW1hdGlvbiBwbGFpbiBraWRzIHRhbmtcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInN1YmxpbWF0aW9uIHBsYWluIGtpZHMgdGFuayB0b3BzIHdob2xlc2FsZVwiLFxuICBcInByaWNlXCI6IDEwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMTIsXG4gIFwicmF0aW5nXCI6IDQuOCxcbiAgXCJzdG9ja1wiOiAyMCxcbiAgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzksXG4gIFwidGl0bGVcIjogXCJXb21lbiBTd2VhdGVycyBXb29sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIyMDIxIEN1c3RvbSBXaW50ZXIgRmFsbCBaZWJyYSBLbml0IENyb3AgVG9wIFdvbWVuIFN3ZWF0ZXJzIFdvb2wgTW9oYWlyIENvcyBDdXN0b21pemUgQ3JldyBOZWNrIFdvbWVuJyBTIENyb3AgVG9wIFN3ZWF0ZXJcIixcbiAgXCJwcmljZVwiOiA2MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjIsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogNTUsXG4gIFwiYnJhbmRcIjogXCJUb3AgU3dlYXRlclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQwLFxuICBcInRpdGxlXCI6IFwid29tZW4gd2ludGVyIGNsb3RoZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIndvbWVuIHdpbnRlciBjbG90aGVzIHRoaWNrIGZsZWVjZSBob29kaWUgdG9wIHdpdGggc3dlYXQgcGFudGpvZ2dlciB3b21lbiBzd2VhdHN1aXQgc2V0IGpvZ2dlcnMgcGFudHMgdHdvIHBpZWNlIHBhbnRzIHNldFwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4zOSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiA4NCxcbiAgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC8yLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQxLFxuICBcInRpdGxlXCI6IFwiTklHSFQgU1VJVFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTklHSFQgU1VJVCBSRUQgTUlDS1kgTU9VU0UuLiAgRm9yIEdpcmxzLiBGYW50YXN0aWMgU3VpdHMuXCIsXG4gIFwicHJpY2VcIjogNTUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjA1LFxuICBcInJhdGluZ1wiOiA0LjY1LFxuICBcInN0b2NrXCI6IDIxLFxuICBcImJyYW5kXCI6IFwiUkVEIE1JQ0tZIE1PVVNFLi5cIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDIsXG4gIFwidGl0bGVcIjogXCJTdGljaGVkIEt1cnRhIHBsdXMgdHJvdXNlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRkFCUklDOiBMSUxFSU4gQ0hFU1Q6IDIxIExFTkdIVDogMzcgVFJPVVNFUjogKDM4KSA6QVJBQklDIExJTEVJTlwiLFxuICBcInByaWNlXCI6IDgwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4zNyxcbiAgXCJyYXRpbmdcIjogNC4wNSxcbiAgXCJzdG9ja1wiOiAxNDgsXG4gIFwiYnJhbmRcIjogXCJEaWdpdGFsIFByaW50ZWRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDMsXG4gIFwidGl0bGVcIjogXCJmcm9jayBnb2xkIHByaW50ZWRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdoYXppIGZhYnJpYyBsb25nIGZyb2NrIGdvbGQgcHJpbnRlZCByZWFkeSB0byB3ZWFyIHN0aXRjaGVkIGNvbGxlY3Rpb24gKEc5OTIpXCIsXG4gIFwicHJpY2VcIjogNjAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41NSxcbiAgXCJyYXRpbmdcIjogNC4zMSxcbiAgXCJzdG9ja1wiOiAxNTAsXG4gIFwiYnJhbmRcIjogXCJHaGF6aSBGYWJyaWNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDQsXG4gIFwidGl0bGVcIjogXCJMYWRpZXMgTXVsdGljb2xvcmVkIERyZXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGNsYXNzeSBzaGlydCBmb3Igd29tZW4gZ2l2ZXMgeW91IGEgZ29yZ2VvdXMgbG9vayBvbiBldmVyeWRheSB3ZWFyIGFuZCBzcGVjaWFsbHkgZm9yIHNlbWktY2FzdWFsIHdlYXJzLlwiLFxuICBcInByaWNlXCI6IDc5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44OCxcbiAgXCJyYXRpbmdcIjogNC4wMyxcbiAgXCJzdG9ja1wiOiAyLFxuICBcImJyYW5kXCI6IFwiR2hhemkgRmFicmljXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ1LFxuICBcInRpdGxlXCI6IFwiTWFsYWkgTWF4aSBEcmVzc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUmVhZHkgdG8gd2VhciwgVW5pcXVlIGRlc2lnbiBhY2NvcmRpbmcgdG8gbW9kZXJuIHN0YW5kYXJkIGZhc2hpb24sIEJlc3QgZml0dGluZyAsSW1wb3J0ZWQgc3R1ZmZcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNS4wNyxcbiAgXCJyYXRpbmdcIjogNC42NyxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcIklFTEdZXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NixcbiAgXCJ0aXRsZVwiOiBcIndvbWVuJ3Mgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNsb3NlOiBMYWNlLCBTdHlsZSB3aXRoIGJvdHRvbTogSW5jcmVhc2VkIGluc2lkZSwgU29sZSBNYXRlcmlhbDogUnViYmVyXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk2LFxuICBcInJhdGluZ1wiOiA0LjE0LFxuICBcInN0b2NrXCI6IDcyLFxuICBcImJyYW5kXCI6IFwiSUVMR1kgZmFzaGlvblwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ3LFxuICBcInRpdGxlXCI6IFwiU25lYWtlciBzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3ludGhldGljIExlYXRoZXIgQ2FzdWFsIFNuZWFrZXIgc2hvZXMgZm9yIFdvbWVuL2dpcmxzIFNuZWFrZXJzIEZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzcsXG4gIFwicmF0aW5nXCI6IDQuMTksXG4gIFwic3RvY2tcIjogNTAsXG4gIFwiYnJhbmRcIjogXCJTeW50aGV0aWMgTGVhdGhlclwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ4LFxuICBcInRpdGxlXCI6IFwiV29tZW4gU3RyaXAgSGVlbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmVhdHVyZXM6IEZsaXAtZmxvcHMsIE1pZCBIZWVsLCBDb21mb3J0YWJsZSwgU3RyaXBlZCBIZWVsLCBBbnRpc2tpZCwgU3RyaXBlZFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44MyxcbiAgXCJyYXRpbmdcIjogNC4wMixcbiAgXCJzdG9ja1wiOiAyNSxcbiAgXCJicmFuZFwiOiBcIlNhbmRhbHMgRmxpcCBGbG9wc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDksXG4gIFwidGl0bGVcIjogXCJDaGFwcGFscyAmIFNob2UgTGFkaWVzIE1ldGFsbGljXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXb21lbnMgQ2hhcHBhbHMgJiBTaG9lIExhZGllcyBNZXRhbGxpYyBUb25nIFRob25nIFNhbmRhbCBGbGF0IFN1bW1lciAyMDIwIE1hYXNhaSBTYW5kYWxzXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuNjIsXG4gIFwicmF0aW5nXCI6IDQuNzIsXG4gIFwic3RvY2tcIjogMTA3LFxuICBcImJyYW5kXCI6IFwiTWFhc2FpIFNhbmRhbHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUwLFxuICBcInRpdGxlXCI6IFwiV29tZW4gU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjAgTmV3IEFycml2YWxzIEdlbnVpbmUgTGVhdGhlciBGYXNoaW9uIFRyZW5kIFBsYXRmb3JtIFN1bW1lciBXb21lbiBTaG9lc1wiLFxuICBcInByaWNlXCI6IDM2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44NyxcbiAgXCJyYXRpbmdcIjogNC4zMyxcbiAgXCJzdG9ja1wiOiA0NixcbiAgXCJicmFuZFwiOiBcIkFycml2YWxzIEdlbnVpbmVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8xLmpwZWdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUxLFxuICBcInRpdGxlXCI6IFwiaGFsZiBzbGVldmVzIFQgc2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYW55IHN0b3JlIGlzIGNyZWF0aW5nIG5ldyBkZXNpZ25zIGFuZCB0cmVuZCBldmVyeSBtb250aCBhbmQgZXZlcnkgeWVhci4gRGFyYXoucGsgaGF2ZSBhIGJlYXV0aWZ1bCByYW5nZSBvZiBtZW4gZmFzaGlvbiBicmFuZHNcIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuNzYsXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogMTMyLFxuICBcImJyYW5kXCI6IFwiVmludGFnZSBBcHBhcmVsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTIsXG4gIFwidGl0bGVcIjogXCJGUkVFIEZJUkUgVCBTaGlydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwicXVhbGl0eSBhbmQgcHJvZmVzc2lvbmFsIHByaW50IC0gSXQgZG9lc24ndCBqdXN0IGxvb2sgaGlnaCBxdWFsaXR5LCBpdCBpcyBoaWdoIHF1YWxpdHkuXCIsXG4gIFwicHJpY2VcIjogMTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjcyLFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDEyOCxcbiAgXCJicmFuZFwiOiBcIkZSRUUgRklSRVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MyxcbiAgXCJ0aXRsZVwiOiBcInByaW50ZWQgaGlnaCBxdWFsaXR5IFQgc2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCcmFuZDogdmludGFnZSBBcHBhcmVsICxFeHBvcnQgcXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjU0LFxuICBcInJhdGluZ1wiOiA0Ljg5LFxuICBcInN0b2NrXCI6IDYsXG4gIFwiYnJhbmRcIjogXCJWaW50YWdlIEFwcGFyZWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU0LFxuICBcInRpdGxlXCI6IFwiUHViZyBQcmludGVkIEdyYXBoaWMgVC1TaGlydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBEZXNjcmlwdGlvbiBGZWF0dXJlczogMTAwJSBVbHRyYSBzb2Z0IFBvbHllc3RlciBKZXJzZXkuIFZpYnJhbnQgJiBjb2xvcmZ1bCBwcmludGluZyBvbiBmcm9udC4gRmVlbHMgc29mdCBhcyBjb3R0b24gd2l0aG91dCBldmVyIGNyYWNraW5nXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjQ0LFxuICBcInJhdGluZ1wiOiA0LjYyLFxuICBcInN0b2NrXCI6IDEzNixcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTUsXG4gIFwidGl0bGVcIjogXCJNb25leSBIZWlzdCBQcmludGVkIFN1bW1lciBUIFNoaXJ0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFicmljIEplcmN5LCBTaXplOiBNICYgTCBXZWFyIFN0eWxpc2ggRHVhbCBTdGljaGVkXCIsXG4gIFwicHJpY2VcIjogNjYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1Ljk3LFxuICBcInJhdGluZ1wiOiA0LjksXG4gIFwic3RvY2tcIjogMTIyLFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTYsXG4gIFwidGl0bGVcIjogXCJTbmVha2VycyBKb2dnZXJzIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHZW5kZXI6IE1lbiAsIENvbG9yczogU2FtZSBhcyBEaXNwbGF5ZWRDb25kaXRpb246IDEwMCUgQnJhbmQgTmV3XCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjU3LFxuICBcInJhdGluZ1wiOiA0LjM4LFxuICBcInN0b2NrXCI6IDYsXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvNS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NyxcbiAgXCJ0aXRsZVwiOiBcIkxvYWZlcnMgZm9yIG1lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNob2VzIC0gTG9hZmVycyBmb3IgbWVuIC0gUnViYmVyIFNob2VzIC0gTnlsb24gU2hvZXMgLSBTaG9lcyBmb3IgbWVuIC0gTW9jY2Fzc2lvbiAtIFB1cmUgTnlsb24gKFJ1YmJlcikgRXhwb3QgUXVhbGl0eS5cIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTEsXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogMjAsXG4gIFwiYnJhbmRcIjogXCJSdWJiZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1OCxcbiAgXCJ0aXRsZVwiOiBcImZvcm1hbCBvZmZpY2VzIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYXR0ZXJuIFR5cGU6IFNvbGlkLCBNYXRlcmlhbDogUFUsIFRvZSBTaGFwZTogUG9pbnRlZCBUb2UgLE91dHNvbGUgTWF0ZXJpYWw6IFJ1YmJlclwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMixcbiAgXCJyYXRpbmdcIjogNC40MSxcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1OSxcbiAgXCJ0aXRsZVwiOiBcIlNwcmluZyBhbmQgc3VtbWVyc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbWZvcnRhYmxlIHN0cmV0Y2ggY2xvdGgsIGxpZ2h0d2VpZ2h0IGJvZHk7ICxydWJiZXIgc29sZSwgYW50aS1za2lkIHdlYXI7XCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguNzEsXG4gIFwicmF0aW5nXCI6IDQuMzMsXG4gIFwic3RvY2tcIjogMTM3LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MCxcbiAgXCJ0aXRsZVwiOiBcIlN0eWxpc2ggQ2FzdWFsIEplYW5zIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIaWdoIFF1YWxpdHkgLFN0eWxpc2ggZGVzaWduICxDb21mb3J0YWJsZSB3ZWFyICxGQXNoaW9uICxEdXJhYmxlXCIsXG4gIFwicHJpY2VcIjogNTgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuNTUsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogMTI5LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYxLFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcHMgV3Jpc3R3YXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGU6U3BvcnQgLENsYXNwOkJ1Y2tsZXMgLFdhdGVyIFJlc2lzdGFuY2UgRGVwdGg6M0JhclwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy4xNCxcbiAgXCJyYXRpbmdcIjogNC42MyxcbiAgXCJzdG9ja1wiOiA5MSxcbiAgXCJicmFuZFwiOiBcIk5hdmlmb3JjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MixcbiAgXCJ0aXRsZVwiOiBcIldhdGVycHJvb2YgTGVhdGhlciBCcmFuZCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2F0Y2ggQ3Jvd24gV2l0aCBFbnZpcm9ubWVudGFsIElQUyBCcm9uemUgRWxlY3Ryb3BsYXRpbmc7IERpc3BsYXkgc3lzdGVtIG9mIDEyIGhvdXJzXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMTUsXG4gIFwicmF0aW5nXCI6IDQuMDUsXG4gIFwic3RvY2tcIjogOTUsXG4gIFwiYnJhbmRcIjogXCJTS01FSSA5MTE3XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyLzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjMsXG4gIFwidGl0bGVcIjogXCJSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lbiBTaWx2ZXIgQ2hhaW4gUm95YWwgQmx1ZSBQcmVtaXVtIFdhdGNoIExhdGVzdCBBbmFsb2cgV2F0Y2hcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMi41NixcbiAgXCJyYXRpbmdcIjogNC44OSxcbiAgXCJzdG9ja1wiOiAxNDIsXG4gIFwiYnJhbmRcIjogXCJTS01FSSA5MTE3XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzQuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY0LFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaCBmb3IgTWVuIC0gU3R5bGlzaCBhbmQgTGF0ZXN0IERlc2lnblwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yLFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDYxLFxuICBcImJyYW5kXCI6IFwiU3RyYXAgU2tlbGV0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY1LFxuICBcInRpdGxlXCI6IFwiU3RhaW5sZXNzIFN0ZWVsIFdyaXN0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsaXNoIFdhdGNoIEZvciBNYW4gKEx1eHVyeSkgQ2xhc3N5IE1lbidzIFN0YWlubGVzcyBTdGVlbCBXcmlzdCBXYXRjaCAtIEJveCBQYWNrZWRcIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNzksXG4gIFwicmF0aW5nXCI6IDQuNzksXG4gIFwic3RvY2tcIjogOTQsXG4gIFwiYnJhbmRcIjogXCJTdGFpbmxlc3NcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NixcbiAgXCJ0aXRsZVwiOiBcIlN0ZWVsIEFuYWxvZyBDb3VwbGUgV2F0Y2hlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRWxlZ2FudCBkZXNpZ24sIFN0eWxpc2ggLFVuaXF1ZSAmIFRyZW5keSxDb21mb3J0YWJsZSB3ZWFyXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMjMsXG4gIFwicmF0aW5nXCI6IDQuNzksXG4gIFwic3RvY2tcIjogMjQsXG4gIFwiYnJhbmRcIjogXCJFYXN0ZXJuIFdhdGNoZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzQuSlBHXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjcsXG4gIFwidGl0bGVcIjogXCJGYXNoaW9uIE1hZ25ldGljIFdyaXN0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCdXkgdGhpcyBhd2Vzb21lICBUaGUgcHJvZHVjdCBpcyBvcmlnaW5hbGx5IG1hbnVmYWN0dXJlZCBieSB0aGUgY29tcGFueSBhbmQgaXQncyBhIHRvcCBzZWxsaW5nIHByb2R1Y3Qgd2l0aCBhIHZlcnkgcmVhc29uYWJsZVwiLFxuICBcInByaWNlXCI6IDYwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi42OSxcbiAgXCJyYXRpbmdcIjogNC4wMyxcbiAgXCJzdG9ja1wiOiA0NixcbiAgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2OCxcbiAgXCJ0aXRsZVwiOiBcIlN0eWxpc2ggTHV4dXJ5IERpZ2l0YWwgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxpc2ggTHV4dXJ5IERpZ2l0YWwgV2F0Y2ggRm9yIEdpcmxzIC8gV29tZW4gLSBMZWQgU21hcnQgTGFkaWVzIFdhdGNoZXMgRm9yIEdpcmxzXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDkuMDMsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogNzcsXG4gIFwiYnJhbmRcIjogXCJMdXh1cnkgRGlnaXRhbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC8yLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY5LFxuICBcInRpdGxlXCI6IFwiR29sZGVuIFdhdGNoIFBlYXJscyBCcmFjZWxldCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEdvbGRlbiBXYXRjaCBQZWFybHMgQnJhY2VsZXQgV2F0Y2ggRm9yIEdpcmxzIC0gR29sZGVuIENoYWluIExhZGllcyBCcmFjZWxhdGUgV2F0Y2ggZm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjU1LFxuICBcInJhdGluZ1wiOiA0Ljc3LFxuICBcInN0b2NrXCI6IDg5LFxuICBcImJyYW5kXCI6IFwiV2F0Y2ggUGVhcmxzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MCxcbiAgXCJ0aXRsZVwiOiBcIlN0YWlubGVzcyBTdGVlbCBXb21lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBTa21laSAxODMwIFNoZWxsIERpYWwgU3RhaW5sZXNzIFN0ZWVsIFdvbWVuIFdyaXN0IFdhdGNoIExhZHkgQnJhY2VsZXQgV2F0Y2ggUXVhcnR6IFdhdGNoZXMgTGFkaWVzXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguOTgsXG4gIFwicmF0aW5nXCI6IDQuMDgsXG4gIFwic3RvY2tcIjogMTExLFxuICBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcxLFxuICBcInRpdGxlXCI6IFwiV29tZW4gU2hvdWxkZXIgQmFnc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG91aXNXaWxsIFdvbWVuIFNob3VsZGVyIEJhZ3MgTG9uZyBDbHV0Y2hlcyBDcm9zcyBCb2R5IEJhZ3MgUGhvbmUgQmFncyBQVSBMZWF0aGVyIEhhbmQgQmFncyBMYXJnZSBDYXBhY2l0eSBDYXJkIEhvbGRlcnMgWmlwcGVyIENvaW4gUHVyc2VzIEZhc2hpb24gQ3Jvc3Nib2R5IEJhZ3MgZm9yIEdpcmxzIExhZGllc1wiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC42NSxcbiAgXCJyYXRpbmdcIjogNC43MSxcbiAgXCJzdG9ja1wiOiAxNyxcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MixcbiAgXCJ0aXRsZVwiOiBcIkhhbmRiYWcgRm9yIEdpcmxzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiAyNyxcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MyxcbiAgXCJ0aXRsZVwiOiBcIkZhbmN5IGhhbmQgY2x1dGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIixcbiAgXCJwcmljZVwiOiA0NCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzksXG4gIFwicmF0aW5nXCI6IDQuMTgsXG4gIFwic3RvY2tcIjogMTAxLFxuICBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzQsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIEhhbmQgQmFnXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJdCBmZWF0dXJlcyBhbiBhdHRyYWN0aXZlIGRlc2lnbiB0aGF0IG1ha2VzIGl0IGEgbXVzdCBoYXZlIGFjY2Vzc29yeSBpbiB5b3VyIGNvbGxlY3Rpb24uIFdlIHNlbGwgZGlmZmVyZW50IGtpbmQgb2YgYmFncyBmb3IgYm95cywga2lkcywgd29tZW4sIGdpcmxzIGFuZCBhbHNvIGZvciB1bmlzZXguXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjE5LFxuICBcInJhdGluZ1wiOiA0LjAxLFxuICBcInN0b2NrXCI6IDQzLFxuICBcImJyYW5kXCI6IFwiQ29wZW5oYWdlbiBMdXhlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc1LFxuICBcInRpdGxlXCI6IFwiU2V2ZW4gUG9ja2V0IFdvbWVuIEJhZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2V2ZW4gUG9ja2V0IFdvbWVuIEJhZyBIYW5kYmFncyBMYWR5IFNob3VsZGVyIENyb3NzYm9keSBCYWcgRmVtYWxlIFB1cnNlIFNldmVuIFBvY2tldCBCYWdcIixcbiAgXCJwcmljZVwiOiA2OCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuODcsXG4gIFwicmF0aW5nXCI6IDQuOTMsXG4gIFwic3RvY2tcIjogMTMsXG4gIFwiYnJhbmRcIjogXCJTdGVhbCBGcmFtZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc2LFxuICBcInRpdGxlXCI6IFwiU2lsdmVyIFJpbmcgU2V0IFdvbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJKZXdlbHJ5IFR5cGU6UmluZ3NDZXJ0aWZpY2F0ZSBUeXBlOk5vbmVQbGF0aW5nOlNpbHZlciBQbGF0ZWRTaGFwZWF0dGVybjpub25lU3R5bGU6Q0xBU1NJQ1JlbGlnaW91c1wiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy41NyxcbiAgXCJyYXRpbmdcIjogNC42MSxcbiAgXCJzdG9ja1wiOiA1MSxcbiAgXCJicmFuZFwiOiBcIkRhcm9qYXlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzcsXG4gIFwidGl0bGVcIjogXCJSb3NlIFJpbmdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJyYW5kOiBUaGUgR3JlZXRpbmdzIEZsb3dlciBDb2xvdXI6IFJlZFJpbmcgQ29sb3VyOiBHb2xkZW5TaXplOiBBZGp1c3RhYmxlXCIsXG4gIFwicHJpY2VcIjogMTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjIyLFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDE0OSxcbiAgXCJicmFuZFwiOiBcIkNvcGVuaGFnZW4gTHV4ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzgsXG4gIFwidGl0bGVcIjogXCJSaGluZXN0b25lIEtvcmVhbiBTdHlsZSBPcGVuIFJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIEpld2VsbGVyeSAzUGNzIEFkanVzdGFibGUgUGVhcmwgUmhpbmVzdG9uZSBLb3JlYW4gU3R5bGUgT3BlbiBSaW5ncyBGb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4wMixcbiAgXCJyYXRpbmdcIjogNC42OSxcbiAgXCJzdG9ja1wiOiA5LFxuICBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc5LFxuICBcInRpdGxlXCI6IFwiRWxlZ2FudCBGZW1hbGUgUGVhcmwgRWFycmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZWdhbnQgRmVtYWxlIFBlYXJsIEVhcnJpbmdzIFNldCBaaXJjb24gUGVhcmwgRWFyaW5ncyBXb21lbiBQYXJ0eSBBY2Nlc3NvcmllcyA5IFBhaXJzL1NldFwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi44LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDE2LFxuICBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzkvMS5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MCxcbiAgXCJ0aXRsZVwiOiBcIkNoYWluIFBpbiBUYXNzZWwgRWFycmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhaXIgT2YgRWFyIEN1ZmYgQnV0dGVyZmx5IExvbmcgQ2hhaW4gUGluIFRhc3NlbCBFYXJyaW5ncyAtIFNpbHZlciAoIExvbmcgTGlmZSBRdWFsaXR5IFByb2R1Y3QpXCIsXG4gIFwicHJpY2VcIjogNDUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljc1LFxuICBcInJhdGluZ1wiOiA0LjU5LFxuICBcInN0b2NrXCI6IDksXG4gIFwiYnJhbmRcIjogXCJDdWZmIEJ1dHRlcmZseVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgxLFxuICBcInRpdGxlXCI6IFwiUm91bmQgU2lsdmVyIEZyYW1lIFN1biBHbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIHBhaXIgb2Ygc3VuZ2xhc3NlcyBjYW4gcHJvdGVjdCB5b3VyIGV5ZXMgZnJvbSBiZWluZyBodXJ0LiBGb3IgY2FyIGRyaXZpbmcsIHZhY2F0aW9uIHRyYXZlbCwgb3V0ZG9vciBhY3Rpdml0aWVzLCBzb2NpYWwgZ2F0aGVyaW5ncyxcIixcbiAgXCJwcmljZVwiOiAxOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMSxcbiAgXCJyYXRpbmdcIjogNC45NCxcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkRlc2lnbmVyIFN1biBHbGFzc2VzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgyLFxuICBcInRpdGxlXCI6IFwiS2FiaXIgU2luZ2ggU3F1YXJlIFN1bmdsYXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJPcmlnbmFsIE1ldGFsIEthYmlyIFNpbmdoIGRlc2lnbiAyMDIwIFN1bmdsYXNzZXMgTWVuIEJyYW5kIERlc2lnbmVyIFN1biBHbGFzc2VzIEthYmlyIFNpbmdoIFNxdWFyZSBTdW5nbGFzc1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LFxuICBcInJhdGluZ1wiOiA0LjYyLFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODMsXG4gIFwidGl0bGVcIjogXCJXaWxleSBYIE5pZ2h0IFZpc2lvbiBZZWxsb3cgR2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2lsZXkgWCBOaWdodCBWaXNpb24gWWVsbG93IEdsYXNzZXMgZm9yIFJpZGVycyAtIE5pZ2h0IFZpc2lvbiBBbnRpIEZvZyBEcml2aW5nIEdsYXNzZXMgLSBGcmVlIE5pZ2h0IEdsYXNzIENvdmVyIC0gU2hpZWxkIEV5ZXMgRnJvbSBEdXN0IGFuZCBWaXJ1cy0gRm9yIE5pZ2h0IFNwb3J0IE1hdGNoZXNcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4zMyxcbiAgXCJyYXRpbmdcIjogNC45NyxcbiAgXCJzdG9ja1wiOiAxMTUsXG4gIFwiYnJhbmRcIjogXCJtYXN0YXIgd2F0Y2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NCxcbiAgXCJ0aXRsZVwiOiBcIlNxdWFyZSBTdW5nbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIE92ZXJzaXplZCBTcXVhcmUgU3VuZ2xhc3NlcyBSZXRybyBHcmFkaWVudCBCaWcgRnJhbWUgU3VuZ2xhc3NlcyBGb3IgV29tZW4gT25lIFBpZWNlIEdhZmFzIFNoYWRlIE1pcnJvciBDbGVhciBMZW5zIDE3MDU5XCIsXG4gIFwicHJpY2VcIjogMjgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjg5LFxuICBcInJhdGluZ1wiOiA0LjY0LFxuICBcInN0b2NrXCI6IDY0LFxuICBcImJyYW5kXCI6IFwibWFzdGFyIHdhdGNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg1LFxuICBcInRpdGxlXCI6IFwiTG91aXNXaWxsIE1lbiBTdW5nbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3Vpc1dpbGwgTWVuIFN1bmdsYXNzZXMgUG9sYXJpemVkIFN1bmdsYXNzZXMgVVY0MDAgU3VuZ2xhc3NlcyBEYXkgTmlnaHQgRHVhbCBVc2UgU2FmZXR5IERyaXZpbmcgTmlnaHQgVmlzaW9uIEV5ZXdlYXIgQUwtTUcgRnJhbWUgU3VuIEdsYXNzZXMgd2l0aCBGcmVlIEJveCBmb3IgRHJpdmVyc1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4yNyxcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA5MixcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NixcbiAgXCJ0aXRsZVwiOiBcIkJsdWV0b290aCBBdXhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJsdWV0b290aCBBdXggQmx1ZXRvb3RoIENhciBBdXggQ2FyIEJsdWV0b290aCBUcmFuc21pdHRlciBBdXggQXVkaW8gUmVjZWl2ZXIgSGFuZGZyZWUgQ2FyIEJsdWV0b290aCBNdXNpYyBSZWNlaXZlciBVbml2ZXJzYWwgMy41bW0gU3RyZWFtaW5nIEEyRFAgV2lyZWxlc3MgQXV0byBBVVggQXVkaW8gQWRhcHRlciBXaXRoIE1pYyBGb3IgUGhvbmUgTVAzXCIsXG4gIFwicHJpY2VcIjogMjUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjU2LFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDIyLFxuICBcImJyYW5kXCI6IFwiQ2FyIEF1eFwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NyxcbiAgXCJ0aXRsZVwiOiBcInQgVGVtcGVyYXR1cmUgQ29udHJvbGxlciBJbmN1YmF0b3IgQ29udHJvbGxlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQm90aCBIZWF0IGFuZCBDb29sIFB1cnBvc2UsIFRlbXBlcmF0dXJlIGNvbnRyb2wgcmFuZ2U7IC01MCB0byArMTEwLCBUZW1wZXJhdHVyZSBtZWFzdXJlbWVudCBhY2N1cmFjeTsgMC4xLCBDb250cm9sIGFjY3VyYWN5OyAwLjFcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMyxcbiAgXCJyYXRpbmdcIjogNC41NCxcbiAgXCJzdG9ja1wiOiAzNyxcbiAgXCJicmFuZFwiOiBcIlcxMjA5IERDMTJWXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODgsXG4gIFwidGl0bGVcIjogXCJUQyBSZXVzYWJsZSBTaWxpY29uZSBNYWdpYyBXYXNoaW5nIEdsb3Zlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVEMgUmV1c2FibGUgU2lsaWNvbmUgTWFnaWMgV2FzaGluZyBHbG92ZXMgd2l0aCBTY3J1YmJlciwgQ2xlYW5pbmcgQnJ1c2ggU2NydWJiZXIgR2xvdmVzIEhlYXQgUmVzaXN0YW50IFBhaXIgZm9yIENsZWFuaW5nIG9mIEtpdGNoZW4sIERpc2hlcywgVmVnZXRhYmxlcyBhbmQgRnJ1aXRzLCBCYXRocm9vbSwgQ2FyIFdhc2gsIFBldCBDYXJlIGFuZCBNdWx0aXB1cnBvc2VcIixcbiAgXCJwcmljZVwiOiAyOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xOSxcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA0MixcbiAgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg5LFxuICBcInRpdGxlXCI6IFwiUXVhbGNvbW0gb3JpZ2luYWwgQ2FyIENoYXJnZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcImJlc3QgUXVhbGl0eSBDSGFyZ2VyICwgSGlnaGx5IFJlY29tbWVuZGVkIHRvIGFsbCBiZXN0IFF1YWxpdHkgQ0hhcmdlciAsIEhpZ2hseSBSZWNvbW1lbmRlZCB0byBhbGxcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNTMsXG4gIFwicmF0aW5nXCI6IDQuMixcbiAgXCJzdG9ja1wiOiA3OSxcbiAgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTAsXG4gIFwidGl0bGVcIjogXCJDeWNsZSBCaWtlIEdsb3dcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlVuaXZlcnNhbCBmaXRtZW50IGFuZCBlYXN5IHRvIGluc3RhbGwgbm8gc3BlY2lhbCB3aXJlcywgY2FuIGJlIGVhc2lseSBpbnN0YWxsZWQgYW5kIHJlbW92ZWQuIEZpdHMgbW9zdCBzdGFuZGFyZCB0eXJlIGFpciBzdGVtIHZhbHZlcyBvZiByb2FkLCBtb3VudGFpbiBiaWN5Y2xlcywgbW90b2N5Y2xlcyBhbmQgY2Fycy5CcmlnaHQgbGVkIHdpbGwgdHVybiBvbiB3XCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjA4LFxuICBcInJhdGluZ1wiOiA0LjEsXG4gIFwic3RvY2tcIjogNjMsXG4gIFwiYnJhbmRcIjogXCJOZW9uIExFRCBMaWdodFwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkxLFxuICBcInRpdGxlXCI6IFwiQmxhY2sgTW90b3JiaWtlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbmdpbmUgVHlwZTpXZXQgc3VtcCwgU2luZ2xlIEN5bGluZGVyLCBGb3VyIFN0cm9rZSwgVHdvIFZhbHZlcywgQWlyIENvb2xlZCB3aXRoIFNPSEMgKFNpbmdsZSBPdmVyIEhlYWQgQ2FtKSBDaGFpbiBEcml2ZSBCb3JlICYgU3Ryb2tlOjQ3LjAgeCA0OS41IE1NXCIsXG4gIFwicHJpY2VcIjogNTY5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy42MyxcbiAgXCJyYXRpbmdcIjogNC4wNCxcbiAgXCJzdG9ja1wiOiAxMTUsXG4gIFwiYnJhbmRcIjogXCJNRVRSTyA3MGNjIE1vdG9yY3ljbGUgLSBNUjcwXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTIsXG4gIFwidGl0bGVcIjogXCJIT1QgU0FMRSBJTiBFVVJPUEUgZWxlY3RyaWMgcmFjaW5nIG1vdG9yY3ljbGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhPVCBTQUxFIElOIEVVUk9QRSBlbGVjdHJpYyByYWNpbmcgbW90b3JjeWNsZSBlbGVjdHJpYyBtb3RvcmN5Y2xlIGZvciBzYWxlIGFkdWx0IGVsZWN0cmljIG1vdG9yY3ljbGVzXCIsXG4gIFwicHJpY2VcIjogOTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC40LFxuICBcInJhdGluZ1wiOiA0LjE5LFxuICBcInN0b2NrXCI6IDIyLFxuICBcImJyYW5kXCI6IFwiQlJBVkUgQlVMTFwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkzLFxuICBcInRpdGxlXCI6IFwiQXV0b21hdGljIE1vdG9yIEdhcyBNb3RvcmN5Y2xlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMTUwY2MgNC1TdHJva2UgTW90b3JjeWNsZSBBdXRvbWF0aWMgTW90b3IgR2FzIE1vdG9yY3ljbGVzIFNjb290ZXIgbW90b3JjeWNsZXMgMTUwY2Mgc2Nvb3RlclwiLFxuICBcInByaWNlXCI6IDEwNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMzQsXG4gIFwicmF0aW5nXCI6IDQuODQsXG4gIFwic3RvY2tcIjogMTI3LFxuICBcImJyYW5kXCI6IFwic2hvY2sgYWJzb3JiZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NCxcbiAgXCJ0aXRsZVwiOiBcIm5ldyBhcnJpdmFscyBGYXNoaW9uIG1vdG9jcm9zcyBnb2dnbGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJuZXcgYXJyaXZhbHMgRmFzaGlvbiBtb3RvY3Jvc3MgZ29nZ2xlcyBtb3RvcmN5Y2xlIG1vdG9jcm9zcyByYWNpbmcgbW90b3JjeWNsZVwiLFxuICBcInByaWNlXCI6IDkwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy44NSxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiAxMDksXG4gIFwiYnJhbmRcIjogXCJKSUVQT0xMWVwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTUsXG4gIFwidGl0bGVcIjogXCJXaG9sZXNhbGUgY2FyZ28gbGFzaGluZyBCZWx0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaG9sZXNhbGUgY2FyZ28gbGFzaGluZyBCZWx0IFRpZSBEb3duIGVuZCBSYXRjaGV0IHN0cmFwIGN1c3RvbWl6ZWQgc3RyYXAgMjVtbSBtb3RvcmN5Y2xlIDE1MDBrZ3Mgd2l0aCBydWJiZXIgaGFuZGxlXCIsXG4gIFwicHJpY2VcIjogOTMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy42NyxcbiAgXCJyYXRpbmdcIjogNC4yMSxcbiAgXCJzdG9ja1wiOiAxNDQsXG4gIFwiYnJhbmRcIjogXCJYaWFuZ2xlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTYsXG4gIFwidGl0bGVcIjogXCJsaWdodGluZyBjZWlsaW5nIGtpdGNoZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldob2xlc2FsZSBzbGltIGhhbmdpbmcgZGVjb3JhdGl2ZSBraWQgcm9vbSBsaWdodGluZyBjZWlsaW5nIGtpdGNoZW4gY2hhbmRlbGllcnMgcGVuZGFudCBsaWdodCBtb2Rlcm5cIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuODksXG4gIFwicmF0aW5nXCI6IDQuODMsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJsaWdodGluZ2JyaWxsaWFuY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTcsXG4gIFwidGl0bGVcIjogXCJNZXRhbCBDZXJhbWljIEZsb3dlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWV0YWwgQ2VyYW1pYyBGbG93ZXIgQ2hhbmRlbGllciBIb21lIExpZ2h0aW5nIEFtZXJpY2FuIFZpbnRhZ2UgSGFuZ2luZyBMaWdodGluZyBQZW5kYW50IExhbXBcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTQsXG4gIFwicmF0aW5nXCI6IDQuOTMsXG4gIFwic3RvY2tcIjogMTQ2LFxuICBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5OCxcbiAgXCJ0aXRsZVwiOiBcIjMgbGlnaHRzIGxuZGVucGFudCBraXRjaGVuIGlzbGFuZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMyBsaWdodHMgbG5kZW5wYW50IGtpdGNoZW4gaXNsYW5nIGRpbmluZyByb29tIHBlbmRhbnQgcmljZSBwYXBlciBjaGFuZGVsaWVyIGNvbnRlbXBvcmFyeSBsZWQgcGVuZGFudCBsaWdodCBtb2Rlcm4gY2hhbmRlbGllclwiLFxuICBcInByaWNlXCI6IDM0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjkyLFxuICBcInJhdGluZ1wiOiA0Ljk5LFxuICBcInN0b2NrXCI6IDQ0LFxuICBcImJyYW5kXCI6IFwiREFEQVdVXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk5LFxuICBcInRpdGxlXCI6IFwiQW1lcmljYW4gVmludGFnZSBXb29kIFBlbmRhbnQgTGlnaHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFtZXJpY2FuIFZpbnRhZ2UgV29vZCBQZW5kYW50IExpZ2h0IEZhcm1ob3VzZSBBbnRpcXVlIEhhbmdpbmcgTGFtcCBMYW1wYXJhIENvbGdhbnRlXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguODQsXG4gIFwicmF0aW5nXCI6IDQuMzIsXG4gIFwic3RvY2tcIjogMTM4LFxuICBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEwMCxcbiAgXCJ0aXRsZVwiOiBcIkNyeXN0YWwgY2hhbmRlbGllciBtYXJpYSB0aGVyZXNhIGZvciAxMiBsaWdodFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3J5c3RhbCBjaGFuZGVsaWVyIG1hcmlhIHRoZXJlc2EgZm9yIDEyIGxpZ2h0XCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDEzMyxcbiAgXCJicmFuZFwiOiBcIllJT1NJXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH1cbiAgXSxcbiAgXCJ0b3RhbFwiOiAxMDAsXG4gIFwic2tpcFwiOiAwLFxuICBcImxpbWl0XCI6IDEwMFxuICB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9yb3V0aW5nJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWFpbi10ZW1wbGF0ZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0b3JlLXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9lcnJvci1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2FydC1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcmFuZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9maWx0ZXJJdGVtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZ29vZHMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy92aWV3JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VhcmNoJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc29ydGluZyc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==