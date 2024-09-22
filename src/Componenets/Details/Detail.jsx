import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import homePages from '../../assets/images/asset';
import './Detail.css'
 import { IoIosStar } from "react-icons/io";
 import { IoMdArrowDropup } from "react-icons/io";
 import { IoMdArrowDropdown } from "react-icons/io";
import { contextApi } from '../Context/Context';
import { Link } from 'react-router-dom';


export default function Detail() {
  const[cartNumber,setCartNumber]=useState(1);
  const {handelAddToCart}=useContext(contextApi)



  const{products}=useContext(contextApi)
  const{productId}=useParams()
   const handleDetailAddToCart = () => {
     handelAddToCart(productId-1,cartNumber)
   };
  
    const product=homePages.find((pro)=>pro.id===Number(productId))
    if(!product){
      return <p>No prodcut yet</p>
    }
    else{
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md">
            <img src={product.img} alt="" style={{ width: "500px" }} />
            <div className="mt-3">
              <div className=" bottom-pro mt-2 ">
                {products.map((product, index) => (
                  <div key={index} className="bottom-img">
                    <div>
                      <Link to={`/details/${product.id}`}>
                        <img
                          src={product.img}
                          alt=""
                          style={{ width: "200px" }}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md mt-5">
            <h2>{product.txt}</h2>
            <div>
              <span className="text-warning">{<IoIosStar />}</span>
              <span className="text-warning">{<IoIosStar />}</span>
              <span className="text-warning">{<IoIosStar />}</span>
              <span className="text-warning">{<IoIosStar />}</span>
              <span>{<IoIosStar />}</span>
              <span className="px-3">(1 customer review)</span>
            </div>
            <div className="text-dark mx-4 mt-3">
              <span className="fs-3 text-dark px-2">{product.price}</span>
              <span className="fs-3 text-dark px-4 overline-text">
                {product.oldPrice}
              </span>
            </div>
            <div className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              sapiente iure quidem officia praesentium quasi aperiam numquam
              veniam dicta est harum, dolore nam excepturi tenetur reiciendis ab
              cumque deleniti placeat!
            </div>
            <div className="row mt-5">
              <button className="btn btn-dark" onClick={handleDetailAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}
