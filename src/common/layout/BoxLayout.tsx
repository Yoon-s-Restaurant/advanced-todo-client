import * as React from 'react';
import './layout.scss';

interface BoxLayoutProps {
  ariaLabel?: string;
}
const BoxLayout: React.FC<BoxLayoutProps> = ({
  children,
  ariaLabel = '박스 레이아웃',
}) => {
  return (
    <section className={'box-layout'} aria-labelledby={ariaLabel}>
      <div className={'box-content'}>{children}</div>
    </section>
  );
};

export default BoxLayout;
