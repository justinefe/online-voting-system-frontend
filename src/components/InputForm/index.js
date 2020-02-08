import React from 'react';
import Input from '../Input';
import Label from '../Label';

const InputForm = ({
  labelname,
  inputType,
  classes,
  inputClass,
  labelClass,
  uniqueId,
  ...rest
}) => (
  <div className={classes}>
    <Label labelname={labelname} uniqueId={uniqueId} classes={labelClass} />
    <Input inputType={inputType} uniqueId={uniqueId} classes={inputClass} {...rest} />
  </div>
);

export default InputForm;
