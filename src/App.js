import React from 'react';

const products = [
  {
    id: 1,
    name: 'Smartphone',
    value: 'R$2500',
    color: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    name: 'Notebook',
    value: 'R$3000',
    color: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    name: 'Tablet',
    value: 'R$1500',
    color: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const data = products.filter(
    ({ value }) => Number(value.replace('R$', '')) > 1500
  );
  return (
    <section>
      {data.map(({ id, name, value, color }) => (
        <div key={id}>
          <h1>Produto: {name}</h1>
          <p>Preço: {value}</p>
          <ul>
            {color.map((colors) => (
              <li
                style={{ backgroundColor: colors, color: 'white' }}
                key={colors}
              >
                {colors}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default App;
