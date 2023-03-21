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
        <h4 className={clsx(s.mainTitle)}>Статистика</h4>
        <div className={s.dateExistsStatsContainer}>
          <h4 className={clsx(s.subTitle)}>Разом з нами:</h4>
          <p
            className={
              s.userDataText
            }>{`з ${userInfo.registrationDate} (${userInfo.daysExists} дні)`}</p>
        </div>
        <Divider className={s.divider} />
        <div className={s.shortStatsContainer}>
          <p className={clsx(s.subTitle)}>Перекладів</p>
          <p className={clsx(s.subTitle)}>Сторінок переведено</p>
          <p className={clsx(s.subTitle)}>Символів переклав</p>
          <p className={clsx(s.subTitle)}>Прокоментував</p>
          <p className={s.userDataText}>{userInfo.translationNumber}</p>
          <p className={s.userDataText}>{userInfo.pagesTranslatedNumber}</p>
          <p className={s.userDataText}>{userInfo.symbolsTranslatedNumber}</p>
          <p className={s.userDataText}>{userInfo.commentsNumber}</p>
        </div>
        <Divider className={s.divider} />
        <div className={s.balanceStatsContainer}>
          <h4 className={clsx(s.subTitle)}>Баланс:</h4>
          <div className={s.actionsContainer}>
            <p className={s.userDataText}>{userInfo.currentBudget}</p>
            <button className={clsx('button', s.tabButton)}>Поповнити</button>
            <button className={clsx('button', s.tabButton)}>Вивести</button>
          </div>
          <p className={clsx(s.subTitle)}>Комісія: 15%</p>
        </div>
        <Divider className={s.divider} />
        <button className={clsx('button', s.detailedInformationBtn)}>
          Детальна статистика переглядів
        </button>
      </div>
    </section>
  );
};

export default ProfilePage;
