import React from "react";
import "./shopping-cart-table.css";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td scope="col">1</td>
            <td scope="col">Site Reliability Engineering</td>
            <td scope="col">2</td>
            <td scope="col">$40</td>
            <td scope="col">
                <button className="btn btn-outline-danger btn-sm">
                <i className="fas fa-trash"></i>
                </button>
                <button className="btn btn-outline-success btn-sm m-1 ">
                <i class="fas fa-plus-circle"></i>
                </button>
                <button className="btn btn-outline-warning btn-sm">
                <i class="fas fa-minus-circle"></i>
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
