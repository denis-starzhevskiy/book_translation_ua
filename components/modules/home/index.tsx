import { noveltyBlockData } from '@/utils/noveltyBlockData';
import { randomBlockData } from '@/utils/randomBlockData';
import { trandsBlockData } from '@/utils/trandsBlockData';
import React from 'react';
import Advertising from './Advertising';
import BooksSection from './BooksSection';
import LatestUpdates from './LatestUpdates';
import Recommendations from './Recommendations';
import TextSection from './TextSection';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <BooksSection title="Реклама" items={noveltyBlockData} countDesktopSlider={5} />
      <Advertising />
      <LatestUpdates />
      <BooksSection title="Тренди" items={trandsBlockData} light />
      <BooksSection title="ВипадковІ" items={randomBlockData} light />
      <Recommendations />
      <TextSection />
    </>
  );
};

export default HomePage;
