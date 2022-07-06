import React from "react";
import { Link } from "react-router-dom";
import BCarousel from "./Carousel/BCarousel";

import "./home.css";

const Home = () => {
  return (
    <div>
      <BCarousel />
      <div className="home-pix">
        <img
          src="https://thumbs.dreamstime.com/b/black-african-hands-holding-honey-indian-manicured-cupped-which-drips-pours-out-against-white-background-used-beauty-155079506.jpg"
          alt="1"
          style={{ height: "225px" }}
        />
        <Link to="/category">
          <button className="buttonx">View More</button>
        </Link>
      </div>
      <div className="home-pic">
        <img
          src="https://png.pngtree.com/background/20210711/original/pngtree-hand-drawn-sweet-honey-banner-background-picture-image_1133002.jpg"
          alt="2"
          style={{ width: "100%", height: "150px" }}
        />
        <p className="home-p">Need Fresh Honey on the Go!</p>
      </div>
    </div>
  );
};

export default Home;
