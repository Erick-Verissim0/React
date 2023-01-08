import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Product from './Product';

const App = () => {
  return (
    <GlobalStorage>
      <Product />
      <div> </div>
    </GlobalStorage> // GlobalStorage é a constante que contem várias funções dentro. Lembrando, tem que passar ela como uma tag HTML, exemplo: <name> </name>
  );
};

export default App;
