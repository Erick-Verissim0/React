import React from 'react';

function App() {
  const [radio, setRadio] = React.useState('');
  const [color, setColor] = React.useState('');

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <h2> Products </h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={radio === 'Smartphone'}
          value="Smartphone"
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          checked={radio === 'Notebook'}
          value="Notebook"
        />
        Notebook
      </label>
      <h2> Cores </h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setColor(target.value)}
          checked={color === 'Red'}
          value="Red"
        />
        Red
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setColor(target.value)}
          checked={color === 'Green'}
          value="Green"
        />
        Green
      </label>
    </form>
  );
}

export default App;
