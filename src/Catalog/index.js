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
    this.props.addMessages(messages);
  }



  buildCards (display, AddComponent){
    return display.map((toDisplay, index) => {
      return <AddComponent message={toDisplay}
        clickEvent={this.addMessagesToProperty.bind(this)}
        home={toDisplay}
        key={toDisplay.id}/>;
    });
  }

  addMessagesToProperty(messageOrInvoice){
    this.props.addHouses(
      this.updateHomeWithMessage(messageOrInvoice)
    );
    if (messageOrInvoice.message){
      this.removeMessage(messageOrInvoice);
    }
  }

  updateHomeWithMessage(messageOrInvoice){
    if (messageOrInvoice.message){
      return this.props.homes.map(home => {
        return home.id === messageOrInvoice.houseID ? Object.assign({}, home,
          {messages:[...home.messages, messageOrInvoice]}, ) :
          home;
      });
    } else if (!messageOrInvoice.message) {
      return this.props.homes.map(home => {
        return home.id === messageOrInvoice.houseID ? Object.assign({},
          {invoices: home.invoices.push(messageOrInvoice)}, home) :
          home;
      });
    }
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
