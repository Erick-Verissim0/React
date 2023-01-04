import React from 'react';

const App = () => {
  const [active, setActive] = React.useState(false); // por padrão é usado o "set na frente e depois o nome do paramêtro"

  const [data, setData] = React.useState({ name: 'Erick', age: '18' });

  function handClick() {
    setActive(!active);
    setData({ ...data, faculty: 'Cesmac' });
  }

  return (
    <div>
      <p> {data.name} </p>
      <p> {data.age} </p>
      <p> {data.faculty} </p>
      <button onClick={handClick}> {active ? 'Active' : 'Disabled'} </button>;
    </div>
  );
};

export default App;
