import React, { Fragment , useState } from "react";
import Products from "./components/Layout/Products";
import Navbar from "./components/Layout/Navbar";
import Cart from "./components/Cart/Cart";
import { Modal } from "react-bootstrap";




const App = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  const removeFromCart = (index) => {
    // Implement the logic to remove an item from the cartElements array
    // Update the state accordingly
  };

  return (
    <Fragment>
       <Navbar onClickCart={handleShowCart} />
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart cartElements={cartElements} removeFromCart={removeFromCart} />
        </Modal.Body>
      </Modal>
      
      <Products items={productsArr} />
    </Fragment>
  );
};

export default App;
