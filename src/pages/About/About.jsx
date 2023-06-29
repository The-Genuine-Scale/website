import React from "react";
import About1 from "../../assets/team/about1.png";
import About2 from "../../assets/team/about2.png";
import About3 from "../../assets/team/about3.png";
import About4 from "../../assets/team/about4.png";
import About5 from "../../assets/team/about5.png";
import About6 from "../../assets/team/about6.png";
import About7 from "../../assets/team/about7.png";
import About8 from "../../assets/team/about8.png";
import About9 from "../../assets/team/about9.png";
import TeamMember from "../../components/TeamMember/TeamMember";
import Stats from "../../components/Stats/Stats";
import PageNavigator from "../../components/PageNavigator/PageNavigator";
import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about_container">
        <PageNavigator page1="about" />
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

        <div className="team">
          <TeamMember image={About1} name="Anshul Sachdeva" />
          <TeamMember image={About2} name="Ruchika Enakhiya" />
          <TeamMember image={About3} name="Sahajpreet Singh" />
          <TeamMember image={About4} name="Muskan Goel" />
          <TeamMember image={About5} name="" />
          <TeamMember image={About6} name="Raushan Raj" />
          <TeamMember image={About7} name="Kalpesh Gothwal" />
          <TeamMember image={About8} name="Sandal Rana" />
          <TeamMember image={About9} name="Shiva" />
          <TeamMember image={About9} name="Vaibhav" />
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default AboutUs;
