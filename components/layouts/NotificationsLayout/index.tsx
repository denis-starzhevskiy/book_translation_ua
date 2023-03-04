import React from 'react';

type NotificationsLayoutProps = {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
};

const NotificationsLayout: React.FC<NotificationsLayoutProps> = ({ leftSide, rightSide }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '4fr 8fr', columnGap: 30 }}>
      <div>{leftSide}</div>
      <div>{rightSide}</div>
    </div>
  );
};

export default NotificationsLayout;
