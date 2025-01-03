import React, { useContext } from "react";
import "./ToHome.css";
import { contextApi } from "../Context/Context";
import { Link } from "react-router-dom";

import { FaCartPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export default function ToHome() {
      const { open, products, homes, offices, handelAddToCart } =useContext(contextApi)
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="home-head">wellcome to our home furniture</h1>
      </div>
      <div className="container pro homep">
        <div className="row row-cols-1 row-cols-md-4 gy-4">
          {products.map((product,index) => (
            <div key={product.id} className="col m-auto">
              <div className="image-box text-warning">
                <Link to={`/details/${product.id}`}>
                  <img src={product.img} alt="" />
                </Link>
                <div className="cart-icon">
                  <div className="cart-icons">
                    <FaCartPlus
                      className="cartd"
                      onClick={() => handelAddToCart(product.id)}
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
      <div className="d-flex justify-content-center">
        <div className="btn btn-dark text-light">
          <Link to={"/office"} className="text-light">
            More Products
          </Link>
        </div>
      </div>
    </div>
  );
}
