import React from 'react';

import s from './ThemeToggle.module.scss';

type Props = {};

const ThemeToggle = (props: Props) => {
  const [currentTheme, SetCurrentTheme] = React.useState('dark');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    SetCurrentTheme(e.currentTarget.checked ? 'dark' : 'light');

  return (
    <label className={s.switch}>
      <input type="checkbox" checked={currentTheme === 'dark'} onChange={handleOnChange} />
      <span className={s.slider}></span>
    </label>
  );
};

export default ThemeToggle;
