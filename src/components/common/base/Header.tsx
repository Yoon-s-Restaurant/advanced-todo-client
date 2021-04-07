import * as React from 'react';
import './header.scss';
const Header: React.FC = () => {
  return (
    <header className={'default-header'}>
      <div className={'header-logo'}>
        <h1>윤 식당</h1>
      </div>
    </header>
  );
};

export default Header;
