import React from 'react';
import s from './UserMenu.module.scss';
import expandIcon from '../../../public/images/ArrowDropDown.svg';
import Image from 'next/image';
import clsx from 'clsx';
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
import Divider from '@/components/elements/Divider';
import Popover from '@/components/elements/Popover';

type UserMenuProps = {
  user: {
    name: string;
    surname: string;
  };
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const open = Boolean(anchorEl);

  return (
    <>
      <div
        className={clsx(s.selectContainer)}
        onClick={(event) => setAnchorEl(event.currentTarget)}>
        <Image className={s.logo} src={logo} alt="Logo" width={50} height={50} />
        <div className={s.valueText}>{user.name + ' ' + user.surname}</div>
        <Image src={expandIcon} alt={'expand icon'} />
      </div>
      <Popover open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        <ul className={s.selectPopover}>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.createButtonContainer}>
            <button className={clsx('button', s.customButton)}>
              {addMoreRoundedIcon()}Створити переклад
            </button>
          </li>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{profileIcon()}Профіль</button>
          </li>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{noticeIcon()}Сповіщення</button>
          </li>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{letterIcon()}Пошта</button>
          </li>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{bookMarkIcon(true)}Закладки</button>
          </li>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{bookIcon()}Власні переклади</button>
          </li>
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{settingIcon()}Налаштування</button>
          </li>
          <Divider />
          <li
            key={'button'}
            onClick={() => {
              setAnchorEl(null);
            }}
            className={s.optionButtonContainer}>
            <button className={clsx('button', s.optionButton)}>{exitIcon()}Вихід</button>
          </li>
        </ul>
      </Popover>
    </>
  );
};

export default UserMenu;
