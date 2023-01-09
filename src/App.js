import React from 'react';

const App = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        id="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      ></input>
      {form.name}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={setForm.email}
        onChange={handleChange}
      ></input>
      {form.email}
      <button>Click</button>
    </form>
  );
};

export default App;
