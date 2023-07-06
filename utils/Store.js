import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();
// Crea  un contexto de React. Este contexto se utilizará para proporcionar y acceder al estado global de la aplicación.

const initialState = {
  cart: Cookies.get('cart')
    ? JSON.parse(Cookies.get('cart'))
    : { cartItems: [], shippingAddress: {}, paymentMethod: '' },
};

function reducer(state, action) {
  // toma un estado y una acción como argumentos y devuelve el nuevo estado modificado.
  // maneja las acciones relacionadas con el carrito de compras, como agregar y eliminar elementos del carrito. También actualiza la cookie "cart" con el estado actualizado del carrito.
  switch (action.type) {
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      );
      Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_RESET":
      return {
        ...state,
        cart: {
          cartItems: [],
          shippingAddress: { location: {} },
          paymentMethod: "",
        },
      };
      case 'CART_CLEAR_ITEMS':
        return {...state, cart: { ...state.cart, cartItems: [] } };

    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  // Exporta el componente funcional StoreProvider, que actúa como un proveedor de contexto para el contexto Store. Este componente envuelve a sus hijos con el contexto proporcionado por Store y gestiona el estado utilizando el reductor reducer.
  const [state, dispatch] = useReducer(reducer, initialState);
  // Utiliza el hook useReducer para inicializar el estado y el despachador del reductor. El estado se inicializa con initialState y cualquier acción posterior se pasa al reductor reducer para actualizar el estado.
  const value = { state, dispatch };
  // Crea un objeto value que contiene el estado y el despachador. Este objeto se utiliza para proporcionar acceso al estado y al despachador a través del contexto.
  return <Store.Provider value={value}>{children}</Store.Provider>;
  // Retorna el proveedor de contexto Store.Provider, que envuelve a los hijos proporcionados en children con el contexto Store y el valor value. Esto permite que los componentes hijos accedan al estado y al despachador a través del contexto Store.
}
