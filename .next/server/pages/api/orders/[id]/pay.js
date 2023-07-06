"use strict";
(() => {
var exports = {};
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 614:
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ 8772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);
/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3632);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5690);



const handler = async (req, res)=>{
    const user = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({
        req
    });
    if (!user) {
        return res.status(401).send("Error: signin required");
    }
    await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.connect();
    const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.findById(req.query.id);
    if (order) {
        if (order.isPaid) {
            return res.status(400).send({
                message: "Error: order is already paid"
            });
        }
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            email_address: req.body.email_address
        };
        const paidOrder = await order.save();
        await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.disconnect();
        res.send({
            message: "order paid successfully",
            order: paidOrder
        });
    } else {
        await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.disconnect();
        res.status(404).send({
            message: "Error: order not found"
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [690,632], () => (__webpack_exec__(8772)));
module.exports = __webpack_exports__;

})();