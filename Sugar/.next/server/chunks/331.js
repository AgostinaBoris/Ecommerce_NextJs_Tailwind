"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 2331:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ StoreProvider),
/* harmony export */   y: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// Crea  un contexto de React. Este contexto se utilizará para proporcionar y acceder al estado global de la aplicación.
const initialState = {
    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("cart") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("cart")) : {
        cartItems: [],
        shippingAddress: {},
        paymentMethod: ""
    }
};
function reducer(state, action) {
    // toma un estado y una acción como argumentos y devuelve el nuevo estado modificado.
    // maneja las acciones relacionadas con el carrito de compras, como agregar y eliminar elementos del carrito. También actualiza la cookie "cart" con el estado actualizado del carrito.
    switch(action.type){
        case "CART_ADD_ITEM":
            {
                const newItem = action.payload;
                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);
                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [
                    ...state.cart.cartItems,
                    newItem
                ];
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("cart", JSON.stringify({
                    ...state.cart,
                    cartItems
                }));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_REMOVE_ITEM":
            {
                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);
                js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].set("cart", JSON.stringify({
                    ...state.cart,
                    cartItems
                }));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_RESET":
            return {
                ...state,
                cart: {
                    cartItems: [],
                    shippingAddress: {
                        location: {}
                    },
                    paymentMethod: ""
                }
            };
        case "CART_CLEAR_ITEMS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: []
                }
            };
        case "SAVE_SHIPPING_ADDRESS":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingAddress: {
                        ...state.cart.shippingAddress,
                        ...action.payload
                    }
                }
            };
        case "SAVE_PAYMENT_METHOD":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    paymentMethod: action.payload
                }
            };
        default:
            return state;
    }
}
function StoreProvider({ children  }) {
    // Exporta el componente funcional StoreProvider, que actúa como un proveedor de contexto para el contexto Store. Este componente envuelve a sus hijos con el contexto proporcionado por Store y gestiona el estado utilizando el reductor reducer.
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    // Utiliza el hook useReducer para inicializar el estado y el despachador del reductor. El estado se inicializa con initialState y cualquier acción posterior se pasa al reductor reducer para actualizar el estado.
    const value = {
        state,
        dispatch
    };
    // Crea un objeto value que contiene el estado y el despachador. Este objeto se utiliza para proporcionar acceso al estado y al despachador a través del contexto.
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Store.Provider, {
        value: value,
        children: children
    });
// Retorna el proveedor de contexto Store.Provider, que envuelve a los hijos proporcionados en children con el contexto Store y el valor value. Esto permite que los componentes hijos accedan al estado y al despachador a través del contexto Store.
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;