import Image from 'next/image';
import React from 'react';
import Button from '../Button';
import GlobalSvgSelector from '@/components/GlobalSvgSelector';
import { useScrollBlock } from '@/hooks/useScrollBlock';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import ThemeToggle from '../ThemeToggle';
import Search from '../Search';
import Navigation from '../Navigation';

import logo from '../../../public/images/logo.png';

import s from './Header.module.scss';

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const isMobile = useMediaQuery('991.98');
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);

    menuVisible ? allowScroll() : blockScroll();
  };

  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.content}>
          <div className={s.wrapper}>
            {!isMobile && (
              <div className={s.search}>
                <Search placeholder="Пошук по сайту" icon="search" />
              </div>
            )}

            <Image className={s.logo} src={logo} alt="Logo" width={160} height={161} />
            {isMobile && (
              <button className={s.burger} onClick={toggleMenu}>
                <GlobalSvgSelector id="burger" />
              </button>
            )}
            {!isMobile && (
              <div className={s.inner}>
                <ThemeToggle />
                <div className={s.buttons}>
                  <Button icon="user_circle">Реєстрація</Button>
                  <Button icon="sign_in">Увійти</Button>
                </div>
              </div>
            )}
          </div>
          {!isMobile && (
            <div className={s.navigation}>
              <Navigation />
            </div>
          )}
        </div>
      </div>
      {isMobile && menuVisible && (
        <div className={s.menu}>
          <div className="container">
            <button className={s.close} onClick={toggleMenu}>
              <GlobalSvgSelector id="close" />
            </button>
            <div className={s.search}>
              <Search placeholder="Пошук по сайту" icon="search" />
            </div>
            <div className={s.navigation}>
              <Navigation />
            </div>
            <div className={s.inner}>
              <ThemeToggle />
              <div className={s.buttons}>
                <Button icon="user_circle">Реєстрація</Button>
                <Button icon="sign_in">Увійти</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
