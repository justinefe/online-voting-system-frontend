import React from 'react';
import './index.scss';

const Input = ({ inputType, classes, uniqueId, ...rest }) => (
  <input type={inputType} required id={uniqueId} className={classes} {...rest} />
);

export default Input;
