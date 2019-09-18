import React from 'react';
import { user, stats } from '../../data/beginer-data';
import Profile from '../Profile/Profile';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import pricingPlanItems from '../../json/pricing-plan.json';
import items from '../../json/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Stats title="Upload stats" stats={stats} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={items} />
  </>
);

export default App;
