import Image from 'next/image';
import Link from 'next/link';
import React, {CSSProperties} from 'react';

import s from './Book.module.scss';

export type BookProps = {
    id: number,
    image: any;
    link: string;
    title: string;
    description?: string;
    author?: string;
    status?: string;
    tags?: {
      link: string;
      label: string;
    }[];
};

const Book = ({id, image, link, title, status}: BookProps) => {

    return (
    <div className={s.book}>
      <div className={s.head}>
        {status && <div className={s.status}>{status}</div>}

        <Link href={link} className={s.iresponsive}>
          <Image className={s.image} src={image} alt={title} />
        </Link>
      </div>
      <div className={s.body}>
        <Link href={link} className={s.title}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Book;
