import { BookProps } from '@/components/elements/Book';
import { latestUpdatesData } from '@/utils/latestUpdatesData';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import s from './LatestUpdates.module.scss';

type Props = {};

const LatestUpdates = (props: Props) => {
  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={clsx(s.title, 'title-section')}>Останні оновлення</h2>
          <div className={s.content}>
            <div className={s.items}>
              {latestUpdatesData &&
                latestUpdatesData.map((item) => <LatestUpdatesBook key={item.id} {...item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;

const LatestUpdatesBook = ({ image, link, title, tags }: BookProps) => {
  return (
    <div className={s.book}>
      <Link href={link}>
        <Image className={s.image} src={image} width={119} height={172} alt={title} />
      </Link>
      <div className={s.body}>
        <Link href={link} className={s.label}>
          {title}
        </Link>
        {tags && (
          <div className={s.tags}>
            <ul>
              {tags.map((tag, index) => (
                <li key={index}>
                  <Link href={tag.link}>{tag.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
