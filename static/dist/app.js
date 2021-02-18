/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./sass/style.scss\");\n // ------ Navbar toggle ------ //\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Get all \"navbar-burger\" elements\n  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Check if there are any navbar burgers\n\n  if ($navbarBurgers.length > 0) {\n    // Add a click event on each of them\n    $navbarBurgers.forEach(el => {\n      el.addEventListener('click', () => {\n        // Get the target from the \"data-target\" attribute\n        const target = el.dataset.target;\n        const $target = document.getElementById(target); // Toggle the \"is-active\" class on both the \"navbar-burger\" and the \"navbar-menu\"\n\n        el.classList.toggle('is-active');\n        $target.classList.toggle('is-active');\n      });\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz9lZTFjIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiRuYXZiYXJCdXJnZXJzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiZm9yRWFjaCIsImVsIiwidGFyZ2V0IiwiZGF0YXNldCIsIiR0YXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Q0FHQTs7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsTUFBTTtBQUVsRDtBQUNBLFFBQU1DLGNBQWMsR0FBR0MsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxLQUFoQixDQUFzQkMsSUFBdEIsQ0FBMkJOLFFBQVEsQ0FBQ08sZ0JBQVQsQ0FBMEIsZ0JBQTFCLENBQTNCLEVBQXdFLENBQXhFLENBQXZCLENBSGtELENBS2xEOztBQUNBLE1BQUlMLGNBQWMsQ0FBQ00sTUFBZixHQUF3QixDQUE1QixFQUErQjtBQUU3QjtBQUNBTixrQkFBYyxDQUFDTyxPQUFmLENBQXdCQyxFQUFFLElBQUk7QUFDNUJBLFFBQUUsQ0FBQ1QsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsTUFBTTtBQUVqQztBQUNBLGNBQU1VLE1BQU0sR0FBR0QsRUFBRSxDQUFDRSxPQUFILENBQVdELE1BQTFCO0FBQ0EsY0FBTUUsT0FBTyxHQUFHYixRQUFRLENBQUNjLGNBQVQsQ0FBd0JILE1BQXhCLENBQWhCLENBSmlDLENBTWpDOztBQUNBRCxVQUFFLENBQUNLLFNBQUgsQ0FBYUMsTUFBYixDQUFvQixXQUFwQjtBQUNBSCxlQUFPLENBQUNFLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFdBQXpCO0FBRUQsT0FWRDtBQVdELEtBWkQ7QUFhRDtBQUVGLENBeEJEIiwiZmlsZSI6Ii4vanMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3Nhc3Mvc3R5bGUuc2NzcydcblxuXG4vLyAtLS0tLS0gTmF2YmFyIHRvZ2dsZSAtLS0tLS0gLy9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAvLyBHZXQgYWxsIFwibmF2YmFyLWJ1cmdlclwiIGVsZW1lbnRzXG4gIGNvbnN0ICRuYXZiYXJCdXJnZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXJnZXInKSwgMCk7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIGFueSBuYXZiYXIgYnVyZ2Vyc1xuICBpZiAoJG5hdmJhckJ1cmdlcnMubGVuZ3RoID4gMCkge1xuXG4gICAgLy8gQWRkIGEgY2xpY2sgZXZlbnQgb24gZWFjaCBvZiB0aGVtXG4gICAgJG5hdmJhckJ1cmdlcnMuZm9yRWFjaCggZWwgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gR2V0IHRoZSB0YXJnZXQgZnJvbSB0aGUgXCJkYXRhLXRhcmdldFwiIGF0dHJpYnV0ZVxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlbC5kYXRhc2V0LnRhcmdldDtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHRoZSBcImlzLWFjdGl2ZVwiIGNsYXNzIG9uIGJvdGggdGhlIFwibmF2YmFyLWJ1cmdlclwiIGFuZCB0aGUgXCJuYXZiYXItbWVudVwiXG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAkdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYXNzL3N0eWxlLnNjc3M/MmVkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zYXNzL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/style.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;