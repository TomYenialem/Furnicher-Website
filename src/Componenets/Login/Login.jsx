import React, { useState } from "react";
import "./Login.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { SiLabview, SiSlashdot } from "react-icons/si";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

export default function Login() {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [emailColor, setEmailColor] = useState("1px solid black");
  const [nameColor, setNameColor] = useState("1px solid black");
  const [passColor, setPassColor] = useState("1px solid black");
  const [confirmColor, setConfirmColor] = useState("1px solid black");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [confirmErr, setConfirmErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [borderColor, setBorderColor] = useState(true);




  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPass(e.target.value);
  };
  const handelConfrimPass = (e) => {
    setConfirm(e.target.value);
  };

  const hadeleLogin = () => {
    setLogin(false);
    setBorderColor(false);
  };
  const handlerejester = () => {
    setLogin(true);
    setBorderColor(true);
  };
  let isNameValid = true;
  let isEmailValid = true;
  let isPassValid = true;
  let isConfirmValid = true;
  const handelsubmit = (e) => {
   
    e.preventDefault();
    
    if (name == "") {
      setNameColor("1px solid red");
      setNameErr("please insert your name");
      toast.error("please fill the input");
      isNameValid=false
    } else {
      setNameColor("1px solid green");
      setNameErr("");
    }
    if (email.includes("@gmail.com")) {
      setEmailColor("1px solid green");
      setEmailErr("");
    } else {
      setEmailColor("1px solid red");
      setEmailErr("please provide @gmail.com ");

      isEmailValid = false;
    }
    if (pass == "") {
      setPassColor("1px solid red");
      setPassErr("please provide a passwor");
      isPassValid = false;
    }
   
     if (pass.length < 8) {
      setPassColor("1px solid red");
      setPassErr("password to weak");
      isPassValid=false
    } else if (pass.length >= 8 && pass !== "") {
      setPassColor("1px solid green");
      setPassErr("");
    }

    if (pass !== "" && pass === confirm) {
      setConfirmColor("1px solid green");
      setConfirmErr("");
    } else {
      setConfirmColor("1px solid red");
      setConfirmErr("password doesnot match");
    
      isConfirmValid=false
    }
    if(isConfirmValid && isEmailValid && isNameValid && isPassValid){
      toast.success("Successfully registered");
    }
  };
const handleLoginFormat=(e)=>{
  e.preventDefault()
if (email.includes("@gmail.com")) {
      setEmailColor("1px solid green");
      setEmailErr("");
    } else {
      setEmailColor("1px solid red");
      setEmailErr("please provide @gmail.com ");
          toast.error("please fill the input");
      isEmailValid=false
    }
     if (pass == "") {
      setPassColor("1px solid red");
      setPassErr("please provide a passwor");
      isPassValid=false
    }
    if(isEmailValid && isPassValid){
    toast.success("Successfully Login");  
    }
}
  return (
    <div>
      <ToastContainer position="top-right" />
      <div className="container-fluid">
        <div className="conatct-bg ">
          <h2 className="fs-1">BE ONE OF US</h2>
          <h5 className="text-secondary">+251923685549</h5>
        </div>
      </div>
      <div className="container mt-3 col-md-6">
        <div className="rejester">
          <h2
            onClick={handlerejester}
            className={borderColor ? "addBorder" : ""}
          >
            Login
          </h2>{" "}
          <span className="slash">{<SiSlashdot />}</span>
          <h2 onClick={hadeleLogin} className={borderColor ? "" : "addBorder"}>
            Regester
          </h2>
        </div>

        {login ? (
          <div>
            <form>
              <div className="mb-3 mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handelEmail}
                  style={{ border: emailColor }}
                />
                <small className="text-danger">{emailErr}</small>
              </div>
              <div className="mb-3 password">
                <label>Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  value={pass}
                  onChange={handelPassword}
                  style={{ border: passColor }}
                />
                <p
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="eye"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </p>
                <small className="text-danger">{passErr}</small>
              </div>
              <div className="form-check mb-3">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                  />{" "}
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-dark text-white"
                onClick={handleLoginFormat}
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <>
            <form>
              <div className="mb-3 mt-3">
                <label>Name:</label>
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={handelName}
                  style={{ border: nameColor }}
                />
              </div>
              <small className="text-danger">{nameErr}</small>
              <div className="mb-3 mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={handelEmail}
                  style={{ border: emailColor }}
                />
              </div>
              <small className="text-danger">{emailErr}</small>
              <div className="mb-3 password">
                <label>Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                  value={pass}
                  onChange={handelPassword}
                  style={{ border: passColor }}
                />
                <p
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="eye"
                >
                  {" "}
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </p>
              </div>
              <small className="text-danger">{passErr}</small>
              <div className="mb-3">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={confirm}
                  onChange={handelConfrimPass}
                  style={{ border: confirmColor }}
                />
              </div>
              <small className="text-danger">{confirmErr}</small>
              <br />
              <button
                class="btn btn-dark text-white mt-3"
                onClick={handelsubmit}
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
