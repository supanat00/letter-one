import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/HomePage'); // Redirect to the home page after 3 seconds
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="App-splash waveTextAnimated welcome-text">
      <span>L</span>
      <span>O</span>
      <span>V</span>
      <span>E</span>
      <span>S.</span>
    </div>
  );
}

export default SplashScreen;
