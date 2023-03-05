import React from 'react';
import clsx from 'clsx';
import s from './Settings.module.scss';
import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import PasswordInput from '@/components/elements/PasswordInput';
import { saveDataIcon } from '@/components/modules/icons';
import ColorPicker from '@/components/elements/ColorPicker';
// @ts-ignore
import CheckBox from '@/components/elements/CheckBox';
import Slider from '@/components/elements/Slider';

const settingOptions = [
  {
    title: 'Оповіщення',
  },
  {
    title: 'Важливі новини сайту',
  },
  {
    title: 'Отримувати приватні повідомлення',
  },
  {
    title: 'Коментарі у ваших постах та відповіді на ваші коментарі',
  },
  {
    title: 'Прибрати 18+',
  },
  {
    title: 'Вимкнути блок "Інші роботи автора" у своїх книгах',
  },
  {
    title: 'Зміна статусу перекладу',
  },
  {
    title: 'Зняття розділу з передплати',
  },
  {
    title: 'Коментар до глави',
  },
  {
    title:
      'Я підтверджую, що мені виповнилося 18 років, і я можу переглядати контент, призначений для дорослих',
  },
];

const SettingsView = () => {
  return (
    <section className={clsx(s.section)}>
      <div className="container">
        <BreadCrumbs
          path={[
            { title: 'Головна', link: '/' },
            { title: 'Налаштування', link: '/books/543543' },
          ]}
        />
        <h2 className={s.title}>НАЛАШТУВАННЯ</h2>
        <div className={s.settingsContainer}>
          <div>
            <h4 className={s.sectionTitle}>Змінити пароль</h4>
            <form className={s.form}>
              <PasswordInput label={'Старий пароль'} />
              <PasswordInput label={'Новий пароль'} />
              <PasswordInput label={'Підтвердити пароль'} />
              <button className={clsx('button', s.submitButton)}>{saveDataIcon()}Зберегти</button>
            </form>
          </div>
          <div>
            <h4 className={s.sectionTitle}>Налаштування</h4>
            <div className={s.checkBoxOptionsContainer}>
              {settingOptions.map((item, idx) => {
                return <CheckBox key={idx} label={item.title} />;
              })}
            </div>
          </div>
          <div>
            <h4 className={s.sectionTitle}>Змінити пароль</h4>
            <h5 className={s.subSectionText}>Розмір тексту</h5>
            <Slider />
            <div></div>
            <div className={s.colorPickersContainer}>
              <h5 className={s.subSectionText}>Колір тексту</h5>
              <h5 className={s.subSectionText}>Колір тіла</h5>
              <ColorPicker />
              <ColorPicker />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsView;
