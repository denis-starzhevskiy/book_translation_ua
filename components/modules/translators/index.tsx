import React from 'react';
import clsx from 'clsx';
import s from './Translators.module.scss';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import Select from '@/components/elements/Select';
import Divider from '@/components/elements/Divider';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import { useMediaQuery } from '@/hooks/useMediaQuery';

type TranslatorsProps = {
  translators: {
    ratingPlace: number;
    username: string;
    booksNumber: number;
    commentsNumber: number;
    lastVisiting: string;
  }[];
};

const TranslatorsView = ({ translators }: TranslatorsProps) => {
  const isMobile = useMediaQuery('991.98');

  return (
    <section className={clsx(s.section)}>
      <div className="container">
        <BreadCrumbs
          path={[
            { title: 'Головна', link: '/' },
            { title: 'Перекладачі', link: '/books/543543' },
          ]}
        />
        <h2 className={s.title}>ПЕРЕКЛАДАЧІ</h2>
        <div className={s.translatorsTableContainer}></div>
        <div className={s.headerContainer}>
          <div className={s.subText}>Показано 36 перекладачів</div>
          <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
            <div className={s.subText}>Сортувати за</div>
            <Select
              value={'місце в рейтингу'}
              options={[
                'місце в рейтингу',
                'кількість книг',
                'кількість коментарів',
                'останнє відвідування',
              ].map((value) => ({ label: value, value }))}
              customClass={s.customSelect}
            />
          </div>
        </div>
        <Divider />
        <table className={s.translatorsTable}>
          <thead>
            <tr>
              <th>{isMobile ? 'Місце' : 'Місце в рейтингу'}</th>
              <th>Нікнейм</th>
              <th>{isMobile ? 'Книги' : 'Кількість книг'}</th>
              <th>{isMobile ? 'Коментарі' : 'Кількість коментарів'}</th>
              <th>Останнє відвідування</th>
            </tr>
          </thead>
          <tbody>
            {translators.map((item) => {
              return (
                <tr key={item.ratingPlace}>
                  <td>
                    <h4 className={s.ratingPlaceNumber}>{item.ratingPlace}</h4>
                  </td>
                  <td>
                    <h4>{item.username}</h4>
                  </td>
                  <td>
                    <h4>{item.booksNumber}</h4>
                  </td>
                  <td>
                    <h4>{item.commentsNumber}</h4>
                  </td>
                  <td>
                    <h4>{item.lastVisiting}</h4>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={s.actionContainer}>
          <ShowMoreButton />
        </div>
      </div>
    </section>
  );
};

export default TranslatorsView;
