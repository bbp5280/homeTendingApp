import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  homes,
  messages,
  invoices
} from '../mockData/mockData';
import {
  addHouses,
  addMessages
} from './actions';
import { addInvoices } from '../Catalog/actions';
import { Link } from 'react-router-dom';

class HomePageContent extends Component{

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
  addInvoices: (invoice) => { dispatch(addInvoices(invoice)); }
});

export default connect(null, mapDispatchToProps)(HomePageContent);
