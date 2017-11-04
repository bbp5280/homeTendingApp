import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  homes,
  messages,
  invoices
} from '../mockData/mockData';
import {
  addHouses,
  addMessages,
  addWeather,
  addInvoices
} from './actions';
import { Link } from 'react-router-dom';
// import { fetchWeather } from '../api/api';
// import key from '../key';



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
    this.props.addHouses(homes);
    this.props.addMessages(messages);
    this.props.addInvoices(invoices);

  }

  render(){
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
  addMessages: (messages) => { dispatch(addMessages(messages)); },
  addWeather: (weather) => { dispatch(addWeather(weather)); },
  addInvoices: (invoice) => { dispatch(addInvoices(invoice)); }
});

export default connect(null, mapDispatchToProps)(HomePageContent);
