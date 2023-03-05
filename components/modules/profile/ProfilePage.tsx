import React from 'react';
import clsx from 'clsx';
import s from './ProfilePage.module.scss';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import {
  addMoreRoundedIcon,
  bookMarkIcon,
  fileIcon,
  letterIcon,
  noticeIcon,
  settingIcon,
} from '@/components/modules/icons';
import Divider from '@/components/elements/Divider';

const ProfilePage = () => {
  const userInfo = {
    currentBudget: 5433,
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
        <h2 className={s.title}>ПРОФІЛЬ</h2>
        <div className={s.tabsContainer}>
          <button className={clsx('button', s.tabButton)}>{fileIcon()}Власні переклади</button>
          <button className={clsx('button', s.tabButton)}>{bookMarkIcon()}Закладки</button>
          <button className={clsx('button', s.tabButton)}>
            {addMoreRoundedIcon()}Створити переклад
          </button>
          <button className={clsx('button', s.tabButton)}>{letterIcon()}Пошта</button>
          <button className={clsx('button', s.tabButton)}>{noticeIcon()}Сповіщення</button>
          <button className={clsx('button', s.tabButton)}>Куплено</button>
          <button className={clsx('button', s.tabButton)}>{settingIcon()}Налаштування</button>
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
        <div className={s.balanceStatsContainer}>
          <h4 className={clsx(s.subTitle)} style={{ fontSize: '16px' }}>
            Баланс:
          </h4>
          <div className={s.actionsContainer}>
            <h4 className={s.userDataText}>{userInfo.currentBudget}</h4>
            <button className={clsx('button', s.tabButton)}>Поповнити</button>
            <button className={clsx('button', s.tabButton)}>Вивести</button>
          </div>
          <h4 className={clsx(s.subTitle)} style={{ fontSize: '16px' }}>
            Комісія: 15%
          </h4>
        </div>
        <Divider style={{ width: '250px' }} />
        <button className={clsx('button', s.detailedInformationBtn)}>
          Детальна статистика переглядів
        </button>
      </div>
    </section>
  );
};

export default ProfilePage;
