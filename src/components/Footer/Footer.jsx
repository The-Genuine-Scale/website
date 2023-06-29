import React from "react";
import "./Footer.css";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="main_container_footer">
      <div className="left_section_footer">
        <h2>SCALE</h2>
        <p>leads to your needs</p>
      </div>

      <div className="right_section_footer">
        <div className="right_upper_section_footer">
          <p>TIDES, Bio-Incubator, 2nd & 3rd Floor, Multi- activity Center</p>

          <p>Indian Institute of Technology, Roorkee, Uttarakhand, 247667</p>
        </div>

        <div className="right_lower_section_footer">
          <a href="/">
            <FaFacebookSquare className="social_icon_footer" />
          </a>
          <a href="/">
            <AiFillInstagram className="social_icon2_footer" />
          </a>
          <a href="/">
            <FaTwitterSquare className="social_icon_footer" />
          </a>
          <a href="/">
            <FaLinkedin className="social_icon_footer" />
          </a>
          <a href="/">
            <FaYoutube className="social_icon2_footer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
