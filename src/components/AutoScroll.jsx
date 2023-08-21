import React, { useState, useEffect, useRef } from 'react';
import Scrollbutton from '../icon/scroll-down.svg';

function AutoScroll() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const scrollStep = 1; // ขั้นตอนการเลื่อน
  const scrollInterval = 20; // ช่วงเวลาเลื่อน (มิลลิวินาที)

  const handleScroll = () => {
    if (isAutoScrolling) {
      window.scrollBy(0, scrollStep);

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        setIsAutoScrolling(false);
      }
    }
  };

  

  const autoScrollRef = useRef();
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        handleScroll();

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
          clearInterval(autoScrollRef.current);
        }
      }, scrollInterval);

      return () => {
        clearInterval(autoScrollRef.current);
      };
    }
  }, [isAutoScrolling]);

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <div className="auto-scroll">
      {/* Auto Scroll Button */}
      <button
        className={`auto-scroll-button ${isAutoScrolling ? 'scrolling' : ''}`}
        onClick={toggleAutoScroll}
      >
        <img src={Scrollbutton} alt={isAutoScrolling ? 'Pause' : 'Play'} 
        className={`scroll-icon ${isAutoScrolling ? 'spinning' : ''}`}/>
      </button>
    </div>
  );
}

export default AutoScroll;
