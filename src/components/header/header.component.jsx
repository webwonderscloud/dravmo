import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import "./header.styles.scss";

const NavBar = ({ currentUser }) => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="options">
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        {currentUser ? (
          <div
            style={{ cursor: "pointer", display: "inline" }}
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
