import React from 'react';

const App = () => {
  const [coments, setComents] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    setComents([...coments, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {coments.map((coments) => (
          <li key={coments}>{coments}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default App;
