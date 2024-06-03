import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { userO } from "react-icons-kit/fa/userO";
import { search } from "react-icons-kit/feather/search";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { heart } from "react-icons-kit/feather/heart";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import { socialYoutube } from "react-icons-kit/ionicons/socialYoutube";
import { phone } from "react-icons-kit/feather/phone";
import { mail } from "react-icons-kit/feather/mail";
import { instagram } from "react-icons-kit/feather/instagram";
import { facebook2 } from "react-icons-kit/icomoon/facebook2";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";

import "./Menu.css";
import { useSelector } from "react-redux";
import { cart as cartItems } from "../app/slices/cartSplice";

const Menu = () => {
  const cart = useSelector(cartItems);
  const cartLength = cart?.length;

  console.log(cartLength, cart);
  return (
    <div className="container-menu">
      <div>
        <div className="head-nav">
          <div className="reach-us">
            <div className="phone-us">
              <Icon icon={phone} className="phone" /> (225) 555-0118
            </div>
            <div className="mail-us">
              <Icon icon={mail} className="mail" /> michelle.rivera@example.com
            </div>
          </div>
          <p className="head-nav-p">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="all-media">
            Follow Us:{" "}
            <div>
              <Icon icon={instagram} />
            </div>{" "}
            <div>
              <Icon icon={socialYoutube} />
            </div>{" "}
            <div>
              <Icon icon={facebook2} />
            </div>{" "}
            <div>
              <Icon icon={socialTwitter} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav className="nav-bar">
          <h1 className="nav-header">Bandage</h1>
          <div className="hero-nav-text">
            <Link to="/">
              <h2 className="home-page">Home</h2>
            </Link>
            <Link to="/shop">
              <h3 className="cart-page">
                Shop
                <Icon icon={chevronDown} className="chevronDown" />
              </h3>
            </Link>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Pages</a>
          </div>
          <div className="hero-nav-link">
            <a href="#" className="hero-nav-link-user change-color">
              <Icon icon={userO} />
              <p className="nav-link-p ">Login / Register</p>
            </a>
            <a href="#" className="nav-link change-color">
              <Icon icon={search} />
            </a>
            <Link to="/cart" className="nav-link change-color">
              <Icon icon={shoppingCart} /> {cartLength ?? 0}
            </Link>

            <a href="#" className="nav-link change-color">
              <Icon icon={heart} /> 1
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
