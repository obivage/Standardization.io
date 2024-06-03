import React from "react";
import visaInc from "../assets/visaInc.png";
import Paystack from "../assets/Paystack.png";
import Mastercard from "../assets/Mastercard.png";

import "./Payments.css";
import { useSelector } from "react-redux";
import { cart as cartItem, getTotalPrice } from "../app/slices/cartSplice";

const Payment = () => {
  const cart = useSelector(cartItem);
  const totalPrice = useSelector(getTotalPrice);
  const itemsLength = cart.length;
  return (
    <div className="shop-content-summary">
      <header className="shop-content-head">
        <h1 className="shop-header">Order Summary</h1>
        <span className="shop-head">{itemsLength} Items</span>
      </header>
      <div className="second-shop-content addTo">
        <h2 className="second-shop">Delivery Charges</h2>
        <p className="second-shop-p">
          Add your delivery address to checkout to see delivery charges.
        </p>
      </div>
      <div className="third-shop-content addTo">
        <h3 className="third-shop">Subtotal</h3>
        <span className="third-shop-p" style={{ paddingLeft: "5px" }}>
          N{totalPrice}
        </span>
      </div>
      <div className="four-shop-content addTo">
        <h4 className="four-shop">Total</h4>
        <span className="four-shop-p" style={{ paddingLeft: "5px" }}>
          N{totalPrice}
        </span>
      </div>
      <div className="shop-summary-content-p">
        <p className="summary-content-p">Excluding Delivery Charges</p>
      </div>
      <button className="summary-btn">Proceed to Checkout</button>
      <div className="summary-flex">
        <img src={Paystack} alt="payment picture" />
        <img src={visaInc} alt="payment picture" />
        <img src={Mastercard} alt="payment picture" />
      </div>
    </div>
  );
};

export default Payment;
