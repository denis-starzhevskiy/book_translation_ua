import React from 'react';
import s from './ShowMoreButton.module.scss';
import { searchIcon } from '@/components/modules/icons';

type ShowMoreButtonProps = {};

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({}) => {
  return (
    <button className={s.showMoreButton}>
      {searchIcon()}
      <div>Показати ще</div>
    </button>
  );
};
export default ShowMoreButton;
