import React, { useContext } from "react";
import "./Nav.css";
import { BiCart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { contextApi } from "../Context/Context";
import logo from "../../assets/images/bed/logo.jpg";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";

export default function () {
  const handleNavLinkClick = () => {
    const collapsibleNavbar = document.getElementById("collapsibleNavbar");
    if (collapsibleNavbar) {
      const bootstrapCollapse = new bootstrap.Collapse(collapsibleNavbar, {
        toggle: false,
      });
      bootstrapCollapse.hide();
    }
  };
  const { add } = useContext(contextApi);
  return (
    <nav className="navbar navbar-expand-md p-1 sticky-top ">
      <div className="container d-flex justify-content-between">
        <div className="logo  d-md-block ">
          <Link to={"/"} className="navbar-brand">
            <img src={logo} alt="" className="logos" />
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="menu-logo">
            <CgMenuRightAlt />
          </span>
        </button>
        <div
          className="collapse navbar-collapse  collapseses "
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav m-auto nav-lists">
            <li className="nav-item" onClick={handleNavLinkClick}>
              <Link to={"/"} className="nav-link text-warning">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={handleNavLinkClick}>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item" onClick={handleNavLinkClick}>
              <a className="nav-link" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item" onClick={handleNavLinkClick}>
              <Link to={"/contact"} className="nav-link">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="cart-dev   m-4  d-md-flex ">
          {/* <Link to={"/cart"}>
            <IoMdCart className=" me-4 " />
            <span className="add-count-number">{add}</span>
          </Link> */}

          <Link to={"/login"} className=" d-md-block ">
            <BsPerson className="me-2" />
          </Link>
        </div>
      </div>
      <div className="cart-items">
        <Link to={"/cart"}>
          <IoMdCart className=" me-4 " />
          <span className="add-count-number">{add}</span>
        </Link>
      </div>
    </nav>
  );
}