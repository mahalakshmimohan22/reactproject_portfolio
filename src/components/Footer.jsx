import "./Footer.css";
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
             <div className="location">
                <FaHome size={20} style={{color: "#fff" , marginright: "2rem"}} />
                <div>
                    <p>20/6, Slopper Street,</p>
                    <p>Cuddalore Old Town,</p>
                    <p>Cuddalore.</p>
                </div>
             </div>
             
             <div className="phone">
              <h4>
                <FaPhone size={20} style={{color: "#fff" , marginright: "2rem"}} />
                       +91-7603820621.
                </h4>
             </div>
             
             <div className="email">
              <h4>
                <FaMailBulk size={20} style={{color: "#fff" , marginright: "2rem"}} />
                       mahamohan2803@gmail.com
              </h4>
             </div>
            </div>
            <div className="right">
                <h4>
                  Description :
                </h4>
                <p>
                  I'm currently looking for a summer internship on Web/Mobile-App Development. You can reach me out by clicking "CONTACT"
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color: "#fff" , marginright: "1rem"}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaTwitter size={30} style={{color: "#fff" , marginright: "1rem"}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FaLinkedin size={30} style={{color: "#fff" , marginright: "1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer