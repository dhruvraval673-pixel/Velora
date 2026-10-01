import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, onContinueShopping }) {
  const navigate = useNavigate();

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">

      <div className="cart-header">
        <p className="eyebrow">VELORA COLLECTION</p>
        <h1>Your Cart</h1>
        <p>Review your selected watches before checkout.</p>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <div className="empty-icon" aria-hidden="true"><ShoppingBag size={25} /></div>

          <h2>Your cart is empty</h2>

          <p>
            Discover our collection and find a watch
            made for your moment.
          </p>

          <button
            className="primary-btn"
            onClick={onContinueShopping}
          >
              Continue Shopping
          </button>
        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cart-item-details">

                  <span>{item.category}</span>

                  <h2>{item.name}</h2>

                  <p>{item.description}</p>

                  <strong>
                    ₹{item.price.toLocaleString("en-IN")}
                  </strong>

                  <div className="quantity-control">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus size={15} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus size={15} />
                    </button>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>


          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <strong>FREE</strong>
            </div>

            <div className="summary-line"></div>

            <div className="summary-total">
              <span>Total</span>

              <strong>
                ₹{total.toLocaleString("en-IN")}
              </strong>
            </div>

            <button className="checkout-btn" onClick={() => navigate("/payment")}>
              Proceed to Checkout
            </button>

            <button
              className="continue-btn"
              onClick={onContinueShopping}
            >
              ← Continue Shopping
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default Cart;