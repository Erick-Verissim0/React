import React from 'react';

function App() {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form>
      <input
        value={textarea}
        rows="5" // estou me referindo ao tamanho do textarea baseado em linhas
        onChange={({ target }) => setTextarea(target.value)}
      />
      {textarea}
    </form>
  );
}

export default App;
