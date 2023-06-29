import React, { useEffect, useState } from "react";
import PageNavigator from "../../components/PageNavigator/PageNavigator";
import "../../css/Payment/PaymentBanner1Styles.css";
import { CgTrash } from "react-icons/cg";
import { Link } from "react-router-dom";
import jsonFile from "../../../dummyData.json";

const PaymentBanner1 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products2 = jsonFile.Orders;
    setProducts(products2);
  });

  return (
    <div className="main_container_paymentbanner1">
    <PageNavigator page1="payment" />

      <div className="main_box_paymentbanner1">
        <div className="top_section_paymentbanner1">
          <div className="top_left_section_paymentbanner1">
            <div className="number_section_paymentbanner1">
              <p>1</p>
            </div>
            <div className="number_bottom_paymnetbanner1">
              <h4>Personal Information</h4>
              <p>scaleindia@gmail.com</p>
            </div>
          </div>

          <div className="top_right_section_paymentbanner1">
            <p>scaleindia@gmail.com</p>
          </div>
        </div>

        <div className="middle_section_paymentbanner1">
          <div className="middle_top_section_paymentbanner1">
            <div className="top_left_section_paymentbanner1">
              <div className="number_section_paymentbanner1">
                <p>2</p>
              </div>
              <h4>Order & Delivery Details</h4>
            </div>
          </div>

          {/* ORDER DETAILS CONTAINER */}
          <div className="order_details_section_paymentbanner1">
            {products &&
              products.map((product) => (
                <div key={product.productId} className="order_box_paymentbanner1">
                  <div className="order_box_left_section_paymentbanner1">
                    <div className="order_box_image_box_paymentbanner1">
                      <img src={product.imageUrl} alt="item" />
                      <div className="quantity_box_paymentbanner1">
                        <div className="quantity_icon_paymentbanner1">
                          <p>-</p>
                        </div>
                        <div className="number_icon_paymentbanner1">
                          <p>1</p>
                        </div>
                        <div className="quantity_icon_paymentbanner1">
                          <p>+</p>
                        </div>
                      </div>
                    </div>

                    <div className="order_box_item_box_paymentbanner1">
                      <h4>{product.productName}</h4>
                      <p>
                        Luxury brands are typically associated with high
                        quality, prestige, exclusivity, and status. They command
                        premium prices and offer a unique experience{" "}
                      </p>
                    </div>
                  </div>

                  <div className="order_box_right_section_paymentbanner1">
                    <div className="order_box_price_box_paymentbanner1">
                      <h4>Delivery On</h4>
                      <h5>Fri, 20 Apr, 2023</h5>
                      <p>
                        Standard Delivery, <span>Free</span>
                      </p>
                    </div>

                    <div className="order_box_delete_box_paymentbanner1">
                      <CgTrash className="delete_icon_paymentbanner1" />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* PAYMENT FORM */}
          <div className="form_main_container_paymentbanner1">
            <div className="form_container_paymentbanner1">
              <div className="form_top_section_paymentbanner1">
                <h4>Order & Delivery Details</h4>
              </div>

              <div className="form_middle_section_paymentbanner1">
                <form className="form_paymentbanner1">
                  <div className="form_box_paymentbanner1">
                    <select>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                    </select>
                    <input type="text" placeholder="*Recipient's Name" />
                  </div>

                  <div className="form_box_paymentbanner1">
                    <select>
                      <option>+91</option>
                      <option>+71</option>
                    </select>
                    <input type="number" placeholder="*Recipient's Mobile" />
                  </div>

                  <div className="form_box_paymentbanner1">
                    <input type="text" placeholder="*Recipient's Address" />
                  </div>

                  <div className="form_box_paymentbanner1">
                    <select>
                      <option>+91</option>
                      <option>+71</option>
                    </select>
                    <input
                      type="number"
                      placeholder="*Recipient's Alt. Mobile"
                    />
                  </div>

                  <div className="form_box_paymentbanner1">
                    <input type="text" placeholder="*Landmark" />
                  </div>

                  <div className="form_box_paymentbanner1">
                    <input
                      type="text"
                      placeholder="Recipient's Email(Optional)"
                    />
                  </div>
                </form>
              </div>

              <div className="form_bottom_section_paymentbanner1">
                <Link to="/paymentportal2" className="primary_btn_paymentbanner1">SAVE</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="top_section_paymentbanner1">
          <div className="top_left_section_paymentbanner1">
            <div className="number_section_paymentbanner1">
              <p>3</p>
            </div>
            <h4>Payment Options</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBanner1;
