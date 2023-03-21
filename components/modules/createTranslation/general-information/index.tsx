import React, { useState } from 'react';
import clsx from 'clsx';

import s from './GeneralInformation.module.scss';
import { downloadCloudIcon, pictureDownloadIcon } from '@/components/modules/icons';
import CheckOption from '@/components/elements/CheckOption/CheckOption';
import Select from '@/components/elements/Select';
import CheckBox from '@/components/elements/CheckBox/CheckBox';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const GeneralInformation = () => {
  const [ageLimit, setAgeLimit] = useState<boolean>();
  const [file, setFile] = useState<File>();
  const [files, setFiles] = useState<object>();
  const isMobile = useMediaQuery('900');

  const setFileByIdx = ({ idx, inputFile }: { idx: number; inputFile: any }) => {
    const file = inputFile.target.files[0];
    if (file) {
      setFiles((prev) => {
        return { ...prev, [idx]: file };
      });
    }
  };

  const saveImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

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
            <input type={'text'} className={clsx('input', s.customInput)} value={'Англійська'} />
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Назва мовою перекладу
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <input type={'text'} className={clsx('input', s.customInput)} value={'Англійська'} />
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
              <div style={{ cursor: 'pointer' }}>
                <label className={s.labelSaveImg}>
                  <h3 className={clsx('button', s.uploadFileText)}>
                    {downloadCloudIcon()}Вибрати зображення
                  </h3>
                  <input
                    accept=".svg, .png, .bmp, .gif, .jpg, .gif, .jpeg"
                    type="file"
                    id="file1"
                    onChange={saveImg}
                  />
                </label>
              </div>
              {file && (
                <div className={s.wrapperImgName}>
                  <h4 style={{ fontWeight: '600' }}>{file.name.slice(0, 25)}</h4>
                </div>
              )}
            </div>
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Додаткові зображення
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <div className={s.actionContainer}>
              <div style={{ cursor: 'pointer' }}>
                <label className={s.labelSaveImg}>
                  <h3 className={clsx('button', s.uploadFileText)}>{pictureDownloadIcon()}</h3>
                  <input
                    accept=".svg, .png, .bmp, .gif, .jpg, .gif, .jpeg"
                    type="file"
                    id="file1"
                    onChange={saveImg}
                  />
                </label>
              </div>
              <div style={{ cursor: 'pointer' }}>
                <label className={s.labelSaveImg}>
                  <h3 className={clsx('button', s.uploadFileText)}>{pictureDownloadIcon()}</h3>
                  <input
                    accept=".svg, .png, .bmp, .gif, .jpg, .gif, .jpeg"
                    type="file"
                    id="file1"
                    onChange={saveImg}
                  />
                </label>
              </div>
              <div style={{ cursor: 'pointer' }}>
                <label className={s.labelSaveImg}>
                  <h3 className={clsx('button', s.uploadFileText)}>{pictureDownloadIcon()}</h3>
                  <input
                    accept=".svg, .png, .bmp, .gif, .jpg, .gif, .jpeg"
                    type="file"
                    id="file1"
                    onChange={saveImg}
                  />
                </label>
              </div>
              <div style={{ cursor: 'pointer' }}>
                <label className={s.labelSaveImg}>
                  <h3 className={clsx('button', s.uploadFileText)}>{pictureDownloadIcon()}</h3>
                  <input
                    accept=".svg, .png, .bmp, .gif, .jpg, .gif, .jpeg"
                    type="file"
                    id="file1"
                    onChange={saveImg}
                  />
                </label>
              </div>
              {!isMobile && (
                <div style={{ cursor: 'pointer' }}>
                  <label className={s.labelSaveImg}>
                    <h3 className={clsx('button', s.uploadFileText)}>{pictureDownloadIcon()}</h3>
                    <input
                      accept=".svg, .png, .bmp, .gif, .jpg, .gif, .jpeg"
                      type="file"
                      id="file1"
                      onChange={saveImg}
                    />
                  </label>
                </div>
              )}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GeneralInformation;
