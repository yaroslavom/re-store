import React from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link to="/" className="text-decoration-none">
        <div className="logo text-dark">
          ReStore
        </div>
      </Link>
      <Link to="/cart" className="text-decoration-none shopping-cart">
        <div className="shopping-cart">
          <i className="cart-icon fas fa-shopping-cart"></i>
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
