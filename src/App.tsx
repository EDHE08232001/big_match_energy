// src/App.tsx
import { useState } from 'react';
import Header from './components/Header';
import logo from './assets/logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        {/* Routes start here */}
        <Routes>
          <Route path="/" element={ <Homepage /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
