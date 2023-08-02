import React from 'react';
const FormHandler = (props) => {
  const { id, label, ...inputProps } = props;
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
};

export default FormHandler;
