import React from 'react';
import Button from './Button';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <Button setModal={setModal} />
    </div>
  );
};

export default App;
