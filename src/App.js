import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import errorNotFound from './errorNotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<errorNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
