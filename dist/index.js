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
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");


function renderCartPage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = "Cart";
        console.log(_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"]);
        _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].addProduct(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(1));
        _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].addProduct(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(1));
        _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].addProduct(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(3));
        //cart.removeProduct(products.getProductById(1));
        //cart.removeProduct(products.getProductById(3));
        console.log(_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"]);
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
        categoryInner += `<label class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_category' value="${key}" name="${key}" data-param = 'category' data-quantity="${categories[key].length}">
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity filter__quantity' data-param ="${key}">(${categories[key].length})</div>
    </label>`;
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
        brandsInner += `<label class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_brand' value="${key}" name="${key}" data-param = 'brand' data-quantity="${brands[key].length}">
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity filter__quantity' data-param ="${key}">(${brands[key].length})</div>
    </label>`;
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
    stringSearch: "",
};
let filter = {
    category: [],
    brand: [],
    price: { min: null, max: null },
    stock: { min: null, max: null },
    stringSearch: "",
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
        else if (param === "search") {
            filter.stringSearch = newFilter;
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
    if (filter.stringSearch !== "") {
        filterDownloaded.setStringSearch(filter.stringSearch);
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
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");




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
          <button class='card__button card__button_add' data-goodID = "${good.id}">Add to cart</button>
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
        button.addEventListener('click', (e) => {
            let goodID = e.currentTarget.dataset.goodid;
            if (goodID)
                changeButtonCart(e.currentTarget, goodID);
        });
    });
}
function changeButtonCart(e, id) {
    if ((e === null || e === void 0 ? void 0 : e.innerHTML) == "Add to cart") {
        e.innerHTML = "Delete from cart";
        _scripts_cart__WEBPACK_IMPORTED_MODULE_3__["default"].addProduct(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(Number(id)));
    }
    else if ((e === null || e === void 0 ? void 0 : e.innerHTML) == "Delete from cart") {
        e.innerHTML = "Add to cart";
        _scripts_cart__WEBPACK_IMPORTED_MODULE_3__["default"].removeProduct(_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(Number(id)));
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
/* harmony export */   "fillCart": () => (/* binding */ fillCart),
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");

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
function fillCart() {
    console.log(_scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"]);
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
    (0,_sorting__WEBPACK_IMPORTED_MODULE_5__.addListenerSortingButtons)();
    (0,_view__WEBPACK_IMPORTED_MODULE_6__.addListenerForView)();
    (0,_header__WEBPACK_IMPORTED_MODULE_7__.renderHeader)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_8__.renderFooter)();
    (0,_search__WEBPACK_IMPORTED_MODULE_4__.addListenerForSearch)();
    (0,_header__WEBPACK_IMPORTED_MODULE_7__.fillCart)();
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
    const mainPhotoBlock = createNode('photos__main');
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
function changePriceRange() {
    renderRange("price", _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.min, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].priceRange.max);
}
function changeStockRange() {
    renderRange("stock", _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].stockRange.min, _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].stockRange.max);
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
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./src/components/search.ts");
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
            stringSearch: "",
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
            if (param.startsWith("search")) {
                let arr = param.split('=');
                filter.stringSearch = arr[1];
            }
        });
        yield (0,_filterItem__WEBPACK_IMPORTED_MODULE_4__.changeMainFilter)(filter);
        (0,_search__WEBPACK_IMPORTED_MODULE_7__.fillInput)(filter.stringSearch);
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
            if (pair[0] == "search" || pair[0] == "sort" || pair[0] == "view" || pair[0] == "price-min" || pair[0] == "price-max" || pair[0] == "stock-min" || pair[0] == "stock-max") {
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
/* harmony export */   "addListenerForSearch": () => (/* binding */ addListenerForSearch),
/* harmony export */   "fillInput": () => (/* binding */ fillInput)
/* harmony export */ });
/* harmony import */ var _filterItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterItem */ "./src/components/filterItem.ts");

function addListenerForSearch() {
    const searchInput = document.querySelector('.search__input');
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', (e) => {
        (0,_filterItem__WEBPACK_IMPORTED_MODULE_0__.changeFilters)(e);
    });
}
function fillInput(prop) {
    console.log("111", prop);
    const searchInput = document.querySelector(".search__input");
    if (searchInput)
        searchInput.value = prop;
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
            <input type='search' class='search__input' placeholder ='Search product' data-param = 'search'></input> 
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
    const goodsButtons = document.querySelectorAll('.card__button');
    goodsButtons.forEach(button => {
        button.classList.toggle('card__button_small');
    });
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
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        if (product) {
            const productId = this._getCartProductId(product);
            if (productId !== undefined) {
                this.products[productId].amount += 1;
                return;
            }
            const cartProduct = {
                product: product,
                amount: 1,
                id: product.id,
            };
            this.products.push(cartProduct);
        }
    }
    removeProduct(product) {
        if (product) {
            const productId = this._getCartProductId(product);
            if (productId !== undefined) {
                if (this.products[productId].amount > 1)
                    this.products[productId].amount--;
                else
                    this.products.splice(productId, 1);
            }
        }
    }
    _getCartProductId(product) {
        if (product) {
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    return i;
                }
            }
        }
        return undefined;
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
                //console.log(product, value);
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
                        //console.log(el)
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
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/range */ "./src/components/range.ts");
/* harmony import */ var _components_filterItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/filterItem */ "./src/components/filterItem.ts");
/* harmony import */ var _components_goods__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/goods */ "./src/components/goods.ts");
/* harmony import */ var _components_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/view */ "./src/components/view.ts");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search */ "./src/components/search.ts");
/* harmony import */ var _components_sorting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sorting */ "./src/components/sorting.ts");
















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBOEM7QUFDWDtBQUM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxREFBSTtBQUN4QixRQUFRLGdFQUFlLENBQUMsMkVBQXVCO0FBQy9DLFFBQVEsZ0VBQWUsQ0FBQywyRUFBdUI7QUFDL0MsUUFBUSxnRUFBZSxDQUFDLDJFQUF1QjtBQUMvQztBQUNBO0FBQ0Esb0JBQW9CLHFEQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDhDO0FBQ1A7QUFDRDtBQUNhO0FBQ3VCO0FBQ2xDO0FBQ3hDO0FBQ0E7QUFDQSx1QkFBdUIsdUVBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixJQUFJLFVBQVUsSUFBSSwyQ0FBMkMsdUJBQXVCO0FBQy9LLHFDQUFxQyxJQUFJLE1BQU07QUFDL0Msc0VBQXNFLElBQUksS0FBSyx1QkFBdUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RixJQUFJLFVBQVUsSUFBSSx3Q0FBd0MsbUJBQW1CO0FBQ3JLLGtDQUFrQyxJQUFJLE1BQU07QUFDNUMsbUVBQW1FLElBQUksS0FBSyxtQkFBbUI7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVyxJQUFJLE1BQU0sR0FBRyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix1REFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdFQUFvQjtBQUN4QixnQkFBZ0IsNERBQVE7QUFDeEI7QUFDQSxRQUFRLHdEQUFnQjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3REFBZ0I7QUFDeEI7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkI7QUFDQSxJQUFJLG1EQUFXO0FBQ2Y7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1FQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUVBQWU7QUFDM0M7QUFDQSx5Q0FBeUMsbUVBQWUsYUFBYTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQix1RUFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1RUFBbUI7QUFDL0M7QUFDQSx5Q0FBeUMsdUVBQW1CLGFBQWE7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JQTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCOEM7QUFDSztBQUNaO0FBQ0o7QUFDNUI7QUFDUDtBQUNBLGtCQUFrQixxRUFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGVBQWU7QUFDbEUsdUNBQXVDLHdCQUF3QixLQUFLO0FBQ3BFO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQSx5Q0FBeUMsV0FBVyxLQUFLO0FBQ3pELHlDQUF5QywrREFBK0QsS0FBSztBQUM3RztBQUNBO0FBQ0Esc0NBQXNDLFlBQVksT0FBTztBQUN6RCwrQ0FBK0MsTUFBTSxFQUFFLFdBQVc7QUFDbEU7QUFDQTtBQUNBLHlFQUF5RSxRQUFRO0FBQ2pGLDBFQUEwRSxRQUFRO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFVLGFBQWEsT0FBTztBQUMxQyxZQUFZLGdFQUFpQjtBQUM3QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFlLENBQUMsMkVBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQWtCLENBQUMsMkVBQXVCO0FBQ2xEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVtQztBQUM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsTUFBTSx3Q0FBd0M7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0JBQWdCLHFEQUFJO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFEO0FBQ2Y7QUFDTztBQUNLO0FBQ0Y7QUFDTTtBQUNWO0FBQ007QUFDVjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCLElBQUksbURBQVc7QUFDZixJQUFJLDBEQUFhO0FBQ2pCLElBQUksa0RBQVU7QUFDZCxJQUFJLG1EQUFXO0FBQ2YsSUFBSSxrREFBUTtBQUNaLElBQUksbUVBQXlCO0FBQzdCLElBQUkseURBQWtCO0FBQ3RCLElBQUkscURBQVk7QUFDaEIsSUFBSSxxREFBWTtBQUNoQixJQUFJLDZEQUFvQjtBQUN4QixJQUFJLGlEQUFRO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDOEM7QUFDOUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyRUFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSwyQkFBMkI7QUFDN0YsMERBQTBELGNBQWM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GOEM7QUFDSDtBQUNFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxjQUFjLHdFQUFvQixDQUFDLDREQUFhO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLEtBQUs7QUFDckU7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELE1BQU0sa0NBQWtDLEtBQUssd0JBQXdCLFNBQVMsU0FBUyxJQUFJLFNBQVMsSUFBSSxnQkFBZ0IsS0FBSztBQUNuTCxzREFBc0QsTUFBTSxnQ0FBZ0MsS0FBSyx3QkFBd0IsU0FBUyxTQUFTLElBQUksU0FBUyxJQUFJLGdCQUFnQixLQUFLO0FBQ2pMO0FBQ0EsWUFBWSw0RUFBd0I7QUFDcEM7QUFDQTtBQUNBLHlEQUF5RCxLQUFLLCtCQUErQixLQUFLLFdBQVcsU0FBUyxTQUFTLElBQUksUUFBUSxJQUFJO0FBQy9JO0FBQ0E7QUFDQSx5REFBeUQsS0FBSyw2QkFBNkIsS0FBSyxXQUFXLFNBQVMsU0FBUyxJQUFJLFFBQVEsSUFBSTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFhO0FBQ3pCO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkRBQTZELEtBQUs7QUFDbEUsbUVBQW1FLEtBQUs7QUFDeEUsb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AseUJBQXlCLDJFQUF1QixFQUFFLDJFQUF1QjtBQUN6RTtBQUNPO0FBQ1AseUJBQXlCLDJFQUF1QixFQUFFLDJFQUF1QjtBQUN6RTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDK0M7QUFDRjtBQUNNO0FBQ0o7QUFDaUI7QUFDeEI7QUFDTDtBQUNFO0FBQ3JDO0FBQ0E7QUFDQSxRQUFRLHdEQUFlO0FBQ3ZCLGVBQWUsNERBQWlCO0FBQ2hDLFlBQVksc0RBQWM7QUFDMUIsYUFBYSx3REFBZTtBQUM1QjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1Asd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGNBQWMsNkRBQWdCO0FBQzlCLFFBQVEsa0RBQVM7QUFDakIsUUFBUSxxREFBVztBQUNuQixRQUFRLGdEQUFTO0FBQ2pCLFFBQVEsMkRBQWM7QUFDdEIsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxNQUFNO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsY0FBYztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEo2QztBQUN0QztBQUNQO0FBQ0E7QUFDQSxRQUFRLDBEQUFhO0FBQ3JCLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1o4QztBQUNSO0FBQ0U7QUFDakM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBVyxZQUFZLCtCQUErQixHQUFHLGtDQUFrQztBQUN2RyxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBFQUFzQjtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSwwRUFBc0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBFQUFzQjtBQUNsQztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsWUFBWSwwRUFBc0I7QUFDbEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLElBQUksbURBQVc7QUFDZjtBQUNPO0FBQ1A7QUFDQTtBQUNBLGlFQUFpRSxPQUFPLHFCQUFxQixPQUFPO0FBQ3BHO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQ4QztBQUN2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUpBQWlKO0FBQ2pKLGtKQUFrSjtBQUNsSixxSkFBcUo7QUFDckosc0pBQXNKO0FBQ3RKO0FBQ0EsOEVBQThFLDRFQUF3QixDQUFDO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EscUNBQXFDLDRFQUF3QixDQUFDO0FBQzlEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0R3QztBQUNqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxREFBVztBQUN2QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMEJBQTBCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNERBQWE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw0QkFBNEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNERBQWE7QUFDM0MsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1SnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVDZjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCw2QkFBNkI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsK0NBQStDLHVCQUF1QjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3J6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ1E7QUFDTTtBQUNQO0FBQ0E7QUFDSTtBQUNBO0FBQ0Q7QUFDRztBQUNQO0FBQ0s7QUFDTDtBQUNEO0FBQ0U7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC5zY3NzP2NmMGEiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2Vycm9yLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZmlsdGVySXRlbS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZ29vZHMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL21haW4tdGVtcGxhdGUudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JhbmdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnRpbmcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc3RvcmUtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZGF0YS1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9hc3NldHMvZGF0YS9kYXRhLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IGNhcnQgZnJvbSBcIi4uL3NjcmlwdHMvY2FydFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FydFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIkNhcnRcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgICAgICBjYXJ0LmFkZFByb2R1Y3QocHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQoMSkpO1xyXG4gICAgICAgIGNhcnQuYWRkUHJvZHVjdChwcm9kdWN0cy5nZXRQcm9kdWN0QnlJZCgxKSk7XHJcbiAgICAgICAgY2FydC5hZGRQcm9kdWN0KHByb2R1Y3RzLmdldFByb2R1Y3RCeUlkKDMpKTtcclxuICAgICAgICAvL2NhcnQucmVtb3ZlUHJvZHVjdChwcm9kdWN0cy5nZXRQcm9kdWN0QnlJZCgxKSk7XHJcbiAgICAgICAgLy9jYXJ0LnJlbW92ZVByb2R1Y3QocHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQoMykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcnQpO1xyXG4gICAgICAgIC8vIGZpbHRlci5zZXRTdG9jaygnbWF4JywgNTEpO1xyXG4gICAgICAgIC8vIHByb2R1Y3RzLmFwcGx5RmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJDYXJ0XCI7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVycm9yUGFnZSgpIHtcclxuICAgIGNvbnN0IGVycm9yQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIGlmIChlcnJvckFyZWEpIHtcclxuICAgICAgICBlcnJvckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2Vycm9yX19ibG9jayc+UEFHRSBOT1QgRk9VTkQgKDQwNCk8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcclxuaW1wb3J0IEZpbHRlciBmcm9tICcuLi9zY3JpcHRzL2ZpbHRlcic7XHJcbmltcG9ydCB7IHJlbmRlckdvb2RzIH0gZnJvbSAnLi9nb29kcyc7XHJcbmltcG9ydCB7IHJlbmRlckdvb2RzUXVhbnRpdHkgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VSYW5nZSwgY2hhbmdlUHJpY2VSYW5nZSwgY2hhbmdlU3RvY2tSYW5nZSB9IGZyb20gJy4vcmFuZ2UnO1xyXG5pbXBvcnQgeyBpbnNlcnRQYXJhbSB9IGZyb20gXCIuL3JvdXRpbmdcIjtcclxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcygpIHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fY2F0ZWdvcnlfYXJlYScpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHByb2R1Y3RzLmNhdGVnb3JpZXM7XHJcbiAgICBsZXQgY2F0ZWdvcnlJbm5lciA9IGA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fY29udGFpbmVyJz5gO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGNhdGVnb3JpZXMpIHtcclxuICAgICAgICBjYXRlZ29yeUlubmVyICs9IGA8bGFiZWwgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94IGZpbHRlcl9fY2hlY2tib3hfY2F0ZWdvcnknIHZhbHVlPVwiJHtrZXl9XCIgbmFtZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnY2F0ZWdvcnknIGRhdGEtcXVhbnRpdHk9XCIke2NhdGVnb3JpZXNba2V5XS5sZW5ndGh9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X190aXRsZSc+JHtrZXl9JmVuc3A7PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X19xdWFudGl0eSBmaWx0ZXJfX3F1YW50aXR5JyBkYXRhLXBhcmFtID1cIiR7a2V5fVwiPigke2NhdGVnb3JpZXNba2V5XS5sZW5ndGh9KTwvZGl2PlxyXG4gICAgPC9sYWJlbD5gO1xyXG4gICAgfVxyXG4gICAgY2F0ZWdvcnlJbm5lciArPSBgPC9kaXY+YDtcclxuICAgIGlmIChjYXRlZ29yaWVzQXJlYSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNBcmVhLmlubmVySFRNTCA9IGNhdGVnb3J5SW5uZXI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQnJhbmRzKCkge1xyXG4gICAgY29uc3QgYnJhbmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2JyYW5kX2FyZWEnKTtcclxuICAgIGNvbnN0IGJyYW5kcyA9IHByb2R1Y3RzLmJyYW5kcztcclxuICAgIGxldCBicmFuZHNJbm5lciA9IGA8ZGl2IGNsYXNzPSdicmFuZF9fY29udGFpbmVyJz5gO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGJyYW5kcykge1xyXG4gICAgICAgIGJyYW5kc0lubmVyICs9IGA8bGFiZWwgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94IGZpbHRlcl9fY2hlY2tib3hfYnJhbmQnIHZhbHVlPVwiJHtrZXl9XCIgbmFtZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnYnJhbmQnIGRhdGEtcXVhbnRpdHk9XCIke2JyYW5kc1trZXldLmxlbmd0aH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3RpdGxlJz4ke2tleX0mZW5zcDs8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3F1YW50aXR5IGZpbHRlcl9fcXVhbnRpdHknIGRhdGEtcGFyYW0gPVwiJHtrZXl9XCI+KCR7YnJhbmRzW2tleV0ubGVuZ3RofSk8L2Rpdj5cclxuICAgIDwvbGFiZWw+YDtcclxuICAgIH1cclxuICAgIGJyYW5kc0lubmVyICs9IGA8L2Rpdj5gO1xyXG4gICAgaWYgKGJyYW5kc0FyZWEpIHtcclxuICAgICAgICBicmFuZHNBcmVhLmlubmVySFRNTCA9IGJyYW5kc0lubmVyO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0aWNrQ2hlY2tib3hlcygpIHtcclxuICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IGJyYW5kQ2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2NoZWNrYm94X2JyYW5kXCIpO1xyXG4gICAgICAgIGJyYW5kQ2hlY2tib3hzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmJyYW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PSBmaWx0ZXIuYnJhbmRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBicmFuZENoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19jaGVja2JveF9jYXRlZ29yeVwiKTtcclxuICAgICAgICBicmFuZENoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlci5jYXRlZ29yeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gZmlsdGVyLmNhdGVnb3J5W2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZEZpbHRlclBhcmFtcygpIHtcclxuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveHMuZm9yRWFjaChjaGVja2JveCA9PiB7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlRmlsdGVycyhlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcclxuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fYnV0dG9uX3Jlc2V0Jyk7XHJcbiAgICBidXR0b25SZXNldCA9PT0gbnVsbCB8fCBidXR0b25SZXNldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZpbHRlcnMpO1xyXG4gICAgY29uc3QgYnV0dG9uU2F2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2J1dHRvbl9zYXZlJyk7XHJcbiAgICBidXR0b25TYXZlID09PSBudWxsIHx8IGJ1dHRvblNhdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblNhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc2F2ZVVybCgpO1xyXG4gICAgICAgIGNoYW5nZVNhdmVCdXR0b24oKTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IGZpbHRlck51bGwgPSB7XHJcbiAgICBjYXRlZ29yeTogW10sXHJcbiAgICBicmFuZDogW10sXHJcbiAgICBwcmljZTogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG4gICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgIHN0cmluZ1NlYXJjaDogXCJcIixcclxufTtcclxubGV0IGZpbHRlciA9IHtcclxuICAgIGNhdGVnb3J5OiBbXSxcclxuICAgIGJyYW5kOiBbXSxcclxuICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG4gICAgc3RyaW5nU2VhcmNoOiBcIlwiLFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmlsdGVycyhldmVudCkge1xyXG4gICAgbGV0IHBhcmFtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhcmFtO1xyXG4gICAgbGV0IG5ld0ZpbHRlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBsZXQgc2lkZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zaWRlO1xyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtID09PSBcInByaWNlXCIgfHwgcGFyYW0gPT09IFwic3RvY2tcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lkZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2lkZSA9PT0gJ21pbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLm1pbiA9IE51bWJlcihuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5tYXggPSBOdW1iZXIobmV3RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwYXJhbSA9PT0gXCJzZWFyY2hcIikge1xyXG4gICAgICAgICAgICBmaWx0ZXIuc3RyaW5nU2VhcmNoID0gbmV3RmlsdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZCA9IGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ucHVzaChuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgcnVuRmlsdHJhdGlvbihwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW0gPT09IFwicHJpY2VcIiB8fCBwYXJhbSA9PT0gXCJzdG9ja1wiKSB7XHJcbiAgICAgICAgaW5zZXJ0UGFyYW0oYCR7cGFyYW19LSR7c2lkZX1gLCBuZXdGaWx0ZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaW5zZXJ0UGFyYW0ocGFyYW0sIG5ld0ZpbHRlcik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcnVuRmlsdHJhdGlvbihwcm9wKSB7XHJcbiAgICBsZXQgZmlsdGVyRG93bmxvYWRlZCA9IG5ldyBGaWx0ZXI7XHJcbiAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmaWx0ZXIuY2F0ZWdvcnkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zd2l0Y2hDYXRlZ29yeShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlci5icmFuZC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaEJyYW5kKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5wcmljZS5taW4gIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFByaWNlKFwibWluXCIsIGZpbHRlci5wcmljZS5taW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5wcmljZS5tYXggIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFByaWNlKFwibWF4XCIsIGZpbHRlci5wcmljZS5tYXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5zdG9jay5taW4gIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFN0b2NrKFwibWluXCIsIGZpbHRlci5zdG9jay5taW4pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5zdG9jay5tYXggIT09IG51bGwpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFN0b2NrKFwibWF4XCIsIGZpbHRlci5zdG9jay5tYXgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5zdHJpbmdTZWFyY2ggIT09IFwiXCIpIHtcclxuICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnNldFN0cmluZ1NlYXJjaChmaWx0ZXIuc3RyaW5nU2VhcmNoKTtcclxuICAgIH1cclxuICAgIHByb2R1Y3RzLmFwcGx5RmlsdGVyKGZpbHRlckRvd25sb2FkZWQpO1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xyXG4gICAgaWYgKHByb3AgPT09ICdwcmljZScpIHtcclxuICAgICAgICBjaGFuZ2VTdG9ja1JhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChwcm9wID09PSAnc3RvY2snKSB7XHJcbiAgICAgICAgY2hhbmdlUHJpY2VSYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2hhbmdlUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIHJlbmRlckdvb2RzKCk7XHJcbiAgICByZXJlbmRlckdvb2RzUXVhbnRpdHkoKTtcclxuICAgIHJlbmRlckdvb2RzUXVhbnRpdHkoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlTWFpbkZpbHRlcihmaWx0KSB7XHJcbiAgICBmaWx0ZXIgPSBmaWx0O1xyXG4gICAgcnVuRmlsdHJhdGlvbihudWxsKTtcclxufVxyXG5mdW5jdGlvbiByZXJlbmRlckdvb2RzUXVhbnRpdHkoKSB7XHJcbiAgICBjb25zdCBxdWFudGl0eUFyZWFCcmFuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnJhbmRfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZEJyYW5kcyA9IFtdO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3RzLmJyYW5kcykge1xyXG4gICAgICAgIGZpbHRlcmVkQnJhbmRzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHF1YW50aXR5QXJlYUJyYW5kcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChmaWx0ZXJlZEJyYW5kcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgKCR7cHJvZHVjdHMuYnJhbmRzW2tleV0ubGVuZ3RofSlgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMCknO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZmlsdGVyZWRDYXRlZ29yaWVzLnB1c2goa2V5KTtcclxuICAgIH1cclxuICAgIDtcclxuICAgIHF1YW50aXR5QXJlYUNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09IGl0ZW0uZGF0YXNldC5wYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCgke3Byb2R1Y3RzLmNhdGVnb3JpZXNba2V5XS5sZW5ndGh9KWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gJygwKSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xyXG4gICAgY29uc3QgY2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fY2hlY2tib3gnKTtcclxuICAgIGNoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICBmaWx0ZXIgPSBmaWx0ZXJOdWxsO1xyXG4gICAgcnVuRmlsdHJhdGlvbihudWxsKTtcclxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaCA9IFwiXCI7XHJcbn1cclxuZnVuY3Rpb24gc2F2ZVVybCgpIHtcclxuICAgIGNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlU2F2ZUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19idXR0b25fc2F2ZVwiKTtcclxuICAgIGlmICghYnV0dG9uKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlNhdmVkXCI7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTYXZlIGZpbHRlcnNcIjtcclxuICAgIH0sIDIwMDApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGaWx0ZXJzKCkge1xyXG4gICAgcmVuZGVyQ2F0ZWdvcmllcygpO1xyXG4gICAgcmVuZGVyQnJhbmRzKCk7XHJcbiAgICBhZGRGaWx0ZXJQYXJhbXMoKTtcclxuICAgIGFkZEV2ZW50cygpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcbiAgICBpZiAoZm9vdGVyQXJlYSkge1xyXG4gICAgICAgIGZvb3RlckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19pbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fdGV4dFwiPk1hZGUgYnkgPC9kaXY+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KdWxpYS15ZXNcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPiBKdWxpYSBCb2xvbmlrb3ZhICYgRHptaXRyeSBBbmlza292aWNoPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3llYXJcIj4yMDIyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zY2hvb2xcIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJmb290ZXJfX3NjaG9vbC1uYW1lXCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cInJzLXNjaG9vbFwiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL3JzTG9nby5zdmdcIiBjbGFzcz1cImZvb3Rlcl9fc2Nob29sLWltZ1wiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcclxuaW1wb3J0IHsgcmVuZGVyUHJvZHVjdFBhZ2UgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCB7IGFkZFBhdGhVcmwgfSBmcm9tICcuL3JvdXRpbmcnO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi4vc2NyaXB0cy9jYXJ0XCI7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHb29kcygpIHtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgY29uc3QgZ29vZHMgPSBwcm9kdWN0cy5wcm9kdWN0cztcclxuICAgIGxldCBnb29kc0lubmVyID0gYGA7XHJcbiAgICBpZiAoZ29vZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fZW1wdHknPiBObyBwcm9kdWN0cyBmb3VuZCA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGdvb2RzKSB7XHJcbiAgICAgICAgICAgIGxldCBnb29kID0gZ29vZHNba2V5XTtcclxuICAgICAgICAgICAgZ29vZHNJbm5lciArPSBgPGRpdiBjbGFzcz0nZ29vZHNfX2NhcmQgY2FyZCc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fdGh1bWJuYWlsJz5cclxuICAgICAgICAgIDxpbWcgYWx0PSdnb29kJyBjbGFzcz0nY2FyZF9faW1nJyBzcmM9JyR7Z29vZC50aHVtYm5haWx9Jz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2Rpc2NvbnQnPiR7Z29vZC5kaXNjb3VudFBlcmNlbnRhZ2V9JiMzNzs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aXRsZSc+JHtnb29kLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlX25ldyc+JHtnb29kLnByaWNlfSYjMzY7PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZV9vbGQnPiR7TWF0aC5mbG9vcihnb29kLnByaWNlIC8gKDEwMCAtIGdvb2QuZGlzY291bnRQZXJjZW50YWdlKSAqIDEwMCl9JiMzNjs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19ib3R0b20nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcmF0aW5nJz4ke2dvb2QucmF0aW5nfSZzdGFyZjs8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3N0b2NrJz5TdG9jayAmIzU4OyAmIzMyOyAke2dvb2Quc3RvY2t9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fYnV0dG9ucyc+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdjYXJkX19idXR0b24gY2FyZF9fYnV0dG9uX2FkZCcgZGF0YS1nb29kSUQgPSBcIiR7Z29vZC5pZH1cIj5BZGQgdG8gY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9tb3JlJyBkYXRhLWdvb2RJRCA9IFwiJHtnb29kLmlkfVwiPlNlZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGdvb2RzQXJlYSkge1xyXG4gICAgICAgIGdvb2RzQXJlYS5pbm5lckhUTUwgPSBnb29kc0lubmVyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnV0dG9uc1RvUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19idXR0b25fbW9yZScpO1xyXG4gICAgYnV0dG9uc1RvUHJvZHVjdC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGdvb2RJRCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmdvb2RpZDtcclxuICAgICAgICAgICAgYWRkUGF0aFVybChgL3Byb2R1Y3QvJHtnb29kSUR9YCk7XHJcbiAgICAgICAgICAgIHJlbmRlclByb2R1Y3RQYWdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGJ1dHRvbkNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRfX2J1dHRvbl9hZGRcIik7XHJcbiAgICBidXR0b25DYXJ0LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ29vZElEID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZ29vZGlkO1xyXG4gICAgICAgICAgICBpZiAoZ29vZElEKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlQnV0dG9uQ2FydChlLmN1cnJlbnRUYXJnZXQsIGdvb2RJRCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VCdXR0b25DYXJ0KGUsIGlkKSB7XHJcbiAgICBpZiAoKGUgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5pbm5lckhUTUwpID09IFwiQWRkIHRvIGNhcnRcIikge1xyXG4gICAgICAgIGUuaW5uZXJIVE1MID0gXCJEZWxldGUgZnJvbSBjYXJ0XCI7XHJcbiAgICAgICAgY2FydC5hZGRQcm9kdWN0KHByb2R1Y3RzLmdldFByb2R1Y3RCeUlkKE51bWJlcihpZCkpKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUuaW5uZXJIVE1MKSA9PSBcIkRlbGV0ZSBmcm9tIGNhcnRcIikge1xyXG4gICAgICAgIGUuaW5uZXJIVE1MID0gXCJBZGQgdG8gY2FydFwiO1xyXG4gICAgICAgIGNhcnQucmVtb3ZlUHJvZHVjdChwcm9kdWN0cy5nZXRQcm9kdWN0QnlJZChOdW1iZXIoaWQpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGNhcnQgZnJvbSBcIi4uL3NjcmlwdHMvY2FydFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaWYgKGhlYWRlckFyZWEpIHtcclxuICAgICAgICBoZWFkZXJBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fdGVtcGxhdGVcIj5cclxuICAgICAgPGEgaHJlZj0nLyc+PGltZyBjbGFzcz1cImhlYWRlcl9fbG9nb1wiIGFsdD1cInNob3AgbG9nb1wiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nXCI+PC9hPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19wcmljZVwiPkNhcnQgdG90YWwmIzU4OyAmIzMyOyAwPHNwYW4gY2xhc3M9XCJoZWFkZXJfX3ZhbHVlXCI8L3NwYW4+JiMzNjs8L2Rpdj5cclxuICAgICAgPGEgaHJlZj0nL2NhcnQnIGNsYXNzPVwiaGVhZGVyX19jYXJ0XCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImhlYWRlcl9fY2FydF9pbWdcIiBhbHQ9XCJjYXJ0XCIgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWcvY2FydC5wbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19jYXJ0X3F1YW50aXR5XCI+MDwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsQ2FydCgpIHtcclxuICAgIGNvbnNvbGUubG9nKGNhcnQpO1xyXG59XHJcbiIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uLCBwYXJzZVVybCB9IGZyb20gJy4vcm91dGluZyc7XHJcbmltcG9ydCB7IHJlbmRlckdvb2RzIH0gZnJvbSAnLi9nb29kcyc7XHJcbmltcG9ydCB7IHJlbmRlckZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xyXG5pbXBvcnQgeyBjaGFuZ2VSYW5nZSwgZmlsbFZhbHVlcyB9IGZyb20gXCIuL3JhbmdlXCI7XHJcbmltcG9ydCB7IGFkZExpc3RlbmVyRm9yU2VhcmNoIH0gZnJvbSAnLi9zZWFyY2gnO1xyXG5pbXBvcnQgeyBhZGRMaXN0ZW5lclNvcnRpbmdCdXR0b25zIH0gZnJvbSBcIi4vc29ydGluZ1wiO1xyXG5pbXBvcnQgeyBhZGRMaXN0ZW5lckZvclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5pbXBvcnQgeyByZW5kZXJIZWFkZXIsIGZpbGxDYXJ0IH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyByZW5kZXJGb290ZXIgfSBmcm9tIFwiLi9mb290ZXJcIjtcclxuY29uc3QgdGVtcGxhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9fcHJvamVjdFwiKTtcclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoKSB7XHJcbiAgICBpZiAodGVtcGxhdGVBcmVhKSB7XHJcbiAgICAgICAgdGVtcGxhdGVBcmVhLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSAnd3JhcHBlcl9fbWFpbic+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3MgPSAnaGVhZGVyJz5IZWFkZXJcclxuICAgICAgICA8YSBocmVmPScvJz5Mb2dvPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9Jy9jYXJ0Jz5DYXJ0PC9hPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3MgPSAnbWFpbic+TWFpblxyXG4gICAgICAgIDxhIGhyZWY9Jy9wcm9kdWN0Jz5Qcm9kdWN0PC9hPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3MgPSAnZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByb2plY3QoKSB7XHJcbiAgICByZW5kZXJUZW1wbGF0ZSgpO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxuICAgIHJlbmRlckdvb2RzKCk7XHJcbiAgICByZW5kZXJGaWx0ZXJzKCk7XHJcbiAgICBmaWxsVmFsdWVzKCk7XHJcbiAgICBjaGFuZ2VSYW5nZSgpO1xyXG4gICAgcGFyc2VVcmwoKTtcclxuICAgIGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMoKTtcclxuICAgIGFkZExpc3RlbmVyRm9yVmlldygpO1xyXG4gICAgcmVuZGVySGVhZGVyKCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxuICAgIGFkZExpc3RlbmVyRm9yU2VhcmNoKCk7XHJcbiAgICBmaWxsQ2FydCgpO1xyXG59XHJcbmluaXRQcm9qZWN0KCk7XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5sZXQgY29udGVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RQYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKTtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9ICt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RJZCk7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKTtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyQ3J1bWJzKHByb2R1Y3QpO1xyXG4gICAgICAgIHJlbmRlclByb2R1Y3QocHJvZHVjdCk7XHJcbiAgICAgICAgcmVuZGVyUHVyY2hhc2UocHJvZHVjdCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQ3J1bWJzKHByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGNydW1ic0Jsb2NrID0gY3JlYXRlTm9kZSgnY3J1bWJzJyk7XHJcbiAgICBjb25zdCBzdG9yZUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBcIlN0b3JlXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnlDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgcHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LmNhdGVnb3J5KTtcclxuICAgIGNvbnN0IGJyYW5kQ3J1bWIgPSBjcmVhdGVOb2RlKCdjcnVtYicsIHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5icmFuZCk7XHJcbiAgICBjb25zdCB0aXRsZUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QudGl0bGUpO1xyXG4gICAgY3J1bWJzQmxvY2suYXBwZW5kKHN0b3JlQ3J1bWIsIGNhdGVnb3J5Q3J1bWIsIGJyYW5kQ3J1bWIsIHRpdGxlQ3J1bWIpO1xyXG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChjcnVtYnNCbG9jayk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdChwcm9kdWN0KSB7XHJcbiAgICBjb25zdCBwcm9kdWN0QmxvY2sgPSBjcmVhdGVOb2RlKCdwcm9kdWN0Jyk7XHJcbiAgICBjb25zdCBwaG90b3NCbG9jayA9IGNyZWF0ZU5vZGUoJ3Bob3RvcycpO1xyXG4gICAgY29uc3QgbWFpblBob3RvQmxvY2sgPSBjcmVhdGVOb2RlKCdwaG90b3NfX21haW4nKTtcclxuICAgIGNvbnN0IG1haW5QaG90byA9IGNyZWF0ZU5vZGUoJ21haW4tcGhvdG8nKTtcclxuICAgIGNvbnN0IG1haW5QaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbWFpblBob3RvSW1nLmNsYXNzTmFtZSA9ICdtYWluLXBob3RvX19pbWcnO1xyXG4gICAgbWFpblBob3RvSW1nLnNyYyA9IHByb2R1Y3QudGh1bWJuYWlsO1xyXG4gICAgbWFpblBob3RvLmFwcGVuZChtYWluUGhvdG9JbWcpO1xyXG4gICAgbWFpblBob3RvQmxvY2suYXBwZW5kKG1haW5QaG90byk7XHJcbiAgICBjb25zdCBzbWFsbFBob3Rvc0Jsb2NrID0gY3JlYXRlTm9kZSgnc21hbGwtcGhvdG9zJyk7XHJcbiAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHByb2R1Y3QuaW1hZ2VzKSB7XHJcbiAgICAgICAgaWYgKGltYWdlID09PSBwcm9kdWN0LnRodW1ibmFpbClcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgY29uc3Qgc21hbGxQaG90byA9IGNyZWF0ZU5vZGUoJ3NtYWxsLXBob3RvJyk7XHJcbiAgICAgICAgY29uc3Qgc21hbGxQaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIHNtYWxsUGhvdG9JbWcuc3JjID0gaW1hZ2U7XHJcbiAgICAgICAgc21hbGxQaG90by5hcHBlbmQoc21hbGxQaG90b0ltZyk7XHJcbiAgICAgICAgc21hbGxQaG90b3NCbG9jay5hcHBlbmQoc21hbGxQaG90byk7XHJcbiAgICB9XHJcbiAgICBwaG90b3NCbG9jay5hcHBlbmQobWFpblBob3RvQmxvY2ssIHNtYWxsUGhvdG9zQmxvY2spO1xyXG4gICAgY29uc3QgcHJvZHVjdERhdGFCbG9jayA9IGNyZWF0ZU5vZGUoJ2RhdGEnKTtcclxuICAgIGNvbnN0IHByb2R1Y3RUaXRsZSA9IGNyZWF0ZU5vZGUoJ2RhdGFfX3RpdGxlJywgcHJvZHVjdC50aXRsZSk7XHJcbiAgICBjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSBjcmVhdGVOb2RlKCdkYXRhX19kZXNjcmlwdGlvbicsIHByb2R1Y3QuZGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgcHJvZHVjdEJyYW5kID0gY3JlYXRlTm9kZSgnZGF0YV9fYnJhbmQnLCBwcm9kdWN0LmJyYW5kKTtcclxuICAgIGNvbnN0IHByb2R1Y3RDYXRlZ29yeSA9IGNyZWF0ZU5vZGUoJ2RhdGFfX2NhdGVnb3J5JywgcHJvZHVjdC5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBwcm9kdWN0U3RhdHMgPSBjcmVhdGVOb2RlKCdzdGF0cycpO1xyXG4gICAgY29uc3QgcHJvZHVjdFJhdGluZyA9IGNyZWF0ZU5vZGUoJ2RhdGFfX3JhdGluZycsICdSYXRpbmc6ICcgKyBwcm9kdWN0LnJhdGluZyk7XHJcbiAgICBjb25zdCBwcm9kdWN0U3RvY2sgPSBjcmVhdGVOb2RlKCdkYXRhX19zdG9jaycsICdTdG9jazogJyArIHByb2R1Y3Quc3RvY2spO1xyXG4gICAgcHJvZHVjdFN0YXRzLmFwcGVuZChwcm9kdWN0UmF0aW5nLCBwcm9kdWN0U3RvY2spO1xyXG4gICAgcHJvZHVjdERhdGFCbG9jay5hcHBlbmQocHJvZHVjdFRpdGxlLCBwcm9kdWN0RGVzY3JpcHRpb24sIHByb2R1Y3RCcmFuZCwgcHJvZHVjdENhdGVnb3J5LCBwcm9kdWN0U3RhdHMpO1xyXG4gICAgcHJvZHVjdEJsb2NrLmFwcGVuZChwaG90b3NCbG9jaywgcHJvZHVjdERhdGFCbG9jayk7XHJcbiAgICBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuYXBwZW5kKHByb2R1Y3RCbG9jayk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUHVyY2hhc2UocHJvZHVjdCkge1xyXG4gICAgY29uc3QgcHVyY2hhc2VCbG9jayA9IGNyZWF0ZU5vZGUoJ3B1cmNoYXNlJyk7XHJcbiAgICBjb25zdCBwcmljZUJsb2NrID0gY3JlYXRlTm9kZSgncHJpY2UnKTtcclxuICAgIGNvbnN0IGRpc2NvdW50ID0gY3JlYXRlTm9kZSgncHJpY2VfX2Rpc2NvdW50JywgYERpc2NvdW50OiBcXG4ke3Byb2R1Y3QuZGlzY291bnRQZXJjZW50YWdlfWApO1xyXG4gICAgY29uc3QgcHJpY2UgPSBjcmVhdGVOb2RlKCdwcmljZV9fYW1vdW50JywgYFByaWNlOiBcXG4ke3Byb2R1Y3QucHJpY2V9YCk7XHJcbiAgICBwcmljZUJsb2NrLmFwcGVuZChkaXNjb3VudCwgcHJpY2UpO1xyXG4gICAgY29uc3QgYnV0dG9uc0Jsb2NrID0gY3JlYXRlTm9kZSgnYnV0dG9ucycpO1xyXG4gICAgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25BZGQuY2xhc3NOYW1lID0gJ2J1dHRvbiBidXR0b25fX2FkZCc7XHJcbiAgICBidXR0b25BZGQudGV4dENvbnRlbnQgPSAnQWRkIHRvIENhcnQnO1xyXG4gICAgY29uc3QgYnV0dG9uQnV5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25CdXkuY2xhc3NOYW1lID0gJ2J1dHRvbiBidXR0b25fX2J1eSc7XHJcbiAgICBidXR0b25CdXkudGV4dENvbnRlbnQgPSAnQnV5IE5vdyc7XHJcbiAgICBidXR0b25zQmxvY2suYXBwZW5kKGJ1dHRvbkFkZCwgYnV0dG9uQnV5KTtcclxuICAgIHB1cmNoYXNlQmxvY2suYXBwZW5kKHByaWNlQmxvY2ssIGJ1dHRvbnNCbG9jayk7XHJcbiAgICBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuYXBwZW5kKHB1cmNoYXNlQmxvY2spO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU5vZGUoY2xhc3NOYW1lLCB0ZXh0Q29udGVudCkge1xyXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAodGV4dENvbnRlbnQpXHJcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XHJcbmltcG9ydCB7IGNoYW5nZUZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xyXG5sZXQgcHJpY2VNaW4gPSAwO1xyXG5sZXQgcHJpY2VNYXggPSAwO1xyXG5sZXQgc3RvY2tNaW4gPSAwO1xyXG5sZXQgc3RvY2tNYXggPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFZhbHVlcygpIHtcclxuICAgIGxldCBwcm8gPSBwcm9kdWN0cy5nZXRQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuICAgIHByby5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xyXG4gICAgICAgIHJldHVybiBlbDEucHJpY2UgLSBlbDIucHJpY2U7XHJcbiAgICB9KTtcclxuICAgIHByaWNlTWF4ID0gcHJvW3Byby5sZW5ndGggLSAxXS5wcmljZTtcclxuICAgIHByaWNlTWluID0gcHJvWzBdLnByaWNlO1xyXG4gICAgcHJvLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsMS5zdG9jayAtIGVsMi5zdG9jaztcclxuICAgIH0pO1xyXG4gICAgc3RvY2tNaW4gPSBwcm9bMF0uc3RvY2s7XHJcbiAgICBzdG9ja01heCA9IHByb1twcm8ubGVuZ3RoIC0gMV0uc3RvY2s7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUmFuZ2UocHJvcCwgbWluVmFsdWUsIG1heFZhbHVlKSB7XHJcbiAgICBsZXQgbWluID0gMDtcclxuICAgIGxldCBtYXggPSAwO1xyXG4gICAgaWYgKHByb3AgPT0gXCJwcmljZVwiKSB7XHJcbiAgICAgICAgbWluID0gcHJpY2VNaW47XHJcbiAgICAgICAgbWF4ID0gcHJpY2VNYXg7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBtaW4gPSBzdG9ja01pbjtcclxuICAgICAgICBtYXggPSBzdG9ja01heDtcclxuICAgIH1cclxuICAgIGlmIChtaW5WYWx1ZSA9PSAtMSB8fCBtYXhWYWx1ZSA9PSAtMSkge1xyXG4gICAgICAgIG1pblZhbHVlID0gbWluO1xyXG4gICAgICAgIG1heFZhbHVlID0gbWF4O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmFuZ2VQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5maWx0ZXJfX3JhbmdlXyR7cHJvcH1gKTtcclxuICAgIGlmIChyYW5nZVBsYWNlKSB7XHJcbiAgICAgICAgbGV0IHJhbmdlSW5uZXIgPSBgPGRpdiBjbGFzcz1cInJhbmdlX19jb250YWluZXIgcmFuZ2VcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJhbmdlX19jb250cm9sX3NsaWRlcnNcIj5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwicmFuZ2VfX2lucHV0IHJhbmdlX19pbnB1dF8ke3Byb3B9IHJhbmdlX19pbnB1dF9taW5cIiBpZD1cImZyb21TbGlkZXIke3Byb3B9XCIgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIke21pblZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4fVwiIGRhdGEtcGFyYW09XCIke3Byb3B9XCIgZGF0YS1zaWRlID1cIm1pblwiLz5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzcyA9IFwicmFuZ2VfX2lucHV0IHJhbmdlX19pbnB1dF8ke3Byb3B9IHJhbmdlX19pbnB1dF9tYXhcIiBpZD1cInRvU2xpZGVyJHtwcm9wfVwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiJHttYXhWYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9XCIke21heH1cIiBkYXRhLXBhcmFtPVwiJHtwcm9wfVwiIGRhdGEtc2lkZSA9XCJtYXhcIi8+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmFuZ2VJbm5lciArPSBgPGRpdiBjbGFzcz1cInJhbmdlX19jb250cm9sX2Zvcm1cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmFuZ2VfX2lucHV0X251bWJlciByYW5nZV9fJHtwcm9wfVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cImZyb21JbnB1dCR7cHJvcH1cIiB2YWx1ZT1cIiR7bWluVmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PSR7bWF4fS8+JiMzNjtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fY29udHJvbF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyIHJhbmdlX18ke3Byb3B9XCIgdHlwZT1cIm51bWJlclwiIGlkPVwidG9JbnB1dCR7cHJvcH1cIiB2YWx1ZT1cIiR7bWF4VmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PSR7bWF4fS8+JiMzNjtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmFuZ2VJbm5lciArPSBgPGRpdiBjbGFzcz1cInJhbmdlX19lbXB0eVwiPk5vIHByb2R1Y3RzIGZvdW5kPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmFuZ2VJbm5lciArPSBgPC9kaXY+YDtcclxuICAgICAgICByYW5nZVBsYWNlLmlubmVySFRNTCA9IHJhbmdlSW5uZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9faW5wdXQnKTtcclxuICAgIHJhbmdlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlRmlsdGVycyhlKTtcclxuICAgICAgICAgICAgY2hhbmdlUmFuZ2VWYWx1ZShwcm9wKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVJhbmdlVmFsdWUocHJvcCkge1xyXG4gICAgY29uc3QgcmFuZ2VWYWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucmFuZ2VfXyR7cHJvcH1gKTtcclxuICAgIGNvbnN0IHJhbmdlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnJhbmdlX19pbnB1dF8ke3Byb3B9YCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmdlVmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmFuZ2VWYWx1ZXNbMF0udmFsdWUgPSByYW5nZUlucHV0c1swXS52YWx1ZTtcclxuICAgICAgICByYW5nZVZhbHVlc1sxXS52YWx1ZSA9IHJhbmdlSW5wdXRzWzFdLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmljZVJhbmdlKCkge1xyXG4gICAgcmVuZGVyUmFuZ2UoXCJwcmljZVwiLCBwcm9kdWN0cy5wcmljZVJhbmdlLm1pbiwgcHJvZHVjdHMucHJpY2VSYW5nZS5tYXgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VTdG9ja1JhbmdlKCkge1xyXG4gICAgcmVuZGVyUmFuZ2UoXCJzdG9ja1wiLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1pbiwgcHJvZHVjdHMuc3RvY2tSYW5nZS5tYXgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSYW5nZSgpIHtcclxuICAgIGNoYW5nZVByaWNlUmFuZ2UoKTtcclxuICAgIGNoYW5nZVN0b2NrUmFuZ2UoKTtcclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHJlbmRlckVycm9yUGFnZSB9IGZyb20gJy4vZXJyb3ItcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlckNhcnRQYWdlIH0gZnJvbSAnLi9jYXJ0LXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9kdWN0UGFnZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyU3RvcmVQYWdlIH0gZnJvbSAnLi9zdG9yZS1wYWdlJztcclxuaW1wb3J0IHsgY2hhbmdlTWFpbkZpbHRlciwgdGlja0NoZWNrYm94ZXMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xyXG5pbXBvcnQgeyBtYWtlU29ydGluZyB9IGZyb20gJy4vc29ydGluZyc7XHJcbmltcG9ydCB7IGFwcGx5VmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuaW1wb3J0IHsgZmlsbElucHV0IH0gZnJvbSBcIi4vc2VhcmNoXCI7XHJcbmNvbnN0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuICAgICcnOiByZW5kZXJTdG9yZVBhZ2UsXHJcbiAgICAncHJvZHVjdCc6IHJlbmRlclByb2R1Y3RQYWdlLFxyXG4gICAgJ2NhcnQnOiByZW5kZXJDYXJ0UGFnZSxcclxuICAgICdlcnJvcic6IHJlbmRlckVycm9yUGFnZSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMV07XHJcbiAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1twYXRoXSB8fCByb3V0ZXMuZXJyb3I7XHJcbiAgICByb3V0ZSgpO1xyXG59KTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBhdGhVcmwocHJvcCkge1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwcm9wKTtcclxuICAgIGhhbmRsZUxvY2F0aW9uKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsKCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkuc3BsaXQoJyYnKTtcclxuICAgICAgICBsZXQgZmlsdGVyID0ge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogW10sXHJcbiAgICAgICAgICAgIGJyYW5kOiBbXSxcclxuICAgICAgICAgICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgICAgICAgICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgICAgICAgICAgc3RyaW5nU2VhcmNoOiBcIlwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHZpZXcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzb3J0ID0gXCJcIjtcclxuICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJjYXRlZ29yeVwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuY2F0ZWdvcnkgPSBhcnJbMV0uc3BsaXQoJyonKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIGxldCBhcnJSZXN1bHQgPSBhcnJbMV0uc3BsaXQoJyonKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhcnJSZXN1bHQubWFwKGl0ZW0gPT4gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5icmFuZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInByaWNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJbMF0uaW5jbHVkZXMoXCJtaW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucHJpY2UubWluID0gTnVtYmVyKGFyclsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIucHJpY2UubWF4ID0gTnVtYmVyKGFyclsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJzdG9ja1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzBdLmluY2x1ZGVzKFwibWluXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnN0b2NrLm1pbiA9IE51bWJlcihhcnJbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyLnN0b2NrLm1heCA9IE51bWJlcihhcnJbMV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwidmlld1wiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0gYXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwic29ydFwiKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBzb3J0ID0gYXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwic2VhcmNoXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5zdHJpbmdTZWFyY2ggPSBhcnJbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBjaGFuZ2VNYWluRmlsdGVyKGZpbHRlcik7XHJcbiAgICAgICAgZmlsbElucHV0KGZpbHRlci5zdHJpbmdTZWFyY2gpO1xyXG4gICAgICAgIG1ha2VTb3J0aW5nKHNvcnQpO1xyXG4gICAgICAgIGFwcGx5Vmlldyh2aWV3KTtcclxuICAgICAgICB0aWNrQ2hlY2tib3hlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydFBhcmFtKGtleSwgdmFsdWUpIHtcclxuICAgIGlmIChrZXkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAga2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XHJcbiAgICB9XHJcbiAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICBsZXQga3ZwID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBmb3IgKDsgaSA8IGt2cC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChrdnBbaV0uc3RhcnRzV2l0aChrZXkgKyAnPScpKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWlyID0ga3ZwW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IFwic2VhcmNoXCIgfHwgcGFpclswXSA9PSBcInNvcnRcIiB8fCBwYWlyWzBdID09IFwidmlld1wiIHx8IHBhaXJbMF0gPT0gXCJwcmljZS1taW5cIiB8fCBwYWlyWzBdID09IFwicHJpY2UtbWF4XCIgfHwgcGFpclswXSA9PSBcInN0b2NrLW1pblwiIHx8IHBhaXJbMF0gPT0gXCJzdG9jay1tYXhcIikge1xyXG4gICAgICAgICAgICAgICAgcGFpclsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhaXJbMV0uaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlQXJyID0gcGFpclsxXS5zcGxpdChcIipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVBcnJbaV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYWlyWzFdID0gdmFsdWVBcnIuam9pbignKicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpclsxXSA9IHBhaXJbMV0gKyBgKiR7dmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrdnBbaV0gPSBwYWlyLmpvaW4oJz0nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGkgPj0ga3ZwLmxlbmd0aCkge1xyXG4gICAgICAgIGt2cFtrdnAubGVuZ3RoXSA9IFtrZXksIHZhbHVlXS5qb2luKCc9Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID09IFwiXCIpIHtcclxuICAgICAgICBrdnAuc2hpZnQoKTtcclxuICAgIH1cclxuICAgIGxldCBwYXJhbXMgPSBrdnAuam9pbignJicpO1xyXG4gICAgbGV0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXM7XHJcbiAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybCk7XHJcbn1cclxuLy8gY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdF9faXRlbVwiKTtcclxuLy8gYnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbi8vICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbi8vICAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSAoZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWY7XHJcbi8vICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgfSlcclxuLy8gfSlcclxud2luZG93Lm9ucG9wc3RhdGUgPSBoYW5kbGVMb2NhdGlvbjtcclxuIiwiaW1wb3J0IHsgY2hhbmdlRmlsdGVycyB9IGZyb20gXCIuL2ZpbHRlckl0ZW1cIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyRm9yU2VhcmNoKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xyXG4gICAgc2VhcmNoSW5wdXQgPT09IG51bGwgfHwgc2VhcmNoSW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBjaGFuZ2VGaWx0ZXJzKGUpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxJbnB1dChwcm9wKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIjExMVwiLCBwcm9wKTtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hfX2lucHV0XCIpO1xyXG4gICAgaWYgKHNlYXJjaElucHV0KVxyXG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gcHJvcDtcclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tIFwiLi9nb29kc1wiO1xyXG5pbXBvcnQgeyBpbnNlcnRQYXJhbSB9IGZyb20gJy4vcm91dGluZyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lclNvcnRpbmdCdXR0b25zKCkge1xyXG4gICAgY29uc3QgYnV0dG9uU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0ZXJzX19idXR0b24nKTtcclxuICAgIGJ1dHRvblNvcnQuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHNvcnRHb29kcyhlKTtcclxuICAgICAgICAgICAgY2hhbmdlQWN0aXZlQnV0dG9uKGUpO1xyXG4gICAgICAgICAgICBpbnNlcnRQYXJhbShcInNvcnRcIiwgYCR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub3B0aW9ufS0ke2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbn1gKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbihldmVudCkge1xyXG4gICAgY29uc3QgYnV0dG9uU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0ZXJzX19idXR0b24nKTtcclxuICAgIGJ1dHRvblNvcnQuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic29ydGVyc19fYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG4gICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwic29ydGVyc19fYnV0dG9uX2FjdGl2ZVwiKTtcclxufVxyXG5mdW5jdGlvbiBzb3J0R29vZHMoZXZlbnQsIG9wdCwgZGlyKSB7XHJcbiAgICBsZXQgb3B0aW9uID0gZXZlbnQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub3B0aW9uIDogb3B0O1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGV2ZW50ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiA6IGRpcjtcclxuICAgIGlmIChvcHRpb24gPT0gXCJwcmljZVwiKSB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1pblwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwyLnByaWNlIC0gZWwxLnByaWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1heFwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwxLnByaWNlIC0gZWwyLnByaWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWluXCIpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDIucmF0aW5nIC0gZWwxLnJhdGluZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtYXhcIikge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsMS5yYXRpbmcgLSBlbDIucmF0aW5nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJHb29kcygpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU29ydGluZyhwcm9wKSB7XHJcbiAgICBsZXQgYXJyID0gcHJvcC5zcGxpdCgnLScpO1xyXG4gICAgc29ydEdvb2RzKHVuZGVmaW5lZCwgYXJyWzBdLCBhcnJbMV0pO1xyXG4gICAgY29uc3QgYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtb3B0aW9uPVwiJHthcnJbMF19XCJdW2RhdGEtZGlyZWN0aW9uPVwiJHthcnJbMV19XCJdYCk7XHJcbiAgICBhY3RpdmVCdXR0b24gPT09IG51bGwgfHwgYWN0aXZlQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZChcInNvcnRlcnNfX2J1dHRvbl9hY3RpdmVcIik7XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9zY3JpcHRzL2RhdGEtcGFyc2VyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdG9yZVBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzcz0nc3RvcmVfX3BhZ2Ugc3RvcmUnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3N0b3JlX19zZWFyY2ggc2VhcmNoJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J3NlYXJjaF9fYmxvY2snPlxyXG4gICAgICAgICAgICA8aW1nIGFsdD0nc2VhcmNoJyBjbGFzcz0nc2VhcmNoX19pbWcnIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvc2VhcmNoMy5wbmcnPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nc2VhcmNoJyBjbGFzcz0nc2VhcmNoX19pbnB1dCcgcGxhY2Vob2xkZXIgPSdTZWFyY2ggcHJvZHVjdCcgZGF0YS1wYXJhbSA9ICdzZWFyY2gnPjwvaW5wdXQ+IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX21haW4nPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzPSdzdG9yZV9fZmlsdGVycyBmaWx0ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19jYXRlZ29yeSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+Q2F0ZWdvcnk8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19jYXRlZ29yeV9hcmVhJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2JyYW5kJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5CcmFuZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2JyYW5kX2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fcHJpY2UnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlByaWNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYXJlYV9yYW5nZSBmaWx0ZXJfX3JhbmdlX3ByaWNlJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX3N0b2NrJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2FyZWFfcmFuZ2UgZmlsdGVyX19yYW5nZV9zdG9jayc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19idXR0b25zJz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdmaWx0ZXJfX2J1dHRvbiBmaWx0ZXJfX2J1dHRvbl9yZXNldCBidXR0b24nPlJlc2V0IGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdmaWx0ZXJfX2J1dHRvbiBmaWx0ZXJfX2J1dHRvbl9zYXZlIGJ1dHRvbic+U2F2ZSBmaWx0ZXJzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdzdG9yZV9fZ29vZHMgZ29vZHMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fb3B0aW9ucyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX3NvcnRlcnMgc29ydGVycyc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3ByaWNlIHNvcnRlcnNfX3ByaWNlX2xvdycgZGF0YS1vcHRpb24gPSBcInByaWNlXCIgZGF0YS1kaXJlY3Rpb249XCJtaW5cIj5wcmljZSAmIzg1OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3ByaWNlIHNvcnRlcnNfX3ByaWNlX2hpZ2gnIGRhdGEtb3B0aW9uID0gXCJwcmljZVwiIGRhdGEtZGlyZWN0aW9uPVwibWF4XCI+cHJpY2UgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19yYXRpbmcgc29ydGVyc19fcmF0aW5nX2xvdycgZGF0YS1vcHRpb24gPSBcInJhdGluZ1wiIGRhdGEtZGlyZWN0aW9uPVwibWluXCI+cmF0aW5nICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcmF0aW5nIHNvcnRlcnNfX3JhdGluZ19oaWdoJyBkYXRhLW9wdGlvbiA9IFwicmF0aW5nXCIgZGF0YS1kaXJlY3Rpb249XCJtYXhcIj5yYXRpbmcgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz0nZ29vZHNfX3RpdGxlJz5Gb3VuZDogPHNwYW4gY2xhc3M9J2dvb2RzX19xdWFudGl0eSc+JHtwcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGh9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX3ZpZXcgdmlldyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24nPjxpbWcgYWx0PSdncmlkJyBjbGFzcz0ndmlld19fYnV0dG9uX2ltZyB2aWV3X19idXR0b25fbWFueScgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy8wMDMtZ3JpZC0xLnBuZycgZGF0YS12aWV3ID0gXCJtYW55XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24nPjxpbWcgYWx0PSdncmlkJyBjbGFzcz0ndmlld19fYnV0dG9uX2FjdGl2ZSB2aWV3X19idXR0b25faW1nIHZpZXdfX2J1dHRvbl9mZXcnIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvMDA0LW1lbnUtMS5wbmcnIGRhdGEtdmlldyA9IFwiZmV3XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fYXJlYSc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHb29kc1F1YW50aXR5KCkge1xyXG4gICAgY29uc3QgZ29vZHNxdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fcXVhbnRpdHknKTtcclxuICAgIGlmIChnb29kc3F1YW50aXR5KSB7XHJcbiAgICAgICAgZ29vZHNxdWFudGl0eS5pbm5lckhUTUwgPSBgJHtwcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGh9YDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpbnNlcnRQYXJhbSB9IGZyb20gXCIuL3JvdXRpbmdcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyRm9yVmlldygpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXdfX2J1dHRvbl9pbWcnKTtcclxuICAgIGJ1dHRvbnNWaWV3LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlVmlldyhldmVudCk7XHJcbiAgICAgICAgICAgIGluc2VydFBhcmFtKFwidmlld1wiLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmlldyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VWaWV3KGV2KSB7XHJcbiAgICBjb25zdCBidXR0b25zVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWV3X19idXR0b25faW1nJyk7XHJcbiAgICBidXR0b25zVmlldy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGFjdGl2ZUJ1dHRvbiA9IGV2LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgndmlld19fYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XHJcbiAgICBnb29kc0FyZWEgPT09IG51bGwgfHwgZ29vZHNBcmVhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnb29kc0FyZWEuY2xhc3NMaXN0LnRvZ2dsZSgnZ29vZHNfX2FyZWFfbWFueScpO1xyXG4gICAgY29uc3QgZ29vZHNCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2J1dHRvbicpO1xyXG4gICAgZ29vZHNCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZF9fYnV0dG9uX3NtYWxsJyk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWaWV3KHByb3ApIHtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgY29uc3QgYnV0dG9uTWFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlld19fYnV0dG9uX21hbnlcIik7XHJcbiAgICBjb25zdCBidXR0b25GZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdfX2J1dHRvbl9mZXdcIik7XHJcbiAgICBpZiAocHJvcCA9PSBcIm1hbnlcIikge1xyXG4gICAgICAgIGdvb2RzQXJlYSA9PT0gbnVsbCB8fCBnb29kc0FyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdvb2RzQXJlYS5jbGFzc0xpc3QuYWRkKCdnb29kc19fYXJlYV9tYW55Jyk7XHJcbiAgICAgICAgYnV0dG9uRmV3ID09PSBudWxsIHx8IGJ1dHRvbkZldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uRmV3LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aWV3X19idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgICAgIGJ1dHRvbk1hbnkgPT09IG51bGwgfHwgYnV0dG9uTWFueSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uTWFueS5jbGFzc0xpc3QuYWRkKFwidmlld19fYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgIH1cclxufVxyXG4iLCJjbGFzcyBDYXJ0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcclxuICAgIH1cclxuICAgIGFkZFByb2R1Y3QocHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuX2dldENhcnRQcm9kdWN0SWQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0c1twcm9kdWN0SWRdLmFtb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcnRQcm9kdWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgICAgIGlkOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goY2FydFByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbW92ZVByb2R1Y3QocHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuX2dldENhcnRQcm9kdWN0SWQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbcHJvZHVjdElkXS5hbW91bnQgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNbcHJvZHVjdElkXS5hbW91bnQtLTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShwcm9kdWN0SWQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2dldENhcnRQcm9kdWN0SWQocHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbaV0uaWQgPT09IHByb2R1Y3QuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xyXG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xyXG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XHJcbmNsYXNzIFByb2R1Y3RzIHtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhKTtcclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RzKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYnJhbmQ6IGVsLmJyYW5kLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGVsLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGVsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZGlzY291bnRQZXJjZW50YWdlOiBlbC5kaXNjb3VudFBlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgICBpZDogZWwuaWQsXHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IGVsLmltYWdlcyxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBlbC5wcmljZSxcclxuICAgICAgICAgICAgICAgIHJhdGluZzogZWwucmF0aW5nLFxyXG4gICAgICAgICAgICAgICAgc3RvY2s6IGVsLnN0b2NrLFxyXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBlbC50aHVtYm5haWwsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZWwudGl0bGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0c01ldGFkYXRhKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLnByb2R1Y3RzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaWNlUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnByaWNlUmFuZ2UubWluID4gcHJvZHVjdC5wcmljZSlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5taW4gPSBwcm9kdWN0LnByaWNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmljZVJhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5wcmljZVJhbmdlLm1heCA8IHByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWF4ID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvY2tSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMuc3RvY2tSYW5nZS5taW4gPiBwcm9kdWN0LnN0b2NrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9ja1JhbmdlLm1pbiA9IHByb2R1Y3Quc3RvY2s7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b2NrUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnN0b2NrUmFuZ2UubWF4IDwgcHJvZHVjdC5zdG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvY2tSYW5nZS5tYXggPSBwcm9kdWN0LnN0b2NrO1xyXG4gICAgICAgICAgICBpZiAoIShwcm9kdWN0LmJyYW5kIGluIHRoaXMuYnJhbmRzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0gPSBbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5icmFuZHNbcHJvZHVjdC5icmFuZF0ucHVzaChwcm9kdWN0KTtcclxuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5jYXRlZ29yeSBpbiB0aGlzLmNhdGVnb3JpZXMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXNbcHJvZHVjdC5jYXRlZ29yeV0gPSBbcHJvZHVjdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3Byb2R1Y3QuY2F0ZWdvcnldLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdEJ5SWQoaWQpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5wcm9kdWN0cykge1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWFyY2hQcm9kdWN0c0J5U3RyaW5nKGlucHV0VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBub25JbmZvcm1hdGl2ZUtleXMgPSBbJ2lkJywgJ3RodW1ibmFpbCcsICdpbWFnZXMnXTtcclxuICAgICAgICBmb3IgKGxldCBpbmQgPSAwOyBpbmQgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHRoaXMucHJvZHVjdHNbaW5kXTtcclxuICAgICAgICAgICAgbGV0IGlzVmFsdWVGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvZHVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChub25JbmZvcm1hdGl2ZUtleXMuaW5jbHVkZXMoa2V5KSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvZHVjdCwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsdWVGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc1ZhbHVlRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZCwgMSk7XHJcbiAgICAgICAgICAgICAgICBpbmQtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcGx5RmlsdGVyKGZpbHRlcikge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmdldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgICAgIHRoaXMuYnJhbmRzID0ge307XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge307XHJcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdG9ja1JhbmdlID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgbm9uSW5mb3JtYXRpdmVLZXlzID0gWydpZCcsICd0aHVtYm5haWwnLCAnaW1hZ2VzJ107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGluZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5wcm9kdWN0c1tpbmRdO1xyXG4gICAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgICAgIGluZC0tO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyLmNhdGVnb3J5LmluY2x1ZGVzKGVsLmNhdGVnb3J5KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKGZpbHRlci5icmFuZC5pbmNsdWRlcyhlbC5icmFuZCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIucHJpY2UubWluICE9PSAtMSAmJiBlbC5wcmljZSA8IGZpbHRlci5wcmljZS5taW4pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIucHJpY2UubWF4ICE9PSAtMSAmJiBlbC5wcmljZSA+IGZpbHRlci5wcmljZS5tYXgpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RvY2subWluICE9PSAtMSAmJiBlbC5zdG9jayA8IGZpbHRlci5zdG9jay5taW4pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RvY2subWF4ICE9PSAtMSAmJiBlbC5zdG9jayA+IGZpbHRlci5zdG9jay5tYXgpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RyaW5nU2VhcmNoLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzVmFsdWVGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGVsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vbkluZm9ybWF0aXZlS2V5cy5pbmNsdWRlcyhrZXkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIuc3RyaW5nU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsdWVGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghaXNWYWx1ZUZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBwcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdHM7XHJcbiIsImNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gW107XHJcbiAgICAgICAgdGhpcy5icmFuZCA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdHJpbmdTZWFyY2ggPSAnJztcclxuICAgIH1cclxuICAgIHN3aXRjaENhdGVnb3J5KGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeS5pbmNsdWRlcyhpdGVtKSlcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHN3aXRjaEJyYW5kKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5icmFuZC5pbmNsdWRlcyhpdGVtKSlcclxuICAgICAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYnJhbmQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHNldFByaWNlKHBhcmFtZXRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAocGFyYW1ldGVyID09PSAnbWluJylcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5taW4gPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucHJpY2UubWF4ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXRTdG9jayhwYXJhbWV0ZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlciA9PT0gJ21pbicpXHJcbiAgICAgICAgICAgIHRoaXMuc3RvY2subWluID0gdmFsdWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0b2NrLm1heCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0U3RyaW5nU2VhcmNoKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLnN0cmluZ1NlYXJjaCA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gIFwicHJvZHVjdHNcIjogW1xuICB7XG4gIFwiaWRcIjogMSxcbiAgXCJ0aXRsZVwiOiBcImlQaG9uZSA5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbiBhcHBsZSBtb2JpbGUgd2hpY2ggaXMgbm90aGluZyBsaWtlIGFwcGxlXCIsXG4gIFwicHJpY2VcIjogNTQ5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi45NixcbiAgXCJyYXRpbmdcIjogNC42OSxcbiAgXCJzdG9ja1wiOiA5NCxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIsXG4gIFwidGl0bGVcIjogXCJpUGhvbmUgWFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU0lNLUZyZWUsIE1vZGVsIEExOTIxMSA2LjUtaW5jaCBTdXBlciBSZXRpbmEgSEQgZGlzcGxheSB3aXRoIE9MRUQgdGVjaG5vbG9neSBBMTIgQmlvbmljIGNoaXAgd2l0aCAuLi5cIixcbiAgXCJwcmljZVwiOiA4OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljk0LFxuICBcInJhdGluZ1wiOiA0LjQ0LFxuICBcInN0b2NrXCI6IDM0LFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMyxcbiAgXCJ0aXRsZVwiOiBcIlNhbXN1bmcgVW5pdmVyc2UgOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2Ftc3VuZ1xcJ3MgbmV3IHZhcmlhbnQgd2hpY2ggZ29lcyBiZXlvbmQgR2FsYXh5IHRvIHRoZSBVbml2ZXJzZVwiLFxuICBcInByaWNlXCI6IDEyNDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjQ2LFxuICBcInJhdGluZ1wiOiA0LjA5LFxuICBcInN0b2NrXCI6IDM2LFxuICBcImJyYW5kXCI6IFwiU2Ftc3VuZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zLzEuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNCxcbiAgXCJ0aXRsZVwiOiBcIk9QUE9GMTlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9QUE8gRjE5IGlzIG9mZmljaWFsbHkgYW5ub3VuY2VkIG9uIEFwcmlsIDIwMjEuXCIsXG4gIFwicHJpY2VcIjogMjgwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy45MSxcbiAgXCJyYXRpbmdcIjogNC4zLFxuICBcInN0b2NrXCI6IDEyMyxcbiAgXCJicmFuZFwiOiBcIk9QUE9cIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNSxcbiAgXCJ0aXRsZVwiOiBcIkh1YXdlaSBQMzBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkh1YXdlaeKAmXMgcmUtYmFkZ2VkIFAzMCBQcm8gTmV3IEVkaXRpb24gd2FzIG9mZmljaWFsbHkgdW52ZWlsZWQgeWVzdGVyZGF5IGluIEdlcm1hbnkgYW5kIG5vdyB0aGUgZGV2aWNlIGhhcyBtYWRlIGl0cyB3YXkgdG8gdGhlIFVLLlwiLFxuICBcInByaWNlXCI6IDQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNTgsXG4gIFwicmF0aW5nXCI6IDQuMDksXG4gIFwic3RvY2tcIjogMzIsXG4gIFwiYnJhbmRcIjogXCJIdWF3ZWlcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYsXG4gIFwidGl0bGVcIjogXCJNYWNCb29rIFByb1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFjQm9vayBQcm8gMjAyMSB3aXRoIG1pbmktTEVEIGRpc3BsYXkgbWF5IGxhdW5jaCBiZXR3ZWVuIFNlcHRlbWJlciwgTm92ZW1iZXJcIixcbiAgXCJwcmljZVwiOiAxNzQ5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4wMixcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiA4MyxcbiAgXCJicmFuZFwiOiBcIkFwcGxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82L3RodW1ibmFpbC5wbmdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNi80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcsXG4gIFwidGl0bGVcIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nIEdhbGF4eSBCb29rIFMgKDIwMjApIExhcHRvcCBXaXRoIEludGVsIExha2VmaWVsZCBDaGlwLCA4R0Igb2YgUkFNIExhdW5jaGVkXCIsXG4gIFwicHJpY2VcIjogMTQ5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4xNSxcbiAgXCJyYXRpbmdcIjogNC4yNSxcbiAgXCJzdG9ja1wiOiA1MCxcbiAgXCJicmFuZFwiOiBcIlNhbXN1bmdcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4LFxuICBcInRpdGxlXCI6IFwiTWljcm9zb2Z0IFN1cmZhY2UgTGFwdG9wIDRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxlIGFuZCBzcGVlZC4gU3RhbmQgb3V0IG9uIEhEIHZpZGVvIGNhbGxzIGJhY2tlZCBieSBTdHVkaW8gTWljcy4gQ2FwdHVyZSBpZGVhcyBvbiB0aGUgdmlicmFudCB0b3VjaHNjcmVlbi5cIixcbiAgXCJwcmljZVwiOiAxNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yMyxcbiAgXCJyYXRpbmdcIjogNC40MyxcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIk1pY3Jvc29mdCBTdXJmYWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOSxcbiAgXCJ0aXRsZVwiOiBcIkluZmluaXggSU5CT09LXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJbmZpbml4IEluYm9vayBYMSBDaTMgMTB0aCA4R0IgMjU2R0IgMTQgV2luMTAgR3JleSDigJMgMSBZZWFyIFdhcnJhbnR5XCIsXG4gIFwicHJpY2VcIjogMTA5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuODMsXG4gIFwicmF0aW5nXCI6IDQuNTQsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJJbmZpbml4XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTAsXG4gIFwidGl0bGVcIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSFAgUGF2aWxpb24gMTUtREsxMDU2V00gR2FtaW5nIExhcHRvcCAxMHRoIEdlbiBDb3JlIGk1LCA4R0IsIDI1NkdCIFNTRCwgR1RYIDE2NTAgNEdCLCBXaW5kb3dzIDEwXCIsXG4gIFwicHJpY2VcIjogMTA5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4xOCxcbiAgXCJyYXRpbmdcIjogNC40MyxcbiAgXCJzdG9ja1wiOiA4OSxcbiAgXCJicmFuZFwiOiBcIkhQIFBhdmlsaW9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsYXB0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC90aHVtYm5haWwuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDExLFxuICBcInRpdGxlXCI6IFwicGVyZnVtZSBPaWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lZ2EgRGlzY291bnQsIEltcHJlc3Npb24gb2YgQWNxdWEgRGkgR2lvIGJ5IEdpb3JnaW9Bcm1hbmkgY29uY2VudHJhdGVkIGF0dGFyIHBlcmZ1bWUgT2lsXCIsXG4gIFwicHJpY2VcIjogMTMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguNCxcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiA2NSxcbiAgXCJicmFuZFwiOiBcIkltcHJlc3Npb24gb2YgQWNxdWEgRGkgR2lvXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMixcbiAgXCJ0aXRsZVwiOiBcIkJyb3duIFBlcmZ1bWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJveWFsX01pcmFnZSBTcG9ydCBCcm93biBQZXJmdW1lIGZvciBNZW4gJiBXb21lbiAtIDEyMG1sXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjY2LFxuICBcInJhdGluZ1wiOiA0LFxuICBcInN0b2NrXCI6IDUyLFxuICBcImJyYW5kXCI6IFwiUm95YWxfTWlyYWdlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTMsXG4gIFwidGl0bGVcIjogXCJGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJlc3QgRm9nIFNjZW50IFhwcmVzc2lvIFBlcmZ1bWUgMTAwbWwgRm9yIE1lbiBjb29sIGxvbmcgbGFzdGluZyBwZXJmdW1lcyBmb3IgTWVuXCIsXG4gIFwicHJpY2VcIjogMTMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMTQsXG4gIFwicmF0aW5nXCI6IDQuNTksXG4gIFwic3RvY2tcIjogNjEsXG4gIFwiYnJhbmRcIjogXCJGb2cgU2NlbnQgWHByZXNzaW9cIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE0LFxuICBcInRpdGxlXCI6IFwiTm9uLUFsY29ob2xpYyBDb25jZW50cmF0ZWQgUGVyZnVtZSBPaWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk9yaWdpbmFsIEFsIE11bmFraMKuIGJ5IE1haGFsIEFsIE11c2sgfCBPdXIgSW1wcmVzc2lvbiBvZiBDbGltYXRlIHwgNm1sIE5vbi1BbGNvaG9saWMgQ29uY2VudHJhdGVkIFBlcmZ1bWUgT2lsXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDExNCxcbiAgXCJicmFuZFwiOiBcIkFsIE11bmFraFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTUsXG4gIFwidGl0bGVcIjogXCJFYXUgRGUgUGVyZnVtZSBTcHJheVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2VudWluZSAgQWwtUmVoYWIgc3ByYXkgcGVyZnVtZSBmcm9tIFVBRS9TYXVkaSBBcmFiaWEvWWVtZW4gSGlnaCBRdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjk5LFxuICBcInJhdGluZ1wiOiA0LjcsXG4gIFwic3RvY2tcIjogMTA1LFxuICBcImJyYW5kXCI6IFwiTG9yZCAtIEFsLVJlaGFiXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTYsXG4gIFwidGl0bGVcIjogXCJIeWFsdXJvbmljIEFjaWQgU2VydW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxcXCdPcsODwqlhbCBQYXJpcyBpbnRyb2R1Y2VzIEh5YWx1cm9uIEV4cGVydCBSZXBsdW1waW5nIFNlcnVtIGZvcm11bGF0ZWQgd2l0aCAxLjUlIEh5YWx1cm9uaWMgQWNpZFwiLFxuICBcInByaWNlXCI6IDE5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy4zMSxcbiAgXCJyYXRpbmdcIjogNC44MyxcbiAgXCJzdG9ja1wiOiAxMTAsXG4gIFwiYnJhbmRcIjogXCJMXFwnT3JlYWwgUGFyaXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE3LFxuICBcInRpdGxlXCI6IFwiVHJlZSBPaWwgMzBtbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGVhIHRyZWUgb2lsIGNvbnRhaW5zIGEgbnVtYmVyIG9mIGNvbXBvdW5kcywgaW5jbHVkaW5nIHRlcnBpbmVuLTQtb2wsIHRoYXQgaGF2ZSBiZWVuIHNob3duIHRvIGtpbGwgY2VydGFpbiBiYWN0ZXJpYSxcIixcbiAgXCJwcmljZVwiOiAxMixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC4wOSxcbiAgXCJyYXRpbmdcIjogNC41MixcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkhlbWFuaSBUZWFcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxOCxcbiAgXCJ0aXRsZVwiOiBcIk9pbCBGcmVlIE1vaXN0dXJpemVyIDEwMG1sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEZXJtaXZlIE9pbCBGcmVlIE1vaXN0dXJpemVyIHdpdGggU1BGIDIwIGlzIHNwZWNpZmljYWxseSBmb3JtdWxhdGVkIHdpdGggY2VyYW1pZGVzLCBoeWFsdXJvbmljIGFjaWQgJiBzdW5zY3JlZW4uXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjEsXG4gIFwicmF0aW5nXCI6IDQuNTYsXG4gIFwic3RvY2tcIjogODgsXG4gIFwiYnJhbmRcIjogXCJEZXJtaXZlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE5LFxuICBcInRpdGxlXCI6IFwiU2tpbiBCZWF1dHkgU2VydW0uXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IG5hbWU6IHJvcmVjIGNvbGxhZ2VuIGh5YWx1cm9uaWMgYWNpZCB3aGl0ZSBmYWNlIHNlcnVtIHJpY2VOZXQgd2VpZ2h0OiAxNSBtXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjY4LFxuICBcInJhdGluZ1wiOiA0LjQyLFxuICBcInN0b2NrXCI6IDU0LFxuICBcImJyYW5kXCI6IFwiUk9SRUMgV2hpdGUgUmljZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIwLFxuICBcInRpdGxlXCI6IFwiRnJlY2tsZSBUcmVhdG1lbnQgQ3JlYW0tIDE1Z21cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhaXIgJiBDbGVhciBpcyBQYWtpc3RhblxcJ3Mgb25seSBwdXJlIEZyZWNrbGUgY3JlYW0gd2hpY2ggaGVscHNmYWRlIEZyZWNrbGVzLCBEYXJrc3BvdHMgYW5kIHBpZ21lbnRzLiBNZXJjdXJ5IGxldmVsIGlzIDAlLCBzbyB0aGVyZSBhcmUgbm8gc2lkZSBlZmZlY3RzLlwiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi45OSxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiAxNDAsXG4gIFwiYnJhbmRcIjogXCJGYWlyICYgQ2xlYXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjEsXG4gIFwidGl0bGVcIjogXCItIERhYWwgTWFzb29yIDUwMCBncmFtc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmluZSBxdWFsaXR5IEJyYW5kZWQgUHJvZHVjdCBLZWVwIGluIGEgY29vbCBhbmQgZHJ5IHBsYWNlXCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQuODEsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogMTMzLFxuICBcImJyYW5kXCI6IFwiU2FhZiAmIEtoYWFzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxL3RodW1ibmFpbC5wbmdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIyLFxuICBcInRpdGxlXCI6IFwiRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBCYWtlIFBhcmxvciBCaWcgRWxib3cgTWFjYXJvbmkgLSA0MDAgZ21cIixcbiAgXCJwcmljZVwiOiAxNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTgsXG4gIFwicmF0aW5nXCI6IDQuNTcsXG4gIFwic3RvY2tcIjogMTQ2LFxuICBcImJyYW5kXCI6IFwiQmFrZSBQYXJsb3IgQmlnXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDIzLFxuICBcInRpdGxlXCI6IFwiT3JhbmdlIEVzc2VuY2UgRm9vZCBGbGF2b3VcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmljYXRpb25zIG9mIE9yYW5nZSBFc3NlbmNlIEZvb2QgRmxhdm91ciBGb3IgQ2FrZXMgYW5kIEJha2luZyBGb29kIEl0ZW1cIixcbiAgXCJwcmljZVwiOiAxNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4wNCxcbiAgXCJyYXRpbmdcIjogNC44NSxcbiAgXCJzdG9ja1wiOiAyNixcbiAgXCJicmFuZFwiOiBcIkJha2luZyBGb29kIEl0ZW1zXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNCxcbiAgXCJ0aXRsZVwiOiBcImNlcmVhbHMgbXVlc2xpIGZydWl0IG51dHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIm9yaWdpbmFsIGZhdWppIGNlcmVhbCBtdWVzbGkgMjUwZ20gYm94IHBhY2sgb3JpZ2luYWwgZmF1amkgY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0cyBmbGFrZXMgYnJlYWtmYXN0IGNlcmVhbCBicmVhayBmYXN0IGZhdWppY2VyZWFscyBjZXJlbHMgY2VyZWwgZm9qaSBmb3VqaVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44LFxuICBcInJhdGluZ1wiOiA0Ljk0LFxuICBcInN0b2NrXCI6IDExMyxcbiAgXCJicmFuZFwiOiBcImZhdWppXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJncm9jZXJpZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyNSxcbiAgXCJ0aXRsZVwiOiBcIkd1bGFiIFBvd2RlciA1MCBHcmFtXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEcnkgUm9zZSBGbG93ZXIgUG93ZGVyIEd1bGFiIFBvd2RlciA1MCBHcmFtIOKAoiBUcmVhdHMgV291bmRzXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjU4LFxuICBcInJhdGluZ1wiOiA0Ljg3LFxuICBcInN0b2NrXCI6IDQ3LFxuICBcImJyYW5kXCI6IFwiRHJ5IFJvc2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI2LFxuICBcInRpdGxlXCI6IFwiUGxhbnQgSGFuZ2VyIEZvciBIb21lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCb2hvIERlY29yIFBsYW50IEhhbmdlciBGb3IgSG9tZSBXYWxsIERlY29yYXRpb24gTWFjcmFtZSBXYWxsIEhhbmdpbmcgU2hlbGZcIixcbiAgXCJwcmljZVwiOiA0MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuODYsXG4gIFwicmF0aW5nXCI6IDQuMDgsXG4gIFwic3RvY2tcIjogMTMxLFxuICBcImJyYW5kXCI6IFwiQm9obyBEZWNvclwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi81LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI3LFxuICBcInRpdGxlXCI6IFwiRmx5aW5nIFdvb2RlbiBCaXJkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYWNrYWdlIEluY2x1ZGUgNiBCaXJkcyB3aXRoIEFkaGVzaXZlIFRhcGUgU2hhcGU6IDNEIFNoYXBlZCBXb29kZW4gQmlyZHMgTWF0ZXJpYWw6IFdvb2RlbiBNREYsIExhbWluYXRlZCAzLjVtbVwiLFxuICBcInByaWNlXCI6IDUxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OCxcbiAgXCJyYXRpbmdcIjogNC40MSxcbiAgXCJzdG9ja1wiOiAxNyxcbiAgXCJicmFuZFwiOiBcIkZseWluZyBXb29kZW5cIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjgsXG4gIFwidGl0bGVcIjogXCIzRCBFbWJlbGxpc2htZW50IEFydCBMYW1wXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzRCBsZWQgbGFtcCBzdGlja2VyIFdhbGwgc3RpY2tlciAzZCB3YWxsIGFydCBsaWdodCBvbi9vZmYgYnV0dG9uICBjZWxsIG9wZXJhdGVkIChpbmNsdWRlZClcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDksXG4gIFwicmF0aW5nXCI6IDQuODIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJMRUQgTGlnaHRzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyOSxcbiAgXCJ0aXRsZVwiOiBcIkhhbmRjcmFmdCBDaGluZXNlIHN0eWxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIYW5kY3JhZnQgQ2hpbmVzZSBzdHlsZSBhcnQgbHV4dXJ5IHBhbGFjZSBob3RlbCB2aWxsYSBtYW5zaW9uIGhvbWUgZGVjb3IgY2VyYW1pYyB2YXNlIHdpdGggYnJhc3MgZnJ1aXQgcGxhdGVcIixcbiAgXCJwcmljZVwiOiA2MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMzQsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogNyxcbiAgXCJicmFuZFwiOiBcImx1eHVyeSBwYWxhY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMCxcbiAgXCJ0aXRsZVwiOiBcIktleSBIb2xkZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkF0dHJhY3RpdmUgRGVzaWduTWV0YWxsaWMgbWF0ZXJpYWxGb3VyIGtleSBob29rc1JlbGlhYmxlICYgRHVyYWJsZVByZW1pdW0gUXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjkyLFxuICBcInJhdGluZ1wiOiA0LjkyLFxuICBcInN0b2NrXCI6IDU0LFxuICBcImJyYW5kXCI6IFwiR29sZGVuXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMxLFxuICBcInRpdGxlXCI6IFwiTW9ybmFkaSBWZWx2ZXQgQmVkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNb3JuYWRpIFZlbHZldCBCZWQgQmFzZSB3aXRoIEhlYWRib2FyZCBTbGF0cyBTdXBwb3J0IENsYXNzaWMgU3R5bGUgQmVkcm9vbSBGdXJuaXR1cmUgQmVkIFNldFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNyxcbiAgXCJyYXRpbmdcIjogNC4xNixcbiAgXCJzdG9ja1wiOiAxNDAsXG4gIFwiYnJhbmRcIjogXCJGdXJuaXR1cmUgQmVkIFNldFwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzIsXG4gIFwidGl0bGVcIjogXCJTb2ZhIGZvciBDb2ZmZSBDYWZlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSYXR0dGFuIE91dGRvb3IgZnVybml0dXJlIFNldCBXYXRlcnByb29mICBSYXR0YW4gU29mYSBmb3IgQ29mZmUgQ2FmZVwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OSxcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAzMCxcbiAgXCJicmFuZFwiOiBcIlJhdHR0YW4gT3V0ZG9vclwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMyxcbiAgXCJ0aXRsZVwiOiBcIjMgVGllciBDb3JuZXIgU2hlbHZlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzIHwgMyBQQ3MgV2FsbCBNb3VudCBLaXRjaGVuIFNoZWxmIHwgRmxvYXRpbmcgQmVkcm9vbSBTaGVsZlwiLFxuICBcInByaWNlXCI6IDcwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcsXG4gIFwicmF0aW5nXCI6IDQuMzEsXG4gIFwic3RvY2tcIjogMTA2LFxuICBcImJyYW5kXCI6IFwiS2l0Y2hlbiBTaGVsZlwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzQsXG4gIFwidGl0bGVcIjogXCJQbGFzdGljIFRhYmxlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJW77u/ZXJ5IGdvb2QgcXVhbGl0eSBwbGFzdGljIHRhYmxlIGZvciBtdWx0aSBwdXJwb3NlIG5vdyBpbiByZWFzb25hYmxlIHByaWNlXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDQsXG4gIFwicmF0aW5nXCI6IDQuMDEsXG4gIFwic3RvY2tcIjogMTM2LFxuICBcImJyYW5kXCI6IFwiTXVsdGkgUHVycG9zZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZnVybml0dXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzUsXG4gIFwidGl0bGVcIjogXCIzIERPT1IgUE9SVEFCTEVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1hdGVyaWFsOiBTdGFpbmxlc3MgU3RlZWwgYW5kIEZhYnJpYyAgSXRlbSBTaXplOiAxMTAgY20geCA0NSBjbSB4IDE3NSBjbSBQYWNrYWdlIENvbnRlbnRzOiAxIFN0b3JhZ2UgV2FyZHJvYmVcIixcbiAgXCJwcmljZVwiOiA0MSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy45OCxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIkFtbmFNYXJ0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNixcbiAgXCJ0aXRsZVwiOiBcIlNsZWV2ZSBTaGlydCBXb21lbnNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvdHRvbiBTb2xpZCBDb2xvciBQcm9mZXNzaW9uYWwgV2VhciBTbGVldmUgU2hpcnQgV29tZW5zIFdvcmsgQmxvdXNlcyBXaG9sZXNhbGUgQ2xvdGhpbmcgQ2FzdWFsIFBsYWluIEN1c3RvbSBUb3AgT0VNIEN1c3RvbWl6ZWRcIixcbiAgXCJwcmljZVwiOiA5MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuODksXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogMzksXG4gIFwiYnJhbmRcIjogXCJQcm9mZXNzaW9uYWwgV2VhclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzcsXG4gIFwidGl0bGVcIjogXCJhbmsgVG9wcyBmb3IgV29tZW5zL0dpcmxzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQQUNLIE9GIDMgQ0FNSVNPTEVTICxWRVJZIENPTUZPUlRBQkxFIFNPRlQgQ09UVE9OIFNUVUZGLCBDT01GT1JUQUJMRSBJTiBBTEwgRk9VUiBTRUFTT05TXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjA1LFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDEwNyxcbiAgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzgsXG4gIFwidGl0bGVcIjogXCJzdWJsaW1hdGlvbiBwbGFpbiBraWRzIHRhbmtcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInN1YmxpbWF0aW9uIHBsYWluIGtpZHMgdGFuayB0b3BzIHdob2xlc2FsZVwiLFxuICBcInByaWNlXCI6IDEwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMTIsXG4gIFwicmF0aW5nXCI6IDQuOCxcbiAgXCJzdG9ja1wiOiAyMCxcbiAgXCJicmFuZFwiOiBcIlNvZnQgQ290dG9uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzksXG4gIFwidGl0bGVcIjogXCJXb21lbiBTd2VhdGVycyBXb29sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIyMDIxIEN1c3RvbSBXaW50ZXIgRmFsbCBaZWJyYSBLbml0IENyb3AgVG9wIFdvbWVuIFN3ZWF0ZXJzIFdvb2wgTW9oYWlyIENvcyBDdXN0b21pemUgQ3JldyBOZWNrIFdvbWVuXFwnIFMgQ3JvcCBUb3AgU3dlYXRlclwiLFxuICBcInByaWNlXCI6IDYwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuMixcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiA1NSxcbiAgXCJicmFuZFwiOiBcIlRvcCBTd2VhdGVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDAsXG4gIFwidGl0bGVcIjogXCJ3b21lbiB3aW50ZXIgY2xvdGhlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwid29tZW4gd2ludGVyIGNsb3RoZXMgdGhpY2sgZmxlZWNlIGhvb2RpZSB0b3Agd2l0aCBzd2VhdCBwYW50am9nZ2VyIHdvbWVuIHN3ZWF0c3VpdCBzZXQgam9nZ2VycyBwYW50cyB0d28gcGllY2UgcGFudHMgc2V0XCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjM5LFxuICBcInJhdGluZ1wiOiA0LjkxLFxuICBcInN0b2NrXCI6IDg0LFxuICBcImJyYW5kXCI6IFwiVG9wIFN3ZWF0ZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQwLzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDEsXG4gIFwidGl0bGVcIjogXCJOSUdIVCBTVUlUXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJOSUdIVCBTVUlUIFJFRCBNSUNLWSBNT1VTRS4uICBGb3IgR2lybHMuIEZhbnRhc3RpYyBTdWl0cy5cIixcbiAgXCJwcmljZVwiOiA1NSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMDUsXG4gIFwicmF0aW5nXCI6IDQuNjUsXG4gIFwic3RvY2tcIjogMjEsXG4gIFwiYnJhbmRcIjogXCJSRUQgTUlDS1kgTU9VU0UuLlwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MixcbiAgXCJ0aXRsZVwiOiBcIlN0aWNoZWQgS3VydGEgcGx1cyB0cm91c2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGQUJSSUM6IExJTEVJTiBDSEVTVDogMjEgTEVOR0hUOiAzNyBUUk9VU0VSOiAoMzgpIDpBUkFCSUMgTElMRUlOXCIsXG4gIFwicHJpY2VcIjogODAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjM3LFxuICBcInJhdGluZ1wiOiA0LjA1LFxuICBcInN0b2NrXCI6IDE0OCxcbiAgXCJicmFuZFwiOiBcIkRpZ2l0YWwgUHJpbnRlZFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MyxcbiAgXCJ0aXRsZVwiOiBcImZyb2NrIGdvbGQgcHJpbnRlZFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2hhemkgZmFicmljIGxvbmcgZnJvY2sgZ29sZCBwcmludGVkIHJlYWR5IHRvIHdlYXIgc3RpdGNoZWQgY29sbGVjdGlvbiAoRzk5MilcIixcbiAgXCJwcmljZVwiOiA2MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU1LFxuICBcInJhdGluZ1wiOiA0LjMxLFxuICBcInN0b2NrXCI6IDE1MCxcbiAgXCJicmFuZFwiOiBcIkdoYXppIEZhYnJpY1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NCxcbiAgXCJ0aXRsZVwiOiBcIkxhZGllcyBNdWx0aWNvbG9yZWQgRHJlc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRoaXMgY2xhc3N5IHNoaXJ0IGZvciB3b21lbiBnaXZlcyB5b3UgYSBnb3JnZW91cyBsb29rIG9uIGV2ZXJ5ZGF5IHdlYXIgYW5kIHNwZWNpYWxseSBmb3Igc2VtaS1jYXN1YWwgd2VhcnMuXCIsXG4gIFwicHJpY2VcIjogNzksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljg4LFxuICBcInJhdGluZ1wiOiA0LjAzLFxuICBcInN0b2NrXCI6IDIsXG4gIFwiYnJhbmRcIjogXCJHaGF6aSBGYWJyaWNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDUsXG4gIFwidGl0bGVcIjogXCJNYWxhaSBNYXhpIERyZXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJSZWFkeSB0byB3ZWFyLCBVbmlxdWUgZGVzaWduIGFjY29yZGluZyB0byBtb2Rlcm4gc3RhbmRhcmQgZmFzaGlvbiwgQmVzdCBmaXR0aW5nICxJbXBvcnRlZCBzdHVmZlwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjA3LFxuICBcInJhdGluZ1wiOiA0LjY3LFxuICBcInN0b2NrXCI6IDk2LFxuICBcImJyYW5kXCI6IFwiSUVMR1lcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1kcmVzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ2LFxuICBcInRpdGxlXCI6IFwid29tZW5cXCdzIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJDbG9zZTogTGFjZSwgU3R5bGUgd2l0aCBib3R0b206IEluY3JlYXNlZCBpbnNpZGUsIFNvbGUgTWF0ZXJpYWw6IFJ1YmJlclwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi45NixcbiAgXCJyYXRpbmdcIjogNC4xNCxcbiAgXCJzdG9ja1wiOiA3MixcbiAgXCJicmFuZFwiOiBcIklFTEdZIGZhc2hpb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8xLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NyxcbiAgXCJ0aXRsZVwiOiBcIlNuZWFrZXIgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN5bnRoZXRpYyBMZWF0aGVyIENhc3VhbCBTbmVha2VyIHNob2VzIGZvciBXb21lbi9naXJscyBTbmVha2VycyBGb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiAxMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjM3LFxuICBcInJhdGluZ1wiOiA0LjE5LFxuICBcInN0b2NrXCI6IDUwLFxuICBcImJyYW5kXCI6IFwiU3ludGhldGljIExlYXRoZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvdGh1bWJuYWlsLmpwZWdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvdGh1bWJuYWlsLmpwZWdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0OCxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFN0cmlwIEhlZWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZlYXR1cmVzOiBGbGlwLWZsb3BzLCBNaWQgSGVlbCwgQ29tZm9ydGFibGUsIFN0cmlwZWQgSGVlbCwgQW50aXNraWQsIFN0cmlwZWRcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuODMsXG4gIFwicmF0aW5nXCI6IDQuMDIsXG4gIFwic3RvY2tcIjogMjUsXG4gIFwiYnJhbmRcIjogXCJTYW5kYWxzIEZsaXAgRmxvcHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ5LFxuICBcInRpdGxlXCI6IFwiQ2hhcHBhbHMgJiBTaG9lIExhZGllcyBNZXRhbGxpY1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV29tZW5zIENoYXBwYWxzICYgU2hvZSBMYWRpZXMgTWV0YWxsaWMgVG9uZyBUaG9uZyBTYW5kYWwgRmxhdCBTdW1tZXIgMjAyMCBNYWFzYWkgU2FuZGFsc1wiLFxuICBcInByaWNlXCI6IDIzLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjYyLFxuICBcInJhdGluZ1wiOiA0LjcyLFxuICBcInN0b2NrXCI6IDEwNyxcbiAgXCJicmFuZFwiOiBcIk1hYXNhaSBTYW5kYWxzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MCxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIyMDIwIE5ldyBBcnJpdmFscyBHZW51aW5lIExlYXRoZXIgRmFzaGlvbiBUcmVuZCBQbGF0Zm9ybSBTdW1tZXIgV29tZW4gU2hvZXNcIixcbiAgXCJwcmljZVwiOiAzNixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuODcsXG4gIFwicmF0aW5nXCI6IDQuMzMsXG4gIFwic3RvY2tcIjogNDYsXG4gIFwiYnJhbmRcIjogXCJBcnJpdmFscyBHZW51aW5lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvMS5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MSxcbiAgXCJ0aXRsZVwiOiBcImhhbGYgc2xlZXZlcyBUIHNoaXJ0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWFueSBzdG9yZSBpcyBjcmVhdGluZyBuZXcgZGVzaWducyBhbmQgdHJlbmQgZXZlcnkgbW9udGggYW5kIGV2ZXJ5IHllYXIuIERhcmF6LnBrIGhhdmUgYSBiZWF1dGlmdWwgcmFuZ2Ugb2YgbWVuIGZhc2hpb24gYnJhbmRzXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjc2LFxuICBcInJhdGluZ1wiOiA0LjI2LFxuICBcInN0b2NrXCI6IDEzMixcbiAgXCJicmFuZFwiOiBcIlZpbnRhZ2UgQXBwYXJlbFwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUyLFxuICBcInRpdGxlXCI6IFwiRlJFRSBGSVJFIFQgU2hpcnRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcInF1YWxpdHkgYW5kIHByb2Zlc3Npb25hbCBwcmludCAtIEl0IGRvZXNuXFwndCBqdXN0IGxvb2sgaGlnaCBxdWFsaXR5LCBpdCBpcyBoaWdoIHF1YWxpdHkuXCIsXG4gIFwicHJpY2VcIjogMTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0LjcyLFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDEyOCxcbiAgXCJicmFuZFwiOiBcIkZSRUUgRklSRVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1MyxcbiAgXCJ0aXRsZVwiOiBcInByaW50ZWQgaGlnaCBxdWFsaXR5IFQgc2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCcmFuZDogdmludGFnZSBBcHBhcmVsICxFeHBvcnQgcXVhbGl0eVwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjU0LFxuICBcInJhdGluZ1wiOiA0Ljg5LFxuICBcInN0b2NrXCI6IDYsXG4gIFwiYnJhbmRcIjogXCJWaW50YWdlIEFwcGFyZWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU0LFxuICBcInRpdGxlXCI6IFwiUHViZyBQcmludGVkIEdyYXBoaWMgVC1TaGlydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBEZXNjcmlwdGlvbiBGZWF0dXJlczogMTAwJSBVbHRyYSBzb2Z0IFBvbHllc3RlciBKZXJzZXkuIFZpYnJhbnQgJiBjb2xvcmZ1bCBwcmludGluZyBvbiBmcm9udC4gRmVlbHMgc29mdCBhcyBjb3R0b24gd2l0aG91dCBldmVyIGNyYWNraW5nXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjQ0LFxuICBcInJhdGluZ1wiOiA0LjYyLFxuICBcInN0b2NrXCI6IDEzNixcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hpcnRzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTUsXG4gIFwidGl0bGVcIjogXCJNb25leSBIZWlzdCBQcmludGVkIFN1bW1lciBUIFNoaXJ0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFicmljIEplcmN5LCBTaXplOiBNICYgTCBXZWFyIFN0eWxpc2ggRHVhbCBTdGljaGVkXCIsXG4gIFwicHJpY2VcIjogNjYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1Ljk3LFxuICBcInJhdGluZ1wiOiA0LjksXG4gIFwic3RvY2tcIjogMTIyLFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTYsXG4gIFwidGl0bGVcIjogXCJTbmVha2VycyBKb2dnZXJzIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHZW5kZXI6IE1lbiAsIENvbG9yczogU2FtZSBhcyBEaXNwbGF5ZWRDb25kaXRpb246IDEwMCUgQnJhbmQgTmV3XCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjU3LFxuICBcInJhdGluZ1wiOiA0LjM4LFxuICBcInN0b2NrXCI6IDYsXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvNS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NyxcbiAgXCJ0aXRsZVwiOiBcIkxvYWZlcnMgZm9yIG1lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNob2VzIC0gTG9hZmVycyBmb3IgbWVuIC0gUnViYmVyIFNob2VzIC0gTnlsb24gU2hvZXMgLSBTaG9lcyBmb3IgbWVuIC0gTW9jY2Fzc2lvbiAtIFB1cmUgTnlsb24gKFJ1YmJlcikgRXhwb3QgUXVhbGl0eS5cIixcbiAgXCJwcmljZVwiOiA0NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTEsXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogMjAsXG4gIFwiYnJhbmRcIjogXCJSdWJiZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1OCxcbiAgXCJ0aXRsZVwiOiBcImZvcm1hbCBvZmZpY2VzIHNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYXR0ZXJuIFR5cGU6IFNvbGlkLCBNYXRlcmlhbDogUFUsIFRvZSBTaGFwZTogUG9pbnRlZCBUb2UgLE91dHNvbGUgTWF0ZXJpYWw6IFJ1YmJlclwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMixcbiAgXCJyYXRpbmdcIjogNC40MSxcbiAgXCJzdG9ja1wiOiA2OCxcbiAgXCJicmFuZFwiOiBcIlRoZSBXYXJlaG91c2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1OSxcbiAgXCJ0aXRsZVwiOiBcIlNwcmluZyBhbmQgc3VtbWVyc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbWZvcnRhYmxlIHN0cmV0Y2ggY2xvdGgsIGxpZ2h0d2VpZ2h0IGJvZHk7ICxydWJiZXIgc29sZSwgYW50aS1za2lkIHdlYXI7XCIsXG4gIFwicHJpY2VcIjogMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguNzEsXG4gIFwicmF0aW5nXCI6IDQuMzMsXG4gIFwic3RvY2tcIjogMTM3LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MCxcbiAgXCJ0aXRsZVwiOiBcIlN0eWxpc2ggQ2FzdWFsIEplYW5zIFNob2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIaWdoIFF1YWxpdHkgLFN0eWxpc2ggZGVzaWduICxDb21mb3J0YWJsZSB3ZWFyICxGQXNoaW9uICxEdXJhYmxlXCIsXG4gIFwicHJpY2VcIjogNTgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuNTUsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogMTI5LFxuICBcImJyYW5kXCI6IFwiU25lYWtlcnNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtc2hvZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYxLFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcHMgV3Jpc3R3YXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGU6U3BvcnQgLENsYXNwOkJ1Y2tsZXMgLFdhdGVyIFJlc2lzdGFuY2UgRGVwdGg6M0JhclwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy4xNCxcbiAgXCJyYXRpbmdcIjogNC42MyxcbiAgXCJzdG9ja1wiOiA5MSxcbiAgXCJicmFuZFwiOiBcIk5hdmlmb3JjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMy5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MixcbiAgXCJ0aXRsZVwiOiBcIldhdGVycHJvb2YgTGVhdGhlciBCcmFuZCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2F0Y2ggQ3Jvd24gV2l0aCBFbnZpcm9ubWVudGFsIElQUyBCcm9uemUgRWxlY3Ryb3BsYXRpbmc7IERpc3BsYXkgc3lzdGVtIG9mIDEyIGhvdXJzXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMTUsXG4gIFwicmF0aW5nXCI6IDQuMDUsXG4gIFwic3RvY2tcIjogOTUsXG4gIFwiYnJhbmRcIjogXCJTS01FSSA5MTE3XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYyLzIuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjMsXG4gIFwidGl0bGVcIjogXCJSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1lbiBTaWx2ZXIgQ2hhaW4gUm95YWwgQmx1ZSBQcmVtaXVtIFdhdGNoIExhdGVzdCBBbmFsb2cgV2F0Y2hcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMi41NixcbiAgXCJyYXRpbmdcIjogNC44OSxcbiAgXCJzdG9ja1wiOiAxNDIsXG4gIFwiYnJhbmRcIjogXCJTS01FSSA5MTE3XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzQuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY0LFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhdGhlciBTdHJhcCBTa2VsZXRvbiBXYXRjaCBmb3IgTWVuIC0gU3R5bGlzaCBhbmQgTGF0ZXN0IERlc2lnblwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC4yLFxuICBcInJhdGluZ1wiOiA0Ljk4LFxuICBcInN0b2NrXCI6IDYxLFxuICBcImJyYW5kXCI6IFwiU3RyYXAgU2tlbGV0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY1LFxuICBcInRpdGxlXCI6IFwiU3RhaW5sZXNzIFN0ZWVsIFdyaXN0IFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsaXNoIFdhdGNoIEZvciBNYW4gKEx1eHVyeSkgQ2xhc3N5IE1lblxcJ3MgU3RhaW5sZXNzIFN0ZWVsIFdyaXN0IFdhdGNoIC0gQm94IFBhY2tlZFwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy43OSxcbiAgXCJyYXRpbmdcIjogNC43OSxcbiAgXCJzdG9ja1wiOiA5NCxcbiAgXCJicmFuZFwiOiBcIlN0YWlubGVzc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjUvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY2LFxuICBcInRpdGxlXCI6IFwiU3RlZWwgQW5hbG9nIENvdXBsZSBXYXRjaGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbGVnYW50IGRlc2lnbiwgU3R5bGlzaCAsVW5pcXVlICYgVHJlbmR5LENvbWZvcnRhYmxlIHdlYXJcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMyxcbiAgXCJyYXRpbmdcIjogNC43OSxcbiAgXCJzdG9ja1wiOiAyNCxcbiAgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvNC5KUEdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2NyxcbiAgXCJ0aXRsZVwiOiBcIkZhc2hpb24gTWFnbmV0aWMgV3Jpc3QgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJ1eSB0aGlzIGF3ZXNvbWUgIFRoZSBwcm9kdWN0IGlzIG9yaWdpbmFsbHkgbWFudWZhY3R1cmVkIGJ5IHRoZSBjb21wYW55IGFuZCBpdFxcJ3MgYSB0b3Agc2VsbGluZyBwcm9kdWN0IHdpdGggYSB2ZXJ5IHJlYXNvbmFibGVcIixcbiAgXCJwcmljZVwiOiA2MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNjksXG4gIFwicmF0aW5nXCI6IDQuMDMsXG4gIFwic3RvY2tcIjogNDYsXG4gIFwiYnJhbmRcIjogXCJFYXN0ZXJuIFdhdGNoZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjgsXG4gIFwidGl0bGVcIjogXCJTdHlsaXNoIEx1eHVyeSBEaWdpdGFsIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsaXNoIEx1eHVyeSBEaWdpdGFsIFdhdGNoIEZvciBHaXJscyAvIFdvbWVuIC0gTGVkIFNtYXJ0IExhZGllcyBXYXRjaGVzIEZvciBHaXJsc1wiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA5LjAzLFxuICBcInJhdGluZ1wiOiA0LjU1LFxuICBcInN0b2NrXCI6IDc3LFxuICBcImJyYW5kXCI6IFwiTHV4dXJ5IERpZ2l0YWxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjgvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2OSxcbiAgXCJ0aXRsZVwiOiBcIkdvbGRlbiBXYXRjaCBQZWFybHMgQnJhY2VsZXQgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgZGV0YWlscyBvZiBHb2xkZW4gV2F0Y2ggUGVhcmxzIEJyYWNlbGV0IFdhdGNoIEZvciBHaXJscyAtIEdvbGRlbiBDaGFpbiBMYWRpZXMgQnJhY2VsYXRlIFdhdGNoIGZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy41NSxcbiAgXCJyYXRpbmdcIjogNC43NyxcbiAgXCJzdG9ja1wiOiA4OSxcbiAgXCJicmFuZFwiOiBcIldhdGNoIFBlYXJsc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzAsXG4gIFwidGl0bGVcIjogXCJTdGFpbmxlc3MgU3RlZWwgV29tZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZhc2hpb24gU2ttZWkgMTgzMCBTaGVsbCBEaWFsIFN0YWlubGVzcyBTdGVlbCBXb21lbiBXcmlzdCBXYXRjaCBMYWR5IEJyYWNlbGV0IFdhdGNoIFF1YXJ0eiBXYXRjaGVzIExhZGllc1wiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4Ljk4LFxuICBcInJhdGluZ1wiOiA0LjA4LFxuICBcInN0b2NrXCI6IDExMSxcbiAgXCJicmFuZFwiOiBcIkJyYWNlbGV0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MSxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFNob3VsZGVyIEJhZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkxvdWlzV2lsbCBXb21lbiBTaG91bGRlciBCYWdzIExvbmcgQ2x1dGNoZXMgQ3Jvc3MgQm9keSBCYWdzIFBob25lIEJhZ3MgUFUgTGVhdGhlciBIYW5kIEJhZ3MgTGFyZ2UgQ2FwYWNpdHkgQ2FyZCBIb2xkZXJzIFppcHBlciBDb2luIFB1cnNlcyBGYXNoaW9uIENyb3NzYm9keSBCYWdzIGZvciBHaXJscyBMYWRpZXNcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNjUsXG4gIFwicmF0aW5nXCI6IDQuNzEsXG4gIFwic3RvY2tcIjogMTcsXG4gIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzIsXG4gIFwidGl0bGVcIjogXCJIYW5kYmFnIEZvciBHaXJsc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBmYXNoaW9uIGlzIGRlc2lnbmVkIHRvIGFkZCBhIGNoYXJtaW5nIGVmZmVjdCB0byB5b3VyIGNhc3VhbCBvdXRmaXQuIFRoaXMgQmFnIGlzIG1hZGUgb2Ygc3ludGhldGljIGxlYXRoZXIuXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjUsXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogMjcsXG4gIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzMsXG4gIFwidGl0bGVcIjogXCJGYW5jeSBoYW5kIGNsdXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBmYXNoaW9uIGlzIGRlc2lnbmVkIHRvIGFkZCBhIGNoYXJtaW5nIGVmZmVjdCB0byB5b3VyIGNhc3VhbCBvdXRmaXQuIFRoaXMgQmFnIGlzIG1hZGUgb2Ygc3ludGhldGljIGxlYXRoZXIuXCIsXG4gIFwicHJpY2VcIjogNDQsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjM5LFxuICBcInJhdGluZ1wiOiA0LjE4LFxuICBcInN0b2NrXCI6IDEwMSxcbiAgXCJicmFuZFwiOiBcIkJyYWNlbGV0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc0LFxuICBcInRpdGxlXCI6IFwiTGVhdGhlciBIYW5kIEJhZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSXQgZmVhdHVyZXMgYW4gYXR0cmFjdGl2ZSBkZXNpZ24gdGhhdCBtYWtlcyBpdCBhIG11c3QgaGF2ZSBhY2Nlc3NvcnkgaW4geW91ciBjb2xsZWN0aW9uLiBXZSBzZWxsIGRpZmZlcmVudCBraW5kIG9mIGJhZ3MgZm9yIGJveXMsIGtpZHMsIHdvbWVuLCBnaXJscyBhbmQgYWxzbyBmb3IgdW5pc2V4LlwiLFxuICBcInByaWNlXCI6IDU3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4xOSxcbiAgXCJyYXRpbmdcIjogNC4wMSxcbiAgXCJzdG9ja1wiOiA0MyxcbiAgXCJicmFuZFwiOiBcIkNvcGVuaGFnZW4gTHV4ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NSxcbiAgXCJ0aXRsZVwiOiBcIlNldmVuIFBvY2tldCBXb21lbiBCYWdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNldmVuIFBvY2tldCBXb21lbiBCYWcgSGFuZGJhZ3MgTGFkeSBTaG91bGRlciBDcm9zc2JvZHkgQmFnIEZlbWFsZSBQdXJzZSBTZXZlbiBQb2NrZXQgQmFnXCIsXG4gIFwicHJpY2VcIjogNjgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0Ljg3LFxuICBcInJhdGluZ1wiOiA0LjkzLFxuICBcInN0b2NrXCI6IDEzLFxuICBcImJyYW5kXCI6IFwiU3RlYWwgRnJhbWVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3NixcbiAgXCJ0aXRsZVwiOiBcIlNpbHZlciBSaW5nIFNldCBXb21lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSmV3ZWxyeSBUeXBlOlJpbmdzQ2VydGlmaWNhdGUgVHlwZTpOb25lUGxhdGluZzpTaWx2ZXIgUGxhdGVkU2hhcGVhdHRlcm46bm9uZVN0eWxlOkNMQVNTSUNSZWxpZ2lvdXNcIixcbiAgXCJwcmljZVwiOiA3MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNTcsXG4gIFwicmF0aW5nXCI6IDQuNjEsXG4gIFwic3RvY2tcIjogNTEsXG4gIFwiYnJhbmRcIjogXCJEYXJvamF5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc3LFxuICBcInRpdGxlXCI6IFwiUm9zZSBSaW5nXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCcmFuZDogVGhlIEdyZWV0aW5ncyBGbG93ZXIgQ29sb3VyOiBSZWRSaW5nIENvbG91cjogR29sZGVuU2l6ZTogQWRqdXN0YWJsZVwiLFxuICBcInByaWNlXCI6IDEwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4yMixcbiAgXCJyYXRpbmdcIjogNC4yMSxcbiAgXCJzdG9ja1wiOiAxNDksXG4gIFwiYnJhbmRcIjogXCJDb3BlbmhhZ2VuIEx1eGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc4LFxuICBcInRpdGxlXCI6IFwiUmhpbmVzdG9uZSBLb3JlYW4gU3R5bGUgT3BlbiBSaW5nc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnkgM1BjcyBBZGp1c3RhYmxlIFBlYXJsIFJoaW5lc3RvbmUgS29yZWFuIFN0eWxlIE9wZW4gUmluZ3MgRm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguMDIsXG4gIFwicmF0aW5nXCI6IDQuNjksXG4gIFwic3RvY2tcIjogOSxcbiAgXCJicmFuZFwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3OSxcbiAgXCJ0aXRsZVwiOiBcIkVsZWdhbnQgRmVtYWxlIFBlYXJsIEVhcnJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbGVnYW50IEZlbWFsZSBQZWFybCBFYXJyaW5ncyBTZXQgWmlyY29uIFBlYXJsIEVhcmluZ3MgV29tZW4gUGFydHkgQWNjZXNzb3JpZXMgOSBQYWlycy9TZXRcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuOCxcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAxNixcbiAgXCJicmFuZFwiOiBcIkZhc2hpb24gSmV3ZWxsZXJ5XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtamV3ZWxsZXJ5XCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc5LzEuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODAsXG4gIFwidGl0bGVcIjogXCJDaGFpbiBQaW4gVGFzc2VsIEVhcnJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQYWlyIE9mIEVhciBDdWZmIEJ1dHRlcmZseSBMb25nIENoYWluIFBpbiBUYXNzZWwgRWFycmluZ3MgLSBTaWx2ZXIgKCBMb25nIExpZmUgUXVhbGl0eSBQcm9kdWN0KVwiLFxuICBcInByaWNlXCI6IDQ1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy43NSxcbiAgXCJyYXRpbmdcIjogNC41OSxcbiAgXCJzdG9ja1wiOiA5LFxuICBcImJyYW5kXCI6IFwiQ3VmZiBCdXR0ZXJmbHlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MSxcbiAgXCJ0aXRsZVwiOiBcIlJvdW5kIFNpbHZlciBGcmFtZSBTdW4gR2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQSBwYWlyIG9mIHN1bmdsYXNzZXMgY2FuIHByb3RlY3QgeW91ciBleWVzIGZyb20gYmVpbmcgaHVydC4gRm9yIGNhciBkcml2aW5nLCB2YWNhdGlvbiB0cmF2ZWwsIG91dGRvb3IgYWN0aXZpdGllcywgc29jaWFsIGdhdGhlcmluZ3MsXCIsXG4gIFwicHJpY2VcIjogMTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjEsXG4gIFwicmF0aW5nXCI6IDQuOTQsXG4gIFwic3RvY2tcIjogNzgsXG4gIFwiYnJhbmRcIjogXCJEZXNpZ25lciBTdW4gR2xhc3Nlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MixcbiAgXCJ0aXRsZVwiOiBcIkthYmlyIFNpbmdoIFNxdWFyZSBTdW5nbGFzc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT3JpZ25hbCBNZXRhbCBLYWJpciBTaW5naCBkZXNpZ24gMjAyMCBTdW5nbGFzc2VzIE1lbiBCcmFuZCBEZXNpZ25lciBTdW4gR2xhc3NlcyBLYWJpciBTaW5naCBTcXVhcmUgU3VuZ2xhc3NcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNixcbiAgXCJyYXRpbmdcIjogNC42MixcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkRlc2lnbmVyIFN1biBHbGFzc2VzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgzLFxuICBcInRpdGxlXCI6IFwiV2lsZXkgWCBOaWdodCBWaXNpb24gWWVsbG93IEdsYXNzZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldpbGV5IFggTmlnaHQgVmlzaW9uIFllbGxvdyBHbGFzc2VzIGZvciBSaWRlcnMgLSBOaWdodCBWaXNpb24gQW50aSBGb2cgRHJpdmluZyBHbGFzc2VzIC0gRnJlZSBOaWdodCBHbGFzcyBDb3ZlciAtIFNoaWVsZCBFeWVzIEZyb20gRHVzdCBhbmQgVmlydXMtIEZvciBOaWdodCBTcG9ydCBNYXRjaGVzXCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDYuMzMsXG4gIFwicmF0aW5nXCI6IDQuOTcsXG4gIFwic3RvY2tcIjogMTE1LFxuICBcImJyYW5kXCI6IFwibWFzdGFyIHdhdGNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODQsXG4gIFwidGl0bGVcIjogXCJTcXVhcmUgU3VuZ2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBPdmVyc2l6ZWQgU3F1YXJlIFN1bmdsYXNzZXMgUmV0cm8gR3JhZGllbnQgQmlnIEZyYW1lIFN1bmdsYXNzZXMgRm9yIFdvbWVuIE9uZSBQaWVjZSBHYWZhcyBTaGFkZSBNaXJyb3IgQ2xlYXIgTGVucyAxNzA1OVwiLFxuICBcInByaWNlXCI6IDI4LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy44OSxcbiAgXCJyYXRpbmdcIjogNC42NCxcbiAgXCJzdG9ja1wiOiA2NCxcbiAgXCJicmFuZFwiOiBcIm1hc3RhciB3YXRjaFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NSxcbiAgXCJ0aXRsZVwiOiBcIkxvdWlzV2lsbCBNZW4gU3VuZ2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG91aXNXaWxsIE1lbiBTdW5nbGFzc2VzIFBvbGFyaXplZCBTdW5nbGFzc2VzIFVWNDAwIFN1bmdsYXNzZXMgRGF5IE5pZ2h0IER1YWwgVXNlIFNhZmV0eSBEcml2aW5nIE5pZ2h0IFZpc2lvbiBFeWV3ZWFyIEFMLU1HIEZyYW1lIFN1biBHbGFzc2VzIHdpdGggRnJlZSBCb3ggZm9yIERyaXZlcnNcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMjcsXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogOTIsXG4gIFwiYnJhbmRcIjogXCJMb3Vpc1dpbGxcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODYsXG4gIFwidGl0bGVcIjogXCJCbHVldG9vdGggQXV4XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJCbHVldG9vdGggQXV4IEJsdWV0b290aCBDYXIgQXV4IENhciBCbHVldG9vdGggVHJhbnNtaXR0ZXIgQXV4IEF1ZGlvIFJlY2VpdmVyIEhhbmRmcmVlIENhciBCbHVldG9vdGggTXVzaWMgUmVjZWl2ZXIgVW5pdmVyc2FsIDMuNW1tIFN0cmVhbWluZyBBMkRQIFdpcmVsZXNzIEF1dG8gQVVYIEF1ZGlvIEFkYXB0ZXIgV2l0aCBNaWMgRm9yIFBob25lIE1QM1wiLFxuICBcInByaWNlXCI6IDI1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC41NixcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiAyMixcbiAgXCJicmFuZFwiOiBcIkNhciBBdXhcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODcsXG4gIFwidGl0bGVcIjogXCJ0IFRlbXBlcmF0dXJlIENvbnRyb2xsZXIgSW5jdWJhdG9yIENvbnRyb2xsZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJvdGggSGVhdCBhbmQgQ29vbCBQdXJwb3NlLCBUZW1wZXJhdHVyZSBjb250cm9sIHJhbmdlOyAtNTAgdG8gKzExMCwgVGVtcGVyYXR1cmUgbWVhc3VyZW1lbnQgYWNjdXJhY3k7IDAuMSwgQ29udHJvbCBhY2N1cmFjeTsgMC4xXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjMsXG4gIFwicmF0aW5nXCI6IDQuNTQsXG4gIFwic3RvY2tcIjogMzcsXG4gIFwiYnJhbmRcIjogXCJXMTIwOSBEQzEyVlwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg4LFxuICBcInRpdGxlXCI6IFwiVEMgUmV1c2FibGUgU2lsaWNvbmUgTWFnaWMgV2FzaGluZyBHbG92ZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlRDIFJldXNhYmxlIFNpbGljb25lIE1hZ2ljIFdhc2hpbmcgR2xvdmVzIHdpdGggU2NydWJiZXIsIENsZWFuaW5nIEJydXNoIFNjcnViYmVyIEdsb3ZlcyBIZWF0IFJlc2lzdGFudCBQYWlyIGZvciBDbGVhbmluZyBvZiBLaXRjaGVuLCBEaXNoZXMsIFZlZ2V0YWJsZXMgYW5kIEZydWl0cywgQmF0aHJvb20sIENhciBXYXNoLCBQZXQgQ2FyZSBhbmQgTXVsdGlwdXJwb3NlXCIsXG4gIFwicHJpY2VcIjogMjksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMTksXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogNDIsXG4gIFwiYnJhbmRcIjogXCJUQyBSZXVzYWJsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4OSxcbiAgXCJ0aXRsZVwiOiBcIlF1YWxjb21tIG9yaWdpbmFsIENhciBDaGFyZ2VyXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJiZXN0IFF1YWxpdHkgQ0hhcmdlciAsIEhpZ2hseSBSZWNvbW1lbmRlZCB0byBhbGwgYmVzdCBRdWFsaXR5IENIYXJnZXIgLCBIaWdobHkgUmVjb21tZW5kZWQgdG8gYWxsXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjUzLFxuICBcInJhdGluZ1wiOiA0LjIsXG4gIFwic3RvY2tcIjogNzksXG4gIFwiYnJhbmRcIjogXCJUQyBSZXVzYWJsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkwLFxuICBcInRpdGxlXCI6IFwiQ3ljbGUgQmlrZSBHbG93XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJVbml2ZXJzYWwgZml0bWVudCBhbmQgZWFzeSB0byBpbnN0YWxsIG5vIHNwZWNpYWwgd2lyZXMsIGNhbiBiZSBlYXNpbHkgaW5zdGFsbGVkIGFuZCByZW1vdmVkLiBGaXRzIG1vc3Qgc3RhbmRhcmQgdHlyZSBhaXIgc3RlbSB2YWx2ZXMgb2Ygcm9hZCwgbW91bnRhaW4gYmljeWNsZXMsIG1vdG9jeWNsZXMgYW5kIGNhcnMuQnJpZ2h0IGxlZCB3aWxsIHR1cm4gb24gd1wiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4wOCxcbiAgXCJyYXRpbmdcIjogNC4xLFxuICBcInN0b2NrXCI6IDYzLFxuICBcImJyYW5kXCI6IFwiTmVvbiBMRUQgTGlnaHRcIixcbiAgXCJjYXRlZ29yeVwiOiBcImF1dG9tb3RpdmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MSxcbiAgXCJ0aXRsZVwiOiBcIkJsYWNrIE1vdG9yYmlrZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRW5naW5lIFR5cGU6V2V0IHN1bXAsIFNpbmdsZSBDeWxpbmRlciwgRm91ciBTdHJva2UsIFR3byBWYWx2ZXMsIEFpciBDb29sZWQgd2l0aCBTT0hDIChTaW5nbGUgT3ZlciBIZWFkIENhbSkgQ2hhaW4gRHJpdmUgQm9yZSAmIFN0cm9rZTo0Ny4wIHggNDkuNSBNTVwiLFxuICBcInByaWNlXCI6IDU2OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNjMsXG4gIFwicmF0aW5nXCI6IDQuMDQsXG4gIFwic3RvY2tcIjogMTE1LFxuICBcImJyYW5kXCI6IFwiTUVUUk8gNzBjYyBNb3RvcmN5Y2xlIC0gTVI3MFwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkyLFxuICBcInRpdGxlXCI6IFwiSE9UIFNBTEUgSU4gRVVST1BFIGVsZWN0cmljIHJhY2luZyBtb3RvcmN5Y2xlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIT1QgU0FMRSBJTiBFVVJPUEUgZWxlY3RyaWMgcmFjaW5nIG1vdG9yY3ljbGUgZWxlY3RyaWMgbW90b3JjeWNsZSBmb3Igc2FsZSBhZHVsdCBlbGVjdHJpYyBtb3RvcmN5Y2xlc1wiLFxuICBcInByaWNlXCI6IDkyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNCxcbiAgXCJyYXRpbmdcIjogNC4xOSxcbiAgXCJzdG9ja1wiOiAyMixcbiAgXCJicmFuZFwiOiBcIkJSQVZFIEJVTExcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvNC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5MyxcbiAgXCJ0aXRsZVwiOiBcIkF1dG9tYXRpYyBNb3RvciBHYXMgTW90b3JjeWNsZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjE1MGNjIDQtU3Ryb2tlIE1vdG9yY3ljbGUgQXV0b21hdGljIE1vdG9yIEdhcyBNb3RvcmN5Y2xlcyBTY29vdGVyIG1vdG9yY3ljbGVzIDE1MGNjIHNjb290ZXJcIixcbiAgXCJwcmljZVwiOiAxMDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjM0LFxuICBcInJhdGluZ1wiOiA0Ljg0LFxuICBcInN0b2NrXCI6IDEyNyxcbiAgXCJicmFuZFwiOiBcInNob2NrIGFic29yYmVyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTQsXG4gIFwidGl0bGVcIjogXCJuZXcgYXJyaXZhbHMgRmFzaGlvbiBtb3RvY3Jvc3MgZ29nZ2xlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwibmV3IGFycml2YWxzIEZhc2hpb24gbW90b2Nyb3NzIGdvZ2dsZXMgbW90b3JjeWNsZSBtb3RvY3Jvc3MgcmFjaW5nIG1vdG9yY3ljbGVcIixcbiAgXCJwcmljZVwiOiA5MDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuODUsXG4gIFwicmF0aW5nXCI6IDQuMDYsXG4gIFwic3RvY2tcIjogMTA5LFxuICBcImJyYW5kXCI6IFwiSklFUE9MTFlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk1LFxuICBcInRpdGxlXCI6IFwiV2hvbGVzYWxlIGNhcmdvIGxhc2hpbmcgQmVsdFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2hvbGVzYWxlIGNhcmdvIGxhc2hpbmcgQmVsdCBUaWUgRG93biBlbmQgUmF0Y2hldCBzdHJhcCBjdXN0b21pemVkIHN0cmFwIDI1bW0gbW90b3JjeWNsZSAxNTAwa2dzIHdpdGggcnViYmVyIGhhbmRsZVwiLFxuICBcInByaWNlXCI6IDkzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNjcsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTQ0LFxuICBcImJyYW5kXCI6IFwiWGlhbmdsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk2LFxuICBcInRpdGxlXCI6IFwibGlnaHRpbmcgY2VpbGluZyBraXRjaGVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaG9sZXNhbGUgc2xpbSBoYW5naW5nIGRlY29yYXRpdmUga2lkIHJvb20gbGlnaHRpbmcgY2VpbGluZyBraXRjaGVuIGNoYW5kZWxpZXJzIHBlbmRhbnQgbGlnaHQgbW9kZXJuXCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE0Ljg5LFxuICBcInJhdGluZ1wiOiA0LjgzLFxuICBcInN0b2NrXCI6IDk2LFxuICBcImJyYW5kXCI6IFwibGlnaHRpbmdicmlsbGlhbmNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk3LFxuICBcInRpdGxlXCI6IFwiTWV0YWwgQ2VyYW1pYyBGbG93ZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1ldGFsIENlcmFtaWMgRmxvd2VyIENoYW5kZWxpZXIgSG9tZSBMaWdodGluZyBBbWVyaWNhbiBWaW50YWdlIEhhbmdpbmcgTGlnaHRpbmcgUGVuZGFudCBMYW1wXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjk0LFxuICBcInJhdGluZ1wiOiA0LjkzLFxuICBcInN0b2NrXCI6IDE0NixcbiAgXCJicmFuZFwiOiBcIklmZWkgSG9tZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTgsXG4gIFwidGl0bGVcIjogXCIzIGxpZ2h0cyBsbmRlbnBhbnQga2l0Y2hlbiBpc2xhbmdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjMgbGlnaHRzIGxuZGVucGFudCBraXRjaGVuIGlzbGFuZyBkaW5pbmcgcm9vbSBwZW5kYW50IHJpY2UgcGFwZXIgY2hhbmRlbGllciBjb250ZW1wb3JhcnkgbGVkIHBlbmRhbnQgbGlnaHQgbW9kZXJuIGNoYW5kZWxpZXJcIixcbiAgXCJwcmljZVwiOiAzNCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNS45MixcbiAgXCJyYXRpbmdcIjogNC45OSxcbiAgXCJzdG9ja1wiOiA0NCxcbiAgXCJicmFuZFwiOiBcIkRBREFXVVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5OSxcbiAgXCJ0aXRsZVwiOiBcIkFtZXJpY2FuIFZpbnRhZ2UgV29vZCBQZW5kYW50IExpZ2h0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbWVyaWNhbiBWaW50YWdlIFdvb2QgUGVuZGFudCBMaWdodCBGYXJtaG91c2UgQW50aXF1ZSBIYW5naW5nIExhbXAgTGFtcGFyYSBDb2xnYW50ZVwiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4Ljg0LFxuICBcInJhdGluZ1wiOiA0LjMyLFxuICBcInN0b2NrXCI6IDEzOCxcbiAgXCJicmFuZFwiOiBcIklmZWkgSG9tZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMDAsXG4gIFwidGl0bGVcIjogXCJDcnlzdGFsIGNoYW5kZWxpZXIgbWFyaWEgdGhlcmVzYSBmb3IgMTIgbGlnaHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyeXN0YWwgY2hhbmRlbGllciBtYXJpYSB0aGVyZXNhIGZvciAxMiBsaWdodFwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNixcbiAgXCJyYXRpbmdcIjogNC43NCxcbiAgXCJzdG9ja1wiOiAxMzMsXG4gIFwiYnJhbmRcIjogXCJZSU9TSVwiLFxuICBcImNhdGVnb3J5XCI6IFwibGlnaHRpbmdcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9XG4gIF0sXG4gIFwidG90YWxcIjogMTAwLFxuICBcInNraXBcIjogMCxcbiAgXCJsaW1pdFwiOiAxMDBcbiAgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3JvdXRpbmcnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYWluLXRlbXBsYXRlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVhZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc3RvcmUtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2Vycm9yLXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYXJ0LXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9yYW5nZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2ZpbHRlckl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9nb29kcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZXcnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zb3J0aW5nJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9