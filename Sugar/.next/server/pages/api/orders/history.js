"use strict";
(() => {
var exports = {};
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3632);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5690);



const handler = async (req, res)=>{
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({
        req
    });
    if (!session) {
        return res.status(401).send({
            message: "signin required"
        });
    }
    const { user  } = session;
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.connect();
    const orders = await _models_Order__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find({
        user: user._id
    });
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.disconnect();
    res.send(orders);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [690,632], () => (__webpack_exec__(1616)));
module.exports = __webpack_exports__;

})();