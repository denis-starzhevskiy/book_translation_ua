import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React, { useState } from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './mail.module.scss';
import NotificationsLayout from '@/components/layouts/NotificationsLayout';
import Button from '@/components/elements/Button';
import Menu from '@/components/elements/Menu';
import Checkbox from '@/components/elements/CheckBox/CheckBox';
import clsx from 'clsx';
import trashIcon from '../../public/images/trash.svg';
import expandLeftIcon from '../../public/images/expandLeft.svg';
import expandRightIcon from '../../public/images/expandRight.svg';
import Image from 'next/image';
import { letterIcon } from '@/components/modules/icons';
import Select from '@/components/elements/Select';

export default function CatalogPage() {
  return (
    <div className={clsx('container', s.container)}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Пошта" />
      <NotificationsLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  return (
    <>
      <Button className={s.writeLetterButton}>
        {letterIcon()}
        Написати листа
      </Button>
      <Menu
        value={'Вхідні'}
        menu={['Вхідні', 'Відправлені', 'Видаленні', 'Чернетки'].map((item) => ({
          label: item,
          value: item,
        }))}
      />
    </>
  );
};

const RightSide = () => {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);

  return (
    <>
      <div className={s.mobileContainer}>
        <Button className={s.writeLetterButtonMobile}>
          {letterIcon()}
          Написати листа
        </Button>
        <div className={s.sortContainer}>
          <div className={'color-light-grey'}>Категорії</div>
          <Select
            value={'Вхідні'}
            options={['Вхідні', 'Відправлені', 'Видаленні', 'Чернетки'].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
      </div>
      <div className={s.section}>
        <div className={'color-light-grey'}>Показано 4 сповіщення</div>
        <div className={s.sortContainer}>
          <div className={'color-light-grey'}>1 - 50 из 256</div>
          <div className={s.prevNextButtonContainer}>
            <Button className={s.prevNextButton}>
              <Image src={expandLeftIcon} alt="previous" />
            </Button>
            <Button className={s.prevNextButton}>
              <Image src={expandRightIcon} alt="next" />
            </Button>
          </div>
        </div>
      </div>
      <ul className={s.lettersList}>
        {new Array(6).fill(0).map((_, index) => (
          <li key={index}>
            <div
              className={clsx(
                s.letterContainer,
                selectedLetters.includes(index.toString()) && s.selectedRow
              )}>
              <div>
                <Checkbox
                  onChange={(event) => {
                    if (event.target.checked) {
                      setSelectedLetters([...selectedLetters, index.toString()]);
                    } else {
                      setSelectedLetters(
                        selectedLetters.filter((item) => item !== index.toString())
                      );
                    }
                  }}
                />
              </div>
              <div className={s.date}>15.02.2023</div>
              <div className={s.sender}>Дмитрій</div>
              <div className={s.content}>
                Вітання. Добро пожалувати в систему перекладів «UA Translate». Цей сайт призначений
                для професійних мов любительських перекладів будь-яких новелів, фанфіків, ранобе з
                різних мов.
              </div>
              <div>
                <Button>
                  <Image src={trashIcon} alt="delete letter" />
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button disabled={selectedLetters.length === 0}>
        <Image src={trashIcon} alt="delete selected letters" />
        Видалити обрані
      </Button>
    </>
  );
};
