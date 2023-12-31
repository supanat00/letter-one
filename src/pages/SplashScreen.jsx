import React from 'react';
import { useNavigate } from 'react-router-dom';
import PartOne from '../components/PartOne';

function SplashScreen() {
  const navigate = useNavigate();

  const handlePageChange = () => {
    navigate('/HomePage'); // Redirect to the home page
  };

  return (
    <div className="App-splash" onClick={handlePageChange} onTouchEnd={handlePageChange}>
      < div className='splash-div'>
      < PartOne />
      </div>      
    </div>
  );
}

export default SplashScreen;
