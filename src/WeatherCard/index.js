import React from 'react';
import PropTypes from 'prop-types';

export const WeatherCard = ({high,
  low,
  conditions,
  icon,
  close,
  day}) => {
  return (
    <div className='weather-card'>
      <p>{day}</p>
      <img src={icon} alt={`showing ${conditions} conditions`} />
      <p>{conditions}</p>
      <p>High: {high}</p>
      <p>Low: {low}</p>
    </div>
  );
};

WeatherCard.propTypes = {
  high: PropTypes.string,
  low: PropTypes.string,
  conditions: PropTypes.string,
  icon: PropTypes.string,
  close: PropTypes.func,
  day: PropTypes.string
};
