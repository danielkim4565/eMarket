"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n\n\n\n\n\nconst CurrentUser = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);\nconst AppComponent = (param)=>{\n    let { Component , pageProps , currentUser  } = param;\n    console.log(currentUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CurrentUser.Provider, {\n        value: currentUser,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daniel Kim\\\\Documents\\\\myProjects\\\\eMarket\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daniel Kim\\\\Documents\\\\myProjects\\\\eMarket\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Daniel Kim\\\\Documents\\\\myProjects\\\\eMarket\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AppComponent;\nAppComponent.getInitialProps = async (ctx)=>{\n    try {\n        // const response = await axios.get(`http://${process.env.NEXT_PUBLIC_API_ADDRESS}/api/users/currentUser`)\n        // return response.data;\n        return {\n            currentUser: \"someone\",\n            id: 3\n        };\n    } catch (err) {\n        console.log(err);\n        return null;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);\nvar _c;\n$RefreshReg$(_c, \"AppComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUNoQjtBQUN3QjtBQUNUO0FBRXpDLE1BQU1JLDRCQUFjSCxvREFBYUEsQ0FBQyxJQUFJO0FBR3RDLE1BQU1JLGVBQWUsU0FBMkM7UUFBMUMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUVDLFlBQVcsRUFBRTtJQUN2REMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNJLDhEQUFDSixZQUFZTyxRQUFRO1FBQUNDLE9BQU9KOzswQkFDekIsOERBQUNMLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNHO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OztZQUFJOzs7Ozs7O0FBR3hDO0tBUk1GO0FBVU5BLGFBQWFRLGVBQWUsR0FBRyxPQUFPQyxNQUFRO0lBQzFDLElBQUk7UUFDQSwwR0FBMEc7UUFDMUcsd0JBQXdCO1FBQ3hCLE9BQU87WUFBRU4sYUFBYTtZQUFXTyxJQUFJO1FBQUU7SUFDM0MsRUFBRSxPQUFPQyxLQUFJO1FBQ1RQLFFBQVFDLEdBQUcsQ0FBQ007UUFDWixPQUFPLElBQUk7SUFDZjtBQUNKO0FBRUEsK0RBQWVYLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2YmFyJ1xyXG5cclxuY29uc3QgQ3VycmVudFVzZXIgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuXHJcbmNvbnN0IEFwcENvbXBvbmVudCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBjdXJyZW50VXNlciB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEN1cnJlbnRVc2VyLlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50VXNlcn0+IFxyXG4gICAgICAgICAgICA8TmF2QmFyPjwvTmF2QmFyPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG4gICAgICAgIDwvQ3VycmVudFVzZXIuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbkFwcENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQUREUkVTU30vYXBpL3VzZXJzL2N1cnJlbnRVc2VyYClcclxuICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4geyBjdXJyZW50VXNlcjogJ3NvbWVvbmUnLCBpZDogMyB9XHJcbiAgICB9IGNhdGNoIChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcENvbXBvbmVudFxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIk5hdkJhciIsIkN1cnJlbnRVc2VyIiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImlkIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});