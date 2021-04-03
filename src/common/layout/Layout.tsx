import * as React from 'react';
import './layout.scss';
interface LayoutProps {
  header: React.ReactNode;
  sideBar: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header, sideBar, children }) => {
  return (
    <>
      <div className={'default-layout'}>
        {header}
        {sideBar}
        <main className={'main-layout'}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
