import React, { Component } from 'react';

export default class CreateInvoice extends Component{
  constructor(){
    super();
    this.state = {
      invoiceNumber: 0,
      houseID: '',
      houseAddress: '',
      homeOwner: '',
      descriptionOfWork: '',
      total: ''
    };
  }

  render () {
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
