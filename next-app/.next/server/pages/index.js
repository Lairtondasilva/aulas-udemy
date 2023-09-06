"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__]);\n([axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Home({ posts , initialLocale  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [locale, setLocale] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialLocale);\n    const handleChangeLocale = async (e)=>{\n        const newLocale = e.target.value;\n        js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\"locale\", newLocale);\n        setLocale(newLocale);\n        router.push(router.pathname, router.asPath.replace(`locale=${locale}`, `locale=${newLocale}`));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: locale,\n                onChange: handleChangeLocale,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"en\",\n                        children: \"English\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lndv\\\\Documents\\\\Aulas\\\\next-app\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"pt-BR\",\n                        children: \"Portugu\\xeas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lndv\\\\Documents\\\\Aulas\\\\next-app\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lndv\\\\Documents\\\\Aulas\\\\next-app\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: post.attributes.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lndv\\\\Documents\\\\Aulas\\\\next-app\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, post.attributes.id, false, {\n                    fileName: \"C:\\\\Users\\\\lndv\\\\Documents\\\\Aulas\\\\next-app\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lndv\\\\Documents\\\\Aulas\\\\next-app\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const initialLocale = context.req.headers.cookie?.split(\"; \").find((row)=>row.startsWith(\"locale=\"))?.split(\"=\")[1] || \"en\";\n    const headers = {\n        \"Accept-Language\": initialLocale\n    };\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`http://localhost:1337/api/posts?locale=${initialLocale}`, {\n            headers\n        });\n        const posts = response.data.data;\n        return {\n            props: {\n                posts,\n                initialLocale\n            }\n        };\n    } catch (error) {\n        console.error(error);\n        return {\n            props: {\n                posts: [],\n                initialLocale\n            }\n        };\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNkO0FBQ2tCO0FBQ1o7QUFFaEIsU0FBU0ssS0FBSyxFQUFFQyxNQUFLLEVBQUVDLGNBQWEsRUFBRSxFQUFFO0lBQ3JELE1BQU1DLFNBQVNSLHNEQUFTQTtJQUN4QixNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUNJO0lBRXJDLE1BQU1JLHFCQUFxQixPQUFNQyxJQUFLO1FBQ3BDLE1BQU1DLFlBQVlELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztRQUNoQ1gscURBQVcsQ0FBQyxVQUFVUztRQUN0QkgsVUFBVUc7UUFDVkwsT0FBT1MsSUFBSSxDQUFDVCxPQUFPVSxRQUFRLEVBQUVWLE9BQU9XLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFWCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRUksVUFBVSxDQUFDO0lBQzlGO0lBR0EscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ0M7Z0JBQU9QLE9BQU9OO2dCQUFRYyxVQUFVWjs7a0NBQy9CLDhEQUFDYTt3QkFBT1QsT0FBTTtrQ0FBSzs7Ozs7O2tDQUNuQiw4REFBQ1M7d0JBQU9ULE9BQU07a0NBQVE7Ozs7Ozs7Ozs7OztZQUV2QlQsTUFBTW1CLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1QsOERBQUNMOzhCQUNDLDRFQUFDTTtrQ0FBSUQsS0FBS0UsVUFBVSxDQUFDQyxLQUFLOzs7Ozs7bUJBRGxCSCxLQUFLRSxVQUFVLENBQUNFLEVBQUU7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7QUFFTSxlQUFlQyxtQkFBbUJDLE9BQU8sRUFBRTtJQUNoRCxNQUFNekIsZ0JBQWdCeUIsUUFBUUMsR0FBRyxDQUFDQyxPQUFPLENBQUNDLE1BQU0sRUFBRUMsTUFBTSxNQUNyREMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxVQUFVLENBQUMsYUFDMUJILE1BQU0sSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUNyQixNQUFNRixVQUFVO1FBQUUsbUJBQW1CM0I7SUFBYztJQUVuRCxJQUFJO1FBQ0YsTUFBTWlDLFdBQVcsTUFBTXZDLGlEQUFTLENBQUMsQ0FBQyx1Q0FBdUMsRUFBRU0sY0FBYyxDQUFDLEVBQUU7WUFBRTJCO1FBQVE7UUFDdEcsTUFBTTVCLFFBQVFrQyxTQUFTRSxJQUFJLENBQUNBLElBQUk7UUFDaEMsT0FBTztZQUFFQyxPQUFPO2dCQUFFckM7Z0JBQU9DO1lBQWM7UUFBRTtJQUMzQyxFQUFFLE9BQU9xQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxPQUFPO1lBQUVELE9BQU87Z0JBQUVyQyxPQUFPLEVBQUU7Z0JBQUVDO1lBQWM7UUFBRTtJQUMvQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcG9zdHMsIGluaXRpYWxMb2NhbGUgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW2xvY2FsZSwgc2V0TG9jYWxlXSA9IHVzZVN0YXRlKGluaXRpYWxMb2NhbGUpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUxvY2FsZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgY29uc3QgbmV3TG9jYWxlID0gZS50YXJnZXQudmFsdWVcclxuICAgIENvb2tpZXMuc2V0KCdsb2NhbGUnLCBuZXdMb2NhbGUpO1xyXG4gICAgc2V0TG9jYWxlKG5ld0xvY2FsZSlcclxuICAgIHJvdXRlci5wdXNoKHJvdXRlci5wYXRobmFtZSwgcm91dGVyLmFzUGF0aC5yZXBsYWNlKGBsb2NhbGU9JHtsb2NhbGV9YCwgYGxvY2FsZT0ke25ld0xvY2FsZX1gKSlcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzZWxlY3QgdmFsdWU9e2xvY2FsZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUxvY2FsZX0+XHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVuXCI+RW5nbGlzaDwvb3B0aW9uPlxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdC1CUlwiPlBvcnR1Z3XDqnM8L29wdGlvbj5cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3Bvc3QuYXR0cmlidXRlcy5pZH0+XHJcbiAgICAgICAgICA8aDI+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgaW5pdGlhbExvY2FsZSA9IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llPy5zcGxpdCgnOyAnKVxyXG4gICAgLmZpbmQocm93ID0+IHJvdy5zdGFydHNXaXRoKCdsb2NhbGU9JykpXHJcbiAgICA/LnNwbGl0KCc9JylbMV0gfHwgJ2VuJ1xyXG4gIGNvbnN0IGhlYWRlcnMgPSB7ICdBY2NlcHQtTGFuZ3VhZ2UnOiBpbml0aWFsTG9jYWxlIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjEzMzcvYXBpL3Bvc3RzP2xvY2FsZT0ke2luaXRpYWxMb2NhbGV9YCwgeyBoZWFkZXJzIH0pXHJcbiAgICBjb25zdCBwb3N0cyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdHMsIGluaXRpYWxMb2NhbGUgfSB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb3N0czogW10sIGluaXRpYWxMb2NhbGUgfSB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsIkhvbWUiLCJwb3N0cyIsImluaXRpYWxMb2NhbGUiLCJyb3V0ZXIiLCJsb2NhbGUiLCJzZXRMb2NhbGUiLCJoYW5kbGVDaGFuZ2VMb2NhbGUiLCJlIiwibmV3TG9jYWxlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXQiLCJwdXNoIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJyZXBsYWNlIiwiZGl2Iiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJtYXAiLCJwb3N0IiwiaDIiLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJpZCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJyZXEiLCJoZWFkZXJzIiwiY29va2llIiwic3BsaXQiLCJmaW5kIiwicm93Iiwic3RhcnRzV2l0aCIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsInByb3BzIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();