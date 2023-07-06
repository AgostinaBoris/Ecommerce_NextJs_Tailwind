import React from "react";
import Link from "next/link";
import { useContext } from "react";
import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import { XCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

function CartScreen() {
  const router = useRouter();
  // Obtiene la instancia del enrutador mediante el hook useRouter. Se utiliza para redirigir al usuario a la página de inicio de sesión al hacer clic en el botón de pago.
  const { state, dispatch } = useContext(Store);
  // Utiliza el hook useContext para acceder al estado y al despachador del contexto Store. El estado se desestructura para obtener el arreglo cartItems.

  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    // Define la función removeItemHandler, que se ejecuta al hacer clic en el botón de eliminar un elemento del carrito. Utiliza el despachador para enviar una acción de tipo "CART_REMOVE_ITEM" con el elemento como carga útil.
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHandler = (item, qty) =>{
    // Define la función updateCartHandler, que se ejecuta al cambiar la cantidad de un elemento del carrito en el selector. Utiliza el despachador para enviar una acción de tipo "CART_ADD_ITEM" con el elemento actualizado y la nueva cantidad como carga útil.
    const quantity = Number(qty);
    dispatch({type:'CART_ADD_ITEM', payload:{...item, quantity}})
  }

  return (
    // renderiza la interfaz del carrito de compras.
    // Si cartItems está vacío, muestra un mensaje indicando que el carrito está vacío y proporciona un enlace para ir a la página de productos. Si cartItems contiene elementos, muestra una tabla con los elementos del carrito, incluyendo su imagen, nombre, cantidad, precio y un botón para eliminarlos También muestra el subtotal del carrito y un botón de "Check Out" que redirige al usuario a la página de inicio de sesión.
    <Layout title="Shopping Cart">
      <h1 className="flex justify-center py-8 mb-4 text-3xl bg-red-500 text-white">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="flex justify-center py-12 mb-4 text-xl">
          Cart is empty.
        
           <Link href="/"> Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        {item.name}
                      </Link>
                    </td>
                    <td className="p-5 text-black text-right">
                      <select
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartHandler(item, e.target.value)
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-center">
                      <button onClick={() => removeItemHandler(item)}>
                        <XCircleIcon className="h-5 w-5"></XCircleIcon>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push("login?redirect=/shipping")}
                  className="primary-button w-full"
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default dynamic(()=> Promise.resolve(CartScreen), {ssr:false})
// Exporta el componente CartScreen como una carga dinámica utilizando la función dynamic de Next.js. Esto significa que el componente no se renderizará en el lado del servidor (SSR) y se cargará dinámicamente en el lado del cliente.