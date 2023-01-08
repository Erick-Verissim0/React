import React from 'react';

function handleClick() {
  let c;
  for (let i = 0; i < 10000000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [count, setCount] = React.useState(0);

  const t1 = performance.now(); // estou querendo a performance da const, em tempo de resposta
  const value = React.useMemo(() => handleClick(), []);
  console.log(performance.now() - t1);
  console.log(value);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
};
export default App;
