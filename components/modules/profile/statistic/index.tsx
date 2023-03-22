import React from 'react';
import clsx from 'clsx';
import s from './Statistic.module.scss';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';

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
        <table className={s.table}>
          <tbody>
            <tr>
              <th></th>
              <th>Переглядів</th>
              <th>Дохід</th>
              <th>Купили</th>
              <th>Лайків</th>
              <th>В закладах</th>
            </tr>
            <tr>
              <th scope={'row'}>Загалом</th>
              <td>{statistic.views}</td>
              <td>{statistic.income}</td>
              <td>{statistic.countBuyers}</td>
              <td>{statistic.likes}</td>
              <td>{statistic.inDepartments}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StatisticView;
