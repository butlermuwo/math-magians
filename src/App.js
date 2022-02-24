import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes , Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </BrowserRouter>
);

export default App;
