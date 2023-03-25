import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React, { useEffect, useState } from 'react';
import PageTitle from '@/components/elements/PageTitle';
import CatalogLayout from '@/components/layouts/CatalogLayout';
import { ownTranslationsData } from '@/utils/ownTranslationsData';
import Image from 'next/image';
import s from './own-translations.module.scss';
import clsx from 'clsx';
import ShowMoreButton from '@/components/elements/ShowMoreButton';
import Link from 'next/link';
import Divider from '@/components/elements/Divider';
import Modal from '@/components/elements/Modal';
import closeIcon from '@/public/images/closeIcon.svg';
import Button from '@/components/elements/Button';

export default function OwnTranslationsPage() {
  return (
    <div className={'container'}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <PageTitle title="Власні переклади" />
      <CatalogLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  const [openMobileFiltersModal, setOpenMobileFiltersModal] = useState(false);

  return (
    <div className={s.marginBottom102}>
      <MobileFiltersModal
        open={openMobileFiltersModal}
        onClose={() => setOpenMobileFiltersModal(false)}
      />
      <Button className={s.mobileStatisticsButton} onClick={() => setOpenMobileFiltersModal(true)}>
        Статистика діяльності
      </Button>
      <div className={s.booksList}>
        {ownTranslationsData.map((item) => (
          <Link key={item.id} href={item.link}>
            <Image src={item.image} alt="book image" className={s.bookImage} />
            <table className={s.table}>
              <tbody>
                <tr>
                  <th scope="row">Дата створення</th>
                  <td>{item.creationDate}</td>
                </tr>
                <tr>
                  <th scope="row">Дата останньої активності</th>
                  <td>{item.lastActivityDate}</td>
                </tr>
                <tr>
                  <th scope="row">Перегляд за день</th>
                  <td>{item.viewPerDay}</td>
                </tr>
                <tr>
                  <th scope="row">Дохід за день</th>
                  <td>{item.incomePerDay}$</td>
                </tr>
                <tr>
                  <th scope="row">Дохід за місяць</th>
                  <td>{item.incomePerMonth}$</td>
                </tr>
              </tbody>
            </table>
          </Link>
        ))}
      </div>
      <div className={s.showMoreButtonContainer}>
        <ShowMoreButton />
      </div>
    </div>
  );
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
        <Statistics />
      </div>
    </Modal>
  );
};

const RightSide = () => {
  return (
    <div className={s.desktopStatisticsContainer}>
      <Statistics />
    </div>
  );
};

const Statistics = () => {
  return (
    <div>
      <h3 className={s.activityStatisticsTitle}>Статистика діяльності</h3>
      <div>
        <div className={clsx('color-white', s.categoryName)}>Перекладів</div>
        <div className={clsx('color-dark', s.number)}>54</div>
        <Divider className={s.my20} />
        <div className={clsx('color-white', s.categoryName)}>Сторінок переклав</div>
        <div className={clsx('color-dark', s.number)}>658</div>
        <Divider className={s.my20} />
        <div className={clsx('color-white', s.categoryName)}>Символів переклав</div>
        <div className={clsx('color-dark', s.number)}>5988</div>
        <Divider className={s.my20} />
        <div className={s.commission}>
          <div className={s.commissionNumber}>15%</div>
          <div className={'color-white'}>Комісія</div>
        </div>
      </div>
    </div>
  );
};
