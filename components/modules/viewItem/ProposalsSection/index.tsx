import React from 'react';
import clsx from 'clsx';

import {BookProps} from '@/components/elements/Book';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './ProposalsSection.module.scss';

type Props = {
    items: BookProps[];
    title: string;
    light?: boolean;
    countDesktopSlider?: number;
};

const ProposalsSection = ({items, title, light, countDesktopSlider}: Props) => {
    return (
        <section className={clsx(s.section, 'section', light && 'light')}>
            <div className={clsx("container", s.container)}>
                {items.map((item, idx) => {
                    return (<div key={idx} className={s.content}>
                        <input type={"checkbox"}/>
                        <h5>Item</h5>
                        <h5>Item</h5>
                        <h5>Item</h5>
                        <h5>Item</h5>
                    </div>)
                })}
            </div>
        </section>
    );
};

export default ProposalsSection;
