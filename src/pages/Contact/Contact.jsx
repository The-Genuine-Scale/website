import React from "react";
import "./Contact.css";
import "../About/About.css";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Stats from '../../components/Stats/Stats'
import PageNavigator from "../../components/PageNavigator/PageNavigator";

const Contact = () => {
  return (
    <div>
      <div className="about_container">
      <PageNavigator page1="contact" />

        <div className="story">
          <p>
            The Genuine Scale was founded on 3rd July 2022 by Anshul Sachdeva
            and Ankit Babu on their way back to Jawahar bhawan from library, in
            IIT Roorkee. The idea of Scale is simple yet revolutionary - to
            organise the market of the indigenous products of our country by
            adding innovation to these and thereby "Scale" the local sellers.
          </p>

          <p>
            India is a developing country, we need more India run businesses and
            businesses who support them. We at scale want to make sure Indian
            ethnic indigenous products reach your doorstep without any hassle.
          </p>
        </div>
      </div>
      <div className="main_container_contactbanner2">
        <div className="left_section_contactbanner2">
          <h2>SCALE</h2>
          <p>leads to your needs</p>
        </div>

        <div className="right_section_contactbanner2">
          <div className="right_upper_section_contactbanner2">
            <p>TIDES, Bio-Incubator, 2nd & 3rd Floor, Multi- activity Center</p>

            <p>Indian Institute of Technology, Roorkee, Uttarakhand, 247667</p>
          </div>

          <div className="right_lower_section_contactbanner2">
            <a href="/">
              <FaFacebookSquare className="social_icon_contactbanner2" />
            </a>
            <a href="/">
              <AiFillInstagram className="social_icon2_contactbanner2" />
            </a>
            <a href="/">
              <FaTwitterSquare className="social_icon_contactbanner2" />
            </a>
            <a href="/">
              <FaLinkedin className="social_icon_contactbanner2" />
            </a>
            <a href="/">
              <FaYoutube className="social_icon2_contactbanner2" />
            </a>
          </div>
        </div>
      </div>
      <Stats/>
    </div>
  );
};

export default Contact;
