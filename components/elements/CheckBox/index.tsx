import React from 'react';
import s from './CheckBox.module.scss';
import clsx from 'clsx';

type CheckBoxProps = {
  label?: string;
  name?: string;
  customClass?: string;
  checked?: boolean;
  onChange?: () => void;
};

const Checkbox = ({ label, customClass, checked, onChange, name }: CheckBoxProps) => {
  return (
    <label className={s.container}>
      <input type={'checkbox'} checked={checked} onChange={onChange} name={name} />
      <span className={clsx(s.checkmark, customClass)}></span>
      {label && <span className={s.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
