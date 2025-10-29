import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Implementations from './components/Implementations';
import CustomerSuccessImplementation from './components/CustomerSuccessImplementation';
import TomFordBeautyImplementation from './components/TomFordBeautyImplementation';
import BrooksRunningImplementation from './components/BrooksRunningImplementation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/implementations" element={<Implementations />} />
          <Route path="/implementations/at-home" element={<CustomerSuccessImplementation />} />
          <Route path="/implementations/tom-ford-beauty" element={<TomFordBeautyImplementation />} />
          <Route path="/implementations/brooks-running" element={<BrooksRunningImplementation />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
