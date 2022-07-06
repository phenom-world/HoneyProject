import React, { useState, useEffect } from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import {
  MdShoppingCart,
  MdAccountBox,
  MdOutlineRestaurantMenu,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import { LOGOUT } from "../../constant/actionTypes";

import { Badge } from "@material-ui/core";

import "./navbar.css";

const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div className="nav">
      <div className="nav-icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
      <div className="nav-details">
        <div className="nav-details-bar">
          <h2 className="nav-details-logo" onClick={() => navigate("/")}>
            HONEY
          </h2>
        </div>
        <form className="form">
          <input
            className="nav-searchbar"
            placeholder="What are you getting today?"
            id="search-input"
            name="search-input"
            required
          />
          <button className="button">
            <img
              className="img"
              src="https://foods.farmcrowdy.com/assets/svg/search.svg"
            />
          </button>
        </form>

        <div className="nav-details-icons">
          <div>
            {user ? (
              <div className="nav-details-icons-user">
                <p>{user?.result?.fullName}</p>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <Link to="/login">
                <MdAccountBox />
              </Link>
            )}
          </div>

          <Badge badgeContent="1" color="secondary" overlap="rectangular">
            <Link to={user ? "/cart" : "/login"}>
              <MdShoppingCart />
            </Link>
          </Badge>
        </div>
        <div className="nav-smallscreen">
          <GiHamburgerMenu
            color="#FFA500"
            fontSize={30}
            margin={0}
            padding={0}
            onClick={() => {
              setToggleMenu(true);
            }}
          />

          {toggleMenu && (
            <div className="nav-smallscreen-overlay">
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
              <form className="smallscreen-form">
                <input
                  className="nav-searchbar"
                  placeholder="What are you getting today?"
                  id="search-input"
                  name="search-input"
                  required
                />
                <button className="button">
                  <img
                    className="img"
                    src="https://foods.farmcrowdy.com/assets/svg/search.svg"
                  />
                </button>
              </form>

              <div className="nav-details-icons-smallscreen">
                <div>
                  {user ? (
                    <div className="nav-details-icons-user">
                      <p>{user?.result?.fullName}</p>
                      <button onClick={logout}>Logout</button>
                    </div>
                  ) : (
                    <Link to="/login">
                      <MdAccountBox />
                    </Link>
                  )}
                </div>

                <Badge badgeContent="1" color="secondary" overlap="rectangular">
                  <Link to={user ? "/cart" : "/login"}>
                    <MdShoppingCart />
                  </Link>
                </Badge>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
