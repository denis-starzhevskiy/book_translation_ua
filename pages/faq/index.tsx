import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import Link from 'next/link';
import s from './faq.module.scss';

export default function CatalogPage() {
  return (
    <div className={'container'} style={{ marginBottom: 90 }}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="FAQ" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 29 }}>
        <h4 style={{ color: 'white', fontWeight: 600, fontSize: 18 }}>Як користуватись сайтом</h4>
        <p className={'color-white'} style={{ fontSize: 16 }}>
          Вітання. Добро пожалувати в систему перекладів «UA Translate». Цей сайт призначений для
          професійних мов любительських перекладів будь-яких новелів, фанфіків, ранобе з різних мов.
          Ваші улюблені ранобе, новели та інше на українській мові!
        </p>
        <Link href={'/'} className={s.link}>
          Як створити переклад на сайті UAlate.com
        </Link>
        <Link href={'/'} className={s.link}>
          Налаштування перекладу
        </Link>
        <Link href={'/'} className={s.link}>
          Теги / жанри / фендоми
        </Link>
        <Link href={'/'} className={s.link}>
          Як створити перший розділ у перекладі
        </Link>
        <Link href={'/'} className={s.link}>
          Реклама вашого перекладу на сайті
        </Link>
        <Link href={'/'} className={s.link}>
          Як поповнити баланс
        </Link>
        <Link href={'/'} className={s.link}>
          Як знайти цікаву розповідь{' '}
        </Link>
        <Link href={'/'} className={s.link}>
          Помилки у тексті{' '}
        </Link>
        <Link href={'/'} className={s.link}>
          Коментарі{' '}
        </Link>
      </div>
    </div>
  );
}
