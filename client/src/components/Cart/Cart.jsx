import React from "react";
import { BiArrowBack } from "react-icons/bi";

import "./cart.css";

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Cart = () => {
  return (
    <div className="app-cart">
      <h5>Shopping Basket</h5>
      <div className="cart">
        <div className="cart-head">
          <div className="cart-head_header">
            <div className="cart-head_header-head">
              <img
                src="https://media.istockphoto.com/photos/honey-in-a-glass-jar-next-to-honeycombs-picture-id162847094?k=20&m=162847094&s=612x612&w=0&h=LjYwUcSQvrgqG0LMJdEox9RyBhctxnuewHhw_mjV2KM="
                alt="cart"
              />
              <div className="cart-head_header-head_p">
                <p>Honey With Sauce</p>
                <select>
                  {nums.map((num) => (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="cart-head_header-space">
              <p>#1200</p>
              <p>x Remove</p>
            </div>
          </div>
          <div className="cart-head_end">
            <p>Coupon Code</p>
            <div className="cart-head_end-input">
              <input
                className="cart-head_end-input_input"
                type="text"
                placeholder="Enter Coupon Code"
              />
              <button className="cart-head_end-input_btn">Apply</button>
            </div>
          </div>
        </div>
        <div className="cart-end">
          <div className="cart-end-header">
            <div className="cart-end-header_head">
              <p>Subtotal</p>
              <p>#1200</p>
            </div>
            <div className="cart-end-header_head">
              <p>Delivery</p>
              <p>#600</p>
            </div>
            <div className="cart-end-header_head">
              <p>Transaction Charges</p>
              <p>#200</p>
            </div>
            <div className="cart-end-header_head">
              <p>Discount</p>
              <p>#0</p>
            </div>
            <div className="cart-end-header_head">
              <p>Total</p>
              <p>#2000</p>
            </div>
            <div className="cart-end-header_p">
              <p>Shipping Cost Calculated At Checkout*</p>
            </div>
          </div>
          <button className="cart-end-btn">Proceed to Checkout</button>
          <p className="cart-end-btn-p">
            <BiArrowBack /> Continue Shipping
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
