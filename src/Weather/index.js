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
    return forcast.map((day, index) => {
      return <WeatherCard high={day.high.fahrenheit}
        low={day.low.fahrenheit}
        conditions={day.conditions}
        icon={day.icon_url}
        day={day.date.weekday}
        key={`${day.low.fahrenheit}${day.high.fahrenheit}${index}`}
      />;
    });
  }

  render(){
    return (
      <div className='outer-weather-modal'>
        <div className='inner-weather-modal'>
          <h2>7 Day Forcast</h2>
          <div className='weather-card-wrapper'>
            {this.buildWeatherCards(this.state.weatherForcast)}
          </div>
          <button onClick={this.props.close} className='close-button'>Close</button>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  message: PropTypes.object,
  close: PropTypes.func
};

export default Weather;
