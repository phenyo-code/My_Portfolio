import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Header from './components/Header';
import Footer from './pages/Footer';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Roomify from './CaseStudies/Roomify';
import Nwu from './CaseStudies/Nwu';
import Finora from './CaseStudies/Finora';
import Unieats from './CaseStudies/Unieats';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/roomify" element={<Roomify />} />
        <Route path="/nwu" element={<Nwu />} />
        <Route path="/unieats" element={<Unieats />} />
        <Route path="/finora" element={<Finora />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
