import React from 'react';

export const GlobalContext = React.createContext(); // O que vai com o createContext é o que vai ser exportado para outros componentes

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);

  function addOne() {
    setCount((count) => count + 1);
  }

  function addTwo() {
    setCount(count + 2);
  }

  return (
    <GlobalContext.Provider value={{ count, addOne, addTwo }}> 
      {children}
    </GlobalContext.Provider> // São dois modos do createContext, nessa caso eu estou usando o Provider, não sei o que o outro faz. No value eu estou passando os paramêtros, funções e qualquer outra coisa que eu quero importar. 
  );
};
