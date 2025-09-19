/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/modules/accordion.js":
/*!*************************************************!*\
  !*** ./public/javascripts/modules/accordion.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function accordion() {
  var button = document.querySelector('.js-accordion--btn');
  var content = document.querySelector('.js-accordion--content');
  function toggleText() {
    if (button.textContent === 'Tovább') {
      button.textContent = 'Vissza';
    } else {
      button.textContent = 'Tovább';
    }
  }
  button.addEventListener('click', function () {
    content.classList.toggle('js-active');
    toggleText();
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./public/javascripts/modules/activeNavItem.js":
/*!*****************************************************!*\
  !*** ./public/javascripts/modules/activeNavItem.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function activeNavItem() {
  var links = document.querySelectorAll('.js-nav--item');
  var path = window.location.pathname;
  var pathArray = path.split('/');
  var currentPath = pathArray[pathArray.length - 1];
  links.forEach(function (link) {
    var linkPath = link.getAttribute('href');
    var linkArray = linkPath.split('/');
    var linkCurrentPath = linkArray[linkArray.length - 1];
    var linkWithoutHtml = linkCurrentPath.split('.')[0];
    if (linkCurrentPath === currentPath || linkWithoutHtml === currentPath) {
      console.log('ok', 'linkCurrentPath:', linkCurrentPath, 'currentPath:', currentPath, 'linkWithoutHtml:', linkWithoutHtml);
      link.classList.add('js-nav--item__active');
    } else {
      console.log('not ok', 'linkCurrentPath:', linkCurrentPath, 'currentPath:', currentPath, 'linkWithoutHtml:', linkWithoutHtml);
      link.classList.remove('js-nav--item__active');
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (activeNavItem);

/***/ }),

/***/ "./public/javascripts/modules/dropdownMenu.js":
/*!****************************************************!*\
  !*** ./public/javascripts/modules/dropdownMenu.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function dropdownMenu() {
  var navMenu = document.querySelector(".js-nav--menu");
  var navWrapper = document.querySelector(".js-nav--wrapper");
  var navLinks = document.querySelectorAll(".js-nav--item");
  navMenu.addEventListener("click", function () {
    navWrapper.classList.toggle("js-is-open");
    navMenu.classList.toggle("js-highlight");
  });
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navWrapper.classList.remove("js-is-open");
      navMenu.classList.remove("js-highlight");
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (dropdownMenu);

/***/ }),

/***/ "./public/javascripts/modules/showDetails.js":
/*!***************************************************!*\
  !*** ./public/javascripts/modules/showDetails.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function showDetails() {
  var items = document.querySelectorAll(".js-item");
  var headers = document.querySelectorAll(".js-header");
  var headline = document.querySelector(".js-headline");
  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      var selectedItem = this.parentElement;
      var icon = this.querySelector(".js-list-toggle");
      var content = this.nextElementSibling;
      items.forEach(function (item) {
        if (item !== selectedItem) {
          item.classList.add("hidden");
        } else {
          item.classList.add("selectedItem");
        }
      });
      // Make the selected content visible
      content.classList.add("visible-content");

      // Hide the arow icon
      icon.classList.add("hidden");
      //Hide headline
      headline.classList.add("hidden");
    });
  });
  var backButtons = document.querySelectorAll(".js-back-button");
  backButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.stopPropagation(); // ne triggerelje a szülő click-et

      //Show all hidden items
      items.forEach(function (item) {
        item.classList.remove("hidden");
        item.classList.remove("selectedItem");
      });
      var allContents = document.querySelectorAll(".js-content");
      var allIcons = document.querySelectorAll(".js-list-toggle");
      allContents.forEach(function (content) {
        return content.classList.remove("visible-content");
      });
      allIcons.forEach(function (icon) {
        return icon.classList.remove("hidden");
      });
      headline.classList.remove("hidden");
    });
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (showDetails);

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!******************************************!*\
  !*** ./public/javascripts/bagoly-app.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./public/css/style.css");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./public/javascripts/modules/dropdownMenu.js");
/* harmony import */ var _modules_activeNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activeNavItem */ "./public/javascripts/modules/activeNavItem.js");
/* harmony import */ var _modules_showDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/showDetails */ "./public/javascripts/modules/showDetails.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion */ "./public/javascripts/modules/accordion.js");
 // without this import webpack doesn't generate the css file





(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_activeNavItem__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_showDetails__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_4__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=App.bundle.js.map