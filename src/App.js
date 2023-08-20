import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage, Tester } from './pages';

function App() {
  return (
    <Router>
    <div className="App">
      {/* เริ่มต้นแอปพลิเคชัน */}
        <Routes>
            {/* หน้าหลัก */}
            <Route path="/" element={<HomePage />} />
            
            {/* หน้าทดสอบ */}
            <Route path="/Tester" element={<Tester />} />
        </Routes>
      {/* สิ้นสุดแอปพลิเคชัน */}
    </div>
    </Router>
    
  );
}

export default App;
