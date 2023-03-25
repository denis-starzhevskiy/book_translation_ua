import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React, { useState } from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './left-translations.module.scss';
import { catalogData } from '@/utils/catalogData';
import Book from '@/components/elements/Book';
import CatalogLayout from '@/components/layouts/CatalogLayout';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import Select from '@/components/elements/Select';
import Search from '@/components/elements/Search';
import Filters from '@/components/elements/Filters';
import clsx from 'clsx';
import Divider from '@/components/elements/Divider';
import MobileFiltersModal from '@/components/elements/MobileFiltersModal';
import Button from '@/components/elements/Button';

export default function LeftTranslationsPage() {
  return (
    <div className={'container'}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Покинуті переклади" />
      <p className={clsx('color-white', s.marginBottom30, 'fontsize16')}>
        Забрати кинутий переклад можуть користувачі, які зарегистрировані на сайті більше 90 днів
      </p>
      <CatalogLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  const [openMobileFiltersModal, setOpenMobileFiltersModal] = useState(false);

  return (
    <div className={s.marginBottom102}>
      <MobileFiltersModal
        open={openMobileFiltersModal}
        onClose={() => setOpenMobileFiltersModal(false)}
      />
      <Search
        placeholder={'Пошук по покинутим перекладам'}
        icon={'search'}
        className={s.searchInputContainer}
      />
      <div className={s.section}>
        <div className={clsx('color-light-grey', 'fontsize14')}>Показано 36 робіт</div>
        <div className={s.sortContainer}>
          <div className={clsx('color-light-grey', 'fontsize14')}>Сортувати за</div>
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
      <Button className={s.mobileFiltersButton} onClick={() => setOpenMobileFiltersModal(true)}>
        Фільтри
      </Button>
      <Divider style={{ marginBottom: 40, marginTop: 30 }} />
      <div className={s.booksList}>
        {catalogData.map((item) => (
          <div key={item.id} className={s.booksListItem}>
            <Book id={item.id} title={item.title} link={item.link} image={item.image} />
          </div>
        ))}
      </div>
      <div className={s.showMoreButtonContainer}>
        <ShowMoreButton />
      </div>
    </div>
  );
};

const RightSide = () => {
  return (
    <div className={s.desktopFiltersContainer}>
      <Filters />
    </div>
  );
};
