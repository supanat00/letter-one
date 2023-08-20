import React, { useState, useEffect } from 'react';
import Scrollbutton from '../icon/scroll-down.svg';

function AutoScroll() {
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    if (isScrolling) {
      let startTime = null;
      const duration = 45000; // 45 วินาที
      const startY = window.scrollY;
      const endY = document.body.scrollHeight - window.innerHeight;
      
      const animateScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollPercentage = Math.min(1, progress / duration);
        const targetScrollY = startY + (endY - startY) * scrollPercentage;
        window.scrollTo(0, targetScrollY);

        if (scrollPercentage < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }, [isScrolling]);

  const toggleScroll = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <div className="auto-scroll">
      {/* Auto Scroll Button */}
      <button
        className={`auto-scroll-button ${isScrolling ? 'scrolling' : ''}`}
        onClick={toggleScroll}
      >
        <img src={Scrollbutton} alt={isScrolling ? 'Pause' : 'Play'} />
      </button>
    </div>
  );
}

export default AutoScroll;
