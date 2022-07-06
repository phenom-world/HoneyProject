import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import NewsLetter from "../NewsLetter/NewsLetter";

import "./footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <NewsLetter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext ops">Contact Us</h1>
          <p className="p__opensans ops">Agbowo, Ibadan, Nigeria</p>
          <p className="p__opensans ops">08144154016</p>
          <p className="p__opensans ops"> 08110742535</p>
        </div>
        <div className="app__footer-links_logo">
          {/* <img src={images.gericht} alt="footer_logo" /> */}
          <h1 className="h1">Honey</h1>
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext ops">Working Hours</h1>
          <p className="p__opensans ops">Monday-Friday:</p>
          <p className="p__opensans ops">08:00 am -12:00 am</p>
          <p className="p__opensans ops">Saturday-Sunday:</p>
          <p className="p__opensans ops"> 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans ops">© 2022 Honey. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
