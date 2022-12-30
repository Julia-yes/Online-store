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
/* harmony import */ var _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/data-parser */ "./src/scripts/data-parser.ts");

let content;
function renderProductPage() {
    console.log(window.location);
    const productId = +window.location.pathname.split('/')[2];
    console.log(productId);
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
        console.log(filter);
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
function runSearch() {
    const searchInput = document.querySelector('.search__input');
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', () => {
        runFilter(searchInput.value);
    });
}
function runFilter(prop) {
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
        for (const product of this.products) {
            if (product.id === id)
                return product;
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
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/range */ "./src/components/range.ts");
/* harmony import */ var _components_filterItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _components_goods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/goods */ "./src/components/goods.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/view */ "./src/components/view.ts");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search */ "./src/components/search.ts");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.ts");
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDUDtBQUNoQztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBUTtBQUM1QiwyQkFBMkIsdURBQU07QUFDakM7QUFDQTtBQUNBLFFBQVEsd0VBQW9CO0FBQzVCLG9CQUFvQiw0REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0w4QztBQUNQO0FBQ0Q7QUFDYTtBQUN1QjtBQUNsQztBQUN4QztBQUNBO0FBQ0EsdUJBQXVCLHVFQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsSUFBSSxVQUFVLElBQUksMkNBQTJDLHVCQUF1QjtBQUMvSyxxQ0FBcUMsSUFBSSxNQUFNO0FBQy9DLHNFQUFzRSxJQUFJLEtBQUssdUJBQXVCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtRUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsSUFBSSxVQUFVLElBQUksd0NBQXdDLG1CQUFtQjtBQUNySyxrQ0FBa0MsSUFBSSxNQUFNO0FBQzVDLG1FQUFtRSxJQUFJLEtBQUssbUJBQW1CO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDRCQUE0QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVyxJQUFJLE1BQU0sR0FBRyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFvQjtBQUN4QixnQkFBZ0IsNERBQVE7QUFDeEI7QUFDQSxRQUFRLHdEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEI7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkI7QUFDQSxJQUFJLG1EQUFXO0FBQ2Y7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSztBQUM3RCwwREFBMEQsS0FBSztBQUMvRCxzREFBc0QsS0FBSztBQUMzRCx3REFBd0QsS0FBSztBQUM3RDtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsK0JBQStCLGlCQUFpQjtBQUNoRDtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QywrQkFBK0IsaUJBQWlCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRUFBZTtBQUMzQztBQUNBLHlDQUF5QyxtRUFBZSxhQUFhO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0JBQW9CLHVFQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVFQUFtQjtBQUMvQztBQUNBLHlDQUF5Qyx1RUFBbUIsYUFBYTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjhDO0FBQ0s7QUFDWjtBQUNoQztBQUNQO0FBQ0Esa0JBQWtCLHFFQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZUFBZTtBQUNsRSx1Q0FBdUMsd0JBQXdCLEtBQUs7QUFDcEU7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBLHlDQUF5QyxXQUFXLEtBQUs7QUFDekQseUNBQXlDLCtEQUErRCxLQUFLO0FBQzdHO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWSxPQUFPO0FBQ3pELCtDQUErQyxNQUFNLEVBQUUsV0FBVztBQUNsRTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsUUFBUTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBVSxhQUFhLE9BQU87QUFDMUMsWUFBWSxnRUFBaUI7QUFDN0IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0RBQWtELG9DQUFvQztBQUN0RixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU0sd0NBQXdDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RxRDtBQUNmO0FBQ087QUFDSztBQUNiO0FBQ2lCO0FBQ1Y7QUFDSjtBQUNBO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEIsSUFBSSxtREFBVztBQUNmLElBQUksMERBQWE7QUFDakIsSUFBSSxrREFBVTtBQUNkLElBQUksbURBQVc7QUFDZixJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUztBQUNiLElBQUksbUVBQXlCO0FBQzdCLElBQUkseURBQWtCO0FBQ3RCLElBQUkscURBQVk7QUFDaEIsSUFBSSxxREFBWTtBQUNoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkM4QztBQUM5QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJFQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDJCQUEyQjtBQUM3RiwwREFBMEQsY0FBYztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkY4QztBQUNIO0FBQ0U7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGNBQWMsd0VBQW9CLENBQUMsNERBQWE7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsS0FBSztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsTUFBTSxrQ0FBa0MsS0FBSyx3QkFBd0IsU0FBUyxTQUFTLElBQUksU0FBUyxJQUFJLGdCQUFnQixLQUFLO0FBQ25MLHNEQUFzRCxNQUFNLGdDQUFnQyxLQUFLLHdCQUF3QixTQUFTLFNBQVMsSUFBSSxTQUFTLElBQUksZ0JBQWdCLEtBQUs7QUFDakw7QUFDQSxZQUFZLDRFQUF3QjtBQUNwQztBQUNBO0FBQ0EseURBQXlELEtBQUssK0JBQStCLEtBQUssV0FBVyxTQUFTLFNBQVMsSUFBSSxRQUFRLElBQUk7QUFDL0k7QUFDQTtBQUNBLHlEQUF5RCxLQUFLLDZCQUE2QixLQUFLLFdBQVcsU0FBUyxTQUFTLElBQUksUUFBUSxJQUFJO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQWE7QUFDekI7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSw2REFBNkQsS0FBSztBQUNsRSxtRUFBbUUsS0FBSztBQUN4RSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsS0FBSztBQUNqRSx3REFBd0QsS0FBSztBQUM3RCwwREFBMEQsS0FBSztBQUMvRCxzREFBc0QsS0FBSztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsYUFBYTtBQUN2QixVQUFVLGFBQWEsRUFBRSx1Q0FBdUM7QUFDaEUsVUFBVSxZQUFZLEVBQUUseUNBQXlDO0FBQ2pFLFVBQVUsWUFBWSxFQUFFLHFDQUFxQztBQUM3RCxVQUFVLGFBQWEsRUFBRSxxQ0FBcUM7QUFDOUQsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxLQUFLO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkVBQXVCLEVBQUUsMkVBQXVCO0FBQ3pFO0FBQ0E7QUFDTztBQUNQLHlCQUF5QiwyRUFBdUIsRUFBRSwyRUFBdUI7QUFDekU7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakxBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUMrQztBQUNGO0FBQ007QUFDSjtBQUNpQjtBQUN4QjtBQUNMO0FBQ25DO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLGVBQWUsNERBQWlCO0FBQ2hDLFlBQVksc0RBQWM7QUFDMUIsYUFBYSx3REFBZTtBQUM1QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxjQUFjLDZEQUFnQjtBQUM5QixRQUFRLHFEQUFXO0FBQ25CLFFBQVEsZ0RBQVM7QUFDakIsUUFBUSwyREFBYztBQUN0QixLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLE1BQU07QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjs7Ozs7Ozs7Ozs7Ozs7O0FDNUlPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A4QztBQUNSO0FBQ0U7QUFDakM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBVyxZQUFZLCtCQUErQixHQUFHLGtDQUFrQztBQUN2RyxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBFQUFzQjtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSwwRUFBc0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBFQUFzQjtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSwwRUFBc0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLElBQUksbURBQVc7QUFDZjtBQUNPO0FBQ1A7QUFDQTtBQUNBLGlFQUFpRSxPQUFPLHFCQUFxQixPQUFPO0FBQ3BHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQ4QztBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUpBQWlKO0FBQ2pKLGtKQUFrSjtBQUNsSixxSkFBcUo7QUFDckosc0pBQXNKO0FBQ3RKO0FBQ0EsOEVBQThFLDRFQUF3QixDQUFDO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EscUNBQXFDLDRFQUF3QixDQUFDO0FBQzlEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0R3QztBQUNqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBVztBQUN2QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0IyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNERBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDREQUFhO0FBQzNDLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkh4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsNkJBQTZCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLCtDQUErQyx1QkFBdUI7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNRO0FBQ007QUFDUDtBQUNBO0FBQ0k7QUFDQTtBQUNEO0FBQ0c7QUFDUDtBQUNLO0FBQ0w7QUFDRDtBQUNFO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZXJyb3ItcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9maWx0ZXJJdGVtLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9nb29kcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvbWFpbi10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcmFuZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcm91dGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc29ydGluZy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9zdG9yZS1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZGF0YS1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9hc3NldHMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi4vc2NyaXB0cy9maWx0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhcnRQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJDYXJ0XCI7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IG5ldyBGaWx0ZXIoKTtcclxuICAgICAgICBmaWx0ZXIuc3dpdGNoQnJhbmQoJ0FwcGxlJyk7XHJcbiAgICAgICAgZmlsdGVyLnN3aXRjaEJyYW5kKCdTYW1zdW5nJyk7XHJcbiAgICAgICAgcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICAgICAgLy8gZmlsdGVyLnNldFN0b2NrKCdtYXgnLCA1MSk7XHJcbiAgICAgICAgLy8gcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIkNhcnRcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRXJyb3JQYWdlKCkge1xyXG4gICAgY29uc3QgZXJyb3JBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgaWYgKGVycm9yQXJlYSkge1xyXG4gICAgICAgIGVycm9yQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0nZXJyb3JfX2Jsb2NrJz5QQUdFIE5PVCBGT1VORCAoNDA0KTwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3NjcmlwdHMvZmlsdGVyJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHNRdWFudGl0eSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XHJcbmltcG9ydCB7IGNoYW5nZVJhbmdlLCBjaGFuZ2VQcmljZVJhbmdlLCBjaGFuZ2VTdG9ja1JhbmdlIH0gZnJvbSAnLi9yYW5nZSc7XHJcbmltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSBcIi4vcm91dGluZ1wiO1xyXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzKCkge1xyXG4gICAgY29uc3QgY2F0ZWdvcmllc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19jYXRlZ29yeV9hcmVhJyk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gcHJvZHVjdHMuY2F0ZWdvcmllcztcclxuICAgIGxldCBjYXRlZ29yeUlubmVyID0gYDxkaXYgY2xhc3M9J2NhdGVnb3J5X19jb250YWluZXInPmA7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGNhdGVnb3J5SW5uZXIgKz0gYDxkaXYgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94IGZpbHRlcl9fY2hlY2tib3hfY2F0ZWdvcnknIHZhbHVlPVwiJHtrZXl9XCIgbmFtZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnY2F0ZWdvcnknIGRhdGEtcXVhbnRpdHk9XCIke2NhdGVnb3JpZXNba2V5XS5sZW5ndGh9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X190aXRsZSc+JHtrZXl9JmVuc3A7PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X19xdWFudGl0eSBmaWx0ZXJfX3F1YW50aXR5JyBkYXRhLXBhcmFtID1cIiR7a2V5fVwiPigke2NhdGVnb3JpZXNba2V5XS5sZW5ndGh9KTwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGNhdGVnb3J5SW5uZXIgKz0gYDwvZGl2PmA7XHJcbiAgICBpZiAoY2F0ZWdvcmllc0FyZWEpIHtcclxuICAgICAgICBjYXRlZ29yaWVzQXJlYS5pbm5lckhUTUwgPSBjYXRlZ29yeUlubmVyO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckJyYW5kcygpIHtcclxuICAgIGNvbnN0IGJyYW5kc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19icmFuZF9hcmVhJyk7XHJcbiAgICBjb25zdCBicmFuZHMgPSBwcm9kdWN0cy5icmFuZHM7XHJcbiAgICBsZXQgYnJhbmRzSW5uZXIgPSBgPGRpdiBjbGFzcz0nYnJhbmRfX2NvbnRhaW5lcic+YDtcclxuICAgIGZvciAobGV0IGtleSBpbiBicmFuZHMpIHtcclxuICAgICAgICBicmFuZHNJbm5lciArPSBgPGRpdiBjbGFzcz0nZmlsdGVyX19zdHJpbmcnPlxyXG4gICAgICA8aW5wdXQgdHlwZSA9ICdjaGVja2JveCcgY2xhc3M9J2ZpbHRlcl9fY2hlY2tib3ggZmlsdGVyX19jaGVja2JveF9icmFuZCcgdmFsdWU9XCIke2tleX1cIiBuYW1lPVwiJHtrZXl9XCIgZGF0YS1wYXJhbSA9ICdicmFuZCcgZGF0YS1xdWFudGl0eT1cIiR7YnJhbmRzW2tleV0ubGVuZ3RofVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fcXVhbnRpdHkgZmlsdGVyX19xdWFudGl0eScgZGF0YS1wYXJhbSA9XCIke2tleX1cIj4oJHticmFuZHNba2V5XS5sZW5ndGh9KTwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxuICAgIGJyYW5kc0lubmVyICs9IGA8L2Rpdj5gO1xyXG4gICAgaWYgKGJyYW5kc0FyZWEpIHtcclxuICAgICAgICBicmFuZHNBcmVhLmlubmVySFRNTCA9IGJyYW5kc0lubmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0aWNrQ2hlY2tib3hlcygpIHtcclxuICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5kQ2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2NoZWNrYm94X2JyYW5kXCIpO1xyXG4gICAgICAgIGJyYW5kQ2hlY2tib3hzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmJyYW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PSBmaWx0ZXIuYnJhbmRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBicmFuZENoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19jaGVja2JveF9jYXRlZ29yeVwiKTtcclxuICAgICAgICBicmFuZENoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlci5jYXRlZ29yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gZmlsdGVyLmNhdGVnb3J5W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEZpbHRlclBhcmFtcygpIHtcclxuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveHMuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlRmlsdGVycyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcclxuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnV0dG9uX3Jlc2V0Jyk7XHJcbiAgICBidXR0b25SZXNldCA9PT0gbnVsbCB8fCBidXR0b25SZXNldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZpbHRlcnMpO1xyXG4gICAgY29uc3QgYnV0dG9uU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2J1dHRvbl9zYXZlJyk7XHJcbiAgICBidXR0b25TYXZlID09PSBudWxsIHx8IGJ1dHRvblNhdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2F2ZVVybCgpO1xyXG4gICAgICAgIGNoYW5nZVNhdmVCdXR0b24oKTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IGZpbHRlck51bGwgPSB7XHJcbiAgICBjYXRlZ29yeTogW10sXHJcbiAgICBicmFuZDogW10sXHJcbiAgICBwcmljZTogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG4gICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxufTtcclxubGV0IGZpbHRlciA9IHtcclxuICAgIGNhdGVnb3J5OiBbXSxcclxuICAgIGJyYW5kOiBbXSxcclxuICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmlsdGVycyhldmVudCkge1xyXG4gICAgbGV0IHBhcmFtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhcmFtO1xyXG4gICAgbGV0IG5ld0ZpbHRlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBsZXQgc2lkZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaWRlO1xyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtID09PSBcInByaWNlXCIgfHwgcGFyYW0gPT09IFwic3RvY2tcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ21pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLm1pbiA9IE51bWJlcihuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5tYXggPSBOdW1iZXIobmV3RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZCA9IGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ucHVzaChuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgcnVuRmlsdHJhdGlvbihwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW0gPT09IFwicHJpY2VcIiB8fCBwYXJhbSA9PT0gXCJzdG9ja1wiKSB7XHJcbiAgICAgICAgaW5zZXJ0UGFyYW0oYCR7cGFyYW19LSR7c2lkZX1gLCBuZXdGaWx0ZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaW5zZXJ0UGFyYW0ocGFyYW0sIG5ld0ZpbHRlcik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcnVuRmlsdHJhdGlvbihwcm9wKSB7XHJcbiAgICBsZXQgZmlsdGVyRG93bmxvYWRlZCA9IG5ldyBGaWx0ZXI7XHJcbiAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXIuY2F0ZWdvcnkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zd2l0Y2hDYXRlZ29yeShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlci5icmFuZC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaEJyYW5kKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5wcmljZS5taW4gIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFByaWNlKFwibWluXCIsIGZpbHRlci5wcmljZS5taW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5wcmljZS5tYXggIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFByaWNlKFwibWF4XCIsIGZpbHRlci5wcmljZS5tYXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5zdG9jay5taW4gIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFN0b2NrKFwibWluXCIsIGZpbHRlci5zdG9jay5taW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5zdG9jay5tYXggIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFN0b2NrKFwibWF4XCIsIGZpbHRlci5zdG9jay5tYXgpO1xyXG4gICAgfVxyXG4gICAgcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyRG93bmxvYWRlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XHJcbiAgICBpZiAocHJvcCA9PT0gJ3ByaWNlJykge1xyXG4gICAgICAgIGNoYW5nZVN0b2NrUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdG9jaycpIHtcclxuICAgICAgICBjaGFuZ2VQcmljZVJhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjaGFuZ2VSYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyR29vZHMoKTtcclxuICAgIHJlcmVuZGVyR29vZHNRdWFudGl0eSgpO1xyXG4gICAgcmVuZGVyR29vZHNRdWFudGl0eSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNYWluRmlsdGVyKGZpbHQpIHtcclxuICAgIGZpbHRlciA9IGZpbHQ7XHJcbiAgICBydW5GaWx0cmF0aW9uKG51bGwpO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVJhbmdlUG9pbnRzKHByb3ApIHtcclxuICAgIGxldCByYW5nZU1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmcm9tU2xpZGVyJHtwcm9wfWApO1xyXG4gICAgbGV0IHJhbmdlTWluTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyb21JbnB1dCR7cHJvcH1gKTtcclxuICAgIGxldCByYW5nZU1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b1NsaWRlciR7cHJvcH1gKTtcclxuICAgIGxldCByYW5nZU1heE51bSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0b0lucHV0JHtwcm9wfWApO1xyXG4gICAgaWYgKGZpbHRlcltwcm9wXS5taW4gIT09IG51bGwpIHtcclxuICAgICAgICByYW5nZU1pbi52YWx1ZSA9IGAke2ZpbHRlcltwcm9wXS5taW59YDtcclxuICAgICAgICByYW5nZU1pbk51bS52YWx1ZSA9IGAke2ZpbHRlcltwcm9wXS5taW59YDtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXJbcHJvcF0ubWF4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmFuZ2VNYXgudmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWF4fWA7XHJcbiAgICAgICAgcmFuZ2VNYXhOdW0udmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWF4fWA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVyZW5kZXJHb29kc1F1YW50aXR5KCkge1xyXG4gICAgY29uc3QgcXVhbnRpdHlBcmVhQnJhbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJyYW5kX19xdWFudGl0eScpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRCcmFuZHMgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcclxuICAgICAgICBmaWx0ZXJlZEJyYW5kcy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBxdWFudGl0eUFyZWFCcmFuZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRCcmFuZHMuaW5jbHVkZXMoaXRlbS5kYXRhc2V0LnBhcmFtKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuYnJhbmRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGl0ZW0uZGF0YXNldC5wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCgke3Byb2R1Y3RzLmJyYW5kc1trZXldLmxlbmd0aH0pYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSAnKDApJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHF1YW50aXR5QXJlYUNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGVnb3J5X19xdWFudGl0eScpO1xyXG4gICAgY29uc3QgZmlsdGVyZWRDYXRlZ29yaWVzID0gW107XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZpbHRlcmVkQ2F0ZWdvcmllcy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICBxdWFudGl0eUFyZWFDYXRlZ29yeS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZENhdGVnb3JpZXMuaW5jbHVkZXMoaXRlbS5kYXRhc2V0LnBhcmFtKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBpdGVtLmRhdGFzZXQucGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGAoJHtwcm9kdWN0cy5jYXRlZ29yaWVzW2tleV0ubGVuZ3RofSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMCknO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcclxuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZmlsdGVyID0gZmlsdGVyTnVsbDtcclxuICAgIHJ1bkZpbHRyYXRpb24obnVsbCk7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPSBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIHNhdmVVcmwoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbWV0aGluZyB3ZW50IHdyb25nJywgZXJyKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVNhdmVCdXR0b24oKSB7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYnV0dG9uX3NhdmVcIik7XHJcbiAgICBpZiAoIWJ1dHRvbilcclxuICAgICAgICByZXR1cm47XHJcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTYXZlZFwiO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU2F2ZSBmaWx0ZXJzXCI7XHJcbiAgICB9LCAyMDAwKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRmlsdGVycygpIHtcclxuICAgIHJlbmRlckNhdGVnb3JpZXMoKTtcclxuICAgIHJlbmRlckJyYW5kcygpO1xyXG4gICAgYWRkRmlsdGVyUGFyYW1zKCk7XHJcbiAgICBhZGRFdmVudHMoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xyXG4gICAgaWYgKGZvb3RlckFyZWEpIHtcclxuICAgICAgICBmb290ZXJBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9faW5uZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3RleHRcIj5NYWRlIGJ5IDwvZGl2PlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSnVsaWEteWVzXCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj4gSnVsaWEgQm9sb25pa292YSAmIER6bWl0cnkgQW5pc2tvdmljaDwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX195ZWFyXCI+MjAyMjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fc2Nob29sXCI+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vcnMuc2Nob29sL2pzL1wiIGNsYXNzPVwiZm9vdGVyX19zY2hvb2wtbmFtZVwiPlxyXG4gICAgICAgICAgPGltZyBhbHQ9XCJycy1zY2hvb2xcIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9yc0xvZ28uc3ZnXCIgY2xhc3M9XCJmb290ZXJfX3NjaG9vbC1pbWdcIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi4vc2NyaXB0cy9kYXRhLXBhcnNlcic7XHJcbmltcG9ydCB7IHJlbmRlclByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgeyBhZGRQYXRoVXJsIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdvb2RzKCkge1xyXG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XHJcbiAgICBjb25zdCBnb29kcyA9IHByb2R1Y3RzLnByb2R1Y3RzO1xyXG4gICAgbGV0IGdvb2RzSW5uZXIgPSBgYDtcclxuICAgIGlmIChnb29kcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGdvb2RzSW5uZXIgKz0gYDxkaXYgY2xhc3M9J2dvb2RzX19lbXB0eSc+IE5vIHByb2R1Y3RzIGZvdW5kIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZ29vZHMpIHtcclxuICAgICAgICAgICAgbGV0IGdvb2QgPSBnb29kc1trZXldO1xyXG4gICAgICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fY2FyZCBjYXJkJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aHVtYm5haWwnPlxyXG4gICAgICAgICAgPGltZyBhbHQ9J2dvb2QnIGNsYXNzPSdjYXJkX19pbWcnIHNyYz0nJHtnb29kLnRodW1ibmFpbH0nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fZGlzY29udCc+JHtnb29kLmRpc2NvdW50UGVyY2VudGFnZX0mIzM3OzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3RpdGxlJz4ke2dvb2QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2UnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2VfbmV3Jz4ke2dvb2QucHJpY2V9JiMzNjs8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlX29sZCc+JHtNYXRoLmZsb29yKGdvb2QucHJpY2UgLyAoMTAwIC0gZ29vZC5kaXNjb3VudFBlcmNlbnRhZ2UpICogMTAwKX0mIzM2OzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2JvdHRvbSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19yYXRpbmcnPiR7Z29vZC5yYXRpbmd9JnN0YXJmOzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fc3RvY2snPlN0b2NrICYjNTg7ICYjMzI7ICR7Z29vZC5zdG9ja308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19idXR0b25zJz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9J2NhcmRfX2J1dHRvbiBjYXJkX19idXR0b25fYWRkJz5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9tb3JlJyBkYXRhLWdvb2RJRCA9IFwiJHtnb29kLmlkfVwiPlNlZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGdvb2RzQXJlYSkge1xyXG4gICAgICAgIGdvb2RzQXJlYS5pbm5lckhUTUwgPSBnb29kc0lubmVyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnV0dG9uc1RvUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19idXR0b25fbW9yZScpO1xyXG4gICAgYnV0dG9uc1RvUHJvZHVjdC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGdvb2RJRCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmdvb2RpZDtcclxuICAgICAgICAgICAgYWRkUGF0aFVybChgL3Byb2R1Y3QvJHtnb29kSUR9YCk7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2R1Y3RQYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJ1dHRvbkNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2J1dHRvbl9hZGRcIik7XHJcbiAgICBidXR0b25DYXJ0LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4geyBjaGFuZ2VCdXR0b25DYXJ0KGUuY3VycmVudFRhcmdldCk7IH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlQnV0dG9uQ2FydChlKSB7XHJcbiAgICBpZiAoKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5pbm5lckhUTUwpID09IFwiQWRkIHRvIGNhcnRcIikge1xyXG4gICAgICAgIGUuaW5uZXJIVE1MID0gXCJEZWxldGUgZnJvbSBjYXJ0XCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLmlubmVySFRNTCkgPT0gXCJEZWxldGUgZnJvbSBjYXJ0XCIpIHtcclxuICAgICAgICBlLmlubmVySFRNTCA9IFwiQWRkIHRvIGNhcnRcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaWYgKGhlYWRlckFyZWEpIHtcclxuICAgICAgICBoZWFkZXJBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fdGVtcGxhdGVcIj5cclxuICAgICAgPGEgaHJlZj0nLyc+PGltZyBjbGFzcz1cImhlYWRlcl9fbG9nb1wiIGFsdD1cInNob3AgbG9nb1wiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nXCI+PC9hPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19wcmljZVwiPkNhcnQgdG90YWwmIzU4OyAmIzMyOyAwPHNwYW4gY2xhc3M9XCJoZWFkZXJfX3ZhbHVlXCI8L3NwYW4+JiMzNjs8L2Rpdj5cclxuICAgICAgPGEgaHJlZj0nL2NhcnQnIGNsYXNzPVwiaGVhZGVyX19jYXJ0XCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImhlYWRlcl9fY2FydF9pbWdcIiBhbHQ9XCJjYXJ0XCIgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWcvY2FydC5wbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19jYXJ0X3F1YW50aXR5XCI+MDwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uLCBwYXJzZVVybCB9IGZyb20gJy4vcm91dGluZyc7XHJcbmltcG9ydCB7IHJlbmRlckdvb2RzIH0gZnJvbSAnLi9nb29kcyc7XHJcbmltcG9ydCB7IHJlbmRlckZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xyXG5pbXBvcnQgeyBjaGFuZ2VSYW5nZSwgZmlsbFZhbHVlcyB9IGZyb20gXCIuL3JhbmdlXCI7XHJcbmltcG9ydCB7IHJ1blNlYXJjaCB9IGZyb20gJy4vc2VhcmNoJztcclxuaW1wb3J0IHsgYWRkTGlzdGVuZXJTb3J0aW5nQnV0dG9ucyB9IGZyb20gXCIuL3NvcnRpbmdcIjtcclxuaW1wb3J0IHsgYWRkTGlzdGVuZXJGb3JWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuY29uc3QgdGVtcGxhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9fcHJvamVjdFwiKTtcclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoKSB7XHJcbiAgICBpZiAodGVtcGxhdGVBcmVhKSB7XHJcbiAgICAgICAgdGVtcGxhdGVBcmVhLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSAnd3JhcHBlcl9fbWFpbic+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3MgPSAnaGVhZGVyJz5IZWFkZXJcclxuICAgICAgICA8YSBocmVmPScvJz5Mb2dvPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9Jy9jYXJ0Jz5DYXJ0PC9hPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3MgPSAnbWFpbic+TWFpblxyXG4gICAgICAgIDxhIGhyZWY9Jy9wcm9kdWN0Jz5Qcm9kdWN0PC9hPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3MgPSAnZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByb2plY3QoKSB7XHJcbiAgICByZW5kZXJUZW1wbGF0ZSgpO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxuICAgIHJlbmRlckdvb2RzKCk7XHJcbiAgICByZW5kZXJGaWx0ZXJzKCk7XHJcbiAgICBmaWxsVmFsdWVzKCk7XHJcbiAgICBjaGFuZ2VSYW5nZSgpO1xyXG4gICAgcGFyc2VVcmwoKTtcclxuICAgIHJ1blNlYXJjaCgpO1xyXG4gICAgYWRkTGlzdGVuZXJTb3J0aW5nQnV0dG9ucygpO1xyXG4gICAgYWRkTGlzdGVuZXJGb3JWaWV3KCk7XHJcbiAgICByZW5kZXJIZWFkZXIoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG59XHJcbmluaXRQcm9qZWN0KCk7XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5sZXQgY29udGVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RQYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKTtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9ICt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RJZCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyQ3J1bWJzKHByb2R1Y3QpO1xyXG4gICAgICAgIHJlbmRlclByb2R1Y3QocHJvZHVjdCk7XHJcbiAgICAgICAgcmVuZGVyUHVyY2hhc2UocHJvZHVjdCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQ3J1bWJzKHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGNydW1ic0Jsb2NrID0gY3JlYXRlTm9kZSgnY3J1bWJzJyk7XHJcbiAgICBjb25zdCBzdG9yZUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBcIlN0b3JlXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgcHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmNhdGVnb3J5KTtcclxuICAgIGNvbnN0IGJyYW5kQ3J1bWIgPSBjcmVhdGVOb2RlKCdjcnVtYicsIHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5icmFuZCk7XHJcbiAgICBjb25zdCB0aXRsZUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QudGl0bGUpO1xyXG4gICAgY3J1bWJzQmxvY2suYXBwZW5kKHN0b3JlQ3J1bWIsIGNhdGVnb3J5Q3J1bWIsIGJyYW5kQ3J1bWIsIHRpdGxlQ3J1bWIpO1xyXG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChjcnVtYnNCbG9jayk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdChwcm9kdWN0KSB7XHJcbiAgICBjb25zdCBwcm9kdWN0QmxvY2sgPSBjcmVhdGVOb2RlKCdwcm9kdWN0Jyk7XHJcbiAgICBjb25zdCBwaG90b3NCbG9jayA9IGNyZWF0ZU5vZGUoJ3Bob3RvcycpO1xyXG4gICAgY29uc3QgbWFpblBob3RvQmxvY2sgPSBjcmVhdGVOb2RlKCdtYWluJyk7XHJcbiAgICBjb25zdCBtYWluUGhvdG8gPSBjcmVhdGVOb2RlKCdtYWluLXBob3RvJyk7XHJcbiAgICBjb25zdCBtYWluUGhvdG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1haW5QaG90b0ltZy5jbGFzc05hbWUgPSAnbWFpbi1waG90b19faW1nJztcclxuICAgIG1haW5QaG90b0ltZy5zcmMgPSBwcm9kdWN0LnRodW1ibmFpbDtcclxuICAgIG1haW5QaG90by5hcHBlbmQobWFpblBob3RvSW1nKTtcclxuICAgIG1haW5QaG90b0Jsb2NrLmFwcGVuZChtYWluUGhvdG8pO1xyXG4gICAgY29uc3Qgc21hbGxQaG90b3NCbG9jayA9IGNyZWF0ZU5vZGUoJ3NtYWxsLXBob3RvcycpO1xyXG4gICAgZm9yIChjb25zdCBpbWFnZSBvZiBwcm9kdWN0LmltYWdlcykge1xyXG4gICAgICAgIGlmIChpbWFnZSA9PT0gcHJvZHVjdC50aHVtYm5haWwpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsUGhvdG8gPSBjcmVhdGVOb2RlKCdzbWFsbC1waG90bycpO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsUGhvdG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBzbWFsbFBob3RvSW1nLnNyYyA9IGltYWdlO1xyXG4gICAgICAgIHNtYWxsUGhvdG8uYXBwZW5kKHNtYWxsUGhvdG9JbWcpO1xyXG4gICAgICAgIHNtYWxsUGhvdG9zQmxvY2suYXBwZW5kKHNtYWxsUGhvdG8pO1xyXG4gICAgfVxyXG4gICAgcGhvdG9zQmxvY2suYXBwZW5kKG1haW5QaG90b0Jsb2NrLCBzbWFsbFBob3Rvc0Jsb2NrKTtcclxuICAgIGNvbnN0IHByb2R1Y3REYXRhQmxvY2sgPSBjcmVhdGVOb2RlKCdkYXRhJyk7XHJcbiAgICBjb25zdCBwcm9kdWN0VGl0bGUgPSBjcmVhdGVOb2RlKCdkYXRhX190aXRsZScsIHByb2R1Y3QudGl0bGUpO1xyXG4gICAgY29uc3QgcHJvZHVjdERlc2NyaXB0aW9uID0gY3JlYXRlTm9kZSgnZGF0YV9fZGVzY3JpcHRpb24nLCBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcclxuICAgIGNvbnN0IHByb2R1Y3RCcmFuZCA9IGNyZWF0ZU5vZGUoJ2RhdGFfX2JyYW5kJywgcHJvZHVjdC5icmFuZCk7XHJcbiAgICBjb25zdCBwcm9kdWN0Q2F0ZWdvcnkgPSBjcmVhdGVOb2RlKCdkYXRhX19jYXRlZ29yeScsIHByb2R1Y3QuY2F0ZWdvcnkpO1xyXG4gICAgY29uc3QgcHJvZHVjdFN0YXRzID0gY3JlYXRlTm9kZSgnc3RhdHMnKTtcclxuICAgIGNvbnN0IHByb2R1Y3RSYXRpbmcgPSBjcmVhdGVOb2RlKCdkYXRhX19yYXRpbmcnLCAnUmF0aW5nOiAnICsgcHJvZHVjdC5yYXRpbmcpO1xyXG4gICAgY29uc3QgcHJvZHVjdFN0b2NrID0gY3JlYXRlTm9kZSgnZGF0YV9fc3RvY2snLCAnU3RvY2s6ICcgKyBwcm9kdWN0LnN0b2NrKTtcclxuICAgIHByb2R1Y3RTdGF0cy5hcHBlbmQocHJvZHVjdFJhdGluZywgcHJvZHVjdFN0b2NrKTtcclxuICAgIHByb2R1Y3REYXRhQmxvY2suYXBwZW5kKHByb2R1Y3RUaXRsZSwgcHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0QnJhbmQsIHByb2R1Y3RDYXRlZ29yeSwgcHJvZHVjdFN0YXRzKTtcclxuICAgIHByb2R1Y3RCbG9jay5hcHBlbmQocGhvdG9zQmxvY2ssIHByb2R1Y3REYXRhQmxvY2spO1xyXG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChwcm9kdWN0QmxvY2spO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclB1cmNoYXNlKHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IHB1cmNoYXNlQmxvY2sgPSBjcmVhdGVOb2RlKCdwdXJjaGFzZScpO1xyXG4gICAgY29uc3QgcHJpY2VCbG9jayA9IGNyZWF0ZU5vZGUoJ3ByaWNlJyk7XHJcbiAgICBjb25zdCBkaXNjb3VudCA9IGNyZWF0ZU5vZGUoJ3ByaWNlX19kaXNjb3VudCcsIGBEaXNjb3VudDogXFxuJHtwcm9kdWN0LmRpc2NvdW50UGVyY2VudGFnZX1gKTtcclxuICAgIGNvbnN0IHByaWNlID0gY3JlYXRlTm9kZSgncHJpY2VfX2Ftb3VudCcsIGBQcmljZTogXFxuJHtwcm9kdWN0LnByaWNlfWApO1xyXG4gICAgcHJpY2VCbG9jay5hcHBlbmQoZGlzY291bnQsIHByaWNlKTtcclxuICAgIGNvbnN0IGJ1dHRvbnNCbG9jayA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcclxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmNsYXNzTmFtZSA9ICdidXR0b24gYnV0dG9uX19hZGQnO1xyXG4gICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gJ0FkZCB0byBDYXJ0JztcclxuICAgIGNvbnN0IGJ1dHRvbkJ1eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uQnV5LmNsYXNzTmFtZSA9ICdidXR0b24gYnV0dG9uX19idXknO1xyXG4gICAgYnV0dG9uQnV5LnRleHRDb250ZW50ID0gJ0J1eSBOb3cnO1xyXG4gICAgYnV0dG9uc0Jsb2NrLmFwcGVuZChidXR0b25BZGQsIGJ1dHRvbkJ1eSk7XHJcbiAgICBwdXJjaGFzZUJsb2NrLmFwcGVuZChwcmljZUJsb2NrLCBidXR0b25zQmxvY2spO1xyXG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChwdXJjaGFzZUJsb2NrKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVOb2RlKGNsYXNzTmFtZSwgdGV4dENvbnRlbnQpIHtcclxuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKHRleHRDb250ZW50KVxyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL2Fzc2V0cy9kYXRhL2RhdGEnO1xyXG5pbXBvcnQgeyBjaGFuZ2VGaWx0ZXJzIH0gZnJvbSAnLi9maWx0ZXJJdGVtJztcclxubGV0IHByaWNlTWluID0gMDtcclxubGV0IHByaWNlTWF4ID0gMDtcclxubGV0IHN0b2NrTWluID0gMDtcclxubGV0IHN0b2NrTWF4ID0gMDtcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxWYWx1ZXMoKSB7XHJcbiAgICBsZXQgcHJvID0gcHJvZHVjdHMuZ2V0UHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7XHJcbiAgICBwcm8uc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICByZXR1cm4gZWwxLnByaWNlIC0gZWwyLnByaWNlO1xyXG4gICAgfSk7XHJcbiAgICBwcmljZU1heCA9IHByb1twcm8ubGVuZ3RoIC0gMV0ucHJpY2U7XHJcbiAgICBwcmljZU1pbiA9IHByb1swXS5wcmljZTtcclxuICAgIHByby5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xyXG4gICAgICAgIHJldHVybiBlbDEuc3RvY2sgLSBlbDIuc3RvY2s7XHJcbiAgICB9KTtcclxuICAgIHN0b2NrTWluID0gcHJvWzBdLnN0b2NrO1xyXG4gICAgc3RvY2tNYXggPSBwcm9bcHJvLmxlbmd0aCAtIDFdLnN0b2NrO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclJhbmdlKHByb3AsIG1pblZhbHVlLCBtYXhWYWx1ZSkge1xyXG4gICAgbGV0IG1pbiA9IDA7XHJcbiAgICBsZXQgbWF4ID0gMDtcclxuICAgIGlmIChwcm9wID09IFwicHJpY2VcIikge1xyXG4gICAgICAgIG1pbiA9IHByaWNlTWluO1xyXG4gICAgICAgIG1heCA9IHByaWNlTWF4O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbWluID0gc3RvY2tNaW47XHJcbiAgICAgICAgbWF4ID0gc3RvY2tNYXg7XHJcbiAgICB9XHJcbiAgICBpZiAobWluVmFsdWUgPT0gLTEgfHwgbWF4VmFsdWUgPT0gLTEpIHtcclxuICAgICAgICBtaW5WYWx1ZSA9IG1pbjtcclxuICAgICAgICBtYXhWYWx1ZSA9IG1heDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhbmdlUGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmlsdGVyX19yYW5nZV8ke3Byb3B9YCk7XHJcbiAgICBpZiAocmFuZ2VQbGFjZSkge1xyXG4gICAgICAgIGxldCByYW5nZUlubmVyID0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udGFpbmVyIHJhbmdlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udHJvbF9zbGlkZXJzXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInJhbmdlX19pbnB1dCByYW5nZV9faW5wdXRfJHtwcm9wfSByYW5nZV9faW5wdXRfbWluXCIgaWQ9XCJmcm9tU2xpZGVyJHtwcm9wfVwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiJHttaW5WYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9XCIke21heH1cIiBkYXRhLXBhcmFtPVwiJHtwcm9wfVwiIGRhdGEtc2lkZSA9XCJtaW5cIi8+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3MgPSBcInJhbmdlX19pbnB1dCByYW5nZV9faW5wdXRfJHtwcm9wfSByYW5nZV9faW5wdXRfbWF4XCIgaWQ9XCJ0b1NsaWRlciR7cHJvcH1cIiB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIiR7bWF4VmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCIgZGF0YS1wYXJhbT1cIiR7cHJvcH1cIiBkYXRhLXNpZGUgPVwibWF4XCIvPlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIGlmIChwcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJhbmdlSW5uZXIgKz0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udHJvbF9mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJhbmdlX19pbnB1dF9udW1iZXIgcmFuZ2VfXyR7cHJvcH1cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJmcm9tSW5wdXQke3Byb3B9XCIgdmFsdWU9XCIke21pblZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD0ke21heH0vPiYjMzY7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmFuZ2VfX2lucHV0X251bWJlciByYW5nZV9fJHtwcm9wfVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cInRvSW5wdXQke3Byb3B9XCIgdmFsdWU9XCIke21heFZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD0ke21heH0vPiYjMzY7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJhbmdlSW5uZXIgKz0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fZW1wdHlcIj5ObyBwcm9kdWN0cyBmb3VuZDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhbmdlSW5uZXIgKz0gYDwvZGl2PmA7XHJcbiAgICAgICAgcmFuZ2VQbGFjZS5pbm5lckhUTUwgPSByYW5nZUlubmVyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFuZ2VfX2lucHV0Jyk7XHJcbiAgICByYW5nZS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUZpbHRlcnMoZSk7XHJcbiAgICAgICAgICAgIGNoYW5nZVJhbmdlVmFsdWUocHJvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VSYW5nZVZhbHVlKHByb3ApIHtcclxuICAgIGNvbnN0IHJhbmdlVmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJhbmdlX18ke3Byb3B9YCk7XHJcbiAgICBjb25zdCByYW5nZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5yYW5nZV9faW5wdXRfJHtwcm9wfWApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZVZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJhbmdlVmFsdWVzWzBdLnZhbHVlID0gcmFuZ2VJbnB1dHNbMF0udmFsdWU7XHJcbiAgICAgICAgcmFuZ2VWYWx1ZXNbMV0udmFsdWUgPSByYW5nZUlucHV0c1sxXS52YWx1ZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRSYW5nZUZ1bmN0aW9uYWxpdHkocHJvcCkge1xyXG4gICAgY29uc3QgZnJvbVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmcm9tU2xpZGVyJHtwcm9wfWApO1xyXG4gICAgY29uc3QgdG9TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9TbGlkZXIke3Byb3B9YCk7XHJcbiAgICBjb25zdCBmcm9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZnJvbUlucHV0JHtwcm9wfWApO1xyXG4gICAgY29uc3QgdG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b0lucHV0JHtwcm9wfWApO1xyXG4gICAgZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIHRvU2xpZGVyKTtcclxuICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xyXG4gICAgaWYgKGZyb21TbGlkZXIgJiYgdG9TbGlkZXIgJiYgZnJvbUlucHV0ICYmIHRvSW5wdXQpIHtcclxuICAgICAgICBmcm9tU2xpZGVyLm9uaW5wdXQgPSAoKSA9PiBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KTtcclxuICAgICAgICB0b1NsaWRlci5vbmlucHV0ID0gKCkgPT4gY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KTtcclxuICAgICAgICBmcm9tSW5wdXQub25pbnB1dCA9ICgpID0+IGNvbnRyb2xGcm9tSW5wdXQoZnJvbVNsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCB0b1NsaWRlcik7XHJcbiAgICAgICAgdG9JbnB1dC5vbmlucHV0ID0gKCkgPT4gY29udHJvbFRvSW5wdXQodG9TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29udHJvbEZyb21JbnB1dChmcm9tU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIGNvbnRyb2xTbGlkZXIpIHtcclxuICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21JbnB1dCwgdG9JbnB1dCk7XHJcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tSW5wdXQsIHRvSW5wdXQsICcjQzZDNkM2JywgJyNiYjFiMjMnLCBjb250cm9sU2xpZGVyKTtcclxuICAgICAgICBpZiAoZnJvbSA+IHRvKSB7XHJcbiAgICAgICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XHJcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xyXG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbUlucHV0LCB0b0lucHV0LCAnI0M2QzZDNicsICcjYmIxYjIzJywgY29udHJvbFNsaWRlcik7XHJcbiAgICAgICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b0lucHV0KTtcclxuICAgICAgICBpZiAoZnJvbSA8PSB0bykge1xyXG4gICAgICAgICAgICB0b1NsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tU2xpZGVyLCB0b1NsaWRlcik7XHJcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIHRvU2xpZGVyKTtcclxuICAgICAgICBpZiAoZnJvbSA+IHRvKSB7XHJcbiAgICAgICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNvbnRyb2xUb1NsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgdG9JbnB1dCkge1xyXG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xyXG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XHJcbiAgICAgICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XHJcbiAgICAgICAgaWYgKGZyb20gPD0gdG8pIHtcclxuICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcoZnJvbSk7XHJcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFBhcnNlZChjdXJyZW50RnJvbSwgY3VycmVudFRvKSB7XHJcbiAgICAgICAgY29uc3QgZnJvbSA9IHBhcnNlSW50KGN1cnJlbnRGcm9tLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgY29uc3QgdG8gPSBwYXJzZUludChjdXJyZW50VG8udmFsdWUsIDEwKTtcclxuICAgICAgICByZXR1cm4gW2Zyb20sIHRvXTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZpbGxTbGlkZXIoZnJvbSwgdG8sIHNsaWRlckNvbG9yLCByYW5nZUNvbG9yLCBjb250cm9sU2xpZGVyKSB7XHJcbiAgICAgICAgaWYgKGZyb20gJiYgdG8gJiYgY29udHJvbFNsaWRlcikge1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZURpc3RhbmNlID0gTnVtYmVyKHRvLm1heCkgLSBOdW1iZXIodG8ubWluKTtcclxuICAgICAgICAgICAgY29uc3QgZnJvbVBvc2l0aW9uID0gTnVtYmVyKGZyb20udmFsdWUpIC0gTnVtYmVyKHRvLm1pbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSBOdW1iZXIodG8udmFsdWUpIC0gTnVtYmVyKHRvLm1pbik7XHJcbiAgICAgICAgICAgIGNvbnRyb2xTbGlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gMCUsXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gJHsoZnJvbVBvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLFxyXG4gICAgICAgICR7cmFuZ2VDb2xvcn0gJHsoKGZyb21Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkpICogMTAwfSUsXHJcbiAgICAgICAgJHtyYW5nZUNvbG9yfSAkeyh0b1Bvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcclxuICAgICAgICAke3NsaWRlckNvbG9yfSAkeyh0b1Bvc2l0aW9uKSAvIChyYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcclxuICAgICAgICAke3NsaWRlckNvbG9yfSAxMDAlKWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VG9nZ2xlQWNjZXNzaWJsZShjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgdG9TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9TbGlkZXIke3Byb3B9YCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgTnVtYmVyKGN1cnJlbnRUYXJnZXQudmFsdWUpIDw9IDAgJiYgdG9TbGlkZXIpIHtcclxuICAgICAgICAgICAgdG9TbGlkZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRvU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0b1NsaWRlci5zdHlsZS56SW5kZXggPSBTdHJpbmcoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaWNlUmFuZ2UoKSB7XHJcbiAgICByZW5kZXJSYW5nZShcInByaWNlXCIsIHByb2R1Y3RzLnByaWNlUmFuZ2UubWluLCBwcm9kdWN0cy5wcmljZVJhbmdlLm1heCk7XHJcbiAgICAvL2FkZFJhbmdlRnVuY3Rpb25hbGl0eShcInByaWNlXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTdG9ja1JhbmdlKCkge1xyXG4gICAgcmVuZGVyUmFuZ2UoXCJzdG9ja1wiLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1pbiwgcHJvZHVjdHMuc3RvY2tSYW5nZS5tYXgpO1xyXG4gICAgLy9hZGRSYW5nZUZ1bmN0aW9uYWxpdHkoXCJzdG9ja1wiKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUmFuZ2UoKSB7XHJcbiAgICBjaGFuZ2VQcmljZVJhbmdlKCk7XHJcbiAgICBjaGFuZ2VTdG9ja1JhbmdlKCk7XHJcbn1cclxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyByZW5kZXJFcnJvclBhZ2UgfSBmcm9tICcuL2Vycm9yLXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJDYXJ0UGFnZSB9IGZyb20gJy4vY2FydC1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyUHJvZHVjdFBhZ2UgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlclN0b3JlUGFnZSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XHJcbmltcG9ydCB7IGNoYW5nZU1haW5GaWx0ZXIsIHRpY2tDaGVja2JveGVzIH0gZnJvbSAnLi9maWx0ZXJJdGVtJztcclxuaW1wb3J0IHsgbWFrZVNvcnRpbmcgfSBmcm9tICcuL3NvcnRpbmcnO1xyXG5pbXBvcnQgeyBhcHBseVZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcbmNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAgICcnOiByZW5kZXJTdG9yZVBhZ2UsXHJcbiAgICAncHJvZHVjdCc6IHJlbmRlclByb2R1Y3RQYWdlLFxyXG4gICAgJ2NhcnQnOiByZW5kZXJDYXJ0UGFnZSxcclxuICAgICdlcnJvcic6IHJlbmRlckVycm9yUGFnZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XHJcbiAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1twYXRoXSB8fCByb3V0ZXMuZXJyb3I7XHJcbiAgICByb3V0ZSgpO1xyXG59KTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhdGhVcmwocHJvcCkge1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwcm9wKTtcclxuICAgIGhhbmRsZUxvY2F0aW9uKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKTtcclxuICAgICAgICBsZXQgZmlsdGVyID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogW10sXHJcbiAgICAgICAgICAgIGJyYW5kOiBbXSxcclxuICAgICAgICAgICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgICAgICAgICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCB2aWV3ID0gXCJcIjtcclxuICAgICAgICBsZXQgc29ydCA9IFwiXCI7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwiY2F0ZWdvcnlcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyLmNhdGVnb3J5ID0gYXJyWzFdLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJicmFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyUmVzdWx0ID0gYXJyWzFdLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXJyUmVzdWx0Lm1hcChpdGVtID0+IGRlY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuYnJhbmQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJwcmljZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzBdLmluY2x1ZGVzKFwibWluXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnByaWNlLm1pbiA9IE51bWJlcihhcnJbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnByaWNlLm1heCA9IE51bWJlcihhcnJbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwic3RvY2tcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyclswXS5pbmNsdWRlcyhcIm1pblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5zdG9jay5taW4gPSBOdW1iZXIoYXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5zdG9jay5tYXggPSBOdW1iZXIoYXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInZpZXdcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IGFyclsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInNvcnRcIikpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgc29ydCA9IGFyclsxXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XHJcbiAgICAgICAgeWllbGQgY2hhbmdlTWFpbkZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgIG1ha2VTb3J0aW5nKHNvcnQpO1xyXG4gICAgICAgIGFwcGx5Vmlldyh2aWV3KTtcclxuICAgICAgICB0aWNrQ2hlY2tib3hlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydFBhcmFtKGtleSwgdmFsdWUpIHtcclxuICAgIGlmIChrZXkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICBsZXQga3ZwID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBmb3IgKDsgaSA8IGt2cC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChrdnBbaV0uc3RhcnRzV2l0aChrZXkgKyAnPScpKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWlyID0ga3ZwW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IFwic29ydFwiIHx8IHBhaXJbMF0gPT0gXCJ2aWV3XCIgfHwgcGFpclswXSA9PSBcInByaWNlLW1pblwiIHx8IHBhaXJbMF0gPT0gXCJwcmljZS1tYXhcIiB8fCBwYWlyWzBdID09IFwic3RvY2stbWluXCIgfHwgcGFpclswXSA9PSBcInN0b2NrLW1heFwiKSB7XHJcbiAgICAgICAgICAgICAgICBwYWlyWzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFpclsxXS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVBcnIgPSBwYWlyWzFdLnNwbGl0KFwiKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZUFycltpXSA9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhaXJbMV0gPSB2YWx1ZUFyci5qb2luKCcqJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWlyWzFdID0gcGFpclsxXSArIGAqJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGt2cFtpXSA9IHBhaXIuam9pbignPScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaSA+PSBrdnAubGVuZ3RoKSB7XHJcbiAgICAgICAga3ZwW2t2cC5sZW5ndGhdID0gW2tleSwgdmFsdWVdLmpvaW4oJz0nKTtcclxuICAgIH1cclxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPT0gXCJcIikge1xyXG4gICAgICAgIGt2cC5zaGlmdCgpO1xyXG4gICAgfVxyXG4gICAgbGV0IHBhcmFtcyA9IGt2cC5qb2luKCcmJyk7XHJcbiAgICBsZXQgbmV3dXJsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyBcIj9cIiArIHBhcmFtcztcclxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7IHBhdGg6IG5ld3VybCB9LCAnJywgbmV3dXJsKTtcclxufVxyXG4vLyBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0X19pdGVtXCIpO1xyXG4vLyBidXR0b25zLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgIGNvbnN0IHBhdGg6IHN0cmluZyA9IChlLnRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudCkuaHJlZjtcclxuLy8gICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICB9KVxyXG4vLyB9KVxyXG53aW5kb3cub25wb3BzdGF0ZSA9IGhhbmRsZUxvY2F0aW9uO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcnVuU2VhcmNoKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xyXG4gICAgc2VhcmNoSW5wdXQgPT09IG51bGwgfHwgc2VhcmNoSW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIHJ1bkZpbHRlcihzZWFyY2hJbnB1dC52YWx1ZSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBydW5GaWx0ZXIocHJvcCkge1xyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJHb29kcyB9IGZyb20gXCIuL2dvb2RzXCI7XHJcbmltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBidXR0b25Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRlcnNfX2J1dHRvbicpO1xyXG4gICAgYnV0dG9uU29ydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgc29ydEdvb2RzKGUpO1xyXG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVCdXR0b24oZSk7XHJcbiAgICAgICAgICAgIGluc2VydFBhcmFtKFwic29ydFwiLCBgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb259LSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9ufWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnV0dG9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBidXR0b25Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRlcnNfX2J1dHRvbicpO1xyXG4gICAgYnV0dG9uU29ydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHNvcnRHb29kcyhldmVudCwgb3B0LCBkaXIpIHtcclxuICAgIGxldCBvcHRpb24gPSBldmVudCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb24gOiBvcHQ7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gZXZlbnQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9uIDogZGlyO1xyXG4gICAgaWYgKG9wdGlvbiA9PSBcInByaWNlXCIpIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWluXCIpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDIucHJpY2UgLSBlbDEucHJpY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWF4XCIpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDEucHJpY2UgLSBlbDIucHJpY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtaW5cIikge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsMi5yYXRpbmcgLSBlbDEucmF0aW5nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1heFwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwxLnJhdGluZyAtIGVsMi5yYXRpbmc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlckdvb2RzKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTb3J0aW5nKHByb3ApIHtcclxuICAgIGxldCBhcnIgPSBwcm9wLnNwbGl0KCctJyk7XHJcbiAgICBzb3J0R29vZHModW5kZWZpbmVkLCBhcnJbMF0sIGFyclsxXSk7XHJcbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1vcHRpb249XCIke2FyclswXX1cIl1bZGF0YS1kaXJlY3Rpb249XCIke2FyclsxXX1cIl1gKTtcclxuICAgIGFjdGl2ZUJ1dHRvbiA9PT0gbnVsbCB8fCBhY3RpdmVCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic29ydGVyc19fYnV0dG9uX2FjdGl2ZVwiKTtcclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0b3JlUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzPSdzdG9yZV9fcGFnZSBzdG9yZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX3NlYXJjaCBzZWFyY2gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nc2VhcmNoX19ibG9jayc+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PSdzZWFyY2gnIGNsYXNzPSdzZWFyY2hfX2ltZycgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy9zZWFyY2gzLnBuZyc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzZWFyY2gnIGNsYXNzPSdzZWFyY2hfX2lucHV0JyBwbGFjZWhvbGRlciA9J1NlYXJjaCBwcm9kdWN0Jz48L2lucHV0PiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3N0b3JlX19tYWluJz5cclxuICAgICAgICAgIDxhc2lkZSBjbGFzcz0nc3RvcmVfX2ZpbHRlcnMgZmlsdGVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fY2F0ZWdvcnknPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPkNhdGVnb3J5PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fY2F0ZWdvcnlfYXJlYSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19icmFuZCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+QnJhbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19icmFuZF9hcmVhJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX3ByaWNlJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5QcmljZTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2FyZWFfcmFuZ2UgZmlsdGVyX19yYW5nZV9wcmljZSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19zdG9jayc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+U3RvY2s8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19hcmVhX3JhbmdlIGZpbHRlcl9fcmFuZ2Vfc3RvY2snPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZmlsdGVyX19idXR0b24gZmlsdGVyX19idXR0b25fcmVzZXQgYnV0dG9uJz5SZXNldCBmaWx0ZXJzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZmlsdGVyX19idXR0b24gZmlsdGVyX19idXR0b25fc2F2ZSBidXR0b24nPlNhdmUgZmlsdGVyczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzcz0nc3RvcmVfX2dvb2RzIGdvb2RzJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX29wdGlvbnMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19zb3J0ZXJzIHNvcnRlcnMnPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19wcmljZSBzb3J0ZXJzX19wcmljZV9sb3cnIGRhdGEtb3B0aW9uID0gXCJwcmljZVwiIGRhdGEtZGlyZWN0aW9uPVwibWluXCI+cHJpY2UgJiM4NTk1OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19wcmljZSBzb3J0ZXJzX19wcmljZV9oaWdoJyBkYXRhLW9wdGlvbiA9IFwicHJpY2VcIiBkYXRhLWRpcmVjdGlvbj1cIm1heFwiPnByaWNlICYjODU5Mzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcmF0aW5nIHNvcnRlcnNfX3JhdGluZ19sb3cnIGRhdGEtb3B0aW9uID0gXCJyYXRpbmdcIiBkYXRhLWRpcmVjdGlvbj1cIm1pblwiPnJhdGluZyAmIzg1OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3JhdGluZyBzb3J0ZXJzX19yYXRpbmdfaGlnaCcgZGF0YS1vcHRpb24gPSBcInJhdGluZ1wiIGRhdGEtZGlyZWN0aW9uPVwibWF4XCI+cmF0aW5nICYjODU5Mzs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3M9J2dvb2RzX190aXRsZSc+Rm91bmQ6IDxzcGFuIGNsYXNzPSdnb29kc19fcXVhbnRpdHknPiR7cHJvZHVjdHMucHJvZHVjdHMubGVuZ3RofTwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX192aWV3IHZpZXcnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld19fYnV0dG9uJz48aW1nIGFsdD0nZ3JpZCcgY2xhc3M9J3ZpZXdfX2J1dHRvbl9pbWcgdmlld19fYnV0dG9uX21hbnknIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvMDAzLWdyaWQtMS5wbmcnIGRhdGEtdmlldyA9IFwibWFueVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld19fYnV0dG9uJz48aW1nIGFsdD0nZ3JpZCcgY2xhc3M9J3ZpZXdfX2J1dHRvbl9hY3RpdmUgdmlld19fYnV0dG9uX2ltZyB2aWV3X19idXR0b25fZmV3JyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nLzAwNC1tZW51LTEucG5nJyBkYXRhLXZpZXcgPSBcImZld1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX2FyZWEnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR29vZHNRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IGdvb2RzcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX3F1YW50aXR5Jyk7XHJcbiAgICBpZiAoZ29vZHNxdWFudGl0eSkge1xyXG4gICAgICAgIGdvb2RzcXVhbnRpdHkuaW5uZXJIVE1MID0gYCR7cHJvZHVjdHMucHJvZHVjdHMubGVuZ3RofWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5zZXJ0UGFyYW0gfSBmcm9tIFwiLi9yb3V0aW5nXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lckZvclZpZXcoKSB7XHJcbiAgICBjb25zdCBidXR0b25zVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3X19idXR0b25faW1nJyk7XHJcbiAgICBidXR0b25zVmlldy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZVZpZXcoZXZlbnQpO1xyXG4gICAgICAgICAgICBpbnNlcnRQYXJhbShcInZpZXdcIiwgZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZpZXcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlVmlldyhldikge1xyXG4gICAgY29uc3QgYnV0dG9uc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld19fYnV0dG9uX2ltZycpO1xyXG4gICAgYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aWV3X19idXR0b25fYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGxldCBhY3RpdmVCdXR0b24gPSBldi5jdXJyZW50VGFyZ2V0O1xyXG4gICAgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgZ29vZHNBcmVhID09PSBudWxsIHx8IGdvb2RzQXJlYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ29vZHNBcmVhLmNsYXNzTGlzdC50b2dnbGUoJ2dvb2RzX19hcmVhX21hbnknKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWaWV3KHByb3ApIHtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgY29uc3QgYnV0dG9uTWFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlld19fYnV0dG9uX21hbnlcIik7XHJcbiAgICBjb25zdCBidXR0b25GZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdfX2J1dHRvbl9mZXdcIik7XHJcbiAgICBpZiAocHJvcCA9PSBcIm1hbnlcIikge1xyXG4gICAgICAgIGdvb2RzQXJlYSA9PT0gbnVsbCB8fCBnb29kc0FyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdvb2RzQXJlYS5jbGFzc0xpc3QuYWRkKCdnb29kc19fYXJlYV9tYW55Jyk7XHJcbiAgICAgICAgYnV0dG9uRmV3ID09PSBudWxsIHx8IGJ1dHRvbkZldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uRmV3LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aWV3X19idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgICAgIGJ1dHRvbk1hbnkgPT09IG51bGwgfHwgYnV0dG9uTWFueSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uTWFueS5jbGFzc0xpc3QuYWRkKFwidmlld19fYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XHJcbmNsYXNzIFByb2R1Y3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IGVsLmJyYW5kLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGVsLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRQZXJjZW50YWdlOiBlbC5kaXNjb3VudFBlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGVsLmltYWdlcyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBlbC5wcmljZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogZWwucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IGVsLnN0b2NrLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBlbC50aHVtYm5haWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZWwudGl0bGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0c01ldGFkYXRhKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWluID4gcHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5taW4gPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmljZVJhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5wcmljZVJhbmdlLm1heCA8IHByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvY2tSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMuc3RvY2tSYW5nZS5taW4gPiBwcm9kdWN0LnN0b2NrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9ja1JhbmdlLm1pbiA9IHByb2R1Y3Quc3RvY2s7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b2NrUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnN0b2NrUmFuZ2UubWF4IDwgcHJvZHVjdC5zdG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvY2tSYW5nZS5tYXggPSBwcm9kdWN0LnN0b2NrO1xyXG4gICAgICAgICAgICBpZiAoIShwcm9kdWN0LmJyYW5kIGluIHRoaXMuYnJhbmRzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0gPSBbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0ucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5jYXRlZ29yeSBpbiB0aGlzLmNhdGVnb3JpZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcHJvZHVjdC5jYXRlZ29yeV0gPSBbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3Byb2R1Y3QuY2F0ZWdvcnldLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5wcm9kdWN0cykge1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHBseUZpbHRlcihmaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuICAgICAgICB0aGlzLmJyYW5kcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvY2tSYW5nZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAobGV0IGluZCA9IDA7IGluZCA8IHRoaXMucHJvZHVjdHMubGVuZ3RoOyBpbmQrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMucHJvZHVjdHNbaW5kXTtcclxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSXRlbSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpbmQtLTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGZpbHRlci5jYXRlZ29yeS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGZpbHRlci5jYXRlZ29yeS5pbmNsdWRlcyhlbC5jYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShmaWx0ZXIuYnJhbmQuaW5jbHVkZXMoZWwuYnJhbmQpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnByaWNlLm1pbiAhPT0gLTEgJiYgZWwucHJpY2UgPCBmaWx0ZXIucHJpY2UubWluKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnByaWNlLm1heCAhPT0gLTEgJiYgZWwucHJpY2UgPiBmaWx0ZXIucHJpY2UubWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0b2NrLm1pbiAhPT0gLTEgJiYgZWwuc3RvY2sgPCBmaWx0ZXIuc3RvY2subWluKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0b2NrLm1heCAhPT0gLTEgJiYgZWwuc3RvY2sgPiBmaWx0ZXIuc3RvY2subWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBwcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XHJcbiIsImNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZCA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hDYXRlZ29yeShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnkuaW5jbHVkZXMoaXRlbSkpXHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5LmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2hCcmFuZChpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnJhbmQuaW5jbHVkZXMoaXRlbSkpXHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmQgPSB0aGlzLmJyYW5kLmZpbHRlcihlbCA9PiBlbCAhPT0gaXRlbSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmJyYW5kLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzZXRQcmljZShwYXJhbWV0ZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlciA9PT0gJ21pbicpXHJcbiAgICAgICAgICAgIHRoaXMucHJpY2UubWluID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnByaWNlLm1heCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0U3RvY2socGFyYW1ldGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIgPT09ICdtaW4nKVxyXG4gICAgICAgICAgICB0aGlzLnN0b2NrLm1pbiA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5zdG9jay5tYXggPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcbiIsImV4cG9ydCBjb25zdCBkYXRhID0ge1xuICBcInByb2R1Y3RzXCI6IFtcbiAge1xuICBcImlkXCI6IDEsXG4gIFwidGl0bGVcIjogXCJpUGhvbmUgOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gYXBwbGUgbW9iaWxlIHdoaWNoIGlzIG5vdGhpbmcgbGlrZSBhcHBsZVwiLFxuICBcInByaWNlXCI6IDU0OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuOTYsXG4gIFwicmF0aW5nXCI6IDQuNjksXG4gIFwic3RvY2tcIjogOTQsXG4gIFwiYnJhbmRcIjogXCJBcHBsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyLFxuICBcInRpdGxlXCI6IFwiaVBob25lIFhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNJTS1GcmVlLCBNb2RlbCBBMTkyMTEgNi41LWluY2ggU3VwZXIgUmV0aW5hIEhEIGRpc3BsYXkgd2l0aCBPTEVEIHRlY2hub2xvZ3kgQTEyIEJpb25pYyBjaGlwIHdpdGggLi4uXCIsXG4gIFwicHJpY2VcIjogODk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy45NCxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiAzNCxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMsXG4gIFwidGl0bGVcIjogXCJTYW1zdW5nIFVuaXZlcnNlIDlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbXN1bmdcXCdzIG5ldyB2YXJpYW50IHdoaWNoIGdvZXMgYmV5b25kIEdhbGF4eSB0byB0aGUgVW5pdmVyc2VcIixcbiAgXCJwcmljZVwiOiAxMjQ5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS40NixcbiAgXCJyYXRpbmdcIjogNC4wOSxcbiAgXCJzdG9ja1wiOiAzNixcbiAgXCJicmFuZFwiOiBcIlNhbXN1bmdcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMy8xLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQsXG4gIFwidGl0bGVcIjogXCJPUFBPRjE5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJPUFBPIEYxOSBpcyBvZmZpY2lhbGx5IGFubm91bmNlZCBvbiBBcHJpbCAyMDIxLlwiLFxuICBcInByaWNlXCI6IDI4MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuOTEsXG4gIFwicmF0aW5nXCI6IDQuMyxcbiAgXCJzdG9ja1wiOiAxMjMsXG4gIFwiYnJhbmRcIjogXCJPUFBPXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUsXG4gIFwidGl0bGVcIjogXCJIdWF3ZWkgUDMwXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIdWF3ZWnigJlzIHJlLWJhZGdlZCBQMzAgUHJvIE5ldyBFZGl0aW9uIHdhcyBvZmZpY2lhbGx5IHVudmVpbGVkIHllc3RlcmRheSBpbiBHZXJtYW55IGFuZCBub3cgdGhlIGRldmljZSBoYXMgbWFkZSBpdHMgd2F5IHRvIHRoZSBVSy5cIixcbiAgXCJwcmljZVwiOiA0OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjU4LFxuICBcInJhdGluZ1wiOiA0LjA5LFxuICBcInN0b2NrXCI6IDMyLFxuICBcImJyYW5kXCI6IFwiSHVhd2VpXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2LFxuICBcInRpdGxlXCI6IFwiTWFjQm9vayBQcm9cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hY0Jvb2sgUHJvIDIwMjEgd2l0aCBtaW5pLUxFRCBkaXNwbGF5IG1heSBsYXVuY2ggYmV0d2VlbiBTZXB0ZW1iZXIsIE5vdmVtYmVyXCIsXG4gIFwicHJpY2VcIjogMTc0OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMDIsXG4gIFwicmF0aW5nXCI6IDQuNTcsXG4gIFwic3RvY2tcIjogODMsXG4gIFwiYnJhbmRcIjogXCJBcHBsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi90aHVtYm5haWwucG5nXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvNC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3LFxuICBcInRpdGxlXCI6IFwiU2Ftc3VuZyBHYWxheHkgQm9va1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2Ftc3VuZyBHYWxheHkgQm9vayBTICgyMDIwKSBMYXB0b3AgV2l0aCBJbnRlbCBMYWtlZmllbGQgQ2hpcCwgOEdCIG9mIFJBTSBMYXVuY2hlZFwiLFxuICBcInByaWNlXCI6IDE0OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQuMTUsXG4gIFwicmF0aW5nXCI6IDQuMjUsXG4gIFwic3RvY2tcIjogNTAsXG4gIFwiYnJhbmRcIjogXCJTYW1zdW5nXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOCxcbiAgXCJ0aXRsZVwiOiBcIk1pY3Jvc29mdCBTdXJmYWNlIExhcHRvcCA0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsZSBhbmQgc3BlZWQuIFN0YW5kIG91dCBvbiBIRCB2aWRlbyBjYWxscyBiYWNrZWQgYnkgU3R1ZGlvIE1pY3MuIENhcHR1cmUgaWRlYXMgb24gdGhlIHZpYnJhbnQgdG91Y2hzY3JlZW4uXCIsXG4gIFwicHJpY2VcIjogMTQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMjMsXG4gIFwicmF0aW5nXCI6IDQuNDMsXG4gIFwic3RvY2tcIjogNjgsXG4gIFwiYnJhbmRcIjogXCJNaWNyb3NvZnQgU3VyZmFjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDksXG4gIFwidGl0bGVcIjogXCJJbmZpbml4IElOQk9PS1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSW5maW5peCBJbmJvb2sgWDEgQ2kzIDEwdGggOEdCIDI1NkdCIDE0IFdpbjEwIEdyZXkg4oCTIDEgWWVhciBXYXJyYW50eVwiLFxuICBcInByaWNlXCI6IDEwOTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjgzLFxuICBcInJhdGluZ1wiOiA0LjU0LFxuICBcInN0b2NrXCI6IDk2LFxuICBcImJyYW5kXCI6IFwiSW5maW5peFwiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEwLFxuICBcInRpdGxlXCI6IFwiSFAgUGF2aWxpb24gMTUtREsxMDU2V01cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhQIFBhdmlsaW9uIDE1LURLMTA1NldNIEdhbWluZyBMYXB0b3AgMTB0aCBHZW4gQ29yZSBpNSwgOEdCLCAyNTZHQiBTU0QsIEdUWCAxNjUwIDRHQiwgV2luZG93cyAxMFwiLFxuICBcInByaWNlXCI6IDEwOTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDYuMTgsXG4gIFwicmF0aW5nXCI6IDQuNDMsXG4gIFwic3RvY2tcIjogODksXG4gIFwiYnJhbmRcIjogXCJIUCBQYXZpbGlvblwiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvdGh1bWJuYWlsLmpwZWdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvdGh1bWJuYWlsLmpwZWdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMSxcbiAgXCJ0aXRsZVwiOiBcInBlcmZ1bWUgT2lsXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZWdhIERpc2NvdW50LCBJbXByZXNzaW9uIG9mIEFjcXVhIERpIEdpbyBieSBHaW9yZ2lvQXJtYW5pIGNvbmNlbnRyYXRlZCBhdHRhciBwZXJmdW1lIE9pbFwiLFxuICBcInByaWNlXCI6IDEzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjQsXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogNjUsXG4gIFwiYnJhbmRcIjogXCJJbXByZXNzaW9uIG9mIEFjcXVhIERpIEdpb1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTIsXG4gIFwidGl0bGVcIjogXCJCcm93biBQZXJmdW1lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSb3lhbF9NaXJhZ2UgU3BvcnQgQnJvd24gUGVyZnVtZSBmb3IgTWVuICYgV29tZW4gLSAxMjBtbFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42NixcbiAgXCJyYXRpbmdcIjogNCxcbiAgXCJzdG9ja1wiOiA1MixcbiAgXCJicmFuZFwiOiBcIlJveWFsX01pcmFnZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEzLFxuICBcInRpdGxlXCI6IFwiRm9nIFNjZW50IFhwcmVzc2lvIFBlcmZ1bWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBCZXN0IEZvZyBTY2VudCBYcHJlc3NpbyBQZXJmdW1lIDEwMG1sIEZvciBNZW4gY29vbCBsb25nIGxhc3RpbmcgcGVyZnVtZXMgZm9yIE1lblwiLFxuICBcInByaWNlXCI6IDEzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjE0LFxuICBcInJhdGluZ1wiOiA0LjU5LFxuICBcInN0b2NrXCI6IDYxLFxuICBcImJyYW5kXCI6IFwiRm9nIFNjZW50IFhwcmVzc2lvXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNCxcbiAgXCJ0aXRsZVwiOiBcIk5vbi1BbGNvaG9saWMgQ29uY2VudHJhdGVkIFBlcmZ1bWUgT2lsXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJPcmlnaW5hbCBBbCBNdW5ha2jCriBieSBNYWhhbCBBbCBNdXNrIHwgT3VyIEltcHJlc3Npb24gb2YgQ2xpbWF0ZSB8IDZtbCBOb24tQWxjb2hvbGljIENvbmNlbnRyYXRlZCBQZXJmdW1lIE9pbFwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNixcbiAgXCJyYXRpbmdcIjogNC4yMSxcbiAgXCJzdG9ja1wiOiAxMTQsXG4gIFwiYnJhbmRcIjogXCJBbCBNdW5ha2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE1LFxuICBcInRpdGxlXCI6IFwiRWF1IERlIFBlcmZ1bWUgU3ByYXlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdlbnVpbmUgIEFsLVJlaGFiIHNwcmF5IHBlcmZ1bWUgZnJvbSBVQUUvU2F1ZGkgQXJhYmlhL1llbWVuIEhpZ2ggUXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45OSxcbiAgXCJyYXRpbmdcIjogNC43LFxuICBcInN0b2NrXCI6IDEwNSxcbiAgXCJicmFuZFwiOiBcIkxvcmQgLSBBbC1SZWhhYlwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE2LFxuICBcInRpdGxlXCI6IFwiSHlhbHVyb25pYyBBY2lkIFNlcnVtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMXFwnT3LDg8KpYWwgUGFyaXMgaW50cm9kdWNlcyBIeWFsdXJvbiBFeHBlcnQgUmVwbHVtcGluZyBTZXJ1bSBmb3JtdWxhdGVkIHdpdGggMS41JSBIeWFsdXJvbmljIEFjaWRcIixcbiAgXCJwcmljZVwiOiAxOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMzEsXG4gIFwicmF0aW5nXCI6IDQuODMsXG4gIFwic3RvY2tcIjogMTEwLFxuICBcImJyYW5kXCI6IFwiTFxcJ09yZWFsIFBhcmlzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNyxcbiAgXCJ0aXRsZVwiOiBcIlRyZWUgT2lsIDMwbWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRlYSB0cmVlIG9pbCBjb250YWlucyBhIG51bWJlciBvZiBjb21wb3VuZHMsIGluY2x1ZGluZyB0ZXJwaW5lbi00LW9sLCB0aGF0IGhhdmUgYmVlbiBzaG93biB0byBraWxsIGNlcnRhaW4gYmFjdGVyaWEsXCIsXG4gIFwicHJpY2VcIjogMTIsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQuMDksXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogNzgsXG4gIFwiYnJhbmRcIjogXCJIZW1hbmkgVGVhXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTgsXG4gIFwidGl0bGVcIjogXCJPaWwgRnJlZSBNb2lzdHVyaXplciAxMDBtbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRGVybWl2ZSBPaWwgRnJlZSBNb2lzdHVyaXplciB3aXRoIFNQRiAyMCBpcyBzcGVjaWZpY2FsbHkgZm9ybXVsYXRlZCB3aXRoIGNlcmFtaWRlcywgaHlhbHVyb25pYyBhY2lkICYgc3Vuc2NyZWVuLlwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4xLFxuICBcInJhdGluZ1wiOiA0LjU2LFxuICBcInN0b2NrXCI6IDg4LFxuICBcImJyYW5kXCI6IFwiRGVybWl2ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxOSxcbiAgXCJ0aXRsZVwiOiBcIlNraW4gQmVhdXR5IFNlcnVtLlwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBuYW1lOiByb3JlYyBjb2xsYWdlbiBoeWFsdXJvbmljIGFjaWQgd2hpdGUgZmFjZSBzZXJ1bSByaWNlTmV0IHdlaWdodDogMTUgbVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC42OCxcbiAgXCJyYXRpbmdcIjogNC40MixcbiAgXCJzdG9ja1wiOiA1NCxcbiAgXCJicmFuZFwiOiBcIlJPUkVDIFdoaXRlIFJpY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMCxcbiAgXCJ0aXRsZVwiOiBcIkZyZWNrbGUgVHJlYXRtZW50IENyZWFtLSAxNWdtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYWlyICYgQ2xlYXIgaXMgUGFraXN0YW5cXCdzIG9ubHkgcHVyZSBGcmVja2xlIGNyZWFtIHdoaWNoIGhlbHBzZmFkZSBGcmVja2xlcywgRGFya3Nwb3RzIGFuZCBwaWdtZW50cy4gTWVyY3VyeSBsZXZlbCBpcyAwJSwgc28gdGhlcmUgYXJlIG5vIHNpZGUgZWZmZWN0cy5cIixcbiAgXCJwcmljZVwiOiA3MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuOTksXG4gIFwicmF0aW5nXCI6IDQuMDYsXG4gIFwic3RvY2tcIjogMTQwLFxuICBcImJyYW5kXCI6IFwiRmFpciAmIENsZWFyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIxLFxuICBcInRpdGxlXCI6IFwiLSBEYWFsIE1hc29vciA1MDAgZ3JhbXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZpbmUgcXVhbGl0eSBCcmFuZGVkIFByb2R1Y3QgS2VlcCBpbiBhIGNvb2wgYW5kIGRyeSBwbGFjZVwiLFxuICBcInByaWNlXCI6IDIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjgxLFxuICBcInJhdGluZ1wiOiA0LjQ0LFxuICBcInN0b2NrXCI6IDEzMyxcbiAgXCJicmFuZFwiOiBcIlNhYWYgJiBLaGFhc1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS90aHVtYm5haWwucG5nXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMixcbiAgXCJ0aXRsZVwiOiBcIkVsYm93IE1hY2Fyb25pIC0gNDAwIGdtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgQmFrZSBQYXJsb3IgQmlnIEVsYm93IE1hY2Fyb25pIC0gNDAwIGdtXCIsXG4gIFwicHJpY2VcIjogMTQsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU4LFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDE0NixcbiAgXCJicmFuZFwiOiBcIkJha2UgUGFybG9yIEJpZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMyxcbiAgXCJ0aXRsZVwiOiBcIk9yYW5nZSBFc3NlbmNlIEZvb2QgRmxhdm91XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpY2F0aW9ucyBvZiBPcmFuZ2UgRXNzZW5jZSBGb29kIEZsYXZvdXIgRm9yIENha2VzIGFuZCBCYWtpbmcgRm9vZCBJdGVtXCIsXG4gIFwicHJpY2VcIjogMTQsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMDQsXG4gIFwicmF0aW5nXCI6IDQuODUsXG4gIFwic3RvY2tcIjogMjYsXG4gIFwiYnJhbmRcIjogXCJCYWtpbmcgRm9vZCBJdGVtc1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjQsXG4gIFwidGl0bGVcIjogXCJjZXJlYWxzIG11ZXNsaSBmcnVpdCBudXRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJvcmlnaW5hbCBmYXVqaSBjZXJlYWwgbXVlc2xpIDI1MGdtIGJveCBwYWNrIG9yaWdpbmFsIGZhdWppIGNlcmVhbHMgbXVlc2xpIGZydWl0IG51dHMgZmxha2VzIGJyZWFrZmFzdCBjZXJlYWwgYnJlYWsgZmFzdCBmYXVqaWNlcmVhbHMgY2VyZWxzIGNlcmVsIGZvamkgZm91amlcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuOCxcbiAgXCJyYXRpbmdcIjogNC45NCxcbiAgXCJzdG9ja1wiOiAxMTMsXG4gIFwiYnJhbmRcIjogXCJmYXVqaVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjUsXG4gIFwidGl0bGVcIjogXCJHdWxhYiBQb3dkZXIgNTAgR3JhbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRHJ5IFJvc2UgRmxvd2VyIFBvd2RlciBHdWxhYiBQb3dkZXIgNTAgR3JhbSDigKIgVHJlYXRzIFdvdW5kc1wiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy41OCxcbiAgXCJyYXRpbmdcIjogNC44NyxcbiAgXCJzdG9ja1wiOiA0NyxcbiAgXCJicmFuZFwiOiBcIkRyeSBSb3NlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNixcbiAgXCJ0aXRsZVwiOiBcIlBsYW50IEhhbmdlciBGb3IgSG9tZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQm9obyBEZWNvciBQbGFudCBIYW5nZXIgRm9yIEhvbWUgV2FsbCBEZWNvcmF0aW9uIE1hY3JhbWUgV2FsbCBIYW5naW5nIFNoZWxmXCIsXG4gIFwicHJpY2VcIjogNDEsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljg2LFxuICBcInJhdGluZ1wiOiA0LjA4LFxuICBcInN0b2NrXCI6IDEzMSxcbiAgXCJicmFuZFwiOiBcIkJvaG8gRGVjb3JcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvNS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNyxcbiAgXCJ0aXRsZVwiOiBcIkZseWluZyBXb29kZW4gQmlyZFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGFja2FnZSBJbmNsdWRlIDYgQmlyZHMgd2l0aCBBZGhlc2l2ZSBUYXBlIFNoYXBlOiAzRCBTaGFwZWQgV29vZGVuIEJpcmRzIE1hdGVyaWFsOiBXb29kZW4gTURGLCBMYW1pbmF0ZWQgMy41bW1cIixcbiAgXCJwcmljZVwiOiA1MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTgsXG4gIFwicmF0aW5nXCI6IDQuNDEsXG4gIFwic3RvY2tcIjogMTcsXG4gIFwiYnJhbmRcIjogXCJGbHlpbmcgV29vZGVuXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI4LFxuICBcInRpdGxlXCI6IFwiM0QgRW1iZWxsaXNobWVudCBBcnQgTGFtcFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiM0QgbGVkIGxhbXAgc3RpY2tlciBXYWxsIHN0aWNrZXIgM2Qgd2FsbCBhcnQgbGlnaHQgb24vb2ZmIGJ1dHRvbiAgY2VsbCBvcGVyYXRlZCAoaW5jbHVkZWQpXCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjQ5LFxuICBcInJhdGluZ1wiOiA0LjgyLFxuICBcInN0b2NrXCI6IDU0LFxuICBcImJyYW5kXCI6IFwiTEVEIExpZ2h0c1wiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjksXG4gIFwidGl0bGVcIjogXCJIYW5kY3JhZnQgQ2hpbmVzZSBzdHlsZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSGFuZGNyYWZ0IENoaW5lc2Ugc3R5bGUgYXJ0IGx1eHVyeSBwYWxhY2UgaG90ZWwgdmlsbGEgbWFuc2lvbiBob21lIGRlY29yIGNlcmFtaWMgdmFzZSB3aXRoIGJyYXNzIGZydWl0IHBsYXRlXCIsXG4gIFwicHJpY2VcIjogNjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjM0LFxuICBcInJhdGluZ1wiOiA0LjQ0LFxuICBcInN0b2NrXCI6IDcsXG4gIFwiYnJhbmRcIjogXCJsdXh1cnkgcGFsYWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzAsXG4gIFwidGl0bGVcIjogXCJLZXkgSG9sZGVyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBdHRyYWN0aXZlIERlc2lnbk1ldGFsbGljIG1hdGVyaWFsRm91ciBrZXkgaG9va3NSZWxpYWJsZSAmIER1cmFibGVQcmVtaXVtIFF1YWxpdHlcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMi45MixcbiAgXCJyYXRpbmdcIjogNC45MixcbiAgXCJzdG9ja1wiOiA1NCxcbiAgXCJicmFuZFwiOiBcIkdvbGRlblwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMSxcbiAgXCJ0aXRsZVwiOiBcIk1vcm5hZGkgVmVsdmV0IEJlZFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTW9ybmFkaSBWZWx2ZXQgQmVkIEJhc2Ugd2l0aCBIZWFkYm9hcmQgU2xhdHMgU3VwcG9ydCBDbGFzc2ljIFN0eWxlIEJlZHJvb20gRnVybml0dXJlIEJlZCBTZXRcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcsXG4gIFwicmF0aW5nXCI6IDQuMTYsXG4gIFwic3RvY2tcIjogMTQwLFxuICBcImJyYW5kXCI6IFwiRnVybml0dXJlIEJlZCBTZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMyLFxuICBcInRpdGxlXCI6IFwiU29mYSBmb3IgQ29mZmUgQ2FmZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUmF0dHRhbiBPdXRkb29yIGZ1cm5pdHVyZSBTZXQgV2F0ZXJwcm9vZiAgUmF0dGFuIFNvZmEgZm9yIENvZmZlIENhZmVcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTksXG4gIFwicmF0aW5nXCI6IDQuNzQsXG4gIFwic3RvY2tcIjogMzAsXG4gIFwiYnJhbmRcIjogXCJSYXR0dGFuIE91dGRvb3JcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzMsXG4gIFwidGl0bGVcIjogXCIzIFRpZXIgQ29ybmVyIFNoZWx2ZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjMgVGllciBDb3JuZXIgU2hlbHZlcyB8IDMgUENzIFdhbGwgTW91bnQgS2l0Y2hlbiBTaGVsZiB8IEZsb2F0aW5nIEJlZHJvb20gU2hlbGZcIixcbiAgXCJwcmljZVwiOiA3MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LFxuICBcInJhdGluZ1wiOiA0LjMxLFxuICBcInN0b2NrXCI6IDEwNixcbiAgXCJicmFuZFwiOiBcIktpdGNoZW4gU2hlbGZcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM0LFxuICBcInRpdGxlXCI6IFwiUGxhc3RpYyBUYWJsZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVu+7v2VyeSBnb29kIHF1YWxpdHkgcGxhc3RpYyB0YWJsZSBmb3IgbXVsdGkgcHVycG9zZSBub3cgaW4gcmVhc29uYWJsZSBwcmljZVwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LFxuICBcInJhdGluZ1wiOiA0LjAxLFxuICBcInN0b2NrXCI6IDEzNixcbiAgXCJicmFuZFwiOiBcIk11bHRpIFB1cnBvc2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM1LFxuICBcInRpdGxlXCI6IFwiMyBET09SIFBPUlRBQkxFXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYXRlcmlhbDogU3RhaW5sZXNzIFN0ZWVsIGFuZCBGYWJyaWMgIEl0ZW0gU2l6ZTogMTEwIGNtIHggNDUgY20geCAxNzUgY20gUGFja2FnZSBDb250ZW50czogMSBTdG9yYWdlIFdhcmRyb2JlXCIsXG4gIFwicHJpY2VcIjogNDEsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuOTgsXG4gIFwicmF0aW5nXCI6IDQuMDYsXG4gIFwic3RvY2tcIjogNjgsXG4gIFwiYnJhbmRcIjogXCJBbW5hTWFydFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzYsXG4gIFwidGl0bGVcIjogXCJTbGVldmUgU2hpcnQgV29tZW5zXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDb3R0b24gU29saWQgQ29sb3IgUHJvZmVzc2lvbmFsIFdlYXIgU2xlZXZlIFNoaXJ0IFdvbWVucyBXb3JrIEJsb3VzZXMgV2hvbGVzYWxlIENsb3RoaW5nIENhc3VhbCBQbGFpbiBDdXN0b20gVG9wIE9FTSBDdXN0b21pemVkXCIsXG4gIFwicHJpY2VcIjogOTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjg5LFxuICBcInJhdGluZ1wiOiA0LjI2LFxuICBcInN0b2NrXCI6IDM5LFxuICBcImJyYW5kXCI6IFwiUHJvZmVzc2lvbmFsIFdlYXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM3LFxuICBcInRpdGxlXCI6IFwiYW5rIFRvcHMgZm9yIFdvbWVucy9HaXJsc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUEFDSyBPRiAzIENBTUlTT0xFUyAsVkVSWSBDT01GT1JUQUJMRSBTT0ZUIENPVFRPTiBTVFVGRiwgQ09NRk9SVEFCTEUgSU4gQUxMIEZPVVIgU0VBU09OU1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi4wNSxcbiAgXCJyYXRpbmdcIjogNC41MixcbiAgXCJzdG9ja1wiOiAxMDcsXG4gIFwiYnJhbmRcIjogXCJTb2Z0IENvdHRvblwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM4LFxuICBcInRpdGxlXCI6IFwic3VibGltYXRpb24gcGxhaW4ga2lkcyB0YW5rXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJzdWJsaW1hdGlvbiBwbGFpbiBraWRzIHRhbmsgdG9wcyB3aG9sZXNhbGVcIixcbiAgXCJwcmljZVwiOiAxMDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjEyLFxuICBcInJhdGluZ1wiOiA0LjgsXG4gIFwic3RvY2tcIjogMjAsXG4gIFwiYnJhbmRcIjogXCJTb2Z0IENvdHRvblwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM5LFxuICBcInRpdGxlXCI6IFwiV29tZW4gU3dlYXRlcnMgV29vbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMjAyMSBDdXN0b20gV2ludGVyIEZhbGwgWmVicmEgS25pdCBDcm9wIFRvcCBXb21lbiBTd2VhdGVycyBXb29sIE1vaGFpciBDb3MgQ3VzdG9taXplIENyZXcgTmVjayBXb21lblxcJyBTIENyb3AgVG9wIFN3ZWF0ZXJcIixcbiAgXCJwcmljZVwiOiA2MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjIsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogNTUsXG4gIFwiYnJhbmRcIjogXCJUb3AgU3dlYXRlclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQwLFxuICBcInRpdGxlXCI6IFwid29tZW4gd2ludGVyIGNsb3RoZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIndvbWVuIHdpbnRlciBjbG90aGVzIHRoaWNrIGZsZWVjZSBob29kaWUgdG9wIHdpdGggc3dlYXQgcGFudGpvZ2dlciB3b21lbiBzd2VhdHN1aXQgc2V0IGpvZ2dlcnMgcGFudHMgdHdvIHBpZWNlIHBhbnRzIHNldFwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4zOSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiA4NCxcbiAgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC8yLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQxLFxuICBcInRpdGxlXCI6IFwiTklHSFQgU1VJVFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTklHSFQgU1VJVCBSRUQgTUlDS1kgTU9VU0UuLiAgRm9yIEdpcmxzLiBGYW50YXN0aWMgU3VpdHMuXCIsXG4gIFwicHJpY2VcIjogNTUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjA1LFxuICBcInJhdGluZ1wiOiA0LjY1LFxuICBcInN0b2NrXCI6IDIxLFxuICBcImJyYW5kXCI6IFwiUkVEIE1JQ0tZIE1PVVNFLi5cIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDIsXG4gIFwidGl0bGVcIjogXCJTdGljaGVkIEt1cnRhIHBsdXMgdHJvdXNlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRkFCUklDOiBMSUxFSU4gQ0hFU1Q6IDIxIExFTkdIVDogMzcgVFJPVVNFUjogKDM4KSA6QVJBQklDIExJTEVJTlwiLFxuICBcInByaWNlXCI6IDgwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4zNyxcbiAgXCJyYXRpbmdcIjogNC4wNSxcbiAgXCJzdG9ja1wiOiAxNDgsXG4gIFwiYnJhbmRcIjogXCJEaWdpdGFsIFByaW50ZWRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDMsXG4gIFwidGl0bGVcIjogXCJmcm9jayBnb2xkIHByaW50ZWRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdoYXppIGZhYnJpYyBsb25nIGZyb2NrIGdvbGQgcHJpbnRlZCByZWFkeSB0byB3ZWFyIHN0aXRjaGVkIGNvbGxlY3Rpb24gKEc5OTIpXCIsXG4gIFwicHJpY2VcIjogNjAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41NSxcbiAgXCJyYXRpbmdcIjogNC4zMSxcbiAgXCJzdG9ja1wiOiAxNTAsXG4gIFwiYnJhbmRcIjogXCJHaGF6aSBGYWJyaWNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDQsXG4gIFwidGl0bGVcIjogXCJMYWRpZXMgTXVsdGljb2xvcmVkIERyZXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGNsYXNzeSBzaGlydCBmb3Igd29tZW4gZ2l2ZXMgeW91IGEgZ29yZ2VvdXMgbG9vayBvbiBldmVyeWRheSB3ZWFyIGFuZCBzcGVjaWFsbHkgZm9yIHNlbWktY2FzdWFsIHdlYXJzLlwiLFxuICBcInByaWNlXCI6IDc5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44OCxcbiAgXCJyYXRpbmdcIjogNC4wMyxcbiAgXCJzdG9ja1wiOiAyLFxuICBcImJyYW5kXCI6IFwiR2hhemkgRmFicmljXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ1LFxuICBcInRpdGxlXCI6IFwiTWFsYWkgTWF4aSBEcmVzc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUmVhZHkgdG8gd2VhciwgVW5pcXVlIGRlc2lnbiBhY2NvcmRpbmcgdG8gbW9kZXJuIHN0YW5kYXJkIGZhc2hpb24sIEJlc3QgZml0dGluZyAsSW1wb3J0ZWQgc3R1ZmZcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNS4wNyxcbiAgXCJyYXRpbmdcIjogNC42NyxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcIklFTEdZXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NixcbiAgXCJ0aXRsZVwiOiBcIndvbWVuXFwncyBzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ2xvc2U6IExhY2UsIFN0eWxlIHdpdGggYm90dG9tOiBJbmNyZWFzZWQgaW5zaWRlLCBTb2xlIE1hdGVyaWFsOiBSdWJiZXJcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuOTYsXG4gIFwicmF0aW5nXCI6IDQuMTQsXG4gIFwic3RvY2tcIjogNzIsXG4gIFwiYnJhbmRcIjogXCJJRUxHWSBmYXNoaW9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDcsXG4gIFwidGl0bGVcIjogXCJTbmVha2VyIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTeW50aGV0aWMgTGVhdGhlciBDYXN1YWwgU25lYWtlciBzaG9lcyBmb3IgV29tZW4vZ2lybHMgU25lYWtlcnMgRm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4zNyxcbiAgXCJyYXRpbmdcIjogNC4xOSxcbiAgXCJzdG9ja1wiOiA1MCxcbiAgXCJicmFuZFwiOiBcIlN5bnRoZXRpYyBMZWF0aGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3L3RodW1ibmFpbC5qcGVnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3L3RodW1ibmFpbC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDgsXG4gIFwidGl0bGVcIjogXCJXb21lbiBTdHJpcCBIZWVsXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGZWF0dXJlczogRmxpcC1mbG9wcywgTWlkIEhlZWwsIENvbWZvcnRhYmxlLCBTdHJpcGVkIEhlZWwsIEFudGlza2lkLCBTdHJpcGVkXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjgzLFxuICBcInJhdGluZ1wiOiA0LjAyLFxuICBcInN0b2NrXCI6IDI1LFxuICBcImJyYW5kXCI6IFwiU2FuZGFscyBGbGlwIEZsb3BzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0OSxcbiAgXCJ0aXRsZVwiOiBcIkNoYXBwYWxzICYgU2hvZSBMYWRpZXMgTWV0YWxsaWNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldvbWVucyBDaGFwcGFscyAmIFNob2UgTGFkaWVzIE1ldGFsbGljIFRvbmcgVGhvbmcgU2FuZGFsIEZsYXQgU3VtbWVyIDIwMjAgTWFhc2FpIFNhbmRhbHNcIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMi42MixcbiAgXCJyYXRpbmdcIjogNC43MixcbiAgXCJzdG9ja1wiOiAxMDcsXG4gIFwiYnJhbmRcIjogXCJNYWFzYWkgU2FuZGFsc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTAsXG4gIFwidGl0bGVcIjogXCJXb21lbiBTaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMjAyMCBOZXcgQXJyaXZhbHMgR2VudWluZSBMZWF0aGVyIEZhc2hpb24gVHJlbmQgUGxhdGZvcm0gU3VtbWVyIFdvbWVuIFNob2VzXCIsXG4gIFwicHJpY2VcIjogMzYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljg3LFxuICBcInJhdGluZ1wiOiA0LjMzLFxuICBcInN0b2NrXCI6IDQ2LFxuICBcImJyYW5kXCI6IFwiQXJyaXZhbHMgR2VudWluZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzEuanBlZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTEsXG4gIFwidGl0bGVcIjogXCJoYWxmIHNsZWV2ZXMgVCBzaGlydHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hbnkgc3RvcmUgaXMgY3JlYXRpbmcgbmV3IGRlc2lnbnMgYW5kIHRyZW5kIGV2ZXJ5IG1vbnRoIGFuZCBldmVyeSB5ZWFyLiBEYXJhei5wayBoYXZlIGEgYmVhdXRpZnVsIHJhbmdlIG9mIG1lbiBmYXNoaW9uIGJyYW5kc1wiLFxuICBcInByaWNlXCI6IDIzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi43NixcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiAxMzIsXG4gIFwiYnJhbmRcIjogXCJWaW50YWdlIEFwcGFyZWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MixcbiAgXCJ0aXRsZVwiOiBcIkZSRUUgRklSRSBUIFNoaXJ0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJxdWFsaXR5IGFuZCBwcm9mZXNzaW9uYWwgcHJpbnQgLSBJdCBkb2VzblxcJ3QganVzdCBsb29rIGhpZ2ggcXVhbGl0eSwgaXQgaXMgaGlnaCBxdWFsaXR5LlwiLFxuICBcInByaWNlXCI6IDEwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC43MixcbiAgXCJyYXRpbmdcIjogNC41MixcbiAgXCJzdG9ja1wiOiAxMjgsXG4gIFwiYnJhbmRcIjogXCJGUkVFIEZJUkVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTMsXG4gIFwidGl0bGVcIjogXCJwcmludGVkIGhpZ2ggcXVhbGl0eSBUIHNoaXJ0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQnJhbmQ6IHZpbnRhZ2UgQXBwYXJlbCAsRXhwb3J0IHF1YWxpdHlcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy41NCxcbiAgXCJyYXRpbmdcIjogNC44OSxcbiAgXCJzdG9ja1wiOiA2LFxuICBcImJyYW5kXCI6IFwiVmludGFnZSBBcHBhcmVsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My8xLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NCxcbiAgXCJ0aXRsZVwiOiBcIlB1YmcgUHJpbnRlZCBHcmFwaGljIFQtU2hpcnRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgRGVzY3JpcHRpb24gRmVhdHVyZXM6IDEwMCUgVWx0cmEgc29mdCBQb2x5ZXN0ZXIgSmVyc2V5LiBWaWJyYW50ICYgY29sb3JmdWwgcHJpbnRpbmcgb24gZnJvbnQuIEZlZWxzIHNvZnQgYXMgY290dG9uIHdpdGhvdXQgZXZlciBjcmFja2luZ1wiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi40NCxcbiAgXCJyYXRpbmdcIjogNC42MixcbiAgXCJzdG9ja1wiOiAxMzYsXG4gIFwiYnJhbmRcIjogXCJUaGUgV2FyZWhvdXNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU1LFxuICBcInRpdGxlXCI6IFwiTW9uZXkgSGVpc3QgUHJpbnRlZCBTdW1tZXIgVCBTaGlydHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhYnJpYyBKZXJjeSwgU2l6ZTogTSAmIEwgV2VhciBTdHlsaXNoIER1YWwgU3RpY2hlZFwiLFxuICBcInByaWNlXCI6IDY2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS45NyxcbiAgXCJyYXRpbmdcIjogNC45LFxuICBcInN0b2NrXCI6IDEyMixcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU2LFxuICBcInRpdGxlXCI6IFwiU25lYWtlcnMgSm9nZ2VycyBTaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2VuZGVyOiBNZW4gLCBDb2xvcnM6IFNhbWUgYXMgRGlzcGxheWVkQ29uZGl0aW9uOiAxMDAlIEJyYW5kIE5ld1wiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi41NyxcbiAgXCJyYXRpbmdcIjogNC4zOCxcbiAgXCJzdG9ja1wiOiA2LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzUuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTcsXG4gIFwidGl0bGVcIjogXCJMb2FmZXJzIGZvciBtZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lbiBTaG9lcyAtIExvYWZlcnMgZm9yIG1lbiAtIFJ1YmJlciBTaG9lcyAtIE55bG9uIFNob2VzIC0gU2hvZXMgZm9yIG1lbiAtIE1vY2Nhc3Npb24gLSBQdXJlIE55bG9uIChSdWJiZXIpIEV4cG90IFF1YWxpdHkuXCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjkxLFxuICBcInJhdGluZ1wiOiA0LjkxLFxuICBcInN0b2NrXCI6IDIwLFxuICBcImJyYW5kXCI6IFwiUnViYmVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTgsXG4gIFwidGl0bGVcIjogXCJmb3JtYWwgb2ZmaWNlcyBzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGF0dGVybiBUeXBlOiBTb2xpZCwgTWF0ZXJpYWw6IFBVLCBUb2UgU2hhcGU6IFBvaW50ZWQgVG9lICxPdXRzb2xlIE1hdGVyaWFsOiBSdWJiZXJcIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIsXG4gIFwicmF0aW5nXCI6IDQuNDEsXG4gIFwic3RvY2tcIjogNjgsXG4gIFwiYnJhbmRcIjogXCJUaGUgV2FyZWhvdXNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTksXG4gIFwidGl0bGVcIjogXCJTcHJpbmcgYW5kIHN1bW1lcnNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDb21mb3J0YWJsZSBzdHJldGNoIGNsb3RoLCBsaWdodHdlaWdodCBib2R5OyAscnViYmVyIHNvbGUsIGFudGktc2tpZCB3ZWFyO1wiLFxuICBcInByaWNlXCI6IDIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjcxLFxuICBcInJhdGluZ1wiOiA0LjMzLFxuICBcInN0b2NrXCI6IDEzNyxcbiAgXCJicmFuZFwiOiBcIlNuZWFrZXJzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjAsXG4gIFwidGl0bGVcIjogXCJTdHlsaXNoIENhc3VhbCBKZWFucyBTaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSGlnaCBRdWFsaXR5ICxTdHlsaXNoIGRlc2lnbiAsQ29tZm9ydGFibGUgd2VhciAsRkFzaGlvbiAsRHVyYWJsZVwiLFxuICBcInByaWNlXCI6IDU4LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjU1LFxuICBcInJhdGluZ1wiOiA0LjU1LFxuICBcInN0b2NrXCI6IDEyOSxcbiAgXCJicmFuZFwiOiBcIlNuZWFrZXJzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MSxcbiAgXCJ0aXRsZVwiOiBcIkxlYXRoZXIgU3RyYXBzIFdyaXN0d2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxlOlNwb3J0ICxDbGFzcDpCdWNrbGVzICxXYXRlciBSZXNpc3RhbmNlIERlcHRoOjNCYXJcIixcbiAgXCJwcmljZVwiOiAxMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuMTQsXG4gIFwicmF0aW5nXCI6IDQuNjMsXG4gIFwic3RvY2tcIjogOTEsXG4gIFwiYnJhbmRcIjogXCJOYXZpZm9yY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjIsXG4gIFwidGl0bGVcIjogXCJXYXRlcnByb29mIExlYXRoZXIgQnJhbmQgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldhdGNoIENyb3duIFdpdGggRW52aXJvbm1lbnRhbCBJUFMgQnJvbnplIEVsZWN0cm9wbGF0aW5nOyBEaXNwbGF5IHN5c3RlbSBvZiAxMiBob3Vyc1wiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjE1LFxuICBcInJhdGluZ1wiOiA0LjA1LFxuICBcInN0b2NrXCI6IDk1LFxuICBcImJyYW5kXCI6IFwiU0tNRUkgOTExN1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Mi8yLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYzLFxuICBcInRpdGxlXCI6IFwiUm95YWwgQmx1ZSBQcmVtaXVtIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZW4gU2lsdmVyIENoYWluIFJveWFsIEJsdWUgUHJlbWl1bSBXYXRjaCBMYXRlc3QgQW5hbG9nIFdhdGNoXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuNTYsXG4gIFwicmF0aW5nXCI6IDQuODksXG4gIFwic3RvY2tcIjogMTQyLFxuICBcImJyYW5kXCI6IFwiU0tNRUkgOTExN1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My80LmpwZWdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NCxcbiAgXCJ0aXRsZVwiOiBcIkxlYXRoZXIgU3RyYXAgU2tlbGV0b24gV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxlYXRoZXIgU3RyYXAgU2tlbGV0b24gV2F0Y2ggZm9yIE1lbiAtIFN0eWxpc2ggYW5kIExhdGVzdCBEZXNpZ25cIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMixcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA2MSxcbiAgXCJicmFuZFwiOiBcIlN0cmFwIFNrZWxldG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NSxcbiAgXCJ0aXRsZVwiOiBcIlN0YWlubGVzcyBTdGVlbCBXcmlzdCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGlzaCBXYXRjaCBGb3IgTWFuIChMdXh1cnkpIENsYXNzeSBNZW5cXCdzIFN0YWlubGVzcyBTdGVlbCBXcmlzdCBXYXRjaCAtIEJveCBQYWNrZWRcIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNzksXG4gIFwicmF0aW5nXCI6IDQuNzksXG4gIFwic3RvY2tcIjogOTQsXG4gIFwiYnJhbmRcIjogXCJTdGFpbmxlc3NcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NixcbiAgXCJ0aXRsZVwiOiBcIlN0ZWVsIEFuYWxvZyBDb3VwbGUgV2F0Y2hlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRWxlZ2FudCBkZXNpZ24sIFN0eWxpc2ggLFVuaXF1ZSAmIFRyZW5keSxDb21mb3J0YWJsZSB3ZWFyXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMjMsXG4gIFwicmF0aW5nXCI6IDQuNzksXG4gIFwic3RvY2tcIjogMjQsXG4gIFwiYnJhbmRcIjogXCJFYXN0ZXJuIFdhdGNoZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzQuSlBHXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjcsXG4gIFwidGl0bGVcIjogXCJGYXNoaW9uIE1hZ25ldGljIFdyaXN0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCdXkgdGhpcyBhd2Vzb21lICBUaGUgcHJvZHVjdCBpcyBvcmlnaW5hbGx5IG1hbnVmYWN0dXJlZCBieSB0aGUgY29tcGFueSBhbmQgaXRcXCdzIGEgdG9wIHNlbGxpbmcgcHJvZHVjdCB3aXRoIGEgdmVyeSByZWFzb25hYmxlXCIsXG4gIFwicHJpY2VcIjogNjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjY5LFxuICBcInJhdGluZ1wiOiA0LjAzLFxuICBcInN0b2NrXCI6IDQ2LFxuICBcImJyYW5kXCI6IFwiRWFzdGVybiBXYXRjaGVzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY4LFxuICBcInRpdGxlXCI6IFwiU3R5bGlzaCBMdXh1cnkgRGlnaXRhbCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGlzaCBMdXh1cnkgRGlnaXRhbCBXYXRjaCBGb3IgR2lybHMgLyBXb21lbiAtIExlZCBTbWFydCBMYWRpZXMgV2F0Y2hlcyBGb3IgR2lybHNcIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOS4wMyxcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiA3NyxcbiAgXCJicmFuZFwiOiBcIkx1eHVyeSBEaWdpdGFsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjgvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4LzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjksXG4gIFwidGl0bGVcIjogXCJHb2xkZW4gV2F0Y2ggUGVhcmxzIEJyYWNlbGV0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgR29sZGVuIFdhdGNoIFBlYXJscyBCcmFjZWxldCBXYXRjaCBGb3IgR2lybHMgLSBHb2xkZW4gQ2hhaW4gTGFkaWVzIEJyYWNlbGF0ZSBXYXRjaCBmb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNTUsXG4gIFwicmF0aW5nXCI6IDQuNzcsXG4gIFwic3RvY2tcIjogODksXG4gIFwiYnJhbmRcIjogXCJXYXRjaCBQZWFybHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcwLFxuICBcInRpdGxlXCI6IFwiU3RhaW5sZXNzIFN0ZWVsIFdvbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIFNrbWVpIDE4MzAgU2hlbGwgRGlhbCBTdGFpbmxlc3MgU3RlZWwgV29tZW4gV3Jpc3QgV2F0Y2ggTGFkeSBCcmFjZWxldCBXYXRjaCBRdWFydHogV2F0Y2hlcyBMYWRpZXNcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC45OCxcbiAgXCJyYXRpbmdcIjogNC4wOCxcbiAgXCJzdG9ja1wiOiAxMTEsXG4gIFwiYnJhbmRcIjogXCJCcmFjZWxldFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzEsXG4gIFwidGl0bGVcIjogXCJXb21lbiBTaG91bGRlciBCYWdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3Vpc1dpbGwgV29tZW4gU2hvdWxkZXIgQmFncyBMb25nIENsdXRjaGVzIENyb3NzIEJvZHkgQmFncyBQaG9uZSBCYWdzIFBVIExlYXRoZXIgSGFuZCBCYWdzIExhcmdlIENhcGFjaXR5IENhcmQgSG9sZGVycyBaaXBwZXIgQ29pbiBQdXJzZXMgRmFzaGlvbiBDcm9zc2JvZHkgQmFncyBmb3IgR2lybHMgTGFkaWVzXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjY1LFxuICBcInJhdGluZ1wiOiA0LjcxLFxuICBcInN0b2NrXCI6IDE3LFxuICBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcyLFxuICBcInRpdGxlXCI6IFwiSGFuZGJhZyBGb3IgR2lybHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgZmFzaGlvbiBpcyBkZXNpZ25lZCB0byBhZGQgYSBjaGFybWluZyBlZmZlY3QgdG8geW91ciBjYXN1YWwgb3V0Zml0LiBUaGlzIEJhZyBpcyBtYWRlIG9mIHN5bnRoZXRpYyBsZWF0aGVyLlwiLFxuICBcInByaWNlXCI6IDIzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41LFxuICBcInJhdGluZ1wiOiA0LjkxLFxuICBcInN0b2NrXCI6IDI3LFxuICBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDczLFxuICBcInRpdGxlXCI6IFwiRmFuY3kgaGFuZCBjbHV0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgZmFzaGlvbiBpcyBkZXNpZ25lZCB0byBhZGQgYSBjaGFybWluZyBlZmZlY3QgdG8geW91ciBjYXN1YWwgb3V0Zml0LiBUaGlzIEJhZyBpcyBtYWRlIG9mIHN5bnRoZXRpYyBsZWF0aGVyLlwiLFxuICBcInByaWNlXCI6IDQ0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4zOSxcbiAgXCJyYXRpbmdcIjogNC4xOCxcbiAgXCJzdG9ja1wiOiAxMDEsXG4gIFwiYnJhbmRcIjogXCJCcmFjZWxldFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NCxcbiAgXCJ0aXRsZVwiOiBcIkxlYXRoZXIgSGFuZCBCYWdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkl0IGZlYXR1cmVzIGFuIGF0dHJhY3RpdmUgZGVzaWduIHRoYXQgbWFrZXMgaXQgYSBtdXN0IGhhdmUgYWNjZXNzb3J5IGluIHlvdXIgY29sbGVjdGlvbi4gV2Ugc2VsbCBkaWZmZXJlbnQga2luZCBvZiBiYWdzIGZvciBib3lzLCBraWRzLCB3b21lbiwgZ2lybHMgYW5kIGFsc28gZm9yIHVuaXNleC5cIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMTksXG4gIFwicmF0aW5nXCI6IDQuMDEsXG4gIFwic3RvY2tcIjogNDMsXG4gIFwiYnJhbmRcIjogXCJDb3BlbmhhZ2VuIEx1eGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzUsXG4gIFwidGl0bGVcIjogXCJTZXZlbiBQb2NrZXQgV29tZW4gQmFnXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTZXZlbiBQb2NrZXQgV29tZW4gQmFnIEhhbmRiYWdzIExhZHkgU2hvdWxkZXIgQ3Jvc3Nib2R5IEJhZyBGZW1hbGUgUHVyc2UgU2V2ZW4gUG9ja2V0IEJhZ1wiLFxuICBcInByaWNlXCI6IDY4LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC44NyxcbiAgXCJyYXRpbmdcIjogNC45MyxcbiAgXCJzdG9ja1wiOiAxMyxcbiAgXCJicmFuZFwiOiBcIlN0ZWFsIEZyYW1lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzYsXG4gIFwidGl0bGVcIjogXCJTaWx2ZXIgUmluZyBTZXQgV29tZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkpld2VscnkgVHlwZTpSaW5nc0NlcnRpZmljYXRlIFR5cGU6Tm9uZVBsYXRpbmc6U2lsdmVyIFBsYXRlZFNoYXBlYXR0ZXJuOm5vbmVTdHlsZTpDTEFTU0lDUmVsaWdpb3VzXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjU3LFxuICBcInJhdGluZ1wiOiA0LjYxLFxuICBcInN0b2NrXCI6IDUxLFxuICBcImJyYW5kXCI6IFwiRGFyb2pheVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NyxcbiAgXCJ0aXRsZVwiOiBcIlJvc2UgUmluZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQnJhbmQ6IFRoZSBHcmVldGluZ3MgRmxvd2VyIENvbG91cjogUmVkUmluZyBDb2xvdXI6IEdvbGRlblNpemU6IEFkanVzdGFibGVcIixcbiAgXCJwcmljZVwiOiAxMDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMjIsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTQ5LFxuICBcImJyYW5kXCI6IFwiQ29wZW5oYWdlbiBMdXhlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3OCxcbiAgXCJ0aXRsZVwiOiBcIlJoaW5lc3RvbmUgS29yZWFuIFN0eWxlIE9wZW4gUmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5IDNQY3MgQWRqdXN0YWJsZSBQZWFybCBSaGluZXN0b25lIEtvcmVhbiBTdHlsZSBPcGVuIFJpbmdzIEZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjAyLFxuICBcInJhdGluZ1wiOiA0LjY5LFxuICBcInN0b2NrXCI6IDksXG4gIFwiYnJhbmRcIjogXCJGYXNoaW9uIEpld2VsbGVyeVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzksXG4gIFwidGl0bGVcIjogXCJFbGVnYW50IEZlbWFsZSBQZWFybCBFYXJyaW5nc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRWxlZ2FudCBGZW1hbGUgUGVhcmwgRWFycmluZ3MgU2V0IFppcmNvbiBQZWFybCBFYXJpbmdzIFdvbWVuIFBhcnR5IEFjY2Vzc29yaWVzIDkgUGFpcnMvU2V0XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjgsXG4gIFwicmF0aW5nXCI6IDQuNzQsXG4gIFwic3RvY2tcIjogMTYsXG4gIFwiYnJhbmRcIjogXCJGYXNoaW9uIEpld2VsbGVyeVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OS8xLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgwLFxuICBcInRpdGxlXCI6IFwiQ2hhaW4gUGluIFRhc3NlbCBFYXJyaW5nc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUGFpciBPZiBFYXIgQ3VmZiBCdXR0ZXJmbHkgTG9uZyBDaGFpbiBQaW4gVGFzc2VsIEVhcnJpbmdzIC0gU2lsdmVyICggTG9uZyBMaWZlIFF1YWxpdHkgUHJvZHVjdClcIixcbiAgXCJwcmljZVwiOiA0NSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNzUsXG4gIFwicmF0aW5nXCI6IDQuNTksXG4gIFwic3RvY2tcIjogOSxcbiAgXCJicmFuZFwiOiBcIkN1ZmYgQnV0dGVyZmx5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODEsXG4gIFwidGl0bGVcIjogXCJSb3VuZCBTaWx2ZXIgRnJhbWUgU3VuIEdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgcGFpciBvZiBzdW5nbGFzc2VzIGNhbiBwcm90ZWN0IHlvdXIgZXllcyBmcm9tIGJlaW5nIGh1cnQuIEZvciBjYXIgZHJpdmluZywgdmFjYXRpb24gdHJhdmVsLCBvdXRkb29yIGFjdGl2aXRpZXMsIHNvY2lhbCBnYXRoZXJpbmdzLFwiLFxuICBcInByaWNlXCI6IDE5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4xLFxuICBcInJhdGluZ1wiOiA0Ljk0LFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODIsXG4gIFwidGl0bGVcIjogXCJLYWJpciBTaW5naCBTcXVhcmUgU3VuZ2xhc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9yaWduYWwgTWV0YWwgS2FiaXIgU2luZ2ggZGVzaWduIDIwMjAgU3VuZ2xhc3NlcyBNZW4gQnJhbmQgRGVzaWduZXIgU3VuIEdsYXNzZXMgS2FiaXIgU2luZ2ggU3F1YXJlIFN1bmdsYXNzXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjYsXG4gIFwicmF0aW5nXCI6IDQuNjIsXG4gIFwic3RvY2tcIjogNzgsXG4gIFwiYnJhbmRcIjogXCJEZXNpZ25lciBTdW4gR2xhc3Nlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MyxcbiAgXCJ0aXRsZVwiOiBcIldpbGV5IFggTmlnaHQgVmlzaW9uIFllbGxvdyBHbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaWxleSBYIE5pZ2h0IFZpc2lvbiBZZWxsb3cgR2xhc3NlcyBmb3IgUmlkZXJzIC0gTmlnaHQgVmlzaW9uIEFudGkgRm9nIERyaXZpbmcgR2xhc3NlcyAtIEZyZWUgTmlnaHQgR2xhc3MgQ292ZXIgLSBTaGllbGQgRXllcyBGcm9tIER1c3QgYW5kIFZpcnVzLSBGb3IgTmlnaHQgU3BvcnQgTWF0Y2hlc1wiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA2LjMzLFxuICBcInJhdGluZ1wiOiA0Ljk3LFxuICBcInN0b2NrXCI6IDExNSxcbiAgXCJicmFuZFwiOiBcIm1hc3RhciB3YXRjaFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg0LFxuICBcInRpdGxlXCI6IFwiU3F1YXJlIFN1bmdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gT3ZlcnNpemVkIFNxdWFyZSBTdW5nbGFzc2VzIFJldHJvIEdyYWRpZW50IEJpZyBGcmFtZSBTdW5nbGFzc2VzIEZvciBXb21lbiBPbmUgUGllY2UgR2FmYXMgU2hhZGUgTWlycm9yIENsZWFyIExlbnMgMTcwNTlcIixcbiAgXCJwcmljZVwiOiAyOCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuODksXG4gIFwicmF0aW5nXCI6IDQuNjQsXG4gIFwic3RvY2tcIjogNjQsXG4gIFwiYnJhbmRcIjogXCJtYXN0YXIgd2F0Y2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODUsXG4gIFwidGl0bGVcIjogXCJMb3Vpc1dpbGwgTWVuIFN1bmdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvdWlzV2lsbCBNZW4gU3VuZ2xhc3NlcyBQb2xhcml6ZWQgU3VuZ2xhc3NlcyBVVjQwMCBTdW5nbGFzc2VzIERheSBOaWdodCBEdWFsIFVzZSBTYWZldHkgRHJpdmluZyBOaWdodCBWaXNpb24gRXlld2VhciBBTC1NRyBGcmFtZSBTdW4gR2xhc3NlcyB3aXRoIEZyZWUgQm94IGZvciBEcml2ZXJzXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjI3LFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDkyLFxuICBcImJyYW5kXCI6IFwiTG91aXNXaWxsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg2LFxuICBcInRpdGxlXCI6IFwiQmx1ZXRvb3RoIEF1eFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQmx1ZXRvb3RoIEF1eCBCbHVldG9vdGggQ2FyIEF1eCBDYXIgQmx1ZXRvb3RoIFRyYW5zbWl0dGVyIEF1eCBBdWRpbyBSZWNlaXZlciBIYW5kZnJlZSBDYXIgQmx1ZXRvb3RoIE11c2ljIFJlY2VpdmVyIFVuaXZlcnNhbCAzLjVtbSBTdHJlYW1pbmcgQTJEUCBXaXJlbGVzcyBBdXRvIEFVWCBBdWRpbyBBZGFwdGVyIFdpdGggTWljIEZvciBQaG9uZSBNUDNcIixcbiAgXCJwcmljZVwiOiAyNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNTYsXG4gIFwicmF0aW5nXCI6IDQuNTcsXG4gIFwic3RvY2tcIjogMjIsXG4gIFwiYnJhbmRcIjogXCJDYXIgQXV4XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg3LFxuICBcInRpdGxlXCI6IFwidCBUZW1wZXJhdHVyZSBDb250cm9sbGVyIEluY3ViYXRvciBDb250cm9sbGVyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCb3RoIEhlYXQgYW5kIENvb2wgUHVycG9zZSwgVGVtcGVyYXR1cmUgY29udHJvbCByYW5nZTsgLTUwIHRvICsxMTAsIFRlbXBlcmF0dXJlIG1lYXN1cmVtZW50IGFjY3VyYWN5OyAwLjEsIENvbnRyb2wgYWNjdXJhY3k7IDAuMVwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4zLFxuICBcInJhdGluZ1wiOiA0LjU0LFxuICBcInN0b2NrXCI6IDM3LFxuICBcImJyYW5kXCI6IFwiVzEyMDkgREMxMlZcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4OCxcbiAgXCJ0aXRsZVwiOiBcIlRDIFJldXNhYmxlIFNpbGljb25lIE1hZ2ljIFdhc2hpbmcgR2xvdmVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUQyBSZXVzYWJsZSBTaWxpY29uZSBNYWdpYyBXYXNoaW5nIEdsb3ZlcyB3aXRoIFNjcnViYmVyLCBDbGVhbmluZyBCcnVzaCBTY3J1YmJlciBHbG92ZXMgSGVhdCBSZXNpc3RhbnQgUGFpciBmb3IgQ2xlYW5pbmcgb2YgS2l0Y2hlbiwgRGlzaGVzLCBWZWdldGFibGVzIGFuZCBGcnVpdHMsIEJhdGhyb29tLCBDYXIgV2FzaCwgUGV0IENhcmUgYW5kIE11bHRpcHVycG9zZVwiLFxuICBcInByaWNlXCI6IDI5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjE5LFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDQyLFxuICBcImJyYW5kXCI6IFwiVEMgUmV1c2FibGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODksXG4gIFwidGl0bGVcIjogXCJRdWFsY29tbSBvcmlnaW5hbCBDYXIgQ2hhcmdlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiYmVzdCBRdWFsaXR5IENIYXJnZXIgLCBIaWdobHkgUmVjb21tZW5kZWQgdG8gYWxsIGJlc3QgUXVhbGl0eSBDSGFyZ2VyICwgSGlnaGx5IFJlY29tbWVuZGVkIHRvIGFsbFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41MyxcbiAgXCJyYXRpbmdcIjogNC4yLFxuICBcInN0b2NrXCI6IDc5LFxuICBcImJyYW5kXCI6IFwiVEMgUmV1c2FibGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MCxcbiAgXCJ0aXRsZVwiOiBcIkN5Y2xlIEJpa2UgR2xvd1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVW5pdmVyc2FsIGZpdG1lbnQgYW5kIGVhc3kgdG8gaW5zdGFsbCBubyBzcGVjaWFsIHdpcmVzLCBjYW4gYmUgZWFzaWx5IGluc3RhbGxlZCBhbmQgcmVtb3ZlZC4gRml0cyBtb3N0IHN0YW5kYXJkIHR5cmUgYWlyIHN0ZW0gdmFsdmVzIG9mIHJvYWQsIG1vdW50YWluIGJpY3ljbGVzLCBtb3RvY3ljbGVzIGFuZCBjYXJzLkJyaWdodCBsZWQgd2lsbCB0dXJuIG9uIHdcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMDgsXG4gIFwicmF0aW5nXCI6IDQuMSxcbiAgXCJzdG9ja1wiOiA2MyxcbiAgXCJicmFuZFwiOiBcIk5lb24gTEVEIExpZ2h0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTEsXG4gIFwidGl0bGVcIjogXCJCbGFjayBNb3RvcmJpa2VcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVuZ2luZSBUeXBlOldldCBzdW1wLCBTaW5nbGUgQ3lsaW5kZXIsIEZvdXIgU3Ryb2tlLCBUd28gVmFsdmVzLCBBaXIgQ29vbGVkIHdpdGggU09IQyAoU2luZ2xlIE92ZXIgSGVhZCBDYW0pIENoYWluIERyaXZlIEJvcmUgJiBTdHJva2U6NDcuMCB4IDQ5LjUgTU1cIixcbiAgXCJwcmljZVwiOiA1NjksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjYzLFxuICBcInJhdGluZ1wiOiA0LjA0LFxuICBcInN0b2NrXCI6IDExNSxcbiAgXCJicmFuZFwiOiBcIk1FVFJPIDcwY2MgTW90b3JjeWNsZSAtIE1SNzBcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MixcbiAgXCJ0aXRsZVwiOiBcIkhPVCBTQUxFIElOIEVVUk9QRSBlbGVjdHJpYyByYWNpbmcgbW90b3JjeWNsZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSE9UIFNBTEUgSU4gRVVST1BFIGVsZWN0cmljIHJhY2luZyBtb3RvcmN5Y2xlIGVsZWN0cmljIG1vdG9yY3ljbGUgZm9yIHNhbGUgYWR1bHQgZWxlY3RyaWMgbW90b3JjeWNsZXNcIixcbiAgXCJwcmljZVwiOiA5MjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjQsXG4gIFwicmF0aW5nXCI6IDQuMTksXG4gIFwic3RvY2tcIjogMjIsXG4gIFwiYnJhbmRcIjogXCJCUkFWRSBCVUxMXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTMsXG4gIFwidGl0bGVcIjogXCJBdXRvbWF0aWMgTW90b3IgR2FzIE1vdG9yY3ljbGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIxNTBjYyA0LVN0cm9rZSBNb3RvcmN5Y2xlIEF1dG9tYXRpYyBNb3RvciBHYXMgTW90b3JjeWNsZXMgU2Nvb3RlciBtb3RvcmN5Y2xlcyAxNTBjYyBzY29vdGVyXCIsXG4gIFwicHJpY2VcIjogMTA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4zNCxcbiAgXCJyYXRpbmdcIjogNC44NCxcbiAgXCJzdG9ja1wiOiAxMjcsXG4gIFwiYnJhbmRcIjogXCJzaG9jayBhYnNvcmJlclwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk0LFxuICBcInRpdGxlXCI6IFwibmV3IGFycml2YWxzIEZhc2hpb24gbW90b2Nyb3NzIGdvZ2dsZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIm5ldyBhcnJpdmFscyBGYXNoaW9uIG1vdG9jcm9zcyBnb2dnbGVzIG1vdG9yY3ljbGUgbW90b2Nyb3NzIHJhY2luZyBtb3RvcmN5Y2xlXCIsXG4gIFwicHJpY2VcIjogOTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjg1LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDEwOSxcbiAgXCJicmFuZFwiOiBcIkpJRVBPTExZXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8xLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NSxcbiAgXCJ0aXRsZVwiOiBcIldob2xlc2FsZSBjYXJnbyBsYXNoaW5nIEJlbHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldob2xlc2FsZSBjYXJnbyBsYXNoaW5nIEJlbHQgVGllIERvd24gZW5kIFJhdGNoZXQgc3RyYXAgY3VzdG9taXplZCBzdHJhcCAyNW1tIG1vdG9yY3ljbGUgMTUwMGtncyB3aXRoIHJ1YmJlciBoYW5kbGVcIixcbiAgXCJwcmljZVwiOiA5MzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjY3LFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDE0NCxcbiAgXCJicmFuZFwiOiBcIlhpYW5nbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NixcbiAgXCJ0aXRsZVwiOiBcImxpZ2h0aW5nIGNlaWxpbmcga2l0Y2hlblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2hvbGVzYWxlIHNsaW0gaGFuZ2luZyBkZWNvcmF0aXZlIGtpZCByb29tIGxpZ2h0aW5nIGNlaWxpbmcga2l0Y2hlbiBjaGFuZGVsaWVycyBwZW5kYW50IGxpZ2h0IG1vZGVyblwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC44OSxcbiAgXCJyYXRpbmdcIjogNC44MyxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcImxpZ2h0aW5nYnJpbGxpYW5jZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NyxcbiAgXCJ0aXRsZVwiOiBcIk1ldGFsIENlcmFtaWMgRmxvd2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZXRhbCBDZXJhbWljIEZsb3dlciBDaGFuZGVsaWVyIEhvbWUgTGlnaHRpbmcgQW1lcmljYW4gVmludGFnZSBIYW5naW5nIExpZ2h0aW5nIFBlbmRhbnQgTGFtcFwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45NCxcbiAgXCJyYXRpbmdcIjogNC45MyxcbiAgXCJzdG9ja1wiOiAxNDYsXG4gIFwiYnJhbmRcIjogXCJJZmVpIEhvbWVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk4LFxuICBcInRpdGxlXCI6IFwiMyBsaWdodHMgbG5kZW5wYW50IGtpdGNoZW4gaXNsYW5nXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzIGxpZ2h0cyBsbmRlbnBhbnQga2l0Y2hlbiBpc2xhbmcgZGluaW5nIHJvb20gcGVuZGFudCByaWNlIHBhcGVyIGNoYW5kZWxpZXIgY29udGVtcG9yYXJ5IGxlZCBwZW5kYW50IGxpZ2h0IG1vZGVybiBjaGFuZGVsaWVyXCIsXG4gIFwicHJpY2VcIjogMzQsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDUuOTIsXG4gIFwicmF0aW5nXCI6IDQuOTksXG4gIFwic3RvY2tcIjogNDQsXG4gIFwiYnJhbmRcIjogXCJEQURBV1VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTksXG4gIFwidGl0bGVcIjogXCJBbWVyaWNhbiBWaW50YWdlIFdvb2QgUGVuZGFudCBMaWdodFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW1lcmljYW4gVmludGFnZSBXb29kIFBlbmRhbnQgTGlnaHQgRmFybWhvdXNlIEFudGlxdWUgSGFuZ2luZyBMYW1wIExhbXBhcmEgQ29sZ2FudGVcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC44NCxcbiAgXCJyYXRpbmdcIjogNC4zMixcbiAgXCJzdG9ja1wiOiAxMzgsXG4gIFwiYnJhbmRcIjogXCJJZmVpIEhvbWVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTAwLFxuICBcInRpdGxlXCI6IFwiQ3J5c3RhbCBjaGFuZGVsaWVyIG1hcmlhIHRoZXJlc2EgZm9yIDEyIGxpZ2h0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDcnlzdGFsIGNoYW5kZWxpZXIgbWFyaWEgdGhlcmVzYSBmb3IgMTIgbGlnaHRcIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYsXG4gIFwicmF0aW5nXCI6IDQuNzQsXG4gIFwic3RvY2tcIjogMTMzLFxuICBcImJyYW5kXCI6IFwiWUlPU0lcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfVxuICBdLFxuICBcInRvdGFsXCI6IDEwMCxcbiAgXCJza2lwXCI6IDAsXG4gIFwibGltaXRcIjogMTAwXG4gIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9yb3V0aW5nJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWFpbi10ZW1wbGF0ZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2hlYWRlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Zvb3Rlcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0b3JlLXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9lcnJvci1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2FydC1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcmFuZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9maWx0ZXJJdGVtJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZ29vZHMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy92aWV3JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VhcmNoJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc29ydGluZyc7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==