"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Esquema y modelo de ususario usando mongoose en un entorno de desarrollo de JS

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ }),

/***/ 9784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5690);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);



async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }
    const { name , email , password  } = req.body;
    if (!name || !email || !email.includes("@") || !password || password.trim().length < 5) {
        res.status(422).json({
            message: "Validation error"
        });
        return;
    }
    await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.connect();
    const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.findOne({
        email: email
    });
    if (existingUser) {
        res.status(422).json({
            message: "User exists already!"
        });
        await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.disconnect();
        return;
    }
    const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z({
        name,
        email,
        password: bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hashSync(password),
        isAdmin: false
    });
    const user = await newUser.save();
    await _utils_db__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.disconnect();
    res.status(201).send({
        message: "Created user!",
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [690], () => (__webpack_exec__(9784)));
module.exports = __webpack_exports__;

})();