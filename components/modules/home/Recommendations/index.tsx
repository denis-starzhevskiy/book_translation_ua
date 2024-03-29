import React from 'react';
import clsx from 'clsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Book from '@/components/elements/Book';
import GlobalSvgSelector from '@/components/GlobalSvgSelector';

import {
  recommendationsDayData,
  recommendationsMonthData,
  recommendationsTopData,
  recommendationsWeekData,
} from '@/utils/recommendationsBooksData';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './Recommendations.module.scss';

type Props = {};

const Recommendations = (props: Props) => {
  const items = [
    {
      tabLabel: `Топ дня`,
      data: recommendationsDayData,
    },
    {
      tabLabel: `Топ тижня`,
      data: recommendationsWeekData,
    },
    {
      tabLabel: `Топ місяця`,
      data: recommendationsMonthData,
    },
    {
      tabLabel: `Загальний Топ 15`,
      data: recommendationsTopData,
    },
  ];

  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={clsx(s.title, 'title-section')}>Рекомендації</h2>
          <div className={s.content}>
            <Tabs className={s.tabs}>
              <TabList className={s.tablist}>
                {items &&
                  items.map((item, index) => (
                    <Tab key={index}>
                      {item.tabLabel} <GlobalSvgSelector id="chevron_next" />
                    </Tab>
                  ))}
              </TabList>
              <div className={s.tabpanels}>
                {items &&
                  items.map((data, index) => (
                    <TabPanel className={s.tabpanel} key={index}>
                      <Swiper
                        className={s.slider}
                        spaceBetween={10}
                        slidesPerView={1.5}
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
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                          992: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                          },
                        }}>
                        {data.data.map((item) => (
                          <SwiperSlide key={item.id}>
                            <Book {...item} />
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
                              'slider-pagination-books'
                            )}></div>
                          <div className={clsx(s.arrow, 'arrow', 'arrow-next-books')}>
                            <div className="arrow__icon icon">
                              <GlobalSvgSelector id="chevron_next" />
                            </div>
                          </div>
                        </div>
                      </Swiper>
                    </TabPanel>
                  ))}
              </div>
            </Tabs>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
