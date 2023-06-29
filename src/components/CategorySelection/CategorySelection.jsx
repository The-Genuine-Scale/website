import React from "react";
import "./CategorySelection.css"

const CategorySelection = ({ category, handleLowToHigh, handleHighToLow }) => {
  return (
    <div className="categories_container_productbanner1">
      <div className="categories_top_section_productbanner1">
        {category ? (
          <h4>{category.toUpperCase()}</h4>
        ) : (
          <h4> Best Selling for Today</h4>
        )}
      </div>

      <div className="categories_bottom_section_productbanner1">
        <p>Sort By:</p>
        <div className="categories_box_productbanner1">
          <div className="categories_box_productbanner1">
            <div className="category_box_productbanner1">
              <p>New</p>
            </div>
          </div>

          <div className="categories_box_productbanner1">
            <div className="category_box_productbanner1">
              <p onClick={handleHighToLow}>Price: High-Low</p>
            </div>
          </div>

          <div className="categories_box_productbanner1">
            <div className="category_box_productbanner1">
              <p onClick={handleLowToHigh}>Price: Low-High</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;
