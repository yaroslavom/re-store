import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td>
                <button className="btn btn-outline-success btn-sm">
                <i class="fas fa-plus-circle"></i>
                </button>
                <button className="btn btn-outline-warning btn-sm mx-1">
                <i class="fas fa-minus-circle"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm">
                <i className="fas fa-trash"></i>
                </button>
            </td>
          </tr>
        </tbody>
      </table>

    <div className="total">
        Total: $201
    </div>
    </div>
  );
};

export default ShoppingCartTable;
