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





const defaultProductsPerPage = '4';
const defaultPage = '1';
function renderCartPage() {
    const content = document.querySelector('.main');
    if (content) {
        if (localStorage.cart && JSON.parse(localStorage.cart).products.length) {
            const productsBlock = renderProductsBlock();
            const summaryBlock = renderSummaryBlock();
            const productsSummaryBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('products-summary');
            productsSummaryBlock.append(productsBlock, summaryBlock);
            const paginationBlock = renderPagination();
            content.append(productsSummaryBlock, paginationBlock);
        }
        else {
            content.textContent = 'Cart is Empty';
        }
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
            const productRating = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data-rating', currentProduct.rating);
            const productDiscount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('product__data-discount', currentProduct.discountPercentage);
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
                        console.log(productBuyDataBlock);
                        (_c = productBuyDataBlock.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
                    }
                    console.log(productId, cartProductId);
                    _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].removeProduct(+productId);
                    const productsPerPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('itemsPerPage') || +defaultProductsPerPage;
                    let currentPage = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.getUrlParameterValue)('page') || +defaultPage;
                    if (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length === 0) {
                        const content = document.querySelector('.main');
                        if (content) {
                            content.textContent = 'Cart is Empty';
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
                                summaryPrice.textContent = "" + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice;
                            }
                            const newProductsPriceValue = document.querySelector('.content__price-value-new');
                            if (newProductsPriceValue && (newProductsPriceValue === null || newProductsPriceValue === void 0 ? void 0 : newProductsPriceValue.textContent)) {
                                newProductsPriceValue.textContent = '' + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (document.querySelectorAll('.promo-table__row').length / 10));
                            }
                        }
                        else {
                            const content = document.querySelector('.main');
                            if (content)
                                content.innerHTML = 'Cart is Empty';
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
    const summaryHeader = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('summary__header', 'Header');
    const summaryContent = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content');
    const totalProductsAmount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__amount', `Products: `);
    const totalProductsAmountValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__amount-value', _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalItems);
    totalProductsAmount.append(totalProductsAmountValue);
    const totalProductsPrice = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price', `Total: `);
    const totalProductsPriceValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price-value', _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice);
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
                    const promoTableHeader = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo-table__header');
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
                        newProductsPriceValue.textContent = '' + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (appliedPromocodes.length / 10));
                    }
                }
                else {
                    newProductsPrice = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price-new', `Total: `);
                    const newProductsPriceValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('content__price-value-new', _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (appliedPromocodes.length / 10)));
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
                                newProductsPriceValue.textContent = '' + _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].totalPrice * (1 - (appliedPromocodes.length / 10));
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
            promoBlock.append(addButton);
        }
        else if (promoBlock.querySelector('.promo__add')) {
            (_a = promoBlock.querySelector('.promo__add')) === null || _a === void 0 ? void 0 : _a.remove();
        }
    });
    const promoHint = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo__hint', `Promocodes: `);
    const promoHintValue = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_2__.createNode)('promo__hint-value', promocodes.join(', '));
    promoHint.append(promoHintValue);
    promoBlock.append(promoHint, promoInput);
    summaryBlock.append(summaryHeader, summaryContent, promoBlock);
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
        console.log(_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length, itemsPerPage, currentPage);
        if (_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length < +inputNewValue * currentPage) {
            currentPage = Math.ceil(_scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].products.length / +inputNewValue);
            const currentPageValue = document.querySelector('.switch-page__current');
            if (currentPageValue === null || currentPageValue === void 0 ? void 0 : currentPageValue.textContent)
                currentPageValue.textContent = '' + currentPage;
            console.log(currentPage);
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
/* harmony import */ var _scripts_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/cart */ "./src/scripts/cart.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-page */ "./src/components/product-page.ts");
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing */ "./src/components/routing.ts");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-page */ "./src/components/modal-page.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header */ "./src/components/header.ts");


// import { updateHeader } from './header';




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
            _scripts_cart__WEBPACK_IMPORTED_MODULE_1__["default"].removeProduct(goodID);
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
    const modalPage = document.createElement("section");
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
/* harmony import */ var _scripts_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/helpers */ "./src/scripts/helpers.ts");


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
    const mainPhotoBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('main');
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
    const productTitle = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__title', product.title);
    const productDescription = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__description', product.description);
    const productBrand = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__brand', product.brand);
    const productCategory = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__category', product.category);
    const productStats = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('stats');
    const productRating = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__rating', 'Rating: ' + product.rating);
    const productStock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('data__stock', 'Stock: ' + product.stock);
    productStats.append(productRating, productStock);
    productDataBlock.append(productTitle, productDescription, productBrand, productCategory, productStats);
    productBlock.append(photosBlock, productDataBlock);
    content === null || content === void 0 ? void 0 : content.append(productBlock);
}
function renderPurchase(product) {
    const purchaseBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('purchase');
    const priceBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('price');
    const discount = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('price__discount', `Discount: \n${product.discountPercentage}`);
    const price = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('price__amount', `Price: \n${product.price}`);
    priceBlock.append(discount, price);
    const buttonsBlock = (0,_scripts_helpers__WEBPACK_IMPORTED_MODULE_1__.createNode)('buttons');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCw2QkFBNkI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsK0NBQStDLHVCQUF1QjtBQUMvSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3J6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNRO0FBQ007QUFDUDtBQUNBO0FBQ0k7QUFDQTtBQUNEO0FBQ0c7QUFDRjtBQUNMO0FBQ0s7QUFDTDtBQUNEO0FBQ0U7QUFDQyIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2NhcnQtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9lcnJvci1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2ZpbHRlckl0ZW0udHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2dvb2RzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9tYWluLXRlbXBsYXRlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL21vZGFsLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JhbmdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JvdXRpbmcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3NvcnRpbmcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvc3RvcmUtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy92aWV3LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZGF0YS1wYXJzZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL3NjcmlwdHMvZmlsdGVyLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9zY3JpcHRzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2Fzc2V0cy9kYXRhL2RhdGEuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xuaW1wb3J0IGNhcnQgZnJvbSBcIi4uL3NjcmlwdHMvY2FydFwiO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi9zY3JpcHRzL2hlbHBlcnNcIjtcbmltcG9ydCB7IHVwZGF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IHsgc2V0VXJsUGFyYW1ldGVyLCBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSB9IGZyb20gXCIuLi9zY3JpcHRzL2hlbHBlcnNcIjtcbmNvbnN0IGRlZmF1bHRQcm9kdWN0c1BlclBhZ2UgPSAnNCc7XG5jb25zdCBkZWZhdWx0UGFnZSA9ICcxJztcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYXJ0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBpZiAoY29udGVudCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmNhcnQgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2FydCkucHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0c0Jsb2NrID0gcmVuZGVyUHJvZHVjdHNCbG9jaygpO1xuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeUJsb2NrID0gcmVuZGVyU3VtbWFyeUJsb2NrKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0c1N1bW1hcnlCbG9jayA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RzLXN1bW1hcnknKTtcbiAgICAgICAgICAgIHByb2R1Y3RzU3VtbWFyeUJsb2NrLmFwcGVuZChwcm9kdWN0c0Jsb2NrLCBzdW1tYXJ5QmxvY2spO1xuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkJsb2NrID0gcmVuZGVyUGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmQocHJvZHVjdHNTdW1tYXJ5QmxvY2ssIHBhZ2luYXRpb25CbG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnRleHRDb250ZW50ID0gJ0NhcnQgaXMgRW1wdHknO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdHNCbG9jaygpIHtcbiAgICBjb25zdCBwcm9kdWN0c0Jsb2NrID0gY3JlYXRlTm9kZSgncHJvZHVjdHMnKTtcbiAgICBjb25zdCBwcm9kdWN0c0hlYWRlciA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RzX19oZWFkZXInLCAnUHJvZHVjdHMnKTtcbiAgICBwcm9kdWN0c0Jsb2NrLmFwcGVuZChwcm9kdWN0c0hlYWRlcik7XG4gICAgcmVuZGVyUHJvZHVjdHNMaXN0KHByb2R1Y3RzQmxvY2spO1xuICAgIHJldHVybiBwcm9kdWN0c0Jsb2NrO1xufVxuZnVuY3Rpb24gcmVuZGVyUHJvZHVjdHNMaXN0KHByb2R1Y3RzQmxvY2spIHtcbiAgICBpZiAoIXByb2R1Y3RzQmxvY2spXG4gICAgICAgIHByb2R1Y3RzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKTtcbiAgICBsZXQgcHJvZHVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzLWxpc3QnKTtcbiAgICBpZiAocHJvZHVjdHNMaXN0KVxuICAgICAgICBwcm9kdWN0c0xpc3QucmVtb3ZlKCk7XG4gICAgcHJvZHVjdHNMaXN0ID0gY3JlYXRlTm9kZSgncHJvZHVjdHMtbGlzdCcpO1xuICAgIGNvbnN0IGNhcnRQcm9kdWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNhcnQpO1xuICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdpdGVtc1BlclBhZ2UnKSB8fCArZGVmYXVsdFByb2R1Y3RzUGVyUGFnZTtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdwYWdlJykgfHwgK2RlZmF1bHRQYWdlO1xuICAgIGNvbnN0IHN0YXJ0SWR4ID0gcHJvZHVjdHNQZXJQYWdlICogKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0SWR4OyBpIDwgY2FydFByb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aCAmJiBpIDwgc3RhcnRJZHggKyBwcm9kdWN0c1BlclBhZ2U7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvZHVjdCA9IHByb2R1Y3RzLmdldFByb2R1Y3RCeUlkKGNhcnRQcm9kdWN0cy5wcm9kdWN0c1tpXS5pZCk7XG4gICAgICAgIGlmIChjdXJyZW50UHJvZHVjdCkge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IGNyZWF0ZU5vZGUoJ2NhcnRfX3Byb2R1Y3QnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPcmRlciA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX29yZGVyJywgYCR7aSArIDF9YCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGh1bWJuYWlsID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0VGh1bWJuYWlsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBwcm9kdWN0VGh1bWJuYWlsSW1nLmNsYXNzTmFtZSA9ICdwcm9kdWN0X190aHVtYm5haWwtaW1nJztcbiAgICAgICAgICAgIHByb2R1Y3RUaHVtYm5haWxJbWcuc3JjID0gY3VycmVudFByb2R1Y3QudGh1bWJuYWlsO1xuICAgICAgICAgICAgcHJvZHVjdFRodW1ibmFpbC5hcHBlbmQocHJvZHVjdFRodW1ibmFpbEltZyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0RGF0YSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2RhdGEnKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REYXRhTmFtZSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2RhdGEtbmFtZScsIGN1cnJlbnRQcm9kdWN0LnRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2RhdGEtZGVzY3JpcHRpb24nLCBjdXJyZW50UHJvZHVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UmF0aW5nID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fZGF0YS1yYXRpbmcnLCBjdXJyZW50UHJvZHVjdC5yYXRpbmcpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdERpc2NvdW50ID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fZGF0YS1kaXNjb3VudCcsIGN1cnJlbnRQcm9kdWN0LmRpc2NvdW50UGVyY2VudGFnZSk7XG4gICAgICAgICAgICBwcm9kdWN0RGF0YS5hcHBlbmQocHJvZHVjdERhdGFOYW1lLCBwcm9kdWN0RGVzY3JpcHRpb24sIHByb2R1Y3RSYXRpbmcsIHByb2R1Y3REaXNjb3VudCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QnV5RGF0YSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX2J1eS1kYXRhJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0U3RvY2sgPSBjcmVhdGVOb2RlKCdwcm9kdWN0X19zdG9jaycsIGBTdG9jazogYCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0U3RvY2tWYWx1ZSA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3RfX3N0b2NrLXZhbHVlJywgY3VycmVudFByb2R1Y3Quc3RvY2spO1xuICAgICAgICAgICAgcHJvZHVjdFN0b2NrLmFwcGVuZChwcm9kdWN0U3RvY2tWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBhbW91bnRDb250cm9sID0gY3JlYXRlTm9kZSgncHJvZHVjdC1hbW91bnQtY29udHJvbCcpO1xuICAgICAgICAgICAgYW1vdW50Q29udHJvbC5kYXRhc2V0LnByb2R1Y3RJZCA9IGAke2N1cnJlbnRQcm9kdWN0LmlkfWA7XG4gICAgICAgICAgICBjb25zdCBpbmNyZWFzZUFtb3VudCA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3QtYW1vdW50X19lbCBwcm9kdWN0LWFtb3VudF9faW5jcmVhc2UnLCAnKycpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEFtb3VudCA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3QtYW1vdW50X19jdXJyZW50JywgY2FydFByb2R1Y3RzLnByb2R1Y3RzW2ldLmFtb3VudCk7XG4gICAgICAgICAgICBjb25zdCBkZWNyZWFzZUFtb3VudCA9IGNyZWF0ZU5vZGUoJ3Byb2R1Y3QtYW1vdW50X19lbCBwcm9kdWN0LWFtb3VudF9fZGVjcmVhc2UnLCAnLScpO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gY3JlYXRlTm9kZSgncHJvZHVjdF9fcHJpY2UnLCBgUHJpY2U6IGApO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlVmFsdWUgPSBjcmVhdGVOb2RlKCdwcm9kdWN0X19wcmljZS12YWx1ZScsIGAke2N1cnJlbnRQcm9kdWN0LnByaWNlICogY2FydFByb2R1Y3RzLnByb2R1Y3RzW2ldLmFtb3VudH1gKTtcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZS5hcHBlbmQocHJvZHVjdFByaWNlVmFsdWUpO1xuICAgICAgICAgICAgYW1vdW50Q29udHJvbC5hcHBlbmQoaW5jcmVhc2VBbW91bnQsIGN1cnJlbnRBbW91bnQsIGRlY3JlYXNlQW1vdW50LCBwcm9kdWN0UHJpY2UpO1xuICAgICAgICAgICAgcHJvZHVjdEJ1eURhdGEuYXBwZW5kKHByb2R1Y3RTdG9jaywgYW1vdW50Q29udHJvbCwgcHJvZHVjdFByaWNlKTtcbiAgICAgICAgICAgIHByb2R1Y3QuYXBwZW5kKHByb2R1Y3RPcmRlciwgcHJvZHVjdFRodW1ibmFpbCwgcHJvZHVjdERhdGEsIHByb2R1Y3RCdXlEYXRhKTtcbiAgICAgICAgICAgIHByb2R1Y3RzTGlzdC5hcHBlbmQocHJvZHVjdCk7XG4gICAgICAgICAgICBzZXRDaGFuZ2VBbW91bnRMaXN0ZW5lcihbaW5jcmVhc2VBbW91bnQsIGRlY3JlYXNlQW1vdW50XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvZHVjdHNCbG9jayA9PT0gbnVsbCB8fCBwcm9kdWN0c0Jsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0c0Jsb2NrLmFwcGVuZChwcm9kdWN0c0xpc3QpO1xufVxuZnVuY3Rpb24gc2V0Q2hhbmdlQW1vdW50TGlzdGVuZXIoaXRlbXMpIHtcbiAgICBpdGVtcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEFtb3VudENvbnRyb2xCbG9jayA9IChjdXJyZW50RWxlbWVudCkucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RCdXlEYXRhQmxvY2sgPSAocHJvZHVjdEFtb3VudENvbnRyb2xCbG9jaykucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHByb2R1Y3RBbW91bnRDb250cm9sQmxvY2suZGF0YXNldC5wcm9kdWN0SWQ7XG4gICAgICAgICAgICBpZiAocHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FydFByb2R1Y3RJZCA9IGNhcnQuZ2V0Q2FydFByb2R1Y3RJZCgrcHJvZHVjdElkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QW1vdW50ID0gcHJvZHVjdEFtb3VudENvbnRyb2xCbG9jay5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1hbW91bnRfX2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICBsZXQgaXNVcGRhdGVkUGFnZUVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncHJvZHVjdC1hbW91bnRfX2luY3JlYXNlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFN0b2NrVmFsdWUgPSAoX2IgPSAoX2EgPSBwcm9kdWN0QnV5RGF0YUJsb2NrLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fc3RvY2stdmFsdWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdFN0b2NrVmFsdWUgJiYgY3VycmVudEFtb3VudCAmJiBjdXJyZW50QW1vdW50LnRleHRDb250ZW50ICYmICtwcm9kdWN0U3RvY2tWYWx1ZSA+ICtjdXJyZW50QW1vdW50LnRleHRDb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FydC5hZGRQcm9kdWN0KCtwcm9kdWN0SWQpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FydFByb2R1Y3RJZCAhPT0gdW5kZWZpbmVkICYmIGNhcnQucHJvZHVjdHNbY2FydFByb2R1Y3RJZF0uYW1vdW50ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0QnV5RGF0YUJsb2NrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYyA9IHByb2R1Y3RCdXlEYXRhQmxvY2sucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3RJZCwgY2FydFByb2R1Y3RJZCk7XG4gICAgICAgICAgICAgICAgICAgIGNhcnQucmVtb3ZlUHJvZHVjdCgrcHJvZHVjdElkKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gZ2V0VXJsUGFyYW1ldGVyVmFsdWUoJ2l0ZW1zUGVyUGFnZScpIHx8ICtkZWZhdWx0UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgncGFnZScpIHx8ICtkZWZhdWx0UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnQucHJvZHVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC50ZXh0Q29udGVudCA9ICdDYXJ0IGlzIEVtcHR5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnQucHJvZHVjdHMubGVuZ3RoIDw9IHByb2R1Y3RzUGVyUGFnZSAqIChjdXJyZW50UGFnZSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZS0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXJsUGFyYW1ldGVyKCdwYWdlJywgY3VycmVudFBhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtcGFnZV9fY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlVmFsdWUgPT09IG51bGwgfHwgY3VycmVudFBhZ2VWYWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudFBhZ2VWYWx1ZS50ZXh0Q29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZVZhbHVlLnRleHRDb250ZW50ID0gJycgKyBjdXJyZW50UGFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXBkYXRlZFBhZ2VFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlSGVhZGVyKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3VtbWFyeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19hbW91bnQtdmFsdWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdW1tYXJ5UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcHJpY2UtdmFsdWUnKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEFtb3VudCAmJiBzdW1tYXJ5QW1vdW50ICYmIHN1bW1hcnlQcmljZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FydFByb2R1Y3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2FydCkucHJvZHVjdHMgJiYgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuY2FydCkucHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VwZGF0ZWRQYWdlRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEFtb3VudC50ZXh0Q29udGVudCA9IFwiXCIgKyBjYXJ0LnByb2R1Y3RzW2NhcnRQcm9kdWN0SWRdLmFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCIgKyBjYXJ0LnRvdGFsSXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnlQcmljZS50ZXh0Q29udGVudCA9IFwiXCIgKyBjYXJ0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19wcmljZS12YWx1ZS1uZXcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvZHVjdHNQcmljZVZhbHVlICYmIChuZXdQcm9kdWN0c1ByaWNlVmFsdWUgPT09IG51bGwgfHwgbmV3UHJvZHVjdHNQcmljZVZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXdQcm9kdWN0c1ByaWNlVmFsdWUudGV4dENvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZS50ZXh0Q29udGVudCA9ICcnICsgY2FydC50b3RhbFByaWNlICogKDEgLSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb21vLXRhYmxlX19yb3cnKS5sZW5ndGggLyAxMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICdDYXJ0IGlzIEVtcHR5JztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclByb2R1Y3RzTGlzdCgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlbmRlclN1bW1hcnlCbG9jaygpIHtcbiAgICBjb25zdCBzdW1tYXJ5QmxvY2sgPSBjcmVhdGVOb2RlKCdzdW1tYXJ5Jyk7XG4gICAgY29uc3Qgc3VtbWFyeUhlYWRlciA9IGNyZWF0ZU5vZGUoJ3N1bW1hcnlfX2hlYWRlcicsICdIZWFkZXInKTtcbiAgICBjb25zdCBzdW1tYXJ5Q29udGVudCA9IGNyZWF0ZU5vZGUoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB0b3RhbFByb2R1Y3RzQW1vdW50ID0gY3JlYXRlTm9kZSgnY29udGVudF9fYW1vdW50JywgYFByb2R1Y3RzOiBgKTtcbiAgICBjb25zdCB0b3RhbFByb2R1Y3RzQW1vdW50VmFsdWUgPSBjcmVhdGVOb2RlKCdjb250ZW50X19hbW91bnQtdmFsdWUnLCBjYXJ0LnRvdGFsSXRlbXMpO1xuICAgIHRvdGFsUHJvZHVjdHNBbW91bnQuYXBwZW5kKHRvdGFsUHJvZHVjdHNBbW91bnRWYWx1ZSk7XG4gICAgY29uc3QgdG90YWxQcm9kdWN0c1ByaWNlID0gY3JlYXRlTm9kZSgnY29udGVudF9fcHJpY2UnLCBgVG90YWw6IGApO1xuICAgIGNvbnN0IHRvdGFsUHJvZHVjdHNQcmljZVZhbHVlID0gY3JlYXRlTm9kZSgnY29udGVudF9fcHJpY2UtdmFsdWUnLCBjYXJ0LnRvdGFsUHJpY2UpO1xuICAgIHRvdGFsUHJvZHVjdHNQcmljZS5hcHBlbmQodG90YWxQcm9kdWN0c1ByaWNlVmFsdWUpO1xuICAgIHN1bW1hcnlDb250ZW50LmFwcGVuZCh0b3RhbFByb2R1Y3RzQW1vdW50LCB0b3RhbFByb2R1Y3RzUHJpY2UpO1xuICAgIGNvbnN0IHByb21vQmxvY2sgPSBjcmVhdGVOb2RlKCdwcm9tbycpO1xuICAgIGNvbnN0IHByb21vSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb21vSW5wdXQuY2xhc3NOYW1lID0gJ3Byb21vX19pbnB1dCc7XG4gICAgY29uc3QgYXBwbGllZFByb21vY29kZXMgPSBbXTtcbiAgICBjb25zdCBwcm9tb2NvZGVzID0gWydkaW1hJywgJ2p1bGlhJ107XG4gICAgcHJvbW9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAocHJvbW9jb2Rlcy5pbmNsdWRlcyhpbnB1dFZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKGFwcGxpZWRQcm9tb2NvZGVzLmluY2x1ZGVzKGlucHV0VmFsdWUpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FwcGx5JztcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5jbGFzc05hbWUgPSAncHJvbW9fX2FkZCc7XG4gICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGxldCBwcm9tb1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb21vLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgYXBwbGllZFByb21vY29kZXMucHVzaChpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAoX2EgPSBwcm9tb0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5wcm9tb19fYWRkJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoIXByb21vVGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbW9UYWJsZSA9IGNyZWF0ZU5vZGUoJ3Byb21vLXRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21vVGFibGVIZWFkZXIgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZV9faGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb21vVGFibGUuYXBwZW5kKHByb21vVGFibGVIZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tb0NvZGVSb3cgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZV9fcm93Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW9Db2RlVmFsdWUgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZV9fcm93LXZhbHVlJywgaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbW9BbW91bnQgPSBjcmVhdGVOb2RlKCdwcm9tby10YWJsZV9fcm93LWFtb3VudCcsICcxMCUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9tb1JlbW92ZUJ1dHRvbiA9IGNyZWF0ZU5vZGUoJ3Byb21vLXRhYmxlX19yb3ctcmVtb3ZlJywgJ3gnKTtcbiAgICAgICAgICAgICAgICBwcm9tb0NvZGVSb3cuYXBwZW5kKHByb21vQ29kZVZhbHVlLCBwcm9tb0Ftb3VudCwgcHJvbW9SZW1vdmVCdXR0b24pO1xuICAgICAgICAgICAgICAgIHByb21vVGFibGUuYXBwZW5kKHByb21vQ29kZVJvdyk7XG4gICAgICAgICAgICAgICAgcHJvbW9CbG9jay5hcHBlbmQocHJvbW9UYWJsZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19wcmljZScpO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsUHJpY2Uuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoJztcbiAgICAgICAgICAgICAgICBsZXQgbmV3UHJvZHVjdHNQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19wcmljZS1uZXcnKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3UHJvZHVjdHNQcmljZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9kdWN0c1ByaWNlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcHJpY2UtdmFsdWUtbmV3Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9kdWN0c1ByaWNlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZS50ZXh0Q29udGVudCA9ICcnICsgY2FydC50b3RhbFByaWNlICogKDEgLSAoYXBwbGllZFByb21vY29kZXMubGVuZ3RoIC8gMTApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvZHVjdHNQcmljZSA9IGNyZWF0ZU5vZGUoJ2NvbnRlbnRfX3ByaWNlLW5ldycsIGBUb3RhbDogYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSA9IGNyZWF0ZU5vZGUoJ2NvbnRlbnRfX3ByaWNlLXZhbHVlLW5ldycsIGNhcnQudG90YWxQcmljZSAqICgxIC0gKGFwcGxpZWRQcm9tb2NvZGVzLmxlbmd0aCAvIDEwKSkpO1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0c1ByaWNlLmFwcGVuZChuZXdQcm9kdWN0c1ByaWNlVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRCbG9jayA9PT0gbnVsbCB8fCBjb250ZW50QmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRlbnRCbG9jay5hcHBlbmQobmV3UHJvZHVjdHNQcmljZSk7XG4gICAgICAgICAgICAgICAgcHJvbW9SZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFByb21vTm9kZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb21vY29kZVRvUmVtb3ZlID0gcGFyZW50UHJvbW9Ob2RlID09PSBudWxsIHx8IHBhcmVudFByb21vTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50UHJvbW9Ob2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbW9jb2RlVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRQcm9tb2NvZGVzLnNwbGljZShhcHBsaWVkUHJvbW9jb2Rlcy5pbmRleE9mKHByb21vY29kZVRvUmVtb3ZlKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcGxpZWRQcm9tb2NvZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50UHJvbW9Ob2RlID09PSBudWxsIHx8IHBhcmVudFByb21vTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50UHJvbW9Ob2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3RzUHJpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9kdWN0c1ByaWNlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcHJpY2UtdmFsdWUtbmV3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb2R1Y3RzUHJpY2VWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQcm9kdWN0c1ByaWNlVmFsdWUudGV4dENvbnRlbnQgPSAnJyArIGNhcnQudG90YWxQcmljZSAqICgxIC0gKGFwcGxpZWRQcm9tb2NvZGVzLmxlbmd0aCAvIDEwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgKF9hID0gcHJvbW9CbG9jay5xdWVyeVNlbGVjdG9yKCcucHJvbW8tdGFibGUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxQcmljZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvZHVjdHNQcmljZSA9PT0gbnVsbCB8fCBuZXdQcm9kdWN0c1ByaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXdQcm9kdWN0c1ByaWNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb21vQmxvY2suYXBwZW5kKGFkZEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvbW9CbG9jay5xdWVyeVNlbGVjdG9yKCcucHJvbW9fX2FkZCcpKSB7XG4gICAgICAgICAgICAoX2EgPSBwcm9tb0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5wcm9tb19fYWRkJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IHByb21vSGludCA9IGNyZWF0ZU5vZGUoJ3Byb21vX19oaW50JywgYFByb21vY29kZXM6IGApO1xuICAgIGNvbnN0IHByb21vSGludFZhbHVlID0gY3JlYXRlTm9kZSgncHJvbW9fX2hpbnQtdmFsdWUnLCBwcm9tb2NvZGVzLmpvaW4oJywgJykpO1xuICAgIHByb21vSGludC5hcHBlbmQocHJvbW9IaW50VmFsdWUpO1xuICAgIHByb21vQmxvY2suYXBwZW5kKHByb21vSGludCwgcHJvbW9JbnB1dCk7XG4gICAgc3VtbWFyeUJsb2NrLmFwcGVuZChzdW1tYXJ5SGVhZGVyLCBzdW1tYXJ5Q29udGVudCwgcHJvbW9CbG9jayk7XG4gICAgcmV0dXJuIHN1bW1hcnlCbG9jaztcbn1cbmZ1bmN0aW9uIHJlbmRlclBhZ2luYXRpb24oKSB7XG4gICAgY29uc3QgcGFnaW5hdGlvbkJsb2NrID0gY3JlYXRlTm9kZSgncGFnaW5hdGlvbicpO1xuICAgIGxldCBjdXJyZW50UGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdwYWdlJykgfHwgMTtcbiAgICBjb25zdCBpdGVtc1BlclBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgnaXRlbXNQZXJQYWdlJykgfHwgK2RlZmF1bHRQcm9kdWN0c1BlclBhZ2U7XG4gICAgY29uc3QgaXRlbXNQZXJQYWdlQmxvY2sgPSBjcmVhdGVOb2RlKCdwYWdpbmF0aW9uX19wZXItcGFnZScsICdJdGVtcyBwZXIgcGFnZTogJyk7XG4gICAgY29uc3QgaXRlbXNQZXJQYWdlVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGl0ZW1zUGVyUGFnZVZhbHVlLnR5cGUgPSAnbnVtYmVyJztcbiAgICBpdGVtc1BlclBhZ2VWYWx1ZS5jbGFzc05hbWUgPSAncGFnaW5hdGlvbl9fcGVyLXBhZ2UtdmFsdWUnO1xuICAgIGl0ZW1zUGVyUGFnZVZhbHVlLnZhbHVlID0gJycgKyBpdGVtc1BlclBhZ2U7XG4gICAgaXRlbXNQZXJQYWdlQmxvY2suYXBwZW5kKGl0ZW1zUGVyUGFnZVZhbHVlKTtcbiAgICBpdGVtc1BlclBhZ2VWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0TmV3VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgaWYgKGlucHV0TmV3VmFsdWUgPT09ICcnKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjdXJyZW50UGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdwYWdlJykgfHwgMTtcbiAgICAgICAgY29uc29sZS5sb2coY2FydC5wcm9kdWN0cy5sZW5ndGgsIGl0ZW1zUGVyUGFnZSwgY3VycmVudFBhZ2UpO1xuICAgICAgICBpZiAoY2FydC5wcm9kdWN0cy5sZW5ndGggPCAraW5wdXROZXdWYWx1ZSAqIGN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IE1hdGguY2VpbChjYXJ0LnByb2R1Y3RzLmxlbmd0aCAvICtpbnB1dE5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLXBhZ2VfX2N1cnJlbnQnKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZVZhbHVlID09PSBudWxsIHx8IGN1cnJlbnRQYWdlVmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnRQYWdlVmFsdWUudGV4dENvbnRlbnQpXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2VWYWx1ZS50ZXh0Q29udGVudCA9ICcnICsgY3VycmVudFBhZ2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UGFnZSk7XG4gICAgICAgICAgICBzZXRVcmxQYXJhbWV0ZXIoJ3BhZ2UnLCBjdXJyZW50UGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VXJsUGFyYW1ldGVyKCdpdGVtc1BlclBhZ2UnLCBpbnB1dE5ld1ZhbHVlKTtcbiAgICAgICAgcmVuZGVyUHJvZHVjdHNMaXN0KCk7XG4gICAgfSk7XG4gICAgY29uc3Qgc3dpdGNoUGFnZUJsb2NrID0gY3JlYXRlTm9kZSgnc3dpdGNoLXBhZ2UnKTtcbiAgICBjb25zdCBzd2l0Y2hUZXh0ID0gY3JlYXRlTm9kZSgnc3dpdGNoLXBhZ2VfX3RleHQnLCAnUGFnZTogJyk7XG4gICAgY29uc3Qgc3dpdGNoUHJldiA9IGNyZWF0ZU5vZGUoJ3N3aXRjaC1wYWdlX19jb250cm9sIHN3aXRjaC1wYWdlX19wcmV2JywgJzwnKTtcbiAgICBjb25zdCBjdXJyZW50UGFnZVZhbHVlID0gY3JlYXRlTm9kZSgnc3dpdGNoLXBhZ2VfX2N1cnJlbnQnLCBjdXJyZW50UGFnZSk7XG4gICAgY29uc3Qgc3dpdGNoTmV4dCA9IGNyZWF0ZU5vZGUoJ3N3aXRjaC1wYWdlX19jb250cm9sIHN3aXRjaC1wYWdlX19uZXh0JywgJz4nKTtcbiAgICBzd2l0Y2hQYWdlQmxvY2suYXBwZW5kKHN3aXRjaFRleHQsIHN3aXRjaFByZXYsIGN1cnJlbnRQYWdlVmFsdWUsIHN3aXRjaE5leHQpO1xuICAgIGNvbnN0IHBhZ2VDb250cm9sRWxlbWVudHMgPSBbc3dpdGNoUHJldiwgc3dpdGNoTmV4dF07XG4gICAgcGFnZUNvbnRyb2xFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IGdldFVybFBhcmFtZXRlclZhbHVlKCdwYWdlJykgfHwgK2RlZmF1bHRQYWdlO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3dpdGNoLXBhZ2VfX3ByZXYnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRVcmxQYXJhbWV0ZXIoJ3BhZ2UnLCArY3VycmVudFBhZ2UgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2VWYWx1ZS50ZXh0Q29udGVudCA9IGAkeytjdXJyZW50UGFnZSAtIDF9YDtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUHJvZHVjdHNMaXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSBnZXRVcmxQYXJhbWV0ZXJWYWx1ZSgnaXRlbXNQZXJQYWdlJykgfHwgK2RlZmF1bHRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSAqIHByb2R1Y3RzUGVyUGFnZSA8IGNhcnQucHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVcmxQYXJhbWV0ZXIoJ3BhZ2UnLCArY3VycmVudFBhZ2UgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlVmFsdWUudGV4dENvbnRlbnQgPSBgJHsrY3VycmVudFBhZ2UgKyAxfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9kdWN0c0xpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcGFnaW5hdGlvbkJsb2NrLmFwcGVuZChpdGVtc1BlclBhZ2VCbG9jaywgc3dpdGNoUGFnZUJsb2NrKTtcbiAgICByZXR1cm4gcGFnaW5hdGlvbkJsb2NrO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckVycm9yUGFnZSgpIHtcbiAgICBjb25zdCBlcnJvckFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgaWYgKGVycm9yQXJlYSkge1xuICAgICAgICBlcnJvckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2Vycm9yX19ibG9jayc+UEFHRSBOT1QgRk9VTkQgKDQwNCk8L2Rpdj5gO1xuICAgIH1cbn1cbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vc2NyaXB0cy9maWx0ZXInO1xuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tICcuL2dvb2RzJztcbmltcG9ydCB7IHJlbmRlckdvb2RzUXVhbnRpdHkgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xuaW1wb3J0IHsgY2hhbmdlUmFuZ2UsIGNoYW5nZVByaWNlUmFuZ2UsIGNoYW5nZVN0b2NrUmFuZ2UgfSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB7IGluc2VydFBhcmFtIH0gZnJvbSBcIi4vcm91dGluZ1wiO1xuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllcygpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2NhdGVnb3J5X2FyZWEnKTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gcHJvZHVjdHMuY2F0ZWdvcmllcztcbiAgICBsZXQgY2F0ZWdvcnlJbm5lciA9IGA8ZGl2IGNsYXNzPSdjYXRlZ29yeV9fY29udGFpbmVyJz5gO1xuICAgIGZvciAobGV0IGtleSBpbiBjYXRlZ29yaWVzKSB7XG4gICAgICAgIGNhdGVnb3J5SW5uZXIgKz0gYDxkaXYgY2xhc3M9J2ZpbHRlcl9fc3RyaW5nJz5cclxuICAgICAgPGlucHV0IHR5cGUgPSAnY2hlY2tib3gnIGNsYXNzPSdmaWx0ZXJfX2NoZWNrYm94IGZpbHRlcl9fY2hlY2tib3hfY2F0ZWdvcnknIHZhbHVlPVwiJHtrZXl9XCIgbmFtZT1cIiR7a2V5fVwiIGRhdGEtcGFyYW0gPSAnY2F0ZWdvcnknIGRhdGEtcXVhbnRpdHk9XCIke2NhdGVnb3JpZXNba2V5XS5sZW5ndGh9XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X190aXRsZSc+JHtrZXl9JmVuc3A7PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9J2NhdGVnb3J5X19xdWFudGl0eSBmaWx0ZXJfX3F1YW50aXR5JyBkYXRhLXBhcmFtID1cIiR7a2V5fVwiPigke2NhdGVnb3JpZXNba2V5XS5sZW5ndGh9KTwvZGl2PlxyXG4gICAgPC9kaXY+YDtcbiAgICB9XG4gICAgY2F0ZWdvcnlJbm5lciArPSBgPC9kaXY+YDtcbiAgICBpZiAoY2F0ZWdvcmllc0FyZWEpIHtcbiAgICAgICAgY2F0ZWdvcmllc0FyZWEuaW5uZXJIVE1MID0gY2F0ZWdvcnlJbm5lcjtcbiAgICB9XG59XG5mdW5jdGlvbiByZW5kZXJCcmFuZHMoKSB7XG4gICAgY29uc3QgYnJhbmRzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX2JyYW5kX2FyZWEnKTtcbiAgICBjb25zdCBicmFuZHMgPSBwcm9kdWN0cy5icmFuZHM7XG4gICAgbGV0IGJyYW5kc0lubmVyID0gYDxkaXYgY2xhc3M9J2JyYW5kX19jb250YWluZXInPmA7XG4gICAgZm9yIChsZXQga2V5IGluIGJyYW5kcykge1xuICAgICAgICBicmFuZHNJbm5lciArPSBgPGRpdiBjbGFzcz0nZmlsdGVyX19zdHJpbmcnPlxyXG4gICAgICA8aW5wdXQgdHlwZSA9ICdjaGVja2JveCcgY2xhc3M9J2ZpbHRlcl9fY2hlY2tib3ggZmlsdGVyX19jaGVja2JveF9icmFuZCcgdmFsdWU9XCIke2tleX1cIiBuYW1lPVwiJHtrZXl9XCIgZGF0YS1wYXJhbSA9ICdicmFuZCcgZGF0YS1xdWFudGl0eT1cIiR7YnJhbmRzW2tleV0ubGVuZ3RofVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fdGl0bGUnPiR7a2V5fSZlbnNwOzwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPSdicmFuZF9fcXVhbnRpdHkgZmlsdGVyX19xdWFudGl0eScgZGF0YS1wYXJhbSA9XCIke2tleX1cIj4oJHticmFuZHNba2V5XS5sZW5ndGh9KTwvZGl2PlxyXG4gICAgPC9kaXY+YDtcbiAgICB9XG4gICAgYnJhbmRzSW5uZXIgKz0gYDwvZGl2PmA7XG4gICAgaWYgKGJyYW5kc0FyZWEpIHtcbiAgICAgICAgYnJhbmRzQXJlYS5pbm5lckhUTUwgPSBicmFuZHNJbm5lcjtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdGlja0NoZWNrYm94ZXMoKSB7XG4gICAgaWYgKGZpbHRlci5icmFuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGJyYW5kQ2hlY2tib3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXJfX2NoZWNrYm94X2JyYW5kXCIpO1xuICAgICAgICBicmFuZENoZWNrYm94cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXIuYnJhbmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PSBmaWx0ZXIuYnJhbmRbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyLmNhdGVnb3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYnJhbmRDaGVja2JveHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlcl9fY2hlY2tib3hfY2F0ZWdvcnlcIik7XG4gICAgICAgIGJyYW5kQ2hlY2tib3hzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlci5jYXRlZ29yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlID09IGZpbHRlci5jYXRlZ29yeVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkRmlsdGVyUGFyYW1zKCkge1xuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3hzLmZvckVhY2goY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgY2hhbmdlRmlsdGVycyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRFdmVudHMoKSB7XG4gICAgY29uc3QgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idXR0b25fcmVzZXQnKTtcbiAgICBidXR0b25SZXNldCA9PT0gbnVsbCB8fCBidXR0b25SZXNldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEZpbHRlcnMpO1xuICAgIGNvbnN0IGJ1dHRvblNhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19idXR0b25fc2F2ZScpO1xuICAgIGJ1dHRvblNhdmUgPT09IG51bGwgfHwgYnV0dG9uU2F2ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uU2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2F2ZVVybCgpO1xuICAgICAgICBjaGFuZ2VTYXZlQnV0dG9uKCk7XG4gICAgfSk7XG59XG5jb25zdCBmaWx0ZXJOdWxsID0ge1xuICAgIGNhdGVnb3J5OiBbXSxcbiAgICBicmFuZDogW10sXG4gICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcbiAgICBzdG9jazogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxufTtcbmxldCBmaWx0ZXIgPSB7XG4gICAgY2F0ZWdvcnk6IFtdLFxuICAgIGJyYW5kOiBbXSxcbiAgICBwcmljZTogeyBtaW46IG51bGwsIG1heDogbnVsbCB9LFxuICAgIHN0b2NrOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZpbHRlcnMoZXZlbnQpIHtcbiAgICBsZXQgcGFyYW0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGFyYW07XG4gICAgbGV0IG5ld0ZpbHRlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgbGV0IHNpZGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuc2lkZTtcbiAgICBpZiAocGFyYW0pIHtcbiAgICAgICAgaWYgKHBhcmFtID09PSBcInByaWNlXCIgfHwgcGFyYW0gPT09IFwic3RvY2tcIikge1xuICAgICAgICAgICAgaWYgKHNpZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChzaWRlID09PSAnbWluJykge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLm1pbiA9IE51bWJlcihuZXdGaWx0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyW3BhcmFtXS5tYXggPSBOdW1iZXIobmV3RmlsdGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyW3BhcmFtXS5pbmRleE9mKG5ld0ZpbHRlcikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZCA9IGZpbHRlcltwYXJhbV0uaW5kZXhPZihuZXdGaWx0ZXIpO1xuICAgICAgICAgICAgICAgIGZpbHRlcltwYXJhbV0uc3BsaWNlKGluZCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJbcGFyYW1dLnB1c2gobmV3RmlsdGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW0pIHtcbiAgICAgICAgcnVuRmlsdHJhdGlvbihwYXJhbSk7XG4gICAgfVxuICAgIGlmIChwYXJhbSA9PT0gXCJwcmljZVwiIHx8IHBhcmFtID09PSBcInN0b2NrXCIpIHtcbiAgICAgICAgaW5zZXJ0UGFyYW0oYCR7cGFyYW19LSR7c2lkZX1gLCBuZXdGaWx0ZXIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5zZXJ0UGFyYW0ocGFyYW0sIG5ld0ZpbHRlcik7XG4gICAgfVxufVxuZnVuY3Rpb24gcnVuRmlsdHJhdGlvbihwcm9wKSB7XG4gICAgbGV0IGZpbHRlckRvd25sb2FkZWQgPSBuZXcgRmlsdGVyO1xuICAgIGlmIChmaWx0ZXIuY2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuICAgICAgICBmaWx0ZXIuY2F0ZWdvcnkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGZpbHRlckRvd25sb2FkZWQuc3dpdGNoQ2F0ZWdvcnkoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyLmJyYW5kLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZmlsdGVyLmJyYW5kLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBmaWx0ZXJEb3dubG9hZGVkLnN3aXRjaEJyYW5kKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci5wcmljZS5taW4gIT09IG51bGwpIHtcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRQcmljZShcIm1pblwiLCBmaWx0ZXIucHJpY2UubWluKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci5wcmljZS5tYXggIT09IG51bGwpIHtcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRQcmljZShcIm1heFwiLCBmaWx0ZXIucHJpY2UubWF4KTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci5zdG9jay5taW4gIT09IG51bGwpIHtcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRTdG9jayhcIm1pblwiLCBmaWx0ZXIuc3RvY2subWluKTtcbiAgICB9XG4gICAgaWYgKGZpbHRlci5zdG9jay5tYXggIT09IG51bGwpIHtcbiAgICAgICAgZmlsdGVyRG93bmxvYWRlZC5zZXRTdG9jayhcIm1heFwiLCBmaWx0ZXIuc3RvY2subWF4KTtcbiAgICB9XG4gICAgcHJvZHVjdHMuYXBwbHlGaWx0ZXIoZmlsdGVyRG93bmxvYWRlZCk7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICAgIGlmIChwcm9wID09PSAncHJpY2UnKSB7XG4gICAgICAgIGNoYW5nZVN0b2NrUmFuZ2UoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcCA9PT0gJ3N0b2NrJykge1xuICAgICAgICBjaGFuZ2VQcmljZVJhbmdlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjaGFuZ2VSYW5nZSgpO1xuICAgIH1cbiAgICByZW5kZXJHb29kcygpO1xuICAgIHJlcmVuZGVyR29vZHNRdWFudGl0eSgpO1xuICAgIHJlbmRlckdvb2RzUXVhbnRpdHkoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VNYWluRmlsdGVyKGZpbHQpIHtcbiAgICBmaWx0ZXIgPSBmaWx0O1xuICAgIHJ1bkZpbHRyYXRpb24obnVsbCk7XG59XG5mdW5jdGlvbiBjaGFuZ2VSYW5nZVBvaW50cyhwcm9wKSB7XG4gICAgbGV0IHJhbmdlTWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyb21TbGlkZXIke3Byb3B9YCk7XG4gICAgbGV0IHJhbmdlTWluTnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZyb21JbnB1dCR7cHJvcH1gKTtcbiAgICBsZXQgcmFuZ2VNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9TbGlkZXIke3Byb3B9YCk7XG4gICAgbGV0IHJhbmdlTWF4TnVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRvSW5wdXQke3Byb3B9YCk7XG4gICAgaWYgKGZpbHRlcltwcm9wXS5taW4gIT09IG51bGwpIHtcbiAgICAgICAgcmFuZ2VNaW4udmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWlufWA7XG4gICAgICAgIHJhbmdlTWluTnVtLnZhbHVlID0gYCR7ZmlsdGVyW3Byb3BdLm1pbn1gO1xuICAgIH1cbiAgICBpZiAoZmlsdGVyW3Byb3BdLm1heCAhPT0gbnVsbCkge1xuICAgICAgICByYW5nZU1heC52YWx1ZSA9IGAke2ZpbHRlcltwcm9wXS5tYXh9YDtcbiAgICAgICAgcmFuZ2VNYXhOdW0udmFsdWUgPSBgJHtmaWx0ZXJbcHJvcF0ubWF4fWA7XG4gICAgfVxufVxuZnVuY3Rpb24gcmVyZW5kZXJHb29kc1F1YW50aXR5KCkge1xuICAgIGNvbnN0IHF1YW50aXR5QXJlYUJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5icmFuZF9fcXVhbnRpdHknKTtcbiAgICBjb25zdCBmaWx0ZXJlZEJyYW5kcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9kdWN0cy5icmFuZHMpIHtcbiAgICAgICAgZmlsdGVyZWRCcmFuZHMucHVzaChrZXkpO1xuICAgIH1cbiAgICA7XG4gICAgcXVhbnRpdHlBcmVhQnJhbmRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJlZEJyYW5kcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuYnJhbmRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PSBpdGVtLmRhdGFzZXQucGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBgKCR7cHJvZHVjdHMuYnJhbmRzW2tleV0ubGVuZ3RofSlgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gJygwKSc7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBxdWFudGl0eUFyZWFDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yeV9fcXVhbnRpdHknKTtcbiAgICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuY2F0ZWdvcmllcykge1xuICAgICAgICBmaWx0ZXJlZENhdGVnb3JpZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICA7XG4gICAgcXVhbnRpdHlBcmVhQ2F0ZWdvcnkuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGZpbHRlcmVkQ2F0ZWdvcmllcy5pbmNsdWRlcyhpdGVtLmRhdGFzZXQucGFyYW0pKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdHMuY2F0ZWdvcmllcykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gaXRlbS5kYXRhc2V0LnBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCgke3Byb2R1Y3RzLmNhdGVnb3JpZXNba2V5XS5sZW5ndGh9KWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5pbm5lckhUTUwgPSAnKDApJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcmVzZXRGaWx0ZXJzKCkge1xuICAgIGNvbnN0IGNoZWNrYm94cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3hzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIGZpbHRlciA9IGZpbHRlck51bGw7XG4gICAgcnVuRmlsdHJhdGlvbihudWxsKTtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPSBcIlwiO1xufVxuZnVuY3Rpb24gc2F2ZVVybCgpIHtcbiAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBlcnIpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hhbmdlU2F2ZUJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYnV0dG9uX3NhdmVcIik7XG4gICAgaWYgKCFidXR0b24pXG4gICAgICAgIHJldHVybjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTYXZlZFwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTYXZlIGZpbHRlcnNcIjtcbiAgICB9LCAyMDAwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGaWx0ZXJzKCkge1xuICAgIHJlbmRlckNhdGVnb3JpZXMoKTtcbiAgICByZW5kZXJCcmFuZHMoKTtcbiAgICBhZGRGaWx0ZXJQYXJhbXMoKTtcbiAgICBhZGRFdmVudHMoKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIGlmIChmb290ZXJBcmVhKSB7XG4gICAgICAgIGZvb3RlckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19pbm5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb3Rlcl9fdGV4dFwiPk1hZGUgYnkgPC9kaXY+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KdWxpYS15ZXNcIiBjbGFzcz1cImZvb3Rlcl9fbGlua1wiPiBKdWxpYSBCb2xvbmlrb3ZhICYgRHptaXRyeSBBbmlza292aWNoPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJfX3llYXJcIj4yMDIyPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyX19zY2hvb2xcIj5cclxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ycy5zY2hvb2wvanMvXCIgY2xhc3M9XCJmb290ZXJfX3NjaG9vbC1uYW1lXCI+XHJcbiAgICAgICAgICA8aW1nIGFsdD1cInJzLXNjaG9vbFwiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL3JzTG9nby5zdmdcIiBjbGFzcz1cImZvb3Rlcl9fc2Nob29sLWltZ1wiPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xuICAgIH1cbn1cbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcbmltcG9ydCBjYXJ0IGZyb20gJy4uL3NjcmlwdHMvY2FydCc7XG4vLyBpbXBvcnQgeyB1cGRhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgeyByZW5kZXJQcm9kdWN0UGFnZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlJztcbmltcG9ydCB7IGFkZFBhdGhVcmwgfSBmcm9tICcuL3JvdXRpbmcnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXJCdXR0b25CdXkgfSBmcm9tIFwiLi9tb2RhbC1wYWdlXCI7XG5pbXBvcnQgeyB1cGRhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcic7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR29vZHMoKSB7XG4gICAgbGV0IGxvY2FsU3RvcmFnZUNhcnQ7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jYXJ0KSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZUNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jYXJ0KTtcbiAgICB9XG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XG4gICAgY29uc3QgZ29vZHMgPSBwcm9kdWN0cy5wcm9kdWN0cztcbiAgICBsZXQgZ29vZHNJbm5lciA9IGBgO1xuICAgIGlmIChnb29kcy5sZW5ndGggPT0gMCkge1xuICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fZW1wdHknPiBObyBwcm9kdWN0cyBmb3VuZCA8L2Rpdj5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZ29vZHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGdvb2QgPSBnb29kc1trZXldO1xuICAgICAgICAgICAgbGV0IGJ1dHRvblN0ciA9IGA8YnV0dG9uIGNsYXNzPSdjYXJkX19idXR0b24gY2FyZF9fYnV0dG9uX2NhcnQgY2FyZF9fYnV0dG9uX2FkZCcgZGF0YS1nb29kSUQgPSBcIiR7Z29vZC5pZH1cIj5BZGQgdG8gY2FydDwvYnV0dG9uPmA7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmNhcnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZUNhcnQucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCtsb2NhbFN0b3JhZ2VDYXJ0LnByb2R1Y3RzW2ldLmlkID09PSBnb29kLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25TdHIgPSBgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9jYXJ0IGNhcmRfX2J1dHRvbl9kZWxldGUnIGRhdGEtZ29vZElEID0gXCIke2dvb2QuaWR9XCI+RGVsZXRlIGZyb20gY2FydDwvYnV0dG9uPmA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnb29kc0lubmVyICs9IGA8ZGl2IGNsYXNzPSdnb29kc19fY2FyZCBjYXJkJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX190aHVtYm5haWwnPlxyXG4gICAgICAgICAgPGltZyBhbHQ9J2dvb2QnIGNsYXNzPSdjYXJkX19pbWcnIHNyYz0nJHtnb29kLnRodW1ibmFpbH0nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fZGlzY29udCc+JHtnb29kLmRpc2NvdW50UGVyY2VudGFnZX0mIzM3OzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3RpdGxlJz4ke2dvb2QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2UnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fcHJpY2VfbmV3Jz4ke2dvb2QucHJpY2V9JiMzNjs8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX3ByaWNlX29sZCc+JHtNYXRoLmZsb29yKGdvb2QucHJpY2UgLyAoMTAwIC0gZ29vZC5kaXNjb3VudFBlcmNlbnRhZ2UpICogMTAwKX0mIzM2OzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2NhcmRfX2JvdHRvbSc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19yYXRpbmcnPiR7Z29vZC5yYXRpbmd9JnN0YXJmOzwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nY2FyZF9fc3RvY2snPlN0b2NrICYjNTg7ICYjMzI7ICR7Z29vZC5zdG9ja308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkX19idXR0b25zJz5cclxuICAgICAgICAgICR7YnV0dG9uU3RyfVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY2FyZF9fYnV0dG9uIGNhcmRfX2J1dHRvbl9tb3JlJyBkYXRhLWdvb2RJRCA9IFwiJHtnb29kLmlkfVwiPlNlZSBtb3JlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGdvb2RzQXJlYSkge1xuICAgICAgICBnb29kc0FyZWEuaW5uZXJIVE1MID0gZ29vZHNJbm5lcjtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uc1RvUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19idXR0b25fbW9yZScpO1xuICAgIGJ1dHRvbnNUb1Byb2R1Y3QuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ29vZElEID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZ29vZGlkO1xuICAgICAgICAgICAgYWRkUGF0aFVybChgL3Byb2R1Y3QvJHtnb29kSUR9YCk7XG4gICAgICAgICAgICByZW5kZXJQcm9kdWN0UGFnZSgpO1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJCdXR0b25CdXkoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZF9fYnV0dG9uX2NhcnRcIik7XG4gICAgYnV0dG9uQ2FydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IHByb2NlZWRBZGRUb0NhcnQoZS5jdXJyZW50VGFyZ2V0KTsgfSk7XG4gICAgfSk7XG4gICAgdXBkYXRlSGVhZGVyKCk7XG59XG5mdW5jdGlvbiBwcm9jZWVkQWRkVG9DYXJ0KGUpIHtcbiAgICBjb25zdCBnb29kSUQgPSBOdW1iZXIoZS5kYXRhc2V0Lmdvb2RpZCk7XG4gICAgaWYgKGdvb2RJRCkge1xuICAgICAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRfX2J1dHRvbl9hZGQnKSkge1xuICAgICAgICAgICAgY2FydC5hZGRQcm9kdWN0KGdvb2RJRCk7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX2J1dHRvbl9hZGQnKTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9uX2RlbGV0ZScpO1xuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlIGZyb20gY2FydFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FydC5yZW1vdmVQcm9kdWN0KGdvb2RJRCk7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX2J1dHRvbl9kZWxldGUnKTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fYnV0dG9uX2FkZCcpO1xuICAgICAgICAgICAgZS50ZXh0Q29udGVudCA9ICdBZGQgdG8gY2FydCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlSGVhZGVyKCk7XG59XG4iLCJpbXBvcnQgeyBjYXJ0IH0gZnJvbSBcIi4uL3NjcmlwdHMvY2FydFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXJBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XG4gICAgaWYgKGhlYWRlckFyZWEpIHtcbiAgICAgICAgaGVhZGVyQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJfX3RlbXBsYXRlXCI+XHJcbiAgICAgIDxhIGhyZWY9Jy8nPjxpbWcgY2xhc3M9XCJoZWFkZXJfX2xvZ29cIiBhbHQ9XCJzaG9wIGxvZ29cIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9sb2dvLnBuZ1wiPjwvYT5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcl9fcHJpY2VcIj5cclxuICAgICAgQ2FydCB0b3RhbCYjNTg7ICYjMzI7XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyX192YWx1ZVwiPjA8L3NwYW4+JiMzNlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGEgaHJlZj0nL2NhcnQnIGNsYXNzPVwiaGVhZGVyX19jYXJ0XCI+XHJcbiAgICAgICAgPGltZyBjbGFzcz1cImhlYWRlcl9fY2FydF9pbWdcIiBhbHQ9XCJjYXJ0XCIgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWcvY2FydC5wbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyX19jYXJ0X3F1YW50aXR5XCI+MDwvZGl2PlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5gO1xuICAgIH1cbiAgICB1cGRhdGVIZWFkZXIoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5jYXJ0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlclByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fdmFsdWUnKTtcbiAgICAgICAgY29uc3QgY2FydEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhcnRfcXVhbnRpdHknKTtcbiAgICAgICAgaWYgKGhlYWRlclByaWNlICYmIGNhcnRBbW91bnQpIHtcbiAgICAgICAgICAgIGlmIChjYXJ0ID09PSBudWxsIHx8IGNhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcnQucHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyUHJpY2UudGV4dENvbnRlbnQgPSAnJyArIGNhcnQudG90YWxQcmljZTtcbiAgICAgICAgICAgICAgICBjYXJ0QW1vdW50LnRleHRDb250ZW50ID0gJycgKyBjYXJ0LnRvdGFsSXRlbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJQcmljZS50ZXh0Q29udGVudCA9ICcwJztcbiAgICAgICAgICAgICAgICBjYXJ0QW1vdW50LnRleHRDb250ZW50ID0gJzAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaGFuZGxlTG9jYXRpb24sIHBhcnNlVXJsIH0gZnJvbSAnLi9yb3V0aW5nJztcbmltcG9ydCB7IHJlbmRlckdvb2RzIH0gZnJvbSAnLi9nb29kcyc7XG5pbXBvcnQgeyByZW5kZXJGaWx0ZXJzIH0gZnJvbSAnLi9maWx0ZXJJdGVtJztcbmltcG9ydCB7IGNoYW5nZVJhbmdlLCBmaWxsVmFsdWVzIH0gZnJvbSBcIi4vcmFuZ2VcIjtcbmltcG9ydCB7IHJ1blNlYXJjaCB9IGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCB7IGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMgfSBmcm9tIFwiLi9zb3J0aW5nXCI7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lckZvclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuaW1wb3J0IHsgcmVuZGVySGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IHsgcmVuZGVyRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSB9IGZyb20gXCIuL21vZGFsLXBhZ2VcIjtcbmNvbnN0IHRlbXBsYXRlQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RvcmVfX3Byb2plY3RcIik7XG5mdW5jdGlvbiByZW5kZXJUZW1wbGF0ZSgpIHtcbiAgICBpZiAodGVtcGxhdGVBcmVhKSB7XG4gICAgICAgIHRlbXBsYXRlQXJlYS5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzID0gJ3dyYXBwZXJfX21haW4nPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzID0gJ2hlYWRlcic+SGVhZGVyXHJcbiAgICAgICAgPGEgaHJlZj0nLyc+TG9nbzwvYT5cclxuICAgICAgICA8YSBocmVmPScvY2FydCc+Q2FydDwvYT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzID0gJ21haW4nPk1haW5cclxuICAgICAgICA8YSBocmVmPScvcHJvZHVjdCc+UHJvZHVjdDwvYT5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Zm9vdGVyIGNsYXNzID0gJ2Zvb3Rlcic+Rm9vdGVyPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5gO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluaXRQcm9qZWN0KCkge1xuICAgIHJlbmRlclRlbXBsYXRlKCk7XG4gICAgaGFuZGxlTG9jYXRpb24oKTtcbiAgICByZW5kZXJHb29kcygpO1xuICAgIHJlbmRlckZpbHRlcnMoKTtcbiAgICBmaWxsVmFsdWVzKCk7XG4gICAgY2hhbmdlUmFuZ2UoKTtcbiAgICBwYXJzZVVybCgpO1xuICAgIHJ1blNlYXJjaCgpO1xuICAgIGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMoKTtcbiAgICBhZGRMaXN0ZW5lckZvclZpZXcoKTtcbiAgICByZW5kZXJIZWFkZXIoKTtcbiAgICByZW5kZXJGb290ZXIoKTtcbiAgICBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG59XG5pbml0UHJvamVjdCgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1vZGFsUGFnZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBtb2RhbFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBtb2RhbFBhZ2UuY2xhc3NOYW1lID0gXCJtb2RhbC1wYWdlXCI7XG4gICAgbW9kYWxQYWdlLmlubmVySFRNTCA9IGA8Zm9ybSBjbGFzcz1cIm1vZGFsLXBhZ2VfX3dyYXBwZXJcIj5cclxuICAgIDxoMSBjbGFzcz1cIm1vZGFsLXBhZ2VfX3RpdGxlXCI+UGVyc29uYWwgaW5mb3JtYXRpb248L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2luZm9cIj5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmFtZT1cIm5hbWVcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2lucHV0IG1vZGFsLXBhZ2VfX2lucHV0X25hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWUgYW5kIHN1cm5hbWVcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX25hbWVcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGRhdGEtbmFtZT1cInRlbFwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgbW9kYWwtcGFnZV9faW5wdXRfdGVsXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBudW1iZXJcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX3RlbFwiPjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRhdGEtbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2lucHV0IG1vZGFsLXBhZ2VfX2lucHV0X2FkZHJlc3NcIiBwbGFjZWhvbGRlcj1cIkRlbGl2ZXJ5IGFkZHJlc3NcIiByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX2FkZHJlc3NcIj48L3NwYW4+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgZGF0YS1uYW1lPVwibWFpbFwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgbW9kYWwtcGFnZV9faW5wdXRfbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2RhbC1wYWdlX19lcnJvciBtb2RhbC1wYWdlX19lcnJvcl9tYWlsXCI+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcGFnZV9fY2FyZCBjcmVkaXQtY2FyZFwiPlxyXG4gICAgICA8aDIgY2xhc3M9XCJtb2RhbC1wYWdlX19zdWJ0aXRsZVwiPkNhcmQgaW5mb3JtYXRpb248L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX3dyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX251bWJlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdC1jYXJkX19pbWdcIj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9XCJwYXltZW50IHN5c3RlbVwiIGNsYXNzPVwiY3JlZGl0LWNhcmRfX2xvZ29cIiBzcmM9XCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkLnBuZ1wiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbWF4bGVuZ3RoPVwiMTZcIiBtaW5sZW5ndGg9XCIxNlwiIGRhdGEtbmFtZT1cIm51bVwiIGNsYXNzPVwibW9kYWwtcGFnZV9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0IGNyZWRpdC1jYXJkX19pbnB1dF9udW1iZXJcIiBwbGFjZWhvbGRlcj1cIkNhcmQgbnVtYmVyXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMTZcIiBtYXhsZW5ndGg9XCIxNlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yIG1vZGFsLXBhZ2VfX2Vycm9yX251bVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNyZWRpdC1jYXJkX19jYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3JlZGl0LWNhcmRfX2l0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcmVkaXQtY2FyZF9fdGV4dFwiPlZhbGlkOjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbWF4bGVuZ3RoPVwiNVwiIGRhdGEtbmFtZT1cInZhbGlkXCIgY2xhc3M9XCJtb2RhbC1wYWdlX19pbnB1dCBjcmVkaXQtY2FyZF9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0X3NtYWxsIGNyZWRpdC1jYXJkX19pbnB1dF92YWxpZFwiIHBsYWNlaG9sZGVyPVwiVmFsaWRpdHkgcGVyaW9kXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3IgbW9kYWwtcGFnZV9fZXJyb3JfdmFsaWRcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjcmVkaXQtY2FyZF9faXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyZWRpdC1jYXJkX190ZXh0XCI+Q1ZWOjwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBtYXhsZW5ndGg9XCIzXCIgZGF0YS1uYW1lPVwiY3Z2XCIgY2xhc3M9XCJtb2RhbC1wYWdlX19pbnB1dCBjcmVkaXQtY2FyZF9faW5wdXQgY3JlZGl0LWNhcmRfX2lucHV0X3NtYWxsIGNyZWRpdC1jYXJkX19pbnB1dF9jdnZcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjNcIiBtYXhsZW5ndGg9XCIzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3IgbW9kYWwtcGFnZV9fZXJyb3JfY3Z2XCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtcGFnZV9fYnV0dG9uIGJ1dHRvblwiPkNvbmZpcm08L2J1dHRvbj5cclxuICA8L2Zvcm0+XHJcbiAgYDtcbiAgICBtYWluID09PSBudWxsIHx8IG1haW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1haW4uYXBwZW5kKG1vZGFsUGFnZSk7XG4gICAgY29uc3QgbW9kYWxBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlXCIpO1xuICAgIG1vZGFsQXJlYSA9PT0gbnVsbCB8fCBtb2RhbEFyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsQXJlYSkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbFBhZ2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGFkZExpc3RlbmVyRm9ybXMoKTtcbiAgICBhZGRMaXN0ZW5lckNhcmROdW1iZXIoKTtcbiAgICBhZGRMaXN0ZW5lclZhbGlkRm9ybSgpO1xuICAgIGFkZExpc3RlbmVyQ29uZmlybSgpO1xufVxuZnVuY3Rpb24gYWRkTGlzdGVuZXJWYWxpZEZvcm0oKSB7XG4gICAgY29uc3QgdmFsaWRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVkaXQtY2FyZF9faW5wdXRfdmFsaWRcIik7XG4gICAgdmFsaWRGb3JtID09PSBudWxsIHx8IHZhbGlkRm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4geyBhZGRDb3JyZWN0VmlldyhlKTsgfSk7XG59XG5mdW5jdGlvbiBhZGRDb3JyZWN0VmlldyhlKSB7XG4gICAgbGV0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gMikge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQudmFsdWUgPSBgJHt2YWx1ZS5zbGljZSgwLCAyKX0vJHt2YWx1ZS5zbGljZSgzKX1gO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lckJ1dHRvbkJ1eSgpIHtcbiAgICBjb25zdCBidXR0b25CdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbl9fYnV5XCIpO1xuICAgIGJ1dHRvbkJ1eSA9PT0gbnVsbCB8fCBidXR0b25CdXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkJ1eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTW9kYWxQYWdlKTtcbn1cbmZ1bmN0aW9uIGFkZExpc3RlbmVyQ29uZmlybSgpIHtcbiAgICBjb25zdCBidXR0b25Db25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlX19idXR0b25cIik7XG4gICAgYnV0dG9uQ29uZmlybSA9PT0gbnVsbCB8fCBidXR0b25Db25maXJtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGVja0NvcnJlY3RJbnB1dCk7XG59XG5mdW5jdGlvbiBjbG9zZU1vZGFsUGFnZSgpIHtcbiAgICBjb25zdCBtb2RhbFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXBhZ2VcIik7XG4gICAgbW9kYWxQYWdlID09PSBudWxsIHx8IG1vZGFsUGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kYWxQYWdlLnJlbW92ZSgpO1xufVxuZnVuY3Rpb24gYWRkTGlzdGVuZXJDYXJkTnVtYmVyKCkge1xuICAgIGNvbnN0IGNhcmROdW1iZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGl0LWNhcmRfX2lucHV0X251bWJlclwiKTtcbiAgICBjYXJkTnVtYmVySW5wdXQgPT09IG51bGwgfHwgY2FyZE51bWJlcklucHV0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkTnVtYmVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7IGNoYW5nZVBheVN5c3RlbShlKTsgfSk7XG59XG5mdW5jdGlvbiBjaGFuZ2VQYXlTeXN0ZW0oZXZlbnQpIHtcbiAgICBsZXQgdmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlZGl0LWNhcmRfX2xvZ29cIik7XG4gICAgaWYgKGltZylcbiAgICAgICAgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCIzXCIpKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkX2FtLnBuZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLnN0YXJ0c1dpdGgoXCI0XCIpKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZy9jYXJkLXYucG5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuc3RhcnRzV2l0aChcIjVcIikpIHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1nL2NhcmQtbS5wbmdcIjtcbiAgICAgICAgfVxufVxuZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JtcygpIHtcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtcGFnZV9faW5wdXRcIik7XG4gICAgZm9ybXMuZm9yRWFjaChmb3JtID0+IHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdGVGb3JtcyhlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB0eXBlRXJyb3IodGV4dCwgcHJvcCkge1xuICAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsLXBhZ2VfX2Vycm9yXyR7cHJvcH1gKTtcbiAgICBpZiAoZXJyb3IgJiYgdGV4dCkge1xuICAgICAgICBlcnJvci5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbn1cbmZ1bmN0aW9uIHR5cGVSaWdodChwcm9wKSB7XG4gICAgY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubW9kYWwtcGFnZV9fZXJyb3JfJHtwcm9wfWApO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgICBlcnJvci5pbm5lckhUTUwgPSBgPGltZyBhbHQ9XCJyaWdodFwiIGNsYXNzPVwibW9kYWwtcGFnZV9fZXJyb3JfaW1nXCIgc3JjPVwiLi4vc3JjL2Fzc2V0cy9pbWcvcmlnaHQucG5nXCI+YDtcbiAgICB9XG59XG4vLyBmdW5jdGlvbiB0eXBlRXJyb3JJbWcocHJvcDogc3RyaW5nKSB7XG4vLyAgIGNvbnN0IGVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm1vZGFsLXBhZ2VfX2Vycm9yXyR7cHJvcH1gKTtcbi8vICAgaWYgKGVycm9yKSB7XG4vLyAgICAgZXJyb3IuaW5uZXJIVE1MID0gYDxpbWcgYWx0PVwicmlnaHRcIiBjbGFzcz1cIm1vZGFsLXBhZ2VfX2Vycm9yX2ltZ1wiIHNyYz1cIi4uL3NyYy9hc3NldHMvaW1nL2Vycm9yLnBuZ1wiPmA7XG4vLyAgIH1cbi8vIH1cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1zKGV2ZW50KSB7XG4gICAgbGV0IG5hbWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZTtcbiAgICBsZXQgdmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIGlmIChuYW1lID09IFwibmFtZVwiKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoIDwgMiB8fCByZXN1bHRbMF0ubGVuZ3RoIDwgMiB8fCByZXN1bHRbMV0ubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdHlwZUVycm9yKFwiRXJyb3IgbmFtZVwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVSaWdodChuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmFtZSA9PSBcInRlbFwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eW1xcK11bXFxkXFwoXFwpXFwgLV17OSwxNH1cXGQkLztcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvciBwaG9uZSBudW1iZXJcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hbWUgPT0gXCJhZGRyZXNzXCIpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPCAzIHx8IHJlc3VsdFswXS5sZW5ndGggPCA1IHx8IHJlc3VsdFsxXS5sZW5ndGggPCA1IHx8IHJlc3VsdFsyXS5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvciBhZGRyZXNzXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHlwZVJpZ2h0KG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYW1lID09IFwibWFpbFwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eW1xcd117MX1bXFx3LVxcLl0qQFtcXHctXStcXC5bYS16XXsyLDR9JC9pO1xuICAgICAgICBpZiAocmUudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHR5cGVSaWdodChuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHR5cGVFcnJvcihcIkVycm9yIGUtbWFpbFwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobmFtZSA9PSBcIm51bVwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eWzAtOV17MTZ9LztcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJVbmNvcnJlY3QgbnVtYmVyXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChuYW1lID09IFwiY3Z2XCIpIHtcbiAgICAgICAgdmFyIHJlID0gL15bMC05XXszfS87XG4gICAgICAgIGlmIChyZS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdHlwZVJpZ2h0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHlwZUVycm9yKFwiRXJyb3JcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG5hbWUgPT0gXCJ2YWxpZFwiKSB7XG4gICAgICAgIHZhciByZSA9IC9eKDA/WzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLztcbiAgICAgICAgaWYgKHJlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlUmlnaHQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0eXBlRXJyb3IoXCJFcnJvclwiLCBuYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNoZWNrUmVxdWlyZWRJbnB1dHMoKSB7XG4gICAgY29uc3QgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsLXBhZ2VfX2lucHV0XCIpO1xuICAgIGZvcm1zLmZvckVhY2goZm9ybSA9PiB7XG4gICAgICAgIGlmIChmb3JtLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBwcm9wID0gZm9ybS5kYXRhc2V0Lm5hbWU7XG4gICAgICAgICAgICBpZiAocHJvcClcbiAgICAgICAgICAgICAgICB0eXBlRXJyb3IoXCJSZXF1aXJlZFwiLCBwcm9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hlY2tDb3JyZWN0SW5wdXQoKSB7XG4gICAgY2hlY2tSZXF1aXJlZElucHV0cygpO1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1wYWdlX193cmFwcGVyXCIpO1xuICAgIGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWwtcGFnZV9fZXJyb3JcIik7XG4gICAgbGV0IGVycm9yTnVtID0gMDtcbiAgICBlcnJvcnMuZm9yRWFjaChlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvci50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgZXJyb3JOdW0gKz0gMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChlcnJvck51bSA+IDApIHtcbiAgICAgICAgbW9kYWwgPT09IG51bGwgfHwgbW9kYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1wYWdlX193cmFwcGVyX3dyb25nXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcGxldGVPcmRlcigpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbXBsZXRlT3JkZXIoKSB7XG4gICAgcmVuZGVyTWVzc2FnZUNvbmZpcm0oKTtcbiAgICByZWRpcmVjdFRvTWFpbigpO1xufVxuZnVuY3Rpb24gcmVuZGVyTWVzc2FnZUNvbmZpcm0oKSB7XG4gICAgY29uc3QgbWVzc2FnZUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgaWYgKG1lc3NhZ2VBcmVhKVxuICAgICAgICBtZXNzYWdlQXJlYS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXBhZ2VfX21lc3NhZ2VcIj5UaGFua3MgZm9yIHlvdXIgb3JkZXI8L2Rpdj5gO1xufVxuZnVuY3Rpb24gcmVkaXJlY3RUb01haW4oKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICB9LCAzMDAwKTtcbn1cbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xuaW1wb3J0IHsgY3JlYXRlTm9kZSB9IGZyb20gXCIuLi9zY3JpcHRzL2hlbHBlcnNcIjtcbmxldCBjb250ZW50O1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2R1Y3RQYWdlKCkge1xuICAgIGNvbnN0IHByb2R1Y3RJZCA9ICt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXTtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKTtcbiAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQ3J1bWJzKHByb2R1Y3QpO1xuICAgICAgICByZW5kZXJQcm9kdWN0KHByb2R1Y3QpO1xuICAgICAgICByZW5kZXJQdXJjaGFzZShwcm9kdWN0KTtcbiAgICB9XG59XG5mdW5jdGlvbiByZW5kZXJDcnVtYnMocHJvZHVjdCkge1xuICAgIGNvbnN0IGNydW1ic0Jsb2NrID0gY3JlYXRlTm9kZSgnY3J1bWJzJyk7XG4gICAgY29uc3Qgc3RvcmVDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgXCJTdG9yZVwiKTtcbiAgICBjb25zdCBjYXRlZ29yeUNydW1iID0gY3JlYXRlTm9kZSgnY3J1bWInLCBwcm9kdWN0ID09PSBudWxsIHx8IHByb2R1Y3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2R1Y3QuY2F0ZWdvcnkpO1xuICAgIGNvbnN0IGJyYW5kQ3J1bWIgPSBjcmVhdGVOb2RlKCdjcnVtYicsIHByb2R1Y3QgPT09IG51bGwgfHwgcHJvZHVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvZHVjdC5icmFuZCk7XG4gICAgY29uc3QgdGl0bGVDcnVtYiA9IGNyZWF0ZU5vZGUoJ2NydW1iJywgcHJvZHVjdCA9PT0gbnVsbCB8fCBwcm9kdWN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9kdWN0LnRpdGxlKTtcbiAgICBjcnVtYnNCbG9jay5hcHBlbmQoc3RvcmVDcnVtYiwgY2F0ZWdvcnlDcnVtYiwgYnJhbmRDcnVtYiwgdGl0bGVDcnVtYik7XG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChjcnVtYnNCbG9jayk7XG59XG5mdW5jdGlvbiByZW5kZXJQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICBjb25zdCBwcm9kdWN0QmxvY2sgPSBjcmVhdGVOb2RlKCdwcm9kdWN0Jyk7XG4gICAgY29uc3QgcGhvdG9zQmxvY2sgPSBjcmVhdGVOb2RlKCdwaG90b3MnKTtcbiAgICBjb25zdCBtYWluUGhvdG9CbG9jayA9IGNyZWF0ZU5vZGUoJ21haW4nKTtcbiAgICBjb25zdCBtYWluUGhvdG8gPSBjcmVhdGVOb2RlKCdtYWluLXBob3RvJyk7XG4gICAgY29uc3QgbWFpblBob3RvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFpblBob3RvSW1nLmNsYXNzTmFtZSA9ICdtYWluLXBob3RvX19pbWcnO1xuICAgIG1haW5QaG90b0ltZy5zcmMgPSBwcm9kdWN0LnRodW1ibmFpbDtcbiAgICBtYWluUGhvdG8uYXBwZW5kKG1haW5QaG90b0ltZyk7XG4gICAgbWFpblBob3RvQmxvY2suYXBwZW5kKG1haW5QaG90byk7XG4gICAgY29uc3Qgc21hbGxQaG90b3NCbG9jayA9IGNyZWF0ZU5vZGUoJ3NtYWxsLXBob3RvcycpO1xuICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgcHJvZHVjdC5pbWFnZXMpIHtcbiAgICAgICAgaWYgKGltYWdlID09PSBwcm9kdWN0LnRodW1ibmFpbClcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBzbWFsbFBob3RvID0gY3JlYXRlTm9kZSgnc21hbGwtcGhvdG8nKTtcbiAgICAgICAgY29uc3Qgc21hbGxQaG90b0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzbWFsbFBob3RvSW1nLnNyYyA9IGltYWdlO1xuICAgICAgICBzbWFsbFBob3RvLmFwcGVuZChzbWFsbFBob3RvSW1nKTtcbiAgICAgICAgc21hbGxQaG90b3NCbG9jay5hcHBlbmQoc21hbGxQaG90byk7XG4gICAgfVxuICAgIHBob3Rvc0Jsb2NrLmFwcGVuZChtYWluUGhvdG9CbG9jaywgc21hbGxQaG90b3NCbG9jayk7XG4gICAgY29uc3QgcHJvZHVjdERhdGFCbG9jayA9IGNyZWF0ZU5vZGUoJ2RhdGEnKTtcbiAgICBjb25zdCBwcm9kdWN0VGl0bGUgPSBjcmVhdGVOb2RlKCdkYXRhX190aXRsZScsIHByb2R1Y3QudGl0bGUpO1xuICAgIGNvbnN0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGNyZWF0ZU5vZGUoJ2RhdGFfX2Rlc2NyaXB0aW9uJywgcHJvZHVjdC5kZXNjcmlwdGlvbik7XG4gICAgY29uc3QgcHJvZHVjdEJyYW5kID0gY3JlYXRlTm9kZSgnZGF0YV9fYnJhbmQnLCBwcm9kdWN0LmJyYW5kKTtcbiAgICBjb25zdCBwcm9kdWN0Q2F0ZWdvcnkgPSBjcmVhdGVOb2RlKCdkYXRhX19jYXRlZ29yeScsIHByb2R1Y3QuY2F0ZWdvcnkpO1xuICAgIGNvbnN0IHByb2R1Y3RTdGF0cyA9IGNyZWF0ZU5vZGUoJ3N0YXRzJyk7XG4gICAgY29uc3QgcHJvZHVjdFJhdGluZyA9IGNyZWF0ZU5vZGUoJ2RhdGFfX3JhdGluZycsICdSYXRpbmc6ICcgKyBwcm9kdWN0LnJhdGluZyk7XG4gICAgY29uc3QgcHJvZHVjdFN0b2NrID0gY3JlYXRlTm9kZSgnZGF0YV9fc3RvY2snLCAnU3RvY2s6ICcgKyBwcm9kdWN0LnN0b2NrKTtcbiAgICBwcm9kdWN0U3RhdHMuYXBwZW5kKHByb2R1Y3RSYXRpbmcsIHByb2R1Y3RTdG9jayk7XG4gICAgcHJvZHVjdERhdGFCbG9jay5hcHBlbmQocHJvZHVjdFRpdGxlLCBwcm9kdWN0RGVzY3JpcHRpb24sIHByb2R1Y3RCcmFuZCwgcHJvZHVjdENhdGVnb3J5LCBwcm9kdWN0U3RhdHMpO1xuICAgIHByb2R1Y3RCbG9jay5hcHBlbmQocGhvdG9zQmxvY2ssIHByb2R1Y3REYXRhQmxvY2spO1xuICAgIGNvbnRlbnQgPT09IG51bGwgfHwgY29udGVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGVudC5hcHBlbmQocHJvZHVjdEJsb2NrKTtcbn1cbmZ1bmN0aW9uIHJlbmRlclB1cmNoYXNlKHByb2R1Y3QpIHtcbiAgICBjb25zdCBwdXJjaGFzZUJsb2NrID0gY3JlYXRlTm9kZSgncHVyY2hhc2UnKTtcbiAgICBjb25zdCBwcmljZUJsb2NrID0gY3JlYXRlTm9kZSgncHJpY2UnKTtcbiAgICBjb25zdCBkaXNjb3VudCA9IGNyZWF0ZU5vZGUoJ3ByaWNlX19kaXNjb3VudCcsIGBEaXNjb3VudDogXFxuJHtwcm9kdWN0LmRpc2NvdW50UGVyY2VudGFnZX1gKTtcbiAgICBjb25zdCBwcmljZSA9IGNyZWF0ZU5vZGUoJ3ByaWNlX19hbW91bnQnLCBgUHJpY2U6IFxcbiR7cHJvZHVjdC5wcmljZX1gKTtcbiAgICBwcmljZUJsb2NrLmFwcGVuZChkaXNjb3VudCwgcHJpY2UpO1xuICAgIGNvbnN0IGJ1dHRvbnNCbG9jayA9IGNyZWF0ZU5vZGUoJ2J1dHRvbnMnKTtcbiAgICBjb25zdCBidXR0b25BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25BZGQuY2xhc3NOYW1lID0gJ2J1dHRvbiBidXR0b25fX2FkZCc7XG4gICAgYnV0dG9uQWRkLnRleHRDb250ZW50ID0gJ0FkZCB0byBDYXJ0JztcbiAgICBjb25zdCBidXR0b25CdXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25CdXkuY2xhc3NOYW1lID0gJ2J1dHRvbiBidXR0b25fX2J1eSc7XG4gICAgYnV0dG9uQnV5LnRleHRDb250ZW50ID0gJ0J1eSBOb3cnO1xuICAgIGJ1dHRvbnNCbG9jay5hcHBlbmQoYnV0dG9uQWRkLCBidXR0b25CdXkpO1xuICAgIHB1cmNoYXNlQmxvY2suYXBwZW5kKHByaWNlQmxvY2ssIGJ1dHRvbnNCbG9jayk7XG4gICAgY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250ZW50LmFwcGVuZChwdXJjaGFzZUJsb2NrKTtcbn1cbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi9zY3JpcHRzL2RhdGEtcGFyc2VyJztcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi9hc3NldHMvZGF0YS9kYXRhJztcbmltcG9ydCB7IGNoYW5nZUZpbHRlcnMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xubGV0IHByaWNlTWluID0gMDtcbmxldCBwcmljZU1heCA9IDA7XG5sZXQgc3RvY2tNaW4gPSAwO1xubGV0IHN0b2NrTWF4ID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBmaWxsVmFsdWVzKCkge1xuICAgIGxldCBwcm8gPSBwcm9kdWN0cy5nZXRQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcbiAgICBwcm8uc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcbiAgICAgICAgcmV0dXJuIGVsMS5wcmljZSAtIGVsMi5wcmljZTtcbiAgICB9KTtcbiAgICBwcmljZU1heCA9IHByb1twcm8ubGVuZ3RoIC0gMV0ucHJpY2U7XG4gICAgcHJpY2VNaW4gPSBwcm9bMF0ucHJpY2U7XG4gICAgcHJvLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XG4gICAgICAgIHJldHVybiBlbDEuc3RvY2sgLSBlbDIuc3RvY2s7XG4gICAgfSk7XG4gICAgc3RvY2tNaW4gPSBwcm9bMF0uc3RvY2s7XG4gICAgc3RvY2tNYXggPSBwcm9bcHJvLmxlbmd0aCAtIDFdLnN0b2NrO1xufVxuZnVuY3Rpb24gcmVuZGVyUmFuZ2UocHJvcCwgbWluVmFsdWUsIG1heFZhbHVlKSB7XG4gICAgbGV0IG1pbiA9IDA7XG4gICAgbGV0IG1heCA9IDA7XG4gICAgaWYgKHByb3AgPT0gXCJwcmljZVwiKSB7XG4gICAgICAgIG1pbiA9IHByaWNlTWluO1xuICAgICAgICBtYXggPSBwcmljZU1heDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG1pbiA9IHN0b2NrTWluO1xuICAgICAgICBtYXggPSBzdG9ja01heDtcbiAgICB9XG4gICAgaWYgKG1pblZhbHVlID09IC0xIHx8IG1heFZhbHVlID09IC0xKSB7XG4gICAgICAgIG1pblZhbHVlID0gbWluO1xuICAgICAgICBtYXhWYWx1ZSA9IG1heDtcbiAgICB9XG4gICAgY29uc3QgcmFuZ2VQbGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5maWx0ZXJfX3JhbmdlXyR7cHJvcH1gKTtcbiAgICBpZiAocmFuZ2VQbGFjZSkge1xuICAgICAgICBsZXQgcmFuZ2VJbm5lciA9IGA8ZGl2IGNsYXNzPVwicmFuZ2VfX2NvbnRhaW5lciByYW5nZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmFuZ2VfX2NvbnRyb2xfc2xpZGVyc1wiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJyYW5nZV9faW5wdXQgcmFuZ2VfX2lucHV0XyR7cHJvcH0gcmFuZ2VfX2lucHV0X21pblwiIGlkPVwiZnJvbVNsaWRlciR7cHJvcH1cIiB0eXBlPVwicmFuZ2VcIiB2YWx1ZT1cIiR7bWluVmFsdWV9XCIgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXh9XCIgZGF0YS1wYXJhbT1cIiR7cHJvcH1cIiBkYXRhLXNpZGUgPVwibWluXCIvPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzID0gXCJyYW5nZV9faW5wdXQgcmFuZ2VfX2lucHV0XyR7cHJvcH0gcmFuZ2VfX2lucHV0X21heFwiIGlkPVwidG9TbGlkZXIke3Byb3B9XCIgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCIke21heFZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4fVwiIGRhdGEtcGFyYW09XCIke3Byb3B9XCIgZGF0YS1zaWRlID1cIm1heFwiLz5cclxuICAgICAgPC9kaXY+YDtcbiAgICAgICAgaWYgKHByb2R1Y3RzLnByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJhbmdlSW5uZXIgKz0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fY29udHJvbF9mb3JtXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInJhbmdlX19pbnB1dF9udW1iZXIgcmFuZ2VfXyR7cHJvcH1cIiB0eXBlPVwibnVtYmVyXCIgaWQ9XCJmcm9tSW5wdXQke3Byb3B9XCIgdmFsdWU9XCIke21pblZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD0ke21heH0vPiYjMzY7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicmFuZ2VfX2lucHV0X251bWJlciByYW5nZV9fJHtwcm9wfVwiIHR5cGU9XCJudW1iZXJcIiBpZD1cInRvSW5wdXQke3Byb3B9XCIgdmFsdWU9XCIke21heFZhbHVlfVwiIG1pbj1cIiR7bWlufVwiIG1heD0ke21heH0vPiYjMzY7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlSW5uZXIgKz0gYDxkaXYgY2xhc3M9XCJyYW5nZV9fZW1wdHlcIj5ObyBwcm9kdWN0cyBmb3VuZDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgICAgcmFuZ2VJbm5lciArPSBgPC9kaXY+YDtcbiAgICAgICAgcmFuZ2VQbGFjZS5pbm5lckhUTUwgPSByYW5nZUlubmVyO1xuICAgIH1cbiAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZV9faW5wdXQnKTtcbiAgICByYW5nZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgY2hhbmdlRmlsdGVycyhlKTtcbiAgICAgICAgICAgIGNoYW5nZVJhbmdlVmFsdWUocHJvcCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hhbmdlUmFuZ2VWYWx1ZShwcm9wKSB7XG4gICAgY29uc3QgcmFuZ2VWYWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucmFuZ2VfXyR7cHJvcH1gKTtcbiAgICBjb25zdCByYW5nZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5yYW5nZV9faW5wdXRfJHtwcm9wfWApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZ2VWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmFuZ2VWYWx1ZXNbMF0udmFsdWUgPSByYW5nZUlucHV0c1swXS52YWx1ZTtcbiAgICAgICAgcmFuZ2VWYWx1ZXNbMV0udmFsdWUgPSByYW5nZUlucHV0c1sxXS52YWx1ZTtcbiAgICB9XG59XG5mdW5jdGlvbiBhZGRSYW5nZUZ1bmN0aW9uYWxpdHkocHJvcCkge1xuICAgIGNvbnN0IGZyb21TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZnJvbVNsaWRlciR7cHJvcH1gKTtcbiAgICBjb25zdCB0b1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b1NsaWRlciR7cHJvcH1gKTtcbiAgICBjb25zdCBmcm9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZnJvbUlucHV0JHtwcm9wfWApO1xuICAgIGNvbnN0IHRvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdG9JbnB1dCR7cHJvcH1gKTtcbiAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xuICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xuICAgIGlmIChmcm9tU2xpZGVyICYmIHRvU2xpZGVyICYmIGZyb21JbnB1dCAmJiB0b0lucHV0KSB7XG4gICAgICAgIGZyb21TbGlkZXIub25pbnB1dCA9ICgpID0+IGNvbnRyb2xGcm9tU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCBmcm9tSW5wdXQpO1xuICAgICAgICB0b1NsaWRlci5vbmlucHV0ID0gKCkgPT4gY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KTtcbiAgICAgICAgZnJvbUlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjb250cm9sRnJvbUlucHV0KGZyb21TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xuICAgICAgICB0b0lucHV0Lm9uaW5wdXQgPSAoKSA9PiBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCB0b1NsaWRlcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbnRyb2xGcm9tSW5wdXQoZnJvbVNsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tSW5wdXQsIHRvSW5wdXQsICcjQzZDNkM2JywgJyNiYjFiMjMnLCBjb250cm9sU2xpZGVyKTtcbiAgICAgICAgaWYgKGZyb20gPiB0bykge1xuICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XG4gICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyhmcm9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tSW5wdXQsIHRvSW5wdXQsICcjQzZDNkM2JywgJyNiYjFiMjMnLCBjb250cm9sU2xpZGVyKTtcbiAgICAgICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b0lucHV0KTtcbiAgICAgICAgaWYgKGZyb20gPD0gdG8pIHtcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KSB7XG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xuICAgICAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xuICAgICAgICBpZiAoZnJvbSA+IHRvKSB7XG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcoZnJvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KSB7XG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xuICAgICAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjYmIxYjIzJywgdG9TbGlkZXIpO1xuICAgICAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvU2xpZGVyKTtcbiAgICAgICAgaWYgKGZyb20gPD0gdG8pIHtcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcbiAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKGZyb20pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFBhcnNlZChjdXJyZW50RnJvbSwgY3VycmVudFRvKSB7XG4gICAgICAgIGNvbnN0IGZyb20gPSBwYXJzZUludChjdXJyZW50RnJvbS52YWx1ZSwgMTApO1xuICAgICAgICBjb25zdCB0byA9IHBhcnNlSW50KGN1cnJlbnRUby52YWx1ZSwgMTApO1xuICAgICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmlsbFNsaWRlcihmcm9tLCB0bywgc2xpZGVyQ29sb3IsIHJhbmdlQ29sb3IsIGNvbnRyb2xTbGlkZXIpIHtcbiAgICAgICAgaWYgKGZyb20gJiYgdG8gJiYgY29udHJvbFNsaWRlcikge1xuICAgICAgICAgICAgY29uc3QgcmFuZ2VEaXN0YW5jZSA9IE51bWJlcih0by5tYXgpIC0gTnVtYmVyKHRvLm1pbik7XG4gICAgICAgICAgICBjb25zdCBmcm9tUG9zaXRpb24gPSBOdW1iZXIoZnJvbS52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcbiAgICAgICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSBOdW1iZXIodG8udmFsdWUpIC0gTnVtYmVyKHRvLm1pbik7XG4gICAgICAgICAgICBjb250cm9sU2xpZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICR7c2xpZGVyQ29sb3J9IDAlLFxyXG4gICAgICAgICR7c2xpZGVyQ29sb3J9ICR7KGZyb21Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSxcclxuICAgICAgICAke3JhbmdlQ29sb3J9ICR7KChmcm9tUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpKSAqIDEwMH0lLFxyXG4gICAgICAgICR7cmFuZ2VDb2xvcn0gJHsodG9Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSwgXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gJHsodG9Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSwgXHJcbiAgICAgICAgJHtzbGlkZXJDb2xvcn0gMTAwJSlgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFRvZ2dsZUFjY2Vzc2libGUoY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB0b1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0b1NsaWRlciR7cHJvcH1gKTtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgTnVtYmVyKGN1cnJlbnRUYXJnZXQudmFsdWUpIDw9IDAgJiYgdG9TbGlkZXIpIHtcbiAgICAgICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IFN0cmluZygyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b1NsaWRlcikge1xuICAgICAgICAgICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IFN0cmluZygwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQcmljZVJhbmdlKCkge1xuICAgIHJlbmRlclJhbmdlKFwicHJpY2VcIiwgcHJvZHVjdHMucHJpY2VSYW5nZS5taW4sIHByb2R1Y3RzLnByaWNlUmFuZ2UubWF4KTtcbiAgICAvL2FkZFJhbmdlRnVuY3Rpb25hbGl0eShcInByaWNlXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVN0b2NrUmFuZ2UoKSB7XG4gICAgcmVuZGVyUmFuZ2UoXCJzdG9ja1wiLCBwcm9kdWN0cy5zdG9ja1JhbmdlLm1pbiwgcHJvZHVjdHMuc3RvY2tSYW5nZS5tYXgpO1xuICAgIC8vYWRkUmFuZ2VGdW5jdGlvbmFsaXR5KFwic3RvY2tcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUmFuZ2UoKSB7XG4gICAgY2hhbmdlUHJpY2VSYW5nZSgpO1xuICAgIGNoYW5nZVN0b2NrUmFuZ2UoKTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgcmVuZGVyRXJyb3JQYWdlIH0gZnJvbSAnLi9lcnJvci1wYWdlJztcbmltcG9ydCB7IHJlbmRlckNhcnRQYWdlIH0gZnJvbSAnLi9jYXJ0LXBhZ2UnO1xuaW1wb3J0IHsgcmVuZGVyUHJvZHVjdFBhZ2UgfSBmcm9tICcuL3Byb2R1Y3QtcGFnZSc7XG5pbXBvcnQgeyByZW5kZXJTdG9yZVBhZ2UgfSBmcm9tICcuL3N0b3JlLXBhZ2UnO1xuaW1wb3J0IHsgY2hhbmdlTWFpbkZpbHRlciwgdGlja0NoZWNrYm94ZXMgfSBmcm9tICcuL2ZpbHRlckl0ZW0nO1xuaW1wb3J0IHsgbWFrZVNvcnRpbmcgfSBmcm9tICcuL3NvcnRpbmcnO1xuaW1wb3J0IHsgYXBwbHlWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xuY29uc3QgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbmNvbnN0IHJvdXRlcyA9IHtcbiAgICAnJzogcmVuZGVyU3RvcmVQYWdlLFxuICAgICdwcm9kdWN0JzogcmVuZGVyUHJvZHVjdFBhZ2UsXG4gICAgJ2NhcnQnOiByZW5kZXJDYXJ0UGFnZSxcbiAgICAnZXJyb3InOiByZW5kZXJFcnJvclBhZ2UsXG59O1xuZXhwb3J0IGNvbnN0IGhhbmRsZUxvY2F0aW9uID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVzW3BhdGhdIHx8IHJvdXRlcy5lcnJvcjtcbiAgICByb3V0ZSgpO1xufSk7XG5leHBvcnQgZnVuY3Rpb24gYWRkUGF0aFVybChwcm9wKSB7XG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBwcm9wKTtcbiAgICBoYW5kbGVMb2NhdGlvbigpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVXJsKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpO1xuICAgICAgICBsZXQgZmlsdGVyID0ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6IFtdLFxuICAgICAgICAgICAgYnJhbmQ6IFtdLFxuICAgICAgICAgICAgcHJpY2U6IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSxcbiAgICAgICAgICAgIHN0b2NrOiB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0sXG4gICAgICAgIH07XG4gICAgICAgIGxldCB2aWV3ID0gXCJcIjtcbiAgICAgICAgbGV0IHNvcnQgPSBcIlwiO1xuICAgICAgICBxdWVyeVBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwiY2F0ZWdvcnlcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBmaWx0ZXIuY2F0ZWdvcnkgPSBhcnJbMV0uc3BsaXQoJyonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwiYnJhbmRcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBsZXQgYXJyUmVzdWx0ID0gYXJyWzFdLnNwbGl0KCcqJyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGFyclJlc3VsdC5tYXAoaXRlbSA9PiBkZWNvZGVVUklDb21wb25lbnQoaXRlbSkpO1xuICAgICAgICAgICAgICAgIGZpbHRlci5icmFuZCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwicHJpY2VcIikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzBdLmluY2x1ZGVzKFwibWluXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5wcmljZS5taW4gPSBOdW1iZXIoYXJyWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlci5wcmljZS5tYXggPSBOdW1iZXIoYXJyWzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyYW0uc3RhcnRzV2l0aChcInN0b2NrXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgaWYgKGFyclswXS5pbmNsdWRlcyhcIm1pblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuc3RvY2subWluID0gTnVtYmVyKGFyclsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIuc3RvY2subWF4ID0gTnVtYmVyKGFyclsxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhcmFtLnN0YXJ0c1dpdGgoXCJ2aWV3XCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFyciA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgdmlldyA9IGFyclsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbS5zdGFydHNXaXRoKFwic29ydFwiKSkge1xuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIHNvcnQgPSBhcnJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBjaGFuZ2VNYWluRmlsdGVyKGZpbHRlcik7XG4gICAgICAgIG1ha2VTb3J0aW5nKHNvcnQpO1xuICAgICAgICBhcHBseVZpZXcodmlldyk7XG4gICAgICAgIHRpY2tDaGVja2JveGVzKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0UGFyYW0oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgIH1cbiAgICB2YWx1ZSA9IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgbGV0IGt2cCA9IGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKS5zcGxpdCgnJicpO1xuICAgIGxldCBpID0gMDtcbiAgICBmb3IgKDsgaSA8IGt2cC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoa3ZwW2ldLnN0YXJ0c1dpdGgoa2V5ICsgJz0nKSkge1xuICAgICAgICAgICAgbGV0IHBhaXIgPSBrdnBbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IFwic29ydFwiIHx8IHBhaXJbMF0gPT0gXCJ2aWV3XCIgfHwgcGFpclswXSA9PSBcInByaWNlLW1pblwiIHx8IHBhaXJbMF0gPT0gXCJwcmljZS1tYXhcIiB8fCBwYWlyWzBdID09IFwic3RvY2stbWluXCIgfHwgcGFpclswXSA9PSBcInN0b2NrLW1heFwiKSB7XG4gICAgICAgICAgICAgICAgcGFpclsxXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhaXJbMV0uaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUFyciA9IHBhaXJbMV0uc3BsaXQoXCIqXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVBcnJbaV0gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFpclsxXSA9IHZhbHVlQXJyLmpvaW4oJyonKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJbMV0gPSBwYWlyWzFdICsgYCoke3ZhbHVlfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAga3ZwW2ldID0gcGFpci5qb2luKCc9Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA+PSBrdnAubGVuZ3RoKSB7XG4gICAgICAgIGt2cFtrdnAubGVuZ3RoXSA9IFtrZXksIHZhbHVlXS5qb2luKCc9Jyk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2ggPT0gXCJcIikge1xuICAgICAgICBrdnAuc2hpZnQoKTtcbiAgICB9XG4gICAgbGV0IHBhcmFtcyA9IGt2cC5qb2luKCcmJyk7XG4gICAgbGV0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgXCI/XCIgKyBwYXJhbXM7XG4gICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogbmV3dXJsIH0sICcnLCBuZXd1cmwpO1xufVxuLy8gY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdF9faXRlbVwiKTtcbi8vIGJ1dHRvbnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuLy8gICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbi8vICAgICBjb25zdCBwYXRoOiBzdHJpbmcgPSAoZS50YXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnQpLmhyZWY7XG4vLyAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgfSlcbi8vIH0pXG53aW5kb3cub25wb3BzdGF0ZSA9IGhhbmRsZUxvY2F0aW9uO1xuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9zY3JpcHRzL2RhdGEtcGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gcnVuU2VhcmNoKCkge1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dCA9PT0gbnVsbCB8fCBzZWFyY2hJbnB1dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIC8vIHByb2R1Y3RzLmFwcGx5RmlsdGVyKClcbiAgICAgICAgcnVuRmlsdGVyKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJ1bkZpbHRlcihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wID09PSAnbnVtYmVyJylcbiAgICAgICAgcHJvcCA9ICcnICsgcHJvcDtcbiAgICBwcm9kdWN0cy5zZWFyY2hQcm9kdWN0c0J5U3RyaW5nKHByb3ApO1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzKTtcbn1cbiIsImltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vc2NyaXB0cy9kYXRhLXBhcnNlclwiO1xuaW1wb3J0IHsgcmVuZGVyR29vZHMgfSBmcm9tIFwiLi9nb29kc1wiO1xuaW1wb3J0IHsgaW5zZXJ0UGFyYW0gfSBmcm9tICcuL3JvdXRpbmcnO1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExpc3RlbmVyU29ydGluZ0J1dHRvbnMoKSB7XG4gICAgY29uc3QgYnV0dG9uU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb3J0ZXJzX19idXR0b24nKTtcbiAgICBidXR0b25Tb3J0LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHNvcnRHb29kcyhlKTtcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUJ1dHRvbihlKTtcbiAgICAgICAgICAgIGluc2VydFBhcmFtKFwic29ydFwiLCBgJHtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb259LSR7ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZGlyZWN0aW9ufWApO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUJ1dHRvbihldmVudCkge1xuICAgIGNvbnN0IGJ1dHRvblNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc29ydGVyc19fYnV0dG9uJyk7XG4gICAgYnV0dG9uU29ydC5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic29ydGVyc19fYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xufVxuZnVuY3Rpb24gc29ydEdvb2RzKGV2ZW50LCBvcHQsIGRpcikge1xuICAgIGxldCBvcHRpb24gPSBldmVudCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb24gOiBvcHQ7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGV2ZW50ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmRpcmVjdGlvbiA6IGRpcjtcbiAgICBpZiAob3B0aW9uID09IFwicHJpY2VcIikge1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWluXCIpIHtcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsMi5wcmljZSAtIGVsMS5wcmljZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtYXhcIikge1xuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwxLnByaWNlIC0gZWwyLnByaWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJtaW5cIikge1xuICAgICAgICAgICAgcHJvZHVjdHMucHJvZHVjdHMuc29ydChmdW5jdGlvbiAoZWwxLCBlbDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwyLnJhdGluZyAtIGVsMS5yYXRpbmc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwibWF4XCIpIHtcbiAgICAgICAgICAgIHByb2R1Y3RzLnByb2R1Y3RzLnNvcnQoZnVuY3Rpb24gKGVsMSwgZWwyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsMS5yYXRpbmcgLSBlbDIucmF0aW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyR29vZHMoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU29ydGluZyhwcm9wKSB7XG4gICAgbGV0IGFyciA9IHByb3Auc3BsaXQoJy0nKTtcbiAgICBzb3J0R29vZHModW5kZWZpbmVkLCBhcnJbMF0sIGFyclsxXSk7XG4gICAgY29uc3QgYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtb3B0aW9uPVwiJHthcnJbMF19XCJdW2RhdGEtZGlyZWN0aW9uPVwiJHthcnJbMV19XCJdYCk7XG4gICAgYWN0aXZlQnV0dG9uID09PSBudWxsIHx8IGFjdGl2ZUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzb3J0ZXJzX19idXR0b25fYWN0aXZlXCIpO1xufVxuIiwiaW1wb3J0IHByb2R1Y3RzIGZyb20gXCIuLi9zY3JpcHRzL2RhdGEtcGFyc2VyXCI7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RvcmVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgPGFydGljbGUgY2xhc3M9J3N0b3JlX19wYWdlIHN0b3JlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdzdG9yZV9fc2VhcmNoIHNlYXJjaCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdzZWFyY2hfX2Jsb2NrJz5cclxuICAgICAgICAgICAgPGltZyBhbHQ9J3NlYXJjaCcgY2xhc3M9J3NlYXJjaF9faW1nJyBzcmM9Jy4uL3NyYy9hc3NldHMvaW1nL3NlYXJjaDMucG5nJz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9J3NlYXJjaCcgY2xhc3M9J3NlYXJjaF9faW5wdXQnIHBsYWNlaG9sZGVyID0nU2VhcmNoIHByb2R1Y3QnPjwvaW5wdXQ+IFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX21haW4nPlxyXG4gICAgICAgICAgPGFzaWRlIGNsYXNzPSdzdG9yZV9fZmlsdGVycyBmaWx0ZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19jYXRlZ29yeSc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+Q2F0ZWdvcnk8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEgZmlsdGVyX19jYXRlZ29yeV9hcmVhJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2JyYW5kJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5CcmFuZDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2JyYW5kX2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fcHJpY2UnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlByaWNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhIGZpbHRlcl9fYXJlYV9yYW5nZSBmaWx0ZXJfX3JhbmdlX3ByaWNlJz48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX3N0b2NrJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5TdG9jazwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSBmaWx0ZXJfX2FyZWFfcmFuZ2UgZmlsdGVyX19yYW5nZV9zdG9jayc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19idXR0b25zJz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdmaWx0ZXJfX2J1dHRvbiBmaWx0ZXJfX2J1dHRvbl9yZXNldCBidXR0b24nPlJlc2V0IGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdmaWx0ZXJfX2J1dHRvbiBmaWx0ZXJfX2J1dHRvbl9zYXZlIGJ1dHRvbic+U2F2ZSBmaWx0ZXJzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hc2lkZT5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPSdzdG9yZV9fZ29vZHMgZ29vZHMnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fb3B0aW9ucyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX3NvcnRlcnMgc29ydGVycyc+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3ByaWNlIHNvcnRlcnNfX3ByaWNlX2xvdycgZGF0YS1vcHRpb24gPSBcInByaWNlXCIgZGF0YS1kaXJlY3Rpb249XCJtaW5cIj5wcmljZSAmIzg1OTU7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdidXR0b24gc29ydGVyc19fYnV0dG9uIHNvcnRlcnNfX3ByaWNlIHNvcnRlcnNfX3ByaWNlX2hpZ2gnIGRhdGEtb3B0aW9uID0gXCJwcmljZVwiIGRhdGEtZGlyZWN0aW9uPVwibWF4XCI+cHJpY2UgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nYnV0dG9uIHNvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19yYXRpbmcgc29ydGVyc19fcmF0aW5nX2xvdycgZGF0YS1vcHRpb24gPSBcInJhdGluZ1wiIGRhdGEtZGlyZWN0aW9uPVwibWluXCI+cmF0aW5nICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2J1dHRvbiBzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcmF0aW5nIHNvcnRlcnNfX3JhdGluZ19oaWdoJyBkYXRhLW9wdGlvbiA9IFwicmF0aW5nXCIgZGF0YS1kaXJlY3Rpb249XCJtYXhcIj5yYXRpbmcgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz0nZ29vZHNfX3RpdGxlJz5Gb3VuZDogPHNwYW4gY2xhc3M9J2dvb2RzX19xdWFudGl0eSc+JHtwcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGh9PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX3ZpZXcgdmlldyc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24nPjxpbWcgYWx0PSdncmlkJyBjbGFzcz0ndmlld19fYnV0dG9uX2ltZyB2aWV3X19idXR0b25fbWFueScgc3JjPScuLi9zcmMvYXNzZXRzL2ltZy8wMDMtZ3JpZC0xLnBuZycgZGF0YS12aWV3ID0gXCJtYW55XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24nPjxpbWcgYWx0PSdncmlkJyBjbGFzcz0ndmlld19fYnV0dG9uX2FjdGl2ZSB2aWV3X19idXR0b25faW1nIHZpZXdfX2J1dHRvbl9mZXcnIHNyYz0nLi4vc3JjL2Fzc2V0cy9pbWcvMDA0LW1lbnUtMS5wbmcnIGRhdGEtdmlldyA9IFwiZmV3XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fYXJlYSc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L2Rpdj5gO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHb29kc1F1YW50aXR5KCkge1xuICAgIGNvbnN0IGdvb2RzcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX3F1YW50aXR5Jyk7XG4gICAgaWYgKGdvb2RzcXVhbnRpdHkpIHtcbiAgICAgICAgZ29vZHNxdWFudGl0eS5pbm5lckhUTUwgPSBgJHtwcm9kdWN0cy5wcm9kdWN0cy5sZW5ndGh9YDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBpbnNlcnRQYXJhbSB9IGZyb20gXCIuL3JvdXRpbmdcIjtcbmV4cG9ydCBmdW5jdGlvbiBhZGRMaXN0ZW5lckZvclZpZXcoKSB7XG4gICAgY29uc3QgYnV0dG9uc1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlld19fYnV0dG9uX2ltZycpO1xuICAgIGJ1dHRvbnNWaWV3LmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VWaWV3KGV2ZW50KTtcbiAgICAgICAgICAgIGluc2VydFBhcmFtKFwidmlld1wiLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmlldyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hhbmdlVmlldyhldikge1xuICAgIGNvbnN0IGJ1dHRvbnNWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXdfX2J1dHRvbl9pbWcnKTtcbiAgICBidXR0b25zVmlldy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd2aWV3X19idXR0b25fYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgbGV0IGFjdGl2ZUJ1dHRvbiA9IGV2LmN1cnJlbnRUYXJnZXQ7XG4gICAgYWN0aXZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3ZpZXdfX2J1dHRvbl9hY3RpdmUnKTtcbiAgICBjb25zdCBnb29kc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29vZHNfX2FyZWEnKTtcbiAgICBnb29kc0FyZWEgPT09IG51bGwgfHwgZ29vZHNBcmVhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnb29kc0FyZWEuY2xhc3NMaXN0LnRvZ2dsZSgnZ29vZHNfX2FyZWFfbWFueScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Vmlldyhwcm9wKSB7XG4gICAgY29uc3QgZ29vZHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvb2RzX19hcmVhJyk7XG4gICAgY29uc3QgYnV0dG9uTWFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlld19fYnV0dG9uX21hbnlcIik7XG4gICAgY29uc3QgYnV0dG9uRmV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWV3X19idXR0b25fZmV3XCIpO1xuICAgIGlmIChwcm9wID09IFwibWFueVwiKSB7XG4gICAgICAgIGdvb2RzQXJlYSA9PT0gbnVsbCB8fCBnb29kc0FyZWEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdvb2RzQXJlYS5jbGFzc0xpc3QuYWRkKCdnb29kc19fYXJlYV9tYW55Jyk7XG4gICAgICAgIGJ1dHRvbkZldyA9PT0gbnVsbCB8fCBidXR0b25GZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkZldy5jbGFzc0xpc3QucmVtb3ZlKFwidmlld19fYnV0dG9uX2FjdGl2ZVwiKTtcbiAgICAgICAgYnV0dG9uTWFueSA9PT0gbnVsbCB8fCBidXR0b25NYW55ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25NYW55LmNsYXNzTGlzdC5hZGQoXCJ2aWV3X19idXR0b25fYWN0aXZlXCIpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSBcIi4vZGF0YS1wYXJzZXJcIjtcbmNsYXNzIENhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmNhcnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsU3RvcmFnZUNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jYXJ0KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxJdGVtcyA9IGxvY2FsU3RvcmFnZUNhcnQudG90YWxJdGVtcztcbiAgICAgICAgICAgIHRoaXMudG90YWxQcmljZSA9IGxvY2FsU3RvcmFnZUNhcnQudG90YWxQcmljZTtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBsb2NhbFN0b3JhZ2VDYXJ0LnByb2R1Y3RzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b3RhbEl0ZW1zID0gMDtcbiAgICAgICAgICAgIHRoaXMudG90YWxQcmljZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkUHJvZHVjdChwcm9kdWN0SWQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMrKztcbiAgICAgICAgY29uc3QgcHJvZHVjdFByaWNlID0gKF9hID0gcHJvZHVjdHMuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByaWNlO1xuICAgICAgICBpZiAocHJvZHVjdFByaWNlKVxuICAgICAgICAgICAgdGhpcy50b3RhbFByaWNlICs9IHByb2R1Y3RQcmljZTtcbiAgICAgICAgY29uc3QgY2FydFByb2R1Y3RJZCA9IHRoaXMuZ2V0Q2FydFByb2R1Y3RJZChwcm9kdWN0SWQpO1xuICAgICAgICBpZiAoY2FydFByb2R1Y3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzW2NhcnRQcm9kdWN0SWRdLmFtb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgICAgIGFtb3VudDogMSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgIH1cbiAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RJZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudG90YWxJdGVtcy0tO1xuICAgICAgICBjb25zdCBwcm9kdWN0UHJpY2UgPSAoX2EgPSBwcm9kdWN0cy5nZXRQcm9kdWN0QnlJZChwcm9kdWN0SWQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJpY2U7XG4gICAgICAgIGlmIChwcm9kdWN0UHJpY2UpXG4gICAgICAgICAgICB0aGlzLnRvdGFsUHJpY2UgLT0gcHJvZHVjdFByaWNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2R1Y3RzW2ldLmlkID09PSBwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0c1tpXS5hbW91bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHNbaV0uYW1vdW50LS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgfVxuICAgIGdldENhcnRQcm9kdWN0SWQocHJvZHVjdElkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHNbaV0uaWQgPT09IHByb2R1Y3RJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgPSAwO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgJycpO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcbmV4cG9ydCBkZWZhdWx0IGNhcnQ7XG4iLCJpbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vYXNzZXRzL2RhdGEvZGF0YSc7XG5jbGFzcyBQcm9kdWN0cyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgIHRoaXMuYnJhbmRzID0ge307XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcyA9IHt9O1xuICAgICAgICB0aGlzLnByaWNlUmFuZ2UgPSB7XG4gICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgbWF4OiAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdG9ja1JhbmdlID0ge1xuICAgICAgICAgICAgbWluOiAtMSxcbiAgICAgICAgICAgIG1heDogLTEsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmdldFByb2R1Y3RzKGRhdGEpO1xuICAgICAgICB0aGlzLmdldFByb2R1Y3RzTWV0YWRhdGEoKTtcbiAgICB9XG4gICAgZ2V0UHJvZHVjdHMoZGF0YSkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gW107XG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgYnJhbmQ6IGVsLmJyYW5kLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBlbC5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZWwuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZGlzY291bnRQZXJjZW50YWdlOiBlbC5kaXNjb3VudFBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgaWQ6IGVsLmlkLFxuICAgICAgICAgICAgICAgIGltYWdlczogZWwuaW1hZ2VzLFxuICAgICAgICAgICAgICAgIHByaWNlOiBlbC5wcmljZSxcbiAgICAgICAgICAgICAgICByYXRpbmc6IGVsLnJhdGluZyxcbiAgICAgICAgICAgICAgICBzdG9jazogZWwuc3RvY2ssXG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBlbC50aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGVsLnRpdGxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzO1xuICAgIH1cbiAgICBnZXRQcm9kdWN0c01ldGFkYXRhKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdGhpcy5wcm9kdWN0cykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMucHJpY2VSYW5nZS5taW4gPiBwcm9kdWN0LnByaWNlKVxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5taW4gPSBwcm9kdWN0LnByaWNlO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJpY2VSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMucHJpY2VSYW5nZS5tYXggPCBwcm9kdWN0LnByaWNlKVxuICAgICAgICAgICAgICAgIHRoaXMucHJpY2VSYW5nZS5tYXggPSBwcm9kdWN0LnByaWNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvY2tSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMuc3RvY2tSYW5nZS5taW4gPiBwcm9kdWN0LnN0b2NrKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RvY2tSYW5nZS5taW4gPSBwcm9kdWN0LnN0b2NrO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RvY2tSYW5nZS5taW4gPT09IC0xIHx8IHRoaXMuc3RvY2tSYW5nZS5tYXggPCBwcm9kdWN0LnN0b2NrKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RvY2tSYW5nZS5tYXggPSBwcm9kdWN0LnN0b2NrO1xuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5icmFuZCBpbiB0aGlzLmJyYW5kcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJyYW5kc1twcm9kdWN0LmJyYW5kXSA9IFtwcm9kdWN0XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmJyYW5kc1twcm9kdWN0LmJyYW5kXS5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgaWYgKCEocHJvZHVjdC5jYXRlZ29yeSBpbiB0aGlzLmNhdGVnb3JpZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzW3Byb2R1Y3QuY2F0ZWdvcnldID0gW3Byb2R1Y3RdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllc1twcm9kdWN0LmNhdGVnb3J5XS5wdXNoKHByb2R1Y3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFByb2R1Y3RCeUlkKGlkKSB7XG4gICAgICAgIGZvciAoY29uc3QgcHJvZHVjdCBvZiB0aGlzLnByb2R1Y3RzKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PT0gaWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VhcmNoUHJvZHVjdHNCeVN0cmluZyhpbnB1dFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG5vbkluZm9ybWF0aXZlS2V5cyA9IFsnaWQnLCAndGh1bWJuYWlsJywgJ2ltYWdlcyddO1xuICAgICAgICBmb3IgKGxldCBpbmQgPSAwOyBpbmQgPCB0aGlzLnByb2R1Y3RzLmxlbmd0aDsgaW5kKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLnByb2R1Y3RzW2luZF07XG4gICAgICAgICAgICBsZXQgaXNWYWx1ZUZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvZHVjdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChub25JbmZvcm1hdGl2ZUtleXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNWYWx1ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc1ZhbHVlRm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnNwbGljZShpbmQsIDEpO1xuICAgICAgICAgICAgICAgIGluZC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGx5RmlsdGVyKGZpbHRlcikge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5nZXRQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcbiAgICAgICAgdGhpcy5icmFuZHMgPSB7fTtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0ge307XG4gICAgICAgIHRoaXMucHJpY2VSYW5nZSA9IHtcbiAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICBtYXg6IC0xLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0b2NrUmFuZ2UgPSB7XG4gICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgbWF4OiAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgbm9uSW5mb3JtYXRpdmVLZXlzID0gWydpZCcsICd0aHVtYm5haWwnLCAnaW1hZ2VzJ107XG4gICAgICAgIGZvciAobGV0IGluZCA9IDA7IGluZCA8IHRoaXMucHJvZHVjdHMubGVuZ3RoOyBpbmQrKykge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLnByb2R1Y3RzW2luZF07XG4gICAgICAgICAgICBjb25zdCByZW1vdmVJdGVtID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMuc3BsaWNlKGluZCwgMSk7XG4gICAgICAgICAgICAgICAgaW5kLS07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGZpbHRlci5jYXRlZ29yeS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShmaWx0ZXIuY2F0ZWdvcnkuaW5jbHVkZXMoZWwuY2F0ZWdvcnkpKSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWx0ZXIuYnJhbmQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyLmJyYW5kLmluY2x1ZGVzKGVsLmJyYW5kKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsdGVyLnByaWNlLm1pbiAhPT0gLTEgJiYgZWwucHJpY2UgPCBmaWx0ZXIucHJpY2UubWluKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbHRlci5wcmljZS5tYXggIT09IC0xICYmIGVsLnByaWNlID4gZmlsdGVyLnByaWNlLm1heCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmaWx0ZXIuc3RvY2subWluICE9PSAtMSAmJiBlbC5zdG9jayA8IGZpbHRlci5zdG9jay5taW4pIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmlsdGVyLnN0b2NrLm1heCAhPT0gLTEgJiYgZWwuc3RvY2sgPiBmaWx0ZXIuc3RvY2subWF4KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbSgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbHRlci5zdHJpbmdTZWFyY2gubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzVmFsdWVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub25JbmZvcm1hdGl2ZUtleXMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIuc3RyaW5nU2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbHVlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbHVlRm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5zcGxpY2UoaW5kLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaW5kLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHNNZXRhZGF0YSgpO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IG5ldyBQcm9kdWN0cyhkYXRhLnByb2R1Y3RzKTtcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RzO1xuIiwiY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IFtdO1xuICAgICAgICB0aGlzLmJyYW5kID0gW107XG4gICAgICAgIHRoaXMucHJpY2UgPSB7XG4gICAgICAgICAgICBtaW46IC0xLFxuICAgICAgICAgICAgbWF4OiAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdG9jayA9IHtcbiAgICAgICAgICAgIG1pbjogLTEsXG4gICAgICAgICAgICBtYXg6IC0xLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0cmluZ1NlYXJjaCA9ICcnO1xuICAgIH1cbiAgICBzd2l0Y2hDYXRlZ29yeShpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5LmluY2x1ZGVzKGl0ZW0pKVxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnkuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBzd2l0Y2hCcmFuZChpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmJyYW5kLmluY2x1ZGVzKGl0ZW0pKVxuICAgICAgICAgICAgdGhpcy5icmFuZCA9IHRoaXMuYnJhbmQuZmlsdGVyKGVsID0+IGVsICE9PSBpdGVtKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5icmFuZC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBzZXRQcmljZShwYXJhbWV0ZXIsIHZhbHVlKSB7XG4gICAgICAgIGlmIChwYXJhbWV0ZXIgPT09ICdtaW4nKVxuICAgICAgICAgICAgdGhpcy5wcmljZS5taW4gPSB2YWx1ZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wcmljZS5tYXggPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0U3RvY2socGFyYW1ldGVyLCB2YWx1ZSkge1xuICAgICAgICBpZiAocGFyYW1ldGVyID09PSAnbWluJylcbiAgICAgICAgICAgIHRoaXMuc3RvY2subWluID0gdmFsdWU7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuc3RvY2subWF4ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldFN0cmluZ1NlYXJjaCh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5zdHJpbmdTZWFyY2ggPSB2YWx1ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZShjbGFzc05hbWUsIHRleHRDb250ZW50KSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlmICh0ZXh0Q29udGVudClcbiAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9ICcnICsgdGV4dENvbnRlbnQ7XG4gICAgcmV0dXJuIG5vZGU7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0VXJsUGFyYW1ldGVyKGtleSwgcGFyYW0pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRVcmxQYXJhbWV0ZXJzKCk7XG4gICAgcGFyYW1zW2tleV0gPSArcGFyYW07XG4gICAgbGV0IG5ld1BhcmFtcyA9ICcnO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBwYXJhbXMpXG4gICAgICAgIG5ld1BhcmFtcyArPSBgPyR7cHJvcH09JHtwYXJhbXNbcHJvcF19YDtcbiAgICBpZiAobmV3UGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgbmV3UGFyYW1zO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybCk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFVybFBhcmFtZXRlclZhbHVlKGtleSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IGdldFVybFBhcmFtZXRlcnMoKTtcbiAgICByZXR1cm4gcGFyYW1zW2tleV07XG59XG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKCkge1xuICAgIGxldCBjdXJyZW50UGFyYW1zID0gJz8nO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAgIGN1cnJlbnRQYXJhbXMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KCc/Jykuc3BsaWNlKDEpO1xuICAgICAgICBjdXJyZW50UGFyYW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICBwYXJhbXNbZWwuc3BsaXQoJz0nKVswXV0gPSArZWwuc3BsaXQoJz0nKVsxXTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG59XG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgXCJwcm9kdWN0c1wiOiBbXG4gIHtcbiAgXCJpZFwiOiAxLFxuICBcInRpdGxlXCI6IFwiaVBob25lIDlcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFuIGFwcGxlIG1vYmlsZSB3aGljaCBpcyBub3RoaW5nIGxpa2UgYXBwbGVcIixcbiAgXCJwcmljZVwiOiA1NDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLjk2LFxuICBcInJhdGluZ1wiOiA0LjY5LFxuICBcInN0b2NrXCI6IDk0LFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNtYXJ0cGhvbmVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMixcbiAgXCJ0aXRsZVwiOiBcImlQaG9uZSBYXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTSU0tRnJlZSwgTW9kZWwgQTE5MjExIDYuNS1pbmNoIFN1cGVyIFJldGluYSBIRCBkaXNwbGF5IHdpdGggT0xFRCB0ZWNobm9sb2d5IEExMiBCaW9uaWMgY2hpcCB3aXRoIC4uLlwiLFxuICBcInByaWNlXCI6IDg5OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuOTQsXG4gIFwicmF0aW5nXCI6IDQuNDQsXG4gIFwic3RvY2tcIjogMzQsXG4gIFwiYnJhbmRcIjogXCJBcHBsZVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzLFxuICBcInRpdGxlXCI6IFwiU2Ftc3VuZyBVbml2ZXJzZSA5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTYW1zdW5nXFwncyBuZXcgdmFyaWFudCB3aGljaCBnb2VzIGJleW9uZCBHYWxheHkgdG8gdGhlIFVuaXZlcnNlXCIsXG4gIFwicHJpY2VcIjogMTI0OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNDYsXG4gIFwicmF0aW5nXCI6IDQuMDksXG4gIFwic3RvY2tcIjogMzYsXG4gIFwiYnJhbmRcIjogXCJTYW1zdW5nXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzbWFydHBob25lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMvMS5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0LFxuICBcInRpdGxlXCI6IFwiT1BQT0YxOVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT1BQTyBGMTkgaXMgb2ZmaWNpYWxseSBhbm5vdW5jZWQgb24gQXByaWwgMjAyMS5cIixcbiAgXCJwcmljZVwiOiAyODAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjkxLFxuICBcInJhdGluZ1wiOiA0LjMsXG4gIFwic3RvY2tcIjogMTIzLFxuICBcImJyYW5kXCI6IFwiT1BQT1wiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1LFxuICBcInRpdGxlXCI6IFwiSHVhd2VpIFAzMFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiSHVhd2Vp4oCZcyByZS1iYWRnZWQgUDMwIFBybyBOZXcgRWRpdGlvbiB3YXMgb2ZmaWNpYWxseSB1bnZlaWxlZCB5ZXN0ZXJkYXkgaW4gR2VybWFueSBhbmQgbm93IHRoZSBkZXZpY2UgaGFzIG1hZGUgaXRzIHdheSB0byB0aGUgVUsuXCIsXG4gIFwicHJpY2VcIjogNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC41OCxcbiAgXCJyYXRpbmdcIjogNC4wOSxcbiAgXCJzdG9ja1wiOiAzMixcbiAgXCJicmFuZFwiOiBcIkh1YXdlaVwiLFxuICBcImNhdGVnb3J5XCI6IFwic21hcnRwaG9uZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81LzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNixcbiAgXCJ0aXRsZVwiOiBcIk1hY0Jvb2sgUHJvXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYWNCb29rIFBybyAyMDIxIHdpdGggbWluaS1MRUQgZGlzcGxheSBtYXkgbGF1bmNoIGJldHdlZW4gU2VwdGVtYmVyLCBOb3ZlbWJlclwiLFxuICBcInByaWNlXCI6IDE3NDksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjAyLFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDgzLFxuICBcImJyYW5kXCI6IFwiQXBwbGVcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYvdGh1bWJuYWlsLnBuZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82LzQuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNyxcbiAgXCJ0aXRsZVwiOiBcIlNhbXN1bmcgR2FsYXh5IEJvb2tcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlNhbXN1bmcgR2FsYXh5IEJvb2sgUyAoMjAyMCkgTGFwdG9wIFdpdGggSW50ZWwgTGFrZWZpZWxkIENoaXAsIDhHQiBvZiBSQU0gTGF1bmNoZWRcIixcbiAgXCJwcmljZVwiOiAxNDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjE1LFxuICBcInJhdGluZ1wiOiA0LjI1LFxuICBcInN0b2NrXCI6IDUwLFxuICBcImJyYW5kXCI6IFwiU2Ftc3VuZ1wiLFxuICBcImNhdGVnb3J5XCI6IFwibGFwdG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNy90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgsXG4gIFwidGl0bGVcIjogXCJNaWNyb3NvZnQgU3VyZmFjZSBMYXB0b3AgNFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3R5bGUgYW5kIHNwZWVkLiBTdGFuZCBvdXQgb24gSEQgdmlkZW8gY2FsbHMgYmFja2VkIGJ5IFN0dWRpbyBNaWNzLiBDYXB0dXJlIGlkZWFzIG9uIHRoZSB2aWJyYW50IHRvdWNoc2NyZWVuLlwiLFxuICBcInByaWNlXCI6IDE0OTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjIzLFxuICBcInJhdGluZ1wiOiA0LjQzLFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiTWljcm9zb2Z0IFN1cmZhY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5LFxuICBcInRpdGxlXCI6IFwiSW5maW5peCBJTkJPT0tcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkluZmluaXggSW5ib29rIFgxIENpMyAxMHRoIDhHQiAyNTZHQiAxNCBXaW4xMCBHcmV5IOKAkyAxIFllYXIgV2FycmFudHlcIixcbiAgXCJwcmljZVwiOiAxMDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS44MyxcbiAgXCJyYXRpbmdcIjogNC41NCxcbiAgXCJzdG9ja1wiOiA5NixcbiAgXCJicmFuZFwiOiBcIkluZmluaXhcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMCxcbiAgXCJ0aXRsZVwiOiBcIkhQIFBhdmlsaW9uIDE1LURLMTA1NldNXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJIUCBQYXZpbGlvbiAxNS1ESzEwNTZXTSBHYW1pbmcgTGFwdG9wIDEwdGggR2VuIENvcmUgaTUsIDhHQiwgMjU2R0IgU1NELCBHVFggMTY1MCA0R0IsIFdpbmRvd3MgMTBcIixcbiAgXCJwcmljZVwiOiAxMDk5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA2LjE4LFxuICBcInJhdGluZ1wiOiA0LjQzLFxuICBcInN0b2NrXCI6IDg5LFxuICBcImJyYW5kXCI6IFwiSFAgUGF2aWxpb25cIixcbiAgXCJjYXRlZ29yeVwiOiBcImxhcHRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwL3RodW1ibmFpbC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTEsXG4gIFwidGl0bGVcIjogXCJwZXJmdW1lIE9pbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVnYSBEaXNjb3VudCwgSW1wcmVzc2lvbiBvZiBBY3F1YSBEaSBHaW8gYnkgR2lvcmdpb0FybWFuaSBjb25jZW50cmF0ZWQgYXR0YXIgcGVyZnVtZSBPaWxcIixcbiAgXCJwcmljZVwiOiAxMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC40LFxuICBcInJhdGluZ1wiOiA0LjI2LFxuICBcInN0b2NrXCI6IDY1LFxuICBcImJyYW5kXCI6IFwiSW1wcmVzc2lvbiBvZiBBY3F1YSBEaSBHaW9cIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzExLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEyLFxuICBcInRpdGxlXCI6IFwiQnJvd24gUGVyZnVtZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUm95YWxfTWlyYWdlIFNwb3J0IEJyb3duIFBlcmZ1bWUgZm9yIE1lbiAmIFdvbWVuIC0gMTIwbWxcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNjYsXG4gIFwicmF0aW5nXCI6IDQsXG4gIFwic3RvY2tcIjogNTIsXG4gIFwiYnJhbmRcIjogXCJSb3lhbF9NaXJhZ2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMi8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTIvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEyL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxMyxcbiAgXCJ0aXRsZVwiOiBcIkZvZyBTY2VudCBYcHJlc3NpbyBQZXJmdW1lXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IGRldGFpbHMgb2YgQmVzdCBGb2cgU2NlbnQgWHByZXNzaW8gUGVyZnVtZSAxMDBtbCBGb3IgTWVuIGNvb2wgbG9uZyBsYXN0aW5nIHBlcmZ1bWVzIGZvciBNZW5cIixcbiAgXCJwcmljZVwiOiAxMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4xNCxcbiAgXCJyYXRpbmdcIjogNC41OSxcbiAgXCJzdG9ja1wiOiA2MSxcbiAgXCJicmFuZFwiOiBcIkZvZyBTY2VudCBYcHJlc3Npb1wiLFxuICBcImNhdGVnb3J5XCI6IFwiZnJhZ3JhbmNlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEzL3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTQsXG4gIFwidGl0bGVcIjogXCJOb24tQWxjb2hvbGljIENvbmNlbnRyYXRlZCBQZXJmdW1lIE9pbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT3JpZ2luYWwgQWwgTXVuYWtowq4gYnkgTWFoYWwgQWwgTXVzayB8IE91ciBJbXByZXNzaW9uIG9mIENsaW1hdGUgfCA2bWwgTm9uLUFsY29ob2xpYyBDb25jZW50cmF0ZWQgUGVyZnVtZSBPaWxcIixcbiAgXCJwcmljZVwiOiAxMjAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjYsXG4gIFwicmF0aW5nXCI6IDQuMjEsXG4gIFwic3RvY2tcIjogMTE0LFxuICBcImJyYW5kXCI6IFwiQWwgTXVuYWtoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmcmFncmFuY2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNSxcbiAgXCJ0aXRsZVwiOiBcIkVhdSBEZSBQZXJmdW1lIFNwcmF5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHZW51aW5lICBBbC1SZWhhYiBzcHJheSBwZXJmdW1lIGZyb20gVUFFL1NhdWRpIEFyYWJpYS9ZZW1lbiBIaWdoIFF1YWxpdHlcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTksXG4gIFwicmF0aW5nXCI6IDQuNyxcbiAgXCJzdG9ja1wiOiAxMDUsXG4gIFwiYnJhbmRcIjogXCJMb3JkIC0gQWwtUmVoYWJcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZyYWdyYW5jZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAxNixcbiAgXCJ0aXRsZVwiOiBcIkh5YWx1cm9uaWMgQWNpZCBTZXJ1bVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTFxcJ09yw4PCqWFsIFBhcmlzIGludHJvZHVjZXMgSHlhbHVyb24gRXhwZXJ0IFJlcGx1bXBpbmcgU2VydW0gZm9ybXVsYXRlZCB3aXRoIDEuNSUgSHlhbHVyb25pYyBBY2lkXCIsXG4gIFwicHJpY2VcIjogMTksXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjMxLFxuICBcInJhdGluZ1wiOiA0LjgzLFxuICBcInN0b2NrXCI6IDExMCxcbiAgXCJicmFuZFwiOiBcIkxcXCdPcmVhbCBQYXJpc1wiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTcsXG4gIFwidGl0bGVcIjogXCJUcmVlIE9pbCAzMG1sXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUZWEgdHJlZSBvaWwgY29udGFpbnMgYSBudW1iZXIgb2YgY29tcG91bmRzLCBpbmNsdWRpbmcgdGVycGluZW4tNC1vbCwgdGhhdCBoYXZlIGJlZW4gc2hvd24gdG8ga2lsbCBjZXJ0YWluIGJhY3RlcmlhLFwiLFxuICBcInByaWNlXCI6IDEyLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA0LjA5LFxuICBcInJhdGluZ1wiOiA0LjUyLFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiSGVtYW5pIFRlYVwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDE4LFxuICBcInRpdGxlXCI6IFwiT2lsIEZyZWUgTW9pc3R1cml6ZXIgMTAwbWxcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRlcm1pdmUgT2lsIEZyZWUgTW9pc3R1cml6ZXIgd2l0aCBTUEYgMjAgaXMgc3BlY2lmaWNhbGx5IGZvcm11bGF0ZWQgd2l0aCBjZXJhbWlkZXMsIGh5YWx1cm9uaWMgYWNpZCAmIHN1bnNjcmVlbi5cIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMSxcbiAgXCJyYXRpbmdcIjogNC41NixcbiAgXCJzdG9ja1wiOiA4OCxcbiAgXCJicmFuZFwiOiBcIkRlcm1pdmVcIixcbiAgXCJjYXRlZ29yeVwiOiBcInNraW5jYXJlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMTksXG4gIFwidGl0bGVcIjogXCJTa2luIEJlYXV0eSBTZXJ1bS5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlByb2R1Y3QgbmFtZTogcm9yZWMgY29sbGFnZW4gaHlhbHVyb25pYyBhY2lkIHdoaXRlIGZhY2Ugc2VydW0gcmljZU5ldCB3ZWlnaHQ6IDE1IG1cIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuNjgsXG4gIFwicmF0aW5nXCI6IDQuNDIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJST1JFQyBXaGl0ZSBSaWNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJza2luY2FyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzE5LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xOS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjAsXG4gIFwidGl0bGVcIjogXCJGcmVja2xlIFRyZWF0bWVudCBDcmVhbS0gMTVnbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFpciAmIENsZWFyIGlzIFBha2lzdGFuXFwncyBvbmx5IHB1cmUgRnJlY2tsZSBjcmVhbSB3aGljaCBoZWxwc2ZhZGUgRnJlY2tsZXMsIERhcmtzcG90cyBhbmQgcGlnbWVudHMuIE1lcmN1cnkgbGV2ZWwgaXMgMCUsIHNvIHRoZXJlIGFyZSBubyBzaWRlIGVmZmVjdHMuXCIsXG4gIFwicHJpY2VcIjogNzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk5LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDE0MCxcbiAgXCJicmFuZFwiOiBcIkZhaXIgJiBDbGVhclwiLFxuICBcImNhdGVnb3J5XCI6IFwic2tpbmNhcmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjAvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyMSxcbiAgXCJ0aXRsZVwiOiBcIi0gRGFhbCBNYXNvb3IgNTAwIGdyYW1zXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGaW5lIHF1YWxpdHkgQnJhbmRlZCBQcm9kdWN0IEtlZXAgaW4gYSBjb29sIGFuZCBkcnkgcGxhY2VcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNC44MSxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiAxMzMsXG4gIFwiYnJhbmRcIjogXCJTYWFmICYgS2hhYXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvdGh1bWJuYWlsLnBuZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIxLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjIsXG4gIFwidGl0bGVcIjogXCJFbGJvdyBNYWNhcm9uaSAtIDQwMCBnbVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEJha2UgUGFybG9yIEJpZyBFbGJvdyBNYWNhcm9uaSAtIDQwMCBnbVwiLFxuICBcInByaWNlXCI6IDE0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS41OCxcbiAgXCJyYXRpbmdcIjogNC41NyxcbiAgXCJzdG9ja1wiOiAxNDYsXG4gIFwiYnJhbmRcIjogXCJCYWtlIFBhcmxvciBCaWdcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIyLzMuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjMsXG4gIFwidGl0bGVcIjogXCJPcmFuZ2UgRXNzZW5jZSBGb29kIEZsYXZvdVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWNhdGlvbnMgb2YgT3JhbmdlIEVzc2VuY2UgRm9vZCBGbGF2b3VyIEZvciBDYWtlcyBhbmQgQmFraW5nIEZvb2QgSXRlbVwiLFxuICBcInByaWNlXCI6IDE0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA4LjA0LFxuICBcInJhdGluZ1wiOiA0Ljg1LFxuICBcInN0b2NrXCI6IDI2LFxuICBcImJyYW5kXCI6IFwiQmFraW5nIEZvb2QgSXRlbXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzIzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yMy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI0LFxuICBcInRpdGxlXCI6IFwiY2VyZWFscyBtdWVzbGkgZnJ1aXQgbnV0c1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwib3JpZ2luYWwgZmF1amkgY2VyZWFsIG11ZXNsaSAyNTBnbSBib3ggcGFjayBvcmlnaW5hbCBmYXVqaSBjZXJlYWxzIG11ZXNsaSBmcnVpdCBudXRzIGZsYWtlcyBicmVha2Zhc3QgY2VyZWFsIGJyZWFrIGZhc3QgZmF1amljZXJlYWxzIGNlcmVscyBjZXJlbCBmb2ppIGZvdWppXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LjgsXG4gIFwicmF0aW5nXCI6IDQuOTQsXG4gIFwic3RvY2tcIjogMTEzLFxuICBcImJyYW5kXCI6IFwiZmF1amlcIixcbiAgXCJjYXRlZ29yeVwiOiBcImdyb2Nlcmllc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI1LFxuICBcInRpdGxlXCI6IFwiR3VsYWIgUG93ZGVyIDUwIEdyYW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkRyeSBSb3NlIEZsb3dlciBQb3dkZXIgR3VsYWIgUG93ZGVyIDUwIEdyYW0g4oCiIFRyZWF0cyBXb3VuZHNcIixcbiAgXCJwcmljZVwiOiA3MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuNTgsXG4gIFwicmF0aW5nXCI6IDQuODcsXG4gIFwic3RvY2tcIjogNDcsXG4gIFwiYnJhbmRcIjogXCJEcnkgUm9zZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiZ3JvY2VyaWVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzEucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjUvMy5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjYsXG4gIFwidGl0bGVcIjogXCJQbGFudCBIYW5nZXIgRm9yIEhvbWVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJvaG8gRGVjb3IgUGxhbnQgSGFuZ2VyIEZvciBIb21lIFdhbGwgRGVjb3JhdGlvbiBNYWNyYW1lIFdhbGwgSGFuZ2luZyBTaGVsZlwiLFxuICBcInByaWNlXCI6IDQxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy44NixcbiAgXCJyYXRpbmdcIjogNC4wOCxcbiAgXCJzdG9ja1wiOiAxMzEsXG4gIFwiYnJhbmRcIjogXCJCb2hvIERlY29yXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJob21lLWRlY29yYXRpb25cIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI2LzUuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMjcsXG4gIFwidGl0bGVcIjogXCJGbHlpbmcgV29vZGVuIEJpcmRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhY2thZ2UgSW5jbHVkZSA2IEJpcmRzIHdpdGggQWRoZXNpdmUgVGFwZSBTaGFwZTogM0QgU2hhcGVkIFdvb2RlbiBCaXJkcyBNYXRlcmlhbDogV29vZGVuIE1ERiwgTGFtaW5hdGVkIDMuNW1tXCIsXG4gIFwicHJpY2VcIjogNTEsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU4LFxuICBcInJhdGluZ1wiOiA0LjQxLFxuICBcInN0b2NrXCI6IDE3LFxuICBcImJyYW5kXCI6IFwiRmx5aW5nIFdvb2RlblwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yNy80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjcvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAyOCxcbiAgXCJ0aXRsZVwiOiBcIjNEIEVtYmVsbGlzaG1lbnQgQXJ0IExhbXBcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjNEIGxlZCBsYW1wIHN0aWNrZXIgV2FsbCBzdGlja2VyIDNkIHdhbGwgYXJ0IGxpZ2h0IG9uL29mZiBidXR0b24gIGNlbGwgb3BlcmF0ZWQgKGluY2x1ZGVkKVwiLFxuICBcInByaWNlXCI6IDIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi40OSxcbiAgXCJyYXRpbmdcIjogNC44MixcbiAgXCJzdG9ja1wiOiA1NCxcbiAgXCJicmFuZFwiOiBcIkxFRCBMaWdodHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI4LzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDI5LFxuICBcInRpdGxlXCI6IFwiSGFuZGNyYWZ0IENoaW5lc2Ugc3R5bGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhhbmRjcmFmdCBDaGluZXNlIHN0eWxlIGFydCBsdXh1cnkgcGFsYWNlIGhvdGVsIHZpbGxhIG1hbnNpb24gaG9tZSBkZWNvciBjZXJhbWljIHZhc2Ugd2l0aCBicmFzcyBmcnVpdCBwbGF0ZVwiLFxuICBcInByaWNlXCI6IDYwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4zNCxcbiAgXCJyYXRpbmdcIjogNC40NCxcbiAgXCJzdG9ja1wiOiA3LFxuICBcImJyYW5kXCI6IFwibHV4dXJ5IHBhbGFjZVwiLFxuICBcImNhdGVnb3J5XCI6IFwiaG9tZS1kZWNvcmF0aW9uXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS90aHVtYm5haWwud2VicFwiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzI5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMjkvNC53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8yOS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMwLFxuICBcInRpdGxlXCI6IFwiS2V5IEhvbGRlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQXR0cmFjdGl2ZSBEZXNpZ25NZXRhbGxpYyBtYXRlcmlhbEZvdXIga2V5IGhvb2tzUmVsaWFibGUgJiBEdXJhYmxlUHJlbWl1bSBRdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuOTIsXG4gIFwicmF0aW5nXCI6IDQuOTIsXG4gIFwic3RvY2tcIjogNTQsXG4gIFwiYnJhbmRcIjogXCJHb2xkZW5cIixcbiAgXCJjYXRlZ29yeVwiOiBcImhvbWUtZGVjb3JhdGlvblwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogMzEsXG4gIFwidGl0bGVcIjogXCJNb3JuYWRpIFZlbHZldCBCZWRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk1vcm5hZGkgVmVsdmV0IEJlZCBCYXNlIHdpdGggSGVhZGJvYXJkIFNsYXRzIFN1cHBvcnQgQ2xhc3NpYyBTdHlsZSBCZWRyb29tIEZ1cm5pdHVyZSBCZWQgU2V0XCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LFxuICBcInJhdGluZ1wiOiA0LjE2LFxuICBcInN0b2NrXCI6IDE0MCxcbiAgXCJicmFuZFwiOiBcIkZ1cm5pdHVyZSBCZWQgU2V0XCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzEvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzMixcbiAgXCJ0aXRsZVwiOiBcIlNvZmEgZm9yIENvZmZlIENhZmVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJhdHR0YW4gT3V0ZG9vciBmdXJuaXR1cmUgU2V0IFdhdGVycHJvb2YgIFJhdHRhbiBTb2ZhIGZvciBDb2ZmZSBDYWZlXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE1LjU5LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDMwLFxuICBcImJyYW5kXCI6IFwiUmF0dHRhbiBPdXRkb29yXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMyLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMi8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDMzLFxuICBcInRpdGxlXCI6IFwiMyBUaWVyIENvcm5lciBTaGVsdmVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCIzIFRpZXIgQ29ybmVyIFNoZWx2ZXMgfCAzIFBDcyBXYWxsIE1vdW50IEtpdGNoZW4gU2hlbGYgfCBGbG9hdGluZyBCZWRyb29tIFNoZWxmXCIsXG4gIFwicHJpY2VcIjogNzAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNyxcbiAgXCJyYXRpbmdcIjogNC4zMSxcbiAgXCJzdG9ja1wiOiAxMDYsXG4gIFwiYnJhbmRcIjogXCJLaXRjaGVuIFNoZWxmXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zMy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzMzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNCxcbiAgXCJ0aXRsZVwiOiBcIlBsYXN0aWMgVGFibGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlbvu79lcnkgZ29vZCBxdWFsaXR5IHBsYXN0aWMgdGFibGUgZm9yIG11bHRpIHB1cnBvc2Ugbm93IGluIHJlYXNvbmFibGUgcHJpY2VcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNCxcbiAgXCJyYXRpbmdcIjogNC4wMSxcbiAgXCJzdG9ja1wiOiAxMzYsXG4gIFwiYnJhbmRcIjogXCJNdWx0aSBQdXJwb3NlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJmdXJuaXR1cmVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNSxcbiAgXCJ0aXRsZVwiOiBcIjMgRE9PUiBQT1JUQUJMRVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWF0ZXJpYWw6IFN0YWlubGVzcyBTdGVlbCBhbmQgRmFicmljICBJdGVtIFNpemU6IDExMCBjbSB4IDQ1IGNtIHggMTc1IGNtIFBhY2thZ2UgQ29udGVudHM6IDEgU3RvcmFnZSBXYXJkcm9iZVwiLFxuICBcInByaWNlXCI6IDQxLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3Ljk4LFxuICBcInJhdGluZ1wiOiA0LjA2LFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiQW1uYU1hcnRcIixcbiAgXCJjYXRlZ29yeVwiOiBcImZ1cm5pdHVyZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDM2LFxuICBcInRpdGxlXCI6IFwiU2xlZXZlIFNoaXJ0IFdvbWVuc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ290dG9uIFNvbGlkIENvbG9yIFByb2Zlc3Npb25hbCBXZWFyIFNsZWV2ZSBTaGlydCBXb21lbnMgV29yayBCbG91c2VzIFdob2xlc2FsZSBDbG90aGluZyBDYXN1YWwgUGxhaW4gQ3VzdG9tIFRvcCBPRU0gQ3VzdG9taXplZFwiLFxuICBcInByaWNlXCI6IDkwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44OSxcbiAgXCJyYXRpbmdcIjogNC4yNixcbiAgXCJzdG9ja1wiOiAzOSxcbiAgXCJicmFuZFwiOiBcIlByb2Zlc3Npb25hbCBXZWFyXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ0b3BzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNi8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzNyxcbiAgXCJ0aXRsZVwiOiBcImFuayBUb3BzIGZvciBXb21lbnMvR2lybHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBBQ0sgT0YgMyBDQU1JU09MRVMgLFZFUlkgQ09NRk9SVEFCTEUgU09GVCBDT1RUT04gU1RVRkYsIENPTUZPUlRBQkxFIElOIEFMTCBGT1VSIFNFQVNPTlNcIixcbiAgXCJwcmljZVwiOiA1MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuMDUsXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogMTA3LFxuICBcImJyYW5kXCI6IFwiU29mdCBDb3R0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zNy8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzOCxcbiAgXCJ0aXRsZVwiOiBcInN1YmxpbWF0aW9uIHBsYWluIGtpZHMgdGFua1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwic3VibGltYXRpb24gcGxhaW4ga2lkcyB0YW5rIHRvcHMgd2hvbGVzYWxlXCIsXG4gIFwicHJpY2VcIjogMTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4xMixcbiAgXCJyYXRpbmdcIjogNC44LFxuICBcInN0b2NrXCI6IDIwLFxuICBcImJyYW5kXCI6IFwiU29mdCBDb3R0b25cIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvMS5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM4LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzgvNC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiAzOSxcbiAgXCJ0aXRsZVwiOiBcIldvbWVuIFN3ZWF0ZXJzIFdvb2xcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjEgQ3VzdG9tIFdpbnRlciBGYWxsIFplYnJhIEtuaXQgQ3JvcCBUb3AgV29tZW4gU3dlYXRlcnMgV29vbCBNb2hhaXIgQ29zIEN1c3RvbWl6ZSBDcmV3IE5lY2sgV29tZW5cXCcgUyBDcm9wIFRvcCBTd2VhdGVyXCIsXG4gIFwicHJpY2VcIjogNjAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy4yLFxuICBcInJhdGluZ1wiOiA0LjU1LFxuICBcInN0b2NrXCI6IDU1LFxuICBcImJyYW5kXCI6IFwiVG9wIFN3ZWF0ZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcInRvcHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8zOS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMzkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzM5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MCxcbiAgXCJ0aXRsZVwiOiBcIndvbWVuIHdpbnRlciBjbG90aGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJ3b21lbiB3aW50ZXIgY2xvdGhlcyB0aGljayBmbGVlY2UgaG9vZGllIHRvcCB3aXRoIHN3ZWF0IHBhbnRqb2dnZXIgd29tZW4gc3dlYXRzdWl0IHNldCBqb2dnZXJzIHBhbnRzIHR3byBwaWVjZSBwYW50cyBzZXRcIixcbiAgXCJwcmljZVwiOiA1NyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTMuMzksXG4gIFwicmF0aW5nXCI6IDQuOTEsXG4gIFwic3RvY2tcIjogODQsXG4gIFwiYnJhbmRcIjogXCJUb3AgU3dlYXRlclwiLFxuICBcImNhdGVnb3J5XCI6IFwidG9wc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDAvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0MSxcbiAgXCJ0aXRsZVwiOiBcIk5JR0hUIFNVSVRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIk5JR0hUIFNVSVQgUkVEIE1JQ0tZIE1PVVNFLi4gIEZvciBHaXJscy4gRmFudGFzdGljIFN1aXRzLlwiLFxuICBcInByaWNlXCI6IDU1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS4wNSxcbiAgXCJyYXRpbmdcIjogNC42NSxcbiAgXCJzdG9ja1wiOiAyMSxcbiAgXCJicmFuZFwiOiBcIlJFRCBNSUNLWSBNT1VTRS4uXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80MS90aHVtYm5haWwud2VicFwiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQyLFxuICBcInRpdGxlXCI6IFwiU3RpY2hlZCBLdXJ0YSBwbHVzIHRyb3VzZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZBQlJJQzogTElMRUlOIENIRVNUOiAyMSBMRU5HSFQ6IDM3IFRST1VTRVI6ICgzOCkgOkFSQUJJQyBMSUxFSU5cIixcbiAgXCJwcmljZVwiOiA4MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuMzcsXG4gIFwicmF0aW5nXCI6IDQuMDUsXG4gIFwic3RvY2tcIjogMTQ4LFxuICBcImJyYW5kXCI6IFwiRGlnaXRhbCBQcmludGVkXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQyLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQzLFxuICBcInRpdGxlXCI6IFwiZnJvY2sgZ29sZCBwcmludGVkXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJHaGF6aSBmYWJyaWMgbG9uZyBmcm9jayBnb2xkIHByaW50ZWQgcmVhZHkgdG8gd2VhciBzdGl0Y2hlZCBjb2xsZWN0aW9uIChHOTkyKVwiLFxuICBcInByaWNlXCI6IDYwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuNTUsXG4gIFwicmF0aW5nXCI6IDQuMzEsXG4gIFwic3RvY2tcIjogMTUwLFxuICBcImJyYW5kXCI6IFwiR2hhemkgRmFicmljXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtZHJlc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQzLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80My80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDMvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ0LFxuICBcInRpdGxlXCI6IFwiTGFkaWVzIE11bHRpY29sb3JlZCBEcmVzc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyBjbGFzc3kgc2hpcnQgZm9yIHdvbWVuIGdpdmVzIHlvdSBhIGdvcmdlb3VzIGxvb2sgb24gZXZlcnlkYXkgd2VhciBhbmQgc3BlY2lhbGx5IGZvciBzZW1pLWNhc3VhbCB3ZWFycy5cIixcbiAgXCJwcmljZVwiOiA3OSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuODgsXG4gIFwicmF0aW5nXCI6IDQuMDMsXG4gIFwic3RvY2tcIjogMixcbiAgXCJicmFuZFwiOiBcIkdoYXppIEZhYnJpY1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA0NSxcbiAgXCJ0aXRsZVwiOiBcIk1hbGFpIE1heGkgRHJlc3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlJlYWR5IHRvIHdlYXIsIFVuaXF1ZSBkZXNpZ24gYWNjb3JkaW5nIHRvIG1vZGVybiBzdGFuZGFyZCBmYXNoaW9uLCBCZXN0IGZpdHRpbmcgLEltcG9ydGVkIHN0dWZmXCIsXG4gIFwicHJpY2VcIjogNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDUuMDcsXG4gIFwicmF0aW5nXCI6IDQuNjcsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJJRUxHWVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWRyZXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDYsXG4gIFwidGl0bGVcIjogXCJ3b21lblxcJ3Mgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNsb3NlOiBMYWNlLCBTdHlsZSB3aXRoIGJvdHRvbTogSW5jcmVhc2VkIGluc2lkZSwgU29sZSBNYXRlcmlhbDogUnViYmVyXCIsXG4gIFwicHJpY2VcIjogNDAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2Ljk2LFxuICBcInJhdGluZ1wiOiA0LjE0LFxuICBcInN0b2NrXCI6IDcyLFxuICBcImJyYW5kXCI6IFwiSUVMR1kgZmFzaGlvblwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzEud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ni80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ3LFxuICBcInRpdGxlXCI6IFwiU25lYWtlciBzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3ludGhldGljIExlYXRoZXIgQ2FzdWFsIFNuZWFrZXIgc2hvZXMgZm9yIFdvbWVuL2dpcmxzIFNuZWFrZXJzIEZvciBXb21lblwiLFxuICBcInByaWNlXCI6IDEyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzcsXG4gIFwicmF0aW5nXCI6IDQuMTksXG4gIFwic3RvY2tcIjogNTAsXG4gIFwiYnJhbmRcIjogXCJTeW50aGV0aWMgTGVhdGhlclwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80Ny90aHVtYm5haWwuanBlZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDQ4LFxuICBcInRpdGxlXCI6IFwiV29tZW4gU3RyaXAgSGVlbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmVhdHVyZXM6IEZsaXAtZmxvcHMsIE1pZCBIZWVsLCBDb21mb3J0YWJsZSwgU3RyaXBlZCBIZWVsLCBBbnRpc2tpZCwgU3RyaXBlZFwiLFxuICBcInByaWNlXCI6IDQwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC44MyxcbiAgXCJyYXRpbmdcIjogNC4wMixcbiAgXCJzdG9ja1wiOiAyNSxcbiAgXCJicmFuZFwiOiBcIlNhbmRhbHMgRmxpcCBGbG9wc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ4LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNDksXG4gIFwidGl0bGVcIjogXCJDaGFwcGFscyAmIFNob2UgTGFkaWVzIE1ldGFsbGljXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXb21lbnMgQ2hhcHBhbHMgJiBTaG9lIExhZGllcyBNZXRhbGxpYyBUb25nIFRob25nIFNhbmRhbCBGbGF0IFN1bW1lciAyMDIwIE1hYXNhaSBTYW5kYWxzXCIsXG4gIFwicHJpY2VcIjogMjMsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDIuNjIsXG4gIFwicmF0aW5nXCI6IDQuNzIsXG4gIFwic3RvY2tcIjogMTA3LFxuICBcImJyYW5kXCI6IFwiTWFhc2FpIFNhbmRhbHNcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy80OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzQ5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNDkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUwLFxuICBcInRpdGxlXCI6IFwiV29tZW4gU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIjIwMjAgTmV3IEFycml2YWxzIEdlbnVpbmUgTGVhdGhlciBGYXNoaW9uIFRyZW5kIFBsYXRmb3JtIFN1bW1lciBXb21lbiBTaG9lc1wiLFxuICBcInByaWNlXCI6IDM2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi44NyxcbiAgXCJyYXRpbmdcIjogNC4zMyxcbiAgXCJzdG9ja1wiOiA0NixcbiAgXCJicmFuZFwiOiBcIkFycml2YWxzIEdlbnVpbmVcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8xLmpwZWdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUwLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MC8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUxLFxuICBcInRpdGxlXCI6IFwiaGFsZiBzbGVldmVzIFQgc2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNYW55IHN0b3JlIGlzIGNyZWF0aW5nIG5ldyBkZXNpZ25zIGFuZCB0cmVuZCBldmVyeSBtb250aCBhbmQgZXZlcnkgeWVhci4gRGFyYXoucGsgaGF2ZSBhIGJlYXV0aWZ1bCByYW5nZSBvZiBtZW4gZmFzaGlvbiBicmFuZHNcIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuNzYsXG4gIFwicmF0aW5nXCI6IDQuMjYsXG4gIFwic3RvY2tcIjogMTMyLFxuICBcImJyYW5kXCI6IFwiVmludGFnZSBBcHBhcmVsXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTEvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUxLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTIsXG4gIFwidGl0bGVcIjogXCJGUkVFIEZJUkUgVCBTaGlydFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwicXVhbGl0eSBhbmQgcHJvZmVzc2lvbmFsIHByaW50IC0gSXQgZG9lc25cXCd0IGp1c3QgbG9vayBoaWdoIHF1YWxpdHksIGl0IGlzIGhpZ2ggcXVhbGl0eS5cIixcbiAgXCJwcmljZVwiOiAxMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuNzIsXG4gIFwicmF0aW5nXCI6IDQuNTIsXG4gIFwic3RvY2tcIjogMTI4LFxuICBcImJyYW5kXCI6IFwiRlJFRSBGSVJFXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi8xLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvMi5wbmdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTIvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDUzLFxuICBcInRpdGxlXCI6IFwicHJpbnRlZCBoaWdoIHF1YWxpdHkgVCBzaGlydHNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJyYW5kOiB2aW50YWdlIEFwcGFyZWwgLEV4cG9ydCBxdWFsaXR5XCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDcuNTQsXG4gIFwicmF0aW5nXCI6IDQuODksXG4gIFwic3RvY2tcIjogNixcbiAgXCJicmFuZFwiOiBcIlZpbnRhZ2UgQXBwYXJlbFwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTMvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzUzLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNTQsXG4gIFwidGl0bGVcIjogXCJQdWJnIFByaW50ZWQgR3JhcGhpYyBULVNoaXJ0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJQcm9kdWN0IERlc2NyaXB0aW9uIEZlYXR1cmVzOiAxMDAlIFVsdHJhIHNvZnQgUG9seWVzdGVyIEplcnNleS4gVmlicmFudCAmIGNvbG9yZnVsIHByaW50aW5nIG9uIGZyb250LiBGZWVscyBzb2Z0IGFzIGNvdHRvbiB3aXRob3V0IGV2ZXIgY3JhY2tpbmdcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTYuNDQsXG4gIFwicmF0aW5nXCI6IDQuNjIsXG4gIFwic3RvY2tcIjogMTM2LFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaGlydHNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTQvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU0L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NSxcbiAgXCJ0aXRsZVwiOiBcIk1vbmV5IEhlaXN0IFByaW50ZWQgU3VtbWVyIFQgU2hpcnRzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYWJyaWMgSmVyY3ksIFNpemU6IE0gJiBMIFdlYXIgU3R5bGlzaCBEdWFsIFN0aWNoZWRcIixcbiAgXCJwcmljZVwiOiA2NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTUuOTcsXG4gIFwicmF0aW5nXCI6IDQuOSxcbiAgXCJzdG9ja1wiOiAxMjIsXG4gIFwiYnJhbmRcIjogXCJUaGUgV2FyZWhvdXNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNoaXJ0c1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTUvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA1NixcbiAgXCJ0aXRsZVwiOiBcIlNuZWFrZXJzIEpvZ2dlcnMgU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkdlbmRlcjogTWVuICwgQ29sb3JzOiBTYW1lIGFzIERpc3BsYXllZENvbmRpdGlvbjogMTAwJSBCcmFuZCBOZXdcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTIuNTcsXG4gIFwicmF0aW5nXCI6IDQuMzgsXG4gIFwic3RvY2tcIjogNixcbiAgXCJicmFuZFwiOiBcIlNuZWFrZXJzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXNob2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ni81LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU3LFxuICBcInRpdGxlXCI6IFwiTG9hZmVycyBmb3IgbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJNZW4gU2hvZXMgLSBMb2FmZXJzIGZvciBtZW4gLSBSdWJiZXIgU2hvZXMgLSBOeWxvbiBTaG9lcyAtIFNob2VzIGZvciBtZW4gLSBNb2NjYXNzaW9uIC0gUHVyZSBOeWxvbiAoUnViYmVyKSBFeHBvdCBRdWFsaXR5LlwiLFxuICBcInByaWNlXCI6IDQ3LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMC45MSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiAyMCxcbiAgXCJicmFuZFwiOiBcIlJ1YmJlclwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81Ny80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTcvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU4LFxuICBcInRpdGxlXCI6IFwiZm9ybWFsIG9mZmljZXMgc2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhdHRlcm4gVHlwZTogU29saWQsIE1hdGVyaWFsOiBQVSwgVG9lIFNoYXBlOiBQb2ludGVkIFRvZSAsT3V0c29sZSBNYXRlcmlhbDogUnViYmVyXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEyLFxuICBcInJhdGluZ1wiOiA0LjQxLFxuICBcInN0b2NrXCI6IDY4LFxuICBcImJyYW5kXCI6IFwiVGhlIFdhcmVob3VzZVwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDU5LFxuICBcInRpdGxlXCI6IFwiU3ByaW5nIGFuZCBzdW1tZXJzaG9lc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ29tZm9ydGFibGUgc3RyZXRjaCBjbG90aCwgbGlnaHR3ZWlnaHQgYm9keTsgLHJ1YmJlciBzb2xlLCBhbnRpLXNraWQgd2VhcjtcIixcbiAgXCJwcmljZVwiOiAyMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC43MSxcbiAgXCJyYXRpbmdcIjogNC4zMyxcbiAgXCJzdG9ja1wiOiAxMzcsXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzU5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy81OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYwLFxuICBcInRpdGxlXCI6IFwiU3R5bGlzaCBDYXN1YWwgSmVhbnMgU2hvZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhpZ2ggUXVhbGl0eSAsU3R5bGlzaCBkZXNpZ24gLENvbWZvcnRhYmxlIHdlYXIgLEZBc2hpb24gLER1cmFibGVcIixcbiAgXCJwcmljZVwiOiA1OCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNy41NSxcbiAgXCJyYXRpbmdcIjogNC41NSxcbiAgXCJzdG9ja1wiOiAxMjksXG4gIFwiYnJhbmRcIjogXCJTbmVha2Vyc1wiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy1zaG9lc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjEsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIFN0cmFwcyBXcmlzdHdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJTdHlsZTpTcG9ydCAsQ2xhc3A6QnVja2xlcyAsV2F0ZXIgUmVzaXN0YW5jZSBEZXB0aDozQmFyXCIsXG4gIFwicHJpY2VcIjogMTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA3LjE0LFxuICBcInJhdGluZ1wiOiA0LjYzLFxuICBcInN0b2NrXCI6IDkxLFxuICBcImJyYW5kXCI6IFwiTmF2aWZvcmNlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYxLzIucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82MS8zLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDYyLFxuICBcInRpdGxlXCI6IFwiV2F0ZXJwcm9vZiBMZWF0aGVyIEJyYW5kIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXYXRjaCBDcm93biBXaXRoIEVudmlyb25tZW50YWwgSVBTIEJyb256ZSBFbGVjdHJvcGxhdGluZzsgRGlzcGxheSBzeXN0ZW0gb2YgMTIgaG91cnNcIixcbiAgXCJwcmljZVwiOiA0NixcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xNSxcbiAgXCJyYXRpbmdcIjogNC4wNSxcbiAgXCJzdG9ja1wiOiA5NSxcbiAgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjIvMi5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2MyxcbiAgXCJ0aXRsZVwiOiBcIlJveWFsIEJsdWUgUHJlbWl1bSBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWVuIFNpbHZlciBDaGFpbiBSb3lhbCBCbHVlIFByZW1pdW0gV2F0Y2ggTGF0ZXN0IEFuYWxvZyBXYXRjaFwiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAyLjU2LFxuICBcInJhdGluZ1wiOiA0Ljg5LFxuICBcInN0b2NrXCI6IDE0MixcbiAgXCJicmFuZFwiOiBcIlNLTUVJIDkxMTdcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzYzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82My8zLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjMvNC5qcGVnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjQsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIFN0cmFwIFNrZWxldG9uIFdhdGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMZWF0aGVyIFN0cmFwIFNrZWxldG9uIFdhdGNoIGZvciBNZW4gLSBTdHlsaXNoIGFuZCBMYXRlc3QgRGVzaWduXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjIsXG4gIFwicmF0aW5nXCI6IDQuOTgsXG4gIFwic3RvY2tcIjogNjEsXG4gIFwiYnJhbmRcIjogXCJTdHJhcCBTa2VsZXRvblwiLFxuICBcImNhdGVnb3J5XCI6IFwibWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NC90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjUsXG4gIFwidGl0bGVcIjogXCJTdGFpbmxlc3MgU3RlZWwgV3Jpc3QgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxpc2ggV2F0Y2ggRm9yIE1hbiAoTHV4dXJ5KSBDbGFzc3kgTWVuXFwncyBTdGFpbmxlc3MgU3RlZWwgV3Jpc3QgV2F0Y2ggLSBCb3ggUGFja2VkXCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljc5LFxuICBcInJhdGluZ1wiOiA0Ljc5LFxuICBcInN0b2NrXCI6IDk0LFxuICBcImJyYW5kXCI6IFwiU3RhaW5sZXNzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82NS80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY1L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNjYsXG4gIFwidGl0bGVcIjogXCJTdGVlbCBBbmFsb2cgQ291cGxlIFdhdGNoZXNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZWdhbnQgZGVzaWduLCBTdHlsaXNoICxVbmlxdWUgJiBUcmVuZHksQ29tZm9ydGFibGUgd2VhclwiLFxuICBcInByaWNlXCI6IDM1LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjIzLFxuICBcInJhdGluZ1wiOiA0Ljc5LFxuICBcInN0b2NrXCI6IDI0LFxuICBcImJyYW5kXCI6IFwiRWFzdGVybiBXYXRjaGVzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY2LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ni80LkpQR1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjYvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY3LFxuICBcInRpdGxlXCI6IFwiRmFzaGlvbiBNYWduZXRpYyBXcmlzdCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQnV5IHRoaXMgYXdlc29tZSAgVGhlIHByb2R1Y3QgaXMgb3JpZ2luYWxseSBtYW51ZmFjdHVyZWQgYnkgdGhlIGNvbXBhbnkgYW5kIGl0XFwncyBhIHRvcCBzZWxsaW5nIHByb2R1Y3Qgd2l0aCBhIHZlcnkgcmVhc29uYWJsZVwiLFxuICBcInByaWNlXCI6IDYwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNi42OSxcbiAgXCJyYXRpbmdcIjogNC4wMyxcbiAgXCJzdG9ja1wiOiA0NixcbiAgXCJicmFuZFwiOiBcIkVhc3Rlcm4gV2F0Y2hlc1wiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82Ny8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjcvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA2OCxcbiAgXCJ0aXRsZVwiOiBcIlN0eWxpc2ggTHV4dXJ5IERpZ2l0YWwgV2F0Y2hcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlN0eWxpc2ggTHV4dXJ5IERpZ2l0YWwgV2F0Y2ggRm9yIEdpcmxzIC8gV29tZW4gLSBMZWQgU21hcnQgTGFkaWVzIFdhdGNoZXMgRm9yIEdpcmxzXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDkuMDMsXG4gIFwicmF0aW5nXCI6IDQuNTUsXG4gIFwic3RvY2tcIjogNzcsXG4gIFwiYnJhbmRcIjogXCJMdXh1cnkgRGlnaXRhbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLXdhdGNoZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4L3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OC8yLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDY5LFxuICBcInRpdGxlXCI6IFwiR29sZGVuIFdhdGNoIFBlYXJscyBCcmFjZWxldCBXYXRjaFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiUHJvZHVjdCBkZXRhaWxzIG9mIEdvbGRlbiBXYXRjaCBQZWFybHMgQnJhY2VsZXQgV2F0Y2ggRm9yIEdpcmxzIC0gR29sZGVuIENoYWluIExhZGllcyBCcmFjZWxhdGUgV2F0Y2ggZm9yIFdvbWVuXCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3LjU1LFxuICBcInJhdGluZ1wiOiA0Ljc3LFxuICBcInN0b2NrXCI6IDg5LFxuICBcImJyYW5kXCI6IFwiV2F0Y2ggUGVhcmxzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtd2F0Y2hlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy82OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5LzMud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNjkvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzY5L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MCxcbiAgXCJ0aXRsZVwiOiBcIlN0YWlubGVzcyBTdGVlbCBXb21lblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRmFzaGlvbiBTa21laSAxODMwIFNoZWxsIERpYWwgU3RhaW5sZXNzIFN0ZWVsIFdvbWVuIFdyaXN0IFdhdGNoIExhZHkgQnJhY2VsZXQgV2F0Y2ggUXVhcnR6IFdhdGNoZXMgTGFkaWVzXCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguOTgsXG4gIFwicmF0aW5nXCI6IDQuMDgsXG4gIFwic3RvY2tcIjogMTExLFxuICBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy13YXRjaGVzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDcxLFxuICBcInRpdGxlXCI6IFwiV29tZW4gU2hvdWxkZXIgQmFnc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTG91aXNXaWxsIFdvbWVuIFNob3VsZGVyIEJhZ3MgTG9uZyBDbHV0Y2hlcyBDcm9zcyBCb2R5IEJhZ3MgUGhvbmUgQmFncyBQVSBMZWF0aGVyIEhhbmQgQmFncyBMYXJnZSBDYXBhY2l0eSBDYXJkIEhvbGRlcnMgWmlwcGVyIENvaW4gUHVyc2VzIEZhc2hpb24gQ3Jvc3Nib2R5IEJhZ3MgZm9yIEdpcmxzIExhZGllc1wiLFxuICBcInByaWNlXCI6IDQ2LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC42NSxcbiAgXCJyYXRpbmdcIjogNC43MSxcbiAgXCJzdG9ja1wiOiAxNyxcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzEvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83MS8zLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcxL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MixcbiAgXCJ0aXRsZVwiOiBcIkhhbmRiYWcgRm9yIEdpcmxzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIixcbiAgXCJwcmljZVwiOiAyMyxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNSxcbiAgXCJyYXRpbmdcIjogNC45MSxcbiAgXCJzdG9ja1wiOiAyNyxcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyL3RodW1ibmFpbC53ZWJwXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzcyLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi8yLnBuZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvMy53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Mi80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzIvdGh1bWJuYWlsLndlYnBcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA3MyxcbiAgXCJ0aXRsZVwiOiBcIkZhbmN5IGhhbmQgY2x1dGNoXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJUaGlzIGZhc2hpb24gaXMgZGVzaWduZWQgdG8gYWRkIGEgY2hhcm1pbmcgZWZmZWN0IHRvIHlvdXIgY2FzdWFsIG91dGZpdC4gVGhpcyBCYWcgaXMgbWFkZSBvZiBzeW50aGV0aWMgbGVhdGhlci5cIixcbiAgXCJwcmljZVwiOiA0NCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMzksXG4gIFwicmF0aW5nXCI6IDQuMTgsXG4gIFwic3RvY2tcIjogMTAxLFxuICBcImJyYW5kXCI6IFwiQnJhY2VsZXRcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1iYWdzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My8yLndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzczLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83My90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzQsXG4gIFwidGl0bGVcIjogXCJMZWF0aGVyIEhhbmQgQmFnXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJJdCBmZWF0dXJlcyBhbiBhdHRyYWN0aXZlIGRlc2lnbiB0aGF0IG1ha2VzIGl0IGEgbXVzdCBoYXZlIGFjY2Vzc29yeSBpbiB5b3VyIGNvbGxlY3Rpb24uIFdlIHNlbGwgZGlmZmVyZW50IGtpbmQgb2YgYmFncyBmb3IgYm95cywga2lkcywgd29tZW4sIGdpcmxzIGFuZCBhbHNvIGZvciB1bmlzZXguXCIsXG4gIFwicHJpY2VcIjogNTcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjE5LFxuICBcInJhdGluZ1wiOiA0LjAxLFxuICBcInN0b2NrXCI6IDQzLFxuICBcImJyYW5kXCI6IFwiQ29wZW5oYWdlbiBMdXhlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJ3b21lbnMtYmFnc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc0LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc1LFxuICBcInRpdGxlXCI6IFwiU2V2ZW4gUG9ja2V0IFdvbWVuIEJhZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2V2ZW4gUG9ja2V0IFdvbWVuIEJhZyBIYW5kYmFncyBMYWR5IFNob3VsZGVyIENyb3NzYm9keSBCYWcgRmVtYWxlIFB1cnNlIFNldmVuIFBvY2tldCBCYWdcIixcbiAgXCJwcmljZVwiOiA2OCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuODcsXG4gIFwicmF0aW5nXCI6IDQuOTMsXG4gIFwic3RvY2tcIjogMTMsXG4gIFwiYnJhbmRcIjogXCJTdGVhbCBGcmFtZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWJhZ3NcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc1LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83NS8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzUvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc2LFxuICBcInRpdGxlXCI6IFwiU2lsdmVyIFJpbmcgU2V0IFdvbWVuXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJKZXdlbHJ5IFR5cGU6UmluZ3NDZXJ0aWZpY2F0ZSBUeXBlOk5vbmVQbGF0aW5nOlNpbHZlciBQbGF0ZWRTaGFwZWF0dGVybjpub25lU3R5bGU6Q0xBU1NJQ1JlbGlnaW91c1wiLFxuICBcInByaWNlXCI6IDcwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy41NyxcbiAgXCJyYXRpbmdcIjogNC42MSxcbiAgXCJzdG9ja1wiOiA1MSxcbiAgXCJicmFuZFwiOiBcIkRhcm9qYXlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzYvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc2LzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzcsXG4gIFwidGl0bGVcIjogXCJSb3NlIFJpbmdcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJyYW5kOiBUaGUgR3JlZXRpbmdzIEZsb3dlciBDb2xvdXI6IFJlZFJpbmcgQ29sb3VyOiBHb2xkZW5TaXplOiBBZGp1c3RhYmxlXCIsXG4gIFwicHJpY2VcIjogMTAwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAzLjIyLFxuICBcInJhdGluZ1wiOiA0LjIxLFxuICBcInN0b2NrXCI6IDE0OSxcbiAgXCJicmFuZFwiOiBcIkNvcGVuaGFnZW4gTHV4ZVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy83Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogNzgsXG4gIFwidGl0bGVcIjogXCJSaGluZXN0b25lIEtvcmVhbiBTdHlsZSBPcGVuIFJpbmdzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIEpld2VsbGVyeSAzUGNzIEFkanVzdGFibGUgUGVhcmwgUmhpbmVzdG9uZSBLb3JlYW4gU3R5bGUgT3BlbiBSaW5ncyBGb3IgV29tZW5cIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogOC4wMixcbiAgXCJyYXRpbmdcIjogNC42OSxcbiAgXCJzdG9ja1wiOiA5LFxuICBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc4L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDc5LFxuICBcInRpdGxlXCI6IFwiRWxlZ2FudCBGZW1hbGUgUGVhcmwgRWFycmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkVsZWdhbnQgRmVtYWxlIFBlYXJsIEVhcnJpbmdzIFNldCBaaXJjb24gUGVhcmwgRWFyaW5ncyBXb21lbiBQYXJ0eSBBY2Nlc3NvcmllcyA5IFBhaXJzL1NldFwiLFxuICBcInByaWNlXCI6IDMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMi44LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDE2LFxuICBcImJyYW5kXCI6IFwiRmFzaGlvbiBKZXdlbGxlcnlcIixcbiAgXCJjYXRlZ29yeVwiOiBcIndvbWVucy1qZXdlbGxlcnlcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzc5L3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvNzkvMS5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4MCxcbiAgXCJ0aXRsZVwiOiBcIkNoYWluIFBpbiBUYXNzZWwgRWFycmluZ3NcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlBhaXIgT2YgRWFyIEN1ZmYgQnV0dGVyZmx5IExvbmcgQ2hhaW4gUGluIFRhc3NlbCBFYXJyaW5ncyAtIFNpbHZlciAoIExvbmcgTGlmZSBRdWFsaXR5IFByb2R1Y3QpXCIsXG4gIFwicHJpY2VcIjogNDUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE3Ljc1LFxuICBcInJhdGluZ1wiOiA0LjU5LFxuICBcInN0b2NrXCI6IDksXG4gIFwiYnJhbmRcIjogXCJDdWZmIEJ1dHRlcmZseVwiLFxuICBcImNhdGVnb3J5XCI6IFwid29tZW5zLWpld2VsbGVyeVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgwLzMucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgxLFxuICBcInRpdGxlXCI6IFwiUm91bmQgU2lsdmVyIEZyYW1lIFN1biBHbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBIHBhaXIgb2Ygc3VuZ2xhc3NlcyBjYW4gcHJvdGVjdCB5b3VyIGV5ZXMgZnJvbSBiZWluZyBodXJ0LiBGb3IgY2FyIGRyaXZpbmcsIHZhY2F0aW9uIHRyYXZlbCwgb3V0ZG9vciBhY3Rpdml0aWVzLCBzb2NpYWwgZ2F0aGVyaW5ncyxcIixcbiAgXCJwcmljZVwiOiAxOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuMSxcbiAgXCJyYXRpbmdcIjogNC45NCxcbiAgXCJzdG9ja1wiOiA3OCxcbiAgXCJicmFuZFwiOiBcIkRlc2lnbmVyIFN1biBHbGFzc2VzXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgxLzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODEvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDgyLFxuICBcInRpdGxlXCI6IFwiS2FiaXIgU2luZ2ggU3F1YXJlIFN1bmdsYXNzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJPcmlnbmFsIE1ldGFsIEthYmlyIFNpbmdoIGRlc2lnbiAyMDIwIFN1bmdsYXNzZXMgTWVuIEJyYW5kIERlc2lnbmVyIFN1biBHbGFzc2VzIEthYmlyIFNpbmdoIFNxdWFyZSBTdW5nbGFzc1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNS42LFxuICBcInJhdGluZ1wiOiA0LjYyLFxuICBcInN0b2NrXCI6IDc4LFxuICBcImJyYW5kXCI6IFwiRGVzaWduZXIgU3VuIEdsYXNzZXNcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzIud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODIvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgyLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Mi90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODMsXG4gIFwidGl0bGVcIjogXCJXaWxleSBYIE5pZ2h0IFZpc2lvbiBZZWxsb3cgR2xhc3Nlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiV2lsZXkgWCBOaWdodCBWaXNpb24gWWVsbG93IEdsYXNzZXMgZm9yIFJpZGVycyAtIE5pZ2h0IFZpc2lvbiBBbnRpIEZvZyBEcml2aW5nIEdsYXNzZXMgLSBGcmVlIE5pZ2h0IEdsYXNzIENvdmVyIC0gU2hpZWxkIEV5ZXMgRnJvbSBEdXN0IGFuZCBWaXJ1cy0gRm9yIE5pZ2h0IFNwb3J0IE1hdGNoZXNcIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogNi4zMyxcbiAgXCJyYXRpbmdcIjogNC45NyxcbiAgXCJzdG9ja1wiOiAxMTUsXG4gIFwiYnJhbmRcIjogXCJtYXN0YXIgd2F0Y2hcIixcbiAgXCJjYXRlZ29yeVwiOiBcInN1bmdsYXNzZXNcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzgzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NCxcbiAgXCJ0aXRsZVwiOiBcIlNxdWFyZSBTdW5nbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJGYXNoaW9uIE92ZXJzaXplZCBTcXVhcmUgU3VuZ2xhc3NlcyBSZXRybyBHcmFkaWVudCBCaWcgRnJhbWUgU3VuZ2xhc3NlcyBGb3IgV29tZW4gT25lIFBpZWNlIEdhZmFzIFNoYWRlIE1pcnJvciBDbGVhciBMZW5zIDE3MDU5XCIsXG4gIFwicHJpY2VcIjogMjgsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEzLjg5LFxuICBcInJhdGluZ1wiOiA0LjY0LFxuICBcInN0b2NrXCI6IDY0LFxuICBcImJyYW5kXCI6IFwibWFzdGFyIHdhdGNoXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJzdW5nbGFzc2VzXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg0LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODQvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg1LFxuICBcInRpdGxlXCI6IFwiTG91aXNXaWxsIE1lbiBTdW5nbGFzc2VzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJMb3Vpc1dpbGwgTWVuIFN1bmdsYXNzZXMgUG9sYXJpemVkIFN1bmdsYXNzZXMgVVY0MDAgU3VuZ2xhc3NlcyBEYXkgTmlnaHQgRHVhbCBVc2UgU2FmZXR5IERyaXZpbmcgTmlnaHQgVmlzaW9uIEV5ZXdlYXIgQUwtTUcgRnJhbWUgU3VuIEdsYXNzZXMgd2l0aCBGcmVlIEJveCBmb3IgRHJpdmVyc1wiLFxuICBcInByaWNlXCI6IDUwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMS4yNyxcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA5MixcbiAgXCJicmFuZFwiOiBcIkxvdWlzV2lsbFwiLFxuICBcImNhdGVnb3J5XCI6IFwic3VuZ2xhc3Nlc1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84NS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODUvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg1L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NixcbiAgXCJ0aXRsZVwiOiBcIkJsdWV0b290aCBBdXhcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkJsdWV0b290aCBBdXggQmx1ZXRvb3RoIENhciBBdXggQ2FyIEJsdWV0b290aCBUcmFuc21pdHRlciBBdXggQXVkaW8gUmVjZWl2ZXIgSGFuZGZyZWUgQ2FyIEJsdWV0b290aCBNdXNpYyBSZWNlaXZlciBVbml2ZXJzYWwgMy41bW0gU3RyZWFtaW5nIEEyRFAgV2lyZWxlc3MgQXV0byBBVVggQXVkaW8gQWRhcHRlciBXaXRoIE1pYyBGb3IgUGhvbmUgTVAzXCIsXG4gIFwicHJpY2VcIjogMjUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDEwLjU2LFxuICBcInJhdGluZ1wiOiA0LjU3LFxuICBcInN0b2NrXCI6IDIyLFxuICBcImJyYW5kXCI6IFwiQ2FyIEF1eFwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvMi53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ni8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODYvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg2L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA4NyxcbiAgXCJ0aXRsZVwiOiBcInQgVGVtcGVyYXR1cmUgQ29udHJvbGxlciBJbmN1YmF0b3IgQ29udHJvbGxlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQm90aCBIZWF0IGFuZCBDb29sIFB1cnBvc2UsIFRlbXBlcmF0dXJlIGNvbnRyb2wgcmFuZ2U7IC01MCB0byArMTEwLCBUZW1wZXJhdHVyZSBtZWFzdXJlbWVudCBhY2N1cmFjeTsgMC4xLCBDb250cm9sIGFjY3VyYWN5OyAwLjFcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTEuMyxcbiAgXCJyYXRpbmdcIjogNC41NCxcbiAgXCJzdG9ja1wiOiAzNyxcbiAgXCJicmFuZFwiOiBcIlcxMjA5IERDMTJWXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODcvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg3LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84Ny90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogODgsXG4gIFwidGl0bGVcIjogXCJUQyBSZXVzYWJsZSBTaWxpY29uZSBNYWdpYyBXYXNoaW5nIEdsb3Zlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVEMgUmV1c2FibGUgU2lsaWNvbmUgTWFnaWMgV2FzaGluZyBHbG92ZXMgd2l0aCBTY3J1YmJlciwgQ2xlYW5pbmcgQnJ1c2ggU2NydWJiZXIgR2xvdmVzIEhlYXQgUmVzaXN0YW50IFBhaXIgZm9yIENsZWFuaW5nIG9mIEtpdGNoZW4sIERpc2hlcywgVmVnZXRhYmxlcyBhbmQgRnJ1aXRzLCBCYXRocm9vbSwgQ2FyIFdhc2gsIFBldCBDYXJlIGFuZCBNdWx0aXB1cnBvc2VcIixcbiAgXCJwcmljZVwiOiAyOSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy4xOSxcbiAgXCJyYXRpbmdcIjogNC45OCxcbiAgXCJzdG9ja1wiOiA0MixcbiAgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg4LzQud2VicFwiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDg5LFxuICBcInRpdGxlXCI6IFwiUXVhbGNvbW0gb3JpZ2luYWwgQ2FyIENoYXJnZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcImJlc3QgUXVhbGl0eSBDSGFyZ2VyICwgSGlnaGx5IFJlY29tbWVuZGVkIHRvIGFsbCBiZXN0IFF1YWxpdHkgQ0hhcmdlciAsIEhpZ2hseSBSZWNvbW1lbmRlZCB0byBhbGxcIixcbiAgXCJwcmljZVwiOiA0MCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTcuNTMsXG4gIFwicmF0aW5nXCI6IDQuMixcbiAgXCJzdG9ja1wiOiA3OSxcbiAgXCJicmFuZFwiOiBcIlRDIFJldXNhYmxlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJhdXRvbW90aXZlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvODkvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzg5LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy84OS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTAsXG4gIFwidGl0bGVcIjogXCJDeWNsZSBCaWtlIEdsb3dcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlVuaXZlcnNhbCBmaXRtZW50IGFuZCBlYXN5IHRvIGluc3RhbGwgbm8gc3BlY2lhbCB3aXJlcywgY2FuIGJlIGVhc2lseSBpbnN0YWxsZWQgYW5kIHJlbW92ZWQuIEZpdHMgbW9zdCBzdGFuZGFyZCB0eXJlIGFpciBzdGVtIHZhbHZlcyBvZiByb2FkLCBtb3VudGFpbiBiaWN5Y2xlcywgbW90b2N5Y2xlcyBhbmQgY2Fycy5CcmlnaHQgbGVkIHdpbGwgdHVybiBvbiB3XCIsXG4gIFwicHJpY2VcIjogMzUsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDExLjA4LFxuICBcInJhdGluZ1wiOiA0LjEsXG4gIFwic3RvY2tcIjogNjMsXG4gIFwiYnJhbmRcIjogXCJOZW9uIExFRCBMaWdodFwiLFxuICBcImNhdGVnb3J5XCI6IFwiYXV0b21vdGl2ZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkwLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTAvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkxLFxuICBcInRpdGxlXCI6IFwiQmxhY2sgTW90b3JiaWtlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJFbmdpbmUgVHlwZTpXZXQgc3VtcCwgU2luZ2xlIEN5bGluZGVyLCBGb3VyIFN0cm9rZSwgVHdvIFZhbHZlcywgQWlyIENvb2xlZCB3aXRoIFNPSEMgKFNpbmdsZSBPdmVyIEhlYWQgQ2FtKSBDaGFpbiBEcml2ZSBCb3JlICYgU3Ryb2tlOjQ3LjAgeCA0OS41IE1NXCIsXG4gIFwicHJpY2VcIjogNTY5LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxMy42MyxcbiAgXCJyYXRpbmdcIjogNC4wNCxcbiAgXCJzdG9ja1wiOiAxMTUsXG4gIFwiYnJhbmRcIjogXCJNRVRSTyA3MGNjIE1vdG9yY3ljbGUgLSBNUjcwXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTEvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkxLzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85MS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTIsXG4gIFwidGl0bGVcIjogXCJIT1QgU0FMRSBJTiBFVVJPUEUgZWxlY3RyaWMgcmFjaW5nIG1vdG9yY3ljbGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkhPVCBTQUxFIElOIEVVUk9QRSBlbGVjdHJpYyByYWNpbmcgbW90b3JjeWNsZSBlbGVjdHJpYyBtb3RvcmN5Y2xlIGZvciBzYWxlIGFkdWx0IGVsZWN0cmljIG1vdG9yY3ljbGVzXCIsXG4gIFwicHJpY2VcIjogOTIwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNC40LFxuICBcInJhdGluZ1wiOiA0LjE5LFxuICBcInN0b2NrXCI6IDIyLFxuICBcImJyYW5kXCI6IFwiQlJBVkUgQlVMTFwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTIvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkyLzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Mi80LmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDkzLFxuICBcInRpdGxlXCI6IFwiQXV0b21hdGljIE1vdG9yIEdhcyBNb3RvcmN5Y2xlc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMTUwY2MgNC1TdHJva2UgTW90b3JjeWNsZSBBdXRvbWF0aWMgTW90b3IgR2FzIE1vdG9yY3ljbGVzIFNjb290ZXIgbW90b3JjeWNsZXMgMTUwY2Mgc2Nvb3RlclwiLFxuICBcInByaWNlXCI6IDEwNTAsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDMuMzQsXG4gIFwicmF0aW5nXCI6IDQuODQsXG4gIFwic3RvY2tcIjogMTI3LFxuICBcImJyYW5kXCI6IFwic2hvY2sgYWJzb3JiZXJcIixcbiAgXCJjYXRlZ29yeVwiOiBcIm1vdG9yY3ljbGVcIixcbiAgXCJ0aHVtYm5haWxcIjogXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvMS5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzLzIuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85My8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTMvNC5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzkzL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5NCxcbiAgXCJ0aXRsZVwiOiBcIm5ldyBhcnJpdmFscyBGYXNoaW9uIG1vdG9jcm9zcyBnb2dnbGVzXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJuZXcgYXJyaXZhbHMgRmFzaGlvbiBtb3RvY3Jvc3MgZ29nZ2xlcyBtb3RvcmN5Y2xlIG1vdG9jcm9zcyByYWNpbmcgbW90b3JjeWNsZVwiLFxuICBcInByaWNlXCI6IDkwMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMy44NSxcbiAgXCJyYXRpbmdcIjogNC4wNixcbiAgXCJzdG9ja1wiOiAxMDksXG4gIFwiYnJhbmRcIjogXCJKSUVQT0xMWVwiLFxuICBcImNhdGVnb3J5XCI6IFwibW90b3JjeWNsZVwiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvdGh1bWJuYWlsLndlYnBcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMS53ZWJwXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NC8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTQvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk0L3RodW1ibmFpbC53ZWJwXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTUsXG4gIFwidGl0bGVcIjogXCJXaG9sZXNhbGUgY2FyZ28gbGFzaGluZyBCZWx0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJXaG9sZXNhbGUgY2FyZ28gbGFzaGluZyBCZWx0IFRpZSBEb3duIGVuZCBSYXRjaGV0IHN0cmFwIGN1c3RvbWl6ZWQgc3RyYXAgMjVtbSBtb3RvcmN5Y2xlIDE1MDBrZ3Mgd2l0aCBydWJiZXIgaGFuZGxlXCIsXG4gIFwicHJpY2VcIjogOTMwLFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiAxNy42NyxcbiAgXCJyYXRpbmdcIjogNC4yMSxcbiAgXCJzdG9ja1wiOiAxNDQsXG4gIFwiYnJhbmRcIjogXCJYaWFuZ2xlXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJtb3RvcmN5Y2xlXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTUvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk1LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85NS90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTYsXG4gIFwidGl0bGVcIjogXCJsaWdodGluZyBjZWlsaW5nIGtpdGNoZW5cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldob2xlc2FsZSBzbGltIGhhbmdpbmcgZGVjb3JhdGl2ZSBraWQgcm9vbSBsaWdodGluZyBjZWlsaW5nIGtpdGNoZW4gY2hhbmRlbGllcnMgcGVuZGFudCBsaWdodCBtb2Rlcm5cIixcbiAgXCJwcmljZVwiOiAzMCxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTQuODksXG4gIFwicmF0aW5nXCI6IDQuODMsXG4gIFwic3RvY2tcIjogOTYsXG4gIFwiYnJhbmRcIjogXCJsaWdodGluZ2JyaWxsaWFuY2VcIixcbiAgXCJjYXRlZ29yeVwiOiBcImxpZ2h0aW5nXCIsXG4gIFwidGh1bWJuYWlsXCI6IFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni90aHVtYm5haWwuanBnXCIsXG4gIFwiaW1hZ2VzXCI6IFtcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni8yLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTYvMy5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk2LzQuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ni90aHVtYm5haWwuanBnXCJcbiAgXVxuICB9LFxuICB7XG4gIFwiaWRcIjogOTcsXG4gIFwidGl0bGVcIjogXCJNZXRhbCBDZXJhbWljIEZsb3dlclwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiTWV0YWwgQ2VyYW1pYyBGbG93ZXIgQ2hhbmRlbGllciBIb21lIExpZ2h0aW5nIEFtZXJpY2FuIFZpbnRhZ2UgSGFuZ2luZyBMaWdodGluZyBQZW5kYW50IExhbXBcIixcbiAgXCJwcmljZVwiOiAzNSxcbiAgXCJkaXNjb3VudFBlcmNlbnRhZ2VcIjogMTAuOTQsXG4gIFwicmF0aW5nXCI6IDQuOTMsXG4gIFwic3RvY2tcIjogMTQ2LFxuICBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTcvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85Ny80LndlYnBcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk3L3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH0sXG4gIHtcbiAgXCJpZFwiOiA5OCxcbiAgXCJ0aXRsZVwiOiBcIjMgbGlnaHRzIGxuZGVucGFudCBraXRjaGVuIGlzbGFuZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiMyBsaWdodHMgbG5kZW5wYW50IGtpdGNoZW4gaXNsYW5nIGRpbmluZyByb29tIHBlbmRhbnQgcmljZSBwYXBlciBjaGFuZGVsaWVyIGNvbnRlbXBvcmFyeSBsZWQgcGVuZGFudCBsaWdodCBtb2Rlcm4gY2hhbmRlbGllclwiLFxuICBcInByaWNlXCI6IDM0LFxuICBcImRpc2NvdW50UGVyY2VudGFnZVwiOiA1LjkyLFxuICBcInJhdGluZ1wiOiA0Ljk5LFxuICBcInN0b2NrXCI6IDQ0LFxuICBcImJyYW5kXCI6IFwiREFEQVdVXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk4LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OC80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTgvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDk5LFxuICBcInRpdGxlXCI6IFwiQW1lcmljYW4gVmludGFnZSBXb29kIFBlbmRhbnQgTGlnaHRcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkFtZXJpY2FuIFZpbnRhZ2UgV29vZCBQZW5kYW50IExpZ2h0IEZhcm1ob3VzZSBBbnRpcXVlIEhhbmdpbmcgTGFtcCBMYW1wYXJhIENvbGdhbnRlXCIsXG4gIFwicHJpY2VcIjogNDYsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDguODQsXG4gIFwicmF0aW5nXCI6IDQuMzIsXG4gIFwic3RvY2tcIjogMTM4LFxuICBcImJyYW5kXCI6IFwiSWZlaSBIb21lXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvdGh1bWJuYWlsLmpwZ1wiLFxuICBcImltYWdlc1wiOiBbXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS8xLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzk5LzMuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy85OS80LmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvOTkvdGh1bWJuYWlsLmpwZ1wiXG4gIF1cbiAgfSxcbiAge1xuICBcImlkXCI6IDEwMCxcbiAgXCJ0aXRsZVwiOiBcIkNyeXN0YWwgY2hhbmRlbGllciBtYXJpYSB0aGVyZXNhIGZvciAxMiBsaWdodFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQ3J5c3RhbCBjaGFuZGVsaWVyIG1hcmlhIHRoZXJlc2EgZm9yIDEyIGxpZ2h0XCIsXG4gIFwicHJpY2VcIjogNDcsXG4gIFwiZGlzY291bnRQZXJjZW50YWdlXCI6IDE2LFxuICBcInJhdGluZ1wiOiA0Ljc0LFxuICBcInN0b2NrXCI6IDEzMyxcbiAgXCJicmFuZFwiOiBcIllJT1NJXCIsXG4gIFwiY2F0ZWdvcnlcIjogXCJsaWdodGluZ1wiLFxuICBcInRodW1ibmFpbFwiOiBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIixcbiAgXCJpbWFnZXNcIjogW1xuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwLzEuanBnXCIsXG4gIFwiaHR0cHM6Ly9pLmR1bW15anNvbi5jb20vZGF0YS9wcm9kdWN0cy8xMDAvMi5qcGdcIixcbiAgXCJodHRwczovL2kuZHVtbXlqc29uLmNvbS9kYXRhL3Byb2R1Y3RzLzEwMC8zLmpwZ1wiLFxuICBcImh0dHBzOi8vaS5kdW1teWpzb24uY29tL2RhdGEvcHJvZHVjdHMvMTAwL3RodW1ibmFpbC5qcGdcIlxuICBdXG4gIH1cbiAgXSxcbiAgXCJ0b3RhbFwiOiAxMDAsXG4gIFwic2tpcFwiOiAwLFxuICBcImxpbWl0XCI6IDEwMFxuICB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3JvdXRpbmcnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWFpbi10ZW1wbGF0ZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZm9vdGVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0b3JlLXBhZ2UnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXJyb3ItcGFnZSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYXJ0LXBhZ2UnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJvZHVjdC1wYWdlJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21vZGFsLXBhZ2UnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcmFuZ2UnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZmlsdGVySXRlbSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9nb29kcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy92aWV3JztcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlYXJjaCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zb3J0aW5nJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==