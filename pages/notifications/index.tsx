import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React, { useEffect, useState } from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './notifications.module.scss';
import NotificationsLayout from '@/components/layouts/NotificationsLayout';
import Checkbox from '@/components/elements/CheckBox/CheckBox';
import Select from '@/components/elements/Select';
import clsx from 'clsx';
import Divider from '@/components/elements/Divider';
import Button from '@/components/elements/Button';
import { saveDataIcon } from '@/components/modules/icons';
import Modal from '@/components/elements/Modal';
import Image from 'next/image';
import closeIcon from '@/public/images/closeIcon.svg';

export default function CatalogPage() {
  return (
    <div className={clsx('container', s.container)}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Сповіщення" />
      <NotificationsLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const Filters = () => {
  const checkboxesValues = [
    'Помилка у тексті',
    'Передача перекладу іншому',
    'Отримання перекладу від іншого',
    'Зміна статусу замовлення реклами у соцмережах',
    'Вихід нових розділів',
    'Новий розділ у перекладі',
    'Зміна статусу перекладу',
    'Зняття розділу з передплати',
    'Коментар до глави',
    'Коментар до книги',
  ];

  return (
    <>
      {checkboxesValues.map((value) => (
        <Checkbox key={value} label={value} />
      ))}
      <Button className={s.saveButton}>
        {saveDataIcon()}
        Зберегти
      </Button>
    </>
  );
};

const LeftSide = () => {
  return <Filters />;
};

type MobileFiltersModalProps = { open?: boolean; onClose?: () => void };

const MobileFiltersModal = ({ open, onClose }: MobileFiltersModalProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
  }, [open]);

  return (
    <Modal open={open} className={s.modal}>
      <div className={s.modalContainer}>
        <Image className={s.closeIcon} src={closeIcon} alt={'close modal'} onClick={onClose} />
        <Filters />
      </div>
    </Modal>
  );
};

const RightSide = () => {
  const [openMobileFiltersModal, setOpenMobileFiltersModal] = useState(false);

  return (
    <div>
      <MobileFiltersModal
        open={openMobileFiltersModal}
        onClose={() => setOpenMobileFiltersModal(false)}
      />
      <div className={s.section}>
        <div className={clsx('color-light-grey', 'fontsize14')}>Показано 4 сповіщення</div>
        <div className={s.sortContainer}>
          <div className={clsx('color-light-grey', 'fontsize14')}>Показати сповіщення</div>
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
      <Button
        className={clsx(s.mobileFiltersButton, 'fontsize14')}
        onClick={() => setOpenMobileFiltersModal(true)}>
        Фільтри
      </Button>
      <Divider style={{ marginBottom: 40, marginTop: 30 }} />
      <div>
        {new Array(4).fill(0).map((_, index) => (
          <div key={index} className={s.notification}>
            <h5 className={s.title}>Розділ 1</h5>
            <p className={s.content}>
              Вітання. Добро пожалувати в систему перекладів «UA Translate». Цей сайт призначений
              для професійних мов любительських перекладів будь-яких новелів, фанфіків, ранобе з
              різних мов.
            </p>
            <button className={s.deleteButton}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
};
