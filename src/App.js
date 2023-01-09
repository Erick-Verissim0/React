import React from 'react';

function App() {
  const [name, setName] = React.useState('');

  return (
    <form>
      <label htmlFor="idName">Nome:</label>
      <input
        id="idName"
        value={name}
        onChange={(event) => setName(event.target.value)}
      ></input>
      <h2>{name}</h2>
    </form>
  );
}

export default App;
