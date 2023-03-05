import React from 'react';
import s from './Divider.module.scss';

const Divider = ({ style }: { style?: React.CSSProperties }) => {
  return <div className={s.divider} style={style}></div>;
};

export default Divider;
