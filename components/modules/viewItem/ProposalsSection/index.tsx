import React, { useState } from 'react';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './ProposalsSection.module.scss';
import { bookIcon, downloadIcon, noticeIcon } from '@/components/modules/icons';

export type ProposalProps = {
  name: string;
  cost: number;
  active: string;
};

type Props = {
  items: ProposalProps[];
  light?: boolean;
};

const ProposalsSection = ({ items, light }: Props) => {
  const [disableDownloadByOne, setDisabledDownloadByOne] = useState('disabled');

  return (
    <section className={clsx(s.section, 'section')}>
      <div className={'container'}>
        <div className={clsx(s.content, light && s.light)}>
          <div className={clsx(s.rowContainer, s.marginBottom20)}>
            <div />
            <p className={s.tableHeaders}>Вартість</p>
            <p className={s.tableHeaders}>Назва</p>
            <p className={clsx(s.tableHeaders, s.activeBlock)}>Актив</p>
            <div />
          </div>
          {items.map((item, idx) => {
            return (
              <div key={idx}>
                <div className={clsx(s.rowContainer, s.rowItemContainer)}>
                  <label className={s.container}>
                    <input type={'checkbox'} />
                    <span className={s.checkmark}></span>
                  </label>
                  <p>{`${item.cost} $`}</p>
                  <p>{item.name}</p>
                  <p className={s.activeBlock}>{item.active}</p>
                  <div className={s.buttonContainer}>
                    <button className={clsx('button', s.outlinedButton)}>{bookIcon()}Читати</button>
                  </div>
                </div>
                <div className={s.rowDivider} />
              </div>
            );
          })}
          <div className={s.actionContainer}>
            <button className={'button'}>{noticeIcon()}Підписка</button>
            <div className={s.downloadButtonsContainer}>
              <button className={'button'}>{downloadIcon()}.fb2</button>
              <button className={'button'}>{downloadIcon()}.docx</button>
              <button className={'button'} disabled={!!disableDownloadByOne}>
                {downloadIcon(!!disableDownloadByOne)}Завантажити одним файлом
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalsSection;
