import React, { useRef, useState } from 'react';
import s from './Select.module.scss';
import expandIcon from '../../../public/images/expandDownIcon.svg';
import Image from 'next/image';
import clsx from 'clsx';
import Popover from '@/components/elements/Popover';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: Option[];
  customClass?: string;
};

const Select: React.FC<SelectProps> = ({ value: valueProp, onChange, options, customClass }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(valueProp);

  const open = Boolean(anchorEl);

  return (
    <>
      <div
        className={clsx(s.selectContainer, customClass)}
        ref={selectContainerRef}
        onClick={(event) => setAnchorEl(event.currentTarget)}>
        <div className={s.valueText}>{value}</div>
        <Image src={expandIcon} alt={'expand icon'} />
      </div>
      <Popover anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        <ul className={s.selectPopover}>
          {options.map((option) => (
            <li
              key={option.value}
              className={clsx(option.value === value && s.activeOption)}
              onClick={() => {
                setValue(option.value);
                setAnchorEl(null);
                onChange?.(option.value);
              }}>
              {option.label}
            </li>
          ))}
        </ul>
      </Popover>
    </>
  );
};

export default Select;
