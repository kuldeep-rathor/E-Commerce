import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const Navbar = ({ onClickCart }) => {
  const { cart } = useContext(CartContext);

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          E-Commerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav justify-content-center align-item-center">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link active" href="#">
              Store
            </a>
            <a className="nav-link active" href="#">
              About
            </a>
          </div>
        </div>
      </div>
      <div className="cart-icon">
        <button type="button" className="btn btn-dark" onClick={onClickCart}>
          Cart {totalItemsInCart > 0 && <span>({totalItemsInCart})</span>}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
