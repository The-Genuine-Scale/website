import React, { useEffect, useState } from "react";
import { TbMoodSmileDizzy } from "react-icons/tb";
import "./SingleProduct.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import { getProducts, getProductById } from "../../api/product";
import { addToCart, removeFromCart, getItemCount } from "../../api/cart";
import { auth } from "../../api/firebase";
import { Link } from "react-router-dom";
import PageNavigator from "../../components/PageNavigator/PageNavigator";
import ProductReview from "../../components/ProductReview/ProductReview";

const SingleProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const userId = auth.currentUser?.uid;
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
    console.log(id);
    async function fetchProductById() {
      try {
        const product = await getProductById(id);
        setProduct(product);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProductById();
  }, [id]);
  useEffect(() => {
    async function fetchItemCount() {
      try {
        const count = await getItemCount(userId, id);
        setQuantity(count);
      } catch (error) {
        console.log(error);
      }
    }

    fetchItemCount();
  }, [userId]);
  const handleRemoveFromCart = async () => {
    try {
      await removeFromCart(userId, id);
      setQuantity(quantity - 1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async () => {
    try {
      const result = await addToCart(userId, id);
      console.log(result);
      setQuantity(quantity + 1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main_container_productbanner1">
      <PageNavigator page1="product" page2={id} />
      <div className="product_main_container_productbanner1">
        {product && (
          <div className="product_container_productbanner1">
            <div className="product_image_section_productbanner1">
              <div className="product_first_section_productbanner1">
                <img src={product.imgUrl[0]} alt="item" />
                <img src={product.imgUrl[0]} alt="item" />
                <img src={product.imgUrl[0]} alt="item" />
                <img src={product.imgUrl[0]} alt="item" />
              </div>

              <div className="product_second_section_productbanner1">
                {product.imgUrl && (
                  <img src={product.imgUrl[0]} alt="mainitem" />
                )}
              </div>
            </div>

            <div className="product_third_section_productbanner1">
              <div className="product_third_top_section_productbanner1">
                <div className="product_third_section_top_upper_productbanner1">
                  <h4>{product.name}</h4>
                  <AiOutlineHeart className="heart_icon_productbanner1" />
                </div>

                <div className="product_third_section_top_middle_productbanner1">
                  <p>{product.description}</p>
                </div>

                <div className="product_third_section_top_lower_productbanner1">
                  <div className="rating_box_productbanner1">
                    <h6>{product.rating}</h6>
                  </div>
                  <p>{product.reviews_no}</p>
                </div>
              </div>

              <div className="product_third_middle1_section_productbanner1">
                <div className="product_third_middle1_upper_section_productbanner1">
                  <p>&#x20B9;</p>
                  <div className="product_third_price_section_productbanner1">
                    <h4>{product.price}</h4>
                    <p>inclusive of all taxes</p>
                  </div>
                  <h5>
                    <s>&#x20B9;{product.original_price}</s>
                  </h5>
                  <h6>({product.discount} % OFF)</h6>
                </div>

                <div className="product_third_middle1_lower_section_productbanner1">
                  <div className="product_third_middle1_icon_container_productbanner1">
                    <BiHomeHeart className="product_third_middle1_icon_productbanner1" />
                    <p>100 % Smile Guranteed</p>
                  </div>

                  <div className="product_third_middle1_icon_container_productbanner1">
                    <FaUserShield className="product_third_middle1_icon_productbanner1" />
                    <p>100 % Safe and Secure Payments</p>
                  </div>

                  <div className="product_third_middle1_icon_container_productbanner1">
                    <TbMoodSmileDizzy className="product_third_middle1_icon_productbanner1" />
                    <p>6 Million People Trust Us</p>
                  </div>
                </div>
              </div>

              <div className="product_third_bottom_section_productbanner1">
                {quantity > 0 ? (
                  <div className="product_quantity_section_productbanner1">
                    <button className="primary_btn_productbanner1" onClick={handleAddToCart}>
                      +
                    </button>
                    <p className="quantity_text">{quantity}</p>
                    <button
                      className="primary_btn_productbanner1"
                      onClick={handleRemoveFromCart}
                    >
                      -
                    </button>
                  </div>
                ) : (
                  <button
                    className="primary_btn_productbanner1"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                )}
                <Link
                  to="/paymentportal1"
                  className="secondary_btn_productbanner1"
                >
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {product && (
        <div className="description_main_container_productbanner1">
          <div className="description_container_productbanner1">
            <div className="description_top_section_productbanner1">
              <h4>Description</h4>
              <div className="line_productbanner1"></div>
              <p>{product.description}</p>
            </div>

            <div className="description_top_section_productbanner1">
              <h4>Delivery Information</h4>
              <div className="line_productbanner1"></div>
              <ul>
                {product.delivery_instructions &&
                  product.delivery_instructions.map((i) => <li>{i}</li>)}
              </ul>
            </div>

            <div className="description_top_section_productbanner1">
              <h4>Care Instructions</h4>
              <div className="line_productbanner1"></div>
              <ul>
                {product.care_instructions &&
                  product.care_instructions.map((i) => <li>{i}</li>)}
              </ul>
            </div>
          </div>
        </div>
      )}
      <div className="reviews_container_productbanner1">
        <div className="reviews_top_section_productbanner1">
          <h4>Customer Reviews</h4>
        </div>

        <div className="reviews_bottom_section_productbanner1">
          <ProductReview
            review={{
              name: "Nithya Menon",
              description:
                "FNP (Ferns N Petals) is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special",
              rating: 4.5,
              created_at: "9/4/2023 , 9:10 pm",
            }}
          />
          <ProductReview
            review={{
              name: "Nithya Menon",
              description:
                "FNP (Ferns N Petals) is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special",
              rating: 4.5,
              created_at: "9/4/2023 , 9:10 pm",
            }}
          />
          <ProductReview
            review={{
              name: "Nithya Menon",
              description:
                "FNP (Ferns N Petals) is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special",
              rating: 4.5,
              created_at: "9/4/2023 , 9:10 pm",
            }}
          />
          <ProductReview
            review={{
              name: "Nithya Menon",
              description:
                "FNP (Ferns N Petals) is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special",
              rating: 4.5,
              created_at: "9/4/2023 , 9:10 pm",
            }}
          />
        </div>
      </div>
      <ProductsList products={products} />
    </div>
  );
};

export default SingleProduct;
