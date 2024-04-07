import React, { useState, useEffect } from "react";
import "./Footer.css";
import Payment from "../images/apple.png.webp";
import jack from "../images/google.png";

const Footer = () => {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer>
      <div className="footer-main">
        <div className="contants-footer">
          <h2 className="mobilefix">
            Food
            <span style={{ color: "black", fontWeight: "900" }}>corner</span>
          </h2>
          <p className="mobilefix">© 2024 Bundl By Krishna-Yadav</p>
        </div>
        <div className="contants-footer">
          <h3>Company</h3>
          <li className="footer-l">About</li>
          <li className="footer-l">Careers</li>
          <li className="footer-l">Swiggy One</li>
          <li className="footer-l">Swiggy Genie</li>
          <li className="footer-l">Swiggy Instamart</li>
        </div>
        <div className="contants-footer">
          <h3>Contact us</h3>
          <li className="footer-l">Help & Support</li>
          <li className="footer-l">Partner with us</li>
          <li className="footer-l">Ride with us</li>
          <li className="footer-l">Legal</li>
        </div>
        <div className="contants-footer">
          <h3>We deliver to:</h3>
          <li className="footer-l">Bangalore</li>
          <li className="footer-l">Gurgaon</li>
          <li className="footer-l">Hyderabad</li>
          <li className="footer-l">Delhi</li>
          <li className="footer-l">Mumbai</li>
          <li className="footer-l">Pune</li>
        </div>
        <div className="SOCIALLINKS">
          <h4 className="sl">SOCIAL LINKS</h4>
          <img className="pay" src={Payment} alt="Payment"></img>
          <br></br>
          <img className="pay" src={jack} alt="Jack"></img>
        </div>
        {showUpButton && (
          <div className="up" onClick={scrollToTop}>
            up
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
