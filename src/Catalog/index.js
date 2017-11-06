import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages/index';
import Homes from '../Homes/index';
import {
  addHouses,
  addMessages
} from '../HomePageContent/actions';
import { addInvoices } from './actions';
import PropTypes from 'prop-types';

class Catalog extends Component{
  constructor(){
    super();
    this.addMessagesOrInvoiceToProperty = this.addMessagesOrInvoiceToProperty.bind(this);
  }


  buildCards (display, AddComponent){
    return display.map((toDisplay, index) => {
      return <AddComponent message={toDisplay}
        clickEvent={this.addMessagesOrInvoiceToProperty}
        home={toDisplay}
        key={toDisplay.id}/>;
    });
  }

  addMessagesOrInvoiceToProperty(messageOrInvoice){
    this.props.addHouses(
      this.updateHomeWithMessage(messageOrInvoice)
    );
    if (messageOrInvoice.message){
      this.removeMessage(messageOrInvoice);
    } else if (!messageOrInvoice.message) {
      addInvoices(messageOrInvoice);
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
      <section className='catalog'>
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
  homes: store.homes,
  invoices: store.invoices
});

const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); },
  addInvoices: (invoice) => { dispatch(addInvoices(invoice)); }
});


export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
