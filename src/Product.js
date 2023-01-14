import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import ProductDescription from './ProductDescription';
import ProductCustomization from './ProductCustomization';
import ProductAvaliation from './ProductAvaliation';

const Product = () => {
  return (
    <div>
      <nav>
        <NavLink to="">Description</NavLink>
        <NavLink to="avaliation">Avaliation</NavLink>
        <NavLink to="customization">Customization</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductDescription />} />
        <Route path="avaliation" element={<ProductAvaliation />} />
        <Route path="customization" element={<ProductCustomization />} />
      </Routes>
    </div>
  );
};

export default Product;
