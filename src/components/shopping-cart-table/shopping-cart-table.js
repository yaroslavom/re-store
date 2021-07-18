import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.css";

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr className="text-center" key={id}>
        <td>{++idx}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i class="fas fa-plus-circle"></i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm mx-1"
          >
            <i class="fas fa-minus-circle"></i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  };
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
        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">${total}</div>
    </div>
  );
};

const mapStateToProps = ({ cartItems: items,
  orderTotal: total}) => {
  return {
    total, items 
  }
}; //Деструктурирующее присваивание

const mapDispatchToProps = () => {
  return {
    onIncrease: (id) => {
    console.log(`Increase ${id}`);
  },
  onDecrease: (id) => {
    console.log(`Decrease ${id}`);
  },
  onDelete: (id) => {
    console.log(`Delete ${id}`);
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
