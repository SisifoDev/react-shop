import React, { useState } from "react";
import "@styles/ProductItem.scss";

import btAddToCart from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ price, productName, image }) => {
  const [cart, setCart] = useState([]);

  const handleClick = () => {
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img src={image} alt="" />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{productName}</p>
        </div>
        <figure onClick={handleClick}>
          <img src={btAddToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
