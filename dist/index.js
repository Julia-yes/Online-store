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
function renderCartPage() {
    const content = document.querySelector('.main');
    if (content) {
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
    console.log(errorArea);
    if (errorArea) {
        console.log("!!!");
        errorArea.innerHTML = `<div class='error__block'>PAGE NOT FOUND (404)</div>`;
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
/***/ (() => {


function renderRange() {
    const rangePlace = document.querySelector(".filter__range");
    if (rangePlace) {
        rangePlace.innerHTML = `<div class="range_container">
    <div class="sliders_control">
        <input id="fromSlider" type="range" value="10" min="0" max="100"/>
        <input id="toSlider" type="range" value="40" min="0" max="100"/>
    </div>
    <div class="form_control">
        <div class="form_control_container">
            <input class="form_control_container__time__input" type="number" id="fromInput" value="10" min="0" max="100"/>
        </div>
        <div class="form_control_container">
            <input class="form_control_container__time__input" type="number" id="toInput" value="40" min="0" max="100"/>
        </div>
    </div>
</div>`;
    }
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
    console.log(route);
    route();
});
const buttons = document.querySelectorAll(".list__item");
buttons.forEach((element) => {
    element.addEventListener('click', (e) => {
        const path = e.target.href;
        console.log(path);
        e = e || window.event;
        e.preventDefault();
        history.pushState({}, '', path);
        handleLocation();
    });
});
window.onpopstate = handleLocation;


/***/ }),

/***/ "./src/components/store-page.ts":
/*!**************************************!*\
  !*** ./src/components/store-page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderStorePage": () => (/* binding */ renderStorePage)
/* harmony export */ });
function renderStorePage() {
    const content = document.querySelector('.main');
    if (content) {
        content.innerHTML = `
    <article class='store__page store'>
      <div class='store__search search'>
        <div class='search__block'>
          <img alt='search' class='search__img' src='../img/search3.png'>
          <input type='search' class='search__input' placeholder ='Search product'></input> 
        </div>
      </div>
      <div class='store__main'>
        <aside class='store__filters filter'>
          <div class='filter__item filter__category'>
            <div class='filter__title'>Category</div>
            <div class='filter__area'></div>
          </div>
          <div class='filter__item filter__brend'>
            <div class='filter__title'>Brend</div>
            <div class='filter__area'></div>
          </div>
          <div class='filter__item filter__price'>
            <div class='filter__title'>Price</div>
            <div class='filter__range'></div>
          </div>
          <div class='filter__item filter__stock'>
            <div class='filter__title'>Stock</div>
            <div class='filter__area'></div>
          </div>
          <div class='filter__item filter__buttons'>
            <button class='filter__button button'>Reset filters</button>
            <button class='filter__button button'>Save filters</button>
          </div>
        </aside>
        <section class='store__goods goods'>
          <h2 class='goods__title'>Found: <span class='goods__quantity'></span>
          </h2>
          <div class='goods__options'>
            <div class='goods__sorters sorters'>
              <button class='sorters__button sorters__price sorters__price_low'>price &#8595;</button>
              <button class='sorters__button sorters__price sorters__price_high'>price &#8593;</button>
              <button class='sorters__button sorters__rating sorters__rating_low'>rating &#8595;</button>
              <button class='sorters__button sorters__rating sorters__rating_high'>rating &#8593;</button>
            </div>
            <div class='goods__view view'>
              <div class='view__button view__button_many'></div>
              <div class='view__button view__button_few'></div>
            </div>
          </div>
          <div class='goods__area'>
          </div>
        </section>
      </div>
    </article>
  `;
    }
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
/* harmony import */ var _components_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_range__WEBPACK_IMPORTED_MODULE_7__);









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ1E7QUFDTTtBQUNIO0FBQ0E7QUFDRDtBQUNHO0FBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9jYXJ0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZXJyb3ItcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9tYWluLXRlbXBsYXRlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9yYW5nZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9yb3V0aW5nLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3N0b3JlLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQ2FydFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIkNhcnRcIjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyRXJyb3JQYWdlKCkge1xyXG4gICAgY29uc3QgZXJyb3JBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3JBcmVhKTtcclxuICAgIGlmIChlcnJvckFyZWEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiEhIVwiKTtcclxuICAgICAgICBlcnJvckFyZWEuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J2Vycm9yX19ibG9jayc+UEFHRSBOT1QgRk9VTkQgKDQwNCk8L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGhhbmRsZUxvY2F0aW9uIH0gZnJvbSAnLi9yb3V0aW5nJztcclxuY29uc3QgdGVtcGxhdGVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdG9yZV9fcHJvamVjdFwiKTtcclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoKSB7XHJcbiAgICBpZiAodGVtcGxhdGVBcmVhKSB7XHJcbiAgICAgICAgdGVtcGxhdGVBcmVhLmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3MgPSAnd3JhcHBlcic+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3MgPSAnaGVhZGVyJz5IZWFkZXJcclxuICAgICAgICA8YSBocmVmPScvJz5Mb2dvPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9Jy9jYXJ0Jz5DYXJ0PC9hPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3MgPSAnbWFpbic+TWFpblxyXG4gICAgICAgIDxhIGhyZWY9Jy9wcm9kdWN0Jz5Qcm9kdWN0PC9hPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxmb290ZXIgY2xhc3MgPSAnZm9vdGVyJz5Gb290ZXI8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaW5pdFByb2plY3QoKSB7XHJcbiAgICByZW5kZXJUZW1wbGF0ZSgpO1xyXG4gICAgaGFuZGxlTG9jYXRpb24oKTtcclxufVxyXG5pbml0UHJvamVjdCgpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvZHVjdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgIGlmIChjb250ZW50KSB7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlByb2R1Y3RcIjtcclxuICAgIH1cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuZnVuY3Rpb24gcmVuZGVyUmFuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5nZVBsYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3JhbmdlXCIpO1xyXG4gICAgaWYgKHJhbmdlUGxhY2UpIHtcclxuICAgICAgICByYW5nZVBsYWNlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicmFuZ2VfY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyc19jb250cm9sXCI+XHJcbiAgICAgICAgPGlucHV0IGlkPVwiZnJvbVNsaWRlclwiIHR5cGU9XCJyYW5nZVwiIHZhbHVlPVwiMTBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIvPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cInRvU2xpZGVyXCIgdHlwZT1cInJhbmdlXCIgdmFsdWU9XCI0MFwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9jb250cm9sX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyX190aW1lX19pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBpZD1cImZyb21JbnB1dFwiIHZhbHVlPVwiMTBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX2NvbnRyb2xfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm1fY29udHJvbF9jb250YWluZXJfX3RpbWVfX2lucHV0XCIgdHlwZT1cIm51bWJlclwiIGlkPVwidG9JbnB1dFwiIHZhbHVlPVwiNDBcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxucmVuZGVyUmFuZ2UoKTtcclxuY29uc3QgZnJvbVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcm9tU2xpZGVyJyk7XHJcbmNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvU2xpZGVyJyk7XHJcbmNvbnN0IGZyb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcm9tSW5wdXQnKTtcclxuY29uc3QgdG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0lucHV0Jyk7XHJcbmZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XHJcbnNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xyXG5pZiAoZnJvbVNsaWRlciAmJiB0b1NsaWRlciAmJiBmcm9tSW5wdXQgJiYgdG9JbnB1dCkge1xyXG4gICAgZnJvbVNsaWRlci5vbmlucHV0ID0gKCkgPT4gY29udHJvbEZyb21TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIGZyb21JbnB1dCk7XHJcbiAgICB0b1NsaWRlci5vbmlucHV0ID0gKCkgPT4gY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KTtcclxuICAgIGZyb21JbnB1dC5vbmlucHV0ID0gKCkgPT4gY29udHJvbEZyb21JbnB1dChmcm9tU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIHRvU2xpZGVyKTtcclxuICAgIHRvSW5wdXQub25pbnB1dCA9ICgpID0+IGNvbnRyb2xUb0lucHV0KHRvU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIHRvU2xpZGVyKTtcclxufVxyXG5mdW5jdGlvbiBjb250cm9sRnJvbUlucHV0KGZyb21TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgY29udHJvbFNsaWRlcikge1xyXG4gICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xyXG4gICAgZmlsbFNsaWRlcihmcm9tSW5wdXQsIHRvSW5wdXQsICcjQzZDNkM2JywgJyNiYjFiMjMnLCBjb250cm9sU2xpZGVyKTtcclxuICAgIGlmIChmcm9tID4gdG8pIHtcclxuICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21JbnB1dCwgdG9JbnB1dCk7XHJcbiAgICBmaWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIGNvbnRyb2xTbGlkZXIpO1xyXG4gICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b0lucHV0KTtcclxuICAgIGlmIChmcm9tIDw9IHRvKSB7XHJcbiAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgICAgIHRvSW5wdXQudmFsdWUgPSBTdHJpbmcodG8pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KSB7XHJcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21TbGlkZXIsIHRvU2xpZGVyKTtcclxuICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyNiYjFiMjMnLCB0b1NsaWRlcik7XHJcbiAgICBpZiAoZnJvbSA+IHRvKSB7XHJcbiAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gU3RyaW5nKHRvKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IFN0cmluZyhmcm9tKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpIHtcclxuICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xyXG4gICAgZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnI2JiMWIyMycsIHRvU2xpZGVyKTtcclxuICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xyXG4gICAgaWYgKGZyb20gPD0gdG8pIHtcclxuICAgICAgICB0b1NsaWRlci52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICAgICAgdG9JbnB1dC52YWx1ZSA9IFN0cmluZyh0byk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0b0lucHV0LnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgICAgIHRvU2xpZGVyLnZhbHVlID0gU3RyaW5nKGZyb20pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFBhcnNlZChjdXJyZW50RnJvbSwgY3VycmVudFRvKSB7XHJcbiAgICBjb25zdCBmcm9tID0gcGFyc2VJbnQoY3VycmVudEZyb20udmFsdWUsIDEwKTtcclxuICAgIGNvbnN0IHRvID0gcGFyc2VJbnQoY3VycmVudFRvLnZhbHVlLCAxMCk7XHJcbiAgICByZXR1cm4gW2Zyb20sIHRvXTtcclxufVxyXG5mdW5jdGlvbiBmaWxsU2xpZGVyKGZyb20sIHRvLCBzbGlkZXJDb2xvciwgcmFuZ2VDb2xvciwgY29udHJvbFNsaWRlcikge1xyXG4gICAgaWYgKGZyb20gJiYgdG8gJiYgY29udHJvbFNsaWRlcikge1xyXG4gICAgICAgIGNvbnN0IHJhbmdlRGlzdGFuY2UgPSBOdW1iZXIodG8ubWF4KSAtIE51bWJlcih0by5taW4pO1xyXG4gICAgICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IE51bWJlcihmcm9tLnZhbHVlKSAtIE51bWJlcih0by5taW4pO1xyXG4gICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSBOdW1iZXIodG8udmFsdWUpIC0gTnVtYmVyKHRvLm1pbik7XHJcbiAgICAgICAgY29udHJvbFNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICR7c2xpZGVyQ29sb3J9IDAlLFxyXG4gICAgICAke3NsaWRlckNvbG9yfSAkeyhmcm9tUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpICogMTAwfSUsXHJcbiAgICAgICR7cmFuZ2VDb2xvcn0gJHsoKGZyb21Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkpICogMTAwfSUsXHJcbiAgICAgICR7cmFuZ2VDb2xvcn0gJHsodG9Qb3NpdGlvbikgLyAocmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSwgXHJcbiAgICAgICR7c2xpZGVyQ29sb3J9ICR7KHRvUG9zaXRpb24pIC8gKHJhbmdlRGlzdGFuY2UpICogMTAwfSUsIFxyXG4gICAgICAke3NsaWRlckNvbG9yfSAxMDAlKWA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0VG9nZ2xlQWNjZXNzaWJsZShjdXJyZW50VGFyZ2V0KSB7XHJcbiAgICBjb25zdCB0b1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b1NsaWRlcicpO1xyXG4gICAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgTnVtYmVyKGN1cnJlbnRUYXJnZXQudmFsdWUpIDw9IDAgJiYgdG9TbGlkZXIpIHtcclxuICAgICAgICB0b1NsaWRlci5zdHlsZS56SW5kZXggPSBTdHJpbmcoMik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAodG9TbGlkZXIpIHtcclxuICAgICAgICAgICAgdG9TbGlkZXIuc3R5bGUuekluZGV4ID0gU3RyaW5nKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHJlbmRlckVycm9yUGFnZSB9IGZyb20gJy4vZXJyb3ItcGFnZSc7XHJcbmltcG9ydCB7IHJlbmRlckNhcnRQYWdlIH0gZnJvbSAnLi9jYXJ0LXBhZ2UnO1xyXG5pbXBvcnQgeyByZW5kZXJQcm9kdWN0UGFnZSB9IGZyb20gJy4vcHJvZHVjdC1wYWdlJztcclxuaW1wb3J0IHsgcmVuZGVyU3RvcmVQYWdlIH0gZnJvbSAnLi9zdG9yZS1wYWdlJztcclxuY29uc3Qgcm91dGVzID0ge1xyXG4gICAgJy8nOiByZW5kZXJTdG9yZVBhZ2UsXHJcbiAgICAnL3Byb2R1Y3QnOiByZW5kZXJQcm9kdWN0UGFnZSxcclxuICAgICcvY2FydCc6IHJlbmRlckNhcnRQYWdlLFxyXG4gICAgJ2Vycm9yJzogcmVuZGVyRXJyb3JQYWdlLFxyXG59O1xyXG5leHBvcnQgY29uc3QgaGFuZGxlTG9jYXRpb24gPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBjb25zdCByb3V0ZSA9IHJvdXRlc1twYXRoXSB8fCByb3V0ZXMuZXJyb3I7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZSk7XHJcbiAgICByb3V0ZSgpO1xyXG59KTtcclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdF9faXRlbVwiKTtcclxuYnV0dG9ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoID0gZS50YXJnZXQuaHJlZjtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgcGF0aCk7XHJcbiAgICAgICAgaGFuZGxlTG9jYXRpb24oKTtcclxuICAgIH0pO1xyXG59KTtcclxud2luZG93Lm9ucG9wc3RhdGUgPSBoYW5kbGVMb2NhdGlvbjtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclN0b3JlUGFnZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgaWYgKGNvbnRlbnQpIHtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxhcnRpY2xlIGNsYXNzPSdzdG9yZV9fcGFnZSBzdG9yZSc+XHJcbiAgICAgIDxkaXYgY2xhc3M9J3N0b3JlX19zZWFyY2ggc2VhcmNoJz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdzZWFyY2hfX2Jsb2NrJz5cclxuICAgICAgICAgIDxpbWcgYWx0PSdzZWFyY2gnIGNsYXNzPSdzZWFyY2hfX2ltZycgc3JjPScuLi9pbWcvc2VhcmNoMy5wbmcnPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9J3NlYXJjaCcgY2xhc3M9J3NlYXJjaF9faW5wdXQnIHBsYWNlaG9sZGVyID0nU2VhcmNoIHByb2R1Y3QnPjwvaW5wdXQ+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz0nc3RvcmVfX21haW4nPlxyXG4gICAgICAgIDxhc2lkZSBjbGFzcz0nc3RvcmVfX2ZpbHRlcnMgZmlsdGVyJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2NhdGVnb3J5Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX190aXRsZSc+Q2F0ZWdvcnk8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19hcmVhJz48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz0nZmlsdGVyX19pdGVtIGZpbHRlcl9fYnJlbmQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX3RpdGxlJz5CcmVuZDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2FyZWEnPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19wcmljZSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlByaWNlPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fcmFuZ2UnPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdmaWx0ZXJfX2l0ZW0gZmlsdGVyX19zdG9jayc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fdGl0bGUnPlN0b2NrPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9fYXJlYSc+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9J2ZpbHRlcl9faXRlbSBmaWx0ZXJfX2J1dHRvbnMnPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdmaWx0ZXJfX2J1dHRvbiBidXR0b24nPlJlc2V0IGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nZmlsdGVyX19idXR0b24gYnV0dG9uJz5TYXZlIGZpbHRlcnM8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9J3N0b3JlX19nb29kcyBnb29kcyc+XHJcbiAgICAgICAgICA8aDIgY2xhc3M9J2dvb2RzX190aXRsZSc+Rm91bmQ6IDxzcGFuIGNsYXNzPSdnb29kc19fcXVhbnRpdHknPjwvc3Bhbj5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fb3B0aW9ucyc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2dvb2RzX19zb3J0ZXJzIHNvcnRlcnMnPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3NvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19wcmljZSBzb3J0ZXJzX19wcmljZV9sb3cnPnByaWNlICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcHJpY2Ugc29ydGVyc19fcHJpY2VfaGlnaCc+cHJpY2UgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J3NvcnRlcnNfX2J1dHRvbiBzb3J0ZXJzX19yYXRpbmcgc29ydGVyc19fcmF0aW5nX2xvdyc+cmF0aW5nICYjODU5NTs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPSdzb3J0ZXJzX19idXR0b24gc29ydGVyc19fcmF0aW5nIHNvcnRlcnNfX3JhdGluZ19oaWdoJz5yYXRpbmcgJiM4NTkzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZ29vZHNfX3ZpZXcgdmlldyc+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld19fYnV0dG9uIHZpZXdfX2J1dHRvbl9tYW55Jz48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3X19idXR0b24gdmlld19fYnV0dG9uX2Zldyc+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPSdnb29kc19fYXJlYSc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gIGA7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcm91dGluZyc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL21haW4tdGVtcGxhdGUnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zdG9yZS1wYWdlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXJyb3ItcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NhcnQtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3Byb2R1Y3QtcGFnZSc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3JhbmdlJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9