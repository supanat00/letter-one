import React, { useState, useEffect } from 'react';
import symbol1 from '../icon/symbol_1.png';

function PartOne ()  {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
      };
    
      const handleOrientation = (event) => {
        const angle = event.beta;
        const parallaxAmount = angle * 0.5; // Adjust this value as needed
        setScrollY(-parallaxAmount);
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('deviceorientation', handleOrientation);
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('deviceorientation', handleOrientation);
        };
      }, []);
  return (
    <div className='partone'>

      <div className='you-are'>
        You are invited to        
      </div>

      <div className='thewedding'>
        THE WEDDING OF
      </div>

      <div style={{ transform: `rotateY(${scrollY}deg)` }}>        
        <img src={symbol1} className='symbol-one' loading='lazy' alt="logo" />
      </div>
    </div>
  );
}

export default PartOne;
