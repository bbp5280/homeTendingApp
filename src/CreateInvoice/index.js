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
      homeFriendlyName: '',
      descriptionOfWork: '',
      lineItem: '',
      amount: '',
      runningTotal:[],
      date: this.setDate()
    };
  }

  componentDidMount(){
    this.setState({
      houseID: this.props.home.id,
      houseAddress: `${this.props.home.street} ${this.props.home.city}, ` +
      `${this.props.home.stateShort}, ${this.props.home.zip}`,
      homeOwner: `${this.props.home.ownerFirst} ${this.props.home.ownerLast}`,
      homeFriendlyName: this.props.home.friendlyName
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

  handleInvoiceInput (field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  updateRunningTotal(event){
    event.preventDefault();
    let lineItem = this.state.lineItem;
    let amount = this.state.amount;
    this.setState({
      runningTotal: [...this.state.runningTotal,
        Object.assign({}, {lineItem,
          amount})],
      lineItem:'',
      amount:''
    });
  }

  buildLineItems(){
    return this.state.runningTotal.map(item => {
      return <div key={`${item.lineItem}${item.amount}`}>
        <p>{item.lineItem}</p>
        <p>{item.amount}</p>
      </div>;
    });
  }

  calculateTotal(){
    return this.state.runningTotal.reduce((acc, { amount }) => {
      return acc += parseFloat(amount);
    }, 0);
  }


  render () {
    return (
      <div className='outer-modal'>
        <form className='inner-modal'>
          <p>Owner: {this.state.homeOwner}</p>
          <p>HouseName: {this.state.homeFriendlyName}</p>
          <p>Address: {this.state.houseAddress}</p>
          <input type='text'
            placeholder='Description of work'
            onChange={(event) => {
              this.handleInvoiceInput('descriptionOfWork', event);
            }}/>
          <input type='text'
            placeholder='Line Item'
            onChange={(event) => {
              this.handleInvoiceInput('lineItem', event);
            }}
            value={this.state.lineItem}/>
          <input type='number'
            min='0.00'
            step='0.01'
            placeholder='Amount'
            onChange={(event) => {
              this.handleInvoiceInput('amount', event);
            }}
            value={this.state.amount}/>
          <button onClick={(event) => this.updateRunningTotal(event)}>
            Add
          </button>
          {this.buildLineItems()}
          <p>Total: {this.calculateTotal()}</p>
          <button onClick={(event) => this.props.cancel(event)}>
            Cancel
          </button>
          <button onClick={(state) => this.props.submitInvoice(this.state)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

CreateInvoice.propTypes = {
  cancel: PropTypes.func,
  home: PropTypes.object,
  submitInvoice: PropTypes.func
};
