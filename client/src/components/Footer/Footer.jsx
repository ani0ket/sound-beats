import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Introducing "Sound~Beats" – Where Sound Meets Style! Unleash Your
            Ears to the Rhythm of Life. At GrooveBeats, we're not just about
            headphones, we're about turning every head into a head that grooves!
            Our headphones are not just accessories, they're your VIP pass to
            the concert of life.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">
              86th, 4th B cross, NewArea, Yelahanka, Bengaluru, 560678
            </div>
          </div>
          <div className="c-items">
            <FaMobileAlt />
            <div className="text">Phone: +91 0000 000 000</div>
          </div>
          <div className="c-items">
            <FaEnvelope />
            <div className="text">Email: aniket.parashar04@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watch</span>
          <span className="text">Bluetooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            SOUND~BEATS 2023 CREATED BY ANIKET PARASHAR, PREMIUM E-COMMERCE
            SOLUTIONS.
          </div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
