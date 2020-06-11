import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const { countTotal, orderTotal } = useSelector(state => state.cart);
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">
          <h1 className="logo">Bookstore</h1>
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="nav nav-link btn btn-info m-3">
          <div className="">Home</div>
        </Link>
      </Nav>
      <Link to="/cart" className="nav nav-link cart m-3">
        <div>
          in cart <i />
          {countTotal} items ${orderTotal}
        </div>
      </Link>
    </Navbar>
  );
};

export default Header;
