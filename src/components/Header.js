import { IMG_LOGO_URL } from "../config";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg ">
      <img className="h-16 pl-2" alt="swiggy-logo" src={IMG_LOGO_URL} />
      <div className="nav-items">
        <ul className="flex py-8 ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <li>Cart</li>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <span>{isOnline ? "✅" : "🔴"}</span>
      <h1 className="p-10 font-bold text-red-800">{user.name}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login </button>
      )}
    </div>
  );
}

export default Header;
