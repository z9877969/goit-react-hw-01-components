import React from 'react';
import PropTypes from 'prop-types';
import module from './Stats.module.css';

const colorRandom = () => {
  return `#${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10,
  )}${Math.floor(Math.random() * 10)}`;
};

const Stats = ({ title, stats }) => (
  <section className={module.statsSection}>
    {title && <h2 className={module.title}>{title}</h2>}

    <ul className={module.statList}>
      {stats.map(el => (
        <li
          className={module.item}
          key={el.id}
          style={{ backgroundColor: `${colorRandom()}` }}
        >
          <span className={module.label}>{el.label}</span>
          <span className={module.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string,
};

Stats.defaultProps = {
  title: '',
};

export default Stats;
