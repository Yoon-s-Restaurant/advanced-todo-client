import * as React from 'react';
import './index.scss';
interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header, sidebar, main, footer }) => {
  return (
    <div className={'layout'}>
      <header className={'header'}>{header}</header>
      <div className={'container'}>
        <aside className={'sidebar-container'}>{sidebar} </aside>
        <main className={'main-container'}>{main}</main>
      </div>
      {footer && <footer>{{ footer }}</footer>}
    </div>
  );
};
export default Layout;
