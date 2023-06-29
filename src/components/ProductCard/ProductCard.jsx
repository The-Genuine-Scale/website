import React from "react";
import { Link } from "react-router-dom";
import './ProductCard.css';

const ProductCard = ({ product, type }) => {
    console.log(product)
    if (type === "type1") {
      return (
        <Link to={`/product/${product?.docId}`} className="main_container_productcard2">
          <div className="top_section_productcard2">
            <img src={product.imgUrl[0]} alt="product" />
          </div>

          <div className="bottom_section_productcard2">
            <p>{product.name}</p>
            <div className="bottom_upper_section_productcard2">
              <h5>&#x20B9; {product.price}</h5>

              <div className="rating_box_productbanner1">
                <h6>{product.rating}</h6>
              </div>
            </div>

            <div className="bottom_lower_section_productcard2">
              <h4>Earliest Delivery : 26 April</h4>
              <h3>{product.ordersRated} Reviews</h3>
            </div>
          </div>
        </Link>
      );
    } else if (type === "type2") {
      return (
        <Link to={product.link} className="bottom_third_detail_box_homebanner1">
          <div className="bottom_third_detail_image_box_homebanner1">
            <img src={product.image} alt="product" />
          </div>
          <p>{product.description}</p>
        </Link>
      );
    } else {
      return null;
    }
  };

export default ProductCard;
