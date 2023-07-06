import React from "react";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */


const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
    
      </Link>

    <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
                <h2 className="text-lg">{product.name}</h2>
        
        </Link>
        <p className="mb-2 py-2">{product.brand}</p>
        <p className="py-2 mb-2">${product.price}</p>
        <Link className="primary-button" href={`/product/${product.slug}`} type="button">
            Add to cart
        </Link>
    </div>

    </div>
  );
};

export default ProductItem;
