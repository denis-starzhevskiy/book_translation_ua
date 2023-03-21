import React from 'react';
import clsx from 'clsx';
import s from './Statistic.module.scss';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type StatisticProps = {
  statistic?: {
    views: number;
    income: number;
    countBuyers: number;
    likes: number;
    inDepartments: number;
  };
};

const StatisticView = ({ statistic: receivedStatistic }: StatisticProps) => {
  const isMobile = useMediaQuery('900');

  const statistic = receivedStatistic || {
    views: 4324,
    income: 3543.5,
    countBuyers: 43,
    likes: 94,
    inDepartments: 17,
  };

  return (
    <section className={clsx(s.section)}>
      <div className="container">
        <BreadCrumbs
          path={[
            { title: 'Головна', link: '/' },
            { title: 'Детальна статистика переглядів', link: '/books/543543' },
          ]}
        />
        <h2 className={s.title}>ДЕТАЛЬНА СТАТИСТИКА ПЕРЕГЛЯДІВ</h2>
        <h4 className={clsx(s.subTitle, s.rowGaps)}>Статистика</h4>
        <div className={s.statisticContainer}>
          <div style={{ display: 'flex' }}>
            <div className={s.emptyHeader}></div>
            <span className={clsx(s.characteristicGridTemplate, s.borderBottom)}>
              <h4>Переглядів</h4>
              <h4>Дохід</h4>
              <h4>Купили</h4>
              <h4>Лайків</h4>
              <h4>{!isMobile ? 'В закладах' : 'Заклади'}</h4>
            </span>
          </div>
          <div style={{ display: 'flex' }}>
            <span className={clsx(s.generalHeader, s.subTitle)}>Загалом</span>
            <div className={s.characteristicGridTemplate}>
              <h3>{statistic.views}</h3>
              <h3>{statistic.income}</h3>
              <h3>{statistic.countBuyers}</h3>
              <h3>{statistic.likes}</h3>
              <h3>{statistic.inDepartments}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticView;
