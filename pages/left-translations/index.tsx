import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './left-translations.module.scss';
import { catalogData } from '@/utils/catalogData';
import Book from '@/components/elements/Book';
import { Layout } from '@/components/CatalogLayout';
import Accordion from '@/components/elements/Accordion';
import Checkbox from '@/components/elements/Checkbox';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import Select from '@/components/elements/Select';
import Search from '@/components/elements/Search';

export default function CatalogPage() {
  return (
    <div className={'container'}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Покинуті переклади" />
      <p style={{ color: 'white' }}>
        Забрати кинутий переклад можуть користувачі, які зарегистрировані на сайті більше 90 днів
      </p>
      <Layout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  return (
    <div style={{ marginBottom: 102 }}>
      <Search
        placeholder={'Пошук по покинутим перекладам'}
        icon={'search'}
        className={s.searchInputContainer}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className={'color-light-grey'}>Показано 36 робіт</div>
        <div>
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
        Фільтри
      </h3>
      <Accordion
        title={'Мова оригіналу'}
        content={['Англійська', 'Французька', 'Італійська', 'Німецька'].map((item) => (
          <Checkbox key={item} label={item} name={'language'} />
        ))}
      />
      <Divider />
      <Accordion title={'Обмеження за віком 18+'} content={null} />
      <Accordion
        title={'Тип'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'type'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Жанри'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'genre'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Теги'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'genre'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Фендом'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'fandom'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Виключити жанри'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'excluded genre'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Виключити теги'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'excluded tag'} />
        ))}
      />
      <Divider />
      <Accordion
        title={'Виключити фендоми'}
        content={['Переклад', 'Авторське'].map((item) => (
          <Checkbox key={item} label={item} name={'excluded fandom'} />
        ))}
      />
      <Divider />
      <Accordion title={'Без фендомів'} content={null} />
      <Divider />
      <Accordion
        title={'Кількість розділів'}
        content={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>
              <span>від </span>
              <input type="text" style={{ width: 60, height: 30 }} />
            </label>
            <label>
              <span>до </span>
              <input type="text" style={{ width: 60, height: 30 }} />
            </label>
          </div>
        }
      />
      <Divider />
      <Accordion
        title={'Кількість сторінок'}
        content={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <label>
              <span>від </span>
              <input type="text" style={{ width: 60, height: 30 }} />
            </label>
            <label>
              <span>до </span>
              <input type="text" style={{ width: 60, height: 30 }} />
            </label>
          </div>
        }
      />
      <Divider />
      <div>
        {[
          'Готові на 100%',
          'Доступні для скачування',
          'Завершені проекти',
          'Розпродаж',
          'Тільки непереглянуті',
          'Не показувати закладки',
          'Тільки онгоінги',
        ].map((item) => (
          <Checkbox key={item} label={item} name={'other filters'} />
        ))}
      </div>
    </div>
  );
};

const Divider = () => <div style={{ height: 1, backgroundColor: '#A5ACBD', margin: '20px 0' }} />;
