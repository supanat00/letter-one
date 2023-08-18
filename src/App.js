import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage, SplashScreen, Tester, } from './pages';

function App() {
  return (
    <Router>
    <div className="App">
      {/* เริ่มต้นแอปพลิเคชัน */}
        <Routes>
            {/* หน้าสแปลชส์สกรีน */}
            <Route path="/" element={<SplashScreen />} />
            {/* หน้าหลัก */}
            <Route path="/HomePage" element={<HomePage />} />
            {/* หน้าทดสอบ */}
            <Route path="/Tester" element={<Tester />} />
        </Routes>
      {/* สิ้นสุดแอปพลิเคชัน */}
    </div>
    </Router>
    
  );
}

export default App;
