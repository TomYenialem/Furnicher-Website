import React, { useContext, useState } from "react";
import { contextApi } from "../Context/Context";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import "./Payment.css";

function Payment() {
  const { style, CardElement, useStripe } = useElements();
  const [err,setErr]=useState('')
  const { authUser, add } = useContext(contextApi);
  const stripe = useStripe();
  const elements = useElements();
    const handleChange = (e) => {
      if (e?.error?.message) {
        setErr(e?.error?.message);
      } else {
        setErr("");
      }
    };
  return (
    <div className="payment">
      <p className="address">payment Address:</p>
      <p className="email">
        email:
        <br />
        <strong>{authUser.email}</strong>
      </p>
      <p className="amount">
        total amount:
        <br />
        <strong>{add}</strong>
      </p>

      <div className="stripe">
        <form>
          <CardElement className={style.card_forms} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default Payment;
