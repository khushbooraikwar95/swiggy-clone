import { IMG_LOGO_URL } from "../config";
import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return true;
};

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <img className="logo" alt="swiggy-logo" src={IMG_LOGO_URL} />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <li>Cart</li>
          <Link to="/contact">
            <li>Contact</li>{" "}
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login </button>
      )}
    </div>
  );
}

export default Header;
