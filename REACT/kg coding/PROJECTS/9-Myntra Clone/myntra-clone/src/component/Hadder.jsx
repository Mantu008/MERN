import React from "react";
import { IoMdPerson } from "react-icons/io";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hadder = () => {
  const navigate = useNavigate();
  const bag = useSelector((store) => store.bag);
  const bagSize = bag.length;
  return (
    <div>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="/images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
        </div>

        <nav className="nav_bar">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/">Home & Living</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/studio">
            Studio <sup>New</sup>
          </Link>
        </nav>

        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="action_bar">
          <div
            className="action_container"
            onClick={() => navigate("/profile")}
          >
            <IoMdPerson />
            <span className="action_name">Profile</span>
          </div>

          <div
            className="action_container"
            onClick={() => navigate("/wishlist")}
          >
            <FaRegFaceGrinHearts />
            <span className="action_name">Wishlist</span>
          </div>

          <div className="action_container" onClick={() => navigate("/bag")}>
            <FaShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bagSize}</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hadder;
