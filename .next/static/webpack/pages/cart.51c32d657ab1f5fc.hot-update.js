"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var _DropdownLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropdownLink */ \"./components/DropdownLink.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Layout(param) {\n    let { title, children } = param;\n    var _session;\n    _s();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();\n    const { state, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_5__.Store);\n    const { cart } = state;\n    const [cartItemsCount, setCartItemsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCartItemsCount(cart.cartItems.reduce((a, c)=>a + c.quantity, 0));\n    }, [\n        cart.cartItems\n    ]);\n    const logoutClickHandler = ()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].remove(\"cart\");\n        dispatch({\n            type: \"CART_RESET\"\n        });\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signOut)({\n            callbbackUrl: \"/login\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: title ? title + \" -Sugar momma\" : \"Sugar momma\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Ecommerce Website\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"bottom-center\",\n                limit: 1\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col justify-between \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex h-12 items-center p-12 text-black text-xl shadow-2xl justify-between \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    className: \"text-2xl text-red-200 font-bold\",\n                                    children: \"Sugar Momma\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex px-12 text-gray-300 font-bold\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            className: \"p-4\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 13\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/about\",\n                                            className: \"p-4\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/cart\",\n                                            className: \"p-4\",\n                                            children: [\n                                                \"Cart\",\n                                                cartItemsCount > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \" flex ml-3 w-6 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white\",\n                                                    children: cartItemsCount\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 15\n                                        }, this),\n                                        status === \"loading\" ? \"Loading\" : ((_session = session) === null || _session === void 0 ? void 0 : _session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu, {\n                                            as: \"div\",\n                                            className: \"relative px-4 inline-block\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Button, {\n                                                    className: \"text-red-600\",\n                                                    children: session.user.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Items, {\n                                                    className: \"absolute right-0 w-56 origin-top-right bg-white shadow-lg\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/profile\",\n                                                                children: \"Profile\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                                lineNumber: 75,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownLink__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                                className: \"dropdown-link\",\n                                                                href: \"/order-history\",\n                                                                children: \"Order History\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 21\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Menu.Item, {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                                className: \"dropdown-link\",\n                                                                href: \"#\",\n                                                                onClick: logoutClickHandler,\n                                                                children: \"Logout\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                                lineNumber: 89,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 21\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/login\",\n                                            className: \"mt-4\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/contact\",\n                                            className: \"p-4\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: \"container m-auto mt-4 px-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\agost\\\\OneDrive\\\\Escritorio\\\\ECOMMERCE\\\\components\\\\Layout.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Layout, \"VfgPqudABR9Yqe3CkFIdj7CuBlw=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztpRUFPUCw4REFBQ3hCLGtEQUFJQTs0Q0FBQ2lDLE1BQUs7NENBQVNJLFdBQVU7c0RBQVE7Ozs7OztzREFLeEMsOERBQUNyQyxrREFBSUE7NENBQUNpQyxNQUFLOzRDQUFXSSxXQUFVO3NEQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNNUMsOERBQUNTO3dCQUFLVCxXQUFVO2tDQUE4QjNCOzs7Ozs7Ozs7Ozs7OztBQUl0RDtHQXZHd0JGOztRQUNZRCx1REFBVUE7OztLQUR0QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAL3V0aWxzL1N0b3JlXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IERyb3Bkb3duTGluayBmcm9tIFwiLi9Ecm9wZG93bkxpbmtcIjtcclxuaW1wb3J0IHsgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCB7IHN0YXR1cywgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuICBjb25zdCB7IGNhcnQgfSA9IHN0YXRlO1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXNDb3VudCwgc2V0Q2FydEl0ZW1zQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDYXJ0SXRlbXNDb3VudChjYXJ0LmNhcnRJdGVtcy5yZWR1Y2UoKGEsIGMpID0+IGEgKyBjLnF1YW50aXR5LCAwKSk7XHJcbiAgfSwgW2NhcnQuY2FydEl0ZW1zXSk7XHJcblxyXG4gIGNvbnN0IGxvZ291dENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIENvb2tpZXMucmVtb3ZlKFwiY2FydFwiKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQ0FSVF9SRVNFVFwiIH0pO1xyXG4gICAgc2lnbk91dCh7IGNhbGxiYmFja1VybDogXCIvbG9naW5cIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IHRpdGxlICsgXCIgLVN1Z2FyIG1vbW1hXCIgOiBcIlN1Z2FyIG1vbW1hXCJ9PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRWNvbW1lcmNlIFdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiIGxpbWl0PXsxfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBoLTEyIGl0ZW1zLWNlbnRlciBwLTEyIHRleHQtYmxhY2sgdGV4dC14bCBzaGFkb3ctMnhsIGp1c3RpZnktYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXJlZC0yMDAgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgU3VnYXIgTW9tbWFcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweC0xMiB0ZXh0LWdyYXktMzAwIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiIGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgQ2FydFxyXG4gICAgICAgICAgICAgICAge2NhcnRJdGVtc0NvdW50ID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggbWwtMyB3LTYgcm91bmRlZC1mdWxsIGJnLXJlZC02MDAgcHgtMiBweS0xIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FydEl0ZW1zQ291bnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG5cclxuICAgICAgICAgICAgICB7c3RhdHVzID09PSBcImxvYWRpbmdcIiA/IChcclxuICAgICAgICAgICAgICAgIFwiTG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgKSA6IHNlc3Npb24/LnVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTQgaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudS5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy01NiBvcmlnaW4tdG9wLXJpZ2h0IGJnLXdoaXRlIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIiBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL29yZGVyLWhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPcmRlciBIaXN0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17bG9nb3V0Q2xpY2tIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1zPlxyXG4gICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwibXQtNFwiID5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG0tYXV0byBtdC00IHB4LTRcIj57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkxpbmsiLCJUb2FzdENvbnRhaW5lciIsIk1lbnUiLCJTdG9yZSIsIkNvb2tpZXMiLCJEcm9wZG93bkxpbmsiLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkxheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJzZXNzaW9uIiwic3RhdHVzIiwiZGF0YSIsInN0YXRlIiwiZGlzcGF0Y2giLCJjYXJ0IiwiY2FydEl0ZW1zQ291bnQiLCJzZXRDYXJ0SXRlbXNDb3VudCIsImNhcnRJdGVtcyIsInJlZHVjZSIsImEiLCJjIiwicXVhbnRpdHkiLCJsb2dvdXRDbGlja0hhbmRsZXIiLCJyZW1vdmUiLCJ0eXBlIiwiY2FsbGJiYWNrVXJsIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJwb3NpdGlvbiIsImxpbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwibmF2IiwidXNlciIsImFzIiwiQnV0dG9uIiwiSXRlbXMiLCJJdGVtIiwib25DbGljayIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});