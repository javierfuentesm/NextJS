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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getShirts.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/*! exports provided: db, query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"db\", function() { return db; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"query\", function() { return query; });\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serverless-mysql */ \"serverless-mysql\");\n/* harmony import */ var serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serverless_mysql__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = serverless_mysql__WEBPACK_IMPORTED_MODULE_0___default()({\n  config: {\n    host: process.env.MYSQL_HOST,\n    database: process.env.MYSQL_DATABASE,\n    user: process.env.MYSQL_USERNAME,\n    password: process.env.MYSQL_PASSWORD\n  }\n});\nasync function query(q, values = []) {\n  try {\n    const results = await db.query(q, values);\n    await db.end();\n    return results;\n  } catch (e) {\n    throw Error(e.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGIudHM/NTVkNyJdLCJuYW1lcyI6WyJkYiIsIm15c3FsIiwiY29uZmlnIiwiaG9zdCIsInByb2Nlc3MiLCJlbnYiLCJNWVNRTF9IT1NUIiwiZGF0YWJhc2UiLCJNWVNRTF9EQVRBQkFTRSIsInVzZXIiLCJNWVNRTF9VU0VSTkFNRSIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJxdWVyeSIsInEiLCJ2YWx1ZXMiLCJyZXN1bHRzIiwiZW5kIiwiZSIsIkVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsRUFBRSxHQUFHQyx1REFBSyxDQUFDO0FBQ3RCQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFEWjtBQUVOQyxZQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxjQUZoQjtBQUdOQyxRQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxjQUhaO0FBSU5DLFlBQVEsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPO0FBSmhCO0FBRGMsQ0FBRCxDQUFoQjtBQVNBLGVBQWVDLEtBQWYsQ0FDTEMsQ0FESyxFQUVMQyxNQUE2QyxHQUFHLEVBRjNDLEVBR0w7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHLE1BQU1oQixFQUFFLENBQUNhLEtBQUgsQ0FBU0MsQ0FBVCxFQUFZQyxNQUFaLENBQXRCO0FBQ0EsVUFBTWYsRUFBRSxDQUFDaUIsR0FBSCxFQUFOO0FBQ0EsV0FBT0QsT0FBUDtBQUNELEdBSkQsQ0FJRSxPQUFPRSxDQUFQLEVBQVU7QUFDVixVQUFNQyxLQUFLLENBQUNELENBQUMsQ0FBQ0UsT0FBSCxDQUFYO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL2xpYi9kYi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBteXNxbCBmcm9tIFwic2VydmVybGVzcy1teXNxbFwiO1xuXG5leHBvcnQgY29uc3QgZGIgPSBteXNxbCh7XG4gIGNvbmZpZzoge1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFLFxuICAgIHVzZXI6IHByb2Nlc3MuZW52Lk1ZU1FMX1VTRVJOQU1FLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnkoXG4gIHE6IHN0cmluZyxcbiAgdmFsdWVzOiAoc3RyaW5nIHwgbnVtYmVyKVtdIHwgc3RyaW5nIHwgbnVtYmVyID0gW11cbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBkYi5xdWVyeShxLCB2YWx1ZXMpO1xuICAgIGF3YWl0IGRiLmVuZCgpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgRXJyb3IoZS5tZXNzYWdlKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/db.ts\n");

/***/ }),

/***/ "./pages/api/getShirts.ts":
/*!********************************!*\
  !*** ./pages/api/getShirts.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"./lib/db.ts\");\n\n\nconst handler = async (_, res) => {\n  try {\n    const results = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"query\"])(`\n      SELECT * FROM playeras\n      ORDER BY id DESC\n     \n  `);\n    return res.json(results);\n  } catch (e) {\n    res.status(500).json({\n      message: e.message\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0U2hpcnRzLnRzPzQxZDkiXSwibmFtZXMiOlsiaGFuZGxlciIsIl8iLCJyZXMiLCJyZXN1bHRzIiwicXVlcnkiLCJqc29uIiwiZSIsInN0YXR1cyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxPQUF1QixHQUFHLE9BQU9DLENBQVAsRUFBVUMsR0FBVixLQUFrQjtBQUNoRCxNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLHFEQUFLLENBQUU7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FKK0IsQ0FBM0I7QUFNQSxXQUFPRixHQUFHLENBQUNHLElBQUosQ0FBU0YsT0FBVCxDQUFQO0FBQ0QsR0FSRCxDQVFFLE9BQU9HLENBQVAsRUFBVTtBQUNWSixPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFFRyxhQUFPLEVBQUVGLENBQUMsQ0FBQ0U7QUFBYixLQUFyQjtBQUNEO0FBQ0YsQ0FaRDs7QUFjZVIsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2V0U2hpcnRzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgcXVlcnkgfSBmcm9tIFwiLi4vLi4vbGliL2RiXCI7XG5cbmNvbnN0IGhhbmRsZXI6IE5leHRBcGlIYW5kbGVyID0gYXN5bmMgKF8sIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBxdWVyeShgXG4gICAgICBTRUxFQ1QgKiBGUk9NIHBsYXllcmFzXG4gICAgICBPUkRFUiBCWSBpZCBERVNDXG4gICAgIFxuICBgKTtcblxuICAgIHJldHVybiByZXMuanNvbihyZXN1bHRzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogZS5tZXNzYWdlIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/getShirts.ts\n");

/***/ }),

/***/ "serverless-mysql":
/*!***********************************!*\
  !*** external "serverless-mysql" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serverless-mysql\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZXJsZXNzLW15c3FsXCI/N2ZmOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzZXJ2ZXJsZXNzLW15c3FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VydmVybGVzcy1teXNxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///serverless-mysql\n");

/***/ })

/******/ });