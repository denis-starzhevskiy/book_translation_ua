import React from 'react';

import s from "./Coins.module.scss"

const CoinsLabel = ({coins}: {coins: number}) => {
    return (
        <div className={s.coinsContainer}>
            <div className={s.coinsNumberLabel}>{coins}
            </div>
            <div className={s.labelColor}>UAcoins</div>
        </div>
    );
};

export default CoinsLabel;