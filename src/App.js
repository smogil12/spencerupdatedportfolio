import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Implementations from './components/Implementations';
import CustomerSuccessImplementation from './components/CustomerSuccessImplementation';

function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/implementations" element={<Implementations />} />
          <Route path="/implementations/customer-success-implementation" element={<CustomerSuccessImplementation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
