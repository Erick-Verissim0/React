import React from 'react';
import Radio from './Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent() ',
      'React.createComponent ',
      'React.createElement() ',
    ],
    resposta: 'React.createElement() ',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um component externo? ',
    options: [
      'import Component from "./Component"',
      'required("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo? ',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook? ',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

function App() {
  const [response, setResponse] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });

  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState(null);

  function handleChange({ target }) {
    setResponse({ ...response, [target.id]: target.value });
  }

  function results() {
    const correct = perguntas.filter(
      ({ resposta, id }) => response[id] === resposta
    );
    setResult(`Você acertou: ${correct.length} de ${perguntas.length}!`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      results();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((perguntas, index) => (
        <Radio
          active={slide === index}
          key={perguntas.id}
          value={response[perguntas.id]}
          onChange={handleChange}
          {...perguntas}
        />
      ))}
      {result ? (
        <p>{result}</p>
      ) : (
        <button onClick={handleClick}> Próxima </button>
      )}
    </form>
  );
}

export default App;
