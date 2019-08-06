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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Commonly used constants and functions.
 *
 * @module Helpers
 */

/**
 * Detect current page.
 *
 * @constant
 * @type {String}
 */
var currentPage = exports.currentPage = document.querySelector('main').dataset.page;

/**
 * Match media device indicator.
 */

var Resp = exports.Resp = function () {
	function Resp() {
		_classCallCheck(this, Resp);
	}

	_createClass(Resp, null, [{
		key: 'currWidth',

		/**
   * Get window's current width.
   *
   * @get
   * @static
   * @return {Number}
   */
		get: function get() {
			return window.innerWidth;
		}

		/**
   * Detect touch events.
   *
   * @get
   * @static
   * @return {Boolean}
   */

	}, {
		key: 'isTouch',
		get: function get() {
			return 'ontouchstart' in window;
		}

		/**
   * Detect desktop device.
   *
   * @get
   * @static
   * @return {Boolean}
   */

	}, {
		key: 'isDesk',
		get: function get() {
			return window.matchMedia('(min-width: 1280px)').matches;
		}

		/**
   * Detect tablet device.
   *
   * @get
   * @static
   * @return {Boolean}
   */

	}, {
		key: 'isTablet',
		get: function get() {
			return window.matchMedia('(max-width: 992px)').matches;
		}

		/**
   * Detect mobile device.
   *
   * @get
   * @static
   * @return {Boolean}
   */

	}, {
		key: 'isMobile',
		get: function get() {
			return window.matchMedia('(max-width: 767px)').matches;
		}
	}]);

	return Resp;
}();

/**
 * Css class names.
 *
 * @constant
 * @type {Object}
 */


var css = exports.css = {
	active: 'active'
};

/**
 * Generate string of random letters.
 *
 * @param {Number} length
 */
var randomString = exports.randomString = function randomString() {
	var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	return Math.random().toString(36).substr(2, length > 10 ? length : 10);
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 *
 * @param {Function} func
 * @param {Object} context
 * @param {Number} wait
 * @param {Boolean} [immediate]
 * @returns {Function}
 */
var debounce = exports.debounce = function debounce(func, context, wait, immediate) {
	var timeout = void 0;

	return function () {
		var args = arguments;

		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

var fadeOut = exports.fadeOut = function fadeOut(el) {
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};
var fadeIn = exports.fadeIn = function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};

var easings = exports.easings = {
	linear: function linear(t) {
		return t;
	},
	easeInQuad: function easeInQuad(t) {
		return t * t;
	},
	easeOutQuad: function easeOutQuad(t) {
		return t * (2 - t);
	},
	easeInOutQuad: function easeInOutQuad(t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	},
	easeInCubic: function easeInCubic(t) {
		return t * t * t;
	},
	easeOutCubic: function easeOutCubic(t) {
		return --t * t * t + 1;
	},
	easeInOutCubic: function easeInOutCubic(t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	},
	easeInQuart: function easeInQuart(t) {
		return t * t * t * t;
	},
	easeOutQuart: function easeOutQuart(t) {
		return 1 - --t * t * t * t;
	},
	easeInOutQuart: function easeInOutQuart(t) {
		return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
	},
	easeInQuint: function easeInQuint(t) {
		return t * t * t * t * t;
	},
	easeOutQuint: function easeOutQuint(t) {
		return 1 + --t * t * t * t * t;
	},
	easeInOutQuint: function easeInOutQuint(t) {
		return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
	}
};

// /**
//  * Like jQuery's slideDown function - uses CSS3 transitions
//  * @param  {Node} elem Element to show and hide
//  */
// export const slideDown = (elem) => {
// 	elem.style.maxHeight = '1000px';
// 	// We're using a timer to set opacity = 0 because setting max-height = 0 doesn't (completely) hide the element.
// 	elem.style.opacity = '1';
// }

// /**
//  * Slide element up (like jQuery's slideUp)
//  * @param  {Node} elem Element
//  * @return {[type]}      [description]
//  */
// export const slideUp = (elem) => {
// 	elem.style.maxHeight = '0';
// 	once(1, function () {
// 		elem.style.opacity = '0';
// 	});
// }

// /**
//  * Call once after timeout
//  * @param  {Number}   seconds  Number of seconds to wait
//  * @param  {Function} callback Callback function
//  */
// export const once = (seconds, callback) => {
// 	var counter = 0;
// 	var time = window.setInterval(function () {
// 		counter++;
// 		if (counter >= seconds) {
// 			callback();
// 			window.clearInterval(time);
// 		}
// 	}, 400);
// }


// export const slideDown = (el, timing) => {
// 	timing = timing || '300ms ease';

// 	// Get element height
// 	el.style.webkitTransition = 'initial';
// 	el.style.transition = 'initial';
// 	el.style.visibility = 'hidden';
// 	el.style.maxHeight = 'initial';
// 	var height = el.offsetHeight + 'px';
// 	el.style.removeProperty('visibility');
// 	el.style.maxHeight = '0';
// 	el.style.overflow = 'hidden';

// 	// Begin transition
// 	el.style.webkitTransition = 'max-height ' + timing + ', opacity ' + timing + '';
// 	el.style.transition = 'max-height ' + timing + ', opacity ' + timing + '';
// 	var endSlideDown = function () {
// 		el.style.removeProperty('-webkit-transition');
// 		el.style.removeProperty('transition');
// 		el.removeEventListener(transitionEvent('end'), endSlideDown);
// 	};
// 	requestAnimationFrame(function () {
// 		el.addEventListener(transitionEvent('end'), endSlideDown);
// 		el.style.maxHeight = height;
// 		el.style.opacity = '1';
// 	});
// }

// /**
//  * Slide an element up like jQuery's slideUp function using CSS3 transitions.
//  * @see https://gist.github.com/ludder/4226288
//  * @param  {element}  el
//  * @param  {string}   timing
//  * @return {void}
//  */
// export const slideUp = (el, timing) => {
// 	timing = timing || '300ms ease';

// 	// Get element height
// 	el.style.webkitTransition = 'initial';
// 	el.style.transition = 'initial';
// 	var height = el.offsetHeight + 'px';
// 	el.style.maxHeight = height;
// 	el.style.overflow = 'hidden';

// 	// Begin transition
// 	el.style.webkitTransition = 'max-height ' + timing + ', opacity ' + timing + '';
// 	el.style.transition = 'max-height ' + timing + ', opacity ' + timing + '';
// 	var endSlideDown = function () {
// 		el.style.removeProperty('-webkit-transition');
// 		el.style.removeProperty('transition');
// 		el.removeEventListener(transitionEvent('end'), endSlideDown);
// 	};
// 	requestAnimationFrame(function () {
// 		el.style.maxHeight = '0';
// 		el.style.opacity = '0';
// 	});
// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * App entry point.
 *
 * @module App
 */

/** Import common controller */

var _Common = __webpack_require__(2);

var _Common2 = _interopRequireDefault(_Common);

var _Popup = __webpack_require__(3);

var _Popup2 = _interopRequireDefault(_Popup);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

var _Home = __webpack_require__(6);

var _Home2 = _interopRequireDefault(_Home);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run appropriate scripts for each page.
 **/


/** Import page controllers */


/** Import popup controller */
switch (_helpers.currentPage) {
	/** Home page */
	case 'home':
		new _Home2.default();
		break;

	/** No page found */
	default:
		console.warn('Undefined page');
}

/** Import form controller */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Common = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Website's common scripts (example).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Common
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = exports.Common = function () {
	/**
  * Cache data, make preparations and initialize common scripts.
  */
	function Common() {
		_classCallCheck(this, Common);

		var self = this;
		this.state = {
			scrollTrigger: null
		};

		// initialize after construction
		document.addEventListener("DOMContentLoaded", function (event) {
			self.init();
		});
	}

	/**
  * Initialize common scripts.
  */


	_createClass(Common, [{
		key: 'init',
		value: function init() {
			this.fixHeader();
			this.toogleMenu();
			this.scrollInvoke();
			this.resizeCheck();
			this.inputFocus();
			this.openTabs();
		}
	}, {
		key: 'resizeCheck',
		value: function resizeCheck() {
			var self = this;
			var resized = void 0;
			window.addEventListener('resize', function () {
				clearTimeout(resized);
				resized = setTimeout(function () {
					doneResizing();
				}, 300);
			});

			function doneResizing() {
				_helpers.Resp.isTablet === true ? self.state.scrollTrigger = 0 : self.state.scrollTrigger = 39;
			}
		}
	}, {
		key: 'fixHeader',
		value: function fixHeader() {
			var self = this;
			var header = document.querySelector('.js-header');
			_helpers.Resp.isTablet === true ? self.state.scrollTrigger = 0 : self.state.scrollTrigger = 39;

			window.onscroll = function () {
				var scrolled = window.pageYOffset || document.documentElement.scrollTop;

				if (scrolled > self.state.scrollTrigger) {
					header.classList.add("fixed");
				} else {
					header.classList.remove("fixed");
				}
			};
		}
	}, {
		key: 'toogleMenu',
		value: function toogleMenu() {
			var burger = document.querySelector('.js-burger');
			var mainMenu = document.querySelector(".main-nav");
			burger.addEventListener('click', function () {
				burger.classList.toggle("is-open");
				mainMenu.classList.toggle("menu-open");
			});
		}
	}, {
		key: 'scrollTo',
		value: function scrollTo(destination) {
			var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
			var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
			var callback = arguments[3];


			var start = window.pageYOffset;
			var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

			var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
			var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
			var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop - 100;
			var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

			if ('requestAnimationFrame' in window === false) {
				window.scroll(0, destinationOffsetToScroll);
				if (callback) {
					callback();
				}
				return;
			}

			function scroll() {
				var now = 'now' in window.performance ? performance.now() : new Date().getTime();
				var time = Math.min(1, (now - startTime) / duration);
				var timeFunction = _helpers.easings[easing](time);
				window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

				if (window.pageYOffset === destinationOffsetToScroll) {
					if (callback) {
						callback();
					}
					return;
				}

				requestAnimationFrame(scroll);
			}

			scroll();
		}
	}, {
		key: 'scrollInvoke',
		value: function scrollInvoke() {
			var _this = this;

			var links = document.querySelectorAll('.js-links');
			for (var index = 0; index < links.length; index++) {
				var el = links[index];
				el.addEventListener('click', function (e) {
					var scrollTargetEl = e.target.getAttribute('data-to');
					_this.scrollTo(document.getElementById(scrollTargetEl), 1500, 'easeOutQuint', function () {
						var openMenu = document.querySelector('.menu-open');
						var openBurger = document.querySelector('.js-burger');
						if (openMenu) {
							openBurger.click();
						}
					});
				});
			}
		}
	}, {
		key: 'inputFocus',
		value: function inputFocus() {
			var formInputs = document.querySelectorAll('.js-input');

			var _loop = function _loop(index) {
				var input = formInputs[index];
				input.addEventListener('focus', function () {
					input.parentNode.classList.add('is-focused');
				});
				input.addEventListener('blur', function () {
					if (input.value.length === 0) {
						input.parentNode.classList.remove('is-focused');
					}
				});

				if (input.value !== '') {
					input.parentNode.classList.add('is-focused');
				}
			};

			for (var index = 0; index < formInputs.length; index++) {
				_loop(index);
			}
		}
	}, {
		key: 'openTabs',
		value: function openTabs() {
			var btns = document.querySelectorAll('.js-open-tab');

			var _loop2 = function _loop2(index) {
				var btn = btns[index];
				var hiddenEl = btn.nextElementSibling;
				var controlEl = btn;
				if (hiddenEl.length < 1 || controlEl.length < 1) {
					return {
						v: void 0
					};
				}
				btn.addEventListener('click', function (e) {
					btn.classList.toggle('is-open');
					var elementClasses = (" " + hiddenEl.className + " ").replace(/[\n\t\r]/g, " "),
					    removeClass = "slide-down",
					    addClass = "slide-up",
					    isShowing = elementClasses.indexOf(" " + removeClass + " ") > -1;

					if (!isShowing) {
						removeClass = [addClass, addClass = removeClass][0];
					}
					hiddenEl.className = (elementClasses.replace(" " + removeClass + " ", "") + " " + addClass + " ").trim();

					return false;
				});
			};

			for (var index = 0; index < btns.length; index++) {
				var _ret2 = _loop2(index);

				if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
			}
		}
	}]);

	return Common;
}();

/** Export initialized common scripts by default */


exports.default = new Common();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Popup = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Website's popup scripts.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Popup
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _helpers = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Popup = exports.Popup = function () {
	/**
  * Cache data, make preparations and initialize popup scripts.
  */
	function Popup() {
		_classCallCheck(this, Popup);

		var self = this;
		this.state = {
			popup: null,
			animationInner: false,
			animationName: '',
			animatedElement: null,
			body: document.querySelector('body'),
			header: document.querySelector('header'),
			mainTag: document.querySelector('main')
		};

		document.addEventListener("DOMContentLoaded", function (event) {
			self.openModalWindow();
			self.closeModalWindow();
		});
	}

	_createClass(Popup, [{
		key: 'openModalWindow',
		value: function openModalWindow() {
			var self = this;
			var openBtn = document.querySelectorAll('.js-open-p');

			var _loop = function _loop(index) {
				var element = openBtn[index];
				element.addEventListener('click', function () {
					self.state.popup = document.querySelector('.' + element.getAttribute('data-open'));
					self.state.animationInner = self.state.popup.getAttribute('data-animate');

					if (self.state.animationInner === 'true') {

						self.state.animatedElement = self.state.popup.querySelector('[data-animation-name]');
						self.state.animationName = self.state.animatedElement.getAttribute('data-animation-name');

						setTimeout(function () {
							self.state.animatedElement.classList.add(self.state.animationName);
						}, 350);
					} else {
						self.state.animationInner = false;
					}

					if (self.state.popup) {
						(0, _helpers.fadeIn)(self.state.popup);
						self.fixScrollBody();
					}
				});
			};

			for (var index = 0; index < openBtn.length; index++) {
				_loop(index);
			}
		}
	}, {
		key: 'closeModalWindow',
		value: function closeModalWindow() {
			var self = this;
			var waitTime = void 0;
			var closeBtn = document.querySelectorAll('.js-close-popup');
			self.state.popup === '.success-popup' ? waitTime = 650 : waitTime = 350;

			for (var index = 0; index < closeBtn.length; index++) {
				var _element = closeBtn[index];
				_element.addEventListener('click', function () {
					self.state.animatedElement.classList.remove(self.state.animationName);
					setTimeout(function () {
						(0, _helpers.fadeOut)(self.state.popup);
						self.returnScrollBody();
					}, waitTime);
				});
			}
		}
	}, {
		key: 'fixScrollBody',
		value: function fixScrollBody() {
			var marginRight = window.innerWidth - this.state.body.offsetWidth;
			var paddingRight = window.innerWidth - this.state.body.offsetWidth;
			this.state.mainTag.style.paddingRight = paddingRight + 'px';
			this.state.header.style.paddingRight = paddingRight + 'px';
			this.state.body.style.overflow = 'hidden';
		}
	}, {
		key: 'returnScrollBody',
		value: function returnScrollBody() {
			this.state.body.style.overflow = '';
			this.state.mainTag.style.paddingRight = '';
			this.state.header.style.paddingRight = '';
		}
	}]);

	return Popup;
}();

/** Export initialized popup scripts by default */


exports.default = new Popup();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Form = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Website's form validation and submit scripts.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module Form
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Validators = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Form = exports.Form = function () {
	function Form() {
		_classCallCheck(this, Form);

		var self = this;
		this.state = {
			formValid: false,
			currentForm: null
		};

		document.addEventListener("DOMContentLoaded", function (event) {
			self.submitForm();
		});
	}

	_createClass(Form, [{
		key: 'validateFields',
		value: function validateFields(fields) {
			for (var index = 0; index < fields.length; index++) {
				var field = fields[index];
				var type = field.getAttribute('name');
				switch (type) {
					case 'name':
						_Validators.Validator.validateName(field);
						break;
					case 'email':
						_Validators.Validator.validateEmail(field);
						break;
					case 'password':
						_Validators.Validator.validatePassword(field);
						break;
					case 'privacy':
						_Validators.Validator.validatePrivacy(field);
						break;
					case 'password-repeat':
						_Validators.Validator.validateConfirmPassword(fields[1], fields[2]);
						break;
					case 'phone':
						_Validators.Validator.validatePhone(field, 7, 20);
						break;
					default:
						break;
				}
			}
			var fieldsArr = Array.prototype.slice.call(fields);

			function isValid(element, index, array) {
				return element.classList.contains('valid');
			}
			fieldsArr.every(isValid) === true ? this.formValid = true : this.formValid = false;
			if (this.formValid === true) {
				for (var _index = 0; _index < fieldsArr.length; _index++) {
					var element = fieldsArr[_index];
					var messege = element.parentNode.querySelector('.validate-message');
					messege.innerHTML = '';
				}
			}
		}
	}, {
		key: 'submitForm',
		value: function submitForm() {
			var _this = this;

			var $forms = document.querySelectorAll('.js-forms');
			for (var index = 0; index < $forms.length; index++) {
				var form = $forms[index];
				form.addEventListener('submit', function (event) {
					event.preventDefault();
					var btn = event.target.querySelector('button[type="submit"]');
					var fields = event.target.querySelectorAll('.js-validate');
					_this.validateFields(fields);
					console.log(_this.formValid);
					if (_this.formValid === true) {
						btn.removeAttribute('disabled');
						var $formdata = new FormData(event.target);
						var request = new XMLHttpRequest();
						// request.open("POST", "submitform.php");
						// request.send($formdata);
						var currentFormId = event.target.getAttribute('id');
						if (currentFormId === "callBackForm") {
							_this.successModal();
						} else if (currentFormId === "hasQuestion") {
							_this.successModal();
						} else if (currentFormId === "login-form") {
							alert('Вы успешно зашли!');
						} else {
							alert('Вы успешно зарегистрировались!');
						}
					}
				});
			}
		}
	}, {
		key: 'successModal',
		value: function successModal() {
			document.querySelector('.hideTrigger').click();
		}
	}]);

	return Form;
}();

/** Export initialized popup scripts by default */


exports.default = new Form();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = exports.Validator = function () {
	function Validator() {
		_classCallCheck(this, Validator);
	}

	_createClass(Validator, null, [{
		key: 'validateName',
		value: function validateName(firstName) {
			if (Validator.checkIfEmpty(firstName)) return;
			if (!Validator.checkIfOnlyLetters(firstName)) return;
			return true;
		}
		// static validateLastName(lastName) {
		// 	if (checkIfEmpty(lastName)) return;
		// 	if (checkIfOnlyLetters(lastName)) return;
		// 	return true;
		// }

	}, {
		key: 'validatePassword',
		value: function validatePassword(password) {
			var minLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
			var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

			if (Validator.checkIfEmpty(password)) return;
			if (Validator.meetLength(password, minLength, maxLength)) return;
			return true;
		}
	}, {
		key: 'validatePrivacy',
		value: function validatePrivacy(field) {
			if (field.checked !== true) {
				Validator.setInvalid(field, 'Это обязательное поле');
				return;
			} else {
				Validator.setValid(field);
			}
			return true;
		}
	}, {
		key: 'validateConfirmPassword',
		value: function validateConfirmPassword(password, confirmPassword) {
			if (!password.classList.contains('valid')) {
				Validator.setInvalid(confirmPassword, 'Пароль должен быть валидным');
				return;
			}
			if (password.value !== confirmPassword.value) {
				Validator.setInvalid(confirmPassword, 'Пароли должны совпадать');
				return;
			} else {
				Validator.setValid(confirmPassword);
			}
			return true;
		}
	}, {
		key: 'validateEmail',
		value: function validateEmail(email) {
			if (Validator.checkIfEmpty(email)) return;
			if (Validator.containsCharacters(email, 5)) return;
			return true;
		}
	}, {
		key: 'validatePhone',
		value: function validatePhone(phone) {
			var minLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
			var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

			if (Validator.checkIfEmpty(phone)) return;
			if (Validator.meetLength(phone, minLength, maxLength)) return;
			if (Validator.containsCharacters(phone, 6)) return;
			return true;
		}
	}, {
		key: 'checkIfEmpty',
		value: function checkIfEmpty(field) {
			if (Validator.isEmpty(field.value.trim())) {
				// set field invalid
				Validator.setInvalid(field, '\u042D\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435');
				return true;
			} else {
				// set field valid
				Validator.setValid(field);
				return false;
			}
		}
	}, {
		key: 'isEmpty',
		value: function isEmpty(value) {
			if (value === '') return true;
			return false;
		}
	}, {
		key: 'setValid',
		value: function setValid(field) {
			field.classList.remove('invalid');
			field.classList.add('valid');
			if (!field.name === 'privacy') {
				field.nextElementSibling.innerHTML = '';
			}
		}
	}, {
		key: 'checkIfOnlyLetters',
		value: function checkIfOnlyLetters(field) {
			if (/^[a-zA-Z ]+$/.test(field.value)) {
				Validator.setValid(field);
				return true;
			} else {
				Validator.setInvalid(field, '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u043A\u0432\u044B');
				return false;
			}
		}
	}, {
		key: 'meetLength',
		value: function meetLength(field, minLength, maxLength) {
			if (field.value.length >= minLength && field.value.length < maxLength) {
				Validator.setValid(field);
				return true;
			} else if (field.value.length < minLength) {
				Validator.setInvalid(field, '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C ' + minLength + ' \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
				return false;
			} else {
				Validator.setInvalid(field, '\u041F\u043E\u043B\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0447\u0435\u043C ' + maxLength + ' \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432');
				return false;
			}
		}
	}, {
		key: 'containsCharacters',
		value: function containsCharacters(field, code) {
			var regEx = void 0;
			switch (code) {
				case 1:
					// letters
					regEx = /(?=.*[a-zA-Z])/;
					return Validator.matchWithRegEx(regEx, field, 'Должен содержать как минимум 1 букву');
				case 2:
					// letter and numbers
					regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
					return Validator.matchWithRegEx(regEx, field, 'Должен содержать как минимум 1 букву и 1 цифру');
				case 3:
					// uppercase, lowercase and number
					regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
					return Validator.matchWithRegEx(regEx, field, 'Must contain at least one uppercase, one lowercase letter and one number');
				case 4:
					// uppercase, lowercase, number and special char
					regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
					return Validator.matchWithRegEx(regEx, field, 'Must contain at least one uppercase, one lowercase letter, one number and one special character');
				case 5:
					// Email pattern
					regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return Validator.matchWithRegEx(regEx, field, 'Должна быть валидная почта');
				case 6:
					// Phone pattern
					regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
					return Validator.matchWithRegEx(regEx, field, 'Должен содержать только номер');
				default:
					return false;
			}
		}
	}, {
		key: 'matchWithRegEx',
		value: function matchWithRegEx(regEx, field, message) {
			if (field.value.match(regEx)) {
				Validator.setValid(field);
				return true;
			} else {
				Validator.setInvalid(field, message);
				return false;
			}
		}
	}]);

	return Validator;
}();

Validator.setInvalid = function (field, message) {
	field.classList.remove('valid');
	field.classList.add('invalid');
	if (field.name === 'privacy') {
		field.parentNode.lastChild.innerHTML = message;
	} else {
		field.nextElementSibling.innerHTML = message;
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Home page scripts.
 *
 * @module Home
 */
var Home = function () {
	/**
  * Cache data, make preparations and initialize page scripts.
  */
	function Home() {
		_classCallCheck(this, Home);

		// initialize after construction
		this.init();
	}

	/**
  * Initialize Home page scripts.
  */


	_createClass(Home, [{
		key: "init",
		value: function init() {}
	}]);

	return Home;
}();

exports.default = Home;

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map