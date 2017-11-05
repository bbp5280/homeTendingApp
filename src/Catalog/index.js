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

class Catalog extends Component{
  async componentDidMount(){
    this.props.addHouses(homes);
    // this.props.addMessages(messages);
  }



  buildCards (display, AddComponent){
    return display.map(toDisplay => {
      return <AddComponent message={toDisplay}
        clickEvent={this.addMessagesToProperty.bind(this)}
        home={toDisplay}
        key={toDisplay.id}/>;
    });
  }

  addMessagesToProperty(message, date, startTime, endTime){
    this.props.addHouses(
      this.updateHomeWithMessage(message, date, startTime, endTime)
    );
    this.removeMessage(message);
  }

  updateHomeWithMessage(message, date, startTime, endTime){
    return this.props.homes.map(home => {
      return home.id === message.message.houseID ? Object.assign({}, home,
        {messages:[...home.messages, message]}, {date,
          startTime,
          endTime}) :
        home;
    });
  }

  removeMessage(message){
    this.props.messages.splice(message, 1);
  }



  render() {
    return (
      <section>
        {this.props.location.pathname === '/admin/messages' &&
        this.buildCards(this.props.messages, Messages)}
        {this.props.location.pathname === '/admin/properties' &&
        this.buildCards(this.props.homes, Homes)}
      </section>
    );
  }
}

Catalog.propTypes = {
  messages: PropTypes.array,
  homes: PropTypes.array,
  location: PropTypes.object,
  addHouses: PropTypes.func,
  addMessages: PropTypes.func,
  messageToCards: PropTypes.func
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
