
import React from "react";
import "./Cart.css";

function Cart({ cart, setCart }) {

  const removeBook = (id) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const editQuantity = (id, quantity) => {
    if (quantity < 1) return;

    setCart(
      cart.map((book) =>
        book.id === id
          ? { ...book, quantity: quantity }
          : book
      )
    );
  };

  const total = cart.reduce(
    (sum, book) => sum + book.price * book.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((book) => (
            <div className="cart-item" key={book.id}>

              <img src={book.image} alt={book.title} />

              <div className="cart-info">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>${book.price}</p>
              </div>

              <div className="cart-quantity">
                <button
                  onClick={() =>
                    editQuantity(book.id, book.quantity - 1)
                  }
                >
                  -
                </button>

                <span>{book.quantity}</span>

                <button
                  onClick={() =>
                    editQuantity(book.id, book.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>

            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ${total.toFixed(2)}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
