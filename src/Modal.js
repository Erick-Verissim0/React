import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        Isso é um modal
        <button onClick={() => setModal(false)}>Close Modal</button>
      </div>
    );
  return null;
};

export default Modal;
