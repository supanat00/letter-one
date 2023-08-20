import React from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/HomePage'); // Redirect to the home page
  };

  return (
    <div className="App-splash" onClick={handlePageChange} onTouchEnd={handlePageChange}>
      <div className="waveTextAnimated welcome-text">
        <span>L</span>
        <span>O</span>
        <span>V</span>
        <span>E</span>
        <span>S.</span>
      </div>
    </div>
  );
}

export default SplashScreen;
