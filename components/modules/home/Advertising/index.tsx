import clsx from 'clsx';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper';

import { BookProps } from '@/components/elements/Book';
import GlobalSvgSelector from '@/components/GlobalSvgSelector';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './Advertising.module.scss';
import { advertisingData } from '@/utils/advertisingData';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/elements/Button';

type Props = {};

const Advertising = (props: Props) => {
  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <div className={s.wrapper}>
          <div className={clsx(s.title, 'title-section')}>Новинки</div>
          <div className={s.content}>
            <Swiper
              className={s.slider}
              spaceBetween={30}
              slidesPerView={1}
              speed={1000}
              navigation={{
                nextEl: '.arrow-next-adv',
                prevEl: '.arrow-prev-adv',
              }}
              pagination={{
                el: '.slider-pagination-adv',
                clickable: true,
              }}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}>
              {advertisingData &&
                advertisingData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <AdvertisingBook {...item} />
                  </SwiperSlide>
                ))}

              <div className={s.slider__wrapper}>
                <div className={clsx(s.arrow, 'arrow', 'arrow-prev-adv')}>
                  <div className="arrow__icon icon">
                    <GlobalSvgSelector id="chevron_prev" />
                  </div>
                </div>
                <div
                  className={clsx(
                    s.pagination,
                    'slider-pagination',
                    'slider-pagination-adv',
                  )}></div>
                <div className={clsx(s.arrow, 'arrow', 'arrow-next-adv')}>
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

export default Advertising;

const AdvertisingBook = ({ image, link, title, author, description }: BookProps) => {
  return (
    <div className={s.book}>
      <div className={s.body}>
        <div className={s.inner}>
          {author && <div className={s.author}>{author}</div>}
          <div className={s.label}>{title}</div>
          {description && <div className={s.description}>{description}</div>}
          <Button className={s.button} variant="white">
            Дивитися переклад
          </Button>
        </div>
      </div>
      <Link className={s.image__link} href={link}>
        <Image className={s.image} src={image} width={402} height={573} alt={title} />
      </Link>
    </div>
  );
};
