import React from "react";
import ProductItem from "../components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";

import "@styles/ProductList.scss";

const API = "http://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const products = useGetProducts(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem
            price={product.price}
            productName={product.title}
            image={product.images[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
