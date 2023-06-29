import React from "react";
import "./ProductReview.css";

const ProductReview = ({ review }) => {
  return (
    <div className="review_box_productbanner1">
      <div className="review_left_section_productbanner1">
        <div className="initials_box1_productbanner1">
          <p>{review.name.charAt(0)}</p>
        </div>
      </div>
      <div className="review_right_section_productbanner1">
        <div>
          <h4>{review.name}</h4>
          <p>{review.description}</p>
        </div>
        <div className="review_right_bottom_section_productbanner1">
          <div className="rating_box_productbanner1">
            <h6>{review.rating}</h6>
          </div>
          <h3>{review.created_at}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
