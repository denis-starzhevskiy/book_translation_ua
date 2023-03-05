import React, { useState } from 'react';

import s from './ColorPicker.module.scss';

type ColorPickerProps = {
  label?: string;
};

const ColorPicker = ({ label }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('#00eafd');

  return (
    <div className={s.container}>
      <span className={s.textValue}>{selectedColor}</span>
      <input
        className={s.iconContainer}
        type={'color'}
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
