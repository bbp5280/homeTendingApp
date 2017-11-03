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
      <form>

      </form>
    );
  }
}
