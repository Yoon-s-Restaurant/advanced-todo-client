import * as React from 'react';
import './index.scss';
interface ProgressBarProps {
  rate: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ rate }) => {
  const progressStyle = {
    width: rate + '%',
    height: '100%',
  };

  console.log(rate);
  return (
    <section className={'progress-bar'}>
      <div className={'progress-bar-wrapper'}>
        <div className={'progress-bar-rate'} style={progressStyle}>
          {`${rate}%`}
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
