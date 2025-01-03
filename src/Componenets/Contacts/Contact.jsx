import React, { useState } from 'react'
import './Contact.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
 const [email,setEmail]=useState('')
 const [pass,setPass]=useState('')
 const[text,setText]=useState('')
 const navigate=useNavigate()
 const sumbit=()=>{

   // form validation
   if(!email ||!pass){
     toast.error("Please fill all fields")
     return
   }
   if(!email.includes('@') ||!email.includes('.')){
     toast.error("Please enter a valid email address")
     return
   }
   if(pass.length<8){
     toast.error("Password should be at least 8 characters long")
     return
   }
   if(text.length<20){
     toast.error("Message should be at least 20 characters long")
     return
   }
   toast.success("Thnak you Form submitted successfully")
   setEmail('')
   setPass('')
   setText('')
   navigate('/')
 }

  return (
    <div className="container-fluid">
      <div className="conatct-bg">
        <h2 className="fs-1">Contact Us</h2>
        <h5 className="text-secondary">+251923685549</h5>
      </div>

      <div className="container contact">
        <div className="row">
          <div className="col-md-5">
            <h1 className="mt-3">Write Us</h1>
            <div className="break"></div>
            <div className="form mt-5">
              <form className="form-inline" action="/action_page.php">
                <div className="form-group">
                  <label>Email address:</label>
                  <input
                    type="email"
                    className="form-control mt-2"
                    id="email"
                    style={{ boxShadow: "0px 0px 2px rgba(0,0,0,0.4)" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="pwd"
                    style={{ boxShadow: "0px 0px 2px rgba(0,0,0,0.4)" }}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-md mt-5">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea3"
              rows="10"
              placeholder="Write Something...."
              value={text}
              style={{ boxShadow: "0px 0px 2px rgba(0,0,0,0.4)" }}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="btn btn-dark mt-4 col-md-12" onClick={sumbit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
