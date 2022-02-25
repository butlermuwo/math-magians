/* eslint-disable react/jsx-key */
/* eslint-disable import/extensions */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
