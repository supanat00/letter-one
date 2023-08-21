import React, { useState, useEffect } from 'react';
import text5 from '../icon/noonut.png';
import map from '../icon/map.png';
import mapbutton from '../icon/map_button.png';
import pic_m from '../icon/pic_m.png';
import pic_l from '../icon/pic_l.png';
import pic_r from '../icon/pic_r.png';

function PartThree () {
  const [isNongnutVisible, setIsNongnutVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      const nongnutElement = document.querySelector('.image-6');
      if (nongnutElement) {
        const rect = nongnutElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsNongnutVisible(isVisible);
      }

      const element = document.querySelector('.picture');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsImageVisible(isVisible);
      }      
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility when component mounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='partthree'>
              
      <img src={text5} className={`image-6 ${isNongnutVisible ? 'active' : ''}`} alt="logo" />

      <div className={`w-layout-blockcontainer picture w-container ${isImageVisible ? 'active' : ''}`}>
        <img src={pic_l} alt="" className="pic-l"/>
        <img src={pic_m} alt="" className="pic-m"/>
        <img src={pic_r} alt="" className="pic-r"/>
      </div>
      
      <img src={map} className="image-7"  alt="logo" />

          
      <div className='text-block' >
        Place: Rin at Raintree - Sai Hall
        <br />2 276 soi RAMA IX 17, Bang Kapi, Huai Khwang, Bangkok 10310
      </div>
      

     
  <a
    href="https://www.google.com/maps/place/276+Soi+Rama+IX+17,+Bang+Kapi,+Huai+Khwang,+Bangkok+10310"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={mapbutton} className="image-8" alt="logo" />
  </a>



    </div>
  );
}

export default PartThree;
