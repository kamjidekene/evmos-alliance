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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AppWrapper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nextjs-progressbar */ \"./node_modules/nextjs-progressbar/index.js\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction App(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"jsx-da31f61025088ed9\",\n        __source: {\n            fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                color: \"#29D\",\n                startPosition: 0.3,\n                stopDelayMs: 200,\n                height: 3,\n                showOnShallow: true,\n                __source: {\n                    fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n            }, pageProps, {\n                className: \"jsx-da31f61025088ed9\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\"),\n                __source: {\n                    fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: this\n            })),\n            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"da31f61025088ed9\",\n                __self: this,\n                children: \"@import url('https://fonts.googleapis.com/css2?family=Combo&display=swap');\\n:root {--gap:16pt;\\n--page-background-color:#000910;\\n--alt-background-color:grey;\\n--text-main-color:#fff;\\n--text-secondary-color:grey;\\n--z-index-modal:1000;\\n--z-index-header:100;\\n--accents-1:#f9fafc;\\n--accents-2:#eaeaea;\\n--accents-3:#999;\\n--accents-4:#888;\\n--accents-5:#666;\\n--accents-6:#444;\\n--accents-7:#333;\\n--accents-8:#111}\\nhtml, body {padding:0;\\nmargin:0;\\nscroll-behavior:smooth}\\n::-webkit-scrollbar {display:none}\\n::selection {color:#000;\\nbackground:#FFF}\\na {color:inherit;\\n-webkit-text-decoration:none;\\ntext-decoration:none}\\np a {text-decoration:underline}\\n* {box-sizing:border-box;\\n-webkit-font-smoothing:antialiased;\\n-moz-osx-font-smoothing:grayscale;\\nmargin:0;\\npadding:0}\\nbody {padding:0;\\nmargin:0;\\nmargin:0;\\npadding:0;\\nfont-size:15px;\\nfont-weight:400;\\nline-height:1.8;\\ncolor:var(--text-main-color);\\nbackground:var(--page-background-color);\\nfont-family:'Combo', cursive}\\n.appear {-webkit-animation:appear 0.35s ease-out forwards;\\nanimation:appear 0.35s ease-out forwards;\\n-webkit-transform:translateY(25%);\\n-moz-transform:translateY(25%);\\n-ms-transform:translateY(25%);\\ntransform:translateY(25%);\\nopacity:0}\\n.appear.d025 {animation-delay:0.25s}\\n.appear.d05 {animation-delay:0.5s}\\n.appear.d075 {animation-delay:0.75s}\\n.appear.d1 {animation-delay:1s}\\n.appear.d125 {animation-delay:1.25s}\\n.appear.d150 {animation-delay:1.5s}\\n@keyframes appear {to {opacity:1;\\n-webkit-transform:translateY(0);\\n-moz-transform:translateY(0);\\n-ms-transform:translateY(0);\\ntransform:translateY(0)}}\\n@media only screen and (max-width:600px) {body {font-size:13px}}\\nh1 {font-weight:700}\\np {margin-bottom:10px}\\n* {box-sizing:border-box}\\ninput {padding:15px;\\nborder:none}\\nimg {max-width:100%}\"\n            })\n        ]\n    }));\n}\n_c = App;\nfunction AppWrapper(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, _objectSpread({\n    }, props, {\n        __source: {\n            fileName: \"/Users/elvolution/Projects/Evmos-Alliance/pages/_app.tsx\",\n            lineNumber: 150,\n            columnNumber: 10\n        },\n        __self: this\n    })));\n};\n_c1 = AppWrapper;\nvar _c, _c1;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"AppWrapper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFckNDLEdBQUcsQ0FBQyxLQUFrQyxFQUFFLENBQUM7UUFBbkNDLFNBQVMsR0FBWCxLQUFrQyxDQUFoQ0EsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQWtDLENBQXJCQSxTQUFTO0lBQ2pDLE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7OztpRkFDREosMkRBQWE7Z0JBQ1pLLEtBQUssRUFBQyxDQUFNO2dCQUNaQyxhQUFhLEVBQUUsR0FBRztnQkFDbEJDLFdBQVcsRUFBRSxHQUFHO2dCQUNoQkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLGFBQWEsRUFBRSxJQUFJOzs7Ozs7OztpRkFFcEJQLFNBQVM7ZUFBS0MsU0FBUzsyREFBVEEsU0FBUyxJQUFUQSxTQUFTLHNCQUFUQSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUFzSTlCLENBQUM7S0FoSlFGLEdBQUc7QUFpSkcsUUFBUSxDQUFDUyxVQUFVLENBQUNDLEtBQVUsRUFBRSxDQUFDO0lBQzlDLE1BQU0sc0VBQUVWLEdBQUc7T0FBS1UsS0FBSzs7Ozs7Ozs7QUFDdkIsQ0FBQztNQUZ1QkQsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBOZXh0TnByb2dyZXNzIGZyb20gXCJuZXh0anMtcHJvZ3Jlc3NiYXJcIjtcblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5leHROcHJvZ3Jlc3NcbiAgICAgICAgY29sb3I9XCIjMjlEXCJcbiAgICAgICAgc3RhcnRQb3NpdGlvbj17MC4zfVxuICAgICAgICBzdG9wRGVsYXlNcz17MjAwfVxuICAgICAgICBoZWlnaHQ9ezN9XG4gICAgICAgIHNob3dPblNoYWxsb3c9e3RydWV9XG4gICAgICAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLy9AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3BhY2UrTW9ubzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwXCIpO1xuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db21ibyZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIC0tZ2FwOiAxNnB0O1xuICAgICAgICAgIC0tcGFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOTEwO1xuICAgICAgICAgIC0tYWx0LWJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgLS10ZXh0LW1haW4tY29sb3I6ICNmZmY7XG4gICAgICAgICAgLS10ZXh0LXNlY29uZGFyeS1jb2xvcjogZ3JleTtcblxuICAgICAgICAgIC0tei1pbmRleC1tb2RhbDogMTAwMDtcbiAgICAgICAgICAtLXotaW5kZXgtaGVhZGVyOiAxMDA7XG4gICAgICAgICAgLS1hY2NlbnRzLTE6ICNmOWZhZmM7XG4gICAgICAgICAgLS1hY2NlbnRzLTI6ICNlYWVhZWE7XG4gICAgICAgICAgLS1hY2NlbnRzLTM6ICM5OTk7XG4gICAgICAgICAgLS1hY2NlbnRzLTQ6ICM4ODg7XG4gICAgICAgICAgLS1hY2NlbnRzLTU6ICM2NjY7XG4gICAgICAgICAgLS1hY2NlbnRzLTY6ICM0NDQ7XG4gICAgICAgICAgLS1hY2NlbnRzLTc6ICMzMzM7XG4gICAgICAgICAgLS1hY2NlbnRzLTg6ICMxMTE7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW1haW4tY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb21ibycsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC5hcHBlYXJ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBhcHBlYXIgMC4zNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmFwcGVhci5kMDI1e1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG4gICAgICAgIH1cbiAgICAgICAgLmFwcGVhci5kMDV7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgICAgICB9XG4gICAgICAgIC5hcHBlYXIuZDA3NXtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNzVzO1xuICAgICAgICB9XG4gICAgICAgIC5hcHBlYXIuZDF7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcHBlYXIuZDEyNXtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFwcGVhci5kMTUwe1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS41cztcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgYXBwZWFye1xuICAgICAgICAgIHRve1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwV3JhcHBlcihwcm9wczogYW55KSB7XG4gIHJldHVybiA8QXBwIHsuLi5wcm9wc30gLz47XG59XG4iXSwibmFtZXMiOlsiTmV4dE5wcm9ncmVzcyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsImNvbG9yIiwic3RhcnRQb3NpdGlvbiIsInN0b3BEZWxheU1zIiwiaGVpZ2h0Iiwic2hvd09uU2hhbGxvdyIsIkFwcFdyYXBwZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});