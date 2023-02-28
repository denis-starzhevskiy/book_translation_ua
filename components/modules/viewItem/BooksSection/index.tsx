import React from 'react';
import clsx from 'clsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';

import Book, { BookProps } from '@/components/elements/Book';
import GlobalSvgSelector from '@/components/GlobalSvgSelector';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './BooksSection.module.scss';
import Link from "next/link";
import Image from "next/image";

type Props = {
  items: BookProps[];
  title: string;
  light?: boolean;
  countDesktopSlider?: number;
};

const BooksSection = ({ items, title, light, countDesktopSlider }: Props) => {
  return (
    <section className={clsx(s.section, 'section', light && 'light')}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={clsx(s.title, 'title-section')}>{title}</h2>
          <div className={clsx(s.content, light && s.light)}>
            <Swiper
              className={s.slider}
              spaceBetween={10}
              slidesPerView={1}
              speed={1000}
              navigation={{
                nextEl: '.arrow-next-books',
                prevEl: '.arrow-prev-books',
              }}
              pagination={{
                el: '.slider-pagination-books',
                clickable: true,
              }}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                800: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 30,
                },
              }}>
              {items &&
                items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className={"book"}>
                      <div className={"head"}>
                        {item.status && <div className={s.status}>{item.status}</div>}

                        <Link href={item.link} className={"iresponsive"}>
                          <Image className={"image"} src={item.image} alt={item.title} />
                        </Link>
                      </div>
                      <div className={"body"}>
                        <Link href={item.link} className={s.bookTitle}>
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

              <div className={s.slider__wrapper}>
                <div className={clsx(s.arrow, 'arrow', 'arrow-prev-books')}>
                  <div className="arrow__icon icon">
                    <GlobalSvgSelector id="chevron_prev" />
                  </div>
                </div>
                <div
                  className={clsx(
                    s.pagination,
                    'slider-pagination',
                    'slider-pagination-books',
                  )}></div>
                <div className={clsx(s.arrow, 'arrow', 'arrow-next-books')}>
                  <div className="arrow__icon icon">
                    <GlobalSvgSelector id="chevron_next" />
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
