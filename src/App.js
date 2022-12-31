import React from 'react';

const Title = ({ cor, text, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {text}, {children}
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Title cor="red" text="Meu titulo 1">
        Isso é o children
        <p>Teste</p>
      </Title>
      <Title cor="blue" text="Meu titulo 2" />
    </div>
  );
};

export default App;
