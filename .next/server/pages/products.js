module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/swrHooks.ts":
/*!*************************!*\
  !*** ./lib/swrHooks.ts ***!
  \*************************/
/*! exports provided: useShirts, useShirt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShirts\", function() { return useShirts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShirt\", function() { return useShirt; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction fetcher(url) {\n  return window.fetch(url).then(res => res.json());\n}\n\nfunction useShirts() {\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/getShirts`, fetcher);\n  return {\n    shirts: data,\n    isLoading: !error && !data,\n    isError: error\n  };\n}\nfunction useShirt(id) {\n  return swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/getShirt?id=${id}`, fetcher);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3dySG9va3MudHM/MzVlZiJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNoaXJ0cyIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsInNoaXJ0cyIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJ1c2VTaGlydCIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBOEI7QUFDNUIsU0FBT0MsTUFBTSxDQUFDQyxLQUFQLENBQWFGLEdBQWIsRUFBa0JHLElBQWxCLENBQXdCQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFoQyxDQUFQO0FBQ0Q7O0FBRU0sU0FBU0MsU0FBVCxHQUFxQjtBQUMxQixRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFrQkMsMENBQU0sQ0FBRSxnQkFBRixFQUFtQlYsT0FBbkIsQ0FBOUI7QUFFQSxTQUFPO0FBQ0xXLFVBQU0sRUFBRUgsSUFESDtBQUVMSSxhQUFTLEVBQUUsQ0FBQ0gsS0FBRCxJQUFVLENBQUNELElBRmpCO0FBR0xLLFdBQU8sRUFBRUo7QUFISixHQUFQO0FBS0Q7QUFFTSxTQUFTSyxRQUFULENBQWtCQyxFQUFsQixFQUF5QztBQUM5QyxTQUFPTCwwQ0FBTSxDQUFFLG9CQUFtQkssRUFBRyxFQUF4QixFQUEyQmYsT0FBM0IsQ0FBYjtBQUNEIiwiZmlsZSI6Ii4vbGliL3N3ckhvb2tzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaGlydHMoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgL2FwaS9nZXRTaGlydHNgLCBmZXRjaGVyKTtcblxuICByZXR1cm4ge1xuICAgIHNoaXJ0czogZGF0YSxcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcbiAgICBpc0Vycm9yOiBlcnJvcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNoaXJ0KGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICByZXR1cm4gdXNlU1dSKGAvYXBpL2dldFNoaXJ0P2lkPSR7aWR9YCwgZmV0Y2hlcik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/swrHooks.ts\n");

/***/ }),

/***/ "./pages/products.tsx":
/*!****************************!*\
  !*** ./pages/products.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_swrHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/swrHooks */ \"./lib/swrHooks.ts\");\n\n\nvar _jsxFileName = \"/Users/rjfm/WebstormProjects/next/pages/products.tsx\";\n\n\n\nconst Products = () => {\n  const {\n    shirts,\n    isLoading,\n    isError\n  } = Object(_lib_swrHooks__WEBPACK_IMPORTED_MODULE_2__[\"useShirts\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: \"Loading\"\n    }, void 0, false), isError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: \"Hubo un error\"\n    }, void 0, false), shirts && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: shirts.map(shirt => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Nombre : \", shirt.nombre]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Precio : \", shirt.precio]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: [\"Caracteristicas : \", shirt.caracteristicas]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 17\n          }, undefined)]\n        }, shirt.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 15\n        }, undefined);\n      })\n    }, void 0, false)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy50c3g/YzNjYyJdLCJuYW1lcyI6WyJQcm9kdWN0cyIsInNoaXJ0cyIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJ1c2VTaGlydHMiLCJtYXAiLCJzaGlydCIsIm5vbWJyZSIsInByZWNpbyIsImNhcmFjdGVyaXN0aWNhcyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxhQUFWO0FBQXFCQztBQUFyQixNQUFpQ0MsK0RBQVMsRUFBaEQ7QUFFQSxzQkFDRTtBQUFBLGVBQ0dGLFNBQVMsaUJBQUk7QUFBQTtBQUFBLHFCQURoQixFQUVHQyxPQUFPLGlCQUFJO0FBQUE7QUFBQSxxQkFGZCxFQUdHRixNQUFNLGlCQUNMO0FBQUEsZ0JBQ0dBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFZQyxLQUFELElBQVc7QUFDckIsNEJBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsa0NBQ0U7QUFBQSxvQ0FBYUEsS0FBSyxDQUFDQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBLG9DQUFhRCxLQUFLLENBQUNFLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUEsNkNBQXNCRixLQUFLLENBQUNHLGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRjtBQUFBLFdBQXFCSCxLQUFLLENBQUNJLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFPRCxPQVJBO0FBREgscUJBSko7QUFBQSxrQkFERjtBQW1CRCxDQXRCRDs7QUF3QmVWLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2hpcnRzIH0gZnJvbSBcIi4uL2xpYi9zd3JIb29rc1wiO1xuXG5jb25zdCBQcm9kdWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyBzaGlydHMsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gdXNlU2hpcnRzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzTG9hZGluZyAmJiA8PkxvYWRpbmc8Lz59XG4gICAgICB7aXNFcnJvciAmJiA8Pkh1Ym8gdW4gZXJyb3I8Lz59XG4gICAgICB7c2hpcnRzICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7c2hpcnRzLm1hcCgoc2hpcnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e3NoaXJ0LmlkfT5cbiAgICAgICAgICAgICAgICA8cD5Ob21icmUgOiB7c2hpcnQubm9tYnJlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5QcmVjaW8gOiB7c2hpcnQucHJlY2lvfTwvcD5cbiAgICAgICAgICAgICAgICA8cD5DYXJhY3RlcmlzdGljYXMgOiB7c2hpcnQuY2FyYWN0ZXJpc3RpY2FzfTwvcD5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"swr\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzd3JcIj9jMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InN3ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3clwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///swr\n");

/***/ })

/******/ });