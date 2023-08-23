import React, { useEffect, useState } from "react";
import { TbMoodSmileDizzy } from "react-icons/tb";
import "./SingleProduct.css";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";
import { FaUserShield } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import { Timestamp } from "firebase/firestore";
import {
  getProducts,
  getProductById,
  updateProductDetails,
} from "../../api/product";
import { addToCart, removeFromCart, getItemCount } from "../../api/cart";
import { useNavigate } from "react-router-dom";
import PageNavigator from "../../components/PageNavigator/PageNavigator";
import ProductReview from "../../components/ProductReview/ProductReview";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = localStorage.getItem("uid");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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
        setReviews(product.reviews);
        console.log(product.reviews);
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
    if (!userId) {
      navigate("/login");
    }
    try {
      await removeFromCart(userId, id);
      setQuantity(quantity - 1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async () => {
    console.log(userId);
    if (!userId) {
      console.log("hehe");
      navigate("/login");
    }
    try {
      const result = await addToCart(userId, id);
      console.log(result);
      setQuantity(quantity + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleBuyNow = async () => {
    if (!userId) {
      navigate("/login");
    }
    if (quantity < 1) {
      setQuantity(1);
      try {
        await addToCart(userId, id);
      } catch (error) {
        console.log(error);
      }
    }
    navigate("/checkout");
  };
  const handleAddReview = async (newReview) => {
    if (!userId) {
      navigate("/login");
      return;
    }
    const reviewWithTimestamp = { ...newReview, created_at: Timestamp.now() };
    const updatedReviews = [...reviews, reviewWithTimestamp];
    setProduct((prevProduct) => ({
      ...prevProduct,
      reviews: updatedReviews,
    }));
    try {
      const updatedProduct = {
        ...product,
        reviews: updatedReviews,
      };
      console.log(updatedProduct);
      await updateProductDetails(updatedProduct);
      console.log("Product details updated successfully!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const openModal = () => {
    console.log(userId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="main_container_productbanner1">
      <PageNavigator page1="product" page2={id} />
      <div className="product_main_container_productbanner1">
        {product && (
          <div className="product_container_productbanner1">
            <div className="product_image_section_productbanner1">
              <div className="product_first_section_productbanner1">
                {product.imgUrl.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`item-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>

              <div className="product_second_section_productbanner1">
                {product.imgUrl && (
                  <img
                    src={product.imgUrl[selectedImageIndex]}
                    alt="mainitem"
                  />
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
                    <h6>{product.rating.toFixed(1)}</h6>
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
                    <button
                      className="primary_btn_productbanner1"
                      onClick={handleAddToCart}
                    >
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
                <button
                  onClick={handleBuyNow}
                  className="secondary_btn_productbanner1"
                >
                  BUY NOW
                </button>
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
          {reviews.map((review) => (
            <ProductReview key={review.id} review={review} />
          ))}
        </div>
        {userId!=null && (<button onClick={openModal} className="add-review-button">
          Add Review
        </button>)}
      </div>
      <ProductsList products={products} />
      <Modal
        className={"modal"}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Review Modal"
      >
        <span className="close-button" onClick={closeModal}>
          <FaTimes />
        </span>
        <ReviewForm onAddReview={handleAddReview} />
      </Modal>
    </div>
  );
};

export default SingleProduct;
