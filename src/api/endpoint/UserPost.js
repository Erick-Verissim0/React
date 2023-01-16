import React from 'react';

function UserPost() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then((json) => json);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="username"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button> Enviar </button>
      </form>
    </div>
  );
}

export default UserPost;
