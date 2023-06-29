import React, { useState } from 'react'
import Header from '../components/jsx/App/Header';
import PaymentBanner1 from "../components/jsx/Payment/PaymentBanner1";
import SalesBanner1 from "../components/jsx/App/SalesBanner1";
import AboutBanner2 from "../components/jsx/AboutUs/AboutBanner2";
import Footer from "../components/jsx/App/Footer";

const PaymentPortal1 = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Header show={show} setShow={setShow} />
      {
        show ? ("") : (
          <>
      <PaymentBanner1 />
      <SalesBanner1 />
      <AboutBanner2 />
      <Footer />
      </>)}
    </div>
  )
}

export default PaymentPortal1
