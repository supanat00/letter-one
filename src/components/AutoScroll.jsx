import React, { useState, useEffect } from 'react';
import Scrollbutton from '../icon/scroll-down.svg';

function AutoScroll() {
  const [isScrolling, setIsScrolling] = useState(true); // เริ่มต้นเลื่อนหน้าจอ

  const toggleScroll = () => {
    setIsScrolling(!isScrolling);
  };

  useEffect(() => {
    if (isScrolling) {
      const smoothScroll = () => {
        const currentScroll = window.scrollY;
        const targetScroll = currentScroll + 3;
        window.scrollTo(0, targetScroll);

        if (targetScroll < document.body.scrollHeight) {
          requestAnimationFrame(smoothScroll);
        } else {
          setIsScrolling(false);
        }
      };

      smoothScroll();
    }
  }, [isScrolling]);

  return (
    <div className="auto-scroll">
      {/* Auto Scroll Button */}
      <button
        className={`auto-scroll-button ${isScrolling ? 'scrolling' : ''}`}
        onClick={toggleScroll}
      >
        <img src={Scrollbutton} alt={isScrolling ? 'Scroll Up' : 'Scroll Down'} />
      </button>
    </div>
  );
}

export default AutoScroll;
