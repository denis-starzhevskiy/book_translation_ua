import React, { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

import s from './CommentsSection.module.scss';

import avatar from '../../../../public/images/avatar.svg';
import { heartIcon } from '@/components/modules/icons';

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

function CommentItem(props: { item: CommentProps }) {
  const [replyOpen, setReplyOpen] = useState(false);

  return (
    <div className={s.itemContainer}>
      <div>
        <Image src={avatar} alt={''} />
      </div>
      <div className={s.textContainer}>
        <div className={s.usernameLastSeenContainer}>
          <p className={s.usernameTextDecoration}>{props.item.username}</p>
          <p className={clsx(s.greyTextDecoration, s.textItalic)}>{props.item.publicationData}</p>
        </div>
        <p className={s.commentTextDecoration}>{props.item.comment}</p>
        <div className={s.likeActionContainer}>
          <p className={s.greyTextDecoration} onClick={() => setReplyOpen((prev) => !prev)}>
            Відповісти
          </p>
          {heartIcon()}
        </div>
        {replyOpen && (
          <input className={clsx('input', s.replyInput)} placeholder={'Введіть відповідь'} />
        )}
      </div>
    </div>
  );
}

const CommentsSection = ({ items, light }: Props) => {
  return (
    <section className={clsx(s.section, 'section')}>
      <div className="container">
        <div className={s.wrapper}>
          <h2 className={clsx(s.title, 'title-section')}>Коментарі</h2>
          {items.map((item, idx) => {
            return <CommentItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
