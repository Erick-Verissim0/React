import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
  width: PropTypes.number.isRequired,
};

function Button(props) {
  return (
    <button
      style={{
        width: `${props.width}px`,
        height: `${props.width / 3}px`,
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
