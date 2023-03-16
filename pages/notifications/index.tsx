import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './notifications.module.scss';
import NotificationsLayout from '@/components/layouts/NotificationsLayout';
import Checkbox from '@/components/elements/CheckBox/CheckBox';
import Select from '@/components/elements/Select';
import clsx from 'clsx';
import Divider from '@/components/elements/Divider';
import Button from '@/components/elements/Button';
import { saveDataIcon } from '@/components/modules/icons';

export default function CatalogPage() {
  return (
    <div className={clsx('container', s.container)}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <NotificationsLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  const checkboxesValues = [
    'Помилка у тексті',
    'Передача перекладу іншому',
    'Отримання перекладу від іншого',
    'Зміна статусу замовлення реклами у соцмережах',
    'Вихід нових розділів',
    'Новий розділ у перекладі',
    'Зміна статусу перекладу',
    'Зняття розділу з передплати',
    'Коментар до глави',
    'Коментар до книги',
  ];

  return (
    <>
      <PageTitle title="Сповіщення" />
      {checkboxesValues.map((value) => (
        <Checkbox key={value} label={value} />
      ))}
      <Button className={s.saveButton}>
        {saveDataIcon()}
        Зберегти
      </Button>
    </>
  );
};

const RightSide = () => {
  return (
    <div>
      <div className={s.section}>
        <div className={'color-light-grey'}>Показано 4 сповіщення</div>
        <div className={s.sortContainer}>
          <div className={'color-light-grey'}>Показати сповіщення</div>
          <Select
            value={'назвою'}
            options={[
              'назвою',
              'датою створення',
              'датою оновлення',
              'рейтингами',
              'переглядами',
              'кількістю лайків',
              'кількістю безкоштовних сторінок',
              'кількістю сторінок',
              'кількістю розділів',
              'кількістю в закладках',
            ].map((value) => ({ label: value, value }))}
          />
        </div>
      </div>
      <Divider style={{ marginBottom: 40, marginTop: 30 }} />
      <div>
        {new Array(4).fill(0).map((_, index) => (
          <div key={index} className={s.notification}>
            <h5 className={s.title}>Розділ 1</h5>
            <p className={s.content}>
              Вітання. Добро пожалувати в систему перекладів «UA Translate». Цей сайт призначений
              для професійних мов любительських перекладів будь-яких новелів, фанфіків, ранобе з
              різних мов.
            </p>
            <button className={s.deleteButton}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
};
