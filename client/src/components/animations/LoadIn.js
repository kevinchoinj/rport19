import React from 'react';
import classNames from 'classnames';

const LoadIn = ({loadDelay, children}) => {
  const objectName = classNames(
    'load_in_object',
    {
      'load_in_object--display': true,
    }
  );

  const addLoadDelay = {
    animationDelay: loadDelay,
  };

  return(
    <div
      className={objectName}
      style={addLoadDelay}
    >
      {children}
    </div>
  );
};

export default LoadIn;