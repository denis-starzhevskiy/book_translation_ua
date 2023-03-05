import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './bookmarks.module.scss';
import { catalogData } from '@/utils/catalogData';
import Book from '@/components/elements/Book';
import CatalogLayout from '@/components/layouts/CatalogLayout';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import Select from '@/components/elements/Select';
import Menu from '@/components/elements/Menu';

export default function BookmarksPage() {
  return (
    <div className={'container'}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Закладки" />
      <CatalogLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  return (
    <div style={{ marginBottom: 102 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className={'color-light-grey'}>Показано 36 робіт</div>
        <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
          <div className={'color-light-grey'}>Сортувати за</div>
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
      <div className={s.line} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px 30px' }}>
        {catalogData.map((item) => (
          <div
            key={item.id}
            style={{
              width: 255,
              height: 414,
            }}>
            <Book
              id={item.id}
              title={item.title}
              link={item.link}
              image={item.image}
              status={item.status}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 52 }}>
        <ShowMoreButton />
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div>
      <h3
        style={{
          color: '#A5ACBD',
          fontWeight: 400,
          fontSize: 14,
          lineHeight: '17px',
          marginBottom: 35,
        }}>
        Мої закладки
      </h3>
      <Menu
        value={'Усі'}
        menu={['Усі', 'Читаю', 'У планах', 'Кинув', 'Прочитав'].map((item) => ({
          label: item,
          value: item,
        }))}
      />
    </div>
  );
};
