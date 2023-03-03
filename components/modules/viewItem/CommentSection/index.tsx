import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './CommentsSection.module.scss';

import avatar from '../../../../public/images/avatar.svg';
import GlobalSvgSelector from '@/components/GlobalSvgSelector';
import { heartIcon } from '@/components/modules/viewItem/icons';

export type CommentProps = {
  username: string;
  comment: string;
  avatar: string | null;
  publicationData: string;
};

type Props = {
  items: CommentProps[];
  light?: boolean;
};

const CommentsSection = ({ items, light }: Props) => {
  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={clsx(s.title, 'title-section')}>Коментарі</h2>
          {items.map((item, idx) => {
            return (
              <div key={idx} className={s.itemContainer}>
                <div>
                  <Image src={avatar} alt={''} />
                </div>
                <div className={s.textContainer}>
                  <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center' }}>
                    <p className={s.usernameTextDecoration}>{item.username}</p>
                    <p className={clsx(s.greyTextDecoration, s.textItalic)}>
                      {item.publicationData}
                    </p>
                  </div>
                  <p className={s.commentTextDecoration}>{item.comment}</p>
                  <div className={s.likeActionContainer}>
                    <p className={s.greyTextDecoration}>Сподобався коментар?</p>
                    {heartIcon()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
