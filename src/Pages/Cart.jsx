import React from "react";
import { decrementCart, removeFromCart } from "../app/slices/cartSplice";
import { incrementCart } from "../app/slices/cartSplice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import { Icon } from "react-icons-kit";
import { starFullOutline } from "react-icons-kit/typicons/starFullOutline";
import { trash2 } from "react-icons-kit/feather/trash2";

// import changeTwo from "../assets/changeTwo.png";
import Payment from "../components/Payment";
import Products from "../components/Products";

import "./Cart.css";
import { useSelector } from "react-redux";
import { cart as cartItem } from "../app/slices/cartSplice";

const Cart = () => {
  const cart = useSelector(cartItem);
  const dispatch = useDispatch();
  return (
    <div className="">
      <section className="shop">
        <div className="shop-contanier">
          <div className="shop-content-product">
            <header className="shop-product-header">Shopping Cart</header>
            <div className="shop-product-bar">
              <h1 className="shop-name">Item Details</h1>
              <div className="shop-items">
                <span className="shop-bst">Quantity</span>
                <span className="shop-bst">Price</span>
              </div>
            </div>

            {cart?.length > 0 ? (
              <>
                {cart?.map((item) => (
                  <div>
                    <div className="shop-now">
                      <div className="flex-shop">
                        <img
                          src={item?.images[0]}
                          alt="chair image"
                          className="shop-img"
                        />
                        <div className="product-overview">
                          <div className="product-overview-flex">
                            <span className="view-over">{item?.title}</span>
                            <span className="view-overTwo">{item?.stock}</span>
                          </div>
                          <div className="shop-rate">
                            <div className="shop-rate-icons">
                              <span className="rate">
                                <Icon icon={starFullOutline} />
                              </span>
                              <span className="rate">
                                <Icon icon={starFullOutline} />
                              </span>
                              <span className="rate">
                                <Icon icon={starFullOutline} />
                              </span>
                              <span className="rate">
                                <Icon icon={starFullOutline} />
                              </span>
                              <span className="rate">
                                <Icon icon={starFullOutline} />
                              </span>
                            </div>
                            <div className="shop-rate-p">
                              <span className="shop-p">{item?.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shop-add">
                        <div className="shop-plus">
                          <span
                            className="tOne"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              dispatch(decrementCart(item?.id));
                              toast.success("Removed from cart");
                            }}
                          >
                            -
                          </span>
                          <span className="tTwo">{item?.quantity}</span>
                          <span
                            className="tThree"
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              dispatch(incrementCart(item?.id));
                              toast.success("Added to cart");
                            }}
                          >
                            +
                          </span>
                        </div>
                        <div className="shop-money">
                          <span className="shop-money-two">N{item?.price}</span>
                          <span className="shop-money-two-r">
                            N{item?.price} x {item?.quantity} item
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="shop-remove">
                      <Icon icon={trash2} />
                      <span
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          dispatch(removeFromCart(item?.id));
                          toast.success("Removed from cart");
                        }}
                        className="shop-remove-p"
                      >
                        REMOVE
                      </span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div
                style={{
                  height: "250px",
                  width: "100%",
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                No item
              </div>
            )}
          </div>
          <Payment />
        </div>
        <h5 className="bottom-header">
          PRODUCTS RELATED TO ITEMS IN YOUR CART
        </h5>
        <Products />
      </section>
    </div>
  );
};

export default Cart;
