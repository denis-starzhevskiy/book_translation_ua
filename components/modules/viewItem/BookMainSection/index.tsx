import React from 'react';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import bookImage from '../../../../public/images/books/book.png';

import s from './BooksSection.module.scss';
import Image from "next/image";
import {bookIcon, bookMarkIcon} from "@/components/modules/viewItem/icons";

const StarRating = ({rating}: {rating: number}) => {
  rating = rating < 0 ? 0 : rating > 5 ? 5 : rating;

  return (<div style={{display: 'flex', gap: 14}}>{new Array(5).fill(0)
          .map((_, i) => i + 1 <= rating ? <StarFilled key={i}/> : <StarOutlined key={i}/>)}</div>
  );
};

const StarFilled = () => {
  return (<span style={{color: 'yellow'}}>&#9733;</span>);
};

const StarOutlined = () => {
  return (<span style={{color: 'yellow'}}>&#9734;</span>);
};

const BreadCrumbs = () => {
  return <p className={'breadcrumbs'}>{['Головна', 'Головна'].map((item, i) => (
      <>
        {i !== 0 && <span> {'>'} </span>}
        <span>{item}</span>
      </>
  ))}</p>;
};



const BooksSection = () => {
  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <BreadCrumbs/>
        <h2 className={s.title}>Пригода Шерлока Холмса</h2>
        <div className={s.container}>
          <Image src={bookImage} alt={"title"} />
          {/*<Book id={0} image={bookImage} title={"Пригода Шерлока Холмса"} link={""} />*/}
          <div>
            <table className={s.table}>
              <tbody>
              <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Автор</th>
                <td className={clsx(s.td, s.commonTdTh)}>Артур Конан Дойл</td>
              </tr>
              <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Перекладач</th>
                <td className={clsx(s.td, s.commonTdTh)}>Перекладач</td>
              </tr>
              <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Розділів</th>
                <td className={clsx(s.td, s.commonTdTh)}>16</td>
              </tr>
              <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Жанр</th>
                <td className={clsx(s.td, s.commonTdTh)}>Детектив</td>
              </tr>
              <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Теги</th>
                <td className={clsx(s.td, s.commonTdTh)}>
                  <div className={s.tagsContainer}>{[
                    'переклад',
                    'гарри поттер',
                    'переклад'].map(
                      (item, idx) => (
                          <div key={idx} className={s.tag}>{`# ${item}`}</div>
                      ))}</div>
                </td>
              </tr>
              <tr>
                <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>Фендом</th>
                <td className={clsx(s.td, s.commonTdTh)}>Фендом</td>
              </tr>
              </tbody>
            </table>
            <div className={s.actions}>
              <button className={s.button}>{bookIcon()}Читати</button>
              <button className={s.button}>{bookMarkIcon()}До закладок</button>
            </div>
          </div>
          <div>
            <div style={{
              background: '#282D3B',
              borderRadius: 5,
              display: 'flex',
              alignItems: 'center',
              padding: '5px 18px',
              gap: 10,
              marginBottom: 54
            }}>
              <div style={{
                color: '#FDED01', fontWeight: 600,
                fontSize: 44
              }}>10
              </div>
              <div style={{color: 'white'}}>UAcoins</div>
            </div>
            <div style={{marginBottom: 45}}><h4 className={s.subTitle}>Рейтинг твору</h4>
              <StarRating rating={4}/>
            </div>
            <div><h4 className={s.subTitle}>Якість перекладу</h4>
              <StarRating rating={4}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
