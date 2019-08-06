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
export const currentPage = document.querySelector('main').dataset.page;

/**
 * Match media device indicator.
 */
export class Resp {
	/**
	 * Get window's current width.
	 *
	 * @get
	 * @static
	 * @return {Number}
	 */
	static get currWidth() {
		return window.innerWidth;
	}

	/**
	 * Detect touch events.
	 *
	 * @get
	 * @static
	 * @return {Boolean}
	 */
	static get isTouch() {
		return 'ontouchstart' in window;
	}

	/**
	 * Detect desktop device.
	 *
	 * @get
	 * @static
	 * @return {Boolean}
	 */
	static get isDesk() {
		return window.matchMedia(`(min-width: 1280px)`).matches;
	}

	/**
	 * Detect tablet device.
	 *
	 * @get
	 * @static
	 * @return {Boolean}
	 */
	static get isTablet() {
		return window.matchMedia(`(max-width: 992px)`).matches;
	}

	/**
	 * Detect mobile device.
	 *
	 * @get
	 * @static
	 * @return {Boolean}
	 */
	static get isMobile() {
		return window.matchMedia(`(max-width: 767px)`).matches;
	}
}

/**
 * Css class names.
 *
 * @constant
 * @type {Object}
 */
export const css = {
	active: 'active'
};

/**
 * Generate string of random letters.
 *
 * @param {Number} length
 */
export const randomString = (length = 10) => Math.random().toString(36).substr(2, length > 10 ? length : 10);

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered.
 *
 * @param {Function} func
 * @param {Object} context
 * @param {Number} wait
 * @param {Boolean} [immediate]
 * @returns {Function}
 */
export const debounce = (func, context, wait, immediate) => {
	let timeout;

	return function () {
		const args = arguments;

		const later = () => {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export const fadeOut = (el) => {
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
};
export const fadeIn = (el, display) => {
	el.style.opacity = 0;
	el.style.display = display || "block";

	(function fade() {
		let val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
};


export const easings = {
	linear(t) {
		return t;
	},
	easeInQuad(t) {
		return t * t;
	},
	easeOutQuad(t) {
		return t * (2 - t);
	},
	easeInOutQuad(t) {
		return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
	},
	easeInCubic(t) {
		return t * t * t;
	},
	easeOutCubic(t) {
		return (--t) * t * t + 1;
	},
	easeInOutCubic(t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
	},
	easeInQuart(t) {
		return t * t * t * t;
	},
	easeOutQuart(t) {
		return 1 - (--t) * t * t * t;
	},
	easeInOutQuart(t) {
		return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
	},
	easeInQuint(t) {
		return t * t * t * t * t;
	},
	easeOutQuint(t) {
		return 1 + (--t) * t * t * t * t;
	},
	easeInOutQuint(t) {
		return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
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