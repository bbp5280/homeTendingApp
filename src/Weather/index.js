import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchWeather } from '../api/api';
import { WeatherCard } from '../WeatherCard/index';


class Weather extends Component {
  constructor(){
    super();
    this.state = {
      weatherForcast: []
    };
  }

  async componentDidMount(){
    await this.fetchSevenDayForcast();
  }

  async fetchSevenDayForcast () {
    let address = this.props.message.address;
    let zip = address.substr(address.length - 5);
    let sevenDayForcast = await fetchWeather(zip);
    this.setState({
      weatherForcast: sevenDayForcast
    });
  }

  buildWeatherCards (forcast) {
    return forcast.map(day => {
      return <WeatherCard high={day.high.fahrenheit}
        low={day.low.fahrenheit}
        conditions={day.conditions}
        icon={day.icon_url} />;
    });
  }

  render(){
    return (
      <div className='outer-modal'>
        <div className='inner-modal'>
          {this.buildWeatherCards(this.state.weatherForcast)}
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  message: PropTypes.object
};

export default Weather;