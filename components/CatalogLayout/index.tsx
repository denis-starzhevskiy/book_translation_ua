import React from 'react';

type LayoutProps = {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ leftSide, rightSide }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '9fr 3fr', columnGap: 30 }}>
      <div>{leftSide}</div>
      <div>{rightSide}</div>
    </div>
  );
};
