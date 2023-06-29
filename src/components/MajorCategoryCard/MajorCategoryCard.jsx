import React from "react";
import { Link } from "react-router-dom";
import './MajorCategoryCard.css'

const CategoryCard = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="top_detail_box_homebanner1">
      <div className="top_detail_left_section_homebanner1">
        <h4>{title}</h4>
        <p>{description}</p>

        <button className="primary_btn_homebanner1">BUY NOW</button>
      </div>

      <div className="top_detail_right_section_homebanner1">
        <img src={image} alt="gift" />
      </div>
    </Link>
  );
};

export default CategoryCard;
