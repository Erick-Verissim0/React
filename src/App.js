import React from 'react';

const Title = ({ color, text }) => {
  return <h1 style={{ color: color }}>{text}</h1>;
};

const App = () => {
  return (
    <div>
      <Title color="red" text="Meu titulo 1" />
      <Title color="blue" text="Meu titulo 2" />
      <Title color="green" text="Meu titulo 3" />
    </div>
  );
};

export default App;
