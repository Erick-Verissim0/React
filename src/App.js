import React from 'react';

function App() {
  const [select, setSelect] = React.useState('');

  return (
    <div>
      <form>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option disabled value=""></option>
          <option value="Notebook">Notebook</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Tablet">Tablet</option>
        </select>
        {select}
      </form>
    </div>
  );
}

export default App;
