import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Home from './Home';
import ErrorNotFound from './ErrorNotFound';
import Login from './Login';
import Product from './Product';

function App() {
  return (
    <div>
      <h2> Escolha para onde você quer ir... </h2>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="product/*" element={<Product />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
