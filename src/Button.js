import React from 'react';

const Button = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Open Modal</button>;
};

export default Button;
