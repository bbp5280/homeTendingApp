import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages/index';
import Homes from '../Homes/index';
import {
  addHouses,
  addMessages
} from '../HomePageContent/actions';
import {
  homes,
  messages
} from '../mockData/mockData';
import PropTypes from 'prop-types';
import { fetchWeather } from '../api/api';



class Catalog extends Component{
  async componentDidMount(){
    const weather = this.addWeatherToHomes();
    this.props.addHouses(homes);
    this.props.addMessages(messages);
    console.log(weather);
  }

  async addWeatherToHomes (homes)  {
    const weather =  await fetchWeather(80128);
    //  const homesForStore =  homes.map( async ({zip}) => {
    //   return await fetchWeather(key, zip);
    // });
    console.log(weather);
    return weather;
  }

  buildMessages (messages, homes){
    if (this.props.location.pathname === '/admin/messages'){
      return messages.map(message => {
        return <Messages message={message}
          key={message.id}/>;
      });
    } else if (this.props.location.pathname === '/admin/properties'){
      return homes.map(home => {
        return <Homes home={home}
          key={home.id}/>;
      });
    }
  }

  render() {
    console.log(fetchWeather(80128));
    return (
      <section>
        {this.buildMessages(this.props.messages, this.props.homes)}
      </section>
    );
  }
}

Catalog.propTypes = {
  messages: PropTypes.array,
  homes: PropTypes.array,
  location: PropTypes.object,
  addHouses: PropTypes.func,
  addMessages: PropTypes.func
};

const mapStateToProps =  (store) => ({
  messages: store.messages,
  homes: store.homes
});

const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); }
});


export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
