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
import PropTypes from 'prop-types';


class HomePageContent extends Component{

  async componentDidMount(){
    this.props.addHouses(homes);
    this.props.addMessages(messages);
    this.props.addInvoices(invoices);

  }

  render(){
    return (
      <div className='hompage-background'>
        <div className='backgroud-img'></div>
        <img src={'http://www.nordzenterprises.com/hometending/wp-content/uploads/2015/08/cool-backgrounds9-e1440776175281.jpg'}
          alt='Carribian Homes'
          width='100%'/>
      </div>
    );
  }
}

HomePageContent.propTypes = {
  addHouses: PropTypes.func,
  homes: PropTypes.array,
  addMessages: PropTypes.func,
  addInvoices: PropTypes.func
};


const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); },
  addInvoices: (invoice) => { dispatch(addInvoices(invoice)); }
});

export default connect(null, mapDispatchToProps)(HomePageContent);
