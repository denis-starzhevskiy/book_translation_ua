import Link from 'next/link';
import React from 'react';

import s from './Navigation.module.scss';

type NavigationListProps = {
  link: string;
  label: string;
};

const Navigation = () => {
  const navigation: NavigationListProps[] = [
    {
      link: `/catalog`,
      label: `Каталог`,
    },
    {
      link: `/translators`,
      label: `Перекладачі`,
    },
    {
      link: `/abandoned-translations`,
      label: `Покинуті переклади`,
    },
    {
      link: `/services`,
      label: `Послуги`,
    },
    {
      link: `/faq`,
      label: `FAQ`,
    },
  ];

  return (
    <div className={s.navigation}>
      <nav aria-label="Navigation">
        <ul>
          {navigation &&
            navigation.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
