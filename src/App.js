import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonationPage from './components/DonationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonationPage />} />
      </Routes>
    </Router>
  );
}

export default App;