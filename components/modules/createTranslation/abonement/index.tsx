import React from 'react';
import s from './Abonement.module.scss';
import clsx from 'clsx';

type AbonementProps = {
  abonements: {
    name: string;
    sections: number;
    priceInCoins: number;
  }[];
};

const Abonement = ({ abonements }: AbonementProps) => {
  return (
    <table className={s.table}>
      <tbody>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Вартість передплати за 1 розділ
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <input type={'text'} className={clsx('input', s.input)} />
            <h4 className={s.coinsLabel}>UAcoins</h4>
          </td>
        </tr>
        <tr>
          <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
            Знижка % (при покупці від 10 розділів)
          </th>
          <td className={clsx(s.td, s.commonTdTh)}>
            <input type={'text'} className={clsx('input', s.input)} />
            <h4 className={s.coinsLabel}>UAcoins</h4>
          </td>
        </tr>
        {abonements.map((item, idx) => {
          return (
            <tr key={idx} className={clsx(idx === abonements.length - 1 && s.borderBottomNone)}>
              <th className={clsx(s.th, s.commonTdTh)} scope={'row'}>
                {item.name}
              </th>
              <td className={clsx(s.td, s.commonTdTh)}>
                <div className={s.abonementContainer}>
                  <div className={s.inputLabelContainer}>
                    <input
                      type={'text'}
                      className={clsx('input', s.smallInput)}
                      defaultValue={item.sections}
                    />
                    <h4 className={s.coinsLabel}>Pозділів</h4>
                  </div>
                  <div className={s.inputLabelContainer}>
                    <input
                      type={'text'}
                      className={clsx('input', s.smallInput)}
                      defaultValue={item.priceInCoins}
                    />
                    <h4 className={s.coinsLabel}>UAcoins</h4>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Abonement;
