import React from 'react'

function Payment() {
  return (
    <div className={style.payment}>
      <div style={{ textAlign: "center" }} className="mt-3">
        chekout ({state.basket.reduce((acc, cur) => acc + cur.amount, 0)}) items
      </div>
      <hr />
      <div className={style.address}>
        <div>
          <h3>Delivery Address</h3>
        </div>
        <div>
          email:{state.user?.email}
          <p>Addis Abeba</p>
        </div>
      </div>
      <hr />
      <div className={style.review}>
        <h3>Review Items and delivery</h3>
    
      </div>
      <hr />
      <div className={style.cards}>
        <>
          <h4>Payment Method</h4>
        </>
        <div className={style.pay_card}>
          <form action="" className={style.pay_form} onSubmit={handleSubmit}>
            {err && <small className="text-danger px-3">{err}</small>}
            <CardElement className={style.card_forms} onChange={handleChange} />
            <div className={style.total_order}>
              <div>
                <h5>Total price:{total}</h5>
              </div>
              <button type="submit" disabled={loader}>
                {!loader ? (
                  "pay now"
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <ClipLoader size={15} />
                    <span>please wait....</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Payment