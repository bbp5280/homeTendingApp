import React from 'react';
import PropTypes from 'prop-types';

export const WeatherCard = ({high,
  low,
  conditions,
  icon}) => {

    console.log(high);
  return (
    <div>
      <img src={icon} alt={`image showing ${conditions} conditions`} />
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
  icon: PropTypes.string
};
