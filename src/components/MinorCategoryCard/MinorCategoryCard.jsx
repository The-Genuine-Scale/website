import React from "react";
import { Link } from "react-router-dom";
import './MinorCategoryCard.css'

const MiddleCard = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="middle1_detail_box_homebanner1">
      <div className="middle1_detail_upper_section_homebanner1">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="middle1_detail_lower_section1_homebanner1">
        <img src={image} alt="product" />
      </div>
    </Link>
  );
};

export default MiddleCard;
