"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 8880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
var next_default = /*#__PURE__*/__webpack_require__.n(next_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(76);
// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(5690);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js

// este modulo se utiliza para comparar contraseñas cifradas.

// Este módulo proporciona la funcionalidad de autenticación para Next.js.

// Este proveedor permite la autenticación basada en credenciales de usuario, como el correo electrónico y la contraseña.


// Este objeto contiene funciones para conectar y desconectar la base de datos.
// Codigo para configurar la autenticación de NextAuth usando el proveedor de credenciales CredentialsProvider y el metodo de autenticacion JSON Web Token
/* harmony default export */ const _nextauth_ = (next_default()({
    // Exporta por defecto una instancia de configuración de NextAuth.
    session: {
        strategy: "jwt"
    },
    // Configura la estrategia de sesión como "jwt" (JSON Web Token). Esto indica que se utilizarán tokens JWT para manejar las sesiones de autenticación.
    callbacks: {
        // Define callbacks para manipular los tokens y las sesiones.
        async jwt ({ token, user }) {
            // Este callback se llama al firmar y verificar tokens JWT. Aquí se agrega el campo _id y isAdmin al token JWT si existen en el objeto user.
            if (user?._id) token._id = user._id;
            if (user?.isAdmin) token.isAdmin = user.isAdmin;
            return token;
        },
        async session ({ session, token }) {
            // Este callback se llama para crear el objeto de sesión cuando un usuario inicia sesión. Aquí se agrega el campo _id y isAdmin al objeto de sesión si existen en el token JWT.
            if (token?._id) session.user._id = token._id;
            if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
            return session;
        }
    },
    providers: [
        // Define los proveedores de autenticación para NextAuth.
        credentials_default()({
            // Configura el proveedor de credenciales.
            async authorize (credentials) {
                // Este callback se llama al intentar autenticar a un usuario utilizando credenciales 
                // Aquí se realiza la verificación de las credenciales en la base de datos.
                await db/* default */.Z.connect();
                // Conecta a la base de datos antes de realizar la consulta.
                const user = await User/* default */.Z.findOne({
                    // Busca en la colección de usuarios el usuario con el correo electrónico proporcionado en las credenciales.
                    email: credentials.email
                });
                await db/* default */.Z.disconnect();
                // Desconecta de la base de datos después de realizar la consulta.
                if (user && external_bcryptjs_default().compareSync(credentials.password, user.password)) {
                    // Verifica si se encuentra un usuario y si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos utilizando bcryptjs.compareSync(). Si la verificación es exitosa, se devuelve un objeto con la información del usuario que se almacenará en el token JWT y se utilizará en la sesión.
                    return {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        image: "f",
                        isAdmin: user.isAdmin
                    };
                }
                throw new Error("Invalid email or password");
            }
        })
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [690], () => (__webpack_exec__(8880)));
module.exports = __webpack_exports__;

})();