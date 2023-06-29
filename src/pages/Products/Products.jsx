import React, { useEffect, useState } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../api/product";
import PageNavigator from "../../components/PageNavigator/PageNavigator";
import CategorySection from "../../components/CategorySelection/CategorySelection";
import Stats from "../../components/Stats/Stats";
import ProductsList from "../../components/ProductsList/ProductsList";

const ProductBanner2 = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProductsByCategory(category);
        setProducts(productsData);
        console.log(productsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleLowToHigh = () => {
    let products2 = [...products].sort((a, b) => {
      return a.price - b.price;
    });

    setProducts(products2);
  };

  const handleHighToLow = () => {
    let products2 = [...products].sort((a, b) => {
      return b.price - a.price;
    });

    setProducts(products2);
  };

  return (
    <div className="main_container_productbanner1">
      {category ? (
        <PageNavigator page1="products" page2={`${category}`} />
      ) : (
        <PageNavigator page1="products" />
      )}

      <div className="categories_main_container_productbanner1">
        <CategorySection
          category={category}
          handleLowToHigh={handleLowToHigh}
          handleHighToLow={handleHighToLow}
        />
      </div>
      <ProductsList products = {products} />
      <Stats />
    </div>
  );
};

export default ProductBanner2;
