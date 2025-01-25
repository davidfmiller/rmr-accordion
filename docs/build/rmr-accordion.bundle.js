/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/build.js":
/*!******************************!*\
  !*** ./src/scripts/build.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* global require, module, console, Promise */\n\n(function () {\n\n  'use strict';\n\n  window.Accordion = __webpack_require__(/*! ./rmr-accordion.js */ \"./src/scripts/rmr-accordion.js\");\n})();\n\n//# sourceURL=webpack://rmr-accordion/./src/scripts/build.js?");

/***/ }),

/***/ "./src/scripts/rmr-accordion.js":
/*!**************************************!*\
  !*** ./src/scripts/rmr-accordion.js ***!
  \**************************************/
/***/ ((module) => {

eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// behaviour / markup based on http://heydonworks.com/practical_aria_examples/#progressive-collapsibles\n// expanding to height: auto based on https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5\n\n(function () {\n\n  'use strict';\n\n  var enhance = function enhance(accordion, index, config) {\n\n    var collapse = function collapse(node) {\n      // get the height of the element's inner content, regardless of its actual size\n      var height = node.scrollHeight;\n\n      // temporarily disable all css transitions\n      var elementTransition = node.style.transition;\n      node.style.transition = '';\n\n      // on the next frame (as soon as the previous style change has taken effect),\n      // explicitly set the element's height to its current pixel height, so we\n      // aren't transitioning out of 'auto'\n      requestAnimationFrame(function () {\n        node.style.height = height + 'px';\n        node.style.transition = elementTransition;\n\n        // on the next frame (as soon as the previous style change has taken effect),\n        // have the element transition to height: 0\n        requestAnimationFrame(function () {\n          node.setAttribute('aria-hidden', 'true');\n          node.style.height = null;\n        });\n      });\n    };\n\n    var expand = function expand(node) {\n      // get the height of the element's inner content, regardless of its actual size\n      var height = node.scrollHeight;\n\n      // have the element transition to the height of its inner content\n      node.style.height = height + 'px';\n\n      var tidyUp = function tidyUp() {\n        node.removeEventListener('transitionend', tidyUp);\n        // remove \"height\" from the element's inline styles, so it can return to its initial value\n        node.style.height = null;\n      };\n\n      // when the next css transition finishes (which should be the one we just triggered)\n      node.addEventListener('transitionend', tidyUp);\n    };\n\n    var click = function click(e) {\n      e.preventDefault();\n\n      var target = e.target,\n          accordion = target.closest('.rmr-accordion'),\n          toggle = accordion.querySelector(':scope > .rmr-accordion-title .rmr-accordion-toggle'),\n          collapsible = toggle ? document.getElementById(toggle.getAttribute('aria-controls')) : null;\n\n      if (accordion.classList.contains('rmr-disabled')) {\n        return;\n      }\n\n      if (!collapsible) {\n        return;\n      }\n\n      if (toggle.getAttribute('aria-expanded') === 'false') {\n        toggle.setAttribute('aria-expanded', 'true');\n        expand(collapsible);\n        collapsible.removeAttribute('aria-hidden');\n        accordion.classList.add('rmr-open');\n      } else {\n        toggle.setAttribute('aria-expanded', 'false');\n        collapse(collapsible);\n        accordion.classList.remove('rmr-open');\n      }\n    };\n\n    var id = 'rmr-accordion-' + index,\n        isOpen = accordion.classList.contains('rmr-open'),\n        title = accordion.querySelector('.rmr-accordion-title'),\n        button = accordion.querySelector('.rmr-accordion-toggle'),\n        pane = accordion.querySelector('.rmr-accordion-pane'),\n        children = [].concat(_toConsumableArray(pane.childNodes)),\n        collapsible = document.createElement('div');\n\n    collapsible.setAttribute('aria-hidden', !isOpen);\n    collapsible.setAttribute('class', 'rmr-accordion-contents');\n    collapsible.setAttribute('id', id);\n\n    pane.appendChild(collapsible);\n    children.forEach(function (node) {\n      collapsible.appendChild(node);\n    });\n\n    if (button) {\n      button.setAttribute('aria-expanded', isOpen);\n      button.setAttribute('aria-controls', id);\n    }\n    title.addEventListener('click', click);\n    accordion.setAttribute('data-rmr-init', true);\n  };\n\n  var init = function init(config) {\n\n    var i = 0,\n        n = void 0;\n    try {\n      var acc = document.location.hash ? document.querySelector(document.location.hash) : null;\n      if (acc && acc.classList.contains('rmr-accordion')) {\n        acc.classList.add('rmr-open');\n      }\n    } catch (e) {}\n\n    while (i === 0 || n) {\n      n = document.querySelector('.rmr-accordion:not([data-rmr-init]');\n      if (n) {\n        enhance(n, i, config);\n      }\n      i++;\n    }\n  };\n\n  module.exports = init;\n})();\n\n//# sourceURL=webpack://rmr-accordion/./src/scripts/rmr-accordion.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/build.js");
/******/ 	
/******/ })()
;