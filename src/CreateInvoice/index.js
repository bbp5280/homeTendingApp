import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class CreateInvoice extends Component{
  constructor(){
    super();
    this.state = {
      invoiceNumber: 0,
      houseID: '',
      houseAddress: '',
      homeOwner: '',
      descriptionOfWork: '',
      total: '',
      date: this.setDate()
    };
  }

  componentDidMount(){
    this.setState({
      houseID: this.props.home.id,
      houseAddress: `${this.props.home.street} ${this.props.home.city}, ` +
      `${this.props.home.stateShort}, ${this.props.home.zip}`,
      homeOwner: `${this.props.home.ownerFirst} ${this.props.home.ownerLast}`
    });
  }

  setDate(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    if (day < 10){
      day = `0${day}`;
    } if (month < 10) {
      month = `0${month}`;
    }
    return `${month}/${day}/${year}`;
  }

  render () {
    console.log(this.state);
    return (
      <div className='outer-modal'>
        <form className='inner-modal'>
          <input type='text' placeholder='Description of work' />
          <input type='text' placeholder='Line Item' />
          <input type='text' placeholder='Amount' />
          <input type='text' placeholder='Line Item' />
          <input type='text' placeholder='Amount' />
          <input type='text' placeholder='Line Item' />
          <input type='text' placeholder='Amount' />
          <button onClick={this.props.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

CreateInvoice.propTypes = {
  cancel: PropTypes.func,
  home: PropTypes.object
};
