import React, { useEffect, useState } from "react";
import "./Home.css";
import Image1 from "../../assets/products/home1.png";
import Image2 from "../../assets/products/home2.png";
import Image3 from "../../assets/products/home3.png";
import Image4 from "../../assets/products/home4.png";
import Image5 from "../../assets/products/home5.png";
import Image6 from "../../assets/products/home6.png";
import Image7 from "../../assets/products/home7.png";
import Image8 from "../../assets/products/home8.png";
import Image9 from "../../assets/products/home9.png";
import Image10 from "../../assets/products/home10.png";
import Image11 from "../../assets/products/home11.png";
import Image12 from "../../assets/products/home12.png";
import Image13 from "../../assets/products/home13.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import MajorCategoryCard from "../../components/MajorCategoryCard/MajorCategoryCard";
import MinorCategoryCard from "../../components/MinorCategoryCard/MinorCategoryCard";
import { getProducts } from "../../api/product";
import Stats from "../../components/Stats/Stats";
import ProductsList from "../../components/ProductsList/ProductsList";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="main_container_homebanner1">
        <div className="top_section_homebanner1">
          <MajorCategoryCard
            image={Image1}
            title="Delicious Cakes"
            description="Celebrate Sweet Moments"
            link="/products/cake"
          />
          <MajorCategoryCard
            image={Image2}
            title="Fruits & Flowers"
            description="Inspired by nature’s best"
            link="/products/flowers"
          />
        </div>
        <div className="middle1_section_homebanner1">
          <MinorCategoryCard
            image={Image3}
            title="Gift Items"
            description="Send this to someone you love"
            link="/products/gift"
          />
          <MinorCategoryCard
            image={Image4}
            title="Birthday Bash Gifts"
            description="Birthday Bash"
            link="/products/birthday"
          />
          <MinorCategoryCard
            image={Image5}
            title="Customised Goodies"
            description="Send this to someone you love"
            link="/products/customise"
          />
          <MinorCategoryCard
            image={Image6}
            title="Vocal for Local"
            description="Shop by Local"
            link="/products/local"
          />
        </div>
        <div className="middle2_section_homebanner1">
          <h4>Celebrate Occasions with Scale : Your Genuine Place to Shop</h4>
          <p>
            Thoughtfully curated 139,821 Gift Ideas. Get 2-Hour Delivery & Free
            Shipping in India.
          </p>
        </div>
        <div className="bottom_section_homebanner1">
          <div className="bottom_first_section_homebanner1">
            <h4>Thoughtfully Curated Gifts</h4>
            <div className="top_section_homebanner1">
              <MajorCategoryCard
                image={Image7}
                title="Anniversary Gifts"
                description="Celebrate Your Journey of Love"
                link="/products/anniversary"
              />
              <MajorCategoryCard
                image={Image8}
                title="Convey Best Wishes"
                description="Wish them success & happiness"
                link="/products/wish"
              />
            </div>
          </div>
          <div className="bottom_third_section_homebanner1">
            <ProductCard
              type="type2"
              product={
                {
                  image: Image9,
                  description:
                    "Gift your little ones loads of smiles with Special Birthday Cakes for Kids",
                  link: "/products/customise",
                }}
            />
            <ProductCard
              type="type2"
              product={
                {
                  image: Image10,
                  description:
                    "Add a delish twist to your surprise with artistic Choco Bouquets",
                  link: "/products/customise",
                }}
            />
            <ProductCard
              type="type2"
              product={
                {
                  image: Image11,
                  description:
                    "Magnify their joy & excitement with our attractive Gift Hampers",
                  link: "/products/customise",
                }}
            />
            <ProductCard
              type="type2"
              product={
                {
                  image: Image12,
                  description:
                    "Brighten up their day by surprising them with Exotic Flowers",
                  link: "/product/customise",
                }}
            />
            <ProductCard
              type="type2"
              product={{
                  image: Image13,
                  description:
                    "Find meaningful & thoughtful gifts from our Curated Collection",
                  link: "/products/customise",
                }}
            />
          </div>
        </div>
      </div>
      <ProductsList products={products} />
      <div style={{ height: "60px", backgroundColor: "#f2f2f2" }}></div>
      <Stats />
    </div>
  );
};

export default Home;
