import React from "react";

const Cart = ({ cartElements, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartElements.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="item-details">
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
