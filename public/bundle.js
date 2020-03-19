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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Volumes/Samsung_T5/bootCamp10/modulo04/src/index.js: Unexpected token (4:7)\\n\\n\\u001b[0m \\u001b[90m 2 | \\u001b[39m\\u001b[36mimport\\u001b[39m { render } from \\u001b[32m'react-dom'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 4 | \\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mHello\\u001b[39m \\u001b[33mWorld\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'app'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:7044:17)\\n    at Parser.unexpected (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:8422:16)\\n    at Parser.parseExprAtom (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9701:20)\\n    at Parser.parseExprSubscripts (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9287:23)\\n    at Parser.parseMaybeUnary (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9267:21)\\n    at Parser.parseExprOps (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9137:23)\\n    at Parser.parseMaybeConditional (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9110:23)\\n    at Parser.parseMaybeAssign (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9065:21)\\n    at Parser.parseExprListItem (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:10361:18)\\n    at Parser.parseCallExpressionArguments (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9468:22)\\n    at Parser.parseSubscript (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9374:31)\\n    at Parser.parseSubscripts (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9304:19)\\n    at Parser.parseExprSubscripts (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9293:17)\\n    at Parser.parseMaybeUnary (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9267:21)\\n    at Parser.parseExprOps (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9137:23)\\n    at Parser.parseMaybeConditional (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9110:23)\\n    at Parser.parseMaybeAssign (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9065:21)\\n    at Parser.parseExpression (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:9017:23)\\n    at Parser.parseStatementContent (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:10853:23)\\n    at Parser.parseStatement (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:10724:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:11298:25)\\n    at Parser.parseBlockBody (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:11285:10)\\n    at Parser.parseTopLevel (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:10655:10)\\n    at Parser.parse (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:12264:10)\\n    at parse (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/parser/lib/index.js:12315:38)\\n    at parser (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Volumes/Samsung_T5/bootCamp10/modulo04/node_modules/@babel/core/lib/transformation/index.js:31:50)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });