import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Implementations from './components/Implementations';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/implementations" element={<Implementations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
