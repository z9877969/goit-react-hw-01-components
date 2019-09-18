import React from 'react';
import PropTypes from 'prop-types';
import PrisingItem from '../PricingItem/PricingItem';
import module from './PricingPlan.module.css';

const PricingPlan = ({ items }) => (
  <ul className={module.pricingPlan}>
    {items.map(item => (
      <li className={module.item} key={item.label}>
        <PrisingItem item={item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default PricingPlan;
