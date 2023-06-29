import React, { useEffect, useState } from "react";
import { TbMathGreater } from "react-icons/tb";
import "../../css/Payment/PaymentBanner1Styles.css";
import { CgTrash } from "react-icons/cg";
import { HiOutlinePencil } from "react-icons/hi";
import Pay1 from "../../../assets/pay1.png";
import Pay2 from "../../../assets/pay2.png";
import Pay3 from "../../../assets/pay3.png";
import { Link } from "react-router-dom";
import jsonFile from "../../../dummyData.json";

const PaymentBanner2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products2 = jsonFile.Orders;

    setProducts(products2);
  });
  return (
    <div className="main_container_paymentbanner1">
      <div className="sub_header_paymentbanner1">
        <Link to="/">Home</Link>
        <TbMathGreater className="greater_icon_aboutbanner1" />
        <Link to="/paymentportal2">Payment Portal</Link>
      </div>

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

          <div className="form_main_container_paymentbanner1">
            <div className="delivery_box_paymentbanner1">
              <div className="delivery_left_section_paymentbanner1">
                <div className="dot_box_paymentbanner1"></div>

                <div className="delivery_details_box_paymentbanner1">
                  <h4>Anshul Sachdeva . 9876543219</h4>
                  <p>Rorkee, Haridwar, 247667</p>
                </div>
              </div>

              <div className="delivery_right_section_paymentbanner1">
                <HiOutlinePencil className="delivery_right_icon_paymentbanner1" />
                <CgTrash className="delivery_right_icon_paymentbanner1" />
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_section_paymentbanner1">
          <div className="top_left_section_paymentbanner1">
            <div className="number_section_paymentbanner1">
              <p>3</p>
            </div>
            <h4>Payment Options</h4>
          </div>

          {/* PAYMENT SECTION */}
          <div className="payment_main_container_paymentbanner1">
            <div className="payment_first_section_paymentbanner1">
              <div className="payment_first_top_section_paymentbanner1">
                <div className="dot_box_paymentbanner1"></div>
                <h4>Credit Card</h4>
              </div>

              <div className="payment_first_middle1_section_paymentbanner1">
                <input type="number" placeholder="Card Number" />
                <input type="text" placeholder="Name on Card" />
              </div>

              <div className="payment_first_middle2_section_paymentbanner1">
                <div className="payment_middle2_left_section_paymentbanner1">
                  <select>
                    <option>MM</option>
                    <option>JAN</option>
                    <option>FEB</option>
                    <option>MAR</option>
                  </select>

                  <select>
                    <option>YYYY</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>

                  <input type="text" placeholder="CVV" />
                </div>

                <div className="payment_middle2_right_section_paymentbanner1">
                  <button className="pay_btn_paymentbanner1">
                    PAY &nbsp; &#x20B9; 3798
                  </button>
                </div>
              </div>

              <div className="payment_first_bottom_section_paymentbanner1">
                <input type="checkbox" id="cb1" />
                <label for="cb1">Save this card for future transactions</label>
              </div>
            </div>

            <div className="payment_second_section_paymentbanner1">
              <div className="payment_second_box_paymentbanner1">
                <input type="radio" name="payment" id="payment" />
                <p>Debit Card</p>
              </div>

              <div className="payment_second_box_paymentbanner1">
                <input type="radio" name="payment" id="payment" />
                <p>Net Banking</p>
              </div>

              <div className="payment_second_box_paymentbanner1">
                <input type="radio" name="payment" id="payment" />
                <p>PhonePay</p>
              </div>

              <div className="payment_second_box_paymentbanner1">
                <input type="radio" name="payment" id="payment" />
                <p>PayPal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="payment_options_container_paymentbanner1">
          <div className="payment_options_left_section_paymentbanner1">
            <p>100 % Smile Guranteed</p>
            <p>100 % Safe and Secure Payments</p>
            <p>6 Million People Trust Us</p>
          </div>

          <div className="payment_options_right_section_paymentbanner1">
            <img src={Pay1} alt="pay" />
            <img src={Pay2} alt="pay" />
            <img src={Pay3} alt="pay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentBanner2;
