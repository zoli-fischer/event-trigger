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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/index.js":
/*!***********************!*\
  !*** ../lib/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nmodule.exports = function (e) {\n  var t = {};function n(o) {\n    if (t[o]) return t[o].exports;var r = t[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;\n  }return n.m = e, n.c = t, n.d = function (e, t, o) {\n    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });\n  }, n.r = function (e) {\n    \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(e, \"__esModule\", { value: !0 });\n  }, n.t = function (e, t) {\n    if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && \"object\" == (typeof e === \"undefined\" ? \"undefined\" : _typeof(e)) && e && e.__esModule) return e;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, \"default\", { enumerable: !0, value: e }), 2 & t && \"string\" != typeof e) for (var r in e) {\n      n.d(o, r, function (t) {\n        return e[t];\n      }.bind(null, r));\n    }return o;\n  }, n.n = function (e) {\n    var t = e && e.__esModule ? function () {\n      return e.default;\n    } : function () {\n      return e;\n    };return n.d(t, \"a\", t), t;\n  }, n.o = function (e, t) {\n    return Object.prototype.hasOwnProperty.call(e, t);\n  }, n.p = \"\", n(n.s = 0);\n}([function (e, t, n) {\n  \"use strict\";\n  Object.defineProperty(t, \"__esModule\", { value: !0 });var o = function () {\n    function e(e, t) {\n      for (var n = 0; n < t.length; n++) {\n        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);\n      }\n    }return function (t, n, o) {\n      return n && e(t.prototype, n), o && e(t, o), t;\n    };\n  }(),\n      r = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n    return typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n  } : function (e) {\n    return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e === \"undefined\" ? \"undefined\" : _typeof(e);\n  };var i = function i() {\n    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {\n      t[n] = arguments[n];\n    }return t.reduce(function (e, t) {\n      return \"object\" === (void 0 === t ? \"undefined\" : r(t)) && Object.keys(t).forEach(function (n) {\n        e[n] = t[n];\n      }), e;\n    }, {});\n  },\n      l = function () {\n    function e() {\n      !function (e, t) {\n        if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n      }(this, e), this.____callbacks = [];\n    }return o(e, [{ key: \"on\", value: function value(e, t) {\n        var n = this,\n            o = e.split(\" \");return o.length > 1 ? o.forEach(function (e) {\n          n.on(e, t);\n        }) : (void 0 === this.____callbacks[e] && (this.____callbacks[e] = []), this.____callbacks[e].push(t)), this;\n      } }, { key: \"off\", value: function value(e, t) {\n        var n = this;if (void 0 === e) this.____callbacks[e] = [];else {\n          var o = e.split(\" \");if (o.length > 1) o.forEach(function (e) {\n            n.off(e, t);\n          });else if (void 0 !== this.____callbacks[e]) if (void 0 !== t) {\n            var r = this.____callbacks[e].indexOf(t);r > -1 && this.____callbacks[e].splice(r, 1);\n          } else this.____callbacks[e] = [];\n        }return this;\n      } }, { key: \"trigger\", value: function value() {\n        for (var t = this, n = arguments.length, o = Array(n), i = 0; i < n; i++) {\n          o[i] = arguments[i];\n        }if (o.length > 0) {\n          var l = void 0;if (\"object\" === r(o[0])) {\n            var u = o[0].type,\n                a = o[0];o[0] instanceof Array && (u = o[0][0], a = o[0][1]), (l = e.CustomEvent(u, { bubbles: !1, cancelable: !1 })).originalEvent = a;\n          } else (l = e.CustomEvent(o[0], { bubbles: !1, cancelable: !1 })).originalEvent = null;void 0 !== this.____callbacks[l.type] && (o.shift(), o.unshift(l), this.____callbacks[l.type].forEach(function (e) {\n            e.apply(t, o);\n          }));\n        }return this;\n      } }], [{ key: \"CustomEvent\", value: function value(e) {\n        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (t = i({ bubbles: !1, cancelable: !1, detail: void 0 }, t), \"function\" != typeof window) {\n          if (\"function\" == typeof window.CustomEvent) return new window.CustomEvent(e, t);var n = function n(t) {\n            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},\n                o = document.createEvent(\"CustomEvent\");return o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), o;\n          };return n.prototype = window.Event.prototype, n(e, t);\n        }return i({ type: e, originalEvent: null }, t);\n      } }]), e;\n  }();t.default = l;\n}]);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../lib/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _eventTrigger = __webpack_require__(/*! event-trigger */ \"../lib/index.js\");\n\nvar _eventTrigger2 = _interopRequireDefault(_eventTrigger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* Simple event */\nconsole.log('Simple event'); // import eventTrigger from 'event-trigger';\n\n\nvar event1 = new _eventTrigger2.default();\nevent1.on('start', function (event, data) {\n    console.log(event.type, data);\n    event1.trigger('stop', 'video');\n});\nevent1.on('stop', function (event, data) {\n    console.log(event.type, data);\n});\nevent1.trigger('start', 'video');\n\nconsole.log('');\n\n/* Multiple event deff event */\nconsole.log('Multiple event deff event');\n\nvar event2 = new _eventTrigger2.default();\nevent2.on('start stop', function (event, data) {\n    console.log(event.type, data);\n    if (event.type === 'start') {\n        event2.trigger('stop', 'video');\n    }\n});\nevent2.trigger('start', 'video');\n\nconsole.log('');\n\n/* Chained event deff event */\nconsole.log('Chained event deff event');\n\nvar event3 = new _eventTrigger2.default();\nevent3.on('start', function (event, data) {\n    console.log(event.type, data);\n    event3.trigger('stop', 'video');\n}).on('stop', function (event, data) {\n    console.log(event.type, data);\n});\nevent3.trigger('start', 'video');\n\nconsole.log('');\n\n/* Stop listening */\nconsole.log('Stop listening');\n\nvar event4 = new _eventTrigger2.default();\nevent4.on('start stop', function (event, data) {\n    console.log(event.type, data);\n    if (event.type === 'start') {\n        event4.trigger('stop', 'video');\n    }\n});\nevent4.trigger('start', 'video');\nevent4.off('start');\nevent4.trigger('start', 'video again');\nevent4.off();\nevent4.trigger('stop', 'stop again');\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });