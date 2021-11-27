/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/build.js":
/*!******************************!*\
  !*** ./src/scripts/build.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global require, module, console, Promise */\n\n(function () {\n\n  'use strict';\n\n  window.Accordion = __webpack_require__(/*! ./rmr-accordion.js */ \"./src/scripts/rmr-accordion.js\");\n})();\n\n//# sourceURL=webpack:///./src/scripts/build.js?");

/***/ }),

/***/ "./src/scripts/rmr-accordion.js":
/*!**************************************!*\
  !*** ./src/scripts/rmr-accordion.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// behaviour / markup based on http://heydonworks.com/practical_aria_examples/#progressive-collapsibles\n// expanding to height: auto based on https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5\n\n(function () {\n\n  'use strict';\n\n  var collapse = function collapse(element) {\n    // get the height of the element's inner content, regardless of its actual size\n    var height = element.scrollHeight;\n\n    // temporarily disable all css transitions\n    var elementTransition = element.style.transition;\n    element.style.transition = '';\n\n    // on the next frame (as soon as the previous style change has taken effect),\n    // explicitly set the element's height to its current pixel height, so we\n    // aren't transitioning out of 'auto'\n    requestAnimationFrame(function () {\n      element.style.height = height + 'px';\n      element.style.transition = elementTransition;\n\n      // on the next frame (as soon as the previous style change has taken effect),\n      // have the element transition to height: 0\n      requestAnimationFrame(function () {\n        element.setAttribute('aria-hidden', 'true');\n        element.style.height = null;\n      });\n    });\n  };\n\n  var expand = function expand(element) {\n    // get the height of the element's inner content, regardless of its actual size\n    var height = element.scrollHeight;\n\n    // have the element transition to the height of its inner content\n    element.style.height = height + 'px';\n\n    var tidyUp = function tidyUp() {\n      element.removeEventListener('transitionend', tidyUp);\n      // remove \"height\" from the element's inline styles, so it can return to its initial value\n      element.style.height = null;\n    };\n\n    // when the next css transition finishes (which should be the one we just triggered)\n    element.addEventListener('transitionend', tidyUp);\n  };\n\n  var accordionClick = function accordionClick(e) {\n    e.preventDefault();\n\n    var target = e.target,\n        accordion = target.closest('.rmr-accordion'),\n        toggle = accordion.querySelector('.rmr-accordion-toggle'),\n        collapsible = document.getElementById(toggle.getAttribute('aria-controls'));\n\n    if (!collapsible) {\n      return;\n    }\n\n    if (toggle.getAttribute('aria-expanded') === 'false') {\n      toggle.setAttribute('aria-expanded', 'true');\n      expand(collapsible);\n      collapsible.removeAttribute('aria-hidden');\n      accordion.classList.add('rmr-open');\n    } else {\n      toggle.setAttribute('aria-expanded', 'false');\n      collapse(collapsible);\n      accordion.classList.remove('rmr-open');\n    }\n  };\n\n  var enhanceMarkup = function enhanceMarkup(accordion, index) {\n\n    var id = 'rmr-accordion-' + index,\n        isOpen = accordion.classList.contains('rmr--open'),\n        title = accordion.querySelector('.rmr-accordion-title'),\n        button = accordion.querySelector('.rmr-accordion-toggle'),\n        pane = accordion.querySelector('.rmr-accordion-pane'),\n        children = [].concat(_toConsumableArray(pane.childNodes)),\n        collapsible = document.createElement('div');\n\n    collapsible.setAttribute('aria-hidden', !isOpen);\n    collapsible.setAttribute('class', 'rmr-accordion-contents');\n    collapsible.setAttribute('id', id);\n\n    pane.appendChild(collapsible);\n    children.forEach(function (node) {\n      collapsible.appendChild(node);\n    });\n\n    if (button) {\n      button.setAttribute('aria-expanded', isOpen);\n      button.setAttribute('aria-controls', id);\n    }\n    title.addEventListener('click', accordionClick);\n\n    accordion.setAttribute('data-rmr-init', true);\n  };\n\n  var initAccordions = function initAccordions() {\n\n    var count = 0,\n        accordion = void 0;\n    // enhance any accordions that are found including nested accordions\n    while (count === 0 || accordion) {\n      accordion = document.querySelector('.rmr-accordion:not([data-rmr-init]');\n      if (accordion) {\n        enhanceMarkup(accordion, count);\n      }\n      count++;\n    }\n  };\n\n  module.exports = initAccordions;\n})();\n\n//# sourceURL=webpack:///./src/scripts/rmr-accordion.js?");

/***/ })

/******/ });