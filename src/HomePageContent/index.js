import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  homes,
  messages
} from '../mockData/mockData';
import {
  addHouses,
  addMessages
} from './actions';
import { Link } from 'react-router-dom';
import { fetchWeather } from '../api/api';
import key from '../key';



class HomePageContent extends Component{
//   constructor(){
//     super()
//     this.state = {
//       weather: {}
//     }
//   }
//
//   fetchWeather =  (location) => {
//     fetch(`http://api.wunderground.com/api/${key}/conditions/forecast10day/hourly/q/${location}.json`)
// .then(response => response.json())
// .then( (data) =>  {return data})
//   };

  async componentDidMount(){
    const weather =  await fetchWeather(80128)
    console.log(weather);
    // this.props.addHouses(this.addWeatherToHomes());
    // this.props.addMessages(messages);

  }

  render(){
    console.log(fetchWeather(80128));
    return (
      <div>
        <Link to='/admin/messages'>Log In </Link>
      home page
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); }
});

export default connect(null, mapDispatchToProps)(HomePageContent);
