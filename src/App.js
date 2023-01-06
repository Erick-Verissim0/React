import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setCount((count) => count + 1); // poderia fazer como está na linha abaixo
    setItems([...items, 'Item' + (count + 1)]); // não estou passando a const como parametro do uma arrow function porque ja estou usando a própria constante dentro
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
