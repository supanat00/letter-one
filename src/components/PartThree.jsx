import React, { useState, useEffect } from 'react';
import text5 from '../icon/noonut.png';
import map from '../icon/map.png';
import mapbutton from '../icon/map_button.png';
import pic_m from '../icon/pic_m.png';
import pic_l from '../icon/pic_l.png';
import pic_r from '../icon/pic_r.png';

function PartThree () {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.picture');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsImageVisible(isVisible);
      }

      const mapElement = document.querySelector('.image-7');
      if (mapElement) {
        const rect = mapElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsMapVisible(isVisible);
      }

      const textBlockElement = document.querySelector('.text-block');
      if (textBlockElement) {
        const rect = textBlockElement.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsTextVisible(isVisible);
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
              
      <img src={text5} className='image-6' alt="logo" />

      <div className={`w-layout-blockcontainer picture w-container ${isImageVisible ? 'active' : ''}`}>
        <img src={pic_l} alt="" className="pic-l"/>
        <img src={pic_m} alt="" className="pic-m"/>
        <img src={pic_r} alt="" className="pic-r"/>
      </div>
      
      <img src={map} className={`image-7 ${isImageVisible ? 'active' : ''}`} alt="logo" />

      <div className='w-layout-blockcontainer container-3 w-container'>      
      <div className={`text-block ${isMapVisible ? 'active' : ''}`}>
        Place: Rin at Raintree - Sai Hall
        <br />2 276 soi RAMA IX 17, Bang Kapi, Huai Khwang, Bangkok 10310
      </div>
      </div>

      <img src={mapbutton} className={`image-8 ${isTextVisible ? 'active' : ''}`} alt="logo" />

    </div>
  );
}

export default PartThree;
