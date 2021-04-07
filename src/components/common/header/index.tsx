import * as React from 'react';
import './index.scss';
import SearchIcon from '@material-ui/icons/Search';
const Header: React.FC = () => {
  const handleSearch = () => {};
  return (
    <div className={'header-content'}>
      <div>윤식당</div>

      <button className={'search-button '} onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Header;
