import React from 'react';
import Title from './Title';

const Products = () => {
  const products = [
    { name: 'Notebook', properties: ['16gb', ' - 512gb'] },
    { name: 'Smartphone', properties: ['2 ram', ' - 128gb'] },
  ];

  return (
    <section>
      <Title text="Products" />
      {products.map((products) => (
        <li>{products.name} - { products.properties}</li>
      ))}
    </section>
  );
};

export default Products;
