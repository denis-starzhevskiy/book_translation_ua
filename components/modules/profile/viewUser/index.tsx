import React from 'react';
import clsx from 'clsx';
import s from './ViewUserPage.module.scss';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import { letterIcon } from '@/components/modules/icons';
import Divider from '@/components/elements/Divider';

const Index = () => {
  const userInfo = {
    name: 'Oleksandr',
    registrationDate: '22.02.2023',
    daysExists: 94,
    translationNumber: 54,
    pagesTranslatedNumber: 43,
    symbolsTranslatedNumber: 434,
    commentsNumber: 2,
  };

  return (
    <section className={clsx(s.section)}>
      <div className="container">
        <BreadCrumbs
          path={[
            { title: 'Головна', link: '/' },
            { title: 'Профіль', link: '/books/543543' },
          ]}
        />
        <h2 className={s.title}>{`ПРОФІЛЬ:${userInfo.name.toUpperCase()}`}</h2>
        <div className={s.tabsContainer}>
          <button className={clsx('button', s.tabButton)}>{letterIcon()}Написати</button>
          <button className={clsx('button', s.tabButton)}>Підтримати фінансово</button>
        </div>
        <h4 className={clsx(s.subTitle)}>Статистика</h4>
        <div className={s.dateExistsStatsContainer}>
          <h4 className={clsx(s.subTitle)} style={{ fontSize: '16px' }}>
            Разом з нами:
          </h4>
          <h4
            className={
              s.userDataText
            }>{`з ${userInfo.registrationDate} (${userInfo.daysExists} дні)`}</h4>
        </div>
        <Divider style={{ width: '250px' }} />
        <div className={s.shortStatsContainer}>
          <h4 className={clsx(s.subTitle)}>Перекладів</h4>
          <h4 className={clsx(s.subTitle)}>Сторінок переведено</h4>
          <h4 className={clsx(s.subTitle)}>Символів переклав</h4>
          <h4 className={clsx(s.subTitle)}>Прокоментував</h4>
          <h4 className={s.userDataText}>{userInfo.translationNumber}</h4>
          <h4 className={s.userDataText}>{userInfo.pagesTranslatedNumber}</h4>
          <h4 className={s.userDataText}>{userInfo.symbolsTranslatedNumber}</h4>
          <h4 className={s.userDataText}>{userInfo.commentsNumber}</h4>
        </div>
        <Divider style={{ width: '250px' }} />
      </div>
    </section>
  );
};

export default Index;
