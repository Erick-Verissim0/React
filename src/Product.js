import React from 'react';
import { GlobalContext } from './GlobalContext'; // sempre tem que importar por aqui

const Product = () => {
  const global = React.useContext(GlobalContext); // lembre-se de criar uma const, let ou var para passar os valores. E nesse caso se usa o useContext com o valor que foi importado

  return (
    <div>
      Produto: {global.count}
      <button onClick={() => global.addTwo()}>Adicionar</button>
    </div>
  );
};

export default Product;
