import GlobalSvgSelector from '@/components/GlobalSvgSelector';
import React, { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';

import s from './Search.module.scss';
import clsx from 'clsx';

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  className?: string;
};

const Search = ({ label, placeholder, required, icon, className }: Props) => {
  const [value, setValue] = React.useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const debouncedOnChange = React.useCallback(
    debounce((str: string) => setValue(str), 200),
    []
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedOnChange(event.target.value);
  };

  return (
    <label className={clsx(s.search, className)}>
      {label && <span className={s.label}>{label}</span>}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {icon && (
        <div className={s.icon}>
          <GlobalSvgSelector id={icon} />
        </div>
      )}
    </label>
  );
};

export default Search;
