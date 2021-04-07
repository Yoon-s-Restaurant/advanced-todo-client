import * as React from 'react';
import './index.scss';
interface ProgressBarProps {
  rate: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ rate }) => {
  const progressStyle = {
    width: rate + '%',
  };

  console.log(rate);
  return (
    <section className={'progress-bar'}>
      <div className={'progress-bar-wrapper'}>
        <div className={'progress-bar-rate'} style={progressStyle}>
          {/*{`${rate}%`}*/}
        </div>
        <div className={'progress-handle'} style={{ left: `${rate}%` }}>
          <div className={'progress-rate-text-wrapper'}>
            <p>{`${rate}%`}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
