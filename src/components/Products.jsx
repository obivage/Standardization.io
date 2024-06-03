import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";


import { useGetProductsWithLimitQuery } from "../app/slices/productSlice";

const Products = () => {
  let limit = 20;
  limit = Number(limit);
  const { data, isFetching } = useGetProductsWithLimitQuery({
    limit,
  });

  return (
    <section className="all-product">
      <div
        style={{
          filter: isFetching ? "blur(5px)" : "",
        }}
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
                <p className="product-content-p small-text">{item?.brand}</p>
                <div className="product-content-price">
                  <span className="product-priceOne">$16.48</span>
                  <span className="product-priceTwo">$6.48</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
