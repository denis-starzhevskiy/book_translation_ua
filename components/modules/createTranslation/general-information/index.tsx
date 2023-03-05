import React, { useState } from 'react';
import clsx from 'clsx';

import s from './GeneralInformation.module.scss';
import { downloadCloudIcon, pictureDownloadIcon } from '@/components/modules/icons';
import CheckOption from '@/components/elements/CheckOption/CheckOption';
import Select from '@/components/elements/Select';
import CheckBox from '@/components/elements/CheckBox/CheckBox';

const GeneralInformation = () => {
  const [ageLimit, setAgeLimit] = useState<boolean>();

  const availableTags = [
    { label: 'переклад' },
    { label: 'гарри поттер' },
    { label: 'переклад' },
    { label: 'переклад' },
    { label: 'переклад' },
    { label: 'переклад' },
    { label: 'переклад' },
  ];

  return (
    <table className={s.table}>
      <tbody>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Мова оригіналу
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <Select
              value={'Англійська'}
              options={['Англійська', 'Українська'].map((value) => ({ label: value, value }))}
              customClass={s.customSelect}
            />
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Назва мовою оригіналу
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <input type={'text'} className={'input'} />
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Назва мовою перекладу
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <input type={'text'} className={'input'} />
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Автор твору
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <Select
              value={'Англійська'}
              options={['Англійська', 'Українська'].map((value) => ({ label: value, value }))}
              customClass={s.customSelect}
            />
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Статус випуску
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <Select
              value={'Англійська'}
              options={['Англійська', 'Українська'].map((value) => ({ label: value, value }))}
              customClass={s.customSelect}
            />
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Статус перекладу
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <Select
              value={'Англійська'}
              options={['Англійська', 'Українська'].map((value) => ({ label: value, value }))}
              customClass={s.customSelect}
            />
          </td>
        </tr>
        <tr className={s.bottomBorder}>
          <th className={clsx(s.th, s.commonTdTh, s.verticalAlign)} scope={'row'}>
            Опис/рецензія
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <textarea name="textarea" className={'textArea'}></textarea>
          </td>
        </tr>
        <tr className={s.bottomBorder}>
          <th className={clsx(s.th, s.commonTdTh, s.verticalAlign)} scope={'row'}>
            Жанр
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            {availableTags && (
              <div className={s.tagsContainer}>
                <ul className={s.tagsList}>
                  {availableTags.map((tag, index) => (
                    <li key={index}>
                      <CheckOption title={tag.label} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </td>
        </tr>
        <tr className={s.bottomBorder}>
          <th className={clsx(s.th, s.commonTdTh, s.verticalAlign)} scope={'row'}>
            Теги
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            {availableTags && (
              <div className={s.tagsContainer}>
                <ul className={s.tagsList}>
                  {availableTags.map((tag, index) => (
                    <li key={index}>
                      <CheckOption title={tag.label} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </td>
        </tr>
        <tr className={s.bottomBorder}>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Фендом
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <Select
              value={'Англійська'}
              options={['Англійська', 'Українська'].map((value) => ({ label: value, value }))}
              customClass={s.customSelect}
            />
          </td>
        </tr>
        <tr className={s.bottomBorder}>
          <th className={clsx(s.th, s.commonTdTh, s.verticalAlign)} scope={'row'}>
            Обмеження за віком 18+
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <div className={s.checkBoxesContainer}>
              <CheckBox label={'Так'} checked={ageLimit} onChange={() => setAgeLimit(true)} />
              <CheckBox label={'Ні'} checked={!ageLimit} onChange={() => setAgeLimit(false)} />
            </div>
          </td>
        </tr>
        <tr className={s.bottomBorder}>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Основне зображення
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <div className={s.actionContainer}>
              <button className={clsx('button', s.outlinedButton)}>
                {downloadCloudIcon()}Вибрати зображення
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Додаткові зображення
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <div className={s.actionContainer}>
              <button className={clsx('button', s.outlinedButton)}>{pictureDownloadIcon()}</button>
              <button className={clsx('button', s.outlinedButton)}>{pictureDownloadIcon()}</button>
              <button className={clsx('button', s.outlinedButton)}>{pictureDownloadIcon()}</button>
              <button className={clsx('button', s.outlinedButton)}>{pictureDownloadIcon()}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GeneralInformation;
