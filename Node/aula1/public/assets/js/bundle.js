/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mod1.js":
/*!*********************!*\
  !*** ./src/mod1.js ***!
  \*********************/
/***/ (function(module) {

var nome = "Lairton";
var sobrenome = "da Silva";
function falaNome() {
  return nome + " " + sobrenome;
}
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
this.falaNome = falaNome;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var _require = __webpack_require__(/*! ./mod1 */ "./src/mod1.js"),
  nome = _require.nome,
  sobrenome = _require.sobrenome,
  falaNome = _require.falaNome;
console.log(nome);
console.log(sobrenome);
console.log(falaNome());
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map