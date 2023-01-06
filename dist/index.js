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
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");

function renderCartPage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = "Cart";
        // console.log(cart);
        _scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"].addProduct(1);
        console.log(localStorage.getItem('cart'));
        _scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"].addProduct(1);
        console.log(localStorage.getItem('cart'));
        // cart.addProduct(2);
        _scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"].removeProduct(1);
        console.log(localStorage.getItem('cart'));
        // cart.removeProduct(1);
        _scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"].clear();
        console.log(localStorage.getItem('cart'));
        console.log(_scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
/* harmony export */   "changeFilters": () => (/* binding */ changeFilters),
/* harmony export */   "changeMainFilter": () => (/* binding */ changeMainFilter),
/* harmony export */   "renderFilters": () => (/* binding */ renderFilters),
/* harmony export */   "tickCheckboxes": () => (/* binding */ tickCheckboxes)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _scripts_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/filter */ "./src/scripts/filter.ts");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods */ "./src/components/goods.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-page */ "./src/components/store-page.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./range */ "./src/components/range.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");






function renderCategories() {
    const categoriesArea = document.querySelector('.filter__category_area');
    const categories = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].categories;
    let categoryInner = `<div class='category__container'>`;
    for (let key in categories) {
        categoryInner += `<div class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_category' value="${key}" name="${key}" data-param = 'category' data-quantity="${categories[key].length}">
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity filter__quantity' data-param ="${key}">(${categories[key].length})</div>
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
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_brand' value="${key}" name="${key}" data-param = 'brand' data-quantity="${brands[key].length}">
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity filter__quantity' data-param ="${key}">(${brands[key].length})</div>
    </div>`;
    }
    brandsInner += `</div>`;
    if (brandsArea) {
        brandsArea.innerHTML = brandsInner;
    }
}
function tickCheckboxes() {
    if (filter.brand.length > 0) {
        const brandCheckboxs = document.querySelectorAll(".filter__checkbox_brand");
        brandCheckboxs.forEach(item => {
            for (let i = 0; i < filter.brand.length; i++) {
                if (item.value == filter.brand[i]) {
                    item.checked = true;
                }
            }
        });
    }
    if (filter.category.length > 0) {
        const brandCheckboxs = document.querySelectorAll(".filter__checkbox_category");
        brandCheckboxs.forEach(item => {
            for (let i = 0; i < filter.category.length; i++) {
                if (item.value == filter.category[i]) {
                    item.checked = true;
                }
            }
        });
    }
}
function addFilterParams() {
    const checkboxs = document.querySelectorAll('.filter__checkbox');
    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            changeFilters(e);
        });
    });
}
function addEvents() {
    const buttonReset = document.querySelector('.filter__button_reset');
    buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener('click', resetFilters);
    const buttonSave = document.querySelector('.filter__button_save');
    buttonSave === null || buttonSave === void 0 ? void 0 : buttonSave.addEventListener('click', () => {
        saveUrl();
        changeSaveButton();
    });
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
    let side = event.currentTarget.dataset.side;
    if (param) {
        if (param === "price" || param === "stock") {
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
    if (param === "price" || param === "stock") {
        (0,_routing__WEBPACK_IMPORTED_MODULE_5__.insertParam)(`${param}-${side}`, newFilter);
    }
    else {
        (0,_routing__WEBPACK_IMPORTED_MODULE_5__.insertParam)(param, newFilter);
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
function changeMainFilter(filt) {
    filter = filt;
    runFiltration(null);
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
    document.location.search = "";
}
function saveUrl() {
    const url = document.location.href;
    navigator.clipboard.writeText(url)
        .then(() => {
    })
        .catch(err => {
        console.log('Something went wrong', err);
    });
}
function changeSaveButton() {
    const button = document.querySelector(".filter__button_save");
    if (!button)
        return;
    button.innerHTML = "Saved";
    setTimeout(() => {
        button.innerHTML = "Save filters";
    }, 2000);
}
function renderFilters() {
    renderCategories();
    renderBrands();
    addFilterParams();
    addEvents();
}


/***/ }),

/***/ "./src/components/footer.ts":
/*!**********************************!*\
  !*** ./src/components/footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter)
/* harmony export */ });
function renderFooter() {
    const footerArea = document.querySelector(".footer");
    if (footerArea) {
        footerArea.innerHTML = `<div class="wrapper">
    <div class="footer__inner">
      <div class="footer__left">
        <div class="footer__text">Made by </div>
        <a href="https://github.com/Julia-yes" class="footer__link"> Julia Bolonikova & Dzmitry Aniskovich</a>
        <div class="footer__year">2022</div>
      </div>
      <div class="footer__school">
        <a href="https://rs.school/js/" class="footer__school-name">
          <img alt="rs-school" src="../src/assets/img/rsLogo.svg" class="footer__school-img">
        </a>
      </div>
    </div>
  </div>`;
    }
}


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
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-page */ "./src/components/modal-page.ts");




function renderGoods() {
    const goodsArea = document.querySelector('.goods__area');
    const goods = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products;
    let goodsInner = ``;
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
            (0,_modal_page__WEBPACK_IMPORTED_MODULE_3__.addListenerButtonBuy)();
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


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
function renderHeader() {
    const headerArea = document.querySelector(".header");
    if (headerArea) {
        headerArea.innerHTML = `<div class="wrapper">
    <div class="header__template">
      <a href='/'><img class="header__logo" alt="shop logo" src="../src/assets/img/logo.png"></a>
      <div class="header__price">Cart total&#58; &#32; 0<span class="header__value"</span>&#36;</div>
      <a href='/cart' class="header__cart">
        <img class="header__cart_img" alt="cart" src="../src/assets/img/cart.png">
        <div class="header__cart_quantity">0</div>
      </a>
    </div>
  </div>`;
    }
}


/***/ }),

/***/ "./src/components/main-template.ts":
/*!*****************************************!*\
  !*** ./src/components/main-template.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods */ "./src/components/goods.ts");
/* harmony import */ var _filterItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./range */ "./src/components/range.ts");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./src/components/search.ts");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorting */ "./src/components/sorting.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/components/view.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header */ "./src/components/header.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ "./src/components/footer.ts");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-page */ "./src/components/modal-page.ts");










const templateArea = document.querySelector(".store__project");
function renderTemplate() {
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
    </div>`;
    }
}
function initProject() {
    renderTemplate();
    (0,_routing__WEBPACK_IMPORTED_MODULE_0__.handleLocation)();
    (0,_goods__WEBPACK_IMPORTED_MODULE_1__.renderGoods)();
    (0,_filterItem__WEBPACK_IMPORTED_MODULE_2__.renderFilters)();
    (0,_range__WEBPACK_IMPORTED_MODULE_3__.fillValues)();
    (0,_range__WEBPACK_IMPORTED_MODULE_3__.changeRange)();
    (0,_routing__WEBPACK_IMPORTED_MODULE_0__.parseUrl)();
    (0,_search__WEBPACK_IMPORTED_MODULE_4__.runSearch)();
    (0,_sorting__WEBPACK_IMPORTED_MODULE_5__.addListenerSortingButtons)();
    (0,_view__WEBPACK_IMPORTED_MODULE_6__.addListenerForView)();
    (0,_header__WEBPACK_IMPORTED_MODULE_7__.renderHeader)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_8__.renderFooter)();
    (0,_modal_page__WEBPACK_IMPORTED_MODULE_9__.addListenerButtonBuy)();
    window.addEventListener('popstate', function () {
        location.reload();
    });
}
initProject();


/***/ }),

/***/ "./src/components/modal-page.ts":
/*!**************************************!*\
  !*** ./src/components/modal-page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenerButtonBuy": () => (/* binding */ addListenerButtonBuy),
/* harmony export */   "renderModalPage": () => (/* binding */ renderModalPage),
/* harmony export */   "validateForms": () => (/* binding */ validateForms)
/* harmony export */ });
function renderModalPage() {
    const main = document.querySelector('.main');
    let modalPage = document.createElement("section");
    modalPage.className = "modal-page";
    modalPage.innerHTML = `<form class="modal-page__wrapper">
    <h1 class="modal-page__title">Personal information</h1>
    <div class="modal-page__info">
      <label>
        <input type="text" data-name="name" class="modal-page__input modal-page__input_name" placeholder="Name and surname" required>
        <span class="modal-page__error modal-page__error_name"></span>
      </label>
      <label>
        <input type="tel" data-name="tel" class="modal-page__input modal-page__input_tel" placeholder="Phone number" required>
        <span class="modal-page__error modal-page__error_tel"></span>
      </label>
      <label>
        <input type="text" data-name="address" class="modal-page__input modal-page__input_address" placeholder="Delivery address" required>
        <span class="modal-page__error modal-page__error_address"></span>
      </label>
      <label>
        <input type="email" data-name="mail" class="modal-page__input modal-page__input_mail" placeholder="E-mail" required>
        <span class="modal-page__error modal-page__error_mail"></span>
      </label>
    </div>
    <div class="modal-page__card credit-card">
      <h2 class="modal-page__subtitle">Card information</h2>
      <div class="credit-card__wrapper">
        <div class="credit-card__number">
          <div class="credit-card__img">
            <img alt="payment system" class="credit-card__logo" src="../src/assets/img/card.png">
          </div>
          <label>
            <input type="tel" maxlength="16" minlength="16" data-name="num" class="modal-page__input credit-card__input credit-card__input_number" placeholder="Card number" required minlength="16" maxlength="16">
            <span class="modal-page__error modal-page__error_num"></span>
          </label>
        </div>
        <div class="credit-card__card">
          <div class="credit-card__item">
            <span class="credit-card__text">Valid:</span>
            <input type="text" maxlength="5" data-name="valid" class="modal-page__input credit-card__input credit-card__input_small credit-card__input_valid" placeholder="Validity period" required>
            <span class="modal-page__error modal-page__error_valid"></span>
          </div>
          <div class="credit-card__item">
            <span class="credit-card__text">CVV:</span>
            <input type="tel" maxlength="3" data-name="cvv" class="modal-page__input credit-card__input credit-card__input_small credit-card__input_cvv" placeholder="CVV" required minlength="3" maxlength="3">
            <span class="modal-page__error modal-page__error_cvv"></span>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-page__button button">Confirm</button>
  </form>
  `;
    main === null || main === void 0 ? void 0 : main.append(modalPage);
    const modalArea = document.querySelector(".modal-page");
    modalArea === null || modalArea === void 0 ? void 0 : modalArea.addEventListener("click", (e) => {
        if (e.target == modalArea) {
            closeModalPage();
        }
    });
    addListenerForms();
    addListenerCardNumber();
    addListenerValidForm();
    addListenerConfirm();
}
function addListenerValidForm() {
    const validForm = document.querySelector(".credit-card__input_valid");
    validForm === null || validForm === void 0 ? void 0 : validForm.addEventListener("input", (e) => { addCorrectView(e); });
}
function addCorrectView(e) {
    let value = e.currentTarget.value;
    if (value.length >= 2) {
        e.currentTarget.value = `${value.slice(0, 2)}/${value.slice(3)}`;
    }
}
function addListenerButtonBuy() {
    const buttonBuy = document.querySelector(".button__buy");
    buttonBuy === null || buttonBuy === void 0 ? void 0 : buttonBuy.addEventListener("click", renderModalPage);
}
function addListenerConfirm() {
    const buttonConfirm = document.querySelector(".modal-page__button");
    buttonConfirm === null || buttonConfirm === void 0 ? void 0 : buttonConfirm.addEventListener("click", checkCorrectInput);
}
function closeModalPage() {
    const modalPage = document.querySelector(".modal-page");
    modalPage === null || modalPage === void 0 ? void 0 : modalPage.remove();
}
function addListenerCardNumber() {
    const cardNumberInput = document.querySelector(".credit-card__input_number");
    cardNumberInput === null || cardNumberInput === void 0 ? void 0 : cardNumberInput.addEventListener("input", (e) => { changePaySystem(e); });
}
function changePaySystem(event) {
    let value = event.currentTarget.value;
    const img = document.querySelector(".credit-card__logo");
    if (img)
        if (value.startsWith("3")) {
            img.src = "../src/assets/img/card_am.png";
        }
        else if (value.startsWith("4")) {
            img.src = "../src/assets/img/card-v.png";
        }
        else if (value.startsWith("5")) {
            img.src = "../src/assets/img/card-m.png";
        }
}
function addListenerForms() {
    const forms = document.querySelectorAll(".modal-page__input");
    forms.forEach(form => {
        form.addEventListener("blur", (e) => {
            validateForms(e);
        });
    });
}
function typeError(text, prop) {
    const error = document.querySelector(`.modal-page__error_${prop}`);
    if (error && text) {
        error.innerHTML = text;
    }
}
function typeRight(prop) {
    const error = document.querySelector(`.modal-page__error_${prop}`);
    if (error) {
        error.innerHTML = `<img alt="right" class="modal-page__error_img" src="../src/assets/img/right.png">`;
    }
}
// function typeErrorImg(prop: string) {
//   const error = document.querySelector(`.modal-page__error_${prop}`);
//   if (error) {
//     error.innerHTML = `<img alt="right" class="modal-page__error_img" src="../src/assets/img/error.png">`;
//   }
// }
function validateForms(event) {
    let name = event.currentTarget.dataset.name;
    let value = event.currentTarget.value;
    if (name == "name") {
        let result = value.split(" ");
        if (result.length < 2 || result[0].length < 2 || result[1].length < 2) {
            typeError("Error name", name);
        }
        else {
            typeRight(name);
        }
    }
    if (name == "tel") {
        var re = /^[\+][\d\(\)\ -]{9,14}\d$/;
        if (re.test(value)) {
            typeRight(name);
        }
        else {
            typeError("Error phone number", name);
        }
    }
    if (name == "address") {
        let result = value.split(" ");
        if (result.length < 3 || result[0].length < 5 || result[1].length < 5 || result[2].length < 5) {
            typeError("Error address", name);
        }
        else {
            typeRight(name);
        }
    }
    if (name == "mail") {
        var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        if (re.test(value)) {
            typeRight(name);
        }
        else {
            typeError("Error e-mail", name);
        }
    }
    if (name == "num") {
        var re = /^[0-9]{16}/;
        if (re.test(value)) {
            typeRight(name);
        }
        else {
            typeError("Uncorrect number", name);
        }
    }
    if (name == "cvv") {
        var re = /^[0-9]{3}/;
        if (re.test(value)) {
            typeRight(name);
        }
        else {
            typeError("Error", name);
        }
    }
    if (name == "valid") {
        var re = /^(0?[1-9]|1[0-2])\/([0-9]{2})$/;
        if (re.test(value)) {
            typeRight(name);
        }
        else {
            typeError("Error", name);
        }
    }
}
function checkRequiredInputs() {
    const forms = document.querySelectorAll(".modal-page__input");
    forms.forEach(form => {
        if (form.value == "") {
            let prop = form.dataset.name;
            if (prop)
                typeError("Required", prop);
        }
    });
}
function checkCorrectInput() {
    checkRequiredInputs();
    const modal = document.querySelector(".modal-page__wrapper");
    const errors = document.querySelectorAll(".modal-page__error");
    let errorNum = 0;
    errors.forEach(error => {
        if (error.textContent) {
            errorNum += 1;
        }
    });
    if (errorNum > 0) {
        modal === null || modal === void 0 ? void 0 : modal.classList.add("modal-page__wrapper_wrong");
    }
    else {
        completeOrder();
    }
}
function completeOrder() {
    renderMessageConfirm();
    redirectToMain();
}
function renderMessageConfirm() {
    const messageArea = document.querySelector(".main");
    if (messageArea)
        messageArea.innerHTML = `<div class="modal-page__message">Thanks for your order</div>`;
}
function redirectToMain() {
    setTimeout(function () {
        document.location.href = "/";
    }, 3000);
}


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
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");

let content;
function renderProductPage() {
    const productId = +window.location.pathname.split('/')[2];
    const product = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(productId);
    if (product) {
        content = document.querySelector('.main');
        if (content) {
            content.innerHTML = '';
        }
        renderCrumbs(product);
        renderProduct(product);
        renderPurchase(product);
    }
}
function renderCrumbs(product) {
    const crumbsBlock = createNode('crumbs');
    const storeCrumb = createNode('crumb', "Store");
    const categoryCrumb = createNode('crumb', product === null || product === void 0 ? void 0 : product.category);
    const brandCrumb = createNode('crumb', product === null || product === void 0 ? void 0 : product.brand);
    const titleCrumb = createNode('crumb', product === null || product === void 0 ? void 0 : product.title);
    crumbsBlock.append(storeCrumb, categoryCrumb, brandCrumb, titleCrumb);
    content === null || content === void 0 ? void 0 : content.append(crumbsBlock);
}
function renderProduct(product) {
    const productBlock = createNode('product');
    const photosBlock = createNode('photos');
    const mainPhotoBlock = createNode('main');
    const mainPhoto = createNode('main-photo');
    const mainPhotoImg = document.createElement('img');
    mainPhotoImg.className = 'main-photo__img';
    mainPhotoImg.src = product.thumbnail;
    mainPhoto.append(mainPhotoImg);
    mainPhotoBlock.append(mainPhoto);
    const smallPhotosBlock = createNode('small-photos');
    for (const image of product.images) {
        if (image === product.thumbnail)
            continue;
        const smallPhoto = createNode('small-photo');
        const smallPhotoImg = document.createElement('img');
        smallPhotoImg.src = image;
        smallPhoto.append(smallPhotoImg);
        smallPhotosBlock.append(smallPhoto);
    }
    photosBlock.append(mainPhotoBlock, smallPhotosBlock);
    const productDataBlock = createNode('data');
    const productTitle = createNode('data__title', product.title);
    const productDescription = createNode('data__description', product.description);
    const productBrand = createNode('data__brand', product.brand);
    const productCategory = createNode('data__category', product.category);
    const productStats = createNode('stats');
    const productRating = createNode('data__rating', 'Rating: ' + product.rating);
    const productStock = createNode('data__stock', 'Stock: ' + product.stock);
    productStats.append(productRating, productStock);
    productDataBlock.append(productTitle, productDescription, productBrand, productCategory, productStats);
    productBlock.append(photosBlock, productDataBlock);
    content === null || content === void 0 ? void 0 : content.append(productBlock);
}
function renderPurchase(product) {
    const purchaseBlock = createNode('purchase');
    const priceBlock = createNode('price');
    const discount = createNode('price__discount', `Discount: \n${product.discountPercentage}`);
    const price = createNode('price__amount', `Price: \n${product.price}`);
    priceBlock.append(discount, price);
    const buttonsBlock = createNode('buttons');
    const buttonAdd = document.createElement('button');
    buttonAdd.className = 'button button__add';
    buttonAdd.textContent = 'Add to Cart';
    const buttonBuy = document.createElement('button');
    buttonBuy.className = 'button button__buy';
    buttonBuy.textContent = 'Buy Now';
    buttonsBlock.append(buttonAdd, buttonBuy);
    purchaseBlock.append(priceBlock, buttonsBlock);
    content === null || content === void 0 ? void 0 : content.append(purchaseBlock);
}
function createNode(className, textContent) {
    const node = document.createElement('div');
    node.className = className;
    if (textContent)
        node.textContent = textContent;
    return node;
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
/* harmony export */   "changeStockRange": () => (/* binding */ changeStockRange),
/* harmony export */   "fillValues": () => (/* binding */ fillValues)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _assets_data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/data */ "./src/assets/data/data.js");
/* harmony import */ var _filterItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterItem */ "./src/components/filterItem.ts");



let priceMin = 0;
let priceMax = 0;
let stockMin = 0;
let stockMax = 0;
function fillValues() {
    let pro = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProducts(_assets_data_data__WEBPACK_IMPORTED_MODULE_1__.data.products);
    pro.sort(function (el1, el2) {
        return el1.price - el2.price;
    });
    priceMax = pro[pro.length - 1].price;
    priceMin = pro[0].price;
    pro.sort(function (el1, el2) {
        return el1.stock - el2.stock;
    });
    stockMin = pro[0].stock;
    stockMax = pro[pro.length - 1].stock;
}
function renderRange(prop, minValue, maxValue) {
    let min = 0;
    let max = 0;
    if (prop == "price") {
        min = priceMin;
        max = priceMax;
    }
    else {
        min = stockMin;
        max = stockMax;
    }
    if (minValue == -1 || maxValue == -1) {
        minValue = min;
        maxValue = max;
    }
    const rangePlace = document.querySelector(`.filter__range_${prop}`);
    if (rangePlace) {
        let rangeInner = `<div class="range__container range">
      <div class="range__control_sliders">
          <input class = "range__input range__input_${prop} range__input_min" id="fromSlider${prop}" type="range" value="${minValue}" min="${min}" max="${max}" data-param="${prop}" data-side ="min"/>
          <input class = "range__input range__input_${prop} range__input_max" id="toSlider${prop}" type="range" value="${maxValue}" min="${min}" max="${max}" data-param="${prop}" data-side ="max"/>
      </div>`;
        if (_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products.length > 0) {
            rangeInner += `<div class="range__control_form">
          <div class="form_control_container">
              <input class="range__input_number range__${prop}" type="number" id="fromInput${prop}" value="${minValue}" min="${min}" max=${max}/>&#36;
          </div>
          <div class="form_control_container">
              <input class="range__input_number range__${prop}" type="number" id="toInput${prop}" value="${maxValue}" min="${min}" max=${max}/>&#36;
          </div>
      </div>`;
        }
        else {
            rangeInner += `<div class="range__empty">No products found</div>`;
        }
        rangeInner += `</div>`;
        rangePlace.innerHTML = rangeInner;
    }
    const range = document.querySelectorAll('.range__input');
    range.forEach(item => {
        item.addEventListener('change', e => {
            (0,_filterItem__WEBPACK_IMPORTED_MODULE_2__.changeFilters)(e);
            changeRangeValue(prop);
        });
    });
}
function changeRangeValue(prop) {
    const rangeValues = document.querySelectorAll(`.range__${prop}`);
    const rangeInputs = document.querySelectorAll(`.range__input_${prop}`);
    for (let i = 0; i < rangeValues.length; i++) {
        rangeValues[0].value = rangeInputs[0].value;
        rangeValues[1].value = rangeInputs[1].value;
    }
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
    renderRange("price", _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max);
    //addRangeFunctionality("price");
}
function changeStockRange() {
    renderRange("stock", _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].stockRange.min, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].stockRange.max);
    //addRangeFunctionality("stock");
}
function changeRange() {
    changePriceRange();
    changeStockRange();
}


/***/ }),

/***/ "./src/components/routing.ts":
/*!***********************************!*\
  !*** ./src/components/routing.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPathUrl": () => (/* binding */ addPathUrl),
/* harmony export */   "handleLocation": () => (/* binding */ handleLocation),
/* harmony export */   "insertParam": () => (/* binding */ insertParam),
/* harmony export */   "parseUrl": () => (/* binding */ parseUrl)
/* harmony export */ });
/* harmony import */ var _error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-page */ "./src/components/error-page.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-page */ "./src/components/cart-page.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-page */ "./src/components/product-page.ts");
/* harmony import */ var _store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store-page */ "./src/components/store-page.ts");
/* harmony import */ var _filterItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sorting */ "./src/components/sorting.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/components/view.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const url = document.location.href;
const routes = {
    '': _store_page__WEBPACK_IMPORTED_MODULE_3__.renderStorePage,
    'product': _product_page__WEBPACK_IMPORTED_MODULE_2__.renderProductPage,
    'cart': _cart_page__WEBPACK_IMPORTED_MODULE_1__.renderCartPage,
    'error': _error_page__WEBPACK_IMPORTED_MODULE_0__.renderErrorPage,
};
const handleLocation = () => __awaiter(void 0, void 0, void 0, function* () {
    const path = window.location.pathname.split('/')[1];
    const route = routes[path] || routes.error;
    route();
});
function addPathUrl(prop) {
    history.pushState({}, '', prop);
    handleLocation();
}
function parseUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        if (document.location.search == '') {
            return;
        }
        const queryParams = document.location.search.slice(1).split('&');
        let filter = {
            category: [],
            brand: [],
            price: { min: null, max: null },
            stock: { min: null, max: null },
        };
        let view = "";
        let sort = "";
        queryParams.forEach(param => {
            if (param.startsWith("category")) {
                let arr = param.split('=');
                filter.category = arr[1].split('*');
            }
            if (param.startsWith("brand")) {
                let arr = param.split('=');
                let arrResult = arr[1].split('*');
                let result = arrResult.map(item => decodeURIComponent(item));
                filter.brand = result;
            }
            if (param.startsWith("price")) {
                let arr = param.split('=');
                if (arr[0].includes("min")) {
                    filter.price.min = Number(arr[1]);
                }
                else {
                    filter.price.max = Number(arr[1]);
                }
            }
            if (param.startsWith("stock")) {
                let arr = param.split('=');
                if (arr[0].includes("min")) {
                    filter.stock.min = Number(arr[1]);
                }
                else {
                    filter.stock.max = Number(arr[1]);
                }
            }
            if (param.startsWith("view")) {
                let arr = param.split('=');
                view = arr[1];
            }
            if (param.startsWith("sort")) {
                let arr = param.split('=');
                sort = arr[1];
            }
        });
        yield (0,_filterItem__WEBPACK_IMPORTED_MODULE_4__.changeMainFilter)(filter);
        (0,_sorting__WEBPACK_IMPORTED_MODULE_5__.makeSorting)(sort);
        (0,_view__WEBPACK_IMPORTED_MODULE_6__.applyView)(view);
        (0,_filterItem__WEBPACK_IMPORTED_MODULE_4__.tickCheckboxes)();
    });
}
function insertParam(key, value) {
    if (key != undefined) {
        key = encodeURIComponent(key);
    }
    value = encodeURIComponent(value);
    let kvp = document.location.search.slice(1).split('&');
    let i = 0;
    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            if (pair[0] == "sort" || pair[0] == "view" || pair[0] == "price-min" || pair[0] == "price-max" || pair[0] == "stock-min" || pair[0] == "stock-max") {
                pair[1] = value;
            }
            else {
                if (pair[1].includes(value)) {
                    let valueArr = pair[1].split("*");
                    for (let i = 0; i < valueArr.length; i++) {
                        if (valueArr[i] == value) {
                            valueArr.splice(i, 1);
                        }
                    }
                    pair[1] = valueArr.join('*');
                }
                else {
                    pair[1] = pair[1] + `*${value}`;
                }
            }
            kvp[i] = pair.join('=');
            break;
        }
    }
    if (i >= kvp.length) {
        kvp[kvp.length] = [key, value].join('=');
    }
    if (document.location.search == "") {
        kvp.shift();
    }
    let params = kvp.join('&');
    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + params;
    window.history.pushState({ path: newurl }, '', newurl);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runSearch": () => (/* binding */ runSearch)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");

function runSearch() {
    const searchInput = document.querySelector('.search__input');
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', () => {
        // products.applyFilter()
        runFilter(searchInput.value);
    });
}
function runFilter(prop) {
    if (typeof prop === 'number')
        prop = '' + prop;
    _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].searchProductsByString(prop);
    console.log(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"]);
}


/***/ }),

/***/ "./src/components/sorting.ts":
/*!***********************************!*\
  !*** ./src/components/sorting.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenerSortingButtons": () => (/* binding */ addListenerSortingButtons),
/* harmony export */   "makeSorting": () => (/* binding */ makeSorting)
/* harmony export */ });
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");
/* harmony import */ var _goods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods */ "./src/components/goods.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");



function addListenerSortingButtons() {
    const buttonSort = document.querySelectorAll('.sorters__button');
    buttonSort.forEach(button => {
        button.addEventListener('click', (e) => {
            sortGoods(e);
            changeActiveButton(e);
            (0,_routing__WEBPACK_IMPORTED_MODULE_2__.insertParam)("sort", `${e.currentTarget.dataset.option}-${e.currentTarget.dataset.direction}`);
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
function sortGoods(event, opt, dir) {
    let option = event ? event.currentTarget.dataset.option : opt;
    let direction = event ? event.currentTarget.dataset.direction : dir;
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
function makeSorting(prop) {
    let arr = prop.split('-');
    sortGoods(undefined, arr[0], arr[1]);
    const activeButton = document.querySelector(`[data-option="${arr[0]}"][data-direction="${arr[1]}"]`);
    activeButton === null || activeButton === void 0 ? void 0 : activeButton.classList.add("sorters__button_active");
}


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
    <div class="wrapper">
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
                <div class='view__button'><img alt='grid' class='view__button_img view__button_many' src='../src/assets/img/003-grid-1.png' data-view = "many"></div>
                <div class='view__button'><img alt='grid' class='view__button_active view__button_img view__button_few' src='../src/assets/img/004-menu-1.png' data-view = "few"></div>
              </div>
            </div>
            <div class='goods__area'>
            </div>
          </section>
        </div>
      </article>
    </div>`;
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListenerForView": () => (/* binding */ addListenerForView),
/* harmony export */   "applyView": () => (/* binding */ applyView)
/* harmony export */ });
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");

function addListenerForView() {
    const buttonsView = document.querySelectorAll('.view__button_img');
    buttonsView.forEach(button => {
        button.addEventListener('click', (event) => {
            changeView(event);
            (0,_routing__WEBPACK_IMPORTED_MODULE_0__.insertParam)("view", event.currentTarget.dataset.view);
        });
    });
}
function changeView(ev) {
    const buttonsView = document.querySelectorAll('.view__button_img');
    buttonsView.forEach(button => {
        button.classList.remove('view__button_active');
    });
    let activeButton = ev.currentTarget;
    activeButton.classList.add('view__button_active');
    const goodsArea = document.querySelector('.goods__area');
    goodsArea === null || goodsArea === void 0 ? void 0 : goodsArea.classList.toggle('goods__area_many');
}
function applyView(prop) {
    const goodsArea = document.querySelector('.goods__area');
    const buttonMany = document.querySelector(".view__button_many");
    const buttonFew = document.querySelector(".view__button_few");
    if (prop == "many") {
        goodsArea === null || goodsArea === void 0 ? void 0 : goodsArea.classList.add('goods__area_many');
        buttonFew === null || buttonFew === void 0 ? void 0 : buttonFew.classList.remove("view__button_active");
        buttonMany === null || buttonMany === void 0 ? void 0 : buttonMany.classList.add("view__button_active");
    }
}


/***/ }),

/***/ "./src/scripts/cart.ts":
/*!*****************************!*\
  !*** ./src/scripts/cart.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-parser */ "./src/scripts/data-parser.ts");

class Cart {
    constructor() {
        this.totalItems = 0;
        this.totalPrice = 0;
        this.products = [];
    }
    addProduct(productId) {
        var _a;
        this.totalItems++;
        const productPrice = (_a = _data_parser__WEBPACK_IMPORTED_MODULE_0__.products.getProductById(productId)) === null || _a === void 0 ? void 0 : _a.price;
        if (productPrice)
            this.totalPrice += productPrice;
        const cartProductId = this.getCartProductId(productId);
        if (cartProductId !== undefined) {
            this.products[cartProductId].amount++;
        }
        else {
            this.products.push({
                id: productId,
                amount: 1,
            });
        }
        localStorage.setItem('cart', JSON.stringify(this));
    }
    removeProduct(productId) {
        var _a;
        this.totalItems--;
        const productPrice = (_a = _data_parser__WEBPACK_IMPORTED_MODULE_0__.products.getProductById(productId)) === null || _a === void 0 ? void 0 : _a.price;
        if (productPrice)
            this.totalPrice -= productPrice;
        const cartProductId = this.getCartProductId(productId);
        if (cartProductId) {
            this.products[cartProductId].amount--;
        }
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === productId) {
                if (this.products[i].amount > 1) {
                    this.products[i].amount--;
                }
                else {
                    this.products.splice(i, 1);
                }
                break;
            }
        }
        localStorage.setItem('cart', JSON.stringify(this));
    }
    getCartProductId(productId) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === productId) {
                return i;
            }
        }
        return undefined;
    }
    clear() {
        this.totalItems = 0;
        this.totalPrice = 0;
        this.products = [];
        localStorage.setItem('cart', JSON.stringify(this));
    }
}
const cart = new Cart();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);


/***/ }),

/***/ "./src/scripts/data-parser.ts":
/*!************************************!*\
  !*** ./src/scripts/data-parser.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "products": () => (/* binding */ products)
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
        for (const product of this.products) {
            if (product.id === id)
                return product;
        }
    }
    searchProductsByString(inputValue) {
        const nonInformativeKeys = ['id', 'thumbnail', 'images'];
        for (let ind = 0; ind < this.products.length; ind++) {
            const product = this.products[ind];
            let isValueFound = false;
            for (let [key, value] of Object.entries(product)) {
                if (typeof value === 'number')
                    value = '' + value;
                if (nonInformativeKeys.includes(key))
                    continue;
                console.log(product, value);
                if (value.toLowerCase().includes(inputValue.toLowerCase())) {
                    isValueFound = true;
                    break;
                }
            }
            if (!isValueFound) {
                this.products.splice(ind, 1);
                ind--;
            }
        }
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
        const nonInformativeKeys = ['id', 'thumbnail', 'images'];
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
            if (filter.stringSearch.length) {
                let isValueFound = false;
                for (let [key, value] of Object.entries(el)) {
                    if (typeof value === 'number')
                        value = '' + value;
                    if (nonInformativeKeys.includes(key))
                        continue;
                    if (value.toLowerCase().includes(filter.stringSearch.toLowerCase())) {
                        isValueFound = true;
                        console.log(el);
                        break;
                    }
                }
                if (!isValueFound) {
                    this.products.splice(ind, 1);
                    ind--;
                }
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
        this.stringSearch = '';
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
    setStringSearch(value) {
        if (typeof value === 'number')
            value = value.toString();
        this.stringSearch = value;
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
  "description": "Samsung\'s new variant which goes beyond Galaxy to the Universe",
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
  "description": "L\'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
  "price": 19,
  "discountPercentage": 13.31,
  "rating": 4.83,
  "stock": 110,
  "brand": "L\'Oreal Paris",
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
  "description": "Fair & Clear is Pakistan\'s only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
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
  "description": "2021 Custom Winter Fall Zebra Knit Crop Top Women Sweaters Wool Mohair Cos Customize Crew Neck Women\' S Crop Top Sweater",
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
  "title": "women\'s shoes",
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
  "description": "quality and professional print - It doesn\'t just look high quality, it is high quality.",
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
  "description": "Stylish Watch For Man (Luxury) Classy Men\'s Stainless Steel Wrist Watch - Box Packed",
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
  "description": "Buy this awesome  The product is originally manufactured by the company and it\'s a top selling product with a very reasonable",
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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header.ts");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.ts");
/* harmony import */ var _components_store_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/store-page */ "./src/components/store-page.ts");
/* harmony import */ var _components_error_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/error-page */ "./src/components/error-page.ts");
/* harmony import */ var _components_cart_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart-page */ "./src/components/cart-page.ts");
/* harmony import */ var _components_product_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product-page */ "./src/components/product-page.ts");
/* harmony import */ var _components_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal-page */ "./src/components/modal-page.ts");
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/range */ "./src/components/range.ts");
/* harmony import */ var _components_filterItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _components_goods__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/goods */ "./src/components/goods.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/view */ "./src/components/view.ts");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/search */ "./src/components/search.ts");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.ts");

















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDZCQUE2QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSwrQ0FBK0MsdUJBQXVCO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDcnpEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ1E7QUFDTTtBQUNQO0FBQ0E7QUFDSTtBQUNBO0FBQ0Q7QUFDRztBQUNGO0FBQ0w7QUFDSztBQUNMO0FBQ0Q7QUFDRTtBQUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Vycm9yLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVySXRlbS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL21haW4tdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcm91dGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc29ydGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zdG9yZS1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvY2FydC50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9kYXRhLXBhcnNlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvc2NyaXB0cy9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjYXJ0IGZyb20gXCIuLi9zY3JpcHRzL2NhcnRcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXJ0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiQ2FydFwiO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXJ0KTtcbiAgICAgICAgY2FydC5hZGRQcm9kdWN0KDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICAgICAgY2FydC5hZGRQcm9kdWN0KDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKTtcbiAgICAgICAgLy8gY2FydC5hZGRQcm9kdWN0KDIpO1xuICAgICAgICBjYXJ0LnJlbW92ZVByb2R1Y3QoMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpO1xuICAgICAgICAvLyBjYXJ0LnJlbW92ZVByb2R1Y3QoMSk7XG4gICAgICAgIGNhcnQuY2xlYXIoKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICAgICAgICAvLyBmaWx0ZXIuc2V0U3RvY2soJ21heCcsIDUxKTtcbiAgICAgICAgLy8gcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiQ2FydFwiO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJFcnJvclBhZ2UoKSB7XG4gICAgY29uc3QgZXJyb3JBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIGlmIChlcnJvckFyZWEpIHtcbiAgICAgICAgZXJyb3JBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdlcnJvcl9fYmxvY2snPlBBR0UgTk9UIEZPVU5EICg0MDQpPC9kaXY+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vc2NyaXB0cy9kYXRhLXBhcnNlcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3NjcmlwdHMvZmlsdGVyJztcbmltcG9ydCB7IHJlbmRlckdvb2RzIH0gZnJvbSAnLi9nb29kcyc7XG5pbXBvcnQgeyByZW5kZXJHb29kc1F1YW50aXR5IH0gZnJvbSAnLi9zdG9yZS1wYWdlJztcbmltcG9ydCB7IGNoYW5nZVJhbmdlLCBjaGFuZ2VQcmljZVJhbmdlLCBjaGFuZ2VTdG9ja1JhbmdlIH0gZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgeyBpbnNlcnRQYXJhbSB9IGZyb20gXCIuL3JvdXRpbmdcIjtcbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXMoKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19jYXRlZ29yeV9hcmVhJyk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHByb2R1Y3RzLmNhdGVnb3JpZXM7XG4gICAgbGV0IGNhdGVnb3J5SW5uZXIgPSBgPGRpdiBjbGFzcz0nY2F0ZWdvcnlfX2NvbnRhaW5lcic+YDtcbiAgICBmb3IgKGxldCBrZXkgaW4gY2F0ZWdvcmllcykge1xuICAgICAgICBjYXRlZ29yeUlubmVyICs9IGA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3N0cmluZyc+XHJcbiAgICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94JyBjbGFzcz0nZmlsdGVyX19jaGVja2JveCBmaWx0ZXJfX2NoZWNrYm94X2NhdGVnb3J5JyB2YWx1ZT1cIiR7a2V5fVwiIG5hbWU9XCIke2tleX1cIiBkYXRhLXBhcmFtID0gJ2NhdGVnb3J5JyBkYXRhLXF1YW50aXR5PVwiJHtjYXRlZ29yaWVzW2tleV0ubGVuZ3RofVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fcXVhbnRpdHkgZmlsdGVyX19xdWFudGl0eScgZGF0YS1wYXJhbSA9XCIke2tleX1cIj4oJHtjYXRlZ29yaWVzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIGNhdGVnb3J5SW5uZXIgKz0gYDwvZGl2PmA7XG4gICAgaWYgKGNhdGVnb3JpZXNBcmVhKSB7XG4gICAgICAgIGNhdGVnb3JpZXNBcmVhLmlubmVySFRNTCA9IGNhdGVnb3J5SW5uZXI7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVuZGVyQnJhbmRzKCkge1xuICAgIGNvbnN0IGJyYW5kc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19icmFuZF9hcmVhJyk7XG4gICAgY29uc3QgYnJhbmRzID0gcHJvZHVjdHMuYnJhbmRzO1xuICAgIGxldCBicmFuZHNJbm5lciA9IGA8ZGl2IGNsYXNzPSdicmFuZF9fY29udGFpbmVyJz5gO1xuICAgIGZvciAobGV0IGtleSBpbiBicmFuZHMpIHtcbiAgICAgICAgYnJhbmRzSW5uZXIgKz0gYDxkaXYgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94IGZpbHRlcl9fY2hlY2tib3hfYnJhbmQnIHZhbHVlPVwiJHtrZXl9XCIgbmFtZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnYnJhbmQnIGRhdGEtcXVhbnRpdHk9XCIke2JyYW5kc1trZXldLmxlbmd0aH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3RpdGxlJz4ke2tleX0mZW5zcDs8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3F1YW50aXR5IGZpbHRlcl9fcXVhbnRpdHknIGRhdGEtcGFyYW0gPVwiJHtrZXl9XCI+KCR7YnJhbmRzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIGJyYW5kc0lubmVyICs9IGA8L2Rpdj5gO1xuICAgIGlmIChicmFuZHNBcmVhKSB7XG4gICAgICAgIGJyYW5kc0FyZWEuaW5uZXJIVE1MID0gYnJhbmRzSW5uZXI7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHRpY2tDaGVja2JveGVzKCkge1xuICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBicmFuZENoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19jaGVja2JveF9icmFuZFwiKTtcbiAgICAgICAgYnJhbmRDaGVja2JveHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmJyYW5kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gZmlsdGVyLmJyYW5kW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci5jYXRlZ29yeS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGJyYW5kQ2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2NoZWNrYm94X2NhdGVnb3J5XCIpO1xuICAgICAgICBicmFuZENoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PSBmaWx0ZXIuY2F0ZWdvcnlbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZEZpbHRlclBhcmFtcygpIHtcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19jaGVja2JveCcpO1xuICAgIGNoZWNrYm94cy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUZpbHRlcnMoZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnV0dG9uX3Jlc2V0Jyk7XG4gICAgYnV0dG9uUmVzZXQgPT09IG51bGwgfHwgYnV0dG9uUmVzZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGaWx0ZXJzKTtcbiAgICBjb25zdCBidXR0b25TYXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnV0dG9uX3NhdmUnKTtcbiAgICBidXR0b25TYXZlID09PSBudWxsIHx8IGJ1dHRvblNhdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNhdmVVcmwoKTtcbiAgICAgICAgY2hhbmdlU2F2ZUJ1dHRvbigpO1xuICAgIH0pO1xufVxuY29uc3QgZmlsdGVyTnVsbCA9IHtcbiAgICBjYXRlZ29yeTogW10sXG4gICAgYnJhbmQ6IFtdLFxuICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXG4gICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcbn07XG5sZXQgZmlsdGVyID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBicmFuZDogW10sXG4gICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxufTtcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VGaWx0ZXJzKGV2ZW50KSB7XG4gICAgbGV0IHBhcmFtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhcmFtO1xuICAgIGxldCBuZXdGaWx0ZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGxldCBzaWRlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnNpZGU7XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gXCJwcmljZVwiIHx8IHBhcmFtID09PSBcInN0b2NrXCIpIHtcbiAgICAgICAgICAgIGlmIChzaWRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5taW4gPSBOdW1iZXIobmV3RmlsdGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ubWF4ID0gTnVtYmVyKG5ld0ZpbHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGxldCBpbmQgPSBmaWx0ZXJbcGFyYW1dLmluZGV4T2YobmV3RmlsdGVyKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLnNwbGljZShpbmQsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5wdXNoKG5ld0ZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtKSB7XG4gICAgICAgIHJ1bkZpbHRyYXRpb24ocGFyYW0pO1xuICAgIH1cbiAgICBpZiAocGFyYW0gPT09IFwicHJpY2VcIiB8fCBwYXJhbSA9PT0gXCJzdG9ja1wiKSB7XG4gICAgICAgIGluc2VydFBhcmFtKGAke3BhcmFtfS0ke3NpZGV9YCwgbmV3RmlsdGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc2VydFBhcmFtKHBhcmFtLCBuZXdGaWx0ZXIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJ1bkZpbHRyYXRpb24ocHJvcCkge1xuICAgIGxldCBmaWx0ZXJEb3dubG9hZGVkID0gbmV3IEZpbHRlcjtcbiAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZmlsdGVyLmNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaENhdGVnb3J5KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZpbHRlci5icmFuZC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zd2l0Y2hCcmFuZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmaWx0ZXIucHJpY2UubWluICE9PSBudWxsKSB7XG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0UHJpY2UoXCJtaW5cIiwgZmlsdGVyLnByaWNlLm1pbik7XG4gICAgfVxuICAgIGlmIChmaWx0ZXIucHJpY2UubWF4ICE9PSBudWxsKSB7XG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0UHJpY2UoXCJtYXhcIiwgZmlsdGVyLnByaWNlLm1heCk7XG4gICAgfVxuICAgIGlmIChmaWx0ZXIuc3RvY2subWluICE9PSBudWxsKSB7XG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RvY2soXCJtaW5cIiwgZmlsdGVyLnN0b2NrLm1pbik7XG4gICAgfVxuICAgIGlmIChmaWx0ZXIuc3RvY2subWF4ICE9PSBudWxsKSB7XG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RvY2soXCJtYXhcIiwgZmlsdGVyLnN0b2NrLm1heCk7XG4gICAgfVxuICAgIHByb2R1Y3RzLmFwcGx5RmlsdGVyKGZpbHRlckRvd25sb2FkZWQpO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbiAgICBpZiAocHJvcCA9PT0gJ3ByaWNlJykge1xuICAgICAgICBjaGFuZ2VTdG9ja1JhbmdlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdG9jaycpIHtcbiAgICAgICAgY2hhbmdlUHJpY2VSYW5nZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2hhbmdlUmFuZ2UoKTtcbiAgICB9XG4gICAgcmVuZGVyR29vZHMoKTtcbiAgICByZXJlbmRlckdvb2RzUXVhbnRpdHkoKTtcbiAgICByZW5kZXJHb29kc1F1YW50aXR5KCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTWFpbkZpbHRlcihmaWx0KSB7XG4gICAgZmlsdGVyID0gZmlsdDtcbiAgICBydW5GaWx0cmF0aW9uKG51bGwpO1xufVxuZnVuY3Rpb24gY2hhbmdlUmFuZ2VQb2ludHMocHJvcCkge1xuICAgIGxldCByYW5nZU1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcm9tU2xpZGVyJHtwcm9wfWApO1xuICAgIGxldCByYW5nZU1pbk51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcm9tSW5wdXQke3Byb3B9YCk7XG4gICAgbGV0IHJhbmdlTWF4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvU2xpZGVyJHtwcm9wfWApO1xuICAgIGxldCByYW5nZU1heE51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b0lucHV0JHtwcm9wfWApO1xuICAgIGlmIChmaWx0ZXJbcHJvcF0ubWluICE9PSBudWxsKSB7XG4gICAgICAgIHJhbmdlTWluLnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1pbn1gO1xuICAgICAgICByYW5nZU1pbk51bS52YWx1ZSA9IGAke2ZpbHRlcltwcm9wXS5taW59YDtcbiAgICB9XG4gICAgaWYgKGZpbHRlcltwcm9wXS5tYXggIT09IG51bGwpIHtcbiAgICAgICAgcmFuZ2VNYXgudmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWF4fWA7XG4gICAgICAgIHJhbmdlTWF4TnVtLnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1heH1gO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlcmVuZGVyR29vZHNRdWFudGl0eSgpIHtcbiAgICBjb25zdCBxdWFudGl0eUFyZWFCcmFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRfX3F1YW50aXR5Jyk7XG4gICAgY29uc3QgZmlsdGVyZWRCcmFuZHMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuYnJhbmRzKSB7XG4gICAgICAgIGZpbHRlcmVkQnJhbmRzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgO1xuICAgIHF1YW50aXR5QXJlYUJyYW5kcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoZmlsdGVyZWRCcmFuZHMuaW5jbHVkZXMoaXRlbS5kYXRhc2V0LnBhcmFtKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmJyYW5kcykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCgke3Byb2R1Y3RzLmJyYW5kc1trZXldLmxlbmd0aH0pYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMCknO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX3F1YW50aXR5Jyk7XG4gICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gW107XG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgZmlsdGVyZWRDYXRlZ29yaWVzLnB1c2goa2V5KTtcbiAgICB9XG4gICAgO1xuICAgIHF1YW50aXR5QXJlYUNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJlZENhdGVnb3JpZXMuaW5jbHVkZXMoaXRlbS5kYXRhc2V0LnBhcmFtKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGl0ZW0uZGF0YXNldC5wYXJhbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGAoJHtwcm9kdWN0cy5jYXRlZ29yaWVzW2tleV0ubGVuZ3RofSlgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gJygwKSc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19jaGVja2JveCcpO1xuICAgIGNoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBmaWx0ZXIgPSBmaWx0ZXJOdWxsO1xuICAgIHJ1bkZpbHRyYXRpb24obnVsbCk7XG4gICAgZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID0gXCJcIjtcbn1cbmZ1bmN0aW9uIHNhdmVVcmwoKSB7XG4gICAgY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgZXJyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoYW5nZVNhdmVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2J1dHRvbl9zYXZlXCIpO1xuICAgIGlmICghYnV0dG9uKVxuICAgICAgICByZXR1cm47XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU2F2ZWRcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU2F2ZSBmaWx0ZXJzXCI7XG4gICAgfSwgMjAwMCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRmlsdGVycygpIHtcbiAgICByZW5kZXJDYXRlZ29yaWVzKCk7XG4gICAgcmVuZGVyQnJhbmRzKCk7XG4gICAgYWRkRmlsdGVyUGFyYW1zKCk7XG4gICAgYWRkRXZlbnRzKCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgICBpZiAoZm9vdGVyQXJlYSkge1xuICAgICAgICBmb290ZXJBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9faW5uZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3RleHRcIj5NYWRlIGJ5IDwvZGl2PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSnVsaWEteWVzXCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj4gSnVsaWEgQm9sb25pa292YSAmIER6bWl0cnkgQW5pc2tvdmljaDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX195ZWFyXCI+MjAyMjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc2Nob29sXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIGNsYXNzPVwiZm9vdGVyX19zY2hvb2wtbmFtZVwiPlxyXG4gICAgICAgICAgPGltZyBhbHQ9XCJycy1zY2hvb2xcIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9yc0xvZ28uc3ZnXCIgY2xhc3M9XCJmb290ZXJfX3NjaG9vbC1pbWdcIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vc2NyaXB0cy9kYXRhLXBhcnNlcic7XG5pbXBvcnQgeyByZW5kZXJQcm9kdWN0UGFnZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlJztcbmltcG9ydCB7IGFkZFBhdGhVcmwgfSBmcm9tICcuL3JvdXRpbmcnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJCdXR0b25CdXkgfSBmcm9tIFwiLi9tb2RhbC1wYWdlXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR29vZHMoKSB7XG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XG4gICAgY29uc3QgZ29vZHMgPSBwcm9kdWN0cy5wcm9kdWN0cztcbiAgICBsZXQgZ29vZHNJbm5lciA9IGBgO1xuICAgIGlmIChnb29kcy5sZW5ndGggPT0gMCkge1xuICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fZW1wdHknPiBObyBwcm9kdWN0cyBmb3VuZCA8L2Rpdj5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGdvb2RzKSB7XG4gICAgICAgICAgICBsZXQgZ29vZCA9IGdvb2RzW2tleV07XG4gICAgICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fY2FyZCBjYXJkJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aHVtYm5haWwnPlxyXG4gICAgICAgICAgPGltZyBhbHQ9J2dvb2QnIGNsYXNzPSdjYXJkX19pbWcnIHNyYz0nJHtnb29kLnRodW1ibmFpbH0nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fZGlzY29udCc+JHtnb29kLmRpc2NvdW50UGVyY2VudGFnZX0mIzM3OzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3RpdGxlJz4ke2dvb2QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2UnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2VfbmV3Jz4ke2dvb2QucHJpY2V9JiMzNjs8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlX29sZCc+JHtNYXRoLmZsb29yKGdvb2QucHJpY2UgLyAoMTAwIC0gZ29vZC5kaXNjb3VudFBlcmNlbnRhZ2UpICogMTAwKX0mIzM2OzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2JvdHRvbSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19yYXRpbmcnPiR7Z29vZC5yYXRpbmd9JnN0YXJmOzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fc3RvY2snPlN0b2NrICYjNTg7ICYjMzI7ICR7Z29vZC5zdG9ja308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19idXR0b25zJz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J2NhcmRfX2J1dHRvbiBjYXJkX19idXR0b25fYWRkJz5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9tb3JlJyBkYXRhLWdvb2RJRCA9IFwiJHtnb29kLmlkfVwiPlNlZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGdvb2RzQXJlYSkge1xuICAgICAgICBnb29kc0FyZWEuaW5uZXJIVE1MID0gZ29vZHNJbm5lcjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uc1RvUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19idXR0b25fbW9yZScpO1xuICAgIGJ1dHRvbnNUb1Byb2R1Y3QuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGdvb2RJRCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmdvb2RpZDtcbiAgICAgICAgICAgIGFkZFBhdGhVcmwoYC9wcm9kdWN0LyR7Z29vZElEfWApO1xuICAgICAgICAgICAgcmVuZGVyUHJvZHVjdFBhZ2UoKTtcbiAgICAgICAgICAgIGFkZExpc3RlbmVyQnV0dG9uQnV5KCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGJ1dHRvbkNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2J1dHRvbl9hZGRcIik7XG4gICAgYnV0dG9uQ2FydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IGNoYW5nZUJ1dHRvbkNhcnQoZS5jdXJyZW50VGFyZ2V0KTsgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGFuZ2VCdXR0b25DYXJ0KGUpIHtcbiAgICBpZiAoKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5pbm5lckhUTUwpID09IFwiQWRkIHRvIGNhcnRcIikge1xuICAgICAgICBlLmlubmVySFRNTCA9IFwiRGVsZXRlIGZyb20gY2FydFwiO1xuICAgIH1cbiAgICBlbHNlIGlmICgoZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLmlubmVySFRNTCkgPT0gXCJEZWxldGUgZnJvbSBjYXJ0XCIpIHtcbiAgICAgICAgZS5pbm5lckhUTUwgPSBcIkFkZCB0byBjYXJ0XCI7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgaWYgKGhlYWRlckFyZWEpIHtcbiAgICAgICAgaGVhZGVyQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX3RlbXBsYXRlXCI+XHJcbiAgICAgIDxhIGhyZWY9Jy8nPjxpbWcgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIiBhbHQ9XCJzaG9wIGxvZ29cIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9sb2dvLnBuZ1wiPjwvYT5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fcHJpY2VcIj5DYXJ0IHRvdGFsJiM1ODsgJiMzMjsgMDxzcGFuIGNsYXNzPVwiaGVhZGVyX192YWx1ZVwiPC9zcGFuPiYjMzY7PC9kaXY+XHJcbiAgICAgIDxhIGhyZWY9Jy9jYXJ0JyBjbGFzcz1cImhlYWRlcl9fY2FydFwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJoZWFkZXJfX2NhcnRfaW1nXCIgYWx0PVwiY2FydFwiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL2NhcnQucG5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fY2FydF9xdWFudGl0eVwiPjA8L2Rpdj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoYW5kbGVMb2NhdGlvbiwgcGFyc2VVcmwgfSBmcm9tICcuL3JvdXRpbmcnO1xuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcbmltcG9ydCB7IHJlbmRlckZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xuaW1wb3J0IHsgY2hhbmdlUmFuZ2UsIGZpbGxWYWx1ZXMgfSBmcm9tIFwiLi9yYW5nZVwiO1xuaW1wb3J0IHsgcnVuU2VhcmNoIH0gZnJvbSAnLi9zZWFyY2gnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJTb3J0aW5nQnV0dG9ucyB9IGZyb20gXCIuL3NvcnRpbmdcIjtcbmltcG9ydCB7IGFkZExpc3RlbmVyRm9yVmlldyB9IGZyb20gJy4vdmlldyc7XG5pbXBvcnQgeyByZW5kZXJIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCB7IGFkZExpc3RlbmVyQnV0dG9uQnV5IH0gZnJvbSBcIi4vbW9kYWwtcGFnZVwiO1xuY29uc3QgdGVtcGxhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9fcHJvamVjdFwiKTtcbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKCkge1xuICAgIGlmICh0ZW1wbGF0ZUFyZWEpIHtcbiAgICAgICAgdGVtcGxhdGVBcmVhLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSAnd3JhcHBlcl9fbWFpbic+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3MgPSAnaGVhZGVyJz5IZWFkZXJcclxuICAgICAgICA8YSBocmVmPScvJz5Mb2dvPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9Jy9jYXJ0Jz5DYXJ0PC9hPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3MgPSAnbWFpbic+TWFpblxyXG4gICAgICAgIDxhIGhyZWY9Jy9wcm9kdWN0Jz5Qcm9kdWN0PC9hPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3MgPSAnZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PmA7XG4gICAgfVxufVxuZnVuY3Rpb24gaW5pdFByb2plY3QoKSB7XG4gICAgcmVuZGVyVGVtcGxhdGUoKTtcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xuICAgIHJlbmRlckdvb2RzKCk7XG4gICAgcmVuZGVyRmlsdGVycygpO1xuICAgIGZpbGxWYWx1ZXMoKTtcbiAgICBjaGFuZ2VSYW5nZSgpO1xuICAgIHBhcnNlVXJsKCk7XG4gICAgcnVuU2VhcmNoKCk7XG4gICAgYWRkTGlzdGVuZXJTb3J0aW5nQnV0dG9ucygpO1xuICAgIGFkZExpc3RlbmVyRm9yVmlldygpO1xuICAgIHJlbmRlckhlYWRlcigpO1xuICAgIHJlbmRlckZvb3RlcigpO1xuICAgIGFkZExpc3RlbmVyQnV0dG9uQnV5KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbn1cbmluaXRQcm9qZWN0KCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyTW9kYWxQYWdlKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGxldCBtb2RhbFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtb2RhbFBhZ2UuY2xhc3NOYW1lID0gXCJtb2RhbC1wYWdlXCI7XG4gICAgbW9kYWxQYWdlLmlubmVySFRNTCA9IGA8Zm9ybSBjbGFzcz1cIm1vZGFsLXBhZ2VfX3dyYXBwZXJcIj5cclxuICAgIDxoMSBjbGFzcz1cIm1vZGFsLXBhZ2VfX3RpdGxlXCI+UGVyc29uYWwgaW5mb3JtYXRpb248L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2luZm9cIj5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmFtZT1cIm5hbWVcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2lucHV0IG1vZGFsLXBhZ2VfX2lucHV0X25hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWUgYW5kIHN1cm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX25hbWVcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGRhdGEtbmFtZT1cInRlbFwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgbW9kYWwtcGFnZV9faW5wdXRfdGVsXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBudW1iZXJcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX3RlbFwiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2lucHV0IG1vZGFsLXBhZ2VfX2lucHV0X2FkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkRlbGl2ZXJ5IGFkZHJlc3NcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX2FkZHJlc3NcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZGF0YS1uYW1lPVwibWFpbFwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgbW9kYWwtcGFnZV9faW5wdXRfbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2RhbC1wYWdlX19lcnJvciBtb2RhbC1wYWdlX19lcnJvcl9tYWlsXCI+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcGFnZV9fY2FyZCBjcmVkaXQtY2FyZFwiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJtb2RhbC1wYWdlX19zdWJ0aXRsZVwiPkNhcmQgaW5mb3JtYXRpb248L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX251bWJlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdC1jYXJkX19pbWdcIj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJwYXltZW50IHN5c3RlbVwiIGNsYXNzPVwiY3JlZGl0LWNhcmRfX2xvZ29cIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkLnBuZ1wiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbWF4bGVuZ3RoPVwiMTZcIiBtaW5sZW5ndGg9XCIxNlwiIGRhdGEtbmFtZT1cIm51bVwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0IGNyZWRpdC1jYXJkX19pbnB1dF9udW1iZXJcIiBwbGFjZWhvbGRlcj1cIkNhcmQgbnVtYmVyXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMTZcIiBtYXhsZW5ndGg9XCIxNlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX251bVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdC1jYXJkX19jYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcmVkaXQtY2FyZF9fdGV4dFwiPlZhbGlkOjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNVwiIGRhdGEtbmFtZT1cInZhbGlkXCIgY2xhc3M9XCJtb2RhbC1wYWdlX19pbnB1dCBjcmVkaXQtY2FyZF9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0X3NtYWxsIGNyZWRpdC1jYXJkX19pbnB1dF92YWxpZFwiIHBsYWNlaG9sZGVyPVwiVmFsaWRpdHkgcGVyaW9kXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3IgbW9kYWwtcGFnZV9fZXJyb3JfdmFsaWRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcmVkaXQtY2FyZF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyZWRpdC1jYXJkX190ZXh0XCI+Q1ZWOjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBtYXhsZW5ndGg9XCIzXCIgZGF0YS1uYW1lPVwiY3Z2XCIgY2xhc3M9XCJtb2RhbC1wYWdlX19pbnB1dCBjcmVkaXQtY2FyZF9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0X3NtYWxsIGNyZWRpdC1jYXJkX19pbnB1dF9jdnZcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjNcIiBtYXhsZW5ndGg9XCIzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3IgbW9kYWwtcGFnZV9fZXJyb3JfY3Z2XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtcGFnZV9fYnV0dG9uIGJ1dHRvblwiPkNvbmZpcm08L2J1dHRvbj5cclxuICA8L2Zvcm0+XHJcbiAgYDtcbiAgICBtYWluID09PSBudWxsIHx8IG1haW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1haW4uYXBwZW5kKG1vZGFsUGFnZSk7XG4gICAgY29uc3QgbW9kYWxBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlXCIpO1xuICAgIG1vZGFsQXJlYSA9PT0gbnVsbCB8fCBtb2RhbEFyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsQXJlYSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFkZExpc3RlbmVyRm9ybXMoKTtcbiAgICBhZGRMaXN0ZW5lckNhcmROdW1iZXIoKTtcbiAgICBhZGRMaXN0ZW5lclZhbGlkRm9ybSgpO1xuICAgIGFkZExpc3RlbmVyQ29uZmlybSgpO1xufVxuZnVuY3Rpb24gYWRkTGlzdGVuZXJWYWxpZEZvcm0oKSB7XG4gICAgY29uc3QgdmFsaWRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVkaXQtY2FyZF9faW5wdXRfdmFsaWRcIik7XG4gICAgdmFsaWRGb3JtID09PSBudWxsIHx8IHZhbGlkRm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4geyBhZGRDb3JyZWN0VmlldyhlKTsgfSk7XG59XG5mdW5jdGlvbiBhZGRDb3JyZWN0VmlldyhlKSB7XG4gICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gMikge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSBgJHt2YWx1ZS5zbGljZSgwLCAyKX0vJHt2YWx1ZS5zbGljZSgzKX1gO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSgpIHtcbiAgICBjb25zdCBidXR0b25CdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbl9fYnV5XCIpO1xuICAgIGJ1dHRvbkJ1eSA9PT0gbnVsbCB8fCBidXR0b25CdXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkJ1eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTW9kYWxQYWdlKTtcbn1cbmZ1bmN0aW9uIGFkZExpc3RlbmVyQ29uZmlybSgpIHtcbiAgICBjb25zdCBidXR0b25Db25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlX19idXR0b25cIik7XG4gICAgYnV0dG9uQ29uZmlybSA9PT0gbnVsbCB8fCBidXR0b25Db25maXJtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0NvcnJlY3RJbnB1dCk7XG59XG5mdW5jdGlvbiBjbG9zZU1vZGFsUGFnZSgpIHtcbiAgICBjb25zdCBtb2RhbFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXBhZ2VcIik7XG4gICAgbW9kYWxQYWdlID09PSBudWxsIHx8IG1vZGFsUGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWxQYWdlLnJlbW92ZSgpO1xufVxuZnVuY3Rpb24gYWRkTGlzdGVuZXJDYXJkTnVtYmVyKCkge1xuICAgIGNvbnN0IGNhcmROdW1iZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGl0LWNhcmRfX2lucHV0X251bWJlclwiKTtcbiAgICBjYXJkTnVtYmVySW5wdXQgPT09IG51bGwgfHwgY2FyZE51bWJlcklucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkTnVtYmVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7IGNoYW5nZVBheVN5c3RlbShlKTsgfSk7XG59XG5mdW5jdGlvbiBjaGFuZ2VQYXlTeXN0ZW0oZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGl0LWNhcmRfX2xvZ29cIik7XG4gICAgaWYgKGltZylcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCIzXCIpKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkX2FtLnBuZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCI0XCIpKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkLXYucG5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuc3RhcnRzV2l0aChcIjVcIikpIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1nL2NhcmQtbS5wbmdcIjtcbiAgICAgICAgfVxufVxuZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JtcygpIHtcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtcGFnZV9faW5wdXRcIik7XG4gICAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdGVGb3JtcyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0eXBlRXJyb3IodGV4dCwgcHJvcCkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsLXBhZ2VfX2Vycm9yXyR7cHJvcH1gKTtcbiAgICBpZiAoZXJyb3IgJiYgdGV4dCkge1xuICAgICAgICBlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHR5cGVSaWdodChwcm9wKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubW9kYWwtcGFnZV9fZXJyb3JfJHtwcm9wfWApO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvci5pbm5lckhUTUwgPSBgPGltZyBhbHQ9XCJyaWdodFwiIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3JfaW1nXCIgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWcvcmlnaHQucG5nXCI+YDtcbiAgICB9XG59XG4vLyBmdW5jdGlvbiB0eXBlRXJyb3JJbWcocHJvcDogc3RyaW5nKSB7XG4vLyAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsLXBhZ2VfX2Vycm9yXyR7cHJvcH1gKTtcbi8vICAgaWYgKGVycm9yKSB7XG4vLyAgICAgZXJyb3IuaW5uZXJIVE1MID0gYDxpbWcgYWx0PVwicmlnaHRcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yX2ltZ1wiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL2Vycm9yLnBuZ1wiPmA7XG4vLyAgIH1cbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1zKGV2ZW50KSB7XG4gICAgbGV0IG5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZTtcbiAgICBsZXQgdmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuYW1lID09IFwibmFtZVwiKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoIDwgMiB8fCByZXN1bHRbMF0ubGVuZ3RoIDwgMiB8fCByZXN1bHRbMV0ubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdHlwZUVycm9yKFwiRXJyb3IgbmFtZVwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVSaWdodChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmFtZSA9PSBcInRlbFwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eW1xcK11bXFxkXFwoXFwpXFwgLV17OSwxNH1cXGQkLztcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvciBwaG9uZSBudW1iZXJcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hbWUgPT0gXCJhZGRyZXNzXCIpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCAzIHx8IHJlc3VsdFswXS5sZW5ndGggPCA1IHx8IHJlc3VsdFsxXS5sZW5ndGggPCA1IHx8IHJlc3VsdFsyXS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvciBhZGRyZXNzXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHlwZVJpZ2h0KG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYW1lID09IFwibWFpbFwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eW1xcd117MX1bXFx3LVxcLl0qQFtcXHctXStcXC5bYS16XXsyLDR9JC9pO1xuICAgICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHR5cGVSaWdodChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVFcnJvcihcIkVycm9yIGUtbWFpbFwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmFtZSA9PSBcIm51bVwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eWzAtOV17MTZ9LztcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJVbmNvcnJlY3QgbnVtYmVyXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYW1lID09IFwiY3Z2XCIpIHtcbiAgICAgICAgdmFyIHJlID0gL15bMC05XXszfS87XG4gICAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdHlwZVJpZ2h0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHlwZUVycm9yKFwiRXJyb3JcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hbWUgPT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eKDA/WzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLztcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvclwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNoZWNrUmVxdWlyZWRJbnB1dHMoKSB7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLXBhZ2VfX2lucHV0XCIpO1xuICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICAgIGlmIChmb3JtLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBwcm9wID0gZm9ybS5kYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICBpZiAocHJvcClcbiAgICAgICAgICAgICAgICB0eXBlRXJyb3IoXCJSZXF1aXJlZFwiLCBwcm9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hlY2tDb3JyZWN0SW5wdXQoKSB7XG4gICAgY2hlY2tSZXF1aXJlZElucHV0cygpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlX193cmFwcGVyXCIpO1xuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtcGFnZV9fZXJyb3JcIik7XG4gICAgbGV0IGVycm9yTnVtID0gMDtcbiAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgZXJyb3JOdW0gKz0gMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChlcnJvck51bSA+IDApIHtcbiAgICAgICAgbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1wYWdlX193cmFwcGVyX3dyb25nXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcGxldGVPcmRlcigpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbXBsZXRlT3JkZXIoKSB7XG4gICAgcmVuZGVyTWVzc2FnZUNvbmZpcm0oKTtcbiAgICByZWRpcmVjdFRvTWFpbigpO1xufVxuZnVuY3Rpb24gcmVuZGVyTWVzc2FnZUNvbmZpcm0oKSB7XG4gICAgY29uc3QgbWVzc2FnZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgaWYgKG1lc3NhZ2VBcmVhKVxuICAgICAgICBtZXNzYWdlQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXBhZ2VfX21lc3NhZ2VcIj5UaGFua3MgZm9yIHlvdXIgb3JkZXI8L2Rpdj5gO1xufVxuZnVuY3Rpb24gcmVkaXJlY3RUb01haW4oKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICB9LCAzMDAwKTtcbn1cbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xubGV0IGNvbnRlbnQ7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdFBhZ2UoKSB7XG4gICAgY29uc3QgcHJvZHVjdElkID0gK3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzJdO1xuICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cy5nZXRQcm9kdWN0QnlJZChwcm9kdWN0SWQpO1xuICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZW5kZXJDcnVtYnMocHJvZHVjdCk7XG4gICAgICAgIHJlbmRlclByb2R1Y3QocHJvZHVjdCk7XG4gICAgICAgIHJlbmRlclB1cmNoYXNlKHByb2R1Y3QpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbmRlckNydW1icyhwcm9kdWN0KSB7XG4gICAgY29uc3QgY3J1bWJzQmxvY2sgPSBjcmVhdGVOb2RlKCdjcnVtYnMnKTtcbiAgICBjb25zdCBzdG9yZUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBcIlN0b3JlXCIpO1xuICAgIGNvbnN0IGNhdGVnb3J5Q3J1bWIgPSBjcmVhdGVOb2RlKCdjcnVtYicsIHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5jYXRlZ29yeSk7XG4gICAgY29uc3QgYnJhbmRDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgcHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmJyYW5kKTtcbiAgICBjb25zdCB0aXRsZUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QudGl0bGUpO1xuICAgIGNydW1ic0Jsb2NrLmFwcGVuZChzdG9yZUNydW1iLCBjYXRlZ29yeUNydW1iLCBicmFuZENydW1iLCB0aXRsZUNydW1iKTtcbiAgICBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuYXBwZW5kKGNydW1ic0Jsb2NrKTtcbn1cbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3QocHJvZHVjdCkge1xuICAgIGNvbnN0IHByb2R1Y3RCbG9jayA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3QnKTtcbiAgICBjb25zdCBwaG90b3NCbG9jayA9IGNyZWF0ZU5vZGUoJ3Bob3RvcycpO1xuICAgIGNvbnN0IG1haW5QaG90b0Jsb2NrID0gY3JlYXRlTm9kZSgnbWFpbicpO1xuICAgIGNvbnN0IG1haW5QaG90byA9IGNyZWF0ZU5vZGUoJ21haW4tcGhvdG8nKTtcbiAgICBjb25zdCBtYWluUGhvdG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYWluUGhvdG9JbWcuY2xhc3NOYW1lID0gJ21haW4tcGhvdG9fX2ltZyc7XG4gICAgbWFpblBob3RvSW1nLnNyYyA9IHByb2R1Y3QudGh1bWJuYWlsO1xuICAgIG1haW5QaG90by5hcHBlbmQobWFpblBob3RvSW1nKTtcbiAgICBtYWluUGhvdG9CbG9jay5hcHBlbmQobWFpblBob3RvKTtcbiAgICBjb25zdCBzbWFsbFBob3Rvc0Jsb2NrID0gY3JlYXRlTm9kZSgnc21hbGwtcGhvdG9zJyk7XG4gICAgZm9yIChjb25zdCBpbWFnZSBvZiBwcm9kdWN0LmltYWdlcykge1xuICAgICAgICBpZiAoaW1hZ2UgPT09IHByb2R1Y3QudGh1bWJuYWlsKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGNvbnN0IHNtYWxsUGhvdG8gPSBjcmVhdGVOb2RlKCdzbWFsbC1waG90bycpO1xuICAgICAgICBjb25zdCBzbWFsbFBob3RvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHNtYWxsUGhvdG9JbWcuc3JjID0gaW1hZ2U7XG4gICAgICAgIHNtYWxsUGhvdG8uYXBwZW5kKHNtYWxsUGhvdG9JbWcpO1xuICAgICAgICBzbWFsbFBob3Rvc0Jsb2NrLmFwcGVuZChzbWFsbFBob3RvKTtcbiAgICB9XG4gICAgcGhvdG9zQmxvY2suYXBwZW5kKG1haW5QaG90b0Jsb2NrLCBzbWFsbFBob3Rvc0Jsb2NrKTtcbiAgICBjb25zdCBwcm9kdWN0RGF0YUJsb2NrID0gY3JlYXRlTm9kZSgnZGF0YScpO1xuICAgIGNvbnN0IHByb2R1Y3RUaXRsZSA9IGNyZWF0ZU5vZGUoJ2RhdGFfX3RpdGxlJywgcHJvZHVjdC50aXRsZSk7XG4gICAgY29uc3QgcHJvZHVjdERlc2NyaXB0aW9uID0gY3JlYXRlTm9kZSgnZGF0YV9fZGVzY3JpcHRpb24nLCBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBwcm9kdWN0QnJhbmQgPSBjcmVhdGVOb2RlKCdkYXRhX19icmFuZCcsIHByb2R1Y3QuYnJhbmQpO1xuICAgIGNvbnN0IHByb2R1Y3RDYXRlZ29yeSA9IGNyZWF0ZU5vZGUoJ2RhdGFfX2NhdGVnb3J5JywgcHJvZHVjdC5jYXRlZ29yeSk7XG4gICAgY29uc3QgcHJvZHVjdFN0YXRzID0gY3JlYXRlTm9kZSgnc3RhdHMnKTtcbiAgICBjb25zdCBwcm9kdWN0UmF0aW5nID0gY3JlYXRlTm9kZSgnZGF0YV9fcmF0aW5nJywgJ1JhdGluZzogJyArIHByb2R1Y3QucmF0aW5nKTtcbiAgICBjb25zdCBwcm9kdWN0U3RvY2sgPSBjcmVhdGVOb2RlKCdkYXRhX19zdG9jaycsICdTdG9jazogJyArIHByb2R1Y3Quc3RvY2spO1xuICAgIHByb2R1Y3RTdGF0cy5hcHBlbmQocHJvZHVjdFJhdGluZywgcHJvZHVjdFN0b2NrKTtcbiAgICBwcm9kdWN0RGF0YUJsb2NrLmFwcGVuZChwcm9kdWN0VGl0bGUsIHByb2R1Y3REZXNjcmlwdGlvbiwgcHJvZHVjdEJyYW5kLCBwcm9kdWN0Q2F0ZWdvcnksIHByb2R1Y3RTdGF0cyk7XG4gICAgcHJvZHVjdEJsb2NrLmFwcGVuZChwaG90b3NCbG9jaywgcHJvZHVjdERhdGFCbG9jayk7XG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChwcm9kdWN0QmxvY2spO1xufVxuZnVuY3Rpb24gcmVuZGVyUHVyY2hhc2UocHJvZHVjdCkge1xuICAgIGNvbnN0IHB1cmNoYXNlQmxvY2sgPSBjcmVhdGVOb2RlKCdwdXJjaGFzZScpO1xuICAgIGNvbnN0IHByaWNlQmxvY2sgPSBjcmVhdGVOb2RlKCdwcmljZScpO1xuICAgIGNvbnN0IGRpc2NvdW50ID0gY3JlYXRlTm9kZSgncHJpY2VfX2Rpc2NvdW50JywgYERpc2NvdW50OiBcXG4ke3Byb2R1Y3QuZGlzY291bnRQZXJjZW50YWdlfWApO1xuICAgIGNvbnN0IHByaWNlID0gY3JlYXRlTm9kZSgncHJpY2VfX2Ftb3VudCcsIGBQcmljZTogXFxuJHtwcm9kdWN0LnByaWNlfWApO1xuICAgIHByaWNlQmxvY2suYXBwZW5kKGRpc2NvdW50LCBwcmljZSk7XG4gICAgY29uc3QgYnV0dG9uc0Jsb2NrID0gY3JlYXRlTm9kZSgnYnV0dG9ucycpO1xuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkFkZC5jbGFzc05hbWUgPSAnYnV0dG9uIGJ1dHRvbl9fYWRkJztcbiAgICBidXR0b25BZGQudGV4dENvbnRlbnQgPSAnQWRkIHRvIENhcnQnO1xuICAgIGNvbnN0IGJ1dHRvbkJ1eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkJ1eS5jbGFzc05hbWUgPSAnYnV0dG9uIGJ1dHRvbl9fYnV5JztcbiAgICBidXR0b25CdXkudGV4dENvbnRlbnQgPSAnQnV5IE5vdyc7XG4gICAgYnV0dG9uc0Jsb2NrLmFwcGVuZChidXR0b25BZGQsIGJ1dHRvbkJ1eSk7XG4gICAgcHVyY2hhc2VCbG9jay5hcHBlbmQocHJpY2VCbG9jaywgYnV0dG9uc0Jsb2NrKTtcbiAgICBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuYXBwZW5kKHB1cmNoYXNlQmxvY2spO1xufVxuZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWUsIHRleHRDb250ZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlmICh0ZXh0Q29udGVudClcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHJldHVybiBub2RlO1xufVxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL2Fzc2V0cy9kYXRhL2RhdGEnO1xuaW1wb3J0IHsgY2hhbmdlRmlsdGVycyB9IGZyb20gJy4vZmlsdGVySXRlbSc7XG5sZXQgcHJpY2VNaW4gPSAwO1xubGV0IHByaWNlTWF4ID0gMDtcbmxldCBzdG9ja01pbiA9IDA7XG5sZXQgc3RvY2tNYXggPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbGxWYWx1ZXMoKSB7XG4gICAgbGV0IHBybyA9IHByb2R1Y3RzLmdldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xuICAgIHByby5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xuICAgICAgICByZXR1cm4gZWwxLnByaWNlIC0gZWwyLnByaWNlO1xuICAgIH0pO1xuICAgIHByaWNlTWF4ID0gcHJvW3Byby5sZW5ndGggLSAxXS5wcmljZTtcbiAgICBwcmljZU1pbiA9IHByb1swXS5wcmljZTtcbiAgICBwcm8uc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcbiAgICAgICAgcmV0dXJuIGVsMS5zdG9jayAtIGVsMi5zdG9jaztcbiAgICB9KTtcbiAgICBzdG9ja01pbiA9IHByb1swXS5zdG9jaztcbiAgICBzdG9ja01heCA9IHByb1twcm8ubGVuZ3RoIC0gMV0uc3RvY2s7XG59XG5mdW5jdGlvbiByZW5kZXJSYW5nZShwcm9wLCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcbiAgICBsZXQgbWluID0gMDtcbiAgICBsZXQgbWF4ID0gMDtcbiAgICBpZiAocHJvcCA9PSBcInByaWNlXCIpIHtcbiAgICAgICAgbWluID0gcHJpY2VNaW47XG4gICAgICAgIG1heCA9IHByaWNlTWF4O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbWluID0gc3RvY2tNaW47XG4gICAgICAgIG1heCA9IHN0b2NrTWF4O1xuICAgIH1cbiAgICBpZiAobWluVmFsdWUgPT0gLTEgfHwgbWF4VmFsdWUgPT0gLTEpIHtcbiAgICAgICAgbWluVmFsdWUgPSBtaW47XG4gICAgICAgIG1heFZhbHVlID0gbWF4O1xuICAgIH1cbiAgICBjb25zdCByYW5nZVBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZpbHRlcl9fcmFuZ2VfJHtwcm9wfWApO1xuICAgIGlmIChyYW5nZVBsYWNlKSB7XG4gICAgICAgIGxldCByYW5nZUlubmVyID0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udGFpbmVyIHJhbmdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udHJvbF9zbGlkZXJzXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInJhbmdlX19pbnB1dCByYW5nZV9faW5wdXRfJHtwcm9wfSByYW5nZV9faW5wdXRfbWluXCIgaWQ9XCJmcm9tU2xpZGVyJHtwcm9wfVwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiJHttaW5WYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9XCIke21heH1cIiBkYXRhLXBhcmFtPVwiJHtwcm9wfVwiIGRhdGEtc2lkZSA9XCJtaW5cIi8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInJhbmdlX19pbnB1dCByYW5nZV9faW5wdXRfJHtwcm9wfSByYW5nZV9faW5wdXRfbWF4XCIgaWQ9XCJ0b1NsaWRlciR7cHJvcH1cIiB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIiR7bWF4VmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCIgZGF0YS1wYXJhbT1cIiR7cHJvcH1cIiBkYXRhLXNpZGUgPVwibWF4XCIvPlxyXG4gICAgICA8L2Rpdj5gO1xuICAgICAgICBpZiAocHJvZHVjdHMucHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmFuZ2VJbm5lciArPSBgPGRpdiBjbGFzcz1cInJhbmdlX19jb250cm9sX2Zvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmFuZ2VfX2lucHV0X251bWJlciByYW5nZV9fJHtwcm9wfVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cImZyb21JbnB1dCR7cHJvcH1cIiB2YWx1ZT1cIiR7bWluVmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PSR7bWF4fS8+JiMzNjtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fY29udHJvbF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyIHJhbmdlX18ke3Byb3B9XCIgdHlwZT1cIm51bWJlclwiIGlkPVwidG9JbnB1dCR7cHJvcH1cIiB2YWx1ZT1cIiR7bWF4VmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PSR7bWF4fS8+JiMzNjtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VJbm5lciArPSBgPGRpdiBjbGFzcz1cInJhbmdlX19lbXB0eVwiPk5vIHByb2R1Y3RzIGZvdW5kPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICByYW5nZUlubmVyICs9IGA8L2Rpdj5gO1xuICAgICAgICByYW5nZVBsYWNlLmlubmVySFRNTCA9IHJhbmdlSW5uZXI7XG4gICAgfVxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19pbnB1dCcpO1xuICAgIHJhbmdlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VGaWx0ZXJzKGUpO1xuICAgICAgICAgICAgY2hhbmdlUmFuZ2VWYWx1ZShwcm9wKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGFuZ2VSYW5nZVZhbHVlKHByb3ApIHtcbiAgICBjb25zdCByYW5nZVZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5yYW5nZV9fJHtwcm9wfWApO1xuICAgIGNvbnN0IHJhbmdlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJhbmdlX19pbnB1dF8ke3Byb3B9YCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZVZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICByYW5nZVZhbHVlc1swXS52YWx1ZSA9IHJhbmdlSW5wdXRzWzBdLnZhbHVlO1xuICAgICAgICByYW5nZVZhbHVlc1sxXS52YWx1ZSA9IHJhbmdlSW5wdXRzWzFdLnZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZFJhbmdlRnVuY3Rpb25hbGl0eShwcm9wKSB7XG4gICAgY29uc3QgZnJvbVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmcm9tU2xpZGVyJHtwcm9wfWApO1xuICAgIGNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvU2xpZGVyJHtwcm9wfWApO1xuICAgIGNvbnN0IGZyb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmcm9tSW5wdXQke3Byb3B9YCk7XG4gICAgY29uc3QgdG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b0lucHV0JHtwcm9wfWApO1xuICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XG4gICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XG4gICAgaWYgKGZyb21TbGlkZXIgJiYgdG9TbGlkZXIgJiYgZnJvbUlucHV0ICYmIHRvSW5wdXQpIHtcbiAgICAgICAgZnJvbVNsaWRlci5vbmlucHV0ID0gKCkgPT4gY29udHJvbEZyb21TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIGZyb21JbnB1dCk7XG4gICAgICAgIHRvU2xpZGVyLm9uaW5wdXQgPSAoKSA9PiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpO1xuICAgICAgICBmcm9tSW5wdXQub25pbnB1dCA9ICgpID0+IGNvbnRyb2xGcm9tSW5wdXQoZnJvbVNsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCB0b1NsaWRlcik7XG4gICAgICAgIHRvSW5wdXQub25pbnB1dCA9ICgpID0+IGNvbnRyb2xUb0lucHV0KHRvU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIHRvU2xpZGVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY29udHJvbEZyb21JbnB1dChmcm9tU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIGNvbnRyb2xTbGlkZXIpIHtcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xuICAgICAgICBmaWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIGNvbnRyb2xTbGlkZXIpO1xuICAgICAgICBpZiAoZnJvbSA+IHRvKSB7XG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKGZyb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnRyb2xUb0lucHV0KHRvU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIGNvbnRyb2xTbGlkZXIpIHtcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xuICAgICAgICBmaWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIGNvbnRyb2xTbGlkZXIpO1xuICAgICAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvSW5wdXQpO1xuICAgICAgICBpZiAoZnJvbSA8PSB0bykge1xuICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnRyb2xGcm9tU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCBmcm9tSW5wdXQpIHtcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tU2xpZGVyLCB0b1NsaWRlcik7XG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XG4gICAgICAgIGlmIChmcm9tID4gdG8pIHtcbiAgICAgICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpIHtcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tU2xpZGVyLCB0b1NsaWRlcik7XG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XG4gICAgICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xuICAgICAgICBpZiAoZnJvbSA8PSB0bykge1xuICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xuICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcoZnJvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0UGFyc2VkKGN1cnJlbnRGcm9tLCBjdXJyZW50VG8pIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IHBhcnNlSW50KGN1cnJlbnRGcm9tLnZhbHVlLCAxMCk7XG4gICAgICAgIGNvbnN0IHRvID0gcGFyc2VJbnQoY3VycmVudFRvLnZhbHVlLCAxMCk7XG4gICAgICAgIHJldHVybiBbZnJvbSwgdG9dO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWxsU2xpZGVyKGZyb20sIHRvLCBzbGlkZXJDb2xvciwgcmFuZ2VDb2xvciwgY29udHJvbFNsaWRlcikge1xuICAgICAgICBpZiAoZnJvbSAmJiB0byAmJiBjb250cm9sU2xpZGVyKSB7XG4gICAgICAgICAgICBjb25zdCByYW5nZURpc3RhbmNlID0gTnVtYmVyKHRvLm1heCkgLSBOdW1iZXIodG8ubWluKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IE51bWJlcihmcm9tLnZhbHVlKSAtIE51bWJlcih0by5taW4pO1xuICAgICAgICAgICAgY29uc3QgdG9Qb3NpdGlvbiA9IE51bWJlcih0by52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcbiAgICAgICAgICAgIGNvbnRyb2xTbGlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gMCUsXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gJHsoZnJvbVBvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLFxyXG4gICAgICAgICR7cmFuZ2VDb2xvcn0gJHsoKGZyb21Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkpICogMTAwfSUsXHJcbiAgICAgICAgJHtyYW5nZUNvbG9yfSAkeyh0b1Bvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcclxuICAgICAgICAke3NsaWRlckNvbG9yfSAkeyh0b1Bvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcclxuICAgICAgICAke3NsaWRlckNvbG9yfSAxMDAlKWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VG9nZ2xlQWNjZXNzaWJsZShjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RvU2xpZGVyJHtwcm9wfWApO1xuICAgICAgICBpZiAoY3VycmVudFRhcmdldCAmJiBOdW1iZXIoY3VycmVudFRhcmdldC52YWx1ZSkgPD0gMCAmJiB0b1NsaWRlcikge1xuICAgICAgICAgICAgdG9TbGlkZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRvU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgdG9TbGlkZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaWNlUmFuZ2UoKSB7XG4gICAgcmVuZGVyUmFuZ2UoXCJwcmljZVwiLCBwcm9kdWN0cy5wcmljZVJhbmdlLm1pbiwgcHJvZHVjdHMucHJpY2VSYW5nZS5tYXgpO1xuICAgIC8vYWRkUmFuZ2VGdW5jdGlvbmFsaXR5KFwicHJpY2VcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU3RvY2tSYW5nZSgpIHtcbiAgICByZW5kZXJSYW5nZShcInN0b2NrXCIsIHByb2R1Y3RzLnN0b2NrUmFuZ2UubWluLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1heCk7XG4gICAgLy9hZGRSYW5nZUZ1bmN0aW9uYWxpdHkoXCJzdG9ja1wiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSYW5nZSgpIHtcbiAgICBjaGFuZ2VQcmljZVJhbmdlKCk7XG4gICAgY2hhbmdlU3RvY2tSYW5nZSgpO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyByZW5kZXJFcnJvclBhZ2UgfSBmcm9tICcuL2Vycm9yLXBhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyQ2FydFBhZ2UgfSBmcm9tICcuL2NhcnQtcGFnZSc7XG5pbXBvcnQgeyByZW5kZXJQcm9kdWN0UGFnZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlJztcbmltcG9ydCB7IHJlbmRlclN0b3JlUGFnZSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XG5pbXBvcnQgeyBjaGFuZ2VNYWluRmlsdGVyLCB0aWNrQ2hlY2tib3hlcyB9IGZyb20gJy4vZmlsdGVySXRlbSc7XG5pbXBvcnQgeyBtYWtlU29ydGluZyB9IGZyb20gJy4vc29ydGluZyc7XG5pbXBvcnQgeyBhcHBseVZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XG5jb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuY29uc3Qgcm91dGVzID0ge1xuICAgICcnOiByZW5kZXJTdG9yZVBhZ2UsXG4gICAgJ3Byb2R1Y3QnOiByZW5kZXJQcm9kdWN0UGFnZSxcbiAgICAnY2FydCc6IHJlbmRlckNhcnRQYWdlLFxuICAgICdlcnJvcic6IHJlbmRlckVycm9yUGFnZSxcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlTG9jYXRpb24gPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZXNbcGF0aF0gfHwgcm91dGVzLmVycm9yO1xuICAgIHJvdXRlKCk7XG59KTtcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXRoVXJsKHByb3ApIHtcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHByb3ApO1xuICAgIGhhbmRsZUxvY2F0aW9uKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmwoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCA9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XG4gICAgICAgIGxldCBmaWx0ZXIgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeTogW10sXG4gICAgICAgICAgICBicmFuZDogW10sXG4gICAgICAgICAgICBwcmljZTogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxuICAgICAgICAgICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHZpZXcgPSBcIlwiO1xuICAgICAgICBsZXQgc29ydCA9IFwiXCI7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJjYXRlZ29yeVwiKSkge1xuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGZpbHRlci5jYXRlZ29yeSA9IGFyclsxXS5zcGxpdCgnKicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJicmFuZFwiKSkge1xuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGxldCBhcnJSZXN1bHQgPSBhcnJbMV0uc3BsaXQoJyonKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXJyUmVzdWx0Lm1hcChpdGVtID0+IGRlY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XG4gICAgICAgICAgICAgICAgZmlsdGVyLmJyYW5kID0gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJwcmljZVwiKSkge1xuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGlmIChhcnJbMF0uaW5jbHVkZXMoXCJtaW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnByaWNlLm1pbiA9IE51bWJlcihhcnJbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnByaWNlLm1heCA9IE51bWJlcihhcnJbMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwic3RvY2tcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzBdLmluY2x1ZGVzKFwibWluXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5zdG9jay5taW4gPSBOdW1iZXIoYXJyWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5zdG9jay5tYXggPSBOdW1iZXIoYXJyWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInZpZXdcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICB2aWV3ID0gYXJyWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJzb3J0XCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgc29ydCA9IGFyclsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHlpZWxkIGNoYW5nZU1haW5GaWx0ZXIoZmlsdGVyKTtcbiAgICAgICAgbWFrZVNvcnRpbmcoc29ydCk7XG4gICAgICAgIGFwcGx5Vmlldyh2aWV3KTtcbiAgICAgICAgdGlja0NoZWNrYm94ZXMoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRQYXJhbShrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgfVxuICAgIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICBsZXQga3ZwID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGZvciAoOyBpIDwga3ZwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChrdnBbaV0uc3RhcnRzV2l0aChrZXkgKyAnPScpKSB7XG4gICAgICAgICAgICBsZXQgcGFpciA9IGt2cFtpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgaWYgKHBhaXJbMF0gPT0gXCJzb3J0XCIgfHwgcGFpclswXSA9PSBcInZpZXdcIiB8fCBwYWlyWzBdID09IFwicHJpY2UtbWluXCIgfHwgcGFpclswXSA9PSBcInByaWNlLW1heFwiIHx8IHBhaXJbMF0gPT0gXCJzdG9jay1taW5cIiB8fCBwYWlyWzBdID09IFwic3RvY2stbWF4XCIpIHtcbiAgICAgICAgICAgICAgICBwYWlyWzFdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFpclsxXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlQXJyID0gcGFpclsxXS5zcGxpdChcIipcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUFycltpXSA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYWlyWzFdID0gdmFsdWVBcnIuam9pbignKicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFpclsxXSA9IHBhaXJbMV0gKyBgKiR7dmFsdWV9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrdnBbaV0gPSBwYWlyLmpvaW4oJz0nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID49IGt2cC5sZW5ndGgpIHtcbiAgICAgICAga3ZwW2t2cC5sZW5ndGhdID0gW2tleSwgdmFsdWVdLmpvaW4oJz0nKTtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCA9PSBcIlwiKSB7XG4gICAgICAgIGt2cC5zaGlmdCgpO1xuICAgIH1cbiAgICBsZXQgcGFyYW1zID0ga3ZwLmpvaW4oJyYnKTtcbiAgICBsZXQgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9cIiArIHBhcmFtcztcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybCk7XG59XG4vLyBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0X19pdGVtXCIpO1xuLy8gYnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4vLyAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuLy8gICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZjtcbi8vICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICB9KVxuLy8gfSlcbndpbmRvdy5vbnBvcHN0YXRlID0gaGFuZGxlTG9jYXRpb247XG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBydW5TZWFyY2goKSB7XG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xuICAgIHNlYXJjaElucHV0ID09PSBudWxsIHx8IHNlYXJjaElucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgLy8gcHJvZHVjdHMuYXBwbHlGaWx0ZXIoKVxuICAgICAgICBydW5GaWx0ZXIoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcnVuRmlsdGVyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIHByb3AgPT09ICdudW1iZXInKVxuICAgICAgICBwcm9wID0gJycgKyBwcm9wO1xuICAgIHByb2R1Y3RzLnNlYXJjaFByb2R1Y3RzQnlTdHJpbmcocHJvcCk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xufVxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9zY3JpcHRzL2RhdGEtcGFyc2VyXCI7XG5pbXBvcnQgeyByZW5kZXJHb29kcyB9IGZyb20gXCIuL2dvb2RzXCI7XG5pbXBvcnQgeyBpbnNlcnRQYXJhbSB9IGZyb20gJy4vcm91dGluZyc7XG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXJTb3J0aW5nQnV0dG9ucygpIHtcbiAgICBjb25zdCBidXR0b25Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRlcnNfX2J1dHRvbicpO1xuICAgIGJ1dHRvblNvcnQuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgc29ydEdvb2RzKGUpO1xuICAgICAgICAgICAgY2hhbmdlQWN0aXZlQnV0dG9uKGUpO1xuICAgICAgICAgICAgaW5zZXJ0UGFyYW0oXCJzb3J0XCIsIGAke2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9wdGlvbn0tJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kaXJlY3Rpb259YCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnV0dG9uKGV2ZW50KSB7XG4gICAgY29uc3QgYnV0dG9uU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0ZXJzX19idXR0b24nKTtcbiAgICBidXR0b25Tb3J0LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcInNvcnRlcnNfX2J1dHRvbl9hY3RpdmVcIik7XG59XG5mdW5jdGlvbiBzb3J0R29vZHMoZXZlbnQsIG9wdCwgZGlyKSB7XG4gICAgbGV0IG9wdGlvbiA9IGV2ZW50ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9wdGlvbiA6IG9wdDtcbiAgICBsZXQgZGlyZWN0aW9uID0gZXZlbnQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9uIDogZGlyO1xuICAgIGlmIChvcHRpb24gPT0gXCJwcmljZVwiKSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtaW5cIikge1xuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwyLnByaWNlIC0gZWwxLnByaWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1heFwiKSB7XG4gICAgICAgICAgICBwcm9kdWN0cy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDEucHJpY2UgLSBlbDIucHJpY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1pblwiKSB7XG4gICAgICAgICAgICBwcm9kdWN0cy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbDIucmF0aW5nIC0gZWwxLnJhdGluZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtYXhcIikge1xuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwxLnJhdGluZyAtIGVsMi5yYXRpbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJHb29kcygpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTb3J0aW5nKHByb3ApIHtcbiAgICBsZXQgYXJyID0gcHJvcC5zcGxpdCgnLScpO1xuICAgIHNvcnRHb29kcyh1bmRlZmluZWQsIGFyclswXSwgYXJyWzFdKTtcbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1vcHRpb249XCIke2FyclswXX1cIl1bZGF0YS1kaXJlY3Rpb249XCIke2FyclsxXX1cIl1gKTtcbiAgICBhY3RpdmVCdXR0b24gPT09IG51bGwgfHwgYWN0aXZlQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNvcnRlcnNfX2J1dHRvbl9hY3RpdmVcIik7XG59XG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdG9yZVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzcz0nc3RvcmVfX3BhZ2Ugc3RvcmUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3N0b3JlX19zZWFyY2ggc2VhcmNoJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J3NlYXJjaF9fYmxvY2snPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD0nc2VhcmNoJyBjbGFzcz0nc2VhcmNoX19pbWcnIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvc2VhcmNoMy5wbmcnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nc2VhcmNoJyBjbGFzcz0nc2VhcmNoX19pbnB1dCcgcGxhY2Vob2xkZXIgPSdTZWFyY2ggcHJvZHVjdCc+PC9pbnB1dD4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdzdG9yZV9fbWFpbic+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3M9J3N0b3JlX19maWx0ZXJzIGZpbHRlcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2NhdGVnb3J5Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5DYXRlZ29yeTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2NhdGVnb3J5X2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fYnJhbmQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPkJyYW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYnJhbmRfYXJlYSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19wcmljZSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+UHJpY2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19hcmVhX3JhbmdlIGZpbHRlcl9fcmFuZ2VfcHJpY2UnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fc3RvY2snPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlN0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYXJlYV9yYW5nZSBmaWx0ZXJfX3JhbmdlX3N0b2NrJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2J1dHRvbnMnPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ZpbHRlcl9fYnV0dG9uIGZpbHRlcl9fYnV0dG9uX3Jlc2V0IGJ1dHRvbic+UmVzZXQgZmlsdGVyczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ZpbHRlcl9fYnV0dG9uIGZpbHRlcl9fYnV0dG9uX3NhdmUgYnV0dG9uJz5TYXZlIGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J3N0b3JlX19nb29kcyBnb29kcyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19vcHRpb25zJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fc29ydGVycyBzb3J0ZXJzJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfbG93JyBkYXRhLW9wdGlvbiA9IFwicHJpY2VcIiBkYXRhLWRpcmVjdGlvbj1cIm1pblwiPnByaWNlICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfaGlnaCcgZGF0YS1vcHRpb24gPSBcInByaWNlXCIgZGF0YS1kaXJlY3Rpb249XCJtYXhcIj5wcmljZSAmIzg1OTM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3JhdGluZyBzb3J0ZXJzX19yYXRpbmdfbG93JyBkYXRhLW9wdGlvbiA9IFwicmF0aW5nXCIgZGF0YS1kaXJlY3Rpb249XCJtaW5cIj5yYXRpbmcgJiM4NTk1OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19yYXRpbmcgc29ydGVyc19fcmF0aW5nX2hpZ2gnIGRhdGEtb3B0aW9uID0gXCJyYXRpbmdcIiBkYXRhLWRpcmVjdGlvbj1cIm1heFwiPnJhdGluZyAmIzg1OTM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPSdnb29kc19fdGl0bGUnPkZvdW5kOiA8c3BhbiBjbGFzcz0nZ29vZHNfX3F1YW50aXR5Jz4ke3Byb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aH08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fdmlldyB2aWV3Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdfX2J1dHRvbic+PGltZyBhbHQ9J2dyaWQnIGNsYXNzPSd2aWV3X19idXR0b25faW1nIHZpZXdfX2J1dHRvbl9tYW55JyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nLzAwMy1ncmlkLTEucG5nJyBkYXRhLXZpZXcgPSBcIm1hbnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdfX2J1dHRvbic+PGltZyBhbHQ9J2dyaWQnIGNsYXNzPSd2aWV3X19idXR0b25fYWN0aXZlIHZpZXdfX2J1dHRvbl9pbWcgdmlld19fYnV0dG9uX2Zldycgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy8wMDQtbWVudS0xLnBuZycgZGF0YS12aWV3ID0gXCJmZXdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19hcmVhJz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvZGl2PmA7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdvb2RzUXVhbnRpdHkoKSB7XG4gICAgY29uc3QgZ29vZHNxdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fcXVhbnRpdHknKTtcbiAgICBpZiAoZ29vZHNxdWFudGl0eSkge1xuICAgICAgICBnb29kc3F1YW50aXR5LmlubmVySFRNTCA9IGAke3Byb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aH1gO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSBcIi4vcm91dGluZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyRm9yVmlldygpIHtcbiAgICBjb25zdCBidXR0b25zVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3X19idXR0b25faW1nJyk7XG4gICAgYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZVZpZXcoZXZlbnQpO1xuICAgICAgICAgICAgaW5zZXJ0UGFyYW0oXCJ2aWV3XCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52aWV3KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjaGFuZ2VWaWV3KGV2KSB7XG4gICAgY29uc3QgYnV0dG9uc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld19fYnV0dG9uX2ltZycpO1xuICAgIGJ1dHRvbnNWaWV3LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcbiAgICB9KTtcbiAgICBsZXQgYWN0aXZlQnV0dG9uID0gZXYuY3VycmVudFRhcmdldDtcbiAgICBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlld19fYnV0dG9uX2FjdGl2ZScpO1xuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xuICAgIGdvb2RzQXJlYSA9PT0gbnVsbCB8fCBnb29kc0FyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdvb2RzQXJlYS5jbGFzc0xpc3QudG9nZ2xlKCdnb29kc19fYXJlYV9tYW55Jyk7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWaWV3KHByb3ApIHtcbiAgICBjb25zdCBnb29kc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX2FyZWEnKTtcbiAgICBjb25zdCBidXR0b25NYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3X19idXR0b25fbWFueVwiKTtcbiAgICBjb25zdCBidXR0b25GZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdfX2J1dHRvbl9mZXdcIik7XG4gICAgaWYgKHByb3AgPT0gXCJtYW55XCIpIHtcbiAgICAgICAgZ29vZHNBcmVhID09PSBudWxsIHx8IGdvb2RzQXJlYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ29vZHNBcmVhLmNsYXNzTGlzdC5hZGQoJ2dvb2RzX19hcmVhX21hbnknKTtcbiAgICAgICAgYnV0dG9uRmV3ID09PSBudWxsIHx8IGJ1dHRvbkZldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uRmV3LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aWV3X19idXR0b25fYWN0aXZlXCIpO1xuICAgICAgICBidXR0b25NYW55ID09PSBudWxsIHx8IGJ1dHRvbk1hbnkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbk1hbnkuY2xhc3NMaXN0LmFkZChcInZpZXdfX2J1dHRvbl9hY3RpdmVcIik7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiLi9kYXRhLXBhcnNlclwiO1xuY2xhc3MgQ2FydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IDA7XG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IDA7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICB9XG4gICAgYWRkUHJvZHVjdChwcm9kdWN0SWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcbiAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gKF9hID0gcHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByaWNlO1xuICAgICAgICBpZiAocHJvZHVjdFByaWNlKVxuICAgICAgICAgICAgdGhpcy50b3RhbFByaWNlICs9IHByb2R1Y3RQcmljZTtcbiAgICAgICAgY29uc3QgY2FydFByb2R1Y3RJZCA9IHRoaXMuZ2V0Q2FydFByb2R1Y3RJZChwcm9kdWN0SWQpO1xuICAgICAgICBpZiAoY2FydFByb2R1Y3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzW2NhcnRQcm9kdWN0SWRdLmFtb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgIH1cbiAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcy0tO1xuICAgICAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSAoX2EgPSBwcm9kdWN0cy5nZXRQcm9kdWN0QnlJZChwcm9kdWN0SWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJpY2U7XG4gICAgICAgIGlmIChwcm9kdWN0UHJpY2UpXG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgLT0gcHJvZHVjdFByaWNlO1xuICAgICAgICBjb25zdCBjYXJ0UHJvZHVjdElkID0gdGhpcy5nZXRDYXJ0UHJvZHVjdElkKHByb2R1Y3RJZCk7XG4gICAgICAgIGlmIChjYXJ0UHJvZHVjdElkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzW2NhcnRQcm9kdWN0SWRdLmFtb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbaV0uaWQgPT09IHByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzW2ldLmFtb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1tpXS5hbW91bnQtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcbiAgICB9XG4gICAgZ2V0Q2FydFByb2R1Y3RJZChwcm9kdWN0SWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0c1tpXS5pZCA9PT0gcHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcyA9IDA7XG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IDA7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgfVxufVxuY29uc3QgY2FydCA9IG5ldyBDYXJ0KCk7XG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL2Fzc2V0cy9kYXRhL2RhdGEnO1xuY2xhc3MgUHJvZHVjdHMge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmJyYW5kcyA9IHt9O1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlID0ge1xuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogLTEsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RvY2tSYW5nZSA9IHtcbiAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICBtYXg6IC0xLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhKTtcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0c01ldGFkYXRhKCk7XG4gICAgfVxuICAgIGdldFByb2R1Y3RzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICBkYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIGJyYW5kOiBlbC5icmFuZCxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogZWwuY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGRpc2NvdW50UGVyY2VudGFnZTogZWwuZGlzY291bnRQZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgIGlkOiBlbC5pZCxcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGVsLmltYWdlcyxcbiAgICAgICAgICAgICAgICBwcmljZTogZWwucHJpY2UsXG4gICAgICAgICAgICAgICAgcmF0aW5nOiBlbC5yYXRpbmcsXG4gICAgICAgICAgICAgICAgc3RvY2s6IGVsLnN0b2NrLFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbDogZWwudGh1bWJuYWlsLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBlbC50aXRsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cztcbiAgICB9XG4gICAgZ2V0UHJvZHVjdHNNZXRhZGF0YSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMucHJvZHVjdHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWluID4gcHJvZHVjdC5wcmljZSlcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWluID0gcHJvZHVjdC5wcmljZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWF4IDwgcHJvZHVjdC5wcmljZSlcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWF4ID0gcHJvZHVjdC5wcmljZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b2NrUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnN0b2NrUmFuZ2UubWluID4gcHJvZHVjdC5zdG9jaylcbiAgICAgICAgICAgICAgICB0aGlzLnN0b2NrUmFuZ2UubWluID0gcHJvZHVjdC5zdG9jaztcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b2NrUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnN0b2NrUmFuZ2UubWF4IDwgcHJvZHVjdC5zdG9jaylcbiAgICAgICAgICAgICAgICB0aGlzLnN0b2NrUmFuZ2UubWF4ID0gcHJvZHVjdC5zdG9jaztcbiAgICAgICAgICAgIGlmICghKHByb2R1Y3QuYnJhbmQgaW4gdGhpcy5icmFuZHMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0gPSBbcHJvZHVjdF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0ucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgIGlmICghKHByb2R1Y3QuY2F0ZWdvcnkgaW4gdGhpcy5jYXRlZ29yaWVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twcm9kdWN0LmNhdGVnb3J5XSA9IFtwcm9kdWN0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcHJvZHVjdC5jYXRlZ29yeV0ucHVzaChwcm9kdWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRQcm9kdWN0QnlJZChpZCkge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5wcm9kdWN0cykge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgICAgICB9XG4gICAgfVxuICAgIHNlYXJjaFByb2R1Y3RzQnlTdHJpbmcoaW5wdXRWYWx1ZSkge1xuICAgICAgICBjb25zdCBub25JbmZvcm1hdGl2ZUtleXMgPSBbJ2lkJywgJ3RodW1ibmFpbCcsICdpbWFnZXMnXTtcbiAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGluZCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gdGhpcy5wcm9kdWN0c1tpbmRdO1xuICAgICAgICAgICAgbGV0IGlzVmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb2R1Y3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobm9uSW5mb3JtYXRpdmVLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzVmFsdWVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXNWYWx1ZUZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kLCAxKTtcbiAgICAgICAgICAgICAgICBpbmQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhcHBseUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuZ2V0UHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7XG4gICAgICAgIHRoaXMuYnJhbmRzID0ge307XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHt9O1xuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XG4gICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgbWF4OiAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdG9ja1JhbmdlID0ge1xuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogLTEsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG5vbkluZm9ybWF0aXZlS2V5cyA9IFsnaWQnLCAndGh1bWJuYWlsJywgJ2ltYWdlcyddO1xuICAgICAgICBmb3IgKGxldCBpbmQgPSAwOyBpbmQgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaW5kKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5wcm9kdWN0c1tpbmRdO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmQsIDEpO1xuICAgICAgICAgICAgICAgIGluZC0tO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyLmNhdGVnb3J5LmluY2x1ZGVzKGVsLmNhdGVnb3J5KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsdGVyLmJyYW5kLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmICghKGZpbHRlci5icmFuZC5pbmNsdWRlcyhlbC5icmFuZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbHRlci5wcmljZS5taW4gIT09IC0xICYmIGVsLnByaWNlIDwgZmlsdGVyLnByaWNlLm1pbikge1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWx0ZXIucHJpY2UubWF4ICE9PSAtMSAmJiBlbC5wcmljZSA+IGZpbHRlci5wcmljZS5tYXgpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0b2NrLm1pbiAhPT0gLTEgJiYgZWwuc3RvY2sgPCBmaWx0ZXIuc3RvY2subWluKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdG9jay5tYXggIT09IC0xICYmIGVsLnN0b2NrID4gZmlsdGVyLnN0b2NrLm1heCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RyaW5nU2VhcmNoLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCBpc1ZhbHVlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9uSW5mb3JtYXRpdmVLZXlzLmluY2x1ZGVzKGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyLnN0cmluZ1NlYXJjaC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaXNWYWx1ZUZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGluZC0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgcHJvZHVjdHMgPSBuZXcgUHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7XG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcbiIsImNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBbXTtcbiAgICAgICAgdGhpcy5icmFuZCA9IFtdO1xuICAgICAgICB0aGlzLnByaWNlID0ge1xuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogLTEsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RvY2sgPSB7XG4gICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgbWF4OiAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdHJpbmdTZWFyY2ggPSAnJztcbiAgICB9XG4gICAgc3dpdGNoQ2F0ZWdvcnkoaXRlbSkge1xuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeS5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5LmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucHVzaChpdGVtKTtcbiAgICB9XG4gICAgc3dpdGNoQnJhbmQoaXRlbSkge1xuICAgICAgICBpZiAodGhpcy5icmFuZC5pbmNsdWRlcyhpdGVtKSlcbiAgICAgICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuYnJhbmQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgc2V0UHJpY2UocGFyYW1ldGVyLCB2YWx1ZSkge1xuICAgICAgICBpZiAocGFyYW1ldGVyID09PSAnbWluJylcbiAgICAgICAgICAgIHRoaXMucHJpY2UubWluID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMucHJpY2UubWF4ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldFN0b2NrKHBhcmFtZXRlciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHBhcmFtZXRlciA9PT0gJ21pbicpXG4gICAgICAgICAgICB0aGlzLnN0b2NrLm1pbiA9IHZhbHVlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnN0b2NrLm1heCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXRTdHJpbmdTZWFyY2godmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuc3RyaW5nU2VhcmNoID0gdmFsdWU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwicHJvZHVjdHNcIjogW1xuICB7XG4gIFwiaWRcIjogMSxcbiAgXCJ0aXRsZVwiOiBcImlQaG9uZSA5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbiBhcHBsZSBtb2JpbGUgd2hpY2ggaXMgbm90aGluZyBsaWtlIGFwcGxlXCIsXG4gIFwicHJpY2VcIjogNTQ5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi45NixcbiAgXCJyYXRpbmdcIjogNC42OSxcbiAgXCJzdG9ja1wiOiA5NCxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIsXG4gIFwidGl0bGVcIjogXCJpUGhvbmUgWFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU0lNLUZyZWUsIE1vZGVsIEExOTIxMSA2LjUtaW5jaCBTdXBlciBSZXRpbmEgSEQgZGlzcGxheSB3aXRoIE9MRUQgdGVjaG5vbG9neSBBMTIgQmlvbmljIGNoaXAgd2l0aCAuLi5cIixcbiAgXCJwcmljZVwiOiA4OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljk0LFxuICBcInJhdGluZ1wiOiA0LjQ0LFxuICBcInN0b2NrXCI6IDM0LFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMyxcbiAgXCJ0aXRsZVwiOiBcIlNhbXN1bmcgVW5pdmVyc2UgOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2Ftc3VuZ1xcJ3MgbmV3IHZhcmlhbnQgd2hpY2ggZ29lcyBiZXlvbmQgR2FsYXh5IHRvIHRoZSBVbml2ZXJzZVwiLFxuICBcInByaWNlXCI6IDEyNDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjQ2LFxuICBcInJhdGluZ1wiOiA0LjA5LFxuICBcInN0b2NrXCI6IDM2LFxuICBcImJyYW5kXCI6IFwiU2Ftc3VuZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zLzEuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNCxcbiAgXCJ0aXRsZVwiOiBcIk9QUE9GMTlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9QUE8gRjE5IGlzIG9mZmljaWFsbHkgYW5ub3VuY2VkIG9uIEFwcmlsIDIwMjEuXCIsXG4gIFwicHJpY2VcIjogMjgwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy45MSxcbiAgXCJyYXRpbmdcIjogNC4zLFxuICBcInN0b2NrXCI6IDEyMyxcbiAgXCJicmFuZFwiOiBcIk9QUE9cIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNSxcbiAgXCJ0aXRsZVwiOiBcIkh1YXdlaSBQMzBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkh1YXdlaeKAmXMgcmUtYmFkZ2VkIFAzMCBQcm8gTmV3IEVkaXRpb24gd2FzIG9mZmljaWFsbHkgdW52ZWlsZWQgeWVzdGVyZGF5IGluIEdlcm1hbnkgYW5kIG5vdyB0aGUgZGV2aWNlIGhhcyBtYWRlIGl0cyB3YXkgdG8gdGhlIFVLLlwiLFxuICBcInByaWNlXCI6IDQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNTgsXG4gIFwicmF0aW5nXCI6IDQuMDksXG4gIFwic3RvY2tcIjogMzIsXG4gIFwiYnJhbmRcIjogXCJIdWF3ZWlcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYsXG4gIFwidGl0bGVcIjogXCJNYWNCb29rIFByb1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFjQm9vayBQcm8gMjAyMSB3aXRoIG1pbmktTEVEIGRpc3BsYXkgbWF5IGxhdW5jaCBiZXR3ZWVuIFNlcHRlbWJlciwgTm92ZW1iZXJcIixcbiAgXCJwcmljZVwiOiAxNzQ5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4wMixcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiA4MyxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82L3RodW1ibmFpbC5wbmdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcsXG4gIFwidGl0bGVcIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rIFMgKDIwMjApIExhcHRvcCBXaXRoIEludGVsIExha2VmaWVsZCBDaGlwLCA4R0Igb2YgUkFNIExhdW5jaGVkXCIsXG4gIFwicHJpY2VcIjogMTQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4xNSxcbiAgXCJyYXRpbmdcIjogNC4yNSxcbiAgXCJzdG9ja1wiOiA1MCxcbiAgXCJicmFuZFwiOiBcIlNhbXN1bmdcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4LFxuICBcInRpdGxlXCI6IFwiTWljcm9zb2Z0IFN1cmZhY2UgTGFwdG9wIDRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxlIGFuZCBzcGVlZC4gU3RhbmQgb3V0IG9uIEhEIHZpZGVvIGNhbGxzIGJhY2tlZCBieSBTdHVkaW8gTWljcy4gQ2FwdHVyZSBpZGVhcyBvbiB0aGUgdmlicmFudCB0b3VjaHNjcmVlbi5cIixcbiAgXCJwcmljZVwiOiAxNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yMyxcbiAgXCJyYXRpbmdcIjogNC40MyxcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIk1pY3Jvc29mdCBTdXJmYWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOSxcbiAgXCJ0aXRsZVwiOiBcIkluZmluaXggSU5CT09LXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbmZpbml4IEluYm9vayBYMSBDaTMgMTB0aCA4R0IgMjU2R0IgMTQgV2luMTAgR3JleSDigJMgMSBZZWFyIFdhcnJhbnR5XCIsXG4gIFwicHJpY2VcIjogMTA5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuODMsXG4gIFwicmF0aW5nXCI6IDQuNTQsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJJbmZpbml4XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTAsXG4gIFwidGl0bGVcIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSFAgUGF2aWxpb24gMTUtREsxMDU2V00gR2FtaW5nIExhcHRvcCAxMHRoIEdlbiBDb3JlIGk1LCA4R0IsIDI1NkdCIFNTRCwgR1RYIDE2NTAgNEdCLCBXaW5kb3dzIDEwXCIsXG4gIFwicHJpY2VcIjogMTA5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4xOCxcbiAgXCJyYXRpbmdcIjogNC40MyxcbiAgXCJzdG9ja1wiOiA4OSxcbiAgXCJicmFuZFwiOiBcIkhQIFBhdmlsaW9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDExLFxuICBcInRpdGxlXCI6IFwicGVyZnVtZSBPaWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lZ2EgRGlzY291bnQsIEltcHJlc3Npb24gb2YgQWNxdWEgRGkgR2lvIGJ5IEdpb3JnaW9Bcm1hbmkgY29uY2VudHJhdGVkIGF0dGFyIHBlcmZ1bWUgT2lsXCIsXG4gIFwicHJpY2VcIjogMTMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguNCxcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiA2NSxcbiAgXCJicmFuZFwiOiBcIkltcHJlc3Npb24gb2YgQWNxdWEgRGkgR2lvXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMixcbiAgXCJ0aXRsZVwiOiBcIkJyb3duIFBlcmZ1bWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJveWFsX01pcmFnZSBTcG9ydCBCcm93biBQZXJmdW1lIGZvciBNZW4gJiBXb21lbiAtIDEyMG1sXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjY2LFxuICBcInJhdGluZ1wiOiA0LFxuICBcInN0b2NrXCI6IDUyLFxuICBcImJyYW5kXCI6IFwiUm95YWxfTWlyYWdlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTMsXG4gIFwidGl0bGVcIjogXCJGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJlc3QgRm9nIFNjZW50IFhwcmVzc2lvIFBlcmZ1bWUgMTAwbWwgRm9yIE1lbiBjb29sIGxvbmcgbGFzdGluZyBwZXJmdW1lcyBmb3IgTWVuXCIsXG4gIFwicHJpY2VcIjogMTMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMTQsXG4gIFwicmF0aW5nXCI6IDQuNTksXG4gIFwic3RvY2tcIjogNjEsXG4gIFwiYnJhbmRcIjogXCJGb2cgU2NlbnQgWHByZXNzaW9cIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE0LFxuICBcInRpdGxlXCI6IFwiTm9uLUFsY29ob2xpYyBDb25jZW50cmF0ZWQgUGVyZnVtZSBPaWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9yaWdpbmFsIEFsIE11bmFraMKuIGJ5IE1haGFsIEFsIE11c2sgfCBPdXIgSW1wcmVzc2lvbiBvZiBDbGltYXRlIHwgNm1sIE5vbi1BbGNvaG9saWMgQ29uY2VudHJhdGVkIFBlcmZ1bWUgT2lsXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDExNCxcbiAgXCJicmFuZFwiOiBcIkFsIE11bmFraFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTUsXG4gIFwidGl0bGVcIjogXCJFYXUgRGUgUGVyZnVtZSBTcHJheVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2VudWluZSAgQWwtUmVoYWIgc3ByYXkgcGVyZnVtZSBmcm9tIFVBRS9TYXVkaSBBcmFiaWEvWWVtZW4gSGlnaCBRdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjk5LFxuICBcInJhdGluZ1wiOiA0LjcsXG4gIFwic3RvY2tcIjogMTA1LFxuICBcImJyYW5kXCI6IFwiTG9yZCAtIEFsLVJlaGFiXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTYsXG4gIFwidGl0bGVcIjogXCJIeWFsdXJvbmljIEFjaWQgU2VydW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxcXCdPcsODwqlhbCBQYXJpcyBpbnRyb2R1Y2VzIEh5YWx1cm9uIEV4cGVydCBSZXBsdW1waW5nIFNlcnVtIGZvcm11bGF0ZWQgd2l0aCAxLjUlIEh5YWx1cm9uaWMgQWNpZFwiLFxuICBcInByaWNlXCI6IDE5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4zMSxcbiAgXCJyYXRpbmdcIjogNC44MyxcbiAgXCJzdG9ja1wiOiAxMTAsXG4gIFwiYnJhbmRcIjogXCJMXFwnT3JlYWwgUGFyaXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE3LFxuICBcInRpdGxlXCI6IFwiVHJlZSBPaWwgMzBtbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGVhIHRyZWUgb2lsIGNvbnRhaW5zIGEgbnVtYmVyIG9mIGNvbXBvdW5kcywgaW5jbHVkaW5nIHRlcnBpbmVuLTQtb2wsIHRoYXQgaGF2ZSBiZWVuIHNob3duIHRvIGtpbGwgY2VydGFpbiBiYWN0ZXJpYSxcIixcbiAgXCJwcmljZVwiOiAxMixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4wOSxcbiAgXCJyYXRpbmdcIjogNC41MixcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkhlbWFuaSBUZWFcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxOCxcbiAgXCJ0aXRsZVwiOiBcIk9pbCBGcmVlIE1vaXN0dXJpemVyIDEwMG1sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEZXJtaXZlIE9pbCBGcmVlIE1vaXN0dXJpemVyIHdpdGggU1BGIDIwIGlzIHNwZWNpZmljYWxseSBmb3JtdWxhdGVkIHdpdGggY2VyYW1pZGVzLCBoeWFsdXJvbmljIGFjaWQgJiBzdW5zY3JlZW4uXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjEsXG4gIFwicmF0aW5nXCI6IDQuNTYsXG4gIFwic3RvY2tcIjogODgsXG4gIFwiYnJhbmRcIjogXCJEZXJtaXZlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE5LFxuICBcInRpdGxlXCI6IFwiU2tpbiBCZWF1dHkgU2VydW0uXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IG5hbWU6IHJvcmVjIGNvbGxhZ2VuIGh5YWx1cm9uaWMgYWNpZCB3aGl0ZSBmYWNlIHNlcnVtIHJpY2VOZXQgd2VpZ2h0OiAxNSBtXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjY4LFxuICBcInJhdGluZ1wiOiA0LjQyLFxuICBcInN0b2NrXCI6IDU0LFxuICBcImJyYW5kXCI6IFwiUk9SRUMgV2hpdGUgUmljZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIwLFxuICBcInRpdGxlXCI6IFwiRnJlY2tsZSBUcmVhdG1lbnQgQ3JlYW0tIDE1Z21cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhaXIgJiBDbGVhciBpcyBQYWtpc3RhblxcJ3Mgb25seSBwdXJlIEZyZWNrbGUgY3JlYW0gd2hpY2ggaGVscHNmYWRlIEZyZWNrbGVzLCBEYXJrc3BvdHMgYW5kIHBpZ21lbnRzLiBNZXJjdXJ5IGxldmVsIGlzIDAlLCBzbyB0aGVyZSBhcmUgbm8gc2lkZSBlZmZlY3RzLlwiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi45OSxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiAxNDAsXG4gIFwiYnJhbmRcIjogXCJGYWlyICYgQ2xlYXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjEsXG4gIFwidGl0bGVcIjogXCItIERhYWwgTWFzb29yIDUwMCBncmFtc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmluZSBxdWFsaXR5IEJyYW5kZWQgUHJvZHVjdCBLZWVwIGluIGEgY29vbCBhbmQgZHJ5IHBsYWNlXCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQuODEsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogMTMzLFxuICBcImJyYW5kXCI6IFwiU2FhZiAmIEtoYWFzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxL3RodW1ibmFpbC5wbmdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIyLFxuICBcInRpdGxlXCI6IFwiRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBCYWtlIFBhcmxvciBCaWcgRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIixcbiAgXCJwcmljZVwiOiAxNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTgsXG4gIFwicmF0aW5nXCI6IDQuNTcsXG4gIFwic3RvY2tcIjogMTQ2LFxuICBcImJyYW5kXCI6IFwiQmFrZSBQYXJsb3IgQmlnXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIzLFxuICBcInRpdGxlXCI6IFwiT3JhbmdlIEVzc2VuY2UgRm9vZCBGbGF2b3VcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmljYXRpb25zIG9mIE9yYW5nZSBFc3NlbmNlIEZvb2QgRmxhdm91ciBGb3IgQ2FrZXMgYW5kIEJha2luZyBGb29kIEl0ZW1cIixcbiAgXCJwcmljZVwiOiAxNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4wNCxcbiAgXCJyYXRpbmdcIjogNC44NSxcbiAgXCJzdG9ja1wiOiAyNixcbiAgXCJicmFuZFwiOiBcIkJha2luZyBGb29kIEl0ZW1zXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNCxcbiAgXCJ0aXRsZVwiOiBcImNlcmVhbHMgbXVlc2xpIGZydWl0IG51dHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIm9yaWdpbmFsIGZhdWppIGNlcmVhbCBtdWVzbGkgMjUwZ20gYm94IHBhY2sgb3JpZ2luYWwgZmF1amkgY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0cyBmbGFrZXMgYnJlYWtmYXN0IGNlcmVhbCBicmVhayBmYXN0IGZhdWppY2VyZWFscyBjZXJlbHMgY2VyZWwgZm9qaSBmb3VqaVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44LFxuICBcInJhdGluZ1wiOiA0Ljk0LFxuICBcInN0b2NrXCI6IDExMyxcbiAgXCJicmFuZFwiOiBcImZhdWppXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNSxcbiAgXCJ0aXRsZVwiOiBcIkd1bGFiIFBvd2RlciA1MCBHcmFtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEcnkgUm9zZSBGbG93ZXIgUG93ZGVyIEd1bGFiIFBvd2RlciA1MCBHcmFtIOKAoiBUcmVhdHMgV291bmRzXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjU4LFxuICBcInJhdGluZ1wiOiA0Ljg3LFxuICBcInN0b2NrXCI6IDQ3LFxuICBcImJyYW5kXCI6IFwiRHJ5IFJvc2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI2LFxuICBcInRpdGxlXCI6IFwiUGxhbnQgSGFuZ2VyIEZvciBIb21lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCb2hvIERlY29yIFBsYW50IEhhbmdlciBGb3IgSG9tZSBXYWxsIERlY29yYXRpb24gTWFjcmFtZSBXYWxsIEhhbmdpbmcgU2hlbGZcIixcbiAgXCJwcmljZVwiOiA0MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuODYsXG4gIFwicmF0aW5nXCI6IDQuMDgsXG4gIFwic3RvY2tcIjogMTMxLFxuICBcImJyYW5kXCI6IFwiQm9obyBEZWNvclwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi81LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI3LFxuICBcInRpdGxlXCI6IFwiRmx5aW5nIFdvb2RlbiBCaXJkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYWNrYWdlIEluY2x1ZGUgNiBCaXJkcyB3aXRoIEFkaGVzaXZlIFRhcGUgU2hhcGU6IDNEIFNoYXBlZCBXb29kZW4gQmlyZHMgTWF0ZXJpYWw6IFdvb2RlbiBNREYsIExhbWluYXRlZCAzLjVtbVwiLFxuICBcInByaWNlXCI6IDUxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OCxcbiAgXCJyYXRpbmdcIjogNC40MSxcbiAgXCJzdG9ja1wiOiAxNyxcbiAgXCJicmFuZFwiOiBcIkZseWluZyBXb29kZW5cIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjgsXG4gIFwidGl0bGVcIjogXCIzRCBFbWJlbGxpc2htZW50IEFydCBMYW1wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzRCBsZWQgbGFtcCBzdGlja2VyIFdhbGwgc3RpY2tlciAzZCB3YWxsIGFydCBsaWdodCBvbi9vZmYgYnV0dG9uICBjZWxsIG9wZXJhdGVkIChpbmNsdWRlZClcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDksXG4gIFwicmF0aW5nXCI6IDQuODIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJMRUQgTGlnaHRzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyOSxcbiAgXCJ0aXRsZVwiOiBcIkhhbmRjcmFmdCBDaGluZXNlIHN0eWxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIYW5kY3JhZnQgQ2hpbmVzZSBzdHlsZSBhcnQgbHV4dXJ5IHBhbGFjZSBob3RlbCB2aWxsYSBtYW5zaW9uIGhvbWUgZGVjb3IgY2VyYW1pYyB2YXNlIHdpdGggYnJhc3MgZnJ1aXQgcGxhdGVcIixcbiAgXCJwcmljZVwiOiA2MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMzQsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogNyxcbiAgXCJicmFuZFwiOiBcImx1eHVyeSBwYWxhY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMCxcbiAgXCJ0aXRsZVwiOiBcIktleSBIb2xkZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkF0dHJhY3RpdmUgRGVzaWduTWV0YWxsaWMgbWF0ZXJpYWxGb3VyIGtleSBob29rc1JlbGlhYmxlICYgRHVyYWJsZVByZW1pdW0gUXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjkyLFxuICBcInJhdGluZ1wiOiA0LjkyLFxuICBcInN0b2NrXCI6IDU0LFxuICBcImJyYW5kXCI6IFwiR29sZGVuXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMxLFxuICBcInRpdGxlXCI6IFwiTW9ybmFkaSBWZWx2ZXQgQmVkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JuYWRpIFZlbHZldCBCZWQgQmFzZSB3aXRoIEhlYWRib2FyZCBTbGF0cyBTdXBwb3J0IENsYXNzaWMgU3R5bGUgQmVkcm9vbSBGdXJuaXR1cmUgQmVkIFNldFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNyxcbiAgXCJyYXRpbmdcIjogNC4xNixcbiAgXCJzdG9ja1wiOiAxNDAsXG4gIFwiYnJhbmRcIjogXCJGdXJuaXR1cmUgQmVkIFNldFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzIsXG4gIFwidGl0bGVcIjogXCJTb2ZhIGZvciBDb2ZmZSBDYWZlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSYXR0dGFuIE91dGRvb3IgZnVybml0dXJlIFNldCBXYXRlcnByb29mICBSYXR0YW4gU29mYSBmb3IgQ29mZmUgQ2FmZVwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OSxcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAzMCxcbiAgXCJicmFuZFwiOiBcIlJhdHR0YW4gT3V0ZG9vclwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMyxcbiAgXCJ0aXRsZVwiOiBcIjMgVGllciBDb3JuZXIgU2hlbHZlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzIHwgMyBQQ3MgV2FsbCBNb3VudCBLaXRjaGVuIFNoZWxmIHwgRmxvYXRpbmcgQmVkcm9vbSBTaGVsZlwiLFxuICBcInByaWNlXCI6IDcwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcsXG4gIFwicmF0aW5nXCI6IDQuMzEsXG4gIFwic3RvY2tcIjogMTA2LFxuICBcImJyYW5kXCI6IFwiS2l0Y2hlbiBTaGVsZlwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzQsXG4gIFwidGl0bGVcIjogXCJQbGFzdGljIFRhYmxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJW77u/ZXJ5IGdvb2QgcXVhbGl0eSBwbGFzdGljIHRhYmxlIGZvciBtdWx0aSBwdXJwb3NlIG5vdyBpbiByZWFzb25hYmxlIHByaWNlXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQsXG4gIFwicmF0aW5nXCI6IDQuMDEsXG4gIFwic3RvY2tcIjogMTM2LFxuICBcImJyYW5kXCI6IFwiTXVsdGkgUHVycG9zZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzUsXG4gIFwidGl0bGVcIjogXCIzIERPT1IgUE9SVEFCTEVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hdGVyaWFsOiBTdGFpbmxlc3MgU3RlZWwgYW5kIEZhYnJpYyAgSXRlbSBTaXplOiAxMTAgY20geCA0NSBjbSB4IDE3NSBjbSBQYWNrYWdlIENvbnRlbnRzOiAxIFN0b3JhZ2UgV2FyZHJvYmVcIixcbiAgXCJwcmljZVwiOiA0MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy45OCxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIkFtbmFNYXJ0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNixcbiAgXCJ0aXRsZVwiOiBcIlNsZWV2ZSBTaGlydCBXb21lbnNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvdHRvbiBTb2xpZCBDb2xvciBQcm9mZXNzaW9uYWwgV2VhciBTbGVldmUgU2hpcnQgV29tZW5zIFdvcmsgQmxvdXNlcyBXaG9sZXNhbGUgQ2xvdGhpbmcgQ2FzdWFsIFBsYWluIEN1c3RvbSBUb3AgT0VNIEN1c3RvbWl6ZWRcIixcbiAgXCJwcmljZVwiOiA5MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuODksXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogMzksXG4gIFwiYnJhbmRcIjogXCJQcm9mZXNzaW9uYWwgV2VhclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzcsXG4gIFwidGl0bGVcIjogXCJhbmsgVG9wcyBmb3IgV29tZW5zL0dpcmxzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQQUNLIE9GIDMgQ0FNSVNPTEVTICxWRVJZIENPTUZPUlRBQkxFIFNPRlQgQ09UVE9OIFNUVUZGLCBDT01GT1JUQUJMRSBJTiBBTEwgRk9VUiBTRUFTT05TXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjA1LFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDEwNyxcbiAgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzgsXG4gIFwidGl0bGVcIjogXCJzdWJsaW1hdGlvbiBwbGFpbiBraWRzIHRhbmtcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInN1YmxpbWF0aW9uIHBsYWluIGtpZHMgdGFuayB0b3BzIHdob2xlc2FsZVwiLFxuICBcInByaWNlXCI6IDEwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMTIsXG4gIFwicmF0aW5nXCI6IDQuOCxcbiAgXCJzdG9ja1wiOiAyMCxcbiAgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzksXG4gIFwidGl0bGVcIjogXCJXb21lbiBTd2VhdGVycyBXb29sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIyMDIxIEN1c3RvbSBXaW50ZXIgRmFsbCBaZWJyYSBLbml0IENyb3AgVG9wIFdvbWVuIFN3ZWF0ZXJzIFdvb2wgTW9oYWlyIENvcyBDdXN0b21pemUgQ3JldyBOZWNrIFdvbWVuXFwnIFMgQ3JvcCBUb3AgU3dlYXRlclwiLFxuICBcInByaWNlXCI6IDYwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuMixcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiA1NSxcbiAgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDAsXG4gIFwidGl0bGVcIjogXCJ3b21lbiB3aW50ZXIgY2xvdGhlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwid29tZW4gd2ludGVyIGNsb3RoZXMgdGhpY2sgZmxlZWNlIGhvb2RpZSB0b3Agd2l0aCBzd2VhdCBwYW50am9nZ2VyIHdvbWVuIHN3ZWF0c3VpdCBzZXQgam9nZ2VycyBwYW50cyB0d28gcGllY2UgcGFudHMgc2V0XCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjM5LFxuICBcInJhdGluZ1wiOiA0LjkxLFxuICBcInN0b2NrXCI6IDg0LFxuICBcImJyYW5kXCI6IFwiVG9wIFN3ZWF0ZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwLzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDEsXG4gIFwidGl0bGVcIjogXCJOSUdIVCBTVUlUXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOSUdIVCBTVUlUIFJFRCBNSUNLWSBNT1VTRS4uICBGb3IgR2lybHMuIEZhbnRhc3RpYyBTdWl0cy5cIixcbiAgXCJwcmljZVwiOiA1NSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMDUsXG4gIFwicmF0aW5nXCI6IDQuNjUsXG4gIFwic3RvY2tcIjogMjEsXG4gIFwiYnJhbmRcIjogXCJSRUQgTUlDS1kgTU9VU0UuLlwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MixcbiAgXCJ0aXRsZVwiOiBcIlN0aWNoZWQgS3VydGEgcGx1cyB0cm91c2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGQUJSSUM6IExJTEVJTiBDSEVTVDogMjEgTEVOR0hUOiAzNyBUUk9VU0VSOiAoMzgpIDpBUkFCSUMgTElMRUlOXCIsXG4gIFwicHJpY2VcIjogODAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjM3LFxuICBcInJhdGluZ1wiOiA0LjA1LFxuICBcInN0b2NrXCI6IDE0OCxcbiAgXCJicmFuZFwiOiBcIkRpZ2l0YWwgUHJpbnRlZFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MyxcbiAgXCJ0aXRsZVwiOiBcImZyb2NrIGdvbGQgcHJpbnRlZFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2hhemkgZmFicmljIGxvbmcgZnJvY2sgZ29sZCBwcmludGVkIHJlYWR5IHRvIHdlYXIgc3RpdGNoZWQgY29sbGVjdGlvbiAoRzk5MilcIixcbiAgXCJwcmljZVwiOiA2MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU1LFxuICBcInJhdGluZ1wiOiA0LjMxLFxuICBcInN0b2NrXCI6IDE1MCxcbiAgXCJicmFuZFwiOiBcIkdoYXppIEZhYnJpY1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NCxcbiAgXCJ0aXRsZVwiOiBcIkxhZGllcyBNdWx0aWNvbG9yZWQgRHJlc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgY2xhc3N5IHNoaXJ0IGZvciB3b21lbiBnaXZlcyB5b3UgYSBnb3JnZW91cyBsb29rIG9uIGV2ZXJ5ZGF5IHdlYXIgYW5kIHNwZWNpYWxseSBmb3Igc2VtaS1jYXN1YWwgd2VhcnMuXCIsXG4gIFwicHJpY2VcIjogNzksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljg4LFxuICBcInJhdGluZ1wiOiA0LjAzLFxuICBcInN0b2NrXCI6IDIsXG4gIFwiYnJhbmRcIjogXCJHaGF6aSBGYWJyaWNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDUsXG4gIFwidGl0bGVcIjogXCJNYWxhaSBNYXhpIERyZXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSZWFkeSB0byB3ZWFyLCBVbmlxdWUgZGVzaWduIGFjY29yZGluZyB0byBtb2Rlcm4gc3RhbmRhcmQgZmFzaGlvbiwgQmVzdCBmaXR0aW5nICxJbXBvcnRlZCBzdHVmZlwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjA3LFxuICBcInJhdGluZ1wiOiA0LjY3LFxuICBcInN0b2NrXCI6IDk2LFxuICBcImJyYW5kXCI6IFwiSUVMR1lcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ2LFxuICBcInRpdGxlXCI6IFwid29tZW5cXCdzIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDbG9zZTogTGFjZSwgU3R5bGUgd2l0aCBib3R0b206IEluY3JlYXNlZCBpbnNpZGUsIFNvbGUgTWF0ZXJpYWw6IFJ1YmJlclwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi45NixcbiAgXCJyYXRpbmdcIjogNC4xNCxcbiAgXCJzdG9ja1wiOiA3MixcbiAgXCJicmFuZFwiOiBcIklFTEdZIGZhc2hpb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8xLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NyxcbiAgXCJ0aXRsZVwiOiBcIlNuZWFrZXIgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN5bnRoZXRpYyBMZWF0aGVyIENhc3VhbCBTbmVha2VyIHNob2VzIGZvciBXb21lbi9naXJscyBTbmVha2VycyBGb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiAxMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjM3LFxuICBcInJhdGluZ1wiOiA0LjE5LFxuICBcInN0b2NrXCI6IDUwLFxuICBcImJyYW5kXCI6IFwiU3ludGhldGljIExlYXRoZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvdGh1bWJuYWlsLmpwZWdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvdGh1bWJuYWlsLmpwZWdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0OCxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFN0cmlwIEhlZWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZlYXR1cmVzOiBGbGlwLWZsb3BzLCBNaWQgSGVlbCwgQ29tZm9ydGFibGUsIFN0cmlwZWQgSGVlbCwgQW50aXNraWQsIFN0cmlwZWRcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuODMsXG4gIFwicmF0aW5nXCI6IDQuMDIsXG4gIFwic3RvY2tcIjogMjUsXG4gIFwiYnJhbmRcIjogXCJTYW5kYWxzIEZsaXAgRmxvcHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ5LFxuICBcInRpdGxlXCI6IFwiQ2hhcHBhbHMgJiBTaG9lIExhZGllcyBNZXRhbGxpY1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV29tZW5zIENoYXBwYWxzICYgU2hvZSBMYWRpZXMgTWV0YWxsaWMgVG9uZyBUaG9uZyBTYW5kYWwgRmxhdCBTdW1tZXIgMjAyMCBNYWFzYWkgU2FuZGFsc1wiLFxuICBcInByaWNlXCI6IDIzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjYyLFxuICBcInJhdGluZ1wiOiA0LjcyLFxuICBcInN0b2NrXCI6IDEwNyxcbiAgXCJicmFuZFwiOiBcIk1hYXNhaSBTYW5kYWxzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MCxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIyMDIwIE5ldyBBcnJpdmFscyBHZW51aW5lIExlYXRoZXIgRmFzaGlvbiBUcmVuZCBQbGF0Zm9ybSBTdW1tZXIgV29tZW4gU2hvZXNcIixcbiAgXCJwcmljZVwiOiAzNixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuODcsXG4gIFwicmF0aW5nXCI6IDQuMzMsXG4gIFwic3RvY2tcIjogNDYsXG4gIFwiYnJhbmRcIjogXCJBcnJpdmFscyBHZW51aW5lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvMS5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MSxcbiAgXCJ0aXRsZVwiOiBcImhhbGYgc2xlZXZlcyBUIHNoaXJ0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFueSBzdG9yZSBpcyBjcmVhdGluZyBuZXcgZGVzaWducyBhbmQgdHJlbmQgZXZlcnkgbW9udGggYW5kIGV2ZXJ5IHllYXIuIERhcmF6LnBrIGhhdmUgYSBiZWF1dGlmdWwgcmFuZ2Ugb2YgbWVuIGZhc2hpb24gYnJhbmRzXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjc2LFxuICBcInJhdGluZ1wiOiA0LjI2LFxuICBcInN0b2NrXCI6IDEzMixcbiAgXCJicmFuZFwiOiBcIlZpbnRhZ2UgQXBwYXJlbFwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUyLFxuICBcInRpdGxlXCI6IFwiRlJFRSBGSVJFIFQgU2hpcnRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInF1YWxpdHkgYW5kIHByb2Zlc3Npb25hbCBwcmludCAtIEl0IGRvZXNuXFwndCBqdXN0IGxvb2sgaGlnaCBxdWFsaXR5LCBpdCBpcyBoaWdoIHF1YWxpdHkuXCIsXG4gIFwicHJpY2VcIjogMTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjcyLFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDEyOCxcbiAgXCJicmFuZFwiOiBcIkZSRUUgRklSRVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MyxcbiAgXCJ0aXRsZVwiOiBcInByaW50ZWQgaGlnaCBxdWFsaXR5IFQgc2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCcmFuZDogdmludGFnZSBBcHBhcmVsICxFeHBvcnQgcXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjU0LFxuICBcInJhdGluZ1wiOiA0Ljg5LFxuICBcInN0b2NrXCI6IDYsXG4gIFwiYnJhbmRcIjogXCJWaW50YWdlIEFwcGFyZWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU0LFxuICBcInRpdGxlXCI6IFwiUHViZyBQcmludGVkIEdyYXBoaWMgVC1TaGlydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBEZXNjcmlwdGlvbiBGZWF0dXJlczogMTAwJSBVbHRyYSBzb2Z0IFBvbHllc3RlciBKZXJzZXkuIFZpYnJhbnQgJiBjb2xvcmZ1bCBwcmludGluZyBvbiBmcm9udC4gRmVlbHMgc29mdCBhcyBjb3R0b24gd2l0aG91dCBldmVyIGNyYWNraW5nXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjQ0LFxuICBcInJhdGluZ1wiOiA0LjYyLFxuICBcInN0b2NrXCI6IDEzNixcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTUsXG4gIFwidGl0bGVcIjogXCJNb25leSBIZWlzdCBQcmludGVkIFN1bW1lciBUIFNoaXJ0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFicmljIEplcmN5LCBTaXplOiBNICYgTCBXZWFyIFN0eWxpc2ggRHVhbCBTdGljaGVkXCIsXG4gIFwicHJpY2VcIjogNjYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1Ljk3LFxuICBcInJhdGluZ1wiOiA0LjksXG4gIFwic3RvY2tcIjogMTIyLFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTYsXG4gIFwidGl0bGVcIjogXCJTbmVha2VycyBKb2dnZXJzIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHZW5kZXI6IE1lbiAsIENvbG9yczogU2FtZSBhcyBEaXNwbGF5ZWRDb25kaXRpb246IDEwMCUgQnJhbmQgTmV3XCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjU3LFxuICBcInJhdGluZ1wiOiA0LjM4LFxuICBcInN0b2NrXCI6IDYsXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvNS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NyxcbiAgXCJ0aXRsZVwiOiBcIkxvYWZlcnMgZm9yIG1lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNob2VzIC0gTG9hZmVycyBmb3IgbWVuIC0gUnViYmVyIFNob2VzIC0gTnlsb24gU2hvZXMgLSBTaG9lcyBmb3IgbWVuIC0gTW9jY2Fzc2lvbiAtIFB1cmUgTnlsb24gKFJ1YmJlcikgRXhwb3QgUXVhbGl0eS5cIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTEsXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogMjAsXG4gIFwiYnJhbmRcIjogXCJSdWJiZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1OCxcbiAgXCJ0aXRsZVwiOiBcImZvcm1hbCBvZmZpY2VzIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYXR0ZXJuIFR5cGU6IFNvbGlkLCBNYXRlcmlhbDogUFUsIFRvZSBTaGFwZTogUG9pbnRlZCBUb2UgLE91dHNvbGUgTWF0ZXJpYWw6IFJ1YmJlclwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMixcbiAgXCJyYXRpbmdcIjogNC40MSxcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1OSxcbiAgXCJ0aXRsZVwiOiBcIlNwcmluZyBhbmQgc3VtbWVyc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbWZvcnRhYmxlIHN0cmV0Y2ggY2xvdGgsIGxpZ2h0d2VpZ2h0IGJvZHk7ICxydWJiZXIgc29sZSwgYW50aS1za2lkIHdlYXI7XCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguNzEsXG4gIFwicmF0aW5nXCI6IDQuMzMsXG4gIFwic3RvY2tcIjogMTM3LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MCxcbiAgXCJ0aXRsZVwiOiBcIlN0eWxpc2ggQ2FzdWFsIEplYW5zIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIaWdoIFF1YWxpdHkgLFN0eWxpc2ggZGVzaWduICxDb21mb3J0YWJsZSB3ZWFyICxGQXNoaW9uICxEdXJhYmxlXCIsXG4gIFwicHJpY2VcIjogNTgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuNTUsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogMTI5LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYxLFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcHMgV3Jpc3R3YXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGU6U3BvcnQgLENsYXNwOkJ1Y2tsZXMgLFdhdGVyIFJlc2lzdGFuY2UgRGVwdGg6M0JhclwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy4xNCxcbiAgXCJyYXRpbmdcIjogNC42MyxcbiAgXCJzdG9ja1wiOiA5MSxcbiAgXCJicmFuZFwiOiBcIk5hdmlmb3JjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MixcbiAgXCJ0aXRsZVwiOiBcIldhdGVycHJvb2YgTGVhdGhlciBCcmFuZCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2F0Y2ggQ3Jvd24gV2l0aCBFbnZpcm9ubWVudGFsIElQUyBCcm9uemUgRWxlY3Ryb3BsYXRpbmc7IERpc3BsYXkgc3lzdGVtIG9mIDEyIGhvdXJzXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMTUsXG4gIFwicmF0aW5nXCI6IDQuMDUsXG4gIFwic3RvY2tcIjogOTUsXG4gIFwiYnJhbmRcIjogXCJTS01FSSA5MTE3XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyLzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjMsXG4gIFwidGl0bGVcIjogXCJSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lbiBTaWx2ZXIgQ2hhaW4gUm95YWwgQmx1ZSBQcmVtaXVtIFdhdGNoIExhdGVzdCBBbmFsb2cgV2F0Y2hcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMi41NixcbiAgXCJyYXRpbmdcIjogNC44OSxcbiAgXCJzdG9ja1wiOiAxNDIsXG4gIFwiYnJhbmRcIjogXCJTS01FSSA5MTE3XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzQuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY0LFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaCBmb3IgTWVuIC0gU3R5bGlzaCBhbmQgTGF0ZXN0IERlc2lnblwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yLFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDYxLFxuICBcImJyYW5kXCI6IFwiU3RyYXAgU2tlbGV0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY1LFxuICBcInRpdGxlXCI6IFwiU3RhaW5sZXNzIFN0ZWVsIFdyaXN0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsaXNoIFdhdGNoIEZvciBNYW4gKEx1eHVyeSkgQ2xhc3N5IE1lblxcJ3MgU3RhaW5sZXNzIFN0ZWVsIFdyaXN0IFdhdGNoIC0gQm94IFBhY2tlZFwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy43OSxcbiAgXCJyYXRpbmdcIjogNC43OSxcbiAgXCJzdG9ja1wiOiA5NCxcbiAgXCJicmFuZFwiOiBcIlN0YWlubGVzc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY2LFxuICBcInRpdGxlXCI6IFwiU3RlZWwgQW5hbG9nIENvdXBsZSBXYXRjaGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbGVnYW50IGRlc2lnbiwgU3R5bGlzaCAsVW5pcXVlICYgVHJlbmR5LENvbWZvcnRhYmxlIHdlYXJcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMyxcbiAgXCJyYXRpbmdcIjogNC43OSxcbiAgXCJzdG9ja1wiOiAyNCxcbiAgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvNC5KUEdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NyxcbiAgXCJ0aXRsZVwiOiBcIkZhc2hpb24gTWFnbmV0aWMgV3Jpc3QgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJ1eSB0aGlzIGF3ZXNvbWUgIFRoZSBwcm9kdWN0IGlzIG9yaWdpbmFsbHkgbWFudWZhY3R1cmVkIGJ5IHRoZSBjb21wYW55IGFuZCBpdFxcJ3MgYSB0b3Agc2VsbGluZyBwcm9kdWN0IHdpdGggYSB2ZXJ5IHJlYXNvbmFibGVcIixcbiAgXCJwcmljZVwiOiA2MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNjksXG4gIFwicmF0aW5nXCI6IDQuMDMsXG4gIFwic3RvY2tcIjogNDYsXG4gIFwiYnJhbmRcIjogXCJFYXN0ZXJuIFdhdGNoZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjgsXG4gIFwidGl0bGVcIjogXCJTdHlsaXNoIEx1eHVyeSBEaWdpdGFsIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsaXNoIEx1eHVyeSBEaWdpdGFsIFdhdGNoIEZvciBHaXJscyAvIFdvbWVuIC0gTGVkIFNtYXJ0IExhZGllcyBXYXRjaGVzIEZvciBHaXJsc1wiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA5LjAzLFxuICBcInJhdGluZ1wiOiA0LjU1LFxuICBcInN0b2NrXCI6IDc3LFxuICBcImJyYW5kXCI6IFwiTHV4dXJ5IERpZ2l0YWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjgvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2OSxcbiAgXCJ0aXRsZVwiOiBcIkdvbGRlbiBXYXRjaCBQZWFybHMgQnJhY2VsZXQgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBHb2xkZW4gV2F0Y2ggUGVhcmxzIEJyYWNlbGV0IFdhdGNoIEZvciBHaXJscyAtIEdvbGRlbiBDaGFpbiBMYWRpZXMgQnJhY2VsYXRlIFdhdGNoIGZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41NSxcbiAgXCJyYXRpbmdcIjogNC43NyxcbiAgXCJzdG9ja1wiOiA4OSxcbiAgXCJicmFuZFwiOiBcIldhdGNoIFBlYXJsc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzAsXG4gIFwidGl0bGVcIjogXCJTdGFpbmxlc3MgU3RlZWwgV29tZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gU2ttZWkgMTgzMCBTaGVsbCBEaWFsIFN0YWlubGVzcyBTdGVlbCBXb21lbiBXcmlzdCBXYXRjaCBMYWR5IEJyYWNlbGV0IFdhdGNoIFF1YXJ0eiBXYXRjaGVzIExhZGllc1wiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4Ljk4LFxuICBcInJhdGluZ1wiOiA0LjA4LFxuICBcInN0b2NrXCI6IDExMSxcbiAgXCJicmFuZFwiOiBcIkJyYWNlbGV0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MSxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFNob3VsZGVyIEJhZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvdWlzV2lsbCBXb21lbiBTaG91bGRlciBCYWdzIExvbmcgQ2x1dGNoZXMgQ3Jvc3MgQm9keSBCYWdzIFBob25lIEJhZ3MgUFUgTGVhdGhlciBIYW5kIEJhZ3MgTGFyZ2UgQ2FwYWNpdHkgQ2FyZCBIb2xkZXJzIFppcHBlciBDb2luIFB1cnNlcyBGYXNoaW9uIENyb3NzYm9keSBCYWdzIGZvciBHaXJscyBMYWRpZXNcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNjUsXG4gIFwicmF0aW5nXCI6IDQuNzEsXG4gIFwic3RvY2tcIjogMTcsXG4gIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzIsXG4gIFwidGl0bGVcIjogXCJIYW5kYmFnIEZvciBHaXJsc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBmYXNoaW9uIGlzIGRlc2lnbmVkIHRvIGFkZCBhIGNoYXJtaW5nIGVmZmVjdCB0byB5b3VyIGNhc3VhbCBvdXRmaXQuIFRoaXMgQmFnIGlzIG1hZGUgb2Ygc3ludGhldGljIGxlYXRoZXIuXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjUsXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogMjcsXG4gIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzMsXG4gIFwidGl0bGVcIjogXCJGYW5jeSBoYW5kIGNsdXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBmYXNoaW9uIGlzIGRlc2lnbmVkIHRvIGFkZCBhIGNoYXJtaW5nIGVmZmVjdCB0byB5b3VyIGNhc3VhbCBvdXRmaXQuIFRoaXMgQmFnIGlzIG1hZGUgb2Ygc3ludGhldGljIGxlYXRoZXIuXCIsXG4gIFwicHJpY2VcIjogNDQsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjM5LFxuICBcInJhdGluZ1wiOiA0LjE4LFxuICBcInN0b2NrXCI6IDEwMSxcbiAgXCJicmFuZFwiOiBcIkJyYWNlbGV0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc0LFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBIYW5kIEJhZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSXQgZmVhdHVyZXMgYW4gYXR0cmFjdGl2ZSBkZXNpZ24gdGhhdCBtYWtlcyBpdCBhIG11c3QgaGF2ZSBhY2Nlc3NvcnkgaW4geW91ciBjb2xsZWN0aW9uLiBXZSBzZWxsIGRpZmZlcmVudCBraW5kIG9mIGJhZ3MgZm9yIGJveXMsIGtpZHMsIHdvbWVuLCBnaXJscyBhbmQgYWxzbyBmb3IgdW5pc2V4LlwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4xOSxcbiAgXCJyYXRpbmdcIjogNC4wMSxcbiAgXCJzdG9ja1wiOiA0MyxcbiAgXCJicmFuZFwiOiBcIkNvcGVuaGFnZW4gTHV4ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NSxcbiAgXCJ0aXRsZVwiOiBcIlNldmVuIFBvY2tldCBXb21lbiBCYWdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNldmVuIFBvY2tldCBXb21lbiBCYWcgSGFuZGJhZ3MgTGFkeSBTaG91bGRlciBDcm9zc2JvZHkgQmFnIEZlbWFsZSBQdXJzZSBTZXZlbiBQb2NrZXQgQmFnXCIsXG4gIFwicHJpY2VcIjogNjgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0Ljg3LFxuICBcInJhdGluZ1wiOiA0LjkzLFxuICBcInN0b2NrXCI6IDEzLFxuICBcImJyYW5kXCI6IFwiU3RlYWwgRnJhbWVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NixcbiAgXCJ0aXRsZVwiOiBcIlNpbHZlciBSaW5nIFNldCBXb21lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSmV3ZWxyeSBUeXBlOlJpbmdzQ2VydGlmaWNhdGUgVHlwZTpOb25lUGxhdGluZzpTaWx2ZXIgUGxhdGVkU2hhcGVhdHRlcm46bm9uZVN0eWxlOkNMQVNTSUNSZWxpZ2lvdXNcIixcbiAgXCJwcmljZVwiOiA3MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNTcsXG4gIFwicmF0aW5nXCI6IDQuNjEsXG4gIFwic3RvY2tcIjogNTEsXG4gIFwiYnJhbmRcIjogXCJEYXJvamF5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc3LFxuICBcInRpdGxlXCI6IFwiUm9zZSBSaW5nXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCcmFuZDogVGhlIEdyZWV0aW5ncyBGbG93ZXIgQ29sb3VyOiBSZWRSaW5nIENvbG91cjogR29sZGVuU2l6ZTogQWRqdXN0YWJsZVwiLFxuICBcInByaWNlXCI6IDEwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMixcbiAgXCJyYXRpbmdcIjogNC4yMSxcbiAgXCJzdG9ja1wiOiAxNDksXG4gIFwiYnJhbmRcIjogXCJDb3BlbmhhZ2VuIEx1eGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc4LFxuICBcInRpdGxlXCI6IFwiUmhpbmVzdG9uZSBLb3JlYW4gU3R5bGUgT3BlbiBSaW5nc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnkgM1BjcyBBZGp1c3RhYmxlIFBlYXJsIFJoaW5lc3RvbmUgS29yZWFuIFN0eWxlIE9wZW4gUmluZ3MgRm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMDIsXG4gIFwicmF0aW5nXCI6IDQuNjksXG4gIFwic3RvY2tcIjogOSxcbiAgXCJicmFuZFwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3OSxcbiAgXCJ0aXRsZVwiOiBcIkVsZWdhbnQgRmVtYWxlIFBlYXJsIEVhcnJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbGVnYW50IEZlbWFsZSBQZWFybCBFYXJyaW5ncyBTZXQgWmlyY29uIFBlYXJsIEVhcmluZ3MgV29tZW4gUGFydHkgQWNjZXNzb3JpZXMgOSBQYWlycy9TZXRcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuOCxcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAxNixcbiAgXCJicmFuZFwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc5LzEuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODAsXG4gIFwidGl0bGVcIjogXCJDaGFpbiBQaW4gVGFzc2VsIEVhcnJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYWlyIE9mIEVhciBDdWZmIEJ1dHRlcmZseSBMb25nIENoYWluIFBpbiBUYXNzZWwgRWFycmluZ3MgLSBTaWx2ZXIgKCBMb25nIExpZmUgUXVhbGl0eSBQcm9kdWN0KVwiLFxuICBcInByaWNlXCI6IDQ1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy43NSxcbiAgXCJyYXRpbmdcIjogNC41OSxcbiAgXCJzdG9ja1wiOiA5LFxuICBcImJyYW5kXCI6IFwiQ3VmZiBCdXR0ZXJmbHlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MSxcbiAgXCJ0aXRsZVwiOiBcIlJvdW5kIFNpbHZlciBGcmFtZSBTdW4gR2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBwYWlyIG9mIHN1bmdsYXNzZXMgY2FuIHByb3RlY3QgeW91ciBleWVzIGZyb20gYmVpbmcgaHVydC4gRm9yIGNhciBkcml2aW5nLCB2YWNhdGlvbiB0cmF2ZWwsIG91dGRvb3IgYWN0aXZpdGllcywgc29jaWFsIGdhdGhlcmluZ3MsXCIsXG4gIFwicHJpY2VcIjogMTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjEsXG4gIFwicmF0aW5nXCI6IDQuOTQsXG4gIFwic3RvY2tcIjogNzgsXG4gIFwiYnJhbmRcIjogXCJEZXNpZ25lciBTdW4gR2xhc3Nlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MixcbiAgXCJ0aXRsZVwiOiBcIkthYmlyIFNpbmdoIFNxdWFyZSBTdW5nbGFzc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT3JpZ25hbCBNZXRhbCBLYWJpciBTaW5naCBkZXNpZ24gMjAyMCBTdW5nbGFzc2VzIE1lbiBCcmFuZCBEZXNpZ25lciBTdW4gR2xhc3NlcyBLYWJpciBTaW5naCBTcXVhcmUgU3VuZ2xhc3NcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNixcbiAgXCJyYXRpbmdcIjogNC42MixcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkRlc2lnbmVyIFN1biBHbGFzc2VzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgzLFxuICBcInRpdGxlXCI6IFwiV2lsZXkgWCBOaWdodCBWaXNpb24gWWVsbG93IEdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldpbGV5IFggTmlnaHQgVmlzaW9uIFllbGxvdyBHbGFzc2VzIGZvciBSaWRlcnMgLSBOaWdodCBWaXNpb24gQW50aSBGb2cgRHJpdmluZyBHbGFzc2VzIC0gRnJlZSBOaWdodCBHbGFzcyBDb3ZlciAtIFNoaWVsZCBFeWVzIEZyb20gRHVzdCBhbmQgVmlydXMtIEZvciBOaWdodCBTcG9ydCBNYXRjaGVzXCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDYuMzMsXG4gIFwicmF0aW5nXCI6IDQuOTcsXG4gIFwic3RvY2tcIjogMTE1LFxuICBcImJyYW5kXCI6IFwibWFzdGFyIHdhdGNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODQsXG4gIFwidGl0bGVcIjogXCJTcXVhcmUgU3VuZ2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBPdmVyc2l6ZWQgU3F1YXJlIFN1bmdsYXNzZXMgUmV0cm8gR3JhZGllbnQgQmlnIEZyYW1lIFN1bmdsYXNzZXMgRm9yIFdvbWVuIE9uZSBQaWVjZSBHYWZhcyBTaGFkZSBNaXJyb3IgQ2xlYXIgTGVucyAxNzA1OVwiLFxuICBcInByaWNlXCI6IDI4LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy44OSxcbiAgXCJyYXRpbmdcIjogNC42NCxcbiAgXCJzdG9ja1wiOiA2NCxcbiAgXCJicmFuZFwiOiBcIm1hc3RhciB3YXRjaFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NSxcbiAgXCJ0aXRsZVwiOiBcIkxvdWlzV2lsbCBNZW4gU3VuZ2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG91aXNXaWxsIE1lbiBTdW5nbGFzc2VzIFBvbGFyaXplZCBTdW5nbGFzc2VzIFVWNDAwIFN1bmdsYXNzZXMgRGF5IE5pZ2h0IER1YWwgVXNlIFNhZmV0eSBEcml2aW5nIE5pZ2h0IFZpc2lvbiBFeWV3ZWFyIEFMLU1HIEZyYW1lIFN1biBHbGFzc2VzIHdpdGggRnJlZSBCb3ggZm9yIERyaXZlcnNcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMjcsXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogOTIsXG4gIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODYsXG4gIFwidGl0bGVcIjogXCJCbHVldG9vdGggQXV4XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCbHVldG9vdGggQXV4IEJsdWV0b290aCBDYXIgQXV4IENhciBCbHVldG9vdGggVHJhbnNtaXR0ZXIgQXV4IEF1ZGlvIFJlY2VpdmVyIEhhbmRmcmVlIENhciBCbHVldG9vdGggTXVzaWMgUmVjZWl2ZXIgVW5pdmVyc2FsIDMuNW1tIFN0cmVhbWluZyBBMkRQIFdpcmVsZXNzIEF1dG8gQVVYIEF1ZGlvIEFkYXB0ZXIgV2l0aCBNaWMgRm9yIFBob25lIE1QM1wiLFxuICBcInByaWNlXCI6IDI1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC41NixcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiAyMixcbiAgXCJicmFuZFwiOiBcIkNhciBBdXhcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODcsXG4gIFwidGl0bGVcIjogXCJ0IFRlbXBlcmF0dXJlIENvbnRyb2xsZXIgSW5jdWJhdG9yIENvbnRyb2xsZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJvdGggSGVhdCBhbmQgQ29vbCBQdXJwb3NlLCBUZW1wZXJhdHVyZSBjb250cm9sIHJhbmdlOyAtNTAgdG8gKzExMCwgVGVtcGVyYXR1cmUgbWVhc3VyZW1lbnQgYWNjdXJhY3k7IDAuMSwgQ29udHJvbCBhY2N1cmFjeTsgMC4xXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjMsXG4gIFwicmF0aW5nXCI6IDQuNTQsXG4gIFwic3RvY2tcIjogMzcsXG4gIFwiYnJhbmRcIjogXCJXMTIwOSBEQzEyVlwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg4LFxuICBcInRpdGxlXCI6IFwiVEMgUmV1c2FibGUgU2lsaWNvbmUgTWFnaWMgV2FzaGluZyBHbG92ZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRDIFJldXNhYmxlIFNpbGljb25lIE1hZ2ljIFdhc2hpbmcgR2xvdmVzIHdpdGggU2NydWJiZXIsIENsZWFuaW5nIEJydXNoIFNjcnViYmVyIEdsb3ZlcyBIZWF0IFJlc2lzdGFudCBQYWlyIGZvciBDbGVhbmluZyBvZiBLaXRjaGVuLCBEaXNoZXMsIFZlZ2V0YWJsZXMgYW5kIEZydWl0cywgQmF0aHJvb20sIENhciBXYXNoLCBQZXQgQ2FyZSBhbmQgTXVsdGlwdXJwb3NlXCIsXG4gIFwicHJpY2VcIjogMjksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMTksXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogNDIsXG4gIFwiYnJhbmRcIjogXCJUQyBSZXVzYWJsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4OSxcbiAgXCJ0aXRsZVwiOiBcIlF1YWxjb21tIG9yaWdpbmFsIENhciBDaGFyZ2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJiZXN0IFF1YWxpdHkgQ0hhcmdlciAsIEhpZ2hseSBSZWNvbW1lbmRlZCB0byBhbGwgYmVzdCBRdWFsaXR5IENIYXJnZXIgLCBIaWdobHkgUmVjb21tZW5kZWQgdG8gYWxsXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjUzLFxuICBcInJhdGluZ1wiOiA0LjIsXG4gIFwic3RvY2tcIjogNzksXG4gIFwiYnJhbmRcIjogXCJUQyBSZXVzYWJsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkwLFxuICBcInRpdGxlXCI6IFwiQ3ljbGUgQmlrZSBHbG93XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJVbml2ZXJzYWwgZml0bWVudCBhbmQgZWFzeSB0byBpbnN0YWxsIG5vIHNwZWNpYWwgd2lyZXMsIGNhbiBiZSBlYXNpbHkgaW5zdGFsbGVkIGFuZCByZW1vdmVkLiBGaXRzIG1vc3Qgc3RhbmRhcmQgdHlyZSBhaXIgc3RlbSB2YWx2ZXMgb2Ygcm9hZCwgbW91bnRhaW4gYmljeWNsZXMsIG1vdG9jeWNsZXMgYW5kIGNhcnMuQnJpZ2h0IGxlZCB3aWxsIHR1cm4gb24gd1wiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4wOCxcbiAgXCJyYXRpbmdcIjogNC4xLFxuICBcInN0b2NrXCI6IDYzLFxuICBcImJyYW5kXCI6IFwiTmVvbiBMRUQgTGlnaHRcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MSxcbiAgXCJ0aXRsZVwiOiBcIkJsYWNrIE1vdG9yYmlrZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRW5naW5lIFR5cGU6V2V0IHN1bXAsIFNpbmdsZSBDeWxpbmRlciwgRm91ciBTdHJva2UsIFR3byBWYWx2ZXMsIEFpciBDb29sZWQgd2l0aCBTT0hDIChTaW5nbGUgT3ZlciBIZWFkIENhbSkgQ2hhaW4gRHJpdmUgQm9yZSAmIFN0cm9rZTo0Ny4wIHggNDkuNSBNTVwiLFxuICBcInByaWNlXCI6IDU2OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNjMsXG4gIFwicmF0aW5nXCI6IDQuMDQsXG4gIFwic3RvY2tcIjogMTE1LFxuICBcImJyYW5kXCI6IFwiTUVUUk8gNzBjYyBNb3RvcmN5Y2xlIC0gTVI3MFwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkyLFxuICBcInRpdGxlXCI6IFwiSE9UIFNBTEUgSU4gRVVST1BFIGVsZWN0cmljIHJhY2luZyBtb3RvcmN5Y2xlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIT1QgU0FMRSBJTiBFVVJPUEUgZWxlY3RyaWMgcmFjaW5nIG1vdG9yY3ljbGUgZWxlY3RyaWMgbW90b3JjeWNsZSBmb3Igc2FsZSBhZHVsdCBlbGVjdHJpYyBtb3RvcmN5Y2xlc1wiLFxuICBcInByaWNlXCI6IDkyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNCxcbiAgXCJyYXRpbmdcIjogNC4xOSxcbiAgXCJzdG9ja1wiOiAyMixcbiAgXCJicmFuZFwiOiBcIkJSQVZFIEJVTExcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvNC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MyxcbiAgXCJ0aXRsZVwiOiBcIkF1dG9tYXRpYyBNb3RvciBHYXMgTW90b3JjeWNsZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjE1MGNjIDQtU3Ryb2tlIE1vdG9yY3ljbGUgQXV0b21hdGljIE1vdG9yIEdhcyBNb3RvcmN5Y2xlcyBTY29vdGVyIG1vdG9yY3ljbGVzIDE1MGNjIHNjb290ZXJcIixcbiAgXCJwcmljZVwiOiAxMDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjM0LFxuICBcInJhdGluZ1wiOiA0Ljg0LFxuICBcInN0b2NrXCI6IDEyNyxcbiAgXCJicmFuZFwiOiBcInNob2NrIGFic29yYmVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTQsXG4gIFwidGl0bGVcIjogXCJuZXcgYXJyaXZhbHMgRmFzaGlvbiBtb3RvY3Jvc3MgZ29nZ2xlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwibmV3IGFycml2YWxzIEZhc2hpb24gbW90b2Nyb3NzIGdvZ2dsZXMgbW90b3JjeWNsZSBtb3RvY3Jvc3MgcmFjaW5nIG1vdG9yY3ljbGVcIixcbiAgXCJwcmljZVwiOiA5MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuODUsXG4gIFwicmF0aW5nXCI6IDQuMDYsXG4gIFwic3RvY2tcIjogMTA5LFxuICBcImJyYW5kXCI6IFwiSklFUE9MTFlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk1LFxuICBcInRpdGxlXCI6IFwiV2hvbGVzYWxlIGNhcmdvIGxhc2hpbmcgQmVsdFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2hvbGVzYWxlIGNhcmdvIGxhc2hpbmcgQmVsdCBUaWUgRG93biBlbmQgUmF0Y2hldCBzdHJhcCBjdXN0b21pemVkIHN0cmFwIDI1bW0gbW90b3JjeWNsZSAxNTAwa2dzIHdpdGggcnViYmVyIGhhbmRsZVwiLFxuICBcInByaWNlXCI6IDkzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNjcsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTQ0LFxuICBcImJyYW5kXCI6IFwiWGlhbmdsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk2LFxuICBcInRpdGxlXCI6IFwibGlnaHRpbmcgY2VpbGluZyBraXRjaGVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaG9sZXNhbGUgc2xpbSBoYW5naW5nIGRlY29yYXRpdmUga2lkIHJvb20gbGlnaHRpbmcgY2VpbGluZyBraXRjaGVuIGNoYW5kZWxpZXJzIHBlbmRhbnQgbGlnaHQgbW9kZXJuXCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0Ljg5LFxuICBcInJhdGluZ1wiOiA0LjgzLFxuICBcInN0b2NrXCI6IDk2LFxuICBcImJyYW5kXCI6IFwibGlnaHRpbmdicmlsbGlhbmNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk3LFxuICBcInRpdGxlXCI6IFwiTWV0YWwgQ2VyYW1pYyBGbG93ZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1ldGFsIENlcmFtaWMgRmxvd2VyIENoYW5kZWxpZXIgSG9tZSBMaWdodGluZyBBbWVyaWNhbiBWaW50YWdlIEhhbmdpbmcgTGlnaHRpbmcgUGVuZGFudCBMYW1wXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjk0LFxuICBcInJhdGluZ1wiOiA0LjkzLFxuICBcInN0b2NrXCI6IDE0NixcbiAgXCJicmFuZFwiOiBcIklmZWkgSG9tZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTgsXG4gIFwidGl0bGVcIjogXCIzIGxpZ2h0cyBsbmRlbnBhbnQga2l0Y2hlbiBpc2xhbmdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjMgbGlnaHRzIGxuZGVucGFudCBraXRjaGVuIGlzbGFuZyBkaW5pbmcgcm9vbSBwZW5kYW50IHJpY2UgcGFwZXIgY2hhbmRlbGllciBjb250ZW1wb3JhcnkgbGVkIHBlbmRhbnQgbGlnaHQgbW9kZXJuIGNoYW5kZWxpZXJcIixcbiAgXCJwcmljZVwiOiAzNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNS45MixcbiAgXCJyYXRpbmdcIjogNC45OSxcbiAgXCJzdG9ja1wiOiA0NCxcbiAgXCJicmFuZFwiOiBcIkRBREFXVVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5OSxcbiAgXCJ0aXRsZVwiOiBcIkFtZXJpY2FuIFZpbnRhZ2UgV29vZCBQZW5kYW50IExpZ2h0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbWVyaWNhbiBWaW50YWdlIFdvb2QgUGVuZGFudCBMaWdodCBGYXJtaG91c2UgQW50aXF1ZSBIYW5naW5nIExhbXAgTGFtcGFyYSBDb2xnYW50ZVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4Ljg0LFxuICBcInJhdGluZ1wiOiA0LjMyLFxuICBcInN0b2NrXCI6IDEzOCxcbiAgXCJicmFuZFwiOiBcIklmZWkgSG9tZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMDAsXG4gIFwidGl0bGVcIjogXCJDcnlzdGFsIGNoYW5kZWxpZXIgbWFyaWEgdGhlcmVzYSBmb3IgMTIgbGlnaHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyeXN0YWwgY2hhbmRlbGllciBtYXJpYSB0aGVyZXNhIGZvciAxMiBsaWdodFwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNixcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAxMzMsXG4gIFwiYnJhbmRcIjogXCJZSU9TSVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9XG4gIF0sXG4gIFwidG90YWxcIjogMTAwLFxuICBcInNraXBcIjogMCxcbiAgXCJsaW1pdFwiOiAxMDBcbiAgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9yb3V0aW5nJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21haW4tdGVtcGxhdGUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdG9yZS1wYWdlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2Vycm9yLXBhZ2UnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2FydC1wYWdlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tb2RhbC1wYWdlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3JhbmdlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2ZpbHRlckl0ZW0nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZ29vZHMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvdmlldyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc29ydGluZyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=