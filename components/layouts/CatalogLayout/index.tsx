import React from 'react';

type CatalogLayoutProps = {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
};

const CatalogLayout: React.FC<CatalogLayoutProps> = ({ leftSide, rightSide }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '9fr 3fr', columnGap: 30 }}>
      <div>{leftSide}</div>
      <div>{rightSide}</div>
    </div>
  );
};

export default CatalogLayout;
