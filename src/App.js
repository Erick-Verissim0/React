import React from 'react';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const [product, setProduct] = useLocalStorage('Produto:', '');

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <p> Produto escolhido: {product} </p>
      <button onClick={handleClick}> Notebook </button>
      <button onClick={handleClick}> Smartphone </button>
    </div>
  );
};

export default App;
