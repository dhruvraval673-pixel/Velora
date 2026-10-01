import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment({ cart, setCart }) {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [paid, setPaid] = useState(false);

  const [form, setForm] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: ""
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0 && !paid) {
    return (
      <section className="payment-page">
        <div className="payment-success">
          <p className="eyebrow">SECURE CHECKOUT</p>
          <h1>Your cart is empty</h1>
          <p>Add a timepiece before entering checkout.</p>
          <button className="primary-btn" onClick={() => navigate("/watches")}>
            Browse Watches
          </button>
        </div>
      </section>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    setPaid(true);

    setTimeout(() => {
      setCart([]);
    }, 500);
  };

  if (paid) {
    return (
      <section className="payment-page">
        <div className="payment-success">

          <div className="success-icon">
            ✓
          </div>

          <p className="eyebrow">
            VELORA
          </p>

          <h1>
            Payment Successful
          </h1>

          <p>
            Thank you for your purchase.
            Your Velora timepiece is on its way.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/")}
          >
            Continue Shopping →
          </button>

        </div>
      </section>
    );
  }

  return (
    <section className="payment-page">

      <div className="payment-header">
        <p className="eyebrow">
          SECURE CHECKOUT
        </p>

        <h1>
          Payment
        </h1>

        <p>
          Complete your order with our
          demo payment system.
        </p>
      </div>


      <div className="payment-container">

        {/* PAYMENT FORM */}

        <div className="payment-box">

          <h2>
            Payment Method
          </h2>


          <div className="payment-methods">

            <button
              type="button"
              className={
                paymentMethod === "card"
                  ? "payment-method active"
                  : "payment-method"
              }
              onClick={() =>
                setPaymentMethod("card")
              }
            >
              💳 Card
            </button>


            <button
              type="button"
              className={
                paymentMethod === "upi"
                  ? "payment-method active"
                  : "payment-method"
              }
              onClick={() =>
                setPaymentMethod("upi")
              }
            >
              📱 UPI
            </button>

          </div>


          {paymentMethod === "card" ? (

            <form onSubmit={handlePayment}>

              <label>
                Cardholder Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={form.name}
                onChange={handleChange}
                required
              />


              <label>
                Card Number
              </label>

              <input
                type="text"
                name="card"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                value={form.card}
                onChange={handleChange}
                required
              />


              <div className="payment-row">

                <div>
                  <label>
                    Expiry
                  </label>

                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={form.expiry}
                    onChange={handleChange}
                    required
                  />
                </div>


                <div>
                  <label>
                    CVV
                  </label>

                  <input
                    type="password"
                    name="cvv"
                    placeholder="123"
                    maxLength="3"
                    value={form.cvv}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              <button
                className="pay-btn"
                type="submit"
              >
                Pay ₹{total.toLocaleString("en-IN")}
              </button>

            </form>

          ) : (

            <form onSubmit={handlePayment}>

              <label>
                UPI ID
              </label>

              <input
                type="text"
                placeholder="example@upi"
                required
              />

              <button
                className="pay-btn"
                type="submit"
              >
                Pay ₹{total.toLocaleString("en-IN")}
              </button>

            </form>

          )}

        </div>


        {/* ORDER SUMMARY */}

        <div className="payment-summary">

          <h2>
            Order Summary
          </h2>

          {cart.map((item) => (

            <div
              className="payment-item"
              key={item.id}
            >

              <div>
                <strong>
                  {item.name}
                </strong>

                <span>
                  Qty: {item.quantity}
                </span>
              </div>

              <strong>
                ₹{(
                  item.price *
                  item.quantity
                ).toLocaleString("en-IN")}
              </strong>

            </div>

          ))}


          <div className="summary-line"></div>

          <div className="payment-total">

            <span>
              Total
            </span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Payment;