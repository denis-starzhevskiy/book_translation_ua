import React from 'react';
import s from './ShowMoreButton.module.scss';
import refreshIcon from '../../../public/images/refreshIcon.svg';
import Image from 'next/image';

type ShowMoreButtonProps = {};

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({}) => {
  return (
    <button className={s.showMoreButton}>
      <Image src={refreshIcon} alt="refresh icon" />
      <div>Показати ще</div>
    </button>
  );
};
export default ShowMoreButton;
