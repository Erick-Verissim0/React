import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Fazer login');
    navigate('/about');
  }

  return (
    <div>
      <h2> Essa é a página de login </h2>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Login;
