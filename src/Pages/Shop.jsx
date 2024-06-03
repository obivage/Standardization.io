import React from "react";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { starFullOutline } from "react-icons-kit/typicons/starFullOutline";
import { star } from "react-icons-kit/feather/star";
import { eye } from "react-icons-kit/typicons/eye";
import { shoppingCart } from "react-icons-kit/feather/shoppingCart";
import { heart } from "react-icons-kit/feather/heart";

import articleImg from "../assets/articleImg.png";

import One from "../assets/iconOne.png";
import Two from "../assets/iconTwo.png";
import Three from "../assets/iconThree.png";
import Four from "../assets/iconFour.png";
import Five from "../assets/iconFive.png";
import Six from "../assets/iconSix.png";

import "./Shop.css";
import Products from "../components/Products";
import { useGetSingleProductQuery } from "../app/slices/productSlice";
import { useParams } from "react-router-dom";
import { addToCart } from "../app/slices/cartSplice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Shop = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);
  const dispatch = useDispatch();
  const { data, isLoading, isFetching, isError } = useGetSingleProductQuery({
    id,
  });
  console.log(data);
  if (isLoading) {
    return <div>Loading product details...</div>;
  }
  return (
    <div>
      <section className="cart-section">
        <div className="cart-container">
          <nav className="cart-bar">
            {/* <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <link to="/">Shop</link>
            </li>
          </ul> */}
          </nav>
          <div className="cart-content">
            <div className="cart-content-img">
              <img src={data?.images[0]} alt="cup picture" className="bigImg" />
              <span className="toggle-left">
                <Icon size={40} icon={chevronLeft} className="chevronLeft" />
              </span>
              <span className="toggle-right">
                <Icon
                  size={40}
                  icon={chevronRight}
                  className="chevronRight-s"
                />
              </span>
              <div className="img-smallOne">
                {data?.images?.map((src) => (
                  <img src={src} alt="chair picture" className="smallOne" />
                ))}
              </div>
            </div>

            <div className="cart-content-text">
              <h1 className="cart-content-text_header">{data?.title}</h1>
              <div className="cart-content-rate">
                <div className="cart-rate">
                  <div className="cart-rate-icons">
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
                      <Icon icon={star} />
                    </span>
                  </div>
                  <div className="cart-rate-p">
                    <span className="rate-p bolder-text">{data?.rating}</span>
                  </div>
                </div>
                <div className="cart-rate-price">
                  <span className="rate-price">${data?.price}</span>
                  <div className="rate-text-flex">
                    <span className="price-text-one bolder-text">
                      Availability :
                    </span>
                    <span className="price-text-two bolder-text">
                      {data?.stock}
                    </span>
                  </div>
                </div>
              </div>
              <div className="cart-text-colours">
                <span className="one round"></span>
                <span className="two round"></span>
                <span className="three round"></span>
                <span className="four round"></span>
              </div>
              <div className="cart-content-call">
                <div className="cart-call-to-action">
                  <button className="cart-btn">Select Options</button>
                </div>
                <div className="cart-call-to-action_react">
                  <Icon icon={heart} className="action-icon" />
                  <button
                    style={{
                      cursor: "pointer",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => {
                      dispatch(addToCart(data));
                      toast.success("Added to cart");
                    }}
                  >
                    <Icon icon={shoppingCart} className="action-icon" />
                  </button>
                  <Icon icon={eye} className="action-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-about">
          <h1 className="cart-about-des bolder-text">Description</h1>
          <h2 className="cart-about-inform bolder-text">
            Additional Information
          </h2>
          <div className="cart-about-rev-content">
            <h3 className="cart-about-rev bolder-text">Reviews</h3>
            <span className="rev-number bolder-text">{data?.rating}</span>
          </div>
        </div>
        <article className="cart-article-container">
          <div className="article-content">
            <div className="article-text">
              <header className="article-header">
                the quick fox jumps over{" "}
              </header>
              <p className="article-p-one bolder-text smt">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="p-rotate">
                <p className="article-p-two bolder-text smt">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>
              <p className="article-p-three bolder-text smt">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
            <img
              src={articleImg}
              alt="product picture"
              className="articleImg"
            />
          </div>
        </article>
        <h4 className="bottom-header">BESTSELLER PRODUCTS</h4>
        <div>
          <Products />
        </div>
        <footer className="cart-footer">
          <div className="cart-footer-container">
            <div className="cart-footer-content">
              <img src={One} alt="animated picture" />
              <img src={Two} alt="animated picture" />
              <img src={Three} alt="animated picture" />
              <img src={Four} alt="animated picture" />
              <img src={Five} alt="animated picture" />
              <img src={Six} alt="animated picture" />
            </div>
          </div>
        </footer>
        <div></div>
      </section>
    </div>
  );
};

export default Shop;
