import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "@/utils/Store"; //para acceder al estado global de la app
import Product from "@/models/Product";
import db from "@/utils/db";


//componente Productscreen muestra los detalles de un producto especifico. 
export default function ProductScreen (props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  // state es el estado global de la app. dispatch se usa para enviar acciones para modificar el estado
  const router = useRouter();
  // se usa el hook useRouter para acceder al obj router que contiene info sobre la ruta actual
  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }



  const addToCartHandler = () => {
    // se ejecuta cuando se hace clic en el botón "Add to cart". Esta función agrega el producto al carrito de compras global almacenado en el estado state.cart y redirige al usuario a la página del carrito.
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if(product.countInStock < quantity){
      alert('Sorry. Product is out of stock');
      return;
    }


    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    // Retorna el JSX que se renderizará en el componente.
    <Layout title={product.name}>
       {/* Renderiza el componente Layout, pasando el nombre del producto como valor de la propiedad title. */}
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unavailable"}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context){
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product =  await Product.findOne({ slug }).lean();
  await db.disconnect();
  return{
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}


