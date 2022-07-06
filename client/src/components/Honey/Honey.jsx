import React from "react";
import { Card } from "react-bootstrap";
import { MdAddShoppingCart, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";

import "./honey.css";

const images = [
  "https://media.istockphoto.com/photos/honey-in-a-glass-jar-next-to-honeycombs-picture-id162847094?k=20&m=162847094&s=612x612&w=0&h=LjYwUcSQvrgqG0LMJdEox9RyBhctxnuewHhw_mjV2KM=",
  "https://media.istockphoto.com/photos/honey-in-a-glass-jar-next-to-honeycombs-picture-id162847094?k=20&m=162847094&s=612x612&w=0&h=LjYwUcSQvrgqG0LMJdEox9RyBhctxnuewHhw_mjV2KM=",
  "https://media.istockphoto.com/photos/honey-in-a-glass-jar-next-to-honeycombs-picture-id162847094?k=20&m=162847094&s=612x612&w=0&h=LjYwUcSQvrgqG0LMJdEox9RyBhctxnuewHhw_mjV2KM=",
];
const Honey = ({ user }) => {
  return (
    <div className="honey">
      <div className="honey-start">
        <div className="honey-start_start">
          <div className="honey-start-p">
            <p>Honey with Sauce</p>
            <p>Select Your Preferrable Honey At Affordable Price</p>
          </div>
          <div className="honey-end">
            <p>Filter By Price</p>
            <div className="honey-end-div">
              <p className="honey-end-div-p">0</p>
              <div className="honey-end-div_div" />
              <p className="honey-end-div-p">100</p>
              <p className="honey-end-div-btn">Search</p>
            </div>
          </div>
        </div>
        <div className="honey-start-div">
          {images.map((image, i) => (
            <Card key={i}>
              <div className="honey-start-div-hover">
                <Card.Img
                  variant="top"
                  src={image}
                  alt="img"
                  className="honey-start-div-hover-img"
                />
                <div className="honey-start-div-hover_btn">
                  <Link to="/category/details">
                    <button>
                      <MdVisibility />
                    </button>
                  </Link>
                  <Link to={user ? "/cart" : "/login"}>
                    <button>
                      <MdAddShoppingCart />
                    </button>
                  </Link>
                </div>
              </div>
              <Card.Body>
                <Card.Title>Undiluted Honey</Card.Title>
                <Card.Text>
                  <p>Raw Honey gotten from the bee with little processing</p>
                  <p>
                    Price: <b>#1200</b>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Honey;
