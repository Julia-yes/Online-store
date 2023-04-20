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
/* harmony import */ var _scripts_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/components/header.ts");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-page */ "./src/components/modal-page.ts");






const defaultProductsPerPage = '4';
const defaultPage = '1';
function renderCartPage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = '';
        if (localStorage.cart && JSON.parse(localStorage.cart).products.length) {
            const productsBlock = renderProductsBlock();
            const summaryBlock = renderSummaryBlock();
            const productsSummaryBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('products-summary');
            productsSummaryBlock.append(productsBlock, summaryBlock);
            const paginationBlock = renderPagination();
            content.append(productsSummaryBlock, paginationBlock);
            (0,_modal_page__WEBPACK_IMPORTED_MODULE_4__.addListenerButtonBuy)();
        }
        else {
            renderEmptyCartPage();
        }
    }
    const modalPage = localStorage.getItem('modal');
    if (modalPage === "true") {
        localStorage.setItem('modal', "false");
        (0,_modal_page__WEBPACK_IMPORTED_MODULE_4__.renderModalPage)();
    }
}
function renderProductsBlock() {
    const productsBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('products');
    const productsHeader = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('products__header', 'Products');
    productsBlock.append(productsHeader);
    renderProductsList(productsBlock);
    return productsBlock;
}
function renderProductsList(productsBlock) {
    if (!productsBlock)
        productsBlock = document.querySelector('.products');
    let productsList = document.querySelector('.products-list');
    if (productsList)
        productsList.remove();
    productsList = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('products-list');
    const cartProducts = JSON.parse(localStorage.cart);
    const productsPerPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('itemsPerPage') || +defaultProductsPerPage;
    const currentPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('page') || +defaultPage;
    const startIdx = productsPerPage * (currentPage - 1);
    for (let i = startIdx; i < cartProducts.products.length && i < startIdx + productsPerPage; i++) {
        const currentProduct = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(cartProducts.products[i].id);
        if (currentProduct) {
            const product = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('cart__product');
            const productOrder = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__order', `${i + 1}`);
            const productThumbnail = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__thumbnail');
            const productThumbnailImg = document.createElement('img');
            productThumbnailImg.className = 'product__thumbnail-img';
            productThumbnailImg.src = currentProduct.thumbnail;
            productThumbnail.append(productThumbnailImg);
            const productData = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data');
            const productDataName = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data-name', currentProduct.title);
            const productDescription = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data-description', currentProduct.description);
            const productRating = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data-rating', `Rating: ${currentProduct.rating} ★`);
            const productDiscount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data-discount', `Discount: ${currentProduct.discountPercentage}%`);
            productData.append(productDataName, productDescription, productRating, productDiscount);
            const productBuyData = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__buy-data');
            const productStock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__stock', `Stock: `);
            const productStockValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__stock-value', currentProduct.stock);
            productStock.append(productStockValue);
            const amountControl = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product-amount-control');
            amountControl.dataset.productId = `${currentProduct.id}`;
            const increaseAmount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product-amount__el product-amount__increase', '+');
            const currentAmount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product-amount__current', cartProducts.products[i].amount);
            const decreaseAmount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product-amount__el product-amount__decrease', '-');
            const productPrice = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__price', `Price: `);
            const productPriceValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__price-value', `${currentProduct.price * cartProducts.products[i].amount}`);
            productPrice.append(productPriceValue);
            amountControl.append(increaseAmount, currentAmount, decreaseAmount, productPrice);
            productBuyData.append(productStock, amountControl, productPrice);
            product.append(productOrder, productThumbnail, productData, productBuyData);
            productsList.append(product);
            setChangeAmountListener([increaseAmount, decreaseAmount]);
        }
    }
    productsBlock === null || productsBlock === void 0 ? void 0 : productsBlock.append(productsList);
}
function setChangeAmountListener(items) {
    items.forEach(el => {
        el.addEventListener('click', (e) => {
            var _a, _b, _c;
            const currentElement = e.target;
            const productAmountControlBlock = (currentElement).parentNode;
            const productBuyDataBlock = (productAmountControlBlock).parentNode;
            const productId = productAmountControlBlock.dataset.productId;
            if (productId) {
                const cartProductId = _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].getCartProductId(+productId);
                const currentAmount = productAmountControlBlock.querySelector('.product-amount__current');
                let isUpdatedPageEmpty = false;
                if (currentElement.classList.contains('product-amount__increase')) {
                    const productStockValue = (_b = (_a = productBuyDataBlock.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.product__stock-value')) === null || _b === void 0 ? void 0 : _b.textContent;
                    if (productStockValue && currentAmount && currentAmount.textContent && +productStockValue > +currentAmount.textContent)
                        _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].addProduct(+productId);
                    else
                        return;
                }
                else {
                    if (cartProductId !== undefined && _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products[cartProductId].amount === 1) {
                        (_c = productBuyDataBlock.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
                    }
                    _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].removeProduct(+productId);
                    const productsPerPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('itemsPerPage') || +defaultProductsPerPage;
                    let currentPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('page') || +defaultPage;
                    if (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length === 0) {
                        const content = document.querySelector('.main');
                        if (content) {
                            renderEmptyCartPage();
                            (0,_header__WEBPACK_IMPORTED_MODULE_3__.updateHeader)();
                            return;
                        }
                    }
                    if (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length <= productsPerPage * (currentPage - 1)) {
                        currentPage--;
                        (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.setUrlParameter)('page', currentPage);
                        const currentPageValue = document.querySelector('.switch-page__current');
                        if (currentPageValue === null || currentPageValue === void 0 ? void 0 : currentPageValue.textContent)
                            currentPageValue.textContent = '' + currentPage;
                        isUpdatedPageEmpty = true;
                    }
                }
                (0,_header__WEBPACK_IMPORTED_MODULE_3__.updateHeader)();
                const summaryAmount = document.querySelector('.content__amount-value');
                const summaryPrice = document.querySelector('.content__price-value');
                if (currentAmount && summaryAmount && summaryPrice) {
                    if (cartProductId !== undefined) {
                        if (JSON.parse(localStorage.cart).products && JSON.parse(localStorage.cart).products.length) {
                            if (!isUpdatedPageEmpty) {
                                currentAmount.textContent = "" + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products[cartProductId].amount;
                                summaryAmount.textContent = "" + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalItems;
                                summaryPrice.textContent = "" + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice.toFixed(2);
                            }
                            const newProductsPriceValue = document.querySelector('.content__price-value-new');
                            if (newProductsPriceValue && (newProductsPriceValue === null || newProductsPriceValue === void 0 ? void 0 : newProductsPriceValue.textContent)) {
                                newProductsPriceValue.textContent = '' + (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (document.querySelectorAll('.promo-table__row').length / 10))).toFixed(2);
                            }
                        }
                        else {
                            const content = document.querySelector('.main');
                            if (content)
                                renderEmptyCartPage();
                        }
                    }
                }
            }
            renderProductsList();
        });
    });
}
function renderSummaryBlock() {
    const summaryBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('summary');
    const summaryHeader = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('summary__header', 'Summary');
    const summaryContent = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content');
    const totalProductsAmount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__amount', `Products: `);
    const totalProductsAmountValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__amount-value', _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalItems);
    totalProductsAmount.append(totalProductsAmountValue);
    const totalProductsPrice = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price', `Total: `);
    const totalProductsPriceValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price-value', _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice.toFixed(2));
    totalProductsPrice.append(totalProductsPriceValue);
    summaryContent.append(totalProductsAmount, totalProductsPrice);
    const promoBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo');
    const promoInput = document.createElement('input');
    promoInput.className = 'promo__input';
    const appliedPromocodes = [];
    const promocodes = ['dima', 'julia'];
    promoInput.addEventListener('input', (e) => {
        var _a;
        const inputValue = e.target.value;
        if (promocodes.includes(inputValue)) {
            if (appliedPromocodes.includes(inputValue))
                return;
            const addButton = document.createElement('button');
            addButton.textContent = 'Apply';
            addButton.className = 'promo__add';
            addButton.addEventListener('click', () => {
                var _a;
                let promoTable = document.querySelector('.promo-table');
                appliedPromocodes.push(inputValue);
                (_a = promoBlock.querySelector('.promo__add')) === null || _a === void 0 ? void 0 : _a.remove();
                if (!promoTable) {
                    promoTable = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table');
                    const promoTableHeader = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table__header', 'Applied Promocodes:');
                    promoTable.append(promoTableHeader);
                }
                const promoCodeRow = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table__row');
                const promoCodeValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table__row-value', inputValue);
                const promoAmount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table__row-amount', '10%');
                const promoRemoveButton = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table__row-remove', 'x');
                promoCodeRow.append(promoCodeValue, promoAmount, promoRemoveButton);
                promoTable.append(promoCodeRow);
                promoBlock.append(promoTable);
                const originalPrice = document.querySelector('.content__price');
                originalPrice.style.textDecoration = 'line-through';
                let newProductsPrice = document.querySelector('.content__price-new');
                if (newProductsPrice) {
                    const newProductsPriceValue = document.querySelector('.content__price-value-new');
                    if (newProductsPriceValue) {
                        newProductsPriceValue.textContent = '' + (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (appliedPromocodes.length / 10))).toFixed(2);
                    }
                }
                else {
                    newProductsPrice = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price-new', `Total: `);
                    const newProductsPriceValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price-value-new', (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (appliedPromocodes.length / 10))).toFixed(2));
                    newProductsPrice.append(newProductsPriceValue);
                }
                const contentBlock = document.querySelector('.content');
                contentBlock === null || contentBlock === void 0 ? void 0 : contentBlock.append(newProductsPrice);
                promoRemoveButton.addEventListener('click', (e) => {
                    var _a;
                    const parentPromoNode = e.target.parentNode;
                    const promocodeToRemove = parentPromoNode === null || parentPromoNode === void 0 ? void 0 : parentPromoNode.textContent;
                    if (promocodeToRemove) {
                        appliedPromocodes.splice(appliedPromocodes.indexOf(promocodeToRemove), 1);
                    }
                    if (appliedPromocodes.length) {
                        parentPromoNode === null || parentPromoNode === void 0 ? void 0 : parentPromoNode.remove();
                        if (newProductsPrice) {
                            const newProductsPriceValue = document.querySelector('.content__price-value-new');
                            if (newProductsPriceValue) {
                                newProductsPriceValue.textContent = '' + (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (appliedPromocodes.length / 10))).toFixed(2);
                            }
                        }
                    }
                    else {
                        (_a = promoBlock.querySelector('.promo-table')) === null || _a === void 0 ? void 0 : _a.remove();
                        originalPrice.style.textDecoration = '';
                        newProductsPrice === null || newProductsPrice === void 0 ? void 0 : newProductsPrice.remove();
                    }
                });
            });
            promoInput.after(addButton);
        }
        else if (promoBlock.querySelector('.promo__add')) {
            (_a = promoBlock.querySelector('.promo__add')) === null || _a === void 0 ? void 0 : _a.remove();
        }
    });
    const promoHint = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo__hint', `Promocodes: `);
    const promoHintValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo__hint-value', promocodes.join(', '));
    promoHint.append(promoHintValue);
    promoBlock.append(promoHint, promoInput);
    const buyButton = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('button');
    buyButton.className = 'button product-page__button product-page__button_buy cart-buy__button';
    buyButton.textContent = 'Buy Now';
    summaryBlock.append(summaryHeader, summaryContent, promoBlock, buyButton);
    return summaryBlock;
}
function renderPagination() {
    const paginationBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('pagination');
    let currentPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('page') || 1;
    const itemsPerPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('itemsPerPage') || +defaultProductsPerPage;
    const itemsPerPageBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('pagination__per-page', 'Items per page: ');
    const itemsPerPageValue = document.createElement('input');
    itemsPerPageValue.type = 'number';
    itemsPerPageValue.className = 'pagination__per-page-value';
    itemsPerPageValue.value = '' + itemsPerPage;
    itemsPerPageBlock.append(itemsPerPageValue);
    itemsPerPageValue.addEventListener('input', (e) => {
        const inputNewValue = e.target.value;
        if (inputNewValue === '')
            return;
        currentPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('page') || 1;
        if (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length < +inputNewValue * currentPage) {
            currentPage = Math.ceil(_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length / +inputNewValue);
            const currentPageValue = document.querySelector('.switch-page__current');
            if (currentPageValue === null || currentPageValue === void 0 ? void 0 : currentPageValue.textContent)
                currentPageValue.textContent = '' + currentPage;
            (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.setUrlParameter)('page', currentPage);
        }
        (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.setUrlParameter)('itemsPerPage', inputNewValue);
        renderProductsList();
    });
    const switchPageBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('switch-page');
    const switchText = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('switch-page__text', 'Page: ');
    const switchPrev = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('switch-page__control switch-page__prev', '<');
    const currentPageValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('switch-page__current', currentPage);
    const switchNext = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('switch-page__control switch-page__next', '>');
    switchPageBlock.append(switchText, switchPrev, currentPageValue, switchNext);
    const pageControlElements = [switchPrev, switchNext];
    pageControlElements.forEach((el) => {
        el.addEventListener('click', (e) => {
            const currentPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('page') || +defaultPage;
            if (currentPage) {
                if (e.target.classList.contains('switch-page__prev')) {
                    if (currentPage === 1) {
                        return;
                    }
                    (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.setUrlParameter)('page', +currentPage - 1);
                    currentPageValue.textContent = `${+currentPage - 1}`;
                    renderProductsList();
                }
                else {
                    const productsPerPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('itemsPerPage') || +defaultProductsPerPage;
                    if (currentPage * productsPerPage < _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length) {
                        (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.setUrlParameter)('page', +currentPage + 1);
                        currentPageValue.textContent = `${+currentPage + 1}`;
                        renderProductsList();
                    }
                }
            }
        });
    });
    paginationBlock.append(itemsPerPageBlock, switchPageBlock);
    return paginationBlock;
}
function renderEmptyCartPage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = '';
        const emptyBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('cart__empty', 'Cart is empty');
        content.append(emptyBlock);
    }
}


/***/ }),

/***/ "./src/components/clases.ts":
/*!**********************************!*\
  !*** ./src/components/clases.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
class CreateComponent {
    constructor(parentNode = null, tag = "div", className = [], content = "") {
        this.element = document.createElement(tag);
        this.element.classList.add(...className);
        this.element.innerHTML = `${content}`;
        if (parentNode) {
            parentNode.appendChild(this.element);
        }
    }
    destroy() {
        this.element.remove();
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
/* harmony import */ var _components_clases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clases */ "./src/components/clases.ts");







function renderCategories() {
    const categoriesArea = document.querySelector('.filter__category_area');
    const categories = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.categories;
    const categoriesAll = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.allProducts.categories;
    let categoryInner = ``;
    for (const key in categories) {
        categoryInner += `<label class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_category' value="${key}" name="${key}" data-param = 'category' data-quantity="${categories[key].length}">
      <div class='category__title'>${key}&ensp;</div>
      <div class='category__quantity filter__quantity' data-param ="${key}">(${categories[key].length}/</div><span>${categoriesAll[key].length})</span>
    </label>`;
    }
    const categoriesBlock = new _components_clases__WEBPACK_IMPORTED_MODULE_6__.CreateComponent(categoriesArea, "div", ["category__container"], categoryInner);
}
function renderBrands() {
    const brandsArea = document.querySelector('.filter__brand_area');
    const brands = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.brands;
    const brandsAll = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.allProducts.brands;
    let brandsInner = ``;
    for (const key in brands) {
        brandsInner += `<label class='filter__string'>
      <input type = 'checkbox' class='filter__checkbox filter__checkbox_brand' value="${key}" name="${key}" data-param = 'brand' data-quantity="${brands[key].length}">
      <div class='brand__title'>${key}&ensp;</div>
      <div class='brand__quantity filter__quantity' data-param ="${key}">(${brands[key].length}/</div><span>${brandsAll[key].length})</span>
    </label>`;
    }
    const brandsBlock = new _components_clases__WEBPACK_IMPORTED_MODULE_6__.CreateComponent(brandsArea, "div", ["brand__container"], brandsInner);
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
    const param = event.currentTarget.dataset.param;
    const newFilter = event.currentTarget.value;
    const side = event.currentTarget.dataset.side;
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
                const ind = filter[param].indexOf(newFilter);
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
    const filterDownloaded = new _scripts_filter__WEBPACK_IMPORTED_MODULE_1__["default"];
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
    _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.applyFilter(filterDownloaded);
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
    for (const key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.brands) {
        filteredBrands.push(key);
    }
    quantityAreaBrands.forEach(item => {
        if (filteredBrands.includes(item.dataset.param)) {
            for (const key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.brands) {
                if (key == item.dataset.param) {
                    item.innerHTML = `(${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.brands[key].length}/`;
                }
            }
        }
        else {
            item.innerHTML = '(0/';
        }
    });
    const quantityAreaCategory = document.querySelectorAll('.category__quantity');
    const filteredCategories = [];
    for (const key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.categories) {
        filteredCategories.push(key);
    }
    quantityAreaCategory.forEach(item => {
        if (filteredCategories.includes(item.dataset.param)) {
            for (const key in _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.categories) {
                if (key == item.dataset.param) {
                    item.innerHTML = `(${_scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__.products.categories[key].length}/`;
                }
            }
        }
        else {
            item.innerHTML = '(0/';
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
    const copyTextarea = document.createElement("textarea");
    copyTextarea.style.position = "fixed";
    copyTextarea.style.opacity = "0";
    copyTextarea.textContent = url;
    document.body.appendChild(copyTextarea);
    copyTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(copyTextarea);
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
/* harmony import */ var _components_clases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/clases */ "./src/components/clases.ts");

function renderFooter() {
    const footerArea = document.querySelector(".footer");
    const content = `<div class="wrapper">
    <div class="footer__inner">
      <div class="footer__left">
        <div class="footer__text">Made by </div>
        <div class="footer__links">
          <a href="https://github.com/Julia-yes" class="footer__link"> Julia Bolonikova & </a>
          <a href="https://github.com/mordobiv" class="footer__link"> &thinsp; Dzmitry Aniskovich</a>
        </div>
        <div class="footer__year">2022</div>
      </div>
      <div class="footer__school">
        <a href="https://rs.school/js/" class="footer__school-name">
          <img alt="rs-school" src="../src/assets/img/rsLogo.svg" class="footer__school-img">
        </a>
      </div>
    </div>
  </div>`;
    const footer = new _components_clases__WEBPACK_IMPORTED_MODULE_0__.CreateComponent(footerArea, "div", ["wrapper"], content);
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
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-page */ "./src/components/product-page.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-page */ "./src/components/modal-page.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/components/header.ts");






function renderGoods() {
    let localStorageCart;
    if (localStorage.cart) {
        localStorageCart = JSON.parse(localStorage.cart);
    }
    const goodsArea = document.querySelector('.goods__area');
    const goods = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].products;
    let goodsInner = ``;
    if (goods.length == 0) {
        goodsInner += `<div class='goods__empty'> No products found </div>`;
    }
    else {
        for (const key in goods) {
            const good = goods[key];
            let buttonStr = `<button class='card__button card__button_cart card__button_add' data-goodID = "${good.id}">Add to cart</button>`;
            if (localStorage.cart) {
                for (let i = 0; i < localStorageCart.products.length; i++) {
                    if (+localStorageCart.products[i].id === good.id) {
                        buttonStr = `<button class='card__button card__button_cart card__button_delete' data-goodID = "${good.id}">Delete from cart</button>`;
                    }
                }
            }
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
          ${buttonStr}
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
            const goodID = e.currentTarget.dataset.goodid;
            (0,_routing__WEBPACK_IMPORTED_MODULE_3__.addPathUrl)(`/product/${goodID}`);
            (0,_product_page__WEBPACK_IMPORTED_MODULE_2__.renderProductPage)();
            (0,_modal_page__WEBPACK_IMPORTED_MODULE_4__.addListenerButtonBuy)();
        });
    });
    const buttonCart = document.querySelectorAll(".card__button_cart");
    buttonCart.forEach(button => {
        button.addEventListener('click', (e) => { proceedAddToCart(e.currentTarget); });
    });
    (0,_header__WEBPACK_IMPORTED_MODULE_5__.updateHeader)();
}
function proceedAddToCart(e) {
    const goodID = Number(e.dataset.goodid);
    if (goodID) {
        if (e.classList.contains('card__button_add')) {
            _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].addProduct(goodID);
            e.classList.remove('card__button_add');
            e.classList.add('card__button_delete');
            e.textContent = "Delete from cart";
        }
        else {
            _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].removeProductCompletely(goodID);
            e.classList.remove('card__button_delete');
            e.classList.add('card__button_add');
            e.textContent = 'Add to cart';
        }
    }
    (0,_header__WEBPACK_IMPORTED_MODULE_5__.updateHeader)();
}


/***/ }),

/***/ "./src/components/header.ts":
/*!**********************************!*\
  !*** ./src/components/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeader": () => (/* binding */ renderHeader),
/* harmony export */   "updateHeader": () => (/* binding */ updateHeader)
/* harmony export */ });
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");

function renderHeader() {
    const headerArea = document.querySelector(".header");
    if (headerArea) {
        headerArea.innerHTML = `<div class="wrapper">
    <div class="header__template">
      <a href='/'><img class="header__logo" alt="shop logo" src="../src/assets/img/logo.png"></a>
      <div class="header__price">
      Cart total&#58; &#32;
      <span class="header__value">0</span>&#36
      </div>
      <a href='/cart' class="header__cart">
        <img class="header__cart_img" alt="cart" src="../src/assets/img/cart.png">
        <div class="header__cart_quantity">0</div>
      </a>
    </div>
  </div>`;
    }
    updateHeader();
}
function updateHeader() {
    if (localStorage.cart) {
        const headerPrice = document.querySelector('.header__value');
        const cartAmount = document.querySelector('.header__cart_quantity');
        if (headerPrice && cartAmount) {
            if (_scripts_cart__WEBPACK_IMPORTED_MODULE_0__.cart === null || _scripts_cart__WEBPACK_IMPORTED_MODULE_0__.cart === void 0 ? void 0 : _scripts_cart__WEBPACK_IMPORTED_MODULE_0__.cart.products.length) {
                headerPrice.textContent = '' + _scripts_cart__WEBPACK_IMPORTED_MODULE_0__.cart.totalPrice;
                cartAmount.textContent = '' + _scripts_cart__WEBPACK_IMPORTED_MODULE_0__.cart.totalItems;
            }
            else {
                headerPrice.textContent = '0';
                cartAmount.textContent = '0';
            }
        }
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
      <footer class = 'footer'></footer>
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
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.ts");
/* harmony import */ var _components_clases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/clases */ "./src/components/clases.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function renderModalPage() {
    const main = document.querySelector('.main');
    const content = `<form class="modal-page__wrapper">
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
    const modalPage = new _components_clases__WEBPACK_IMPORTED_MODULE_2__.CreateComponent(main, "section", ["modal-page"], content);
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
    let ind = value.indexOf("/");
    if (ind != -1) {
        value = value.slice(0, ind) + value.slice(ind + 1);
    }
    if (value.length > 2) {
        e.currentTarget.value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    else {
        e.currentTarget.value = `${value.slice(0, 2)}`;
    }
}
function redirectToCart() {
    document.location.href = "/cart";
}
function checkProductInCart() {
    const arr = location.pathname.split("/");
    const id = +arr[arr.length - 1];
    const buttonAdd = document.querySelector(".product-page__button_left");
    if (buttonAdd === null || buttonAdd === void 0 ? void 0 : buttonAdd.innerHTML.startsWith("Add")) {
        _scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"].addProduct(id);
        (0,_header__WEBPACK_IMPORTED_MODULE_1__.updateHeader)();
    }
}
function addListenerButtonBuy() {
    return __awaiter(this, void 0, void 0, function* () {
        const buttonBuy = document.querySelector(".product-page__button_buy");
        buttonBuy === null || buttonBuy === void 0 ? void 0 : buttonBuy.addEventListener("click", () => {
            checkProductInCart();
            localStorage.setItem('modal', "true");
            redirectToCart();
        });
    });
}
function addListenerConfirm() {
    const buttonConfirm = document.querySelector(".modal-page__button");
    buttonConfirm === null || buttonConfirm === void 0 ? void 0 : buttonConfirm.addEventListener("click", (e) => {
        e.preventDefault();
        checkCorrectInput();
    });
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
    const value = event.currentTarget.value;
    const img = document.querySelector(".credit-card__logo");
    if (value.startsWith("3")) {
        img.src = "../src/assets/img/card_am.png";
    }
    else if (value.startsWith("4")) {
        img.src = "../src/assets/img/card-v.png";
    }
    else if (value.startsWith("5")) {
        img.src = "../src/assets/img/card-m.png";
    }
    else {
        img.src = "../src/assets/img/card.png";
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
function validateForms(event) {
    const name = event.currentTarget.dataset.name;
    const value = event.currentTarget.value;
    if (name == "name") {
        const result = value.split(" ");
        if (result.length < 2 || result[0].length < 3 || result[1].length < 3) {
            typeError("Error name", name);
        }
        else {
            typeRight(name);
        }
    }
    if (name == "tel") {
        var re = /^[\+][0-9]{9}/;
        if (re.test(value)) {
            typeRight(name);
        }
        else {
            typeError("Error phone number", name);
        }
    }
    if (name == "address") {
        const result = value.split(" ");
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
            const prop = form.dataset.name;
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
    _scripts_cart__WEBPACK_IMPORTED_MODULE_0__["default"].clear();
    (0,_header__WEBPACK_IMPORTED_MODULE_1__.updateHeader)();
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
/* harmony import */ var _scripts_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/helpers */ "./src/scripts/helpers.ts");
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/components/header.ts");




let content;
function renderProductPage() {
    const productId = +window.location.pathname.split('/')[2];
    const product = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProductById(productId);
    if (product) {
        content = document.querySelector('.main');
        if (content) {
            content.innerHTML = '';
            content.classList.add("product-page");
        }
        renderCrumbs(product);
        renderProduct(product);
        renderPurchase(product);
    }
    addListenerPhotos();
}
function renderCrumbs(product) {
    const crumbsBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('crumbs');
    const storeCrumb = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('crumb', "Store");
    const categoryCrumb = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('crumb', product === null || product === void 0 ? void 0 : product.category);
    const brandCrumb = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('crumb', product === null || product === void 0 ? void 0 : product.brand);
    const titleCrumb = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('crumb', product === null || product === void 0 ? void 0 : product.title);
    crumbsBlock.append(storeCrumb, categoryCrumb, brandCrumb, titleCrumb);
    content === null || content === void 0 ? void 0 : content.append(crumbsBlock);
}
function renderProduct(product) {
    const productBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('product');
    const photosBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('photos');
    const mainPhotoBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('photos__main');
    const mainPhoto = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('main-photo');
    const mainPhotoImg = document.createElement('img');
    mainPhotoImg.className = 'main-photo__img';
    mainPhotoImg.src = product.thumbnail;
    mainPhoto.append(mainPhotoImg);
    mainPhotoBlock.append(mainPhoto);
    const smallPhotosBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('small-photos');
    for (const image of product.images) {
        if (image === product.thumbnail)
            continue;
        const smallPhoto = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('small-photo');
        const smallPhotoImg = document.createElement('img');
        smallPhotoImg.src = image;
        smallPhoto.append(smallPhotoImg);
        smallPhotosBlock.append(smallPhoto);
    }
    photosBlock.append(mainPhotoBlock, smallPhotosBlock);
    const productDataBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data');
    const productTitle = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__title data__item', product.title);
    const productCategory = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__category data__item', 'Category: ');
    const productCategoryContent = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__item-content', product.category);
    productCategory.append(productCategoryContent);
    const productBrand = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__brand data__item', 'Brand: ');
    const productBrandContent = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__item-content', product.brand);
    productBrand.append(productBrandContent);
    const productDescription = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__description data__item', 'Description: ');
    const productDescriptionContent = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__item-content', product.description);
    productDescription.append(productDescriptionContent);
    const productStats = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('stats');
    const productRating = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__rating stats__item', 'Rating: ' + product.rating);
    const productStock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__stock stats__item', 'Stock: ' + product.stock);
    productStats.append(productRating, productStock);
    productDataBlock.append(productTitle, productCategory, productBrand, productDescription, productStats);
    productBlock.append(photosBlock, productDataBlock);
    content === null || content === void 0 ? void 0 : content.append(productBlock);
}
function renderPurchase(product) {
    const purchaseBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('purchase');
    const priceBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('price');
    const discount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('price__discount', `Discount: \n${product.discountPercentage}%`);
    const price = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('price__amount', `${product.price}$`);
    priceBlock.append(price, discount);
    const buttonsBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('buttons');
    const buttonAdd = document.createElement('button');
    buttonAdd.className = 'button product-page__button product-page__button_left';
    let isProductInCart = false;
    for (let i = 0; i < _scripts_cart__WEBPACK_IMPORTED_MODULE_2__["default"].products.length; i++) {
        if (_scripts_cart__WEBPACK_IMPORTED_MODULE_2__["default"].products[i].id === product.id) {
            isProductInCart = true;
        }
    }
    if (isProductInCart) {
        buttonAdd.textContent = 'Remove from Cart';
        buttonAdd.classList.add('product-page__button-remove');
    }
    else {
        buttonAdd.textContent = 'Add to Cart';
        buttonAdd.classList.add('product-page__button-add');
    }
    buttonAdd.addEventListener('click', () => {
        isProductInCart = false;
        for (let i = 0; i < _scripts_cart__WEBPACK_IMPORTED_MODULE_2__["default"].products.length; i++) {
            if (_scripts_cart__WEBPACK_IMPORTED_MODULE_2__["default"].products[i].id === product.id) {
                isProductInCart = true;
            }
        }
        if (isProductInCart) {
            _scripts_cart__WEBPACK_IMPORTED_MODULE_2__["default"].removeProductCompletely(product.id);
            buttonAdd.textContent = 'Add to Cart';
            buttonAdd.classList.add('product-page__button-add');
            buttonAdd.classList.remove('product-page__button-remove');
        }
        else {
            _scripts_cart__WEBPACK_IMPORTED_MODULE_2__["default"].addProduct(product.id);
            buttonAdd.textContent = 'Remove from Cart';
            buttonAdd.classList.add('product-page__button-remove');
            buttonAdd.classList.remove('product-page__button-add');
        }
        (0,_header__WEBPACK_IMPORTED_MODULE_3__.updateHeader)();
    });
    const buttonBuy = document.createElement('button');
    buttonBuy.className = 'button product-page__button product-page__button_buy';
    buttonBuy.textContent = 'Buy Now';
    buttonsBlock.append(buttonAdd, buttonBuy);
    purchaseBlock.append(priceBlock, buttonsBlock);
    content === null || content === void 0 ? void 0 : content.append(purchaseBlock);
}
function addListenerPhotos() {
    const photos = document.querySelectorAll('.small-photo');
    photos.forEach(photo => {
        photo.addEventListener('click', (e) => changeMainPhoto(e));
    });
}
function changeMainPhoto(event) {
    const mainPhoto = document.querySelector(".main-photo__img");
    const newSrc = event.target.src;
    if (mainPhoto)
        mainPhoto.src = `${newSrc}`;
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
    const pro = _scripts_data_parser__WEBPACK_IMPORTED_MODULE_0__["default"].getProducts(_assets_data_data__WEBPACK_IMPORTED_MODULE_1__.data.products);
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
        const filter = {
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
                const arr = param.split('=');
                if (arr[1] != "") {
                    filter.category = arr[1].split('*');
                }
            }
            if (param.startsWith("brand")) {
                const arr = param.split('=');
                const arrResult = arr[1].split('*');
                const result = arrResult.map(item => decodeURIComponent(item));
                filter.brand = result;
            }
            if (param.startsWith("price")) {
                const arr = param.split('=');
                if (arr[0].includes("min")) {
                    filter.price.min = Number(arr[1]);
                }
                else {
                    filter.price.max = Number(arr[1]);
                }
            }
            if (param.startsWith("stock")) {
                const arr = param.split('=');
                if (arr[0].includes("min")) {
                    filter.stock.min = Number(arr[1]);
                }
                else {
                    filter.stock.max = Number(arr[1]);
                }
            }
            if (param.startsWith("view")) {
                const arr = param.split('=');
                view = arr[1];
            }
            if (param.startsWith("sort")) {
                const arr = param.split('=');
                sort = arr[1];
            }
            if (param.startsWith("search")) {
                const arr = param.split('=');
                filter.stringSearch = arr[1];
            }
        });
        (0,_filterItem__WEBPACK_IMPORTED_MODULE_4__.changeMainFilter)(filter);
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
    const kvp = document.location.search.slice(1).split('&');
    let i = 0;
    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + '=')) {
            let pair = kvp[i].split('=');
            if (pair[0] == "search" || pair[0] == "sort" || pair[0] == "view" || pair[0] == "price-min" || pair[0] == "price-max" || pair[0] == "stock-min" || pair[0] == "stock-max") {
                pair[1] = value;
            }
            else {
                if (pair[1] == value) {
                    pair = [];
                }
                else if (pair[1].includes(value)) {
                    const valueArr = pair[1].split("*");
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
    const params = kvp.join('&');
    const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + params;
    window.history.pushState({ path: newurl }, '', newurl);
}
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
    const option = event ? event.currentTarget.dataset.option : opt;
    const direction = event ? event.currentTarget.dataset.direction : dir;
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
    const arr = prop.split('-');
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
    const activeButton = ev.currentTarget;
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
/* harmony export */   "cart": () => (/* binding */ cart),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-parser */ "./src/scripts/data-parser.ts");

class Cart {
    constructor() {
        if (localStorage.cart) {
            const localStorageCart = JSON.parse(localStorage.cart);
            this.totalItems = localStorageCart.totalItems;
            this.totalPrice = localStorageCart.totalPrice;
            this.products = localStorageCart.products;
        }
        else {
            this.totalItems = 0;
            this.totalPrice = 0;
            this.products = [];
        }
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
        localStorage.setItem('cart', '');
    }
    removeProductCompletely(id) {
        const cartProductId = this.getCartProductId(id);
        if (cartProductId !== undefined) {
            while (this.products[cartProductId] && this.products[cartProductId].id === id) {
                this.removeProduct(id);
            }
        }
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
/* harmony export */   "allProducts": () => (/* binding */ allProducts),
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
const allProducts = new Products(_assets_data_data__WEBPACK_IMPORTED_MODULE_0__.data.products);
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

/***/ "./src/scripts/helpers.ts":
/*!********************************!*\
  !*** ./src/scripts/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "getUrlParameterValue": () => (/* binding */ getUrlParameterValue),
/* harmony export */   "setUrlParameter": () => (/* binding */ setUrlParameter)
/* harmony export */ });
function createNode(className, textContent) {
    const node = document.createElement('div');
    node.className = className;
    if (textContent)
        node.textContent = '' + textContent;
    return node;
}
function setUrlParameter(key, param) {
    const params = getUrlParameters();
    params[key] = +param;
    let newParams = '';
    for (const prop in params)
        newParams += `?${prop}=${params[prop]}`;
    if (newParams) {
        const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + newParams;
        window.history.pushState({ path: newurl }, '', newurl);
    }
}
function getUrlParameterValue(key) {
    const params = getUrlParameters();
    return params[key];
}
function getUrlParameters() {
    let currentParams = '?';
    const params = {};
    if (window.location.search) {
        currentParams = window.location.search.split('?').splice(1);
        currentParams.forEach((el) => {
            params[el.split('=')[0]] = +el.split('=')[1];
        });
    }
    return params;
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q2Y7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUssR0FBRyxhQUFhO0FBQzlDO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCw2QkFBNkI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsK0NBQStDLHVCQUF1QjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3J6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNRO0FBQ007QUFDUDtBQUNBO0FBQ0k7QUFDQTtBQUNEO0FBQ0c7QUFDRjtBQUNMO0FBQ0s7QUFDTDtBQUNEO0FBQ0U7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC5zY3NzP2NmMGEiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvY2FydC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NsYXNlcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9lcnJvci1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlckl0ZW0udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2dvb2RzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9tYWluLXRlbXBsYXRlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL21vZGFsLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JhbmdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnRpbmcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc3RvcmUtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZGF0YS1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi4vc2NyaXB0cy9jYXJ0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5vZGUgfSBmcm9tIFwiLi4vc2NyaXB0cy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBzZXRVcmxQYXJhbWV0ZXIsIGdldFVybFBhcmFtZXRlclZhbHVlIH0gZnJvbSBcIi4uL3NjcmlwdHMvaGVscGVyc1wiO1xyXG5pbXBvcnQgeyBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSwgcmVuZGVyTW9kYWxQYWdlIH0gZnJvbSBcIi4vbW9kYWwtcGFnZVwiO1xyXG5jb25zdCBkZWZhdWx0UHJvZHVjdHNQZXJQYWdlID0gJzQnO1xyXG5jb25zdCBkZWZhdWx0UGFnZSA9ICcxJztcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhcnRQYWdlKCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5jYXJ0ICYmIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNhcnQpLnByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0c0Jsb2NrID0gcmVuZGVyUHJvZHVjdHNCbG9jaygpO1xyXG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5QmxvY2sgPSByZW5kZXJTdW1tYXJ5QmxvY2soKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNTdW1tYXJ5QmxvY2sgPSBjcmVhdGVOb2RlKCdwcm9kdWN0cy1zdW1tYXJ5Jyk7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzU3VtbWFyeUJsb2NrLmFwcGVuZChwcm9kdWN0c0Jsb2NrLCBzdW1tYXJ5QmxvY2spO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uQmxvY2sgPSByZW5kZXJQYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kKHByb2R1Y3RzU3VtbWFyeUJsb2NrLCBwYWdpbmF0aW9uQmxvY2spO1xyXG4gICAgICAgICAgICBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVuZGVyRW1wdHlDYXJ0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG1vZGFsUGFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RhbCcpO1xyXG4gICAgaWYgKG1vZGFsUGFnZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9kYWwnLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIHJlbmRlck1vZGFsUGFnZSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3RzQmxvY2soKSB7XHJcbiAgICBjb25zdCBwcm9kdWN0c0Jsb2NrID0gY3JlYXRlTm9kZSgncHJvZHVjdHMnKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzSGVhZGVyID0gY3JlYXRlTm9kZSgncHJvZHVjdHNfX2hlYWRlcicsICdQcm9kdWN0cycpO1xyXG4gICAgcHJvZHVjdHNCbG9jay5hcHBlbmQocHJvZHVjdHNIZWFkZXIpO1xyXG4gICAgcmVuZGVyUHJvZHVjdHNMaXN0KHByb2R1Y3RzQmxvY2spO1xyXG4gICAgcmV0dXJuIHByb2R1Y3RzQmxvY2s7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdHNMaXN0KHByb2R1Y3RzQmxvY2spIHtcclxuICAgIGlmICghcHJvZHVjdHNCbG9jaylcclxuICAgICAgICBwcm9kdWN0c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzJyk7XHJcbiAgICBsZXQgcHJvZHVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzLWxpc3QnKTtcclxuICAgIGlmIChwcm9kdWN0c0xpc3QpXHJcbiAgICAgICAgcHJvZHVjdHNMaXN0LnJlbW92ZSgpO1xyXG4gICAgcHJvZHVjdHNMaXN0ID0gY3JlYXRlTm9kZSgncHJvZHVjdHMtbGlzdCcpO1xyXG4gICAgY29uc3QgY2FydFByb2R1Y3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2FydCk7XHJcbiAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgnaXRlbXNQZXJQYWdlJykgfHwgK2RlZmF1bHRQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdwYWdlJykgfHwgK2RlZmF1bHRQYWdlO1xyXG4gICAgY29uc3Qgc3RhcnRJZHggPSBwcm9kdWN0c1BlclBhZ2UgKiAoY3VycmVudFBhZ2UgLSAxKTtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydElkeDsgaSA8IGNhcnRQcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGggJiYgaSA8IHN0YXJ0SWR4ICsgcHJvZHVjdHNQZXJQYWdlOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvZHVjdCA9IHByb2R1Y3RzLmdldFByb2R1Y3RCeUlkKGNhcnRQcm9kdWN0cy5wcm9kdWN0c1tpXS5pZCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBjcmVhdGVOb2RlKCdjYXJ0X19wcm9kdWN0Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcmRlciA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX29yZGVyJywgYCR7aSArIDF9YCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RUaHVtYm5haWwgPSBjcmVhdGVOb2RlKCdwcm9kdWN0X190aHVtYm5haWwnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFRodW1ibmFpbEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBwcm9kdWN0VGh1bWJuYWlsSW1nLmNsYXNzTmFtZSA9ICdwcm9kdWN0X190aHVtYm5haWwtaW1nJztcclxuICAgICAgICAgICAgcHJvZHVjdFRodW1ibmFpbEltZy5zcmMgPSBjdXJyZW50UHJvZHVjdC50aHVtYm5haWw7XHJcbiAgICAgICAgICAgIHByb2R1Y3RUaHVtYm5haWwuYXBwZW5kKHByb2R1Y3RUaHVtYm5haWxJbWcpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2RhdGEnKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdERhdGFOYW1lID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fZGF0YS1uYW1lJywgY3VycmVudFByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSBjcmVhdGVOb2RlKCdwcm9kdWN0X19kYXRhLWRlc2NyaXB0aW9uJywgY3VycmVudFByb2R1Y3QuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UmF0aW5nID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fZGF0YS1yYXRpbmcnLCBgUmF0aW5nOiAke2N1cnJlbnRQcm9kdWN0LnJhdGluZ30g4piFYCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REaXNjb3VudCA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2RhdGEtZGlzY291bnQnLCBgRGlzY291bnQ6ICR7Y3VycmVudFByb2R1Y3QuZGlzY291bnRQZXJjZW50YWdlfSVgKTtcclxuICAgICAgICAgICAgcHJvZHVjdERhdGEuYXBwZW5kKHByb2R1Y3REYXRhTmFtZSwgcHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0UmF0aW5nLCBwcm9kdWN0RGlzY291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QnV5RGF0YSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2J1eS1kYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RTdG9jayA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX3N0b2NrJywgYFN0b2NrOiBgKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFN0b2NrVmFsdWUgPSBjcmVhdGVOb2RlKCdwcm9kdWN0X19zdG9jay12YWx1ZScsIGN1cnJlbnRQcm9kdWN0LnN0b2NrKTtcclxuICAgICAgICAgICAgcHJvZHVjdFN0b2NrLmFwcGVuZChwcm9kdWN0U3RvY2tWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFtb3VudENvbnRyb2wgPSBjcmVhdGVOb2RlKCdwcm9kdWN0LWFtb3VudC1jb250cm9sJyk7XHJcbiAgICAgICAgICAgIGFtb3VudENvbnRyb2wuZGF0YXNldC5wcm9kdWN0SWQgPSBgJHtjdXJyZW50UHJvZHVjdC5pZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBpbmNyZWFzZUFtb3VudCA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3QtYW1vdW50X19lbCBwcm9kdWN0LWFtb3VudF9faW5jcmVhc2UnLCAnKycpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QW1vdW50ID0gY3JlYXRlTm9kZSgncHJvZHVjdC1hbW91bnRfX2N1cnJlbnQnLCBjYXJ0UHJvZHVjdHMucHJvZHVjdHNbaV0uYW1vdW50KTtcclxuICAgICAgICAgICAgY29uc3QgZGVjcmVhc2VBbW91bnQgPSBjcmVhdGVOb2RlKCdwcm9kdWN0LWFtb3VudF9fZWwgcHJvZHVjdC1hbW91bnRfX2RlY3JlYXNlJywgJy0nKTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fcHJpY2UnLCBgUHJpY2U6IGApO1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UHJpY2VWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX3ByaWNlLXZhbHVlJywgYCR7Y3VycmVudFByb2R1Y3QucHJpY2UgKiBjYXJ0UHJvZHVjdHMucHJvZHVjdHNbaV0uYW1vdW50fWApO1xyXG4gICAgICAgICAgICBwcm9kdWN0UHJpY2UuYXBwZW5kKHByb2R1Y3RQcmljZVZhbHVlKTtcclxuICAgICAgICAgICAgYW1vdW50Q29udHJvbC5hcHBlbmQoaW5jcmVhc2VBbW91bnQsIGN1cnJlbnRBbW91bnQsIGRlY3JlYXNlQW1vdW50LCBwcm9kdWN0UHJpY2UpO1xyXG4gICAgICAgICAgICBwcm9kdWN0QnV5RGF0YS5hcHBlbmQocHJvZHVjdFN0b2NrLCBhbW91bnRDb250cm9sLCBwcm9kdWN0UHJpY2UpO1xyXG4gICAgICAgICAgICBwcm9kdWN0LmFwcGVuZChwcm9kdWN0T3JkZXIsIHByb2R1Y3RUaHVtYm5haWwsIHByb2R1Y3REYXRhLCBwcm9kdWN0QnV5RGF0YSk7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzTGlzdC5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIHNldENoYW5nZUFtb3VudExpc3RlbmVyKFtpbmNyZWFzZUFtb3VudCwgZGVjcmVhc2VBbW91bnRdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9kdWN0c0Jsb2NrID09PSBudWxsIHx8IHByb2R1Y3RzQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3RzQmxvY2suYXBwZW5kKHByb2R1Y3RzTGlzdCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0Q2hhbmdlQW1vdW50TGlzdGVuZXIoaXRlbXMpIHtcclxuICAgIGl0ZW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBbW91bnRDb250cm9sQmxvY2sgPSAoY3VycmVudEVsZW1lbnQpLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RCdXlEYXRhQmxvY2sgPSAocHJvZHVjdEFtb3VudENvbnRyb2xCbG9jaykucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcHJvZHVjdEFtb3VudENvbnRyb2xCbG9jay5kYXRhc2V0LnByb2R1Y3RJZDtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FydFByb2R1Y3RJZCA9IGNhcnQuZ2V0Q2FydFByb2R1Y3RJZCgrcHJvZHVjdElkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBbW91bnQgPSBwcm9kdWN0QW1vdW50Q29udHJvbEJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWFtb3VudF9fY3VycmVudCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzVXBkYXRlZFBhZ2VFbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1hbW91bnRfX2luY3JlYXNlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0U3RvY2tWYWx1ZSA9IChfYiA9IChfYSA9IHByb2R1Y3RCdXlEYXRhQmxvY2sucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0X19zdG9jay12YWx1ZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RTdG9ja1ZhbHVlICYmIGN1cnJlbnRBbW91bnQgJiYgY3VycmVudEFtb3VudC50ZXh0Q29udGVudCAmJiArcHJvZHVjdFN0b2NrVmFsdWUgPiArY3VycmVudEFtb3VudC50ZXh0Q29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FydC5hZGRQcm9kdWN0KCtwcm9kdWN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRQcm9kdWN0SWQgIT09IHVuZGVmaW5lZCAmJiBjYXJ0LnByb2R1Y3RzW2NhcnRQcm9kdWN0SWRdLmFtb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoX2MgPSBwcm9kdWN0QnV5RGF0YUJsb2NrLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FydC5yZW1vdmVQcm9kdWN0KCtwcm9kdWN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdpdGVtc1BlclBhZ2UnKSB8fCArZGVmYXVsdFByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgncGFnZScpIHx8ICtkZWZhdWx0UGFnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FydC5wcm9kdWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJFbXB0eUNhcnRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FydC5wcm9kdWN0cy5sZW5ndGggPD0gcHJvZHVjdHNQZXJQYWdlICogKGN1cnJlbnRQYWdlIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXJsUGFyYW1ldGVyKCdwYWdlJywgY3VycmVudFBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1wYWdlX19jdXJyZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZVZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRQYWdlVmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRQYWdlVmFsdWUudGV4dENvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVZhbHVlLnRleHRDb250ZW50ID0gJycgKyBjdXJyZW50UGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNVcGRhdGVkUGFnZUVtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fYW1vdW50LXZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcHJpY2UtdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50QW1vdW50ICYmIHN1bW1hcnlBbW91bnQgJiYgc3VtbWFyeVByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnRQcm9kdWN0SWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2FydCkucHJvZHVjdHMgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2FydCkucHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVXBkYXRlZFBhZ2VFbXB0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBbW91bnQudGV4dENvbnRlbnQgPSBcIlwiICsgY2FydC5wcm9kdWN0c1tjYXJ0UHJvZHVjdElkXS5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCIgKyBjYXJ0LnRvdGFsSXRlbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeVByaWNlLnRleHRDb250ZW50ID0gXCJcIiArIGNhcnQudG90YWxQcmljZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvZHVjdHNQcmljZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3ByaWNlLXZhbHVlLW5ldycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSAmJiAobmV3UHJvZHVjdHNQcmljZVZhbHVlID09PSBudWxsIHx8IG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmV3UHJvZHVjdHNQcmljZVZhbHVlLnRleHRDb250ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZS50ZXh0Q29udGVudCA9ICcnICsgKGNhcnQudG90YWxQcmljZSAqICgxIC0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9tby10YWJsZV9fcm93JykubGVuZ3RoIC8gMTApKSkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyRW1wdHlDYXJ0UGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlclByb2R1Y3RzTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyU3VtbWFyeUJsb2NrKCkge1xyXG4gICAgY29uc3Qgc3VtbWFyeUJsb2NrID0gY3JlYXRlTm9kZSgnc3VtbWFyeScpO1xyXG4gICAgY29uc3Qgc3VtbWFyeUhlYWRlciA9IGNyZWF0ZU5vZGUoJ3N1bW1hcnlfX2hlYWRlcicsICdTdW1tYXJ5Jyk7XHJcbiAgICBjb25zdCBzdW1tYXJ5Q29udGVudCA9IGNyZWF0ZU5vZGUoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IHRvdGFsUHJvZHVjdHNBbW91bnQgPSBjcmVhdGVOb2RlKCdjb250ZW50X19hbW91bnQnLCBgUHJvZHVjdHM6IGApO1xyXG4gICAgY29uc3QgdG90YWxQcm9kdWN0c0Ftb3VudFZhbHVlID0gY3JlYXRlTm9kZSgnY29udGVudF9fYW1vdW50LXZhbHVlJywgY2FydC50b3RhbEl0ZW1zKTtcclxuICAgIHRvdGFsUHJvZHVjdHNBbW91bnQuYXBwZW5kKHRvdGFsUHJvZHVjdHNBbW91bnRWYWx1ZSk7XHJcbiAgICBjb25zdCB0b3RhbFByb2R1Y3RzUHJpY2UgPSBjcmVhdGVOb2RlKCdjb250ZW50X19wcmljZScsIGBUb3RhbDogYCk7XHJcbiAgICBjb25zdCB0b3RhbFByb2R1Y3RzUHJpY2VWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2NvbnRlbnRfX3ByaWNlLXZhbHVlJywgY2FydC50b3RhbFByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgdG90YWxQcm9kdWN0c1ByaWNlLmFwcGVuZCh0b3RhbFByb2R1Y3RzUHJpY2VWYWx1ZSk7XHJcbiAgICBzdW1tYXJ5Q29udGVudC5hcHBlbmQodG90YWxQcm9kdWN0c0Ftb3VudCwgdG90YWxQcm9kdWN0c1ByaWNlKTtcclxuICAgIGNvbnN0IHByb21vQmxvY2sgPSBjcmVhdGVOb2RlKCdwcm9tbycpO1xyXG4gICAgY29uc3QgcHJvbW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBwcm9tb0lucHV0LmNsYXNzTmFtZSA9ICdwcm9tb19faW5wdXQnO1xyXG4gICAgY29uc3QgYXBwbGllZFByb21vY29kZXMgPSBbXTtcclxuICAgIGNvbnN0IHByb21vY29kZXMgPSBbJ2RpbWEnLCAnanVsaWEnXTtcclxuICAgIHByb21vSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBjb25zdCBpbnB1dFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHByb21vY29kZXMuaW5jbHVkZXMoaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGFwcGxpZWRQcm9tb2NvZGVzLmluY2x1ZGVzKGlucHV0VmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FwcGx5JztcclxuICAgICAgICAgICAgYWRkQnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9tb19fYWRkJztcclxuICAgICAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb21vVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvbW8tdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGFwcGxpZWRQcm9tb2NvZGVzLnB1c2goaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBwcm9tb0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5wcm9tb19fYWRkJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGlmICghcHJvbW9UYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21vVGFibGUgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21vVGFibGVIZWFkZXIgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZV9faGVhZGVyJywgJ0FwcGxpZWQgUHJvbW9jb2RlczonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9tb1RhYmxlLmFwcGVuZChwcm9tb1RhYmxlSGVhZGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21vQ29kZVJvdyA9IGNyZWF0ZU5vZGUoJ3Byb21vLXRhYmxlX19yb3cnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21vQ29kZVZhbHVlID0gY3JlYXRlTm9kZSgncHJvbW8tdGFibGVfX3Jvdy12YWx1ZScsIGlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW9BbW91bnQgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZV9fcm93LWFtb3VudCcsICcxMCUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb21vUmVtb3ZlQnV0dG9uID0gY3JlYXRlTm9kZSgncHJvbW8tdGFibGVfX3Jvdy1yZW1vdmUnLCAneCcpO1xyXG4gICAgICAgICAgICAgICAgcHJvbW9Db2RlUm93LmFwcGVuZChwcm9tb0NvZGVWYWx1ZSwgcHJvbW9BbW91bnQsIHByb21vUmVtb3ZlQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIHByb21vVGFibGUuYXBwZW5kKHByb21vQ29kZVJvdyk7XHJcbiAgICAgICAgICAgICAgICBwcm9tb0Jsb2NrLmFwcGVuZChwcm9tb1RhYmxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcHJpY2UnKTtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJpY2Uuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcclxuICAgICAgICAgICAgICAgIGxldCBuZXdQcm9kdWN0c1ByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3ByaWNlLW5ldycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3RzUHJpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9kdWN0c1ByaWNlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcHJpY2UtdmFsdWUtbmV3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0c1ByaWNlVmFsdWUudGV4dENvbnRlbnQgPSAnJyArIChjYXJ0LnRvdGFsUHJpY2UgKiAoMSAtIChhcHBsaWVkUHJvbW9jb2Rlcy5sZW5ndGggLyAxMCkpKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RzUHJpY2UgPSBjcmVhdGVOb2RlKCdjb250ZW50X19wcmljZS1uZXcnLCBgVG90YWw6IGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2NvbnRlbnRfX3ByaWNlLXZhbHVlLW5ldycsIChjYXJ0LnRvdGFsUHJpY2UgKiAoMSAtIChhcHBsaWVkUHJvbW9jb2Rlcy5sZW5ndGggLyAxMCkpKS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0c1ByaWNlLmFwcGVuZChuZXdQcm9kdWN0c1ByaWNlVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRCbG9jayA9PT0gbnVsbCB8fCBjb250ZW50QmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCbG9jay5hcHBlbmQobmV3UHJvZHVjdHNQcmljZSk7XHJcbiAgICAgICAgICAgICAgICBwcm9tb1JlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFByb21vTm9kZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbW9jb2RlVG9SZW1vdmUgPSBwYXJlbnRQcm9tb05vZGUgPT09IG51bGwgfHwgcGFyZW50UHJvbW9Ob2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRQcm9tb05vZGUudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21vY29kZVRvUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRQcm9tb2NvZGVzLnNwbGljZShhcHBsaWVkUHJvbW9jb2Rlcy5pbmRleE9mKHByb21vY29kZVRvUmVtb3ZlKSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcHBsaWVkUHJvbW9jb2Rlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UHJvbW9Ob2RlID09PSBudWxsIHx8IHBhcmVudFByb21vTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50UHJvbW9Ob2RlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvZHVjdHNQcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvZHVjdHNQcmljZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX3ByaWNlLXZhbHVlLW5ldycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZS50ZXh0Q29udGVudCA9ICcnICsgKGNhcnQudG90YWxQcmljZSAqICgxIC0gKGFwcGxpZWRQcm9tb2NvZGVzLmxlbmd0aCAvIDEwKSkpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IHByb21vQmxvY2sucXVlcnlTZWxlY3RvcignLnByb21vLXRhYmxlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxQcmljZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0c1ByaWNlID09PSBudWxsIHx8IG5ld1Byb2R1Y3RzUHJpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5ld1Byb2R1Y3RzUHJpY2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcm9tb0lucHV0LmFmdGVyKGFkZEJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHByb21vQmxvY2sucXVlcnlTZWxlY3RvcignLnByb21vX19hZGQnKSkge1xyXG4gICAgICAgICAgICAoX2EgPSBwcm9tb0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5wcm9tb19fYWRkJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb21vSGludCA9IGNyZWF0ZU5vZGUoJ3Byb21vX19oaW50JywgYFByb21vY29kZXM6IGApO1xyXG4gICAgY29uc3QgcHJvbW9IaW50VmFsdWUgPSBjcmVhdGVOb2RlKCdwcm9tb19faGludC12YWx1ZScsIHByb21vY29kZXMuam9pbignLCAnKSk7XHJcbiAgICBwcm9tb0hpbnQuYXBwZW5kKHByb21vSGludFZhbHVlKTtcclxuICAgIHByb21vQmxvY2suYXBwZW5kKHByb21vSGludCwgcHJvbW9JbnB1dCk7XHJcbiAgICBjb25zdCBidXlCdXR0b24gPSBjcmVhdGVOb2RlKCdidXR0b24nKTtcclxuICAgIGJ1eUJ1dHRvbi5jbGFzc05hbWUgPSAnYnV0dG9uIHByb2R1Y3QtcGFnZV9fYnV0dG9uIHByb2R1Y3QtcGFnZV9fYnV0dG9uX2J1eSBjYXJ0LWJ1eV9fYnV0dG9uJztcclxuICAgIGJ1eUJ1dHRvbi50ZXh0Q29udGVudCA9ICdCdXkgTm93JztcclxuICAgIHN1bW1hcnlCbG9jay5hcHBlbmQoc3VtbWFyeUhlYWRlciwgc3VtbWFyeUNvbnRlbnQsIHByb21vQmxvY2ssIGJ1eUJ1dHRvbik7XHJcbiAgICByZXR1cm4gc3VtbWFyeUJsb2NrO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2luYXRpb24oKSB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uQmxvY2sgPSBjcmVhdGVOb2RlKCdwYWdpbmF0aW9uJyk7XHJcbiAgICBsZXQgY3VycmVudFBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgncGFnZScpIHx8IDE7XHJcbiAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgnaXRlbXNQZXJQYWdlJykgfHwgK2RlZmF1bHRQcm9kdWN0c1BlclBhZ2U7XHJcbiAgICBjb25zdCBpdGVtc1BlclBhZ2VCbG9jayA9IGNyZWF0ZU5vZGUoJ3BhZ2luYXRpb25fX3Blci1wYWdlJywgJ0l0ZW1zIHBlciBwYWdlOiAnKTtcclxuICAgIGNvbnN0IGl0ZW1zUGVyUGFnZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGl0ZW1zUGVyUGFnZVZhbHVlLnR5cGUgPSAnbnVtYmVyJztcclxuICAgIGl0ZW1zUGVyUGFnZVZhbHVlLmNsYXNzTmFtZSA9ICdwYWdpbmF0aW9uX19wZXItcGFnZS12YWx1ZSc7XHJcbiAgICBpdGVtc1BlclBhZ2VWYWx1ZS52YWx1ZSA9ICcnICsgaXRlbXNQZXJQYWdlO1xyXG4gICAgaXRlbXNQZXJQYWdlQmxvY2suYXBwZW5kKGl0ZW1zUGVyUGFnZVZhbHVlKTtcclxuICAgIGl0ZW1zUGVyUGFnZVZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpbnB1dE5ld1ZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgaWYgKGlucHV0TmV3VmFsdWUgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgncGFnZScpIHx8IDE7XHJcbiAgICAgICAgaWYgKGNhcnQucHJvZHVjdHMubGVuZ3RoIDwgK2lucHV0TmV3VmFsdWUgKiBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IE1hdGguY2VpbChjYXJ0LnByb2R1Y3RzLmxlbmd0aCAvICtpbnB1dE5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtcGFnZV9fY3VycmVudCcpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2VWYWx1ZSA9PT0gbnVsbCB8fCBjdXJyZW50UGFnZVZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50UGFnZVZhbHVlLnRleHRDb250ZW50KVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VWYWx1ZS50ZXh0Q29udGVudCA9ICcnICsgY3VycmVudFBhZ2U7XHJcbiAgICAgICAgICAgIHNldFVybFBhcmFtZXRlcigncGFnZScsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VXJsUGFyYW1ldGVyKCdpdGVtc1BlclBhZ2UnLCBpbnB1dE5ld1ZhbHVlKTtcclxuICAgICAgICByZW5kZXJQcm9kdWN0c0xpc3QoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3dpdGNoUGFnZUJsb2NrID0gY3JlYXRlTm9kZSgnc3dpdGNoLXBhZ2UnKTtcclxuICAgIGNvbnN0IHN3aXRjaFRleHQgPSBjcmVhdGVOb2RlKCdzd2l0Y2gtcGFnZV9fdGV4dCcsICdQYWdlOiAnKTtcclxuICAgIGNvbnN0IHN3aXRjaFByZXYgPSBjcmVhdGVOb2RlKCdzd2l0Y2gtcGFnZV9fY29udHJvbCBzd2l0Y2gtcGFnZV9fcHJldicsICc8Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZVZhbHVlID0gY3JlYXRlTm9kZSgnc3dpdGNoLXBhZ2VfX2N1cnJlbnQnLCBjdXJyZW50UGFnZSk7XHJcbiAgICBjb25zdCBzd2l0Y2hOZXh0ID0gY3JlYXRlTm9kZSgnc3dpdGNoLXBhZ2VfX2NvbnRyb2wgc3dpdGNoLXBhZ2VfX25leHQnLCAnPicpO1xyXG4gICAgc3dpdGNoUGFnZUJsb2NrLmFwcGVuZChzd2l0Y2hUZXh0LCBzd2l0Y2hQcmV2LCBjdXJyZW50UGFnZVZhbHVlLCBzd2l0Y2hOZXh0KTtcclxuICAgIGNvbnN0IHBhZ2VDb250cm9sRWxlbWVudHMgPSBbc3dpdGNoUHJldiwgc3dpdGNoTmV4dF07XHJcbiAgICBwYWdlQ29udHJvbEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdwYWdlJykgfHwgK2RlZmF1bHRQYWdlO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXRjaC1wYWdlX19wcmV2JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxQYXJhbWV0ZXIoJ3BhZ2UnLCArY3VycmVudFBhZ2UgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVZhbHVlLnRleHRDb250ZW50ID0gYCR7K2N1cnJlbnRQYWdlIC0gMX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2R1Y3RzTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gZ2V0VXJsUGFyYW1ldGVyVmFsdWUoJ2l0ZW1zUGVyUGFnZScpIHx8ICtkZWZhdWx0UHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSAqIHByb2R1Y3RzUGVyUGFnZSA8IGNhcnQucHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVybFBhcmFtZXRlcigncGFnZScsICtjdXJyZW50UGFnZSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVZhbHVlLnRleHRDb250ZW50ID0gYCR7K2N1cnJlbnRQYWdlICsgMX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9kdWN0c0xpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgcGFnaW5hdGlvbkJsb2NrLmFwcGVuZChpdGVtc1BlclBhZ2VCbG9jaywgc3dpdGNoUGFnZUJsb2NrKTtcclxuICAgIHJldHVybiBwYWdpbmF0aW9uQmxvY2s7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyRW1wdHlDYXJ0UGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5QmxvY2sgPSBjcmVhdGVOb2RlKCdjYXJ0X19lbXB0eScsICdDYXJ0IGlzIGVtcHR5Jyk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmQoZW1wdHlCbG9jayk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENyZWF0ZUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwYXJlbnROb2RlID0gbnVsbCwgdGFnID0gXCJkaXZcIiwgY2xhc3NOYW1lID0gW10sIGNvbnRlbnQgPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGAke2NvbnRlbnR9YDtcclxuICAgICAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVycm9yUGFnZSgpIHtcclxuICAgIGNvbnN0IGVycm9yQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgIGlmIChlcnJvckFyZWEpIHtcclxuICAgICAgICBlcnJvckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2Vycm9yX19ibG9jayc+UEFHRSBOT1QgRk9VTkQgKDQwNCk8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByb2R1Y3RzLCBhbGxQcm9kdWN0cyB9IGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uL3NjcmlwdHMvZmlsdGVyJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHNRdWFudGl0eSB9IGZyb20gJy4vc3RvcmUtcGFnZSc7XHJcbmltcG9ydCB7IGNoYW5nZVJhbmdlLCBjaGFuZ2VQcmljZVJhbmdlLCBjaGFuZ2VTdG9ja1JhbmdlIH0gZnJvbSAnLi9yYW5nZSc7XHJcbmltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSBcIi4vcm91dGluZ1wiO1xyXG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGFzZXNcIjtcclxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcygpIHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fY2F0ZWdvcnlfYXJlYScpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHByb2R1Y3RzLmNhdGVnb3JpZXM7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzQWxsID0gYWxsUHJvZHVjdHMuY2F0ZWdvcmllcztcclxuICAgIGxldCBjYXRlZ29yeUlubmVyID0gYGA7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgY2F0ZWdvcnlJbm5lciArPSBgPGxhYmVsIGNsYXNzPSdmaWx0ZXJfX3N0cmluZyc+XHJcbiAgICAgIDxpbnB1dCB0eXBlID0gJ2NoZWNrYm94JyBjbGFzcz0nZmlsdGVyX19jaGVja2JveCBmaWx0ZXJfX2NoZWNrYm94X2NhdGVnb3J5JyB2YWx1ZT1cIiR7a2V5fVwiIG5hbWU9XCIke2tleX1cIiBkYXRhLXBhcmFtID0gJ2NhdGVnb3J5JyBkYXRhLXF1YW50aXR5PVwiJHtjYXRlZ29yaWVzW2tleV0ubGVuZ3RofVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fcXVhbnRpdHkgZmlsdGVyX19xdWFudGl0eScgZGF0YS1wYXJhbSA9XCIke2tleX1cIj4oJHtjYXRlZ29yaWVzW2tleV0ubGVuZ3RofS88L2Rpdj48c3Bhbj4ke2NhdGVnb3JpZXNBbGxba2V5XS5sZW5ndGh9KTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGNhdGVnb3JpZXNCbG9jayA9IG5ldyBDcmVhdGVDb21wb25lbnQoY2F0ZWdvcmllc0FyZWEsIFwiZGl2XCIsIFtcImNhdGVnb3J5X19jb250YWluZXJcIl0sIGNhdGVnb3J5SW5uZXIpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckJyYW5kcygpIHtcclxuICAgIGNvbnN0IGJyYW5kc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19icmFuZF9hcmVhJyk7XHJcbiAgICBjb25zdCBicmFuZHMgPSBwcm9kdWN0cy5icmFuZHM7XHJcbiAgICBjb25zdCBicmFuZHNBbGwgPSBhbGxQcm9kdWN0cy5icmFuZHM7XHJcbiAgICBsZXQgYnJhbmRzSW5uZXIgPSBgYDtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGJyYW5kcykge1xyXG4gICAgICAgIGJyYW5kc0lubmVyICs9IGA8bGFiZWwgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94IGZpbHRlcl9fY2hlY2tib3hfYnJhbmQnIHZhbHVlPVwiJHtrZXl9XCIgbmFtZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnYnJhbmQnIGRhdGEtcXVhbnRpdHk9XCIke2JyYW5kc1trZXldLmxlbmd0aH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3RpdGxlJz4ke2tleX0mZW5zcDs8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nYnJhbmRfX3F1YW50aXR5IGZpbHRlcl9fcXVhbnRpdHknIGRhdGEtcGFyYW0gPVwiJHtrZXl9XCI+KCR7YnJhbmRzW2tleV0ubGVuZ3RofS88L2Rpdj48c3Bhbj4ke2JyYW5kc0FsbFtrZXldLmxlbmd0aH0pPC9zcGFuPlxyXG4gICAgPC9sYWJlbD5gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYnJhbmRzQmxvY2sgPSBuZXcgQ3JlYXRlQ29tcG9uZW50KGJyYW5kc0FyZWEsIFwiZGl2XCIsIFtcImJyYW5kX19jb250YWluZXJcIl0sIGJyYW5kc0lubmVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdGlja0NoZWNrYm94ZXMoKSB7XHJcbiAgICBpZiAoZmlsdGVyLmJyYW5kLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBicmFuZENoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyX19jaGVja2JveF9icmFuZFwiKTtcclxuICAgICAgICBicmFuZENoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlci5icmFuZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT0gZmlsdGVyLmJyYW5kW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5jYXRlZ29yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgYnJhbmRDaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlcl9fY2hlY2tib3hfY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgYnJhbmRDaGVja2JveHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09IGZpbHRlci5jYXRlZ29yeVtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRGaWx0ZXJQYXJhbXMoKSB7XHJcbiAgICBjb25zdCBjaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19jaGVja2JveCcpO1xyXG4gICAgY2hlY2tib3hzLmZvckVhY2goY2hlY2tib3ggPT4ge1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUZpbHRlcnMoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRFdmVudHMoKSB7XHJcbiAgICBjb25zdCBidXR0b25SZXNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2J1dHRvbl9yZXNldCcpO1xyXG4gICAgYnV0dG9uUmVzZXQgPT09IG51bGwgfHwgYnV0dG9uUmVzZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRGaWx0ZXJzKTtcclxuICAgIGNvbnN0IGJ1dHRvblNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idXR0b25fc2F2ZScpO1xyXG4gICAgYnV0dG9uU2F2ZSA9PT0gbnVsbCB8fCBidXR0b25TYXZlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25TYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHNhdmVVcmwoKTtcclxuICAgICAgICBjaGFuZ2VTYXZlQnV0dG9uKCk7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBmaWx0ZXJOdWxsID0ge1xyXG4gICAgY2F0ZWdvcnk6IFtdLFxyXG4gICAgYnJhbmQ6IFtdLFxyXG4gICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgIHN0b2NrOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICBzdHJpbmdTZWFyY2g6IFwiXCIsXHJcbn07XHJcbmxldCBmaWx0ZXIgPSB7XHJcbiAgICBjYXRlZ29yeTogW10sXHJcbiAgICBicmFuZDogW10sXHJcbiAgICBwcmljZTogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxyXG4gICAgc3RvY2s6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcclxuICAgIHN0cmluZ1NlYXJjaDogXCJcIixcclxufTtcclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZpbHRlcnMoZXZlbnQpIHtcclxuICAgIGNvbnN0IHBhcmFtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnBhcmFtO1xyXG4gICAgY29uc3QgbmV3RmlsdGVyID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IHNpZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2lkZTtcclxuICAgIGlmIChwYXJhbSkge1xyXG4gICAgICAgIGlmIChwYXJhbSA9PT0gXCJwcmljZVwiIHx8IHBhcmFtID09PSBcInN0b2NrXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNpZGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNpZGUgPT09ICdtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5taW4gPSBOdW1iZXIobmV3RmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ubWF4ID0gTnVtYmVyKG5ld0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocGFyYW0gPT09IFwic2VhcmNoXCIpIHtcclxuICAgICAgICAgICAgZmlsdGVyLnN0cmluZ1NlYXJjaCA9IG5ld0ZpbHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXJbcGFyYW1dLmluZGV4T2YobmV3RmlsdGVyKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZCA9IGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0ucHVzaChuZXdGaWx0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgICAgcnVuRmlsdHJhdGlvbihwYXJhbSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyYW0gPT09IFwicHJpY2VcIiB8fCBwYXJhbSA9PT0gXCJzdG9ja1wiKSB7XHJcbiAgICAgICAgaW5zZXJ0UGFyYW0oYCR7cGFyYW19LSR7c2lkZX1gLCBuZXdGaWx0ZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaW5zZXJ0UGFyYW0ocGFyYW0sIG5ld0ZpbHRlcik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcnVuRmlsdHJhdGlvbihwcm9wKSB7XHJcbiAgICBjb25zdCBmaWx0ZXJEb3dubG9hZGVkID0gbmV3IEZpbHRlcjtcclxuICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZpbHRlci5jYXRlZ29yeS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaENhdGVnb3J5KGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZmlsdGVyLmJyYW5kLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGZpbHRlckRvd25sb2FkZWQuc3dpdGNoQnJhbmQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnByaWNlLm1pbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0UHJpY2UoXCJtaW5cIiwgZmlsdGVyLnByaWNlLm1pbik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnByaWNlLm1heCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0UHJpY2UoXCJtYXhcIiwgZmlsdGVyLnByaWNlLm1heCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnN0b2NrLm1pbiAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RvY2soXCJtaW5cIiwgZmlsdGVyLnN0b2NrLm1pbik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnN0b2NrLm1heCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RvY2soXCJtYXhcIiwgZmlsdGVyLnN0b2NrLm1heCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsdGVyLnN0cmluZ1NlYXJjaCAhPT0gXCJcIikge1xyXG4gICAgICAgIGZpbHRlckRvd25sb2FkZWQuc2V0U3RyaW5nU2VhcmNoKGZpbHRlci5zdHJpbmdTZWFyY2gpO1xyXG4gICAgfVxyXG4gICAgcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyRG93bmxvYWRlZCk7XHJcbiAgICBpZiAocHJvcCA9PT0gJ3ByaWNlJykge1xyXG4gICAgICAgIGNoYW5nZVN0b2NrUmFuZ2UoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdG9jaycpIHtcclxuICAgICAgICBjaGFuZ2VQcmljZVJhbmdlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjaGFuZ2VSYW5nZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyR29vZHMoKTtcclxuICAgIHJlcmVuZGVyR29vZHNRdWFudGl0eSgpO1xyXG4gICAgcmVuZGVyR29vZHNRdWFudGl0eSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNYWluRmlsdGVyKGZpbHQpIHtcclxuICAgIGZpbHRlciA9IGZpbHQ7XHJcbiAgICBydW5GaWx0cmF0aW9uKG51bGwpO1xyXG59XHJcbmZ1bmN0aW9uIHJlcmVuZGVyR29vZHNRdWFudGl0eSgpIHtcclxuICAgIGNvbnN0IHF1YW50aXR5QXJlYUJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icmFuZF9fcXVhbnRpdHknKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkQnJhbmRzID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcclxuICAgICAgICBmaWx0ZXJlZEJyYW5kcy5wdXNoKGtleSk7XHJcbiAgICB9XHJcbiAgICBxdWFudGl0eUFyZWFCcmFuZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRCcmFuZHMuaW5jbHVkZXMoaXRlbS5kYXRhc2V0LnBhcmFtKSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgKCR7cHJvZHVjdHMuYnJhbmRzW2tleV0ubGVuZ3RofS9gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMC8nO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnlfX3F1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb2R1Y3RzLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmaWx0ZXJlZENhdGVnb3JpZXMucHVzaChrZXkpO1xyXG4gICAgfVxyXG4gICAgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpZiAoZmlsdGVyZWRDYXRlZ29yaWVzLmluY2x1ZGVzKGl0ZW0uZGF0YXNldC5wYXJhbSkpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvZHVjdHMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBpdGVtLmRhdGFzZXQucGFyYW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IGAoJHtwcm9kdWN0cy5jYXRlZ29yaWVzW2tleV0ubGVuZ3RofS9gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICcoMC8nO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlc2V0RmlsdGVycygpIHtcclxuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NoZWNrYm94Jyk7XHJcbiAgICBjaGVja2JveHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgZmlsdGVyID0gZmlsdGVyTnVsbDtcclxuICAgIHJ1bkZpbHRyYXRpb24obnVsbCk7XHJcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPSBcIlwiO1xyXG59XHJcbmZ1bmN0aW9uIHNhdmVVcmwoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgY29uc3QgY29weVRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgY29weVRleHRhcmVhLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgY29weVRleHRhcmVhLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcclxuICAgIGNvcHlUZXh0YXJlYS50ZXh0Q29udGVudCA9IHVybDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weVRleHRhcmVhKTtcclxuICAgIGNvcHlUZXh0YXJlYS5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29weVRleHRhcmVhKTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VTYXZlQnV0dG9uKCkge1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2J1dHRvbl9zYXZlXCIpO1xyXG4gICAgaWYgKCFidXR0b24pXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU2F2ZWRcIjtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlNhdmUgZmlsdGVyc1wiO1xyXG4gICAgfSwgMjAwMCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZpbHRlcnMoKSB7XHJcbiAgICByZW5kZXJDYXRlZ29yaWVzKCk7XHJcbiAgICByZW5kZXJCcmFuZHMoKTtcclxuICAgIGFkZEZpbHRlclBhcmFtcygpO1xyXG4gICAgYWRkRXZlbnRzKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3JlYXRlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xhc2VzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19pbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fdGV4dFwiPk1hZGUgYnkgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fbGlua3NcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSnVsaWEteWVzXCIgY2xhc3M9XCJmb290ZXJfX2xpbmtcIj4gSnVsaWEgQm9sb25pa292YSAmIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbW9yZG9iaXZcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPiAmdGhpbnNwOyBEem1pdHJ5IEFuaXNrb3ZpY2g8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9feWVhclwiPjIwMjI8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3NjaG9vbFwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3JzLnNjaG9vbC9qcy9cIiBjbGFzcz1cImZvb3Rlcl9fc2Nob29sLW5hbWVcIj5cclxuICAgICAgICAgIDxpbWcgYWx0PVwicnMtc2Nob29sXCIgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWcvcnNMb2dvLnN2Z1wiIGNsYXNzPVwiZm9vdGVyX19zY2hvb2wtaW1nXCI+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgICBjb25zdCBmb290ZXIgPSBuZXcgQ3JlYXRlQ29tcG9uZW50KGZvb3RlckFyZWEsIFwiZGl2XCIsIFtcIndyYXBwZXJcIl0sIGNvbnRlbnQpO1xyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcclxuaW1wb3J0IGNhcnQgZnJvbSAnLi4vc2NyaXB0cy9jYXJ0JztcclxuaW1wb3J0IHsgcmVuZGVyUHJvZHVjdFBhZ2UgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCB7IGFkZFBhdGhVcmwgfSBmcm9tICcuL3JvdXRpbmcnO1xyXG5pbXBvcnQgeyBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSB9IGZyb20gXCIuL21vZGFsLXBhZ2VcIjtcclxuaW1wb3J0IHsgdXBkYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR29vZHMoKSB7XHJcbiAgICBsZXQgbG9jYWxTdG9yYWdlQ2FydDtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuY2FydCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZUNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jYXJ0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgY29uc3QgZ29vZHMgPSBwcm9kdWN0cy5wcm9kdWN0cztcclxuICAgIGxldCBnb29kc0lubmVyID0gYGA7XHJcbiAgICBpZiAoZ29vZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fZW1wdHknPiBObyBwcm9kdWN0cyBmb3VuZCA8L2Rpdj5gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZ29vZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgZ29vZCA9IGdvb2RzW2tleV07XHJcbiAgICAgICAgICAgIGxldCBidXR0b25TdHIgPSBgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9jYXJ0IGNhcmRfX2J1dHRvbl9hZGQnIGRhdGEtZ29vZElEID0gXCIke2dvb2QuaWR9XCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmNhcnQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlQ2FydC5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgrbG9jYWxTdG9yYWdlQ2FydC5wcm9kdWN0c1tpXS5pZCA9PT0gZ29vZC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25TdHIgPSBgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9jYXJ0IGNhcmRfX2J1dHRvbl9kZWxldGUnIGRhdGEtZ29vZElEID0gXCIke2dvb2QuaWR9XCI+RGVsZXRlIGZyb20gY2FydDwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdvb2RzSW5uZXIgKz0gYDxkaXYgY2xhc3M9J2dvb2RzX19jYXJkIGNhcmQnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3RodW1ibmFpbCc+XHJcbiAgICAgICAgICA8aW1nIGFsdD0nZ29vZCcgY2xhc3M9J2NhcmRfX2ltZycgc3JjPScke2dvb2QudGh1bWJuYWlsfSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19kaXNjb250Jz4ke2dvb2QuZGlzY291bnRQZXJjZW50YWdlfSYjMzc7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fdGl0bGUnPiR7Z29vZC50aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19wcmljZV9uZXcnPiR7Z29vZC5wcmljZX0mIzM2OzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2Vfb2xkJz4ke01hdGguZmxvb3IoZ29vZC5wcmljZSAvICgxMDAgLSBnb29kLmRpc2NvdW50UGVyY2VudGFnZSkgKiAxMDApfSYjMzY7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fYm90dG9tJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3JhdGluZyc+JHtnb29kLnJhdGluZ30mc3RhcmY7PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19zdG9jayc+U3RvY2sgJiM1ODsgJiMzMjsgJHtnb29kLnN0b2NrfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2J1dHRvbnMnPlxyXG4gICAgICAgICAgJHtidXR0b25TdHJ9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdjYXJkX19idXR0b24gY2FyZF9fYnV0dG9uX21vcmUnIGRhdGEtZ29vZElEID0gXCIke2dvb2QuaWR9XCI+U2VlIG1vcmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZ29vZHNBcmVhKSB7XHJcbiAgICAgICAgZ29vZHNBcmVhLmlubmVySFRNTCA9IGdvb2RzSW5uZXI7XHJcbiAgICB9XHJcbiAgICBjb25zdCBidXR0b25zVG9Qcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfX2J1dHRvbl9tb3JlJyk7XHJcbiAgICBidXR0b25zVG9Qcm9kdWN0LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBnb29kSUQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5nb29kaWQ7XHJcbiAgICAgICAgICAgIGFkZFBhdGhVcmwoYC9wcm9kdWN0LyR7Z29vZElEfWApO1xyXG4gICAgICAgICAgICByZW5kZXJQcm9kdWN0UGFnZSgpO1xyXG4gICAgICAgICAgICBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkX19idXR0b25fY2FydFwiKTtcclxuICAgIGJ1dHRvbkNhcnQuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHByb2NlZWRBZGRUb0NhcnQoZS5jdXJyZW50VGFyZ2V0KTsgfSk7XHJcbiAgICB9KTtcclxuICAgIHVwZGF0ZUhlYWRlcigpO1xyXG59XHJcbmZ1bmN0aW9uIHByb2NlZWRBZGRUb0NhcnQoZSkge1xyXG4gICAgY29uc3QgZ29vZElEID0gTnVtYmVyKGUuZGF0YXNldC5nb29kaWQpO1xyXG4gICAgaWYgKGdvb2RJRCkge1xyXG4gICAgICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucygnY2FyZF9fYnV0dG9uX2FkZCcpKSB7XHJcbiAgICAgICAgICAgIGNhcnQuYWRkUHJvZHVjdChnb29kSUQpO1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX2J1dHRvbl9hZGQnKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdjYXJkX19idXR0b25fZGVsZXRlJyk7XHJcbiAgICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBmcm9tIGNhcnRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNhcnQucmVtb3ZlUHJvZHVjdENvbXBsZXRlbHkoZ29vZElEKTtcclxuICAgICAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkX19idXR0b25fZGVsZXRlJyk7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9uX2FkZCcpO1xyXG4gICAgICAgICAgICBlLnRleHRDb250ZW50ID0gJ0FkZCB0byBjYXJ0JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVIZWFkZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjYXJ0IH0gZnJvbSBcIi4uL3NjcmlwdHMvY2FydFwiO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgaWYgKGhlYWRlckFyZWEpIHtcclxuICAgICAgICBoZWFkZXJBcmVhLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fdGVtcGxhdGVcIj5cclxuICAgICAgPGEgaHJlZj0nLyc+PGltZyBjbGFzcz1cImhlYWRlcl9fbG9nb1wiIGFsdD1cInNob3AgbG9nb1wiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nXCI+PC9hPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19wcmljZVwiPlxyXG4gICAgICBDYXJ0IHRvdGFsJiM1ODsgJiMzMjtcclxuICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXJfX3ZhbHVlXCI+MDwvc3Bhbj4mIzM2XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YSBocmVmPScvY2FydCcgY2xhc3M9XCJoZWFkZXJfX2NhcnRcIj5cclxuICAgICAgICA8aW1nIGNsYXNzPVwiaGVhZGVyX19jYXJ0X2ltZ1wiIGFsdD1cImNhcnRcIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJ0LnBuZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX2NhcnRfcXVhbnRpdHlcIj4wPC9kaXY+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVIZWFkZXIoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSGVhZGVyKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jYXJ0KSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX192YWx1ZScpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXJ0X3F1YW50aXR5Jyk7XHJcbiAgICAgICAgaWYgKGhlYWRlclByaWNlICYmIGNhcnRBbW91bnQpIHtcclxuICAgICAgICAgICAgaWYgKGNhcnQgPT09IG51bGwgfHwgY2FydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FydC5wcm9kdWN0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlclByaWNlLnRleHRDb250ZW50ID0gJycgKyBjYXJ0LnRvdGFsUHJpY2U7XHJcbiAgICAgICAgICAgICAgICBjYXJ0QW1vdW50LnRleHRDb250ZW50ID0gJycgKyBjYXJ0LnRvdGFsSXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJQcmljZS50ZXh0Q29udGVudCA9ICcwJztcclxuICAgICAgICAgICAgICAgIGNhcnRBbW91bnQudGV4dENvbnRlbnQgPSAnMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgaGFuZGxlTG9jYXRpb24sIHBhcnNlVXJsIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcclxuaW1wb3J0IHsgcmVuZGVyRmlsdGVycyB9IGZyb20gJy4vZmlsdGVySXRlbSc7XHJcbmltcG9ydCB7IGNoYW5nZVJhbmdlLCBmaWxsVmFsdWVzIH0gZnJvbSBcIi4vcmFuZ2VcIjtcclxuaW1wb3J0IHsgYWRkTGlzdGVuZXJGb3JTZWFyY2ggfSBmcm9tICcuL3NlYXJjaCc7XHJcbmltcG9ydCB7IGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMgfSBmcm9tIFwiLi9zb3J0aW5nXCI7XHJcbmltcG9ydCB7IGFkZExpc3RlbmVyRm9yVmlldyB9IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCB7IHJlbmRlckhlYWRlciB9IGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XHJcbmltcG9ydCB7IGFkZExpc3RlbmVyQnV0dG9uQnV5IH0gZnJvbSBcIi4vbW9kYWwtcGFnZVwiO1xyXG5jb25zdCB0ZW1wbGF0ZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0b3JlX19wcm9qZWN0XCIpO1xyXG5mdW5jdGlvbiByZW5kZXJUZW1wbGF0ZSgpIHtcclxuICAgIGlmICh0ZW1wbGF0ZUFyZWEpIHtcclxuICAgICAgICB0ZW1wbGF0ZUFyZWEuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcyA9ICd3cmFwcGVyX19tYWluJz5cclxuICAgICAgPGhlYWRlciBjbGFzcyA9ICdoZWFkZXInPkhlYWRlclxyXG4gICAgICAgIDxhIGhyZWY9Jy8nPkxvZ288L2E+XHJcbiAgICAgICAgPGEgaHJlZj0nL2NhcnQnPkNhcnQ8L2E+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbiBjbGFzcyA9ICdtYWluJz5NYWluXHJcbiAgICAgICAgPGEgaHJlZj0nL3Byb2R1Y3QnPlByb2R1Y3Q8L2E+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3RlciBjbGFzcyA9ICdmb290ZXInPjwvZm9vdGVyPlxyXG4gICAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbml0UHJvamVjdCgpIHtcclxuICAgIHJlbmRlclRlbXBsYXRlKCk7XHJcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xyXG4gICAgcmVuZGVyR29vZHMoKTtcclxuICAgIHJlbmRlckZpbHRlcnMoKTtcclxuICAgIGZpbGxWYWx1ZXMoKTtcclxuICAgIGNoYW5nZVJhbmdlKCk7XHJcbiAgICBwYXJzZVVybCgpO1xyXG4gICAgYWRkTGlzdGVuZXJTb3J0aW5nQnV0dG9ucygpO1xyXG4gICAgYWRkTGlzdGVuZXJGb3JWaWV3KCk7XHJcbiAgICByZW5kZXJIZWFkZXIoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG4gICAgYWRkTGlzdGVuZXJGb3JTZWFyY2goKTtcclxuICAgIGFkZExpc3RlbmVyQnV0dG9uQnV5KCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9KTtcclxufVxyXG5pbml0UHJvamVjdCgpO1xyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCBjYXJ0IGZyb20gXCIuLi9zY3JpcHRzL2NhcnRcIjtcclxuaW1wb3J0IHsgdXBkYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBDcmVhdGVDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGFzZXNcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1vZGFsUGFnZSgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGA8Zm9ybSBjbGFzcz1cIm1vZGFsLXBhZ2VfX3dyYXBwZXJcIj5cclxuICAgIDxoMSBjbGFzcz1cIm1vZGFsLXBhZ2VfX3RpdGxlXCI+UGVyc29uYWwgaW5mb3JtYXRpb248L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2luZm9cIj5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmFtZT1cIm5hbWVcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2lucHV0IG1vZGFsLXBhZ2VfX2lucHV0X25hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWUgYW5kIHN1cm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX25hbWVcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGRhdGEtbmFtZT1cInRlbFwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgbW9kYWwtcGFnZV9faW5wdXRfdGVsXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBudW1iZXJcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX3RlbFwiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2lucHV0IG1vZGFsLXBhZ2VfX2lucHV0X2FkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkRlbGl2ZXJ5IGFkZHJlc3NcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX2FkZHJlc3NcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZGF0YS1uYW1lPVwibWFpbFwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgbW9kYWwtcGFnZV9faW5wdXRfbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2RhbC1wYWdlX19lcnJvciBtb2RhbC1wYWdlX19lcnJvcl9tYWlsXCI+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcGFnZV9fY2FyZCBjcmVkaXQtY2FyZFwiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJtb2RhbC1wYWdlX19zdWJ0aXRsZVwiPkNhcmQgaW5mb3JtYXRpb248L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX251bWJlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdC1jYXJkX19pbWdcIj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJwYXltZW50IHN5c3RlbVwiIGNsYXNzPVwiY3JlZGl0LWNhcmRfX2xvZ29cIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkLnBuZ1wiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbWF4bGVuZ3RoPVwiMTZcIiBtaW5sZW5ndGg9XCIxNlwiIGRhdGEtbmFtZT1cIm51bVwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0IGNyZWRpdC1jYXJkX19pbnB1dF9udW1iZXJcIiBwbGFjZWhvbGRlcj1cIkNhcmQgbnVtYmVyXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMTZcIiBtYXhsZW5ndGg9XCIxNlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX251bVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdC1jYXJkX19jYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcmVkaXQtY2FyZF9fdGV4dFwiPlZhbGlkOjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNVwiIGRhdGEtbmFtZT1cInZhbGlkXCIgY2xhc3M9XCJtb2RhbC1wYWdlX19pbnB1dCBjcmVkaXQtY2FyZF9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0X3NtYWxsIGNyZWRpdC1jYXJkX19pbnB1dF92YWxpZFwiIHBsYWNlaG9sZGVyPVwiVmFsaWRpdHkgcGVyaW9kXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3IgbW9kYWwtcGFnZV9fZXJyb3JfdmFsaWRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcmVkaXQtY2FyZF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyZWRpdC1jYXJkX190ZXh0XCI+Q1ZWOjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBtYXhsZW5ndGg9XCIzXCIgZGF0YS1uYW1lPVwiY3Z2XCIgY2xhc3M9XCJtb2RhbC1wYWdlX19pbnB1dCBjcmVkaXQtY2FyZF9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0X3NtYWxsIGNyZWRpdC1jYXJkX19pbnB1dF9jdnZcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjNcIiBtYXhsZW5ndGg9XCIzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3IgbW9kYWwtcGFnZV9fZXJyb3JfY3Z2XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtcGFnZV9fYnV0dG9uIGJ1dHRvblwiPkNvbmZpcm08L2J1dHRvbj5cclxuICA8L2Zvcm0+XHJcbiAgYDtcclxuICAgIGNvbnN0IG1vZGFsUGFnZSA9IG5ldyBDcmVhdGVDb21wb25lbnQobWFpbiwgXCJzZWN0aW9uXCIsIFtcIm1vZGFsLXBhZ2VcIl0sIGNvbnRlbnQpO1xyXG4gICAgY29uc3QgbW9kYWxBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlXCIpO1xyXG4gICAgbW9kYWxBcmVhID09PSBudWxsIHx8IG1vZGFsQXJlYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWxBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbEFyZWEpIHtcclxuICAgICAgICAgICAgY2xvc2VNb2RhbFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGFkZExpc3RlbmVyRm9ybXMoKTtcclxuICAgIGFkZExpc3RlbmVyQ2FyZE51bWJlcigpO1xyXG4gICAgYWRkTGlzdGVuZXJWYWxpZEZvcm0oKTtcclxuICAgIGFkZExpc3RlbmVyQ29uZmlybSgpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyVmFsaWRGb3JtKCkge1xyXG4gICAgY29uc3QgdmFsaWRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVkaXQtY2FyZF9faW5wdXRfdmFsaWRcIik7XHJcbiAgICB2YWxpZEZvcm0gPT09IG51bGwgfHwgdmFsaWRGb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWxpZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7IGFkZENvcnJlY3RWaWV3KGUpOyB9KTtcclxufVxyXG5mdW5jdGlvbiBhZGRDb3JyZWN0VmlldyhlKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgICBsZXQgaW5kID0gdmFsdWUuaW5kZXhPZihcIi9cIik7XHJcbiAgICBpZiAoaW5kICE9IC0xKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpbmQpICsgdmFsdWUuc2xpY2UoaW5kICsgMSk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC52YWx1ZSA9IGAke3ZhbHVlLnNsaWNlKDAsIDIpfS8ke3ZhbHVlLnNsaWNlKDIpfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSBgJHt2YWx1ZS5zbGljZSgwLCAyKX1gO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHJlZGlyZWN0VG9DYXJ0KCkge1xyXG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwiL2NhcnRcIjtcclxufVxyXG5mdW5jdGlvbiBjaGVja1Byb2R1Y3RJbkNhcnQoKSB7XHJcbiAgICBjb25zdCBhcnIgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBpZCA9ICthcnJbYXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0LXBhZ2VfX2J1dHRvbl9sZWZ0XCIpO1xyXG4gICAgaWYgKGJ1dHRvbkFkZCA9PT0gbnVsbCB8fCBidXR0b25BZGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkFkZC5pbm5lckhUTUwuc3RhcnRzV2l0aChcIkFkZFwiKSkge1xyXG4gICAgICAgIGNhcnQuYWRkUHJvZHVjdChpZCk7XHJcbiAgICAgICAgdXBkYXRlSGVhZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyQnV0dG9uQnV5KCkge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICBjb25zdCBidXR0b25CdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3QtcGFnZV9fYnV0dG9uX2J1eVwiKTtcclxuICAgICAgICBidXR0b25CdXkgPT09IG51bGwgfHwgYnV0dG9uQnV5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25CdXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY2hlY2tQcm9kdWN0SW5DYXJ0KCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb2RhbCcsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgcmVkaXJlY3RUb0NhcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyQ29uZmlybSgpIHtcclxuICAgIGNvbnN0IGJ1dHRvbkNvbmZpcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXBhZ2VfX2J1dHRvblwiKTtcclxuICAgIGJ1dHRvbkNvbmZpcm0gPT09IG51bGwgfHwgYnV0dG9uQ29uZmlybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2hlY2tDb3JyZWN0SW5wdXQoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWxQYWdlKCkge1xyXG4gICAgY29uc3QgbW9kYWxQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlXCIpO1xyXG4gICAgbW9kYWxQYWdlID09PSBudWxsIHx8IG1vZGFsUGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWxQYWdlLnJlbW92ZSgpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyQ2FyZE51bWJlcigpIHtcclxuICAgIGNvbnN0IGNhcmROdW1iZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGl0LWNhcmRfX2lucHV0X251bWJlclwiKTtcclxuICAgIGNhcmROdW1iZXJJbnB1dCA9PT0gbnVsbCB8fCBjYXJkTnVtYmVySW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmROdW1iZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHsgY2hhbmdlUGF5U3lzdGVtKGUpOyB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VQYXlTeXN0ZW0oZXZlbnQpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGl0LWNhcmRfX2xvZ29cIik7XHJcbiAgICBpZiAodmFsdWUuc3RhcnRzV2l0aChcIjNcIikpIHtcclxuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkX2FtLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodmFsdWUuc3RhcnRzV2l0aChcIjRcIikpIHtcclxuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkLXYucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh2YWx1ZS5zdGFydHNXaXRoKFwiNVwiKSkge1xyXG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1nL2NhcmQtbS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1nL2NhcmQucG5nXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JtcygpIHtcclxuICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1wYWdlX19pbnB1dFwiKTtcclxuICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZUZvcm1zKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gdHlwZUVycm9yKHRleHQsIHByb3ApIHtcclxuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsLXBhZ2VfX2Vycm9yXyR7cHJvcH1gKTtcclxuICAgIGlmIChlcnJvciAmJiB0ZXh0KSB7XHJcbiAgICAgICAgZXJyb3IuaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0eXBlUmlnaHQocHJvcCkge1xyXG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubW9kYWwtcGFnZV9fZXJyb3JfJHtwcm9wfWApO1xyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgZXJyb3IuaW5uZXJIVE1MID0gYDxpbWcgYWx0PVwicmlnaHRcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yX2ltZ1wiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL3JpZ2h0LnBuZ1wiPmA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybXMoZXZlbnQpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGlmIChuYW1lID09IFwibmFtZVwiKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoIDwgMiB8fCByZXN1bHRbMF0ubGVuZ3RoIDwgMyB8fCByZXN1bHRbMV0ubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvciBuYW1lXCIsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHlwZVJpZ2h0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuYW1lID09IFwidGVsXCIpIHtcclxuICAgICAgICB2YXIgcmUgPSAvXltcXCtdWzAtOV17OX0vO1xyXG4gICAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvciBwaG9uZSBudW1iZXJcIiwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUgPT0gXCJhZGRyZXNzXCIpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCAzIHx8IHJlc3VsdFswXS5sZW5ndGggPCA1IHx8IHJlc3VsdFsxXS5sZW5ndGggPCA1IHx8IHJlc3VsdFsyXS5sZW5ndGggPCA1KSB7XHJcbiAgICAgICAgICAgIHR5cGVFcnJvcihcIkVycm9yIGFkZHJlc3NcIiwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUgPT0gXCJtYWlsXCIpIHtcclxuICAgICAgICB2YXIgcmUgPSAvXltcXHddezF9W1xcdy1cXC5dKkBbXFx3LV0rXFwuW2Etel17Miw0fSQvaTtcclxuICAgICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdHlwZVJpZ2h0KG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdHlwZUVycm9yKFwiRXJyb3IgZS1tYWlsXCIsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuYW1lID09IFwibnVtXCIpIHtcclxuICAgICAgICB2YXIgcmUgPSAvXlswLTldezE2fS87XHJcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHR5cGVSaWdodChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGVFcnJvcihcIlVuY29ycmVjdCBudW1iZXJcIiwgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG5hbWUgPT0gXCJjdnZcIikge1xyXG4gICAgICAgIHZhciByZSA9IC9eWzAtOV17M30vO1xyXG4gICAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvclwiLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobmFtZSA9PSBcInZhbGlkXCIpIHtcclxuICAgICAgICB2YXIgcmUgPSAvXigwP1sxLTldfDFbMC0yXSlcXC8oWzAtOV17Mn0pJC87XHJcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHR5cGVSaWdodChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHR5cGVFcnJvcihcIkVycm9yXCIsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjaGVja1JlcXVpcmVkSW5wdXRzKCkge1xyXG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLXBhZ2VfX2lucHV0XCIpO1xyXG4gICAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcclxuICAgICAgICBpZiAoZm9ybS52YWx1ZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3AgPSBmb3JtLmRhdGFzZXQubmFtZTtcclxuICAgICAgICAgICAgaWYgKHByb3ApXHJcbiAgICAgICAgICAgICAgICB0eXBlRXJyb3IoXCJSZXF1aXJlZFwiLCBwcm9wKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja0NvcnJlY3RJbnB1dCgpIHtcclxuICAgIGNoZWNrUmVxdWlyZWRJbnB1dHMoKTtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlX193cmFwcGVyXCIpO1xyXG4gICAgY29uc3QgZXJyb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbC1wYWdlX19lcnJvclwiKTtcclxuICAgIGxldCBlcnJvck51bSA9IDA7XHJcbiAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XHJcbiAgICAgICAgaWYgKGVycm9yLnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yTnVtICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoZXJyb3JOdW0gPiAwKSB7XHJcbiAgICAgICAgbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1wYWdlX193cmFwcGVyX3dyb25nXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29tcGxldGVPcmRlcigpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbXBsZXRlT3JkZXIoKSB7XHJcbiAgICByZW5kZXJNZXNzYWdlQ29uZmlybSgpO1xyXG4gICAgcmVkaXJlY3RUb01haW4oKTtcclxuICAgIGNhcnQuY2xlYXIoKTtcclxuICAgIHVwZGF0ZUhlYWRlcigpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlck1lc3NhZ2VDb25maXJtKCkge1xyXG4gICAgY29uc3QgbWVzc2FnZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICBpZiAobWVzc2FnZUFyZWEpXHJcbiAgICAgICAgbWVzc2FnZUFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC1wYWdlX19tZXNzYWdlXCI+VGhhbmtzIGZvciB5b3VyIG9yZGVyPC9kaXY+YDtcclxufVxyXG5mdW5jdGlvbiByZWRpcmVjdFRvTWFpbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgIH0sIDMwMDApO1xyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOb2RlIH0gZnJvbSBcIi4uL3NjcmlwdHMvaGVscGVyc1wiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi4vc2NyaXB0cy9jYXJ0XCI7XHJcbmltcG9ydCB7IHVwZGF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5sZXQgY29udGVudDtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RQYWdlKCkge1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gK3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzJdO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3RzLmdldFByb2R1Y3RCeUlkKHByb2R1Y3RJZCk7XHJcbiAgICBpZiAocHJvZHVjdCkge1xyXG4gICAgICAgIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInByb2R1Y3QtcGFnZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVuZGVyQ3J1bWJzKHByb2R1Y3QpO1xyXG4gICAgICAgIHJlbmRlclByb2R1Y3QocHJvZHVjdCk7XHJcbiAgICAgICAgcmVuZGVyUHVyY2hhc2UocHJvZHVjdCk7XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lclBob3RvcygpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlckNydW1icyhwcm9kdWN0KSB7XHJcbiAgICBjb25zdCBjcnVtYnNCbG9jayA9IGNyZWF0ZU5vZGUoJ2NydW1icycpO1xyXG4gICAgY29uc3Qgc3RvcmVDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgXCJTdG9yZVwiKTtcclxuICAgIGNvbnN0IGNhdGVnb3J5Q3J1bWIgPSBjcmVhdGVOb2RlKCdjcnVtYicsIHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5jYXRlZ29yeSk7XHJcbiAgICBjb25zdCBicmFuZENydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QuYnJhbmQpO1xyXG4gICAgY29uc3QgdGl0bGVDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgcHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LnRpdGxlKTtcclxuICAgIGNydW1ic0Jsb2NrLmFwcGVuZChzdG9yZUNydW1iLCBjYXRlZ29yeUNydW1iLCBicmFuZENydW1iLCB0aXRsZUNydW1iKTtcclxuICAgIGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudC5hcHBlbmQoY3J1bWJzQmxvY2spO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclByb2R1Y3QocHJvZHVjdCkge1xyXG4gICAgY29uc3QgcHJvZHVjdEJsb2NrID0gY3JlYXRlTm9kZSgncHJvZHVjdCcpO1xyXG4gICAgY29uc3QgcGhvdG9zQmxvY2sgPSBjcmVhdGVOb2RlKCdwaG90b3MnKTtcclxuICAgIGNvbnN0IG1haW5QaG90b0Jsb2NrID0gY3JlYXRlTm9kZSgncGhvdG9zX19tYWluJyk7XHJcbiAgICBjb25zdCBtYWluUGhvdG8gPSBjcmVhdGVOb2RlKCdtYWluLXBob3RvJyk7XHJcbiAgICBjb25zdCBtYWluUGhvdG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIG1haW5QaG90b0ltZy5jbGFzc05hbWUgPSAnbWFpbi1waG90b19faW1nJztcclxuICAgIG1haW5QaG90b0ltZy5zcmMgPSBwcm9kdWN0LnRodW1ibmFpbDtcclxuICAgIG1haW5QaG90by5hcHBlbmQobWFpblBob3RvSW1nKTtcclxuICAgIG1haW5QaG90b0Jsb2NrLmFwcGVuZChtYWluUGhvdG8pO1xyXG4gICAgY29uc3Qgc21hbGxQaG90b3NCbG9jayA9IGNyZWF0ZU5vZGUoJ3NtYWxsLXBob3RvcycpO1xyXG4gICAgZm9yIChjb25zdCBpbWFnZSBvZiBwcm9kdWN0LmltYWdlcykge1xyXG4gICAgICAgIGlmIChpbWFnZSA9PT0gcHJvZHVjdC50aHVtYm5haWwpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsUGhvdG8gPSBjcmVhdGVOb2RlKCdzbWFsbC1waG90bycpO1xyXG4gICAgICAgIGNvbnN0IHNtYWxsUGhvdG9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBzbWFsbFBob3RvSW1nLnNyYyA9IGltYWdlO1xyXG4gICAgICAgIHNtYWxsUGhvdG8uYXBwZW5kKHNtYWxsUGhvdG9JbWcpO1xyXG4gICAgICAgIHNtYWxsUGhvdG9zQmxvY2suYXBwZW5kKHNtYWxsUGhvdG8pO1xyXG4gICAgfVxyXG4gICAgcGhvdG9zQmxvY2suYXBwZW5kKG1haW5QaG90b0Jsb2NrLCBzbWFsbFBob3Rvc0Jsb2NrKTtcclxuICAgIGNvbnN0IHByb2R1Y3REYXRhQmxvY2sgPSBjcmVhdGVOb2RlKCdkYXRhJyk7XHJcbiAgICBjb25zdCBwcm9kdWN0VGl0bGUgPSBjcmVhdGVOb2RlKCdkYXRhX190aXRsZSBkYXRhX19pdGVtJywgcHJvZHVjdC50aXRsZSk7XHJcbiAgICBjb25zdCBwcm9kdWN0Q2F0ZWdvcnkgPSBjcmVhdGVOb2RlKCdkYXRhX19jYXRlZ29yeSBkYXRhX19pdGVtJywgJ0NhdGVnb3J5OiAnKTtcclxuICAgIGNvbnN0IHByb2R1Y3RDYXRlZ29yeUNvbnRlbnQgPSBjcmVhdGVOb2RlKCdkYXRhX19pdGVtLWNvbnRlbnQnLCBwcm9kdWN0LmNhdGVnb3J5KTtcclxuICAgIHByb2R1Y3RDYXRlZ29yeS5hcHBlbmQocHJvZHVjdENhdGVnb3J5Q29udGVudCk7XHJcbiAgICBjb25zdCBwcm9kdWN0QnJhbmQgPSBjcmVhdGVOb2RlKCdkYXRhX19icmFuZCBkYXRhX19pdGVtJywgJ0JyYW5kOiAnKTtcclxuICAgIGNvbnN0IHByb2R1Y3RCcmFuZENvbnRlbnQgPSBjcmVhdGVOb2RlKCdkYXRhX19pdGVtLWNvbnRlbnQnLCBwcm9kdWN0LmJyYW5kKTtcclxuICAgIHByb2R1Y3RCcmFuZC5hcHBlbmQocHJvZHVjdEJyYW5kQ29udGVudCk7XHJcbiAgICBjb25zdCBwcm9kdWN0RGVzY3JpcHRpb24gPSBjcmVhdGVOb2RlKCdkYXRhX19kZXNjcmlwdGlvbiBkYXRhX19pdGVtJywgJ0Rlc2NyaXB0aW9uOiAnKTtcclxuICAgIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbkNvbnRlbnQgPSBjcmVhdGVOb2RlKCdkYXRhX19pdGVtLWNvbnRlbnQnLCBwcm9kdWN0LmRlc2NyaXB0aW9uKTtcclxuICAgIHByb2R1Y3REZXNjcmlwdGlvbi5hcHBlbmQocHJvZHVjdERlc2NyaXB0aW9uQ29udGVudCk7XHJcbiAgICBjb25zdCBwcm9kdWN0U3RhdHMgPSBjcmVhdGVOb2RlKCdzdGF0cycpO1xyXG4gICAgY29uc3QgcHJvZHVjdFJhdGluZyA9IGNyZWF0ZU5vZGUoJ2RhdGFfX3JhdGluZyBzdGF0c19faXRlbScsICdSYXRpbmc6ICcgKyBwcm9kdWN0LnJhdGluZyk7XHJcbiAgICBjb25zdCBwcm9kdWN0U3RvY2sgPSBjcmVhdGVOb2RlKCdkYXRhX19zdG9jayBzdGF0c19faXRlbScsICdTdG9jazogJyArIHByb2R1Y3Quc3RvY2spO1xyXG4gICAgcHJvZHVjdFN0YXRzLmFwcGVuZChwcm9kdWN0UmF0aW5nLCBwcm9kdWN0U3RvY2spO1xyXG4gICAgcHJvZHVjdERhdGFCbG9jay5hcHBlbmQocHJvZHVjdFRpdGxlLCBwcm9kdWN0Q2F0ZWdvcnksIHByb2R1Y3RCcmFuZCwgcHJvZHVjdERlc2NyaXB0aW9uLCBwcm9kdWN0U3RhdHMpO1xyXG4gICAgcHJvZHVjdEJsb2NrLmFwcGVuZChwaG90b3NCbG9jaywgcHJvZHVjdERhdGFCbG9jayk7XHJcbiAgICBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuYXBwZW5kKHByb2R1Y3RCbG9jayk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUHVyY2hhc2UocHJvZHVjdCkge1xyXG4gICAgY29uc3QgcHVyY2hhc2VCbG9jayA9IGNyZWF0ZU5vZGUoJ3B1cmNoYXNlJyk7XHJcbiAgICBjb25zdCBwcmljZUJsb2NrID0gY3JlYXRlTm9kZSgncHJpY2UnKTtcclxuICAgIGNvbnN0IGRpc2NvdW50ID0gY3JlYXRlTm9kZSgncHJpY2VfX2Rpc2NvdW50JywgYERpc2NvdW50OiBcXG4ke3Byb2R1Y3QuZGlzY291bnRQZXJjZW50YWdlfSVgKTtcclxuICAgIGNvbnN0IHByaWNlID0gY3JlYXRlTm9kZSgncHJpY2VfX2Ftb3VudCcsIGAke3Byb2R1Y3QucHJpY2V9JGApO1xyXG4gICAgcHJpY2VCbG9jay5hcHBlbmQocHJpY2UsIGRpc2NvdW50KTtcclxuICAgIGNvbnN0IGJ1dHRvbnNCbG9jayA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcclxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uQWRkLmNsYXNzTmFtZSA9ICdidXR0b24gcHJvZHVjdC1wYWdlX19idXR0b24gcHJvZHVjdC1wYWdlX19idXR0b25fbGVmdCc7XHJcbiAgICBsZXQgaXNQcm9kdWN0SW5DYXJ0ID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcnQucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2FydC5wcm9kdWN0c1tpXS5pZCA9PT0gcHJvZHVjdC5pZCkge1xyXG4gICAgICAgICAgICBpc1Byb2R1Y3RJbkNhcnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc1Byb2R1Y3RJbkNhcnQpIHtcclxuICAgICAgICBidXR0b25BZGQudGV4dENvbnRlbnQgPSAnUmVtb3ZlIGZyb20gQ2FydCc7XHJcbiAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcGFnZV9fYnV0dG9uLXJlbW92ZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gJ0FkZCB0byBDYXJ0JztcclxuICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LmFkZCgncHJvZHVjdC1wYWdlX19idXR0b24tYWRkJyk7XHJcbiAgICB9XHJcbiAgICBidXR0b25BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaXNQcm9kdWN0SW5DYXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0LnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjYXJ0LnByb2R1Y3RzW2ldLmlkID09PSBwcm9kdWN0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpc1Byb2R1Y3RJbkNhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1Byb2R1Y3RJbkNhcnQpIHtcclxuICAgICAgICAgICAgY2FydC5yZW1vdmVQcm9kdWN0Q29tcGxldGVseShwcm9kdWN0LmlkKTtcclxuICAgICAgICAgICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gJ0FkZCB0byBDYXJ0JztcclxuICAgICAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcGFnZV9fYnV0dG9uLWFkZCcpO1xyXG4gICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1wYWdlX19idXR0b24tcmVtb3ZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJ0LmFkZFByb2R1Y3QocHJvZHVjdC5pZCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkFkZC50ZXh0Q29udGVudCA9ICdSZW1vdmUgZnJvbSBDYXJ0JztcclxuICAgICAgICAgICAgYnV0dG9uQWRkLmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QtcGFnZV9fYnV0dG9uLXJlbW92ZScpO1xyXG4gICAgICAgICAgICBidXR0b25BZGQuY2xhc3NMaXN0LnJlbW92ZSgncHJvZHVjdC1wYWdlX19idXR0b24tYWRkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUhlYWRlcigpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBidXR0b25CdXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkJ1eS5jbGFzc05hbWUgPSAnYnV0dG9uIHByb2R1Y3QtcGFnZV9fYnV0dG9uIHByb2R1Y3QtcGFnZV9fYnV0dG9uX2J1eSc7XHJcbiAgICBidXR0b25CdXkudGV4dENvbnRlbnQgPSAnQnV5IE5vdyc7XHJcbiAgICBidXR0b25zQmxvY2suYXBwZW5kKGJ1dHRvbkFkZCwgYnV0dG9uQnV5KTtcclxuICAgIHB1cmNoYXNlQmxvY2suYXBwZW5kKHByaWNlQmxvY2ssIGJ1dHRvbnNCbG9jayk7XHJcbiAgICBjb250ZW50ID09PSBudWxsIHx8IGNvbnRlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnQuYXBwZW5kKHB1cmNoYXNlQmxvY2spO1xyXG59XHJcbmZ1bmN0aW9uIGFkZExpc3RlbmVyUGhvdG9zKCkge1xyXG4gICAgY29uc3QgcGhvdG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNtYWxsLXBob3RvJyk7XHJcbiAgICBwaG90b3MuZm9yRWFjaChwaG90byA9PiB7XHJcbiAgICAgICAgcGhvdG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2hhbmdlTWFpblBob3RvKGUpKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZU1haW5QaG90byhldmVudCkge1xyXG4gICAgY29uc3QgbWFpblBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXBob3RvX19pbWdcIik7XHJcbiAgICBjb25zdCBuZXdTcmMgPSBldmVudC50YXJnZXQuc3JjO1xyXG4gICAgaWYgKG1haW5QaG90bylcclxuICAgICAgICBtYWluUGhvdG8uc3JjID0gYCR7bmV3U3JjfWA7XHJcbn1cclxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uL3NjcmlwdHMvZGF0YS1wYXJzZXInO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XHJcbmltcG9ydCB7IGNoYW5nZUZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xyXG5sZXQgcHJpY2VNaW4gPSAwO1xyXG5sZXQgcHJpY2VNYXggPSAwO1xyXG5sZXQgc3RvY2tNaW4gPSAwO1xyXG5sZXQgc3RvY2tNYXggPSAwO1xyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFZhbHVlcygpIHtcclxuICAgIGNvbnN0IHBybyA9IHByb2R1Y3RzLmdldFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG4gICAgcHJvLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsMS5wcmljZSAtIGVsMi5wcmljZTtcclxuICAgIH0pO1xyXG4gICAgcHJpY2VNYXggPSBwcm9bcHJvLmxlbmd0aCAtIDFdLnByaWNlO1xyXG4gICAgcHJpY2VNaW4gPSBwcm9bMF0ucHJpY2U7XHJcbiAgICBwcm8uc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICByZXR1cm4gZWwxLnN0b2NrIC0gZWwyLnN0b2NrO1xyXG4gICAgfSk7XHJcbiAgICBzdG9ja01pbiA9IHByb1swXS5zdG9jaztcclxuICAgIHN0b2NrTWF4ID0gcHJvW3Byby5sZW5ndGggLSAxXS5zdG9jaztcclxufVxyXG5mdW5jdGlvbiByZW5kZXJSYW5nZShwcm9wLCBtaW5WYWx1ZSwgbWF4VmFsdWUpIHtcclxuICAgIGxldCBtaW4gPSAwO1xyXG4gICAgbGV0IG1heCA9IDA7XHJcbiAgICBpZiAocHJvcCA9PSBcInByaWNlXCIpIHtcclxuICAgICAgICBtaW4gPSBwcmljZU1pbjtcclxuICAgICAgICBtYXggPSBwcmljZU1heDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG1pbiA9IHN0b2NrTWluO1xyXG4gICAgICAgIG1heCA9IHN0b2NrTWF4O1xyXG4gICAgfVxyXG4gICAgaWYgKG1pblZhbHVlID09IC0xIHx8IG1heFZhbHVlID09IC0xKSB7XHJcbiAgICAgICAgbWluVmFsdWUgPSBtaW47XHJcbiAgICAgICAgbWF4VmFsdWUgPSBtYXg7XHJcbiAgICB9XHJcbiAgICBjb25zdCByYW5nZVBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZpbHRlcl9fcmFuZ2VfJHtwcm9wfWApO1xyXG4gICAgaWYgKHJhbmdlUGxhY2UpIHtcclxuICAgICAgICBsZXQgcmFuZ2VJbm5lciA9IGA8ZGl2IGNsYXNzPVwicmFuZ2VfX2NvbnRhaW5lciByYW5nZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmFuZ2VfX2NvbnRyb2xfc2xpZGVyc1wiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJyYW5nZV9faW5wdXQgcmFuZ2VfX2lucHV0XyR7cHJvcH0gcmFuZ2VfX2lucHV0X21pblwiIGlkPVwiZnJvbVNsaWRlciR7cHJvcH1cIiB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIiR7bWluVmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCIgZGF0YS1wYXJhbT1cIiR7cHJvcH1cIiBkYXRhLXNpZGUgPVwibWluXCIvPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJyYW5nZV9faW5wdXQgcmFuZ2VfX2lucHV0XyR7cHJvcH0gcmFuZ2VfX2lucHV0X21heFwiIGlkPVwidG9TbGlkZXIke3Byb3B9XCIgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIke21heFZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4fVwiIGRhdGEtcGFyYW09XCIke3Byb3B9XCIgZGF0YS1zaWRlID1cIm1heFwiLz5cclxuICAgICAgPC9kaXY+YDtcclxuICAgICAgICBpZiAocHJvZHVjdHMucHJvZHVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByYW5nZUlubmVyICs9IGA8ZGl2IGNsYXNzPVwicmFuZ2VfX2NvbnRyb2xfZm9ybVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fY29udHJvbF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJyYW5nZV9faW5wdXRfbnVtYmVyIHJhbmdlX18ke3Byb3B9XCIgdHlwZT1cIm51bWJlclwiIGlkPVwiZnJvbUlucHV0JHtwcm9wfVwiIHZhbHVlPVwiJHttaW5WYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9JHttYXh9Lz4mIzM2O1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJhbmdlX19pbnB1dF9udW1iZXIgcmFuZ2VfXyR7cHJvcH1cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJ0b0lucHV0JHtwcm9wfVwiIHZhbHVlPVwiJHttYXhWYWx1ZX1cIiBtaW49XCIke21pbn1cIiBtYXg9JHttYXh9Lz4mIzM2O1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByYW5nZUlubmVyICs9IGA8ZGl2IGNsYXNzPVwicmFuZ2VfX2VtcHR5XCI+Tm8gcHJvZHVjdHMgZm91bmQ8L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByYW5nZUlubmVyICs9IGA8L2Rpdj5gO1xyXG4gICAgICAgIHJhbmdlUGxhY2UuaW5uZXJIVE1MID0gcmFuZ2VJbm5lcjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlX19pbnB1dCcpO1xyXG4gICAgcmFuZ2UuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VGaWx0ZXJzKGUpO1xyXG4gICAgICAgICAgICBjaGFuZ2VSYW5nZVZhbHVlKHByb3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlUmFuZ2VWYWx1ZShwcm9wKSB7XHJcbiAgICBjb25zdCByYW5nZVZhbHVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5yYW5nZV9fJHtwcm9wfWApO1xyXG4gICAgY29uc3QgcmFuZ2VJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucmFuZ2VfX2lucHV0XyR7cHJvcH1gKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VWYWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICByYW5nZVZhbHVlc1swXS52YWx1ZSA9IHJhbmdlSW5wdXRzWzBdLnZhbHVlO1xyXG4gICAgICAgIHJhbmdlVmFsdWVzWzFdLnZhbHVlID0gcmFuZ2VJbnB1dHNbMV0udmFsdWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVByaWNlUmFuZ2UoKSB7XHJcbiAgICByZW5kZXJSYW5nZShcInByaWNlXCIsIHByb2R1Y3RzLnByaWNlUmFuZ2UubWluLCBwcm9kdWN0cy5wcmljZVJhbmdlLm1heCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVN0b2NrUmFuZ2UoKSB7XHJcbiAgICByZW5kZXJSYW5nZShcInN0b2NrXCIsIHByb2R1Y3RzLnN0b2NrUmFuZ2UubWluLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1heCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJhbmdlKCkge1xyXG4gICAgY2hhbmdlUHJpY2VSYW5nZSgpO1xyXG4gICAgY2hhbmdlU3RvY2tSYW5nZSgpO1xyXG59XHJcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcmVuZGVyRXJyb3JQYWdlIH0gZnJvbSAnLi9lcnJvci1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyQ2FydFBhZ2UgfSBmcm9tICcuL2NhcnQtcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlclByb2R1Y3RQYWdlIH0gZnJvbSAnLi9wcm9kdWN0LXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJTdG9yZVBhZ2UgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xyXG5pbXBvcnQgeyBjaGFuZ2VNYWluRmlsdGVyLCB0aWNrQ2hlY2tib3hlcyB9IGZyb20gJy4vZmlsdGVySXRlbSc7XHJcbmltcG9ydCB7IG1ha2VTb3J0aW5nIH0gZnJvbSAnLi9zb3J0aW5nJztcclxuaW1wb3J0IHsgYXBwbHlWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5pbXBvcnQgeyBmaWxsSW5wdXQgfSBmcm9tIFwiLi9zZWFyY2hcIjtcclxuY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuY29uc3Qgcm91dGVzID0ge1xyXG4gICAgJyc6IHJlbmRlclN0b3JlUGFnZSxcclxuICAgICdwcm9kdWN0JzogcmVuZGVyUHJvZHVjdFBhZ2UsXHJcbiAgICAnY2FydCc6IHJlbmRlckNhcnRQYWdlLFxyXG4gICAgJ2Vycm9yJzogcmVuZGVyRXJyb3JQYWdlLFxyXG59O1xyXG5leHBvcnQgY29uc3QgaGFuZGxlTG9jYXRpb24gPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcclxuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3BhdGhdIHx8IHJvdXRlcy5lcnJvcjtcclxuICAgIHJvdXRlKCk7XHJcbn0pO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGF0aFVybChwcm9wKSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHByb3ApO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VVcmwoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFtdLFxyXG4gICAgICAgICAgICBicmFuZDogW10sXHJcbiAgICAgICAgICAgIHByaWNlOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICAgICAgICAgIHN0b2NrOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXHJcbiAgICAgICAgICAgIHN0cmluZ1NlYXJjaDogXCJcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCB2aWV3ID0gXCJcIjtcclxuICAgICAgICBsZXQgc29ydCA9IFwiXCI7XHJcbiAgICAgICAgcXVlcnlQYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwiY2F0ZWdvcnlcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzFdICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuY2F0ZWdvcnkgPSBhcnJbMV0uc3BsaXQoJyonKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcImJyYW5kXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyUmVzdWx0ID0gYXJyWzFdLnNwbGl0KCcqJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcnJSZXN1bHQubWFwKGl0ZW0gPT4gZGVjb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlci5icmFuZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInByaWNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyclswXS5pbmNsdWRlcyhcIm1pblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5wcmljZS5taW4gPSBOdW1iZXIoYXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5wcmljZS5tYXggPSBOdW1iZXIoYXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInN0b2NrXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyclswXS5pbmNsdWRlcyhcIm1pblwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5zdG9jay5taW4gPSBOdW1iZXIoYXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5zdG9jay5tYXggPSBOdW1iZXIoYXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInZpZXdcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0gYXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwic29ydFwiKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIHNvcnQgPSBhcnJbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJzZWFyY2hcIikpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIuc3RyaW5nU2VhcmNoID0gYXJyWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2hhbmdlTWFpbkZpbHRlcihmaWx0ZXIpO1xyXG4gICAgICAgIGZpbGxJbnB1dChmaWx0ZXIuc3RyaW5nU2VhcmNoKTtcclxuICAgICAgICBtYWtlU29ydGluZyhzb3J0KTtcclxuICAgICAgICBhcHBseVZpZXcodmlldyk7XHJcbiAgICAgICAgdGlja0NoZWNrYm94ZXMoKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRQYXJhbShrZXksIHZhbHVlKSB7XHJcbiAgICBpZiAoa2V5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xyXG4gICAgfVxyXG4gICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgY29uc3Qga3ZwID0gZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpLnNwbGl0KCcmJyk7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBmb3IgKDsgaSA8IGt2cC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChrdnBbaV0uc3RhcnRzV2l0aChrZXkgKyAnPScpKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWlyID0ga3ZwW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IFwic2VhcmNoXCIgfHwgcGFpclswXSA9PSBcInNvcnRcIiB8fCBwYWlyWzBdID09IFwidmlld1wiIHx8IHBhaXJbMF0gPT0gXCJwcmljZS1taW5cIiB8fCBwYWlyWzBdID09IFwicHJpY2UtbWF4XCIgfHwgcGFpclswXSA9PSBcInN0b2NrLW1pblwiIHx8IHBhaXJbMF0gPT0gXCJzdG9jay1tYXhcIikge1xyXG4gICAgICAgICAgICAgICAgcGFpclsxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhaXJbMV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWlyID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYWlyWzFdLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlQXJyID0gcGFpclsxXS5zcGxpdChcIipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVBcnJbaV0gPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYWlyWzFdID0gdmFsdWVBcnIuam9pbignKicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFpclsxXSA9IHBhaXJbMV0gKyBgKiR7dmFsdWV9YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrdnBbaV0gPSBwYWlyLmpvaW4oJz0nKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGkgPj0ga3ZwLmxlbmd0aCkge1xyXG4gICAgICAgIGt2cFtrdnAubGVuZ3RoXSA9IFtrZXksIHZhbHVlXS5qb2luKCc9Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoID09IFwiXCIpIHtcclxuICAgICAgICBrdnAuc2hpZnQoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhcmFtcyA9IGt2cC5qb2luKCcmJyk7XHJcbiAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIFwiP1wiICsgcGFyYW1zO1xyXG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogbmV3dXJsIH0sICcnLCBuZXd1cmwpO1xyXG59XHJcbndpbmRvdy5vbnBvcHN0YXRlID0gaGFuZGxlTG9jYXRpb247XHJcbiIsImltcG9ydCB7IGNoYW5nZUZpbHRlcnMgfSBmcm9tIFwiLi9maWx0ZXJJdGVtXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lckZvclNlYXJjaCgpIHtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuICAgIHNlYXJjaElucHV0ID09PSBudWxsIHx8IHNlYXJjaElucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICAgICAgY2hhbmdlRmlsdGVycyhlKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsSW5wdXQocHJvcCkge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaF9faW5wdXRcIik7XHJcbiAgICBpZiAoc2VhcmNoSW5wdXQpXHJcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSBwcm9wO1xyXG59XHJcbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xyXG5pbXBvcnQgeyByZW5kZXJHb29kcyB9IGZyb20gXCIuL2dvb2RzXCI7XHJcbmltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMoKSB7XHJcbiAgICBjb25zdCBidXR0b25Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRlcnNfX2J1dHRvbicpO1xyXG4gICAgYnV0dG9uU29ydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgc29ydEdvb2RzKGUpO1xyXG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVCdXR0b24oZSk7XHJcbiAgICAgICAgICAgIGluc2VydFBhcmFtKFwic29ydFwiLCBgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb259LSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9ufWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlQnV0dG9uKGV2ZW50KSB7XHJcbiAgICBjb25zdCBidXR0b25Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvcnRlcnNfX2J1dHRvbicpO1xyXG4gICAgYnV0dG9uU29ydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xyXG59XHJcbmZ1bmN0aW9uIHNvcnRHb29kcyhldmVudCwgb3B0LCBkaXIpIHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGV2ZW50ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lm9wdGlvbiA6IG9wdDtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGV2ZW50ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiA6IGRpcjtcclxuICAgIGlmIChvcHRpb24gPT0gXCJwcmljZVwiKSB7XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1pblwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwyLnByaWNlIC0gZWwxLnByaWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcIm1heFwiKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwxLnByaWNlIC0gZWwyLnByaWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWluXCIpIHtcclxuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbDIucmF0aW5nIC0gZWwxLnJhdGluZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtYXhcIikge1xyXG4gICAgICAgICAgICBwcm9kdWN0cy5wcm9kdWN0cy5zb3J0KGZ1bmN0aW9uIChlbDEsIGVsMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsMS5yYXRpbmcgLSBlbDIucmF0aW5nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXJHb29kcygpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU29ydGluZyhwcm9wKSB7XHJcbiAgICBjb25zdCBhcnIgPSBwcm9wLnNwbGl0KCctJyk7XHJcbiAgICBzb3J0R29vZHModW5kZWZpbmVkLCBhcnJbMF0sIGFyclsxXSk7XHJcbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1vcHRpb249XCIke2FyclswXX1cIl1bZGF0YS1kaXJlY3Rpb249XCIke2FyclsxXX1cIl1gKTtcclxuICAgIGFjdGl2ZUJ1dHRvbiA9PT0gbnVsbCB8fCBhY3RpdmVCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic29ydGVyc19fYnV0dG9uX2FjdGl2ZVwiKTtcclxufVxyXG4iLCJpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uL3NjcmlwdHMvZGF0YS1wYXJzZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0b3JlUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzPSdzdG9yZV9fcGFnZSBzdG9yZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX3NlYXJjaCBzZWFyY2gnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nc2VhcmNoX19ibG9jayc+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PSdzZWFyY2gnIGNsYXNzPSdzZWFyY2hfX2ltZycgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy9zZWFyY2gzLnBuZyc+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzZWFyY2gnIGNsYXNzPSdzZWFyY2hfX2lucHV0JyBwbGFjZWhvbGRlciA9J1NlYXJjaCBwcm9kdWN0JyBkYXRhLXBhcmFtID0gJ3NlYXJjaCc+PC9pbnB1dD4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdzdG9yZV9fbWFpbic+XHJcbiAgICAgICAgICA8YXNpZGUgY2xhc3M9J3N0b3JlX19maWx0ZXJzIGZpbHRlcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2NhdGVnb3J5Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5DYXRlZ29yeTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2NhdGVnb3J5X2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fYnJhbmQnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPkJyYW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYnJhbmRfYXJlYSc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19wcmljZSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+UHJpY2U8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19hcmVhX3JhbmdlIGZpbHRlcl9fcmFuZ2VfcHJpY2UnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fc3RvY2snPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlN0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYXJlYV9yYW5nZSBmaWx0ZXJfX3JhbmdlX3N0b2NrJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2J1dHRvbnMnPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ZpbHRlcl9fYnV0dG9uIGZpbHRlcl9fYnV0dG9uX3Jlc2V0IGJ1dHRvbic+UmVzZXQgZmlsdGVyczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2ZpbHRlcl9fYnV0dG9uIGZpbHRlcl9fYnV0dG9uX3NhdmUgYnV0dG9uJz5TYXZlIGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3M9J3N0b3JlX19nb29kcyBnb29kcyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19vcHRpb25zJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fc29ydGVycyBzb3J0ZXJzJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfbG93JyBkYXRhLW9wdGlvbiA9IFwicHJpY2VcIiBkYXRhLWRpcmVjdGlvbj1cIm1pblwiPnByaWNlICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfaGlnaCcgZGF0YS1vcHRpb24gPSBcInByaWNlXCIgZGF0YS1kaXJlY3Rpb249XCJtYXhcIj5wcmljZSAmIzg1OTM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3JhdGluZyBzb3J0ZXJzX19yYXRpbmdfbG93JyBkYXRhLW9wdGlvbiA9IFwicmF0aW5nXCIgZGF0YS1kaXJlY3Rpb249XCJtaW5cIj5yYXRpbmcgJiM4NTk1OzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19yYXRpbmcgc29ydGVyc19fcmF0aW5nX2hpZ2gnIGRhdGEtb3B0aW9uID0gXCJyYXRpbmdcIiBkYXRhLWRpcmVjdGlvbj1cIm1heFwiPnJhdGluZyAmIzg1OTM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPSdnb29kc19fdGl0bGUnPkZvdW5kOiA8c3BhbiBjbGFzcz0nZ29vZHNfX3F1YW50aXR5Jz4ke3Byb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aH08L3NwYW4+PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fdmlldyB2aWV3Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdfX2J1dHRvbic+PGltZyBhbHQ9J2dyaWQnIGNsYXNzPSd2aWV3X19idXR0b25faW1nIHZpZXdfX2J1dHRvbl9tYW55JyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nLzAwMy1ncmlkLTEucG5nJyBkYXRhLXZpZXcgPSBcIm1hbnlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdfX2J1dHRvbic+PGltZyBhbHQ9J2dyaWQnIGNsYXNzPSd2aWV3X19idXR0b25fYWN0aXZlIHZpZXdfX2J1dHRvbl9pbWcgdmlld19fYnV0dG9uX2Zldycgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy8wMDQtbWVudS0xLnBuZycgZGF0YS12aWV3ID0gXCJmZXdcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19hcmVhJz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdvb2RzUXVhbnRpdHkoKSB7XHJcbiAgICBjb25zdCBnb29kc3F1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19xdWFudGl0eScpO1xyXG4gICAgaWYgKGdvb2RzcXVhbnRpdHkpIHtcclxuICAgICAgICBnb29kc3F1YW50aXR5LmlubmVySFRNTCA9IGAke3Byb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aH1gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSBcIi4vcm91dGluZ1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JWaWV3KCkge1xyXG4gICAgY29uc3QgYnV0dG9uc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld19fYnV0dG9uX2ltZycpO1xyXG4gICAgYnV0dG9uc1ZpZXcuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VWaWV3KGV2ZW50KTtcclxuICAgICAgICAgICAgaW5zZXJ0UGFyYW0oXCJ2aWV3XCIsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52aWV3KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVZpZXcoZXYpIHtcclxuICAgIGNvbnN0IGJ1dHRvbnNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXdfX2J1dHRvbl9pbWcnKTtcclxuICAgIGJ1dHRvbnNWaWV3LmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndmlld19fYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBldi5jdXJyZW50VGFyZ2V0O1xyXG4gICAgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgZ29vZHNBcmVhID09PSBudWxsIHx8IGdvb2RzQXJlYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ29vZHNBcmVhLmNsYXNzTGlzdC50b2dnbGUoJ2dvb2RzX19hcmVhX21hbnknKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlWaWV3KHByb3ApIHtcclxuICAgIGNvbnN0IGdvb2RzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nb29kc19fYXJlYScpO1xyXG4gICAgY29uc3QgYnV0dG9uTWFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlld19fYnV0dG9uX21hbnlcIik7XHJcbiAgICBjb25zdCBidXR0b25GZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZXdfX2J1dHRvbl9mZXdcIik7XHJcbiAgICBpZiAocHJvcCA9PSBcIm1hbnlcIikge1xyXG4gICAgICAgIGdvb2RzQXJlYSA9PT0gbnVsbCB8fCBnb29kc0FyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdvb2RzQXJlYS5jbGFzc0xpc3QuYWRkKCdnb29kc19fYXJlYV9tYW55Jyk7XHJcbiAgICAgICAgYnV0dG9uRmV3ID09PSBudWxsIHx8IGJ1dHRvbkZldyA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uRmV3LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aWV3X19idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgICAgIGJ1dHRvbk1hbnkgPT09IG51bGwgfHwgYnV0dG9uTWFueSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uTWFueS5jbGFzc0xpc3QuYWRkKFwidmlld19fYnV0dG9uX2FjdGl2ZVwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuL2RhdGEtcGFyc2VyXCI7XHJcbmNsYXNzIENhcnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5jYXJ0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jYXJ0KTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gbG9jYWxTdG9yYWdlQ2FydC50b3RhbEl0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSBsb2NhbFN0b3JhZ2VDYXJ0LnRvdGFsUHJpY2U7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBsb2NhbFN0b3JhZ2VDYXJ0LnByb2R1Y3RzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gMDtcclxuICAgICAgICAgICAgdGhpcy50b3RhbFByaWNlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZFByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMudG90YWxJdGVtcysrO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RQcmljZSA9IChfYSA9IHByb2R1Y3RzLmdldFByb2R1Y3RCeUlkKHByb2R1Y3RJZCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wcmljZTtcclxuICAgICAgICBpZiAocHJvZHVjdFByaWNlKVxyXG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgKz0gcHJvZHVjdFByaWNlO1xyXG4gICAgICAgIGNvbnN0IGNhcnRQcm9kdWN0SWQgPSB0aGlzLmdldENhcnRQcm9kdWN0SWQocHJvZHVjdElkKTtcclxuICAgICAgICBpZiAoY2FydFByb2R1Y3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHNbY2FydFByb2R1Y3RJZF0uYW1vdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy50b3RhbEl0ZW1zLS07XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gKF9hID0gcHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByaWNlO1xyXG4gICAgICAgIGlmIChwcm9kdWN0UHJpY2UpXHJcbiAgICAgICAgICAgIHRoaXMudG90YWxQcmljZSAtPSBwcm9kdWN0UHJpY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzW2ldLmlkID09PSBwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzW2ldLmFtb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzW2ldLmFtb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcclxuICAgIH1cclxuICAgIGdldENhcnRQcm9kdWN0SWQocHJvZHVjdElkKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzW2ldLmlkID09PSBwcm9kdWN0SWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWxQcmljZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgJycpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlUHJvZHVjdENvbXBsZXRlbHkoaWQpIHtcclxuICAgICAgICBjb25zdCBjYXJ0UHJvZHVjdElkID0gdGhpcy5nZXRDYXJ0UHJvZHVjdElkKGlkKTtcclxuICAgICAgICBpZiAoY2FydFByb2R1Y3RJZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnByb2R1Y3RzW2NhcnRQcm9kdWN0SWRdICYmIHRoaXMucHJvZHVjdHNbY2FydFByb2R1Y3RJZF0uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVByb2R1Y3QoaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgY2FydDtcclxuIiwiaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4uL2Fzc2V0cy9kYXRhL2RhdGEnO1xyXG5jbGFzcyBQcm9kdWN0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYnJhbmRzID0ge307XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge307XHJcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zdG9ja1JhbmdlID0ge1xyXG4gICAgICAgICAgICBtaW46IC0xLFxyXG4gICAgICAgICAgICBtYXg6IC0xLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuZ2V0UHJvZHVjdHMoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0c01ldGFkYXRhKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0cyhkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGJyYW5kOiBlbC5icmFuZCxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBlbC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGRpc2NvdW50UGVyY2VudGFnZTogZWwuZGlzY291bnRQZXJjZW50YWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGVsLmlkLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBlbC5pbWFnZXMsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogZWwucHJpY2UsXHJcbiAgICAgICAgICAgICAgICByYXRpbmc6IGVsLnJhdGluZyxcclxuICAgICAgICAgICAgICAgIHN0b2NrOiBlbC5zdG9jayxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbDogZWwudGh1bWJuYWlsLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IGVsLnRpdGxlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdHNNZXRhZGF0YSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5wcm9kdWN0cykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmljZVJhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5wcmljZVJhbmdlLm1pbiA+IHByb2R1Y3QucHJpY2UpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlUmFuZ2UubWluID0gcHJvZHVjdC5wcmljZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMucHJpY2VSYW5nZS5tYXggPCBwcm9kdWN0LnByaWNlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmljZVJhbmdlLm1heCA9IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b2NrUmFuZ2UubWluID09PSAtMSB8fCB0aGlzLnN0b2NrUmFuZ2UubWluID4gcHJvZHVjdC5zdG9jaylcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvY2tSYW5nZS5taW4gPSBwcm9kdWN0LnN0b2NrO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9ja1JhbmdlLm1pbiA9PT0gLTEgfHwgdGhpcy5zdG9ja1JhbmdlLm1heCA8IHByb2R1Y3Quc3RvY2spXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b2NrUmFuZ2UubWF4ID0gcHJvZHVjdC5zdG9jaztcclxuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5icmFuZCBpbiB0aGlzLmJyYW5kcykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzW3Byb2R1Y3QuYnJhbmRdID0gW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzW3Byb2R1Y3QuYnJhbmRdLnB1c2gocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIGlmICghKHByb2R1Y3QuY2F0ZWdvcnkgaW4gdGhpcy5jYXRlZ29yaWVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3Byb2R1Y3QuY2F0ZWdvcnldID0gW3Byb2R1Y3RdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twcm9kdWN0LmNhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFByb2R1Y3RCeUlkKGlkKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHRoaXMucHJvZHVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT09IGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VhcmNoUHJvZHVjdHNCeVN0cmluZyhpbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgbm9uSW5mb3JtYXRpdmVLZXlzID0gWydpZCcsICd0aHVtYm5haWwnLCAnaW1hZ2VzJ107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kID0gMDsgaW5kIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGluZCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzW2luZF07XHJcbiAgICAgICAgICAgIGxldCBpc1ZhbHVlRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb2R1Y3QpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9uSW5mb3JtYXRpdmVLZXlzLmluY2x1ZGVzKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWx1ZUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzVmFsdWVGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kLCAxKTtcclxuICAgICAgICAgICAgICAgIGluZC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwbHlGaWx0ZXIoZmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMuZ2V0UHJvZHVjdHMoZGF0YS5wcm9kdWN0cyk7XHJcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSB7fTtcclxuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0b2NrUmFuZ2UgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBub25JbmZvcm1hdGl2ZUtleXMgPSBbJ2lkJywgJ3RodW1ibmFpbCcsICdpbWFnZXMnXTtcclxuICAgICAgICBmb3IgKGxldCBpbmQgPSAwOyBpbmQgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaW5kKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLnByb2R1Y3RzW2luZF07XHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgaW5kLS07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShmaWx0ZXIuY2F0ZWdvcnkuaW5jbHVkZXMoZWwuY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsdGVyLmJyYW5kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyLmJyYW5kLmluY2x1ZGVzKGVsLmJyYW5kKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5wcmljZS5taW4gIT09IC0xICYmIGVsLnByaWNlIDwgZmlsdGVyLnByaWNlLm1pbikge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5wcmljZS5tYXggIT09IC0xICYmIGVsLnByaWNlID4gZmlsdGVyLnByaWNlLm1heCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdG9jay5taW4gIT09IC0xICYmIGVsLnN0b2NrIDwgZmlsdGVyLnN0b2NrLm1pbikge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdG9jay5tYXggIT09IC0xICYmIGVsLnN0b2NrID4gZmlsdGVyLnN0b2NrLm1heCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdHJpbmdTZWFyY2gubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNWYWx1ZUZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJycgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9uSW5mb3JtYXRpdmVLZXlzLmluY2x1ZGVzKGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlci5zdHJpbmdTZWFyY2gudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWx1ZUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbHVlRm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNNZXRhZGF0YSgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcclxuZXhwb3J0IGNvbnN0IGFsbFByb2R1Y3RzID0gbmV3IFByb2R1Y3RzKGRhdGEucHJvZHVjdHMpO1xyXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cztcclxuIiwiY2xhc3MgRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBbXTtcclxuICAgICAgICB0aGlzLmJyYW5kID0gW107XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHtcclxuICAgICAgICAgICAgbWluOiAtMSxcclxuICAgICAgICAgICAgbWF4OiAtMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc3RvY2sgPSB7XHJcbiAgICAgICAgICAgIG1pbjogLTEsXHJcbiAgICAgICAgICAgIG1heDogLTEsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnN0cmluZ1NlYXJjaCA9ICcnO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoQ2F0ZWdvcnkoaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5LmluY2x1ZGVzKGl0ZW0pKVxyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gdGhpcy5jYXRlZ29yeS5maWx0ZXIoZWwgPT4gZWwgIT09IGl0ZW0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoQnJhbmQoaXRlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLmJyYW5kLmluY2x1ZGVzKGl0ZW0pKVxyXG4gICAgICAgICAgICB0aGlzLmJyYW5kID0gdGhpcy5icmFuZC5maWx0ZXIoZWwgPT4gZWwgIT09IGl0ZW0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5icmFuZC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgc2V0UHJpY2UocGFyYW1ldGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXIgPT09ICdtaW4nKVxyXG4gICAgICAgICAgICB0aGlzLnByaWNlLm1pbiA9IHZhbHVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5tYXggPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHNldFN0b2NrKHBhcmFtZXRlciwgdmFsdWUpIHtcclxuICAgICAgICBpZiAocGFyYW1ldGVyID09PSAnbWluJylcclxuICAgICAgICAgICAgdGhpcy5zdG9jay5taW4gPSB2YWx1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RvY2subWF4ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXRTdHJpbmdTZWFyY2godmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMuc3RyaW5nU2VhcmNoID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWUsIHRleHRDb250ZW50KSB7XHJcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub2RlLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgIGlmICh0ZXh0Q29udGVudClcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gJycgKyB0ZXh0Q29udGVudDtcclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVcmxQYXJhbWV0ZXIoa2V5LCBwYXJhbSkge1xyXG4gICAgY29uc3QgcGFyYW1zID0gZ2V0VXJsUGFyYW1ldGVycygpO1xyXG4gICAgcGFyYW1zW2tleV0gPSArcGFyYW07XHJcbiAgICBsZXQgbmV3UGFyYW1zID0gJyc7XHJcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gcGFyYW1zKVxyXG4gICAgICAgIG5ld1BhcmFtcyArPSBgPyR7cHJvcH09JHtwYXJhbXNbcHJvcF19YDtcclxuICAgIGlmIChuZXdQYXJhbXMpIHtcclxuICAgICAgICBjb25zdCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIG5ld1BhcmFtcztcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtZXRlclZhbHVlKGtleSkge1xyXG4gICAgY29uc3QgcGFyYW1zID0gZ2V0VXJsUGFyYW1ldGVycygpO1xyXG4gICAgcmV0dXJuIHBhcmFtc1trZXldO1xyXG59XHJcbmZ1bmN0aW9uIGdldFVybFBhcmFtZXRlcnMoKSB7XHJcbiAgICBsZXQgY3VycmVudFBhcmFtcyA9ICc/JztcclxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpIHtcclxuICAgICAgICBjdXJyZW50UGFyYW1zID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPycpLnNwbGljZSgxKTtcclxuICAgICAgICBjdXJyZW50UGFyYW1zLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHBhcmFtc1tlbC5zcGxpdCgnPScpWzBdXSA9ICtlbC5zcGxpdCgnPScpWzFdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtcztcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgXCJwcm9kdWN0c1wiOiBbXG4gIHtcbiAgXCJpZFwiOiAxLFxuICBcInRpdGxlXCI6IFwiaVBob25lIDlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGFwcGxlIG1vYmlsZSB3aGljaCBpcyBub3RoaW5nIGxpa2UgYXBwbGVcIixcbiAgXCJwcmljZVwiOiA1NDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjk2LFxuICBcInJhdGluZ1wiOiA0LjY5LFxuICBcInN0b2NrXCI6IDk0LFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMixcbiAgXCJ0aXRsZVwiOiBcImlQaG9uZSBYXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTSU0tRnJlZSwgTW9kZWwgQTE5MjExIDYuNS1pbmNoIFN1cGVyIFJldGluYSBIRCBkaXNwbGF5IHdpdGggT0xFRCB0ZWNobm9sb2d5IEExMiBCaW9uaWMgY2hpcCB3aXRoIC4uLlwiLFxuICBcInByaWNlXCI6IDg5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuOTQsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogMzQsXG4gIFwiYnJhbmRcIjogXCJBcHBsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzLFxuICBcInRpdGxlXCI6IFwiU2Ftc3VuZyBVbml2ZXJzZSA5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nXFwncyBuZXcgdmFyaWFudCB3aGljaCBnb2VzIGJleW9uZCBHYWxheHkgdG8gdGhlIFVuaXZlcnNlXCIsXG4gIFwicHJpY2VcIjogMTI0OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNDYsXG4gIFwicmF0aW5nXCI6IDQuMDksXG4gIFwic3RvY2tcIjogMzYsXG4gIFwiYnJhbmRcIjogXCJTYW1zdW5nXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMvMS5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0LFxuICBcInRpdGxlXCI6IFwiT1BQT0YxOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT1BQTyBGMTkgaXMgb2ZmaWNpYWxseSBhbm5vdW5jZWQgb24gQXByaWwgMjAyMS5cIixcbiAgXCJwcmljZVwiOiAyODAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjkxLFxuICBcInJhdGluZ1wiOiA0LjMsXG4gIFwic3RvY2tcIjogMTIzLFxuICBcImJyYW5kXCI6IFwiT1BQT1wiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1LFxuICBcInRpdGxlXCI6IFwiSHVhd2VpIFAzMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSHVhd2Vp4oCZcyByZS1iYWRnZWQgUDMwIFBybyBOZXcgRWRpdGlvbiB3YXMgb2ZmaWNpYWxseSB1bnZlaWxlZCB5ZXN0ZXJkYXkgaW4gR2VybWFueSBhbmQgbm93IHRoZSBkZXZpY2UgaGFzIG1hZGUgaXRzIHdheSB0byB0aGUgVUsuXCIsXG4gIFwicHJpY2VcIjogNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC41OCxcbiAgXCJyYXRpbmdcIjogNC4wOSxcbiAgXCJzdG9ja1wiOiAzMixcbiAgXCJicmFuZFwiOiBcIkh1YXdlaVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNixcbiAgXCJ0aXRsZVwiOiBcIk1hY0Jvb2sgUHJvXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWNCb29rIFBybyAyMDIxIHdpdGggbWluaS1MRUQgZGlzcGxheSBtYXkgbGF1bmNoIGJldHdlZW4gU2VwdGVtYmVyLCBOb3ZlbWJlclwiLFxuICBcInByaWNlXCI6IDE3NDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjAyLFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDgzLFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvdGh1bWJuYWlsLnBuZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNyxcbiAgXCJ0aXRsZVwiOiBcIlNhbXN1bmcgR2FsYXh5IEJvb2tcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbXN1bmcgR2FsYXh5IEJvb2sgUyAoMjAyMCkgTGFwdG9wIFdpdGggSW50ZWwgTGFrZWZpZWxkIENoaXAsIDhHQiBvZiBSQU0gTGF1bmNoZWRcIixcbiAgXCJwcmljZVwiOiAxNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjE1LFxuICBcInJhdGluZ1wiOiA0LjI1LFxuICBcInN0b2NrXCI6IDUwLFxuICBcImJyYW5kXCI6IFwiU2Ftc3VuZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgsXG4gIFwidGl0bGVcIjogXCJNaWNyb3NvZnQgU3VyZmFjZSBMYXB0b3AgNFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGUgYW5kIHNwZWVkLiBTdGFuZCBvdXQgb24gSEQgdmlkZW8gY2FsbHMgYmFja2VkIGJ5IFN0dWRpbyBNaWNzLiBDYXB0dXJlIGlkZWFzIG9uIHRoZSB2aWJyYW50IHRvdWNoc2NyZWVuLlwiLFxuICBcInByaWNlXCI6IDE0OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjIzLFxuICBcInJhdGluZ1wiOiA0LjQzLFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiTWljcm9zb2Z0IFN1cmZhY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5LFxuICBcInRpdGxlXCI6IFwiSW5maW5peCBJTkJPT0tcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluZmluaXggSW5ib29rIFgxIENpMyAxMHRoIDhHQiAyNTZHQiAxNCBXaW4xMCBHcmV5IOKAkyAxIFllYXIgV2FycmFudHlcIixcbiAgXCJwcmljZVwiOiAxMDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS44MyxcbiAgXCJyYXRpbmdcIjogNC41NCxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcIkluZmluaXhcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMCxcbiAgXCJ0aXRsZVwiOiBcIkhQIFBhdmlsaW9uIDE1LURLMTA1NldNXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTSBHYW1pbmcgTGFwdG9wIDEwdGggR2VuIENvcmUgaTUsIDhHQiwgMjU2R0IgU1NELCBHVFggMTY1MCA0R0IsIFdpbmRvd3MgMTBcIixcbiAgXCJwcmljZVwiOiAxMDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA2LjE4LFxuICBcInJhdGluZ1wiOiA0LjQzLFxuICBcInN0b2NrXCI6IDg5LFxuICBcImJyYW5kXCI6IFwiSFAgUGF2aWxpb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTEsXG4gIFwidGl0bGVcIjogXCJwZXJmdW1lIE9pbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVnYSBEaXNjb3VudCwgSW1wcmVzc2lvbiBvZiBBY3F1YSBEaSBHaW8gYnkgR2lvcmdpb0FybWFuaSBjb25jZW50cmF0ZWQgYXR0YXIgcGVyZnVtZSBPaWxcIixcbiAgXCJwcmljZVwiOiAxMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC40LFxuICBcInJhdGluZ1wiOiA0LjI2LFxuICBcInN0b2NrXCI6IDY1LFxuICBcImJyYW5kXCI6IFwiSW1wcmVzc2lvbiBvZiBBY3F1YSBEaSBHaW9cIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEyLFxuICBcInRpdGxlXCI6IFwiQnJvd24gUGVyZnVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUm95YWxfTWlyYWdlIFNwb3J0IEJyb3duIFBlcmZ1bWUgZm9yIE1lbiAmIFdvbWVuIC0gMTIwbWxcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNjYsXG4gIFwicmF0aW5nXCI6IDQsXG4gIFwic3RvY2tcIjogNTIsXG4gIFwiYnJhbmRcIjogXCJSb3lhbF9NaXJhZ2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMyxcbiAgXCJ0aXRsZVwiOiBcIkZvZyBTY2VudCBYcHJlc3NpbyBQZXJmdW1lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgQmVzdCBGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZSAxMDBtbCBGb3IgTWVuIGNvb2wgbG9uZyBsYXN0aW5nIHBlcmZ1bWVzIGZvciBNZW5cIixcbiAgXCJwcmljZVwiOiAxMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4xNCxcbiAgXCJyYXRpbmdcIjogNC41OSxcbiAgXCJzdG9ja1wiOiA2MSxcbiAgXCJicmFuZFwiOiBcIkZvZyBTY2VudCBYcHJlc3Npb1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTQsXG4gIFwidGl0bGVcIjogXCJOb24tQWxjb2hvbGljIENvbmNlbnRyYXRlZCBQZXJmdW1lIE9pbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT3JpZ2luYWwgQWwgTXVuYWtowq4gYnkgTWFoYWwgQWwgTXVzayB8IE91ciBJbXByZXNzaW9uIG9mIENsaW1hdGUgfCA2bWwgTm9uLUFsY29ob2xpYyBDb25jZW50cmF0ZWQgUGVyZnVtZSBPaWxcIixcbiAgXCJwcmljZVwiOiAxMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjYsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTE0LFxuICBcImJyYW5kXCI6IFwiQWwgTXVuYWtoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNSxcbiAgXCJ0aXRsZVwiOiBcIkVhdSBEZSBQZXJmdW1lIFNwcmF5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHZW51aW5lICBBbC1SZWhhYiBzcHJheSBwZXJmdW1lIGZyb20gVUFFL1NhdWRpIEFyYWJpYS9ZZW1lbiBIaWdoIFF1YWxpdHlcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTksXG4gIFwicmF0aW5nXCI6IDQuNyxcbiAgXCJzdG9ja1wiOiAxMDUsXG4gIFwiYnJhbmRcIjogXCJMb3JkIC0gQWwtUmVoYWJcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNixcbiAgXCJ0aXRsZVwiOiBcIkh5YWx1cm9uaWMgQWNpZCBTZXJ1bVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTFxcJ09yw4PCqWFsIFBhcmlzIGludHJvZHVjZXMgSHlhbHVyb24gRXhwZXJ0IFJlcGx1bXBpbmcgU2VydW0gZm9ybXVsYXRlZCB3aXRoIDEuNSUgSHlhbHVyb25pYyBBY2lkXCIsXG4gIFwicHJpY2VcIjogMTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjMxLFxuICBcInJhdGluZ1wiOiA0LjgzLFxuICBcInN0b2NrXCI6IDExMCxcbiAgXCJicmFuZFwiOiBcIkxcXCdPcmVhbCBQYXJpc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTcsXG4gIFwidGl0bGVcIjogXCJUcmVlIE9pbCAzMG1sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUZWEgdHJlZSBvaWwgY29udGFpbnMgYSBudW1iZXIgb2YgY29tcG91bmRzLCBpbmNsdWRpbmcgdGVycGluZW4tNC1vbCwgdGhhdCBoYXZlIGJlZW4gc2hvd24gdG8ga2lsbCBjZXJ0YWluIGJhY3RlcmlhLFwiLFxuICBcInByaWNlXCI6IDEyLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjA5LFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiSGVtYW5pIFRlYVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE4LFxuICBcInRpdGxlXCI6IFwiT2lsIEZyZWUgTW9pc3R1cml6ZXIgMTAwbWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRlcm1pdmUgT2lsIEZyZWUgTW9pc3R1cml6ZXIgd2l0aCBTUEYgMjAgaXMgc3BlY2lmaWNhbGx5IGZvcm11bGF0ZWQgd2l0aCBjZXJhbWlkZXMsIGh5YWx1cm9uaWMgYWNpZCAmIHN1bnNjcmVlbi5cIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMSxcbiAgXCJyYXRpbmdcIjogNC41NixcbiAgXCJzdG9ja1wiOiA4OCxcbiAgXCJicmFuZFwiOiBcIkRlcm1pdmVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTksXG4gIFwidGl0bGVcIjogXCJTa2luIEJlYXV0eSBTZXJ1bS5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgbmFtZTogcm9yZWMgY29sbGFnZW4gaHlhbHVyb25pYyBhY2lkIHdoaXRlIGZhY2Ugc2VydW0gcmljZU5ldCB3ZWlnaHQ6IDE1IG1cIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNjgsXG4gIFwicmF0aW5nXCI6IDQuNDIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJST1JFQyBXaGl0ZSBSaWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjAsXG4gIFwidGl0bGVcIjogXCJGcmVja2xlIFRyZWF0bWVudCBDcmVhbS0gMTVnbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFpciAmIENsZWFyIGlzIFBha2lzdGFuXFwncyBvbmx5IHB1cmUgRnJlY2tsZSBjcmVhbSB3aGljaCBoZWxwc2ZhZGUgRnJlY2tsZXMsIERhcmtzcG90cyBhbmQgcGlnbWVudHMuIE1lcmN1cnkgbGV2ZWwgaXMgMCUsIHNvIHRoZXJlIGFyZSBubyBzaWRlIGVmZmVjdHMuXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk5LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDE0MCxcbiAgXCJicmFuZFwiOiBcIkZhaXIgJiBDbGVhclwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMSxcbiAgXCJ0aXRsZVwiOiBcIi0gRGFhbCBNYXNvb3IgNTAwIGdyYW1zXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGaW5lIHF1YWxpdHkgQnJhbmRlZCBQcm9kdWN0IEtlZXAgaW4gYSBjb29sIGFuZCBkcnkgcGxhY2VcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC44MSxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiAxMzMsXG4gIFwiYnJhbmRcIjogXCJTYWFmICYgS2hhYXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvdGh1bWJuYWlsLnBuZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjIsXG4gIFwidGl0bGVcIjogXCJFbGJvdyBNYWNhcm9uaSAtIDQwMCBnbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJha2UgUGFybG9yIEJpZyBFbGJvdyBNYWNhcm9uaSAtIDQwMCBnbVwiLFxuICBcInByaWNlXCI6IDE0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OCxcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiAxNDYsXG4gIFwiYnJhbmRcIjogXCJCYWtlIFBhcmxvciBCaWdcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjMsXG4gIFwidGl0bGVcIjogXCJPcmFuZ2UgRXNzZW5jZSBGb29kIEZsYXZvdVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWNhdGlvbnMgb2YgT3JhbmdlIEVzc2VuY2UgRm9vZCBGbGF2b3VyIEZvciBDYWtlcyBhbmQgQmFraW5nIEZvb2QgSXRlbVwiLFxuICBcInByaWNlXCI6IDE0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjA0LFxuICBcInJhdGluZ1wiOiA0Ljg1LFxuICBcInN0b2NrXCI6IDI2LFxuICBcImJyYW5kXCI6IFwiQmFraW5nIEZvb2QgSXRlbXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI0LFxuICBcInRpdGxlXCI6IFwiY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwib3JpZ2luYWwgZmF1amkgY2VyZWFsIG11ZXNsaSAyNTBnbSBib3ggcGFjayBvcmlnaW5hbCBmYXVqaSBjZXJlYWxzIG11ZXNsaSBmcnVpdCBudXRzIGZsYWtlcyBicmVha2Zhc3QgY2VyZWFsIGJyZWFrIGZhc3QgZmF1amljZXJlYWxzIGNlcmVscyBjZXJlbCBmb2ppIGZvdWppXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjgsXG4gIFwicmF0aW5nXCI6IDQuOTQsXG4gIFwic3RvY2tcIjogMTEzLFxuICBcImJyYW5kXCI6IFwiZmF1amlcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI1LFxuICBcInRpdGxlXCI6IFwiR3VsYWIgUG93ZGVyIDUwIEdyYW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRyeSBSb3NlIEZsb3dlciBQb3dkZXIgR3VsYWIgUG93ZGVyIDUwIEdyYW0g4oCiIFRyZWF0cyBXb3VuZHNcIixcbiAgXCJwcmljZVwiOiA3MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNTgsXG4gIFwicmF0aW5nXCI6IDQuODcsXG4gIFwic3RvY2tcIjogNDcsXG4gIFwiYnJhbmRcIjogXCJEcnkgUm9zZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjYsXG4gIFwidGl0bGVcIjogXCJQbGFudCBIYW5nZXIgRm9yIEhvbWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJvaG8gRGVjb3IgUGxhbnQgSGFuZ2VyIEZvciBIb21lIFdhbGwgRGVjb3JhdGlvbiBNYWNyYW1lIFdhbGwgSGFuZ2luZyBTaGVsZlwiLFxuICBcInByaWNlXCI6IDQxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy44NixcbiAgXCJyYXRpbmdcIjogNC4wOCxcbiAgXCJzdG9ja1wiOiAxMzEsXG4gIFwiYnJhbmRcIjogXCJCb2hvIERlY29yXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzUuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjcsXG4gIFwidGl0bGVcIjogXCJGbHlpbmcgV29vZGVuIEJpcmRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhY2thZ2UgSW5jbHVkZSA2IEJpcmRzIHdpdGggQWRoZXNpdmUgVGFwZSBTaGFwZTogM0QgU2hhcGVkIFdvb2RlbiBCaXJkcyBNYXRlcmlhbDogV29vZGVuIE1ERiwgTGFtaW5hdGVkIDMuNW1tXCIsXG4gIFwicHJpY2VcIjogNTEsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU4LFxuICBcInJhdGluZ1wiOiA0LjQxLFxuICBcInN0b2NrXCI6IDE3LFxuICBcImJyYW5kXCI6IFwiRmx5aW5nIFdvb2RlblwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyOCxcbiAgXCJ0aXRsZVwiOiBcIjNEIEVtYmVsbGlzaG1lbnQgQXJ0IExhbXBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjNEIGxlZCBsYW1wIHN0aWNrZXIgV2FsbCBzdGlja2VyIDNkIHdhbGwgYXJ0IGxpZ2h0IG9uL29mZiBidXR0b24gIGNlbGwgb3BlcmF0ZWQgKGluY2x1ZGVkKVwiLFxuICBcInByaWNlXCI6IDIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi40OSxcbiAgXCJyYXRpbmdcIjogNC44MixcbiAgXCJzdG9ja1wiOiA1NCxcbiAgXCJicmFuZFwiOiBcIkxFRCBMaWdodHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI5LFxuICBcInRpdGxlXCI6IFwiSGFuZGNyYWZ0IENoaW5lc2Ugc3R5bGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhhbmRjcmFmdCBDaGluZXNlIHN0eWxlIGFydCBsdXh1cnkgcGFsYWNlIGhvdGVsIHZpbGxhIG1hbnNpb24gaG9tZSBkZWNvciBjZXJhbWljIHZhc2Ugd2l0aCBicmFzcyBmcnVpdCBwbGF0ZVwiLFxuICBcInByaWNlXCI6IDYwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4zNCxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiA3LFxuICBcImJyYW5kXCI6IFwibHV4dXJ5IHBhbGFjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMwLFxuICBcInRpdGxlXCI6IFwiS2V5IEhvbGRlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQXR0cmFjdGl2ZSBEZXNpZ25NZXRhbGxpYyBtYXRlcmlhbEZvdXIga2V5IGhvb2tzUmVsaWFibGUgJiBEdXJhYmxlUHJlbWl1bSBRdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuOTIsXG4gIFwicmF0aW5nXCI6IDQuOTIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJHb2xkZW5cIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzEsXG4gIFwidGl0bGVcIjogXCJNb3JuYWRpIFZlbHZldCBCZWRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcm5hZGkgVmVsdmV0IEJlZCBCYXNlIHdpdGggSGVhZGJvYXJkIFNsYXRzIFN1cHBvcnQgQ2xhc3NpYyBTdHlsZSBCZWRyb29tIEZ1cm5pdHVyZSBCZWQgU2V0XCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LFxuICBcInJhdGluZ1wiOiA0LjE2LFxuICBcInN0b2NrXCI6IDE0MCxcbiAgXCJicmFuZFwiOiBcIkZ1cm5pdHVyZSBCZWQgU2V0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMixcbiAgXCJ0aXRsZVwiOiBcIlNvZmEgZm9yIENvZmZlIENhZmVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJhdHR0YW4gT3V0ZG9vciBmdXJuaXR1cmUgU2V0IFdhdGVycHJvb2YgIFJhdHRhbiBTb2ZhIGZvciBDb2ZmZSBDYWZlXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU5LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDMwLFxuICBcImJyYW5kXCI6IFwiUmF0dHRhbiBPdXRkb29yXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMzLFxuICBcInRpdGxlXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzIFRpZXIgQ29ybmVyIFNoZWx2ZXMgfCAzIFBDcyBXYWxsIE1vdW50IEtpdGNoZW4gU2hlbGYgfCBGbG9hdGluZyBCZWRyb29tIFNoZWxmXCIsXG4gIFwicHJpY2VcIjogNzAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNyxcbiAgXCJyYXRpbmdcIjogNC4zMSxcbiAgXCJzdG9ja1wiOiAxMDYsXG4gIFwiYnJhbmRcIjogXCJLaXRjaGVuIFNoZWxmXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNCxcbiAgXCJ0aXRsZVwiOiBcIlBsYXN0aWMgVGFibGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlbvu79lcnkgZ29vZCBxdWFsaXR5IHBsYXN0aWMgdGFibGUgZm9yIG11bHRpIHB1cnBvc2Ugbm93IGluIHJlYXNvbmFibGUgcHJpY2VcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNCxcbiAgXCJyYXRpbmdcIjogNC4wMSxcbiAgXCJzdG9ja1wiOiAxMzYsXG4gIFwiYnJhbmRcIjogXCJNdWx0aSBQdXJwb3NlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNSxcbiAgXCJ0aXRsZVwiOiBcIjMgRE9PUiBQT1JUQUJMRVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWF0ZXJpYWw6IFN0YWlubGVzcyBTdGVlbCBhbmQgRmFicmljICBJdGVtIFNpemU6IDExMCBjbSB4IDQ1IGNtIHggMTc1IGNtIFBhY2thZ2UgQ29udGVudHM6IDEgU3RvcmFnZSBXYXJkcm9iZVwiLFxuICBcInByaWNlXCI6IDQxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3Ljk4LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiQW1uYU1hcnRcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM2LFxuICBcInRpdGxlXCI6IFwiU2xlZXZlIFNoaXJ0IFdvbWVuc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ290dG9uIFNvbGlkIENvbG9yIFByb2Zlc3Npb25hbCBXZWFyIFNsZWV2ZSBTaGlydCBXb21lbnMgV29yayBCbG91c2VzIFdob2xlc2FsZSBDbG90aGluZyBDYXN1YWwgUGxhaW4gQ3VzdG9tIFRvcCBPRU0gQ3VzdG9taXplZFwiLFxuICBcInByaWNlXCI6IDkwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44OSxcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiAzOSxcbiAgXCJicmFuZFwiOiBcIlByb2Zlc3Npb25hbCBXZWFyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNyxcbiAgXCJ0aXRsZVwiOiBcImFuayBUb3BzIGZvciBXb21lbnMvR2lybHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBBQ0sgT0YgMyBDQU1JU09MRVMgLFZFUlkgQ09NRk9SVEFCTEUgU09GVCBDT1RUT04gU1RVRkYsIENPTUZPUlRBQkxFIElOIEFMTCBGT1VSIFNFQVNPTlNcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuMDUsXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogMTA3LFxuICBcImJyYW5kXCI6IFwiU29mdCBDb3R0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzOCxcbiAgXCJ0aXRsZVwiOiBcInN1YmxpbWF0aW9uIHBsYWluIGtpZHMgdGFua1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwic3VibGltYXRpb24gcGxhaW4ga2lkcyB0YW5rIHRvcHMgd2hvbGVzYWxlXCIsXG4gIFwicHJpY2VcIjogMTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4xMixcbiAgXCJyYXRpbmdcIjogNC44LFxuICBcInN0b2NrXCI6IDIwLFxuICBcImJyYW5kXCI6IFwiU29mdCBDb3R0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvNC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzOSxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFN3ZWF0ZXJzIFdvb2xcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjEgQ3VzdG9tIFdpbnRlciBGYWxsIFplYnJhIEtuaXQgQ3JvcCBUb3AgV29tZW4gU3dlYXRlcnMgV29vbCBNb2hhaXIgQ29zIEN1c3RvbWl6ZSBDcmV3IE5lY2sgV29tZW5cXCcgUyBDcm9wIFRvcCBTd2VhdGVyXCIsXG4gIFwicHJpY2VcIjogNjAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy4yLFxuICBcInJhdGluZ1wiOiA0LjU1LFxuICBcInN0b2NrXCI6IDU1LFxuICBcImJyYW5kXCI6IFwiVG9wIFN3ZWF0ZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MCxcbiAgXCJ0aXRsZVwiOiBcIndvbWVuIHdpbnRlciBjbG90aGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ3b21lbiB3aW50ZXIgY2xvdGhlcyB0aGljayBmbGVlY2UgaG9vZGllIHRvcCB3aXRoIHN3ZWF0IHBhbnRqb2dnZXIgd29tZW4gc3dlYXRzdWl0IHNldCBqb2dnZXJzIHBhbnRzIHR3byBwaWVjZSBwYW50cyBzZXRcIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMzksXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogODQsXG4gIFwiYnJhbmRcIjogXCJUb3AgU3dlYXRlclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MSxcbiAgXCJ0aXRsZVwiOiBcIk5JR0hUIFNVSVRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5JR0hUIFNVSVQgUkVEIE1JQ0tZIE1PVVNFLi4gIEZvciBHaXJscy4gRmFudGFzdGljIFN1aXRzLlwiLFxuICBcInByaWNlXCI6IDU1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4wNSxcbiAgXCJyYXRpbmdcIjogNC42NSxcbiAgXCJzdG9ja1wiOiAyMSxcbiAgXCJicmFuZFwiOiBcIlJFRCBNSUNLWSBNT1VTRS4uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQyLFxuICBcInRpdGxlXCI6IFwiU3RpY2hlZCBLdXJ0YSBwbHVzIHRyb3VzZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZBQlJJQzogTElMRUlOIENIRVNUOiAyMSBMRU5HSFQ6IDM3IFRST1VTRVI6ICgzOCkgOkFSQUJJQyBMSUxFSU5cIixcbiAgXCJwcmljZVwiOiA4MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMzcsXG4gIFwicmF0aW5nXCI6IDQuMDUsXG4gIFwic3RvY2tcIjogMTQ4LFxuICBcImJyYW5kXCI6IFwiRGlnaXRhbCBQcmludGVkXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQzLFxuICBcInRpdGxlXCI6IFwiZnJvY2sgZ29sZCBwcmludGVkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHaGF6aSBmYWJyaWMgbG9uZyBmcm9jayBnb2xkIHByaW50ZWQgcmVhZHkgdG8gd2VhciBzdGl0Y2hlZCBjb2xsZWN0aW9uIChHOTkyKVwiLFxuICBcInByaWNlXCI6IDYwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTUsXG4gIFwicmF0aW5nXCI6IDQuMzEsXG4gIFwic3RvY2tcIjogMTUwLFxuICBcImJyYW5kXCI6IFwiR2hhemkgRmFicmljXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ0LFxuICBcInRpdGxlXCI6IFwiTGFkaWVzIE11bHRpY29sb3JlZCBEcmVzc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBjbGFzc3kgc2hpcnQgZm9yIHdvbWVuIGdpdmVzIHlvdSBhIGdvcmdlb3VzIGxvb2sgb24gZXZlcnlkYXkgd2VhciBhbmQgc3BlY2lhbGx5IGZvciBzZW1pLWNhc3VhbCB3ZWFycy5cIixcbiAgXCJwcmljZVwiOiA3OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuODgsXG4gIFwicmF0aW5nXCI6IDQuMDMsXG4gIFwic3RvY2tcIjogMixcbiAgXCJicmFuZFwiOiBcIkdoYXppIEZhYnJpY1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NSxcbiAgXCJ0aXRsZVwiOiBcIk1hbGFpIE1heGkgRHJlc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWR5IHRvIHdlYXIsIFVuaXF1ZSBkZXNpZ24gYWNjb3JkaW5nIHRvIG1vZGVybiBzdGFuZGFyZCBmYXNoaW9uLCBCZXN0IGZpdHRpbmcgLEltcG9ydGVkIHN0dWZmXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDUuMDcsXG4gIFwicmF0aW5nXCI6IDQuNjcsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJJRUxHWVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDYsXG4gIFwidGl0bGVcIjogXCJ3b21lblxcJ3Mgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNsb3NlOiBMYWNlLCBTdHlsZSB3aXRoIGJvdHRvbTogSW5jcmVhc2VkIGluc2lkZSwgU29sZSBNYXRlcmlhbDogUnViYmVyXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk2LFxuICBcInJhdGluZ1wiOiA0LjE0LFxuICBcInN0b2NrXCI6IDcyLFxuICBcImJyYW5kXCI6IFwiSUVMR1kgZmFzaGlvblwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ3LFxuICBcInRpdGxlXCI6IFwiU25lYWtlciBzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3ludGhldGljIExlYXRoZXIgQ2FzdWFsIFNuZWFrZXIgc2hvZXMgZm9yIFdvbWVuL2dpcmxzIFNuZWFrZXJzIEZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzcsXG4gIFwicmF0aW5nXCI6IDQuMTksXG4gIFwic3RvY2tcIjogNTAsXG4gIFwiYnJhbmRcIjogXCJTeW50aGV0aWMgTGVhdGhlclwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ4LFxuICBcInRpdGxlXCI6IFwiV29tZW4gU3RyaXAgSGVlbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmVhdHVyZXM6IEZsaXAtZmxvcHMsIE1pZCBIZWVsLCBDb21mb3J0YWJsZSwgU3RyaXBlZCBIZWVsLCBBbnRpc2tpZCwgU3RyaXBlZFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44MyxcbiAgXCJyYXRpbmdcIjogNC4wMixcbiAgXCJzdG9ja1wiOiAyNSxcbiAgXCJicmFuZFwiOiBcIlNhbmRhbHMgRmxpcCBGbG9wc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDksXG4gIFwidGl0bGVcIjogXCJDaGFwcGFscyAmIFNob2UgTGFkaWVzIE1ldGFsbGljXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXb21lbnMgQ2hhcHBhbHMgJiBTaG9lIExhZGllcyBNZXRhbGxpYyBUb25nIFRob25nIFNhbmRhbCBGbGF0IFN1bW1lciAyMDIwIE1hYXNhaSBTYW5kYWxzXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuNjIsXG4gIFwicmF0aW5nXCI6IDQuNzIsXG4gIFwic3RvY2tcIjogMTA3LFxuICBcImJyYW5kXCI6IFwiTWFhc2FpIFNhbmRhbHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUwLFxuICBcInRpdGxlXCI6IFwiV29tZW4gU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjAgTmV3IEFycml2YWxzIEdlbnVpbmUgTGVhdGhlciBGYXNoaW9uIFRyZW5kIFBsYXRmb3JtIFN1bW1lciBXb21lbiBTaG9lc1wiLFxuICBcInByaWNlXCI6IDM2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44NyxcbiAgXCJyYXRpbmdcIjogNC4zMyxcbiAgXCJzdG9ja1wiOiA0NixcbiAgXCJicmFuZFwiOiBcIkFycml2YWxzIEdlbnVpbmVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8xLmpwZWdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUxLFxuICBcInRpdGxlXCI6IFwiaGFsZiBzbGVldmVzIFQgc2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYW55IHN0b3JlIGlzIGNyZWF0aW5nIG5ldyBkZXNpZ25zIGFuZCB0cmVuZCBldmVyeSBtb250aCBhbmQgZXZlcnkgeWVhci4gRGFyYXoucGsgaGF2ZSBhIGJlYXV0aWZ1bCByYW5nZSBvZiBtZW4gZmFzaGlvbiBicmFuZHNcIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuNzYsXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogMTMyLFxuICBcImJyYW5kXCI6IFwiVmludGFnZSBBcHBhcmVsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTIsXG4gIFwidGl0bGVcIjogXCJGUkVFIEZJUkUgVCBTaGlydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwicXVhbGl0eSBhbmQgcHJvZmVzc2lvbmFsIHByaW50IC0gSXQgZG9lc25cXCd0IGp1c3QgbG9vayBoaWdoIHF1YWxpdHksIGl0IGlzIGhpZ2ggcXVhbGl0eS5cIixcbiAgXCJwcmljZVwiOiAxMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNzIsXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogMTI4LFxuICBcImJyYW5kXCI6IFwiRlJFRSBGSVJFXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUzLFxuICBcInRpdGxlXCI6IFwicHJpbnRlZCBoaWdoIHF1YWxpdHkgVCBzaGlydHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJyYW5kOiB2aW50YWdlIEFwcGFyZWwgLEV4cG9ydCBxdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuNTQsXG4gIFwicmF0aW5nXCI6IDQuODksXG4gIFwic3RvY2tcIjogNixcbiAgXCJicmFuZFwiOiBcIlZpbnRhZ2UgQXBwYXJlbFwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTQsXG4gIFwidGl0bGVcIjogXCJQdWJnIFByaW50ZWQgR3JhcGhpYyBULVNoaXJ0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IERlc2NyaXB0aW9uIEZlYXR1cmVzOiAxMDAlIFVsdHJhIHNvZnQgUG9seWVzdGVyIEplcnNleS4gVmlicmFudCAmIGNvbG9yZnVsIHByaW50aW5nIG9uIGZyb250LiBGZWVscyBzb2Z0IGFzIGNvdHRvbiB3aXRob3V0IGV2ZXIgY3JhY2tpbmdcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDQsXG4gIFwicmF0aW5nXCI6IDQuNjIsXG4gIFwic3RvY2tcIjogMTM2LFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NSxcbiAgXCJ0aXRsZVwiOiBcIk1vbmV5IEhlaXN0IFByaW50ZWQgU3VtbWVyIFQgU2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYWJyaWMgSmVyY3ksIFNpemU6IE0gJiBMIFdlYXIgU3R5bGlzaCBEdWFsIFN0aWNoZWRcIixcbiAgXCJwcmljZVwiOiA2NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuOTcsXG4gIFwicmF0aW5nXCI6IDQuOSxcbiAgXCJzdG9ja1wiOiAxMjIsXG4gIFwiYnJhbmRcIjogXCJUaGUgV2FyZWhvdXNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NixcbiAgXCJ0aXRsZVwiOiBcIlNuZWFrZXJzIEpvZ2dlcnMgU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdlbmRlcjogTWVuICwgQ29sb3JzOiBTYW1lIGFzIERpc3BsYXllZENvbmRpdGlvbjogMTAwJSBCcmFuZCBOZXdcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuNTcsXG4gIFwicmF0aW5nXCI6IDQuMzgsXG4gIFwic3RvY2tcIjogNixcbiAgXCJicmFuZFwiOiBcIlNuZWFrZXJzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni81LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU3LFxuICBcInRpdGxlXCI6IFwiTG9hZmVycyBmb3IgbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZW4gU2hvZXMgLSBMb2FmZXJzIGZvciBtZW4gLSBSdWJiZXIgU2hvZXMgLSBOeWxvbiBTaG9lcyAtIFNob2VzIGZvciBtZW4gLSBNb2NjYXNzaW9uIC0gUHVyZSBOeWxvbiAoUnViYmVyKSBFeHBvdCBRdWFsaXR5LlwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45MSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiAyMCxcbiAgXCJicmFuZFwiOiBcIlJ1YmJlclwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU4LFxuICBcInRpdGxlXCI6IFwiZm9ybWFsIG9mZmljZXMgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhdHRlcm4gVHlwZTogU29saWQsIE1hdGVyaWFsOiBQVSwgVG9lIFNoYXBlOiBQb2ludGVkIFRvZSAsT3V0c29sZSBNYXRlcmlhbDogUnViYmVyXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLFxuICBcInJhdGluZ1wiOiA0LjQxLFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU5LFxuICBcInRpdGxlXCI6IFwiU3ByaW5nIGFuZCBzdW1tZXJzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ29tZm9ydGFibGUgc3RyZXRjaCBjbG90aCwgbGlnaHR3ZWlnaHQgYm9keTsgLHJ1YmJlciBzb2xlLCBhbnRpLXNraWQgd2VhcjtcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC43MSxcbiAgXCJyYXRpbmdcIjogNC4zMyxcbiAgXCJzdG9ja1wiOiAxMzcsXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYwLFxuICBcInRpdGxlXCI6IFwiU3R5bGlzaCBDYXN1YWwgSmVhbnMgU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhpZ2ggUXVhbGl0eSAsU3R5bGlzaCBkZXNpZ24gLENvbWZvcnRhYmxlIHdlYXIgLEZBc2hpb24gLER1cmFibGVcIixcbiAgXCJwcmljZVwiOiA1OCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy41NSxcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiAxMjksXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjEsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIFN0cmFwcyBXcmlzdHdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsZTpTcG9ydCAsQ2xhc3A6QnVja2xlcyAsV2F0ZXIgUmVzaXN0YW5jZSBEZXB0aDozQmFyXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjE0LFxuICBcInJhdGluZ1wiOiA0LjYzLFxuICBcInN0b2NrXCI6IDkxLFxuICBcImJyYW5kXCI6IFwiTmF2aWZvcmNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYyLFxuICBcInRpdGxlXCI6IFwiV2F0ZXJwcm9vZiBMZWF0aGVyIEJyYW5kIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXYXRjaCBDcm93biBXaXRoIEVudmlyb25tZW50YWwgSVBTIEJyb256ZSBFbGVjdHJvcGxhdGluZzsgRGlzcGxheSBzeXN0ZW0gb2YgMTIgaG91cnNcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xNSxcbiAgXCJyYXRpbmdcIjogNC4wNSxcbiAgXCJzdG9ja1wiOiA5NSxcbiAgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MyxcbiAgXCJ0aXRsZVwiOiBcIlJveWFsIEJsdWUgUHJlbWl1bSBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNpbHZlciBDaGFpbiBSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2ggTGF0ZXN0IEFuYWxvZyBXYXRjaFwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjU2LFxuICBcInJhdGluZ1wiOiA0Ljg5LFxuICBcInN0b2NrXCI6IDE0MixcbiAgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvNC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjQsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIFN0cmFwIFNrZWxldG9uIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMZWF0aGVyIFN0cmFwIFNrZWxldG9uIFdhdGNoIGZvciBNZW4gLSBTdHlsaXNoIGFuZCBMYXRlc3QgRGVzaWduXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjIsXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogNjEsXG4gIFwiYnJhbmRcIjogXCJTdHJhcCBTa2VsZXRvblwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjUsXG4gIFwidGl0bGVcIjogXCJTdGFpbmxlc3MgU3RlZWwgV3Jpc3QgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxpc2ggV2F0Y2ggRm9yIE1hbiAoTHV4dXJ5KSBDbGFzc3kgTWVuXFwncyBTdGFpbmxlc3MgU3RlZWwgV3Jpc3QgV2F0Y2ggLSBCb3ggUGFja2VkXCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljc5LFxuICBcInJhdGluZ1wiOiA0Ljc5LFxuICBcInN0b2NrXCI6IDk0LFxuICBcImJyYW5kXCI6IFwiU3RhaW5sZXNzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjYsXG4gIFwidGl0bGVcIjogXCJTdGVlbCBBbmFsb2cgQ291cGxlIFdhdGNoZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZWdhbnQgZGVzaWduLCBTdHlsaXNoICxVbmlxdWUgJiBUcmVuZHksQ29tZm9ydGFibGUgd2VhclwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjIzLFxuICBcInJhdGluZ1wiOiA0Ljc5LFxuICBcInN0b2NrXCI6IDI0LFxuICBcImJyYW5kXCI6IFwiRWFzdGVybiBXYXRjaGVzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni80LkpQR1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY3LFxuICBcInRpdGxlXCI6IFwiRmFzaGlvbiBNYWduZXRpYyBXcmlzdCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQnV5IHRoaXMgYXdlc29tZSAgVGhlIHByb2R1Y3QgaXMgb3JpZ2luYWxseSBtYW51ZmFjdHVyZWQgYnkgdGhlIGNvbXBhbnkgYW5kIGl0XFwncyBhIHRvcCBzZWxsaW5nIHByb2R1Y3Qgd2l0aCBhIHZlcnkgcmVhc29uYWJsZVwiLFxuICBcInByaWNlXCI6IDYwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi42OSxcbiAgXCJyYXRpbmdcIjogNC4wMyxcbiAgXCJzdG9ja1wiOiA0NixcbiAgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2OCxcbiAgXCJ0aXRsZVwiOiBcIlN0eWxpc2ggTHV4dXJ5IERpZ2l0YWwgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxpc2ggTHV4dXJ5IERpZ2l0YWwgV2F0Y2ggRm9yIEdpcmxzIC8gV29tZW4gLSBMZWQgU21hcnQgTGFkaWVzIFdhdGNoZXMgRm9yIEdpcmxzXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDkuMDMsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogNzcsXG4gIFwiYnJhbmRcIjogXCJMdXh1cnkgRGlnaXRhbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC8yLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY5LFxuICBcInRpdGxlXCI6IFwiR29sZGVuIFdhdGNoIFBlYXJscyBCcmFjZWxldCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEdvbGRlbiBXYXRjaCBQZWFybHMgQnJhY2VsZXQgV2F0Y2ggRm9yIEdpcmxzIC0gR29sZGVuIENoYWluIExhZGllcyBCcmFjZWxhdGUgV2F0Y2ggZm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjU1LFxuICBcInJhdGluZ1wiOiA0Ljc3LFxuICBcInN0b2NrXCI6IDg5LFxuICBcImJyYW5kXCI6IFwiV2F0Y2ggUGVhcmxzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MCxcbiAgXCJ0aXRsZVwiOiBcIlN0YWlubGVzcyBTdGVlbCBXb21lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBTa21laSAxODMwIFNoZWxsIERpYWwgU3RhaW5sZXNzIFN0ZWVsIFdvbWVuIFdyaXN0IFdhdGNoIExhZHkgQnJhY2VsZXQgV2F0Y2ggUXVhcnR6IFdhdGNoZXMgTGFkaWVzXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguOTgsXG4gIFwicmF0aW5nXCI6IDQuMDgsXG4gIFwic3RvY2tcIjogMTExLFxuICBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcxLFxuICBcInRpdGxlXCI6IFwiV29tZW4gU2hvdWxkZXIgQmFnc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG91aXNXaWxsIFdvbWVuIFNob3VsZGVyIEJhZ3MgTG9uZyBDbHV0Y2hlcyBDcm9zcyBCb2R5IEJhZ3MgUGhvbmUgQmFncyBQVSBMZWF0aGVyIEhhbmQgQmFncyBMYXJnZSBDYXBhY2l0eSBDYXJkIEhvbGRlcnMgWmlwcGVyIENvaW4gUHVyc2VzIEZhc2hpb24gQ3Jvc3Nib2R5IEJhZ3MgZm9yIEdpcmxzIExhZGllc1wiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC42NSxcbiAgXCJyYXRpbmdcIjogNC43MSxcbiAgXCJzdG9ja1wiOiAxNyxcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MixcbiAgXCJ0aXRsZVwiOiBcIkhhbmRiYWcgRm9yIEdpcmxzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiAyNyxcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MyxcbiAgXCJ0aXRsZVwiOiBcIkZhbmN5IGhhbmQgY2x1dGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIixcbiAgXCJwcmljZVwiOiA0NCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzksXG4gIFwicmF0aW5nXCI6IDQuMTgsXG4gIFwic3RvY2tcIjogMTAxLFxuICBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzQsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIEhhbmQgQmFnXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJdCBmZWF0dXJlcyBhbiBhdHRyYWN0aXZlIGRlc2lnbiB0aGF0IG1ha2VzIGl0IGEgbXVzdCBoYXZlIGFjY2Vzc29yeSBpbiB5b3VyIGNvbGxlY3Rpb24uIFdlIHNlbGwgZGlmZmVyZW50IGtpbmQgb2YgYmFncyBmb3IgYm95cywga2lkcywgd29tZW4sIGdpcmxzIGFuZCBhbHNvIGZvciB1bmlzZXguXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjE5LFxuICBcInJhdGluZ1wiOiA0LjAxLFxuICBcInN0b2NrXCI6IDQzLFxuICBcImJyYW5kXCI6IFwiQ29wZW5oYWdlbiBMdXhlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc1LFxuICBcInRpdGxlXCI6IFwiU2V2ZW4gUG9ja2V0IFdvbWVuIEJhZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2V2ZW4gUG9ja2V0IFdvbWVuIEJhZyBIYW5kYmFncyBMYWR5IFNob3VsZGVyIENyb3NzYm9keSBCYWcgRmVtYWxlIFB1cnNlIFNldmVuIFBvY2tldCBCYWdcIixcbiAgXCJwcmljZVwiOiA2OCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuODcsXG4gIFwicmF0aW5nXCI6IDQuOTMsXG4gIFwic3RvY2tcIjogMTMsXG4gIFwiYnJhbmRcIjogXCJTdGVhbCBGcmFtZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc2LFxuICBcInRpdGxlXCI6IFwiU2lsdmVyIFJpbmcgU2V0IFdvbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJKZXdlbHJ5IFR5cGU6UmluZ3NDZXJ0aWZpY2F0ZSBUeXBlOk5vbmVQbGF0aW5nOlNpbHZlciBQbGF0ZWRTaGFwZWF0dGVybjpub25lU3R5bGU6Q0xBU1NJQ1JlbGlnaW91c1wiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy41NyxcbiAgXCJyYXRpbmdcIjogNC42MSxcbiAgXCJzdG9ja1wiOiA1MSxcbiAgXCJicmFuZFwiOiBcIkRhcm9qYXlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzcsXG4gIFwidGl0bGVcIjogXCJSb3NlIFJpbmdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJyYW5kOiBUaGUgR3JlZXRpbmdzIEZsb3dlciBDb2xvdXI6IFJlZFJpbmcgQ29sb3VyOiBHb2xkZW5TaXplOiBBZGp1c3RhYmxlXCIsXG4gIFwicHJpY2VcIjogMTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjIyLFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDE0OSxcbiAgXCJicmFuZFwiOiBcIkNvcGVuaGFnZW4gTHV4ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzgsXG4gIFwidGl0bGVcIjogXCJSaGluZXN0b25lIEtvcmVhbiBTdHlsZSBPcGVuIFJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIEpld2VsbGVyeSAzUGNzIEFkanVzdGFibGUgUGVhcmwgUmhpbmVzdG9uZSBLb3JlYW4gU3R5bGUgT3BlbiBSaW5ncyBGb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4wMixcbiAgXCJyYXRpbmdcIjogNC42OSxcbiAgXCJzdG9ja1wiOiA5LFxuICBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc5LFxuICBcInRpdGxlXCI6IFwiRWxlZ2FudCBGZW1hbGUgUGVhcmwgRWFycmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZWdhbnQgRmVtYWxlIFBlYXJsIEVhcnJpbmdzIFNldCBaaXJjb24gUGVhcmwgRWFyaW5ncyBXb21lbiBQYXJ0eSBBY2Nlc3NvcmllcyA5IFBhaXJzL1NldFwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi44LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDE2LFxuICBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzkvMS5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MCxcbiAgXCJ0aXRsZVwiOiBcIkNoYWluIFBpbiBUYXNzZWwgRWFycmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhaXIgT2YgRWFyIEN1ZmYgQnV0dGVyZmx5IExvbmcgQ2hhaW4gUGluIFRhc3NlbCBFYXJyaW5ncyAtIFNpbHZlciAoIExvbmcgTGlmZSBRdWFsaXR5IFByb2R1Y3QpXCIsXG4gIFwicHJpY2VcIjogNDUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljc1LFxuICBcInJhdGluZ1wiOiA0LjU5LFxuICBcInN0b2NrXCI6IDksXG4gIFwiYnJhbmRcIjogXCJDdWZmIEJ1dHRlcmZseVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgxLFxuICBcInRpdGxlXCI6IFwiUm91bmQgU2lsdmVyIEZyYW1lIFN1biBHbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIHBhaXIgb2Ygc3VuZ2xhc3NlcyBjYW4gcHJvdGVjdCB5b3VyIGV5ZXMgZnJvbSBiZWluZyBodXJ0LiBGb3IgY2FyIGRyaXZpbmcsIHZhY2F0aW9uIHRyYXZlbCwgb3V0ZG9vciBhY3Rpdml0aWVzLCBzb2NpYWwgZ2F0aGVyaW5ncyxcIixcbiAgXCJwcmljZVwiOiAxOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMSxcbiAgXCJyYXRpbmdcIjogNC45NCxcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkRlc2lnbmVyIFN1biBHbGFzc2VzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgyLFxuICBcInRpdGxlXCI6IFwiS2FiaXIgU2luZ2ggU3F1YXJlIFN1bmdsYXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJPcmlnbmFsIE1ldGFsIEthYmlyIFNpbmdoIGRlc2lnbiAyMDIwIFN1bmdsYXNzZXMgTWVuIEJyYW5kIERlc2lnbmVyIFN1biBHbGFzc2VzIEthYmlyIFNpbmdoIFNxdWFyZSBTdW5nbGFzc1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LFxuICBcInJhdGluZ1wiOiA0LjYyLFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODMsXG4gIFwidGl0bGVcIjogXCJXaWxleSBYIE5pZ2h0IFZpc2lvbiBZZWxsb3cgR2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2lsZXkgWCBOaWdodCBWaXNpb24gWWVsbG93IEdsYXNzZXMgZm9yIFJpZGVycyAtIE5pZ2h0IFZpc2lvbiBBbnRpIEZvZyBEcml2aW5nIEdsYXNzZXMgLSBGcmVlIE5pZ2h0IEdsYXNzIENvdmVyIC0gU2hpZWxkIEV5ZXMgRnJvbSBEdXN0IGFuZCBWaXJ1cy0gRm9yIE5pZ2h0IFNwb3J0IE1hdGNoZXNcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4zMyxcbiAgXCJyYXRpbmdcIjogNC45NyxcbiAgXCJzdG9ja1wiOiAxMTUsXG4gIFwiYnJhbmRcIjogXCJtYXN0YXIgd2F0Y2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NCxcbiAgXCJ0aXRsZVwiOiBcIlNxdWFyZSBTdW5nbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIE92ZXJzaXplZCBTcXVhcmUgU3VuZ2xhc3NlcyBSZXRybyBHcmFkaWVudCBCaWcgRnJhbWUgU3VuZ2xhc3NlcyBGb3IgV29tZW4gT25lIFBpZWNlIEdhZmFzIFNoYWRlIE1pcnJvciBDbGVhciBMZW5zIDE3MDU5XCIsXG4gIFwicHJpY2VcIjogMjgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjg5LFxuICBcInJhdGluZ1wiOiA0LjY0LFxuICBcInN0b2NrXCI6IDY0LFxuICBcImJyYW5kXCI6IFwibWFzdGFyIHdhdGNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg1LFxuICBcInRpdGxlXCI6IFwiTG91aXNXaWxsIE1lbiBTdW5nbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3Vpc1dpbGwgTWVuIFN1bmdsYXNzZXMgUG9sYXJpemVkIFN1bmdsYXNzZXMgVVY0MDAgU3VuZ2xhc3NlcyBEYXkgTmlnaHQgRHVhbCBVc2UgU2FmZXR5IERyaXZpbmcgTmlnaHQgVmlzaW9uIEV5ZXdlYXIgQUwtTUcgRnJhbWUgU3VuIEdsYXNzZXMgd2l0aCBGcmVlIEJveCBmb3IgRHJpdmVyc1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4yNyxcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA5MixcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NixcbiAgXCJ0aXRsZVwiOiBcIkJsdWV0b290aCBBdXhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJsdWV0b290aCBBdXggQmx1ZXRvb3RoIENhciBBdXggQ2FyIEJsdWV0b290aCBUcmFuc21pdHRlciBBdXggQXVkaW8gUmVjZWl2ZXIgSGFuZGZyZWUgQ2FyIEJsdWV0b290aCBNdXNpYyBSZWNlaXZlciBVbml2ZXJzYWwgMy41bW0gU3RyZWFtaW5nIEEyRFAgV2lyZWxlc3MgQXV0byBBVVggQXVkaW8gQWRhcHRlciBXaXRoIE1pYyBGb3IgUGhvbmUgTVAzXCIsXG4gIFwicHJpY2VcIjogMjUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjU2LFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDIyLFxuICBcImJyYW5kXCI6IFwiQ2FyIEF1eFwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NyxcbiAgXCJ0aXRsZVwiOiBcInQgVGVtcGVyYXR1cmUgQ29udHJvbGxlciBJbmN1YmF0b3IgQ29udHJvbGxlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQm90aCBIZWF0IGFuZCBDb29sIFB1cnBvc2UsIFRlbXBlcmF0dXJlIGNvbnRyb2wgcmFuZ2U7IC01MCB0byArMTEwLCBUZW1wZXJhdHVyZSBtZWFzdXJlbWVudCBhY2N1cmFjeTsgMC4xLCBDb250cm9sIGFjY3VyYWN5OyAwLjFcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMyxcbiAgXCJyYXRpbmdcIjogNC41NCxcbiAgXCJzdG9ja1wiOiAzNyxcbiAgXCJicmFuZFwiOiBcIlcxMjA5IERDMTJWXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODgsXG4gIFwidGl0bGVcIjogXCJUQyBSZXVzYWJsZSBTaWxpY29uZSBNYWdpYyBXYXNoaW5nIEdsb3Zlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVEMgUmV1c2FibGUgU2lsaWNvbmUgTWFnaWMgV2FzaGluZyBHbG92ZXMgd2l0aCBTY3J1YmJlciwgQ2xlYW5pbmcgQnJ1c2ggU2NydWJiZXIgR2xvdmVzIEhlYXQgUmVzaXN0YW50IFBhaXIgZm9yIENsZWFuaW5nIG9mIEtpdGNoZW4sIERpc2hlcywgVmVnZXRhYmxlcyBhbmQgRnJ1aXRzLCBCYXRocm9vbSwgQ2FyIFdhc2gsIFBldCBDYXJlIGFuZCBNdWx0aXB1cnBvc2VcIixcbiAgXCJwcmljZVwiOiAyOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xOSxcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA0MixcbiAgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg5LFxuICBcInRpdGxlXCI6IFwiUXVhbGNvbW0gb3JpZ2luYWwgQ2FyIENoYXJnZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcImJlc3QgUXVhbGl0eSBDSGFyZ2VyICwgSGlnaGx5IFJlY29tbWVuZGVkIHRvIGFsbCBiZXN0IFF1YWxpdHkgQ0hhcmdlciAsIEhpZ2hseSBSZWNvbW1lbmRlZCB0byBhbGxcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNTMsXG4gIFwicmF0aW5nXCI6IDQuMixcbiAgXCJzdG9ja1wiOiA3OSxcbiAgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTAsXG4gIFwidGl0bGVcIjogXCJDeWNsZSBCaWtlIEdsb3dcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlVuaXZlcnNhbCBmaXRtZW50IGFuZCBlYXN5IHRvIGluc3RhbGwgbm8gc3BlY2lhbCB3aXJlcywgY2FuIGJlIGVhc2lseSBpbnN0YWxsZWQgYW5kIHJlbW92ZWQuIEZpdHMgbW9zdCBzdGFuZGFyZCB0eXJlIGFpciBzdGVtIHZhbHZlcyBvZiByb2FkLCBtb3VudGFpbiBiaWN5Y2xlcywgbW90b2N5Y2xlcyBhbmQgY2Fycy5CcmlnaHQgbGVkIHdpbGwgdHVybiBvbiB3XCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjA4LFxuICBcInJhdGluZ1wiOiA0LjEsXG4gIFwic3RvY2tcIjogNjMsXG4gIFwiYnJhbmRcIjogXCJOZW9uIExFRCBMaWdodFwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkxLFxuICBcInRpdGxlXCI6IFwiQmxhY2sgTW90b3JiaWtlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbmdpbmUgVHlwZTpXZXQgc3VtcCwgU2luZ2xlIEN5bGluZGVyLCBGb3VyIFN0cm9rZSwgVHdvIFZhbHZlcywgQWlyIENvb2xlZCB3aXRoIFNPSEMgKFNpbmdsZSBPdmVyIEhlYWQgQ2FtKSBDaGFpbiBEcml2ZSBCb3JlICYgU3Ryb2tlOjQ3LjAgeCA0OS41IE1NXCIsXG4gIFwicHJpY2VcIjogNTY5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy42MyxcbiAgXCJyYXRpbmdcIjogNC4wNCxcbiAgXCJzdG9ja1wiOiAxMTUsXG4gIFwiYnJhbmRcIjogXCJNRVRSTyA3MGNjIE1vdG9yY3ljbGUgLSBNUjcwXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTIsXG4gIFwidGl0bGVcIjogXCJIT1QgU0FMRSBJTiBFVVJPUEUgZWxlY3RyaWMgcmFjaW5nIG1vdG9yY3ljbGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhPVCBTQUxFIElOIEVVUk9QRSBlbGVjdHJpYyByYWNpbmcgbW90b3JjeWNsZSBlbGVjdHJpYyBtb3RvcmN5Y2xlIGZvciBzYWxlIGFkdWx0IGVsZWN0cmljIG1vdG9yY3ljbGVzXCIsXG4gIFwicHJpY2VcIjogOTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC40LFxuICBcInJhdGluZ1wiOiA0LjE5LFxuICBcInN0b2NrXCI6IDIyLFxuICBcImJyYW5kXCI6IFwiQlJBVkUgQlVMTFwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkzLFxuICBcInRpdGxlXCI6IFwiQXV0b21hdGljIE1vdG9yIEdhcyBNb3RvcmN5Y2xlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMTUwY2MgNC1TdHJva2UgTW90b3JjeWNsZSBBdXRvbWF0aWMgTW90b3IgR2FzIE1vdG9yY3ljbGVzIFNjb290ZXIgbW90b3JjeWNsZXMgMTUwY2Mgc2Nvb3RlclwiLFxuICBcInByaWNlXCI6IDEwNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMzQsXG4gIFwicmF0aW5nXCI6IDQuODQsXG4gIFwic3RvY2tcIjogMTI3LFxuICBcImJyYW5kXCI6IFwic2hvY2sgYWJzb3JiZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NCxcbiAgXCJ0aXRsZVwiOiBcIm5ldyBhcnJpdmFscyBGYXNoaW9uIG1vdG9jcm9zcyBnb2dnbGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJuZXcgYXJyaXZhbHMgRmFzaGlvbiBtb3RvY3Jvc3MgZ29nZ2xlcyBtb3RvcmN5Y2xlIG1vdG9jcm9zcyByYWNpbmcgbW90b3JjeWNsZVwiLFxuICBcInByaWNlXCI6IDkwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy44NSxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiAxMDksXG4gIFwiYnJhbmRcIjogXCJKSUVQT0xMWVwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTUsXG4gIFwidGl0bGVcIjogXCJXaG9sZXNhbGUgY2FyZ28gbGFzaGluZyBCZWx0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaG9sZXNhbGUgY2FyZ28gbGFzaGluZyBCZWx0IFRpZSBEb3duIGVuZCBSYXRjaGV0IHN0cmFwIGN1c3RvbWl6ZWQgc3RyYXAgMjVtbSBtb3RvcmN5Y2xlIDE1MDBrZ3Mgd2l0aCBydWJiZXIgaGFuZGxlXCIsXG4gIFwicHJpY2VcIjogOTMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy42NyxcbiAgXCJyYXRpbmdcIjogNC4yMSxcbiAgXCJzdG9ja1wiOiAxNDQsXG4gIFwiYnJhbmRcIjogXCJYaWFuZ2xlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTYsXG4gIFwidGl0bGVcIjogXCJsaWdodGluZyBjZWlsaW5nIGtpdGNoZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldob2xlc2FsZSBzbGltIGhhbmdpbmcgZGVjb3JhdGl2ZSBraWQgcm9vbSBsaWdodGluZyBjZWlsaW5nIGtpdGNoZW4gY2hhbmRlbGllcnMgcGVuZGFudCBsaWdodCBtb2Rlcm5cIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuODksXG4gIFwicmF0aW5nXCI6IDQuODMsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJsaWdodGluZ2JyaWxsaWFuY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTcsXG4gIFwidGl0bGVcIjogXCJNZXRhbCBDZXJhbWljIEZsb3dlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWV0YWwgQ2VyYW1pYyBGbG93ZXIgQ2hhbmRlbGllciBIb21lIExpZ2h0aW5nIEFtZXJpY2FuIFZpbnRhZ2UgSGFuZ2luZyBMaWdodGluZyBQZW5kYW50IExhbXBcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTQsXG4gIFwicmF0aW5nXCI6IDQuOTMsXG4gIFwic3RvY2tcIjogMTQ2LFxuICBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5OCxcbiAgXCJ0aXRsZVwiOiBcIjMgbGlnaHRzIGxuZGVucGFudCBraXRjaGVuIGlzbGFuZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMyBsaWdodHMgbG5kZW5wYW50IGtpdGNoZW4gaXNsYW5nIGRpbmluZyByb29tIHBlbmRhbnQgcmljZSBwYXBlciBjaGFuZGVsaWVyIGNvbnRlbXBvcmFyeSBsZWQgcGVuZGFudCBsaWdodCBtb2Rlcm4gY2hhbmRlbGllclwiLFxuICBcInByaWNlXCI6IDM0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjkyLFxuICBcInJhdGluZ1wiOiA0Ljk5LFxuICBcInN0b2NrXCI6IDQ0LFxuICBcImJyYW5kXCI6IFwiREFEQVdVXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk5LFxuICBcInRpdGxlXCI6IFwiQW1lcmljYW4gVmludGFnZSBXb29kIFBlbmRhbnQgTGlnaHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFtZXJpY2FuIFZpbnRhZ2UgV29vZCBQZW5kYW50IExpZ2h0IEZhcm1ob3VzZSBBbnRpcXVlIEhhbmdpbmcgTGFtcCBMYW1wYXJhIENvbGdhbnRlXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguODQsXG4gIFwicmF0aW5nXCI6IDQuMzIsXG4gIFwic3RvY2tcIjogMTM4LFxuICBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEwMCxcbiAgXCJ0aXRsZVwiOiBcIkNyeXN0YWwgY2hhbmRlbGllciBtYXJpYSB0aGVyZXNhIGZvciAxMiBsaWdodFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3J5c3RhbCBjaGFuZGVsaWVyIG1hcmlhIHRoZXJlc2EgZm9yIDEyIGxpZ2h0XCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDEzMyxcbiAgXCJicmFuZFwiOiBcIllJT1NJXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH1cbiAgXSxcbiAgXCJ0b3RhbFwiOiAxMDAsXG4gIFwic2tpcFwiOiAwLFxuICBcImxpbWl0XCI6IDEwMFxuICB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcm91dGluZyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21haW4tdGVtcGxhdGUnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdG9yZS1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXJyb3ItcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NhcnQtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21vZGFsLXBhZ2UnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9yYW5nZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2ZpbHRlckl0ZW0nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9nb29kcyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZXcnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zb3J0aW5nJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9