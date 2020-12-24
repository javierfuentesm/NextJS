module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card/ShirtCard.tsx":
/*!***************************************!*\
  !*** ./components/Card/ShirtCard.tsx ***!
  \***************************************/
/*! exports provided: ShirtCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ShirtCard\", function() { return ShirtCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/rjfm/WebstormProjects/next/components/Card/ShirtCard.tsx\";\n\n\nconst ShirtCard = ({\n  name,\n  description,\n  price,\n  image\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    src: `/${image}`,\n    wrapped: true,\n    ui: false\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Content, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Header, {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"date\",\n        children: \"Joined in 2015\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Description, {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Content, {\n    extra: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      name: \"money\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined), price]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQvU2hpcnRDYXJkLnRzeD8yMTJkIl0sIm5hbWVzIjpbIlNoaXJ0Q2FyZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxhQUFSO0FBQXFCQyxPQUFyQjtBQUE0QkM7QUFBNUIsQ0FBRCxrQkFDdkIscUVBQUMsc0RBQUQ7QUFBQSwwQkFDRSxxRUFBQyx1REFBRDtBQUFPLE9BQUcsRUFBRyxJQUFHQSxLQUFNLEVBQXRCO0FBQXlCLFdBQU8sTUFBaEM7QUFBaUMsTUFBRSxFQUFFO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHNEQUFELENBQU0sT0FBTjtBQUFBLDRCQUNFLHFFQUFDLHNEQUFELENBQU0sTUFBTjtBQUFBLGdCQUFjSDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxzREFBRCxDQUFNLElBQU47QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0UscUVBQUMsc0RBQUQsQ0FBTSxXQUFOO0FBQUEsZ0JBQW1CQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBU0UscUVBQUMsc0RBQUQsQ0FBTSxPQUFOO0FBQWMsU0FBSyxNQUFuQjtBQUFBLDRCQUNFLHFFQUFDLHNEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHQyxLQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkL1NoaXJ0Q2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBJY29uLCBJbWFnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuZXhwb3J0IGNvbnN0IFNoaXJ0Q2FyZCA9ICh7IG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSwgaW1hZ2UgfSkgPT4gKFxuICA8Q2FyZD5cbiAgICA8SW1hZ2Ugc3JjPXtgLyR7aW1hZ2V9YH0gd3JhcHBlZCB1aT17ZmFsc2V9IC8+XG4gICAgPENhcmQuQ29udGVudD5cbiAgICAgIDxDYXJkLkhlYWRlcj57bmFtZX08L0NhcmQuSGVhZGVyPlxuICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF0ZVwiPkpvaW5lZCBpbiAyMDE1PC9zcGFuPlxuICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICA8Q2FyZC5EZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgIDwvQ2FyZC5Db250ZW50PlxuICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICA8SWNvbiBuYW1lPVwibW9uZXlcIiAvPlxuICAgICAge3ByaWNlfVxuICAgIDwvQ2FyZC5Db250ZW50PlxuICA8L0NhcmQ+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card/ShirtCard.tsx\n");

/***/ }),

/***/ "./lib/swrHooks.ts":
/*!*************************!*\
  !*** ./lib/swrHooks.ts ***!
  \*************************/
/*! exports provided: useShirts, useShirt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShirts\", function() { return useShirts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useShirt\", function() { return useShirt; });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction fetcher(url) {\n  return window.fetch(url).then(res => res.json());\n}\n\nfunction useShirts() {\n  const {\n    data,\n    error\n  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/getShirts`, fetcher);\n  return {\n    shirts: data,\n    isLoading: !error && !data,\n    isError: error\n  };\n}\nfunction useShirt(id) {\n  return swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/getShirt?id=${id}`, fetcher);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3dySG9va3MudHM/MzVlZiJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInVzZVNoaXJ0cyIsImRhdGEiLCJlcnJvciIsInVzZVNXUiIsInNoaXJ0cyIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJ1c2VTaGlydCIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBOEI7QUFDNUIsU0FBT0MsTUFBTSxDQUFDQyxLQUFQLENBQWFGLEdBQWIsRUFBa0JHLElBQWxCLENBQXdCQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFoQyxDQUFQO0FBQ0Q7O0FBRU0sU0FBU0MsU0FBVCxHQUFxQjtBQUMxQixRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFrQkMsMENBQU0sQ0FBRSxnQkFBRixFQUFtQlYsT0FBbkIsQ0FBOUI7QUFFQSxTQUFPO0FBQ0xXLFVBQU0sRUFBRUgsSUFESDtBQUVMSSxhQUFTLEVBQUUsQ0FBQ0gsS0FBRCxJQUFVLENBQUNELElBRmpCO0FBR0xLLFdBQU8sRUFBRUo7QUFISixHQUFQO0FBS0Q7QUFFTSxTQUFTSyxRQUFULENBQWtCQyxFQUFsQixFQUF5QztBQUM5QyxTQUFPTCwwQ0FBTSxDQUFFLG9CQUFtQkssRUFBRyxFQUF4QixFQUEyQmYsT0FBM0IsQ0FBYjtBQUNEIiwiZmlsZSI6Ii4vbGliL3N3ckhvb2tzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmZ1bmN0aW9uIGZldGNoZXIodXJsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHdpbmRvdy5mZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaGlydHMoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgL2FwaS9nZXRTaGlydHNgLCBmZXRjaGVyKTtcblxuICByZXR1cm4ge1xuICAgIHNoaXJ0czogZGF0YSxcbiAgICBpc0xvYWRpbmc6ICFlcnJvciAmJiAhZGF0YSxcbiAgICBpc0Vycm9yOiBlcnJvcixcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNoaXJ0KGlkOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICByZXR1cm4gdXNlU1dSKGAvYXBpL2dldFNoaXJ0P2lkPSR7aWR9YCwgZmV0Y2hlcik7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/swrHooks.ts\n");

/***/ }),

/***/ "./pages/product/[id].tsx":
/*!********************************!*\
  !*** ./pages/product/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_swrHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/swrHooks */ \"./lib/swrHooks.ts\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Card_ShirtCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Card/ShirtCard */ \"./components/Card/ShirtCard.tsx\");\n\nvar _jsxFileName = \"/Users/rjfm/WebstormProjects/next/pages/product/[id].tsx\";\n\n\n\n\n\n\nconst ProductItem = () => {\n  const {\n    query: {\n      id\n    }\n  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    data: shirt,\n    error,\n    isValidating\n  } = Object(_lib_swrHooks__WEBPACK_IMPORTED_MODULE_3__[\"useShirt\"])(id);\n  if (error) return \"An error has occurred.\";\n  if (!shirt) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Dimmer\"], {\n    active: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Loader\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 7\n  }, undefined);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card_ShirtCard__WEBPACK_IMPORTED_MODULE_5__[\"ShirtCard\"], {\n      price: shirt.precio,\n      name: shirt.nombre,\n      description: shirt.caracteristicas,\n      image: shirt.imagen\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), \"Esta es la pagina del producto : \", id]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly50c3g/OWVkZCJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInF1ZXJ5IiwiaWQiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwic2hpcnQiLCJlcnJvciIsImlzVmFsaWRhdGluZyIsInVzZVNoaXJ0IiwicHJlY2lvIiwibm9tYnJlIiwiY2FyYWN0ZXJpc3RpY2FzIiwiaW1hZ2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFNO0FBQ0pDLFNBQUssRUFBRTtBQUFFQztBQUFGO0FBREgsTUFFRkMsNkRBQVMsRUFGYjtBQUdBLFFBQU07QUFBRUMsUUFBSSxFQUFFQyxLQUFSO0FBQWVDLFNBQWY7QUFBc0JDO0FBQXRCLE1BQXVDQyw4REFBUSxDQUFDTixFQUFELENBQXJEO0FBRUEsTUFBSUksS0FBSixFQUFXLE9BQU8sd0JBQVA7QUFDWCxNQUFJLENBQUNELEtBQUwsRUFDRSxvQkFDRSxxRUFBQyx3REFBRDtBQUFRLFVBQU0sRUFBRSxJQUFoQjtBQUFBLDJCQUNFLHFFQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRixzQkFDRSxxRUFBQywyREFBRDtBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQ0UsV0FBSyxFQUFFQSxLQUFLLENBQUNJLE1BRGY7QUFFRSxVQUFJLEVBQUVKLEtBQUssQ0FBQ0ssTUFGZDtBQUdFLGlCQUFXLEVBQUVMLEtBQUssQ0FBQ00sZUFIckI7QUFJRSxXQUFLLEVBQUVOLEtBQUssQ0FBQ087QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLHVDQU9vQ1YsRUFQcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQXhCRDs7QUEwQmVGLDBFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvZHVjdC9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU2hpcnQgfSBmcm9tIFwiQC9saWIvc3dySG9va3NcIjtcbmltcG9ydCB7IERpbW1lciwgTG9hZGVyLCBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IFNoaXJ0Q2FyZCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZC9TaGlydENhcmRcIjtcblxuY29uc3QgUHJvZHVjdEl0ZW0gPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBxdWVyeTogeyBpZCB9LFxuICB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YTogc2hpcnQsIGVycm9yLCBpc1ZhbGlkYXRpbmcgfSA9IHVzZVNoaXJ0KGlkKTtcblxuICBpZiAoZXJyb3IpIHJldHVybiBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZC5cIjtcbiAgaWYgKCFzaGlydClcbiAgICByZXR1cm4gKFxuICAgICAgPERpbW1lciBhY3RpdmU9e3RydWV9PlxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICA8L0RpbW1lcj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8U2hpcnRDYXJkXG4gICAgICAgIHByaWNlPXtzaGlydC5wcmVjaW99XG4gICAgICAgIG5hbWU9e3NoaXJ0Lm5vbWJyZX1cbiAgICAgICAgZGVzY3JpcHRpb249e3NoaXJ0LmNhcmFjdGVyaXN0aWNhc31cbiAgICAgICAgaW1hZ2U9e3NoaXJ0LmltYWdlbn1cbiAgICAgIC8+XG4gICAgICBFc3RhIGVzIGxhIHBhZ2luYSBkZWwgcHJvZHVjdG8gOiB7aWR9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

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