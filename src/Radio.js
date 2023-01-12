import React from 'react';

function Radio({ pergunta, options, id, value, onChange, active }) {
  if (active === false) return null;
  return (
    <fieldset
      style={{ padding: '2rem', marginBotton: '1rem', border: '2px solid' }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((options) => (
        <label
          key={options}
          style={{ marginBotton: '1rem', fontFamily: 'monospace' }}
        >
          <input
            id={id}
            value={options}
            checked={value === options}
            type="radio"
            onChange={onChange}
          />
          {options}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
