import React from 'react';
import TranslatorsView from '@/components/modules/translators';
import { translators } from '@/utils/createTranslation';

const Translators = () => {
  return <TranslatorsView translators={translators} />;
};

export default Translators;
