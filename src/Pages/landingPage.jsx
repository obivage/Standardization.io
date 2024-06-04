import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { alarm } from "react-icons-kit/icomoon/alarm";
import { chartArea } from "react-icons-kit/typicons/chartArea";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { starFullOutline } from "react-icons-kit/typicons/starFullOutline";
import { star } from "react-icons-kit/feather/star";

import bigOne from "../assets/card-items.png";
import smallOne from "../assets/card-item.png";
import cupOne from "../assets/col-md.png";
import flowerOne from "../assets/media.png";
import bookReader from "../assets/book-reader.png";
import carbonBook from "../assets/carbon-book.png";
import trendingUp from "../assets/trendingUp.png";
import picOne from "../assets/picOne.png";
import picTwo from "../assets/picTwo.png";
import picThree from "../assets/picThree.png";
import user from "../assets/user.png";
import customerOne from "../assets/customerOne.png";
import customerTwo from "../assets/customerTwo.png";
import customerThree from "../assets/customerThree.png";
import customerFour from "../assets/customerFour.png";
import customerFive from "../assets/customerFive.png";
import customerSix from "../assets/customerSix.png";
import customerSeven from "../assets/customerSeven.png";
import customerEight from "../assets/customerEight.png";
import customerNine from "../assets/customerNine.png";
import background from "../assets/background.png";

import "./landingPage.css";
import { useGetProductsWithLimitQuery } from "../app/slices/productSlice";

const LandingPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let limit = searchParams.get("limit") ?? 20;
  limit = Number(limit);
  const { data, isLoading, isFetching } = useGetProductsWithLimitQuery({
    limit,
  });

  const handleSetSearchParams = (lm) => setSearchParams({ limit: lm + limit });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <section className="hero-section pdb">
        <div className="hero-section-container">
          <div className="first-flex">
            <img src={bigOne} alt="product picture" />
            <div className="second-flex">
              <img src={cupOne} alt="product picture" />
              <div className="third-flex">
                <img src={smallOne} alt="product picture" />
                <img src={flowerOne} alt="product picture" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-product pdb mtr">
        <div className="section-product-container ">
          <header className="section-product-header text-al-lh">
            <h1 className="product-header big-text">Featured Products</h1>
            <h2 className="product-text-one header-bold">
              BESTSELLER PRODUCTS
            </h2>
            <h3 className="product-text-two big-text">
              Problems trying to resolve the conflict between
            </h3>
          </header>
          <div
            // style={{
            //   filter: isFetching ? "blur(5px)" : "",
            // }}
            className="section-product-content"
          >
            {data?.products?.map((item) => (
              <Link to={`/shop/${item?.id}`}>
                <div className="product-content-details">
                  <img
                    src={item?.images[0]}
                    alt="product picture"
                    className="lanImg"
                  />
                  <div className="product-content-details-text">
                    <h1 className="product-content-header header-bold ">
                      {item?.title}
                    </h1>
                    <p className="product-content-p small-text">
                      {item?.brand}
                    </p>
                    <div className="product-content-price">
                      <span className="product-priceOne">{item?.price}</span>
                      <span className="product-priceTwo">{item?.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="btn-product">
            <button
              className="product-btn"
              onClick={() => handleSetSearchParams(10)}
            >
              LOAD MORE PRODUCTS
            </button>
          </div>
        </div>
      </section>

      <section className="feature-product pdb mtr">
        <div className="feature-product-container">
          <header className="feature-product-header text-al-lh">
            <h1 className="feature-product-headers big-text">
              Featured Products
            </h1>
            <h2 className="feature-product-text-one header-bold">
              THE BEST SERVICES
            </h2>
            <h3 className="feature-product-text-two big-text">
              Problems trying to resolve the conflict between
            </h3>
          </header>
          <div className="feature-product-content">
            <div className="feature-product-content_detail">
              <img
                src={bookReader}
                alt="opened book picture"
                className="feature-product-picture"
              />
              <span className="product-feature header-bold">Easy Wins</span>
              <p className="product-feature-p big-text">
                Get your best looking smile now!
              </p>
            </div>
            <div className="feature-product-content_detail">
              <img
                src={carbonBook}
                alt="opened book picture"
                className="feature-product-picture"
              />
              <span className="product-feature header-bold">Concrete</span>
              <p className="product-feature-p big-text">
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
            <div className="feature-product-content_detail">
              <img
                src={trendingUp}
                alt="opened book picture"
                className="feature-product-picture"
              />
              <span className="product-feature header-bold">Hack Growth</span>
              <p className="product-feature-p big-text">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-posts pdb mtr">
        <div className="feature-posts-contanier">
          <header className="feature-post-header text-al-lh">
            <h1 className="feature-posts-h1">Practice Advice</h1>
            <h2 className="feature-posts-h2 header-bold">Featured Posts</h2>
          </header>
          <div className="feature-post-contanier-content">
            <div className="feature-posts-card">
              <img src={picTwo} alt="living picture " />
              <div className="feature-post-card-content">
                <div className="feature-posts-card_link">
                  <a href="#" className="posts-card-link change-color">
                    Google
                  </a>
                  <a href="#" className="posts-card-link">
                    Trending
                  </a>
                  <a href="#" className="posts-card-link">
                    New
                  </a>
                </div>
                <h3 className="feature-posts-card_header">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                <p className="feature-posts-card_text small-text">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="posts-card-com">
                  <span className="posts-card-time">
                    <Icon icon={alarm} className="post-card-alarm-icon" /> 22
                    April 2021
                  </span>
                  <span className="posts-card-time">
                    <Icon icon={chartArea} className="post-card-chart-icon" />{" "}
                    10 comments
                  </span>
                </div>
                <div className="post-card-details">
                  <span className="post-card-details-about small-text">
                    Learn More{" "}
                    <a href="#">
                      <Icon icon={chevronRight} className="chevronRight" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="feature-posts-card">
              <img src={picOne} alt="living picture " />
              <div className="feature-post-card-content">
                <div className="feature-posts-card_link">
                  <a href="#" className="posts-card-link change-color">
                    Google
                  </a>
                  <a href="#" className="posts-card-link">
                    Trending
                  </a>
                  <a href="#" className="posts-card-link">
                    New
                  </a>
                </div>
                <h3 className="feature-posts-card_header">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                <p className="feature-posts-card_text small-text">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="posts-card-com">
                  <span className="posts-card-time">
                    <Icon icon={alarm} className="post-card-alarm-icon" /> 22
                    April 2021
                  </span>
                  <span className="posts-card-time">
                    <Icon icon={chartArea} className="post-card-chart-icon" />{" "}
                    10 comments
                  </span>
                </div>
                <div className="post-card-details">
                  <span className="post-card-details-about small-text">
                    Learn More{" "}
                    <a href="#">
                      <Icon icon={chevronRight} className="chevronRight" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="feature-posts-card">
              <img src={picThree} alt="living picture " />
              <div className="feature-post-card-content">
                <div className="feature-posts-card_link">
                  <a href="#" className="posts-card-link change-color">
                    Google
                  </a>
                  <a href="#" className="posts-card-link">
                    Trending
                  </a>
                  <a href="#" className="posts-card-link">
                    New
                  </a>
                </div>
                <h3 className="feature-posts-card_header">
                  Loudest à la Madison #1 (L'integral)
                </h3>
                <p className="feature-posts-card_text small-text">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="posts-card-com">
                  <span className="posts-card-time">
                    <Icon icon={alarm} className="post-card-alarm-icon" /> 22
                    April 2021
                  </span>
                  <span className="posts-card-time">
                    <Icon icon={chartArea} className="post-card-chart-icon" />{" "}
                    10 comments
                  </span>
                </div>
                <div className="post-card-details">
                  <span className="post-card-details-about small-text">
                    Learn More{" "}
                    <a href="#">
                      <Icon icon={chevronRight} className="chevronRight" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial pdb mtr">
        <div className="testimonial-container">
          <div className="testimonial-content-text">
            <header className="testimonial-header header-bold">
              What they say about us
            </header>
            <div className="testimonial-content-image">
              <img src={user} alt="user picture" />
            </div>
            <div className="testimonial-rate">
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
            <p className="testimonial-text small-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="testimonial-user-id">
              <span className="user-name">Regina Miles</span>
              <span className="user-track">Designer</span>
            </div>
          </div>
          <div className="testimonial-content-users_pictures">
            <img src={customerSeven} alt="user picture" />
            <img src={customerOne} alt="user picture" />
            <img src={customerTwo} alt="user picture" />
            <img src={customerThree} alt="user picture" />
            <img src={customerFour} alt="user picture" />
            <img src={customerFive} alt="user picture" />
            <img src={customerSix} alt="user picture" />
            <img src={customerEight} alt="user picture" />
            <img src={customerNine} alt="user picture" />
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <div className="action-container">
          <div className="action-content">
            <header className="action-header">
              Designing Better Experience
            </header>
            <h1 className="action-header-h1">
              Problems trying to resolve the conflict between
            </h1>
            <p className="action-text small-text">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:
            </p>
            <span className="action-price">$16.48</span>
            <button className="action-btn">ADD YOUR CALL TO ACTION</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
