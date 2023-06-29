import React from 'react';
import "../../css/App/SalesBanner2Styles.css";

const SalesBanner2 = () => {
  return (
    <div className='main_container_salesbanner2'>
      <div className='main_box_salesbanner2'>
        <div className='left_section_salesbanner2'>
            <h4>SCALE</h4>
            <p>leads to your needs</p>
        </div>

        <div className='middle_section_salesbanner2'></div>

        <div className='right_section_salesbanner2'>
            <div className='right_upper_section_salesbanner2'>
                <h4>Placing Your First Order ? Get Upto <span>15% Off</span></h4>
            </div>

            <div className='right_lower_section_salesbanner2'>
                <h4>Use Code : <span>SCALEONE</span></h4>
                <button className='primary_btn_salesbanner2'>Redeem Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SalesBanner2
