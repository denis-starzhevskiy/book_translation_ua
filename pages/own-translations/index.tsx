import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import CatalogLayout from '@/components/layouts/CatalogLayout';
import { ownTranslationsData } from '@/utils/ownTranslationsData';
import Image from 'next/image';
import s from './own-translations.module.scss';
import clsx from 'clsx';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import Link from 'next/link';
import Divider from '@/components/elements/Divider';

export default function OwnTranslationsPage() {
  return (
    <div className={'container'}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Власні переклади" />
      <CatalogLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  return (
    <div className={s.marginBottom102}>
      <div className={s.booksList}>
        {ownTranslationsData.map((item) => (
          <Link key={item.id} href={item.link}>
            <Image src={item.image} alt="book image" className={s.bookImage} />
            <table className={s.table}>
              <tbody>
                <tr>
                  <th scope="row">Дата створення</th>
                  <td>{item.creationDate}</td>
                </tr>
                <tr>
                  <th scope="row">Дата останньої активності</th>
                  <td>{item.lastActivityDate}</td>
                </tr>
                <tr>
                  <th scope="row">Перегляд за день</th>
                  <td>{item.viewPerDay}</td>
                </tr>
                <tr>
                  <th scope="row">Дохід за день</th>
                  <td>{item.incomePerDay}$</td>
                </tr>
                <tr>
                  <th scope="row">Дохід за місяць</th>
                  <td>{item.incomePerMonth}$</td>
                </tr>
              </tbody>
            </table>
          </Link>
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
    <div>
      <h3 className={s.activityStatisticsTitle}>Статистика діяльності</h3>
      <div>
        <div className={clsx('color-white', s.categoryName)}>Перекладів</div>
        <div className={clsx('color-dark', s.number)}>54</div>
        <Divider style={{ margin: '20px 0' }} />
        <div className={clsx('color-white', s.categoryName)}>Сторінок переведено</div>
        <div className={clsx('color-dark', s.number)}>658</div>
        <Divider style={{ margin: '20px 0' }} />
        <div className={clsx('color-white', s.categoryName)}>Символів переклав</div>
        <div className={clsx('color-dark', s.number)}>5988</div>
        <Divider style={{ margin: '20px 0' }} />
        <div className={s.commission}>
          <div className={s.commissionNumber}>10%</div>
          <div className={'color-white'}>Комісія</div>
        </div>
      </div>
    </div>
  );
};
