import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import homePages from "../../assets/images/asset";
import { IoIosStar } from "react-icons/io";
import "./shopDetails.css";

import { Link } from "react-router-dom";
import { contextApi } from "../Context/Context";

export default function ShopDetail() {
  const { handelAddToCart } = useContext(contextApi);
  const { pid } = useParams();
  console.log(pid)
const handelAddShopDetailsToCart=()=>{
  handelAddToCart(pid-1)
}
  const products = homePages.find((pro) => pro.id === parseInt(pid));
  const pro = homePages.filter((pro) => pro.catagori==='homepage');
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md">
            <img src={products.img} alt="" style={{ width: "500px" }} />
            <div className="shop-bottom-pro">
              <div className="mt-3 bottom">
                <div className="bottom-product-images mt-2 ">
                  {pro.map((product, index) => (
                    <div key={index} className="">
                      <div>
                        <Link to={`/details2/${product.id}`}>
                          <img src={product.img} alt="" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md mt-5">
            <h2>{products.txt}</h2>
            <div>
              <span className="text-warning">{<IoIosStar />}</span>
              <span className="text-warning">{<IoIosStar />}</span>
              <span className="text-warning">{<IoIosStar />}</span>
              <span className="text-warning">{<IoIosStar />}</span>
              <span>{<IoIosStar />}</span>
              <span className="px-3">(1 customer review)</span>
            </div>
            <div className="text-dark mx-4 mt-3">
              <span className="fs-3 text-dark px-2">{products.price}</span>
              <span className="fs-3 text-dark px-4 overline-text">
                {products.oldPrice}
              </span>
            </div>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente iure quidem officia praesentium quasi aperiam numquam
              veniam dicta est harum, dolore nam excepturi tenetur reiciendis ab
              cumque deleniti placeat!
            </div>
            <div className="row">
              <button
                className="btn btn-dark mt-5"
                onClick={handelAddShopDetailsToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
