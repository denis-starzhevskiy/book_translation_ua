import React from 'react';
import s from './AccessRights.module.scss';
import Checkbox from '@/components/elements/CheckBox/CheckBox';
import clsx from 'clsx';

const permissions = [
  {
    title: 'Хто може коментувати книгу',
  },
  {
    title: 'Хто може коментувати розділи',
  },
  {
    title: 'Хто може увійти на сторінку книги',
  },
  {
    title: 'Хто може скачати',
  },
  {
    title: 'Хто може оцінити',
  },
];

const AccessRights = () => {
  return (
    <div className={s.container}>
      <div className={clsx(s.rowContainer, s.headerContainer)}>
        <h4 className={s.textAlignStart}>Що можуть робити</h4>
        <h4>Усі</h4>
        <h4>Модератори</h4>
        <h4>Ніхто</h4>
      </div>
      {permissions.map((item, idx) => {
        return (
          <div key={idx} className={clsx(s.rowContainer, s.bottomBorder)}>
            <h4 className={s.permissionText}>{item.title}</h4>
            <div className={s.centered}>
              <Checkbox customClass={s.checkBoxComponent} />
            </div>
            <div className={s.centered}>
              <Checkbox customClass={s.checkBoxComponent} />
            </div>
            <div className={s.centered}>
              <Checkbox customClass={s.checkBoxComponent} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccessRights;
