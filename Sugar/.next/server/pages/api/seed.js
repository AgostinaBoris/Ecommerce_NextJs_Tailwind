"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
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

/***/ 5393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ seed)
});

// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(5690);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(76);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: ./utils/data.js

const data = {
    // objeto data contiene dos propiedades: usuarios y productos.
    users: [
        {
            name: "Agostina",
            email: "admin@example.com",
            password: external_bcryptjs_default().hashSync("123456"),
            isAdmin: true
        },
        {
            name: "Aldana",
            email: "user@example.com",
            password: external_bcryptjs_default().hashSync("123456"),
            isAdmin: false
        }
    ],
    products: [
        {
            name: "Hard Candy Sticks",
            slug: "hard-candies",
            category: "candies",
            image: "/images/pic40.jpg",
            price: 28.99,
            brand: "Gilliam",
            description: "Assorted sticks in one box is no longer an option.",
            countInStock: 20,
            rating: 3.5,
            numReviews: 7
        },
        {
            name: "Gummy Teeth Candy",
            slug: "gummy-teeth",
            category: "candies",
            image: "/images/pic19.avif",
            price: 24.99,
            brand: "Gummy",
            description: "These little gummy worms are cute and come in colors that are vibrant!",
            countInStock: 40,
            rating: 4.2,
            numReviews: 8
        },
        {
            name: "Gummy worms",
            slug: "gummy-worm",
            category: "candies",
            image: "/images/pic22.avif",
            price: 22.99,
            brand: "Gummy",
            description: "Are you an early bird?",
            countInStock: 30,
            rating: 5,
            numReviews: 8
        },
        {
            name: "Gummy Strawberries",
            slug: "gummy-strawberrie",
            category: "candies",
            image: "/images/pic12.avif",
            price: 24.99,
            brand: "Gummy",
            description: "Strawberry gummy candy brings summer vibes to bulk displays with its fruity aroma and red and green colors",
            countInStock: 76,
            rating: 4.5,
            numReviews: 10
        },
        {
            name: "Candy Hearts",
            slug: "hard-heart-candies",
            category: "candies",
            image: "/images/pic28.avif",
            price: 27.99,
            brand: "Ddl",
            description: "Individually wrapped vanilla caramels!",
            countInStock: 40,
            rating: 4.8,
            numReviews: 9
        },
        {
            name: "Rainbow Whirly Pops",
            slug: "rainbow-pops",
            category: "pops",
            image: "/images/pic25.avif",
            price: 2.93,
            brand: "whirly pop",
            description: "Diameter: 3 Inches Total Length: 7 Inches",
            countInStock: 50,
            rating: 5,
            numReviews: 15
        },
        {
            name: "Gummy Teddy Bears",
            slug: "gummy-bears",
            category: "candies",
            image: "/images/pic3.avif",
            price: 20.93,
            brand: "whirly pop",
            description: "Diameter: 3 Inches Total Length: 7 Inches",
            countInStock: 50,
            rating: 5,
            numReviews: 15
        },
        {
            name: "Rainbow gummy candies",
            slug: "gummy-rainbow",
            category: "candies",
            image: "/images/pic13.avif",
            price: 2.93,
            brand: "whirly pop",
            description: "Diameter: 3 Inches Total Length: 7 Inches",
            countInStock: 50,
            rating: 5,
            numReviews: 15
        }
    ]
};
/* harmony default export */ const utils_data = (data);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(2663);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./models/Product.js
// Esquema y modelo de ususario usando mongoose en un entorno de desarrollo de JS

const productSchema = new (external_mongoose_default()).Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Product = (external_mongoose_default()).models.Product || external_mongoose_default().model("Product", productSchema);
/* harmony default export */ const models_Product = (Product);

;// CONCATENATED MODULE: ./pages/api/seed.js




// Controlador que realiza un llenado inicial de datos en la bd.
// Elimina los datos existentes y la llena con nuevos datos de prueba para las colecciones de usuarios y productos. se usa para establecer un estado inicial de bd antes de ejecutar la app.
const handler = async (req, res)=>{
    await db/* default */.Z.connect();
    await User/* default */.Z.deleteMany();
    await User/* default */.Z.insertMany(utils_data.users);
    await models_Product.deleteMany();
    await models_Product.insertMany(utils_data.products);
    await db/* default */.Z.disconnect();
    res.send({
        message: "seeded successfully"
    });
};
/* harmony default export */ const seed = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [690], () => (__webpack_exec__(5393)));
module.exports = __webpack_exports__;

})();