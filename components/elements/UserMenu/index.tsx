import React, { useEffect, useRef, useState } from 'react';
import s from './UserMenu.module.scss';
import expandIcon from '../../../public/images/ArrowDropDown.svg';
import Image from 'next/image';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import ClickAwayListener from '@/components/elements/ClickAwayListener';
import {
  addMoreRoundedIcon,
  bookIcon,
  bookMarkIcon,
  exitIcon,
  letterIcon,
  noticeIcon,
  profileIcon,
  settingIcon,
} from '@/components/modules/icons';
import logo from '@/public/images/logo.png';
import Divider from '@/components/elements/Divider/Divider';

type UserMenuProps = {
  user: {
    name: string;
    surname: string;
  };
};

const Select: React.FC<UserMenuProps> = ({ user }) => {
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
      <div
        className={clsx(s.selectContainer)}
        ref={selectContainerRef}
        onClick={() => setOpen(!open)}>
        <Image className={s.logo} src={logo} alt="Logo" width={50} height={50} />
        <div className={s.valueText}>{user.name + ' ' + user.surname}</div>
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
                    top:
                      selectContainerRect.top +
                      selectContainerRect.height +
                      10 +
                      document.documentElement.scrollTop,
                    width: '250px',
                  }),
                }}>
                <ul>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.createButtonContainer}>
                    <button className={clsx('button', s.customButton)}>
                      {addMoreRoundedIcon()}Створити переклад
                    </button>
                  </li>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>
                      {profileIcon()}Профіль
                    </button>
                  </li>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>
                      {noticeIcon()}Сповіщення
                    </button>
                  </li>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>{letterIcon()}Пошта</button>
                  </li>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>
                      {bookMarkIcon(true)}Закладки
                    </button>
                  </li>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>
                      {bookIcon()}Власні переклади
                    </button>
                  </li>
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>
                      {settingIcon()}Налаштування
                    </button>
                  </li>
                  <Divider />
                  <li
                    key={'button'}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={s.optionButtonContainer}>
                    <button className={clsx('button', s.optionButton)}>{exitIcon()}Вихід</button>
                  </li>
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
