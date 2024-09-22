import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="container-fluid">
      <div className="conatct-bg">
        <h2 className="fs-1">Contact Us</h2>
        <h5 className="text-secondary">+251923685549</h5>
      </div>

      <div className="container">
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
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="pwd"
                  />
                </div>
                <div className="checkbox mt-2">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md mt-5">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea3"
              rows="10"
              placeholder='Write Something....'
            ></textarea>
            <button className="btn btn-dark mt-4 col-md-12">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
