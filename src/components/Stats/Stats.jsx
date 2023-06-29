import React from 'react';
import "./Stats.css";
import { GrShieldSecurity } from "react-icons/gr";
import { FaHeadset, FaUsers } from 'react-icons/fa';

const Stats = () => {
  return (
    <div className='main_container_aboutbanner2'>
      <div className='top_section_aboutbanner2'>
        <h4>Scale : India's Best Gift Portal. Send Cakes, Gifts & Flowers Online</h4>
        <p>Scale is India’s top gifting brand that helps you celebrate special moments by delivering fabulous gifts to your loved ones. You can find thoughtful gifts for all special days like Birthdays, Anniversaries, Valentine's day and festivals like Rakshabandhan (Rakhi), Diwali and Christmas etc. Our range of gifts includes flower bouquets and yummy cakes which can be delivered to all major cities in under 2 hours. We can also deliver personalised gifts, potted plants, chocolates, gift hampers, digital gifts etc</p>
      </div>

      <div className='bottom_section_aboutbanner2'>
        <div className='bottom_box_aboutbanner2'>
            <FaHeadset className="bottom_icon_aboutbanner2" />
            <h4>Dedicated Help Center</h4>
            <p>Call us anytime 24*7</p>
        </div>

        <div className='bottom_box_aboutbanner2'>
            <FaUsers className="bottom_icon_aboutbanner2" />
            <h4>29080 Happy Customers</h4>
            <p>Most Satisfied Customers and still counting</p>
        </div>

        <div className='bottom_box_aboutbanner2'>
            <GrShieldSecurity className="bottom_icon_aboutbanner2" />
            <h4>100% Safe & Secure Payments</h4>
            <p>Pay using secure payment methods</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
