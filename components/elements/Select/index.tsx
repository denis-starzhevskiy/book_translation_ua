import React, { useEffect, useRef, useState } from 'react';
import s from './Select.module.scss';
import expandIcon from '../../../public/images/expandDownIcon.svg';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import ClickAwayListener from '@/components/elements/ClickAwayListener';

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: Option[];
};

const Select: React.FC<SelectProps> = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<Element | null>(null);
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>('#portal');
    setMounted(true);
  }, []);

  const selectContainerRect = selectContainerRef.current
    ? selectContainerRef.current.getBoundingClientRect()
    : null;

  return (
    <>
      <div className={s.selectContainer} ref={selectContainerRef} onClick={() => setOpen(!open)}>
        <div>{value}</div>
        <Image src={expandIcon} alt={'expand icon'} />
      </div>
      {mounted && ref.current && open
        ? ReactDOM.createPortal(
            <ClickAwayListener onClickAway={() => setOpen(false)}>
              <div
                className={s.selectPopover}
                style={{
                  ...(selectContainerRect && {
                    left: selectContainerRect.left,
                    top: selectContainerRect.top + selectContainerRect.height + 10,
                    width: selectContainerRect.width,
                  }),
                }}>
                <ul>
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className={clsx(option.value === value && s.activeOption)}
                      onClick={() => {
                        onChange?.(option.value);
                        setOpen(false);
                      }}>
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            </ClickAwayListener>,
            ref.current
          )
        : null}
    </>
  );
};
export default Select;
