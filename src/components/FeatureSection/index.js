import React from 'react';

import './FeatureSection.css';

import backtest from '../../assets/icons/backtest.png';
import strategy from '../../assets/icons/strategy.png';
import community from '../../assets/icons/community.png';

import { FeatureAction } from '../';

function FeatureSection() {
  return (
    <div className="feature-section" >
      <h2>We provide professional and rich quantitative products</h2>
      <div className="actions-container">
        <FeatureAction
          image={strategy}
          title="Code Strategy"
          description="Free ipython notebook with most usable data science language and libraries"
          actionLabel="Create Strategy"
        />
        <FeatureAction
          image={backtest}
          title="Backtest Engine"
          description="Easy to use high quality data for algorithm backtesting."
          actionLabel="Backtest"
        />
        <FeatureAction
          image={community}
          title="Community"
          description="Connecting with other Data Scientists and quantitative enthusiasts"
          actionLabel="Go to comunity"
        />
      </div>
      <h2 className="secondary">What we do</h2>
    </div>
  );
}

export default FeatureSection;
