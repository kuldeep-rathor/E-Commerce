import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} style={{ width: "50px" }} />
          <p>{item.title}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
