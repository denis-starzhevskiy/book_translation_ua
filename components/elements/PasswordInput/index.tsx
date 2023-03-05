import React, { useState } from 'react';

import s from './PasswordInput.module.scss';
import { viewHidden, viewOpened } from '@/components/modules/icons';

type PasswordInputProps = {
  label?: string;
};

const PasswordInput = ({ label }: PasswordInputProps) => {
  const idx = Math.random().toString();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={s.container}>
      {label && (
        <label htmlFor={`password-input-${idx}`} className={s.label}>
          {label}
        </label>
      )}
      <div className={s.inputContainer}>
        <input
          id={`password-input-${idx}`}
          type={isOpen ? 'text' : 'password'}
          className={s.input}
        />
        <span className={s.iconContainer} onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? viewOpened() : viewHidden()}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
