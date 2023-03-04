import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import { Layout } from '@/components/CatalogLayout';
import { ownTranslationsData } from '@/utils/ownTranslationsData';
import Image from 'next/image';
import s from './own-translations.module.scss';
import clsx from 'clsx';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import Link from 'next/link';

export default function CatalogPage() {
  return (
    <div className={'container'}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Власні переклади" />
      <Layout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  return (
    <div style={{ marginBottom: 102 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '60px 64px' }}>
        {ownTranslationsData.map((item) => (
          <Link key={item.id} href={item.link}>
            <Image
              src={item.image}
              alt="book image"
              style={{ width: '100%', height: 340, marginBottom: 20 }}
            />
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
        Статистика діяльності
      </h3>
      <div>
        <div className={clsx('color-white', s.categoryName)}>Перекладів</div>
        <div className={clsx('color-dark', s.number)}>54</div>
        <Divider />
        <div className={clsx('color-white', s.categoryName)}>Сторінок переведено</div>
        <div className={clsx('color-dark', s.number)}>658</div>
        <Divider />
        <div className={clsx('color-white', s.categoryName)}>Символів переклав</div>
        <div className={clsx('color-dark', s.number)}>5988</div>
        <Divider />
        <div className={s.commission}>
          <div className={s.commissionNumber}>10%</div>
          <div style={{ color: 'white' }}>Комісія</div>
        </div>
      </div>
    </div>
  );
};

const Divider = () => <div style={{ height: 1, backgroundColor: '#A5ACBD', margin: '20px 0' }} />;
