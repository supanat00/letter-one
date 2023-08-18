import React, { useState, useEffect } from 'react';
import Scrollbutton from '../icon/scroll-down.svg';

function AutoScroll () {
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleScroll = () => {
    setIsScrolling(!isScrolling);
  };

  useEffect(() => {
    if (isScrolling) {
      const intervalId = setInterval(() => {
        window.scrollBy(0, isScrolling ? 3 : -3);
      }, 50);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isScrolling]);

  return (
    <div className="auto-scroll">

      {/* Auto Scroll Button */}
      <button className={`auto-scroll-button ${isScrolling ? 'scrolling' : ''}`} onClick={toggleScroll}>
        <img src={Scrollbutton} alt={isScrolling ? 'Scroll Up' : 'Scroll Down'} />
      </button>

    </div>
  );
}

export default AutoScroll;