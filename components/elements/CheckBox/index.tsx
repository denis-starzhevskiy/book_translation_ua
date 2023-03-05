import React from 'react';
import s from './CheckBox.module.scss';
import clsx from 'clsx';

type CheckBoxProps = {
  label?: React.ReactNode;
  name?: string;
  customClass?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ label, customClass, checked, onChange, name }: CheckBoxProps) => {
  return (
    <label className={clsx(s.container, customClass)}>
      <input type={'checkbox'} checked={checked} onChange={onChange} name={name} />
      <span className={clsx(s.checkmark)}></span>
      {label && <span className={s.label}>{label}</span>}
    </label>
  );
};

export default Checkbox;
