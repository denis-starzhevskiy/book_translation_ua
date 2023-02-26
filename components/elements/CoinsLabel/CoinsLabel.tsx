import React from 'react';

import s from "./Coins.module.scss"

const CoinsLabel = ({coins}: {coins: number}) => {
    return (
        <div className={s.coinsContainer}>
            <div style={{
                color: '#FDED01', fontWeight: 600,
                fontSize: 44
            }}>{coins}
            </div>
            <div style={{color: 'white'}}>UAcoins</div>
        </div>
    );
};

export default CoinsLabel;