import React from 'react';

const Label = (props) => {
  const {
    labelname, uniqueId, classes, ...rest
  } = props;

  return (
    <label htmlFor={`${uniqueId}`} {...rest} className={classes}>
      {labelname}
    </label>
  );
};

export default Label;
