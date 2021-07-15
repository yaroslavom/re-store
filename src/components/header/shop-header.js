import React from "react";
import "./shop-header.css";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <a className="logo text-dark text-decoration-none" href="#">
        ReStore
      </a>
      <a className="shopping-cart text-decoration-none">
        <i className="cart-icon fas fa-shopping-cart"></i>
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default ShopHeader;
