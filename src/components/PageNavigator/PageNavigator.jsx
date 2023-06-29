import React from "react";
import { Link } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";
import "./PageNavigator.css";

const PageNavigator = ({ page1, page2 }) => {
  return (
    <div className="sub_header_productbanner1">
      <Link to="/">HOME</Link>
      <TbMathGreater className="greater_icon_aboutbanner1" />
      <Link to={`/${page1}`}>{page1.toUpperCase()}</Link>
      {page2 && (
        <>
          <TbMathGreater className="greater_icon_aboutbanner1" />
          <Link to={`/${page1}/${page2}`}>{page2.toUpperCase()}</Link>
        </>
      )}
    </div>
  );
};

export default PageNavigator;
