import React from 'react';
import s from './Checkbox.module.scss';

type CheckboxProps = {
  label: string;
  name: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, name }) => {
  return (
    <label className={s.container}>
      <input type={'checkbox'} name={name} />
      <span className={s.checkmark}></span>
      {label}
    </label>
  );
};

export default Checkbox;
