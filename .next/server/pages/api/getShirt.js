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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/getShirt.ts");
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

/***/ "./pages/api/getShirt.ts":
/*!*******************************!*\
  !*** ./pages/api/getShirt.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"./lib/db.ts\");\n\n\nconst handler = async (req, res) => {\n  console.log(req);\n  const {\n    id\n  } = req.query;\n\n  try {\n    if (!id) {\n      return res.status(400).json({\n        message: \"`id` required\"\n      });\n    } // @ts-ignore\n\n\n    if (typeof parseInt(id) !== \"number\") {\n      return res.status(400).json({\n        message: \"`id` must be a number\"\n      });\n    }\n\n    const results = await Object(_lib_db__WEBPACK_IMPORTED_MODULE_0__[\"query\"])(`\n      SELECT *\n      FROM playeras\n      WHERE id = ?\n    `, id);\n    return res.json(results[0]);\n  } catch (e) {\n    res.status(500).json({\n      message: e.message\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0U2hpcnQudHM/ZDA1MiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImlkIiwicXVlcnkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInBhcnNlSW50IiwicmVzdWx0cyIsImUiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxPQUF1QixHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsREMsU0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFDQSxRQUFNO0FBQUVJO0FBQUYsTUFBU0osR0FBRyxDQUFDSyxLQUFuQjs7QUFDQSxNQUFJO0FBQ0YsUUFBSSxDQUFDRCxFQUFMLEVBQVM7QUFDUCxhQUFPSCxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFyQixDQUFQO0FBQ0QsS0FIQyxDQUlGOzs7QUFDQSxRQUFJLE9BQU9DLFFBQVEsQ0FBQ0wsRUFBRCxDQUFmLEtBQXdCLFFBQTVCLEVBQXNDO0FBQ3BDLGFBQU9ILEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCLENBQVA7QUFDRDs7QUFDRCxVQUFNRSxPQUFPLEdBQUcsTUFBTUwscURBQUssQ0FDeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUwrQixFQU16QkQsRUFOeUIsQ0FBM0I7QUFTQSxXQUFPSCxHQUFHLENBQUNNLElBQUosQ0FBU0csT0FBTyxDQUFDLENBQUQsQ0FBaEIsQ0FBUDtBQUNELEdBbEJELENBa0JFLE9BQU9DLENBQVAsRUFBVTtBQUNWVixPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUVHLENBQUMsQ0FBQ0g7QUFBYixLQUFyQjtBQUNEO0FBQ0YsQ0F4QkQ7O0FBMEJlVCxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9nZXRTaGlydC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHF1ZXJ5IH0gZnJvbSBcIi4uLy4uL2xpYi9kYlwiO1xuXG5jb25zdCBoYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEpO1xuICBjb25zdCB7IGlkIH0gPSByZXEucXVlcnk7XG4gIHRyeSB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJgaWRgIHJlcXVpcmVkXCIgfSk7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAodHlwZW9mIHBhcnNlSW50KGlkKSAhPT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogXCJgaWRgIG11c3QgYmUgYSBudW1iZXJcIiB9KTtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgYFxuICAgICAgU0VMRUNUICpcbiAgICAgIEZST00gcGxheWVyYXNcbiAgICAgIFdIRVJFIGlkID0gP1xuICAgIGAsXG4gICAgICBpZFxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzLmpzb24ocmVzdWx0c1swXSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IGUubWVzc2FnZSB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/getShirt.ts\n");

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