import React from 'react';
import PropTypes from 'prop-types';
import module from './PricingItem.module.css';

const PricingItem = ({
  item: { label, icon, capacity, price, description },
}) => (
  <div className={module.pricingItem}>
    <i className={module.icon} style={{ backgroundImage: `url(${icon})` }} />
    <h2 className={module.label}>{label}</h2>
    <p className={module.capacity}>{capacity} STORAGE</p>
    <p className={module.description}>{description}</p>
    <p className={module.price}>{price}/MO</p>
    <button className={module.button} type="button">
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default PricingItem;
