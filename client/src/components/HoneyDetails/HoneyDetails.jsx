import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

import "./honeyDetails.css";

const HoneyDetails = ({user}) => {
  const [state, setState] = useState({
    count: 0,
  });

  const handleIncrement = () => {
    setState({ count: state.count + 1 });
  };
  const handleDecrement = () => {
    if (state.count >= 1) {
      setState({ count: state.count - 1 });
    }
  };

  return (
    <div className="honeyDetails">
      <div className="honeyDetails-body">
        <div className="honeyDetails-body-img">
          <img
            src="https://media.istockphoto.com/photos/honey-in-a-glass-jar-next-to-honeycombs-picture-id162847094?k=20&m=162847094&s=612x612&w=0&h=LjYwUcSQvrgqG0LMJdEox9RyBhctxnuewHhw_mjV2KM="
            alt="img"
          />
        </div>
        <div className="honeyDetails-body-text">
          <p className="honeyDetails-body-text-p">Honey With Sauce</p>
          <p className="honeyDetails-body-text-pp">Price: #1200</p>
          <div className="honeyDetails-body-text-qty">
            <p className="honeyDetails-body-text-qty-p">Quantity</p>
            <div className="honeyDetails-body-text-qty-pp">
              <p onClick={handleDecrement}>-</p>
              <p>{state.count}</p>
              <p onClick={handleIncrement}>+</p>
            </div>
          </div>
          <Link to={user ?"/cart" : "/login"}>
            <button className="honeyDetails-body-text-qty-button">
              Add to cart <MdAddShoppingCart />
            </button>
          </Link>
        </div>
      </div>
      <div className="honeyDetails-footer">
        <p>Product Description</p>
        <p>
          Honey is a sweet, viscous food substance made by honey bees and some
          other bees.Bees produce honey from the sugary secretions of plants
          (floral nectar) or from secretions of other insects (such as
          honeydew), by regurgitation, enzymatic activity, and water
          evaporation. Honey bees store honey in wax structures called
          honeycombs, whereas stingless bees store honey in pots made of wax and
          resin.
        </p>
      </div>
    </div>
  );
};

export default HoneyDetails;
