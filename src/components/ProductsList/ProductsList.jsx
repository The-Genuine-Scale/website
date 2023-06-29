import React from "react";
import "./ProductsList.css";
import { Link } from "react-router-dom";

const ProductCard4 = ({ products }) => {
  return (
    <div className="product_list_main_container_productcard1">
      <div className="product_list_container_productcard1">
        {products.map((product) => (
          <Link to={`/product/${product.docId}`} key={product.docId} className="main_container_productcard1">
            <div className="top_section_productcard1">
              <img src={product.imgUrl[0]} alt="product" />
            </div>

            <div className="bottom_section_productcard1">
              <p>{product.name}</p>
              <h5>&#x20B9; {product.price}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCard4;
