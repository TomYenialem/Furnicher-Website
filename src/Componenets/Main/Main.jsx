import React, { useContext, useState } from "react";

import "./Main.css";
import { Link } from "react-router-dom";
import { contextApi } from "../Context/Context";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import homePages from "../../assets/images/asset";

export default function Main() {
  const { open, products, homes, offices, handelAddToCart } =
    useContext(contextApi);

  
  return (
    <div className="main ">
      <div className="text-center mb-4">
       

        <h3>Popular Furniture</h3>
        <div className="mt-3 mb-5">
          <span
            onClick={homes}
            className={`${open ? "text-secondary" : "active-text"} home`}
          >
            HOME{" "}
          </span>
          <span
            onClick={offices}
            className={ `${open ? "active-text" : "text-secondary"} office`}
          >
            - OFFICE
          </span>
        </div>
      </div>

      <div className="container pro">
        <div className="row row-cols-1 row-cols-md-4 gy-4">
          {products.map((product) => (
            <div key={product.id} className="col m-auto">
              <div className="image-box">
                <Link to={`/details/${product.id}`}>
                  <img src={product.img} alt="" />
                </Link>
                <div className="cart-icon">
                  <div className="cart-icons">
                    <FaCartPlus
                      className="cartd"
                      onClick={() => handelAddToCart(product.id-1)}
                    />
                  </div>

                  <div className="heart-div">
                    <FaHeart className="heartd" />
                  </div>
                </div>
                <p className="text-center text-secondary pro-txt">
                  {product.txt}
                </p>
                <div className="d-flex justify-content-center prices">
                  <p className="text-danger">{product.price}</p>
                  <p className="text-center">{product.oldPrice}</p>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
