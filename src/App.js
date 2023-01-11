import React from 'react';

function App() {
  const [color, setColor] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setColor([...color, target.value]);
    } else {
      setColor(color.filter((color) => color !== target.value));
    }
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={color.includes('Red')}
          value="Red"
        />
        Red
      </label>
      <label>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={color.includes('Green')}
          value="Green"
        />
        Green
      </label>
    </form>
  );
}

export default App;
