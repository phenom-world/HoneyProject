import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./carousel.css";

const BCarousel = () => {
  return (
    <div className="div">
      <Carousel className="home">
        <Carousel.Item style={{ border: "none" }}>
          <div className="home-item">
            <div className="home-item-text">
              <p>Needs Honey?</p>
              <p>We gat you Covered</p>
              <Link to="/category">
                <button>Shop Now</button>
              </Link>
            </div>
            <img
              className="home-item-img"
              src="https://media.istockphoto.com/photos/honey-in-a-glass-jar-next-to-honeycombs-picture-id162847094?k=20&m=162847094&s=612x612&w=0&h=LjYwUcSQvrgqG0LMJdEox9RyBhctxnuewHhw_mjV2KM="
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ border: "none" }}>
          <div className="home-item">
            <div className="home-item-text">
              <p>Needs Honey?</p>
              <p>We gat you Covered</p>
              <Link to="/category">
                <button>Shop Now</button>
              </Link>
            </div>
            <img
              className="home-item-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nzGkHqssixRGO1ck9RL-LlwsMoq0I1cuSQ&usqp=CAU"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ border: "none" }}>
          <div className="home-item">
            <div className="home-item-text">
              <p>Needs Honey?</p>
              <p>We gat you Covered</p>
              <Link to="/category">
                <button>Shop Now</button>
              </Link>
            </div>
            <img
              className="home-item-img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPiTWZECCr-VYFeJBzhQSEnvV3MHhufB-dEw&usqp=CAU"
              alt="Second slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BCarousel;
