import React from 'react';
import PropTypes from 'prop-types';

export const WeatherCard = ({high,
  low,
  conditions,
  icon,
  close}) => {
  return (
    <div className='weather-card'>
      <img src={icon} alt={`showing ${conditions} conditions`} />
      <p>{conditions}</p>
      <p>High: {high}</p>
      <p>Low: {low}</p>
      <button onClick={(event)=> close(event)}>Close</button>
    </div>
  );
};

WeatherCard.propTypes = {
  high: PropTypes.string,
  low: PropTypes.string,
  conditions: PropTypes.string,
  icon: PropTypes.string,
  close: PropTypes.func
};
