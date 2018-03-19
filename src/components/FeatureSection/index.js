import React from 'react';

import './FeatureSection.css';

import backtest from '../../assets/icons/backtest.png';
import community from '../../assets/icons/community.png';
import factorLibrary from '../../assets/icons/factor-library.png';
import finantial from '../../assets/icons/finantial.png';
import investor from '../../assets/icons/investor.png';
import sharedLibrary from '../../assets/icons/shared-library.png';
import strategy from '../../assets/icons/strategy.png';

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
      <div className="features-container">
        <FeatureAction
          image={investor}
          title="Smart Investor"
          description="For our valued strategic bull investors and individual investors who are seeking"
        />
        <FeatureAction
          image={finantial}
          title="Finantial Data"
          description="Free access to Hight Quality Cryptocurrency Data, Futures data, complete data"
        />
        <FeatureAction
          image={factorLibrary}
          title="Factor Library"
          description="Support hundreds of commonly used factors, including Alpha101 factors"
        />
        <FeatureAction
          image={sharedLibrary}
          title="Shared Library"
          description="Connecting with the largest community pf Data scientists and quantitative"
        />
      </div>
    </div>
  );
}

export default FeatureSection;
