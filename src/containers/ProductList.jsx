import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import "@styles/ProductList.scss";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const API = "http://api.escuelajs.co/api/v1/products";
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

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
