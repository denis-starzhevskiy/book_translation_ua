import React from 'react';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import s from './BooksSection.module.scss';
import Image from 'next/image';
import { bookIcon, bookMarkIcon } from '@/components/modules/icons';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import { StarRating } from '@/components/elements/Rating/Rating';
import CoinsLabel from '@/components/elements/CoinsLabel/CoinsLabel';
import BookInformationTable from '@/components/elements/BookInformationTable/BookInformationTable';

export type BookProps = {
  id: number;
  image: any;
  link: string;
  title: string;
  description?: string;
  author: string;
  translator?: string;
  sectionsNumber?: number;
  genre?: string;
  status: string;
  fendom?: string;
  tags?: {
    link: string;
    label: string;
  }[];
  rating?: number;
  quality?: number;
};

const BooksSection = (book: BookProps) => {
  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <BreadCrumbs
          path={[
            { title: 'Головна', link: '/' },
            { title: 'Перегляд книги', link: '/books/543543' },
          ]}
        />
        <h2 className={s.title}>{book.title}</h2>
        <div className={s.container}>
          <Image src={book.image} alt={'title'} />
          <div className={s.tableContainer}>
            <BookInformationTable {...book} />
            <div className={s.actions}>
              <button className={'button'}>{bookIcon()}Читати</button>
              <button className={'button'}>{bookMarkIcon()}До закладок</button>
            </div>
          </div>
          <div className={s.ratingInfoBlock}>
            <CoinsLabel coins={10} />
            <div className={s.ratingStarsContainer}>
              <div className={s.marginBottom45}>
                <h4 className={s.subTitle}>Рейтинг твору</h4>
                <StarRating rating={4} />
              </div>
              <div>
                <h4 className={s.subTitle}>Якість перекладу</h4>
                <StarRating rating={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
