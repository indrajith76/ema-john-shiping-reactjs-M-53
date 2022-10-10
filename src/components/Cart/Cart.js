import React from "react";
import "./Cart.css";

const Cart = ({ cart,clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + tax + shipping;

  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Selected Items : {quantity}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping Charge : ${shipping}</p>
      <p>Tax : ${tax}</p>
      <h5>Grand Total : ${grandTotal.toFixed(2)}</h5>
      { cart.length !==0 && <button onClick={clearCart}>Clear Cart</button>}
      <br/>
      { cart.length !==0 && children}
    </div>
  );
};

export default Cart;
