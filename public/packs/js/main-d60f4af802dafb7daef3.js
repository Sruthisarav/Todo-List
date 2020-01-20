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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/main.js":
/*!**************************************!*\
  !*** ./app/javascript/packs/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/sruthi/Desktop/Todo-List/app/javascript/packs/main.js: Unexpected reserved word 'let' (19:8)\n\n  17 |     };\n  18 |     ReactDOM.render(\n> 19 |         let sideBar;\n     |         ^\n  20 |         let backdrop;\n  21 |         if (this.state.sideBarOpen) {\n  22 |             sideBar = <Sidebar />;\n    at Object.raise (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:7013:17)\n    at Object.checkReservedWord (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10371:14)\n    at Object.parseIdentifierName (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10331:12)\n    at Object.parseIdentifier (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10303:23)\n    at Object.parseExprAtom (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9482:27)\n    at Object.parseExprAtom (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:4116:20)\n    at Object.parseExprSubscripts (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9219:23)\n    at Object.parseMaybeUnary (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9199:21)\n    at Object.parseExprOps (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9067:23)\n    at Object.parseMaybeConditional (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9040:23)\n    at Object.parseMaybeAssign (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9000:21)\n    at Object.parseExprListItem (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10295:18)\n    at Object.parseCallExpressionArguments (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9404:22)\n    at Object.parseSubscript (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9310:31)\n    at Object.parseSubscripts (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9240:19)\n    at Object.parseExprSubscripts (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9229:17)\n    at Object.parseMaybeUnary (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9199:21)\n    at Object.parseExprOps (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9067:23)\n    at Object.parseMaybeConditional (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9040:23)\n    at Object.parseMaybeAssign (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9000:21)\n    at Object.parseExpression (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:8950:23)\n    at Object.parseStatementContent (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10787:23)\n    at Object.parseStatement (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10658:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:11234:25)\n    at Object.parseBlockBody (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:11221:10)\n    at Object.parseBlock (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:11205:10)\n    at Object.parseFunctionBody (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10220:24)\n    at Object.parseArrowExpression (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:10177:10)\n    at Object.parseParenAndDistinguishExpression (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9806:12)\n    at Object.parseExprAtom (/Users/sruthi/Desktop/Todo-List/node_modules/@babel/parser/lib/index.js:9560:21)");

/***/ })

/******/ });
//# sourceMappingURL=main-d60f4af802dafb7daef3.js.map