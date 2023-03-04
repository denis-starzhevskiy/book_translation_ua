import React from 'react';
import s from './RadioButton.module.scss';

type RadioButtonProps = {
  label: string;
  name: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, name }) => {
  return (
    <label className={s.container}>
      <input type={'radio'} name={name} />
      <span className={s.checkmark}></span>
      {label}
    </label>
  );
};

export default RadioButton;
