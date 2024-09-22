import React, { useContext, useState } from "react";
import { contextApi } from "../Context/Context";
import homePages from "../../assets/images/asset";
import { RiDeleteBin5Line } from "react-icons/ri";
import './Cart.css'
import { Link } from "react-router-dom";


export default function Cart() {
  const { addCart,removeCart,total,hasProdcut } = useContext(contextApi);

 

 

  return (
    <div>
      {hasProdcut ? (
        <div>
          <div>
            {homePages.map((pro, index) => {
              if (addCart[index] > 0) {
                return (
                  <div className="container mt-3" key={index}>
                    <div className="row bg-dark text-light px-2 py-3 fw-bold d-none d-md-flex">
                      <div className="col-md">Images</div>
                      <div className="col-md">Products</div>
                      <div className="col-md">Price</div>
                      <div className="col-md">Quantity</div>
                      <div className="col-md">Total</div>
                      <div className="col-md">Remove</div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md">
                        <img src={pro.img} alt="Product-Image" />
                      </div>
                      <div className="col-md">{pro.txt}</div>
                      <div className="col-md">{pro.price}</div>
                      <div className="col-md">{addCart[index]}</div>
                      <div className="col-md">
                        {addCart[index] * parseInt(pro.price)}
                      </div>
                      <div
                        className="col-md delete"
                        onClick={() => removeCart(index)}
                      >
                        {<RiDeleteBin5Line />}
                      </div>
                      <hr />
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div className="container">
            <div className="row mt-4 ">
              <div className="col-md">
                <h3>Calculate Shipping</h3>
                <div className="row">
                  <div className="col-md  ">
                    <select style={{ padding: "10px", width: "120px" }}>
                      <option value="">USA</option>
                      <option value="">UK</option>
                      <option value="">FRANCE</option>
                      <option value="">CHINA</option>
                      <option value="">ETHIOPIA</option>
                    </select>
                  </div>
                  <div className="col-md">
                    <select style={{ padding: "10px", width: "120px" }}>
                      <option value="">NYC</option>
                      <option value="">LONDON</option>
                      <option value="">PARIS</option>
                      <option value="">BEJIG</option>
                      <option value="">ADDIS</option>
                    </select>
                  </div>
                </div>

                <button className="bg-dark col-md-12 mt-5">Estimate</button>
              </div>
              <div className="col-md">
                <div className="cart">
                  <h3 className="mb-4">Cart Summary</h3>
                  <div className="row total-carts">
                    <div className="col-md ">
                      <div className="col-md">Sub Total</div>
                      <div className="col-md">Shipping Cost</div>
                      <div className="col-md">
                        <h4>Grand Total</h4>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="col-md">${total()}</div>
                      <div className="col-md">$5</div>
                      <div className="col-md">
                        <h4>${total()+5}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="bg-dark mt-5 col-md-12 fw-bold ">
                  CheckOut
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 text-center text-danger  fw-bold">
          <p className="fs-3">NO PRODUCT ADDED YET</p>
          <Link to={'/shop'}>
          <button className="bg-dark">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
