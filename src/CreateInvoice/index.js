import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class CreateInvoice extends Component{
  constructor(){
    super();
    this.state = {
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
      return <div
        className='line-item-wrapper'
        key={`${item.lineItem}${item.amount}`}>
        <p className='line-items'>{item.lineItem}</p>
        <p className='line-items'>{item.amount}</p>
      </div>;
    });
  }

  calculateTotal(){
    return this.state.runningTotal.reduce((acc, { amount }) => {
      return acc += parseFloat(amount);
    }, 0);
  }

  submitInvoices(event){
    event.preventDefault();
    this.props.submitInvoice(this.state);
    this.props.cancel(event);
  }


  render () {
    return (
      <div className='outer-modal'>
        <form className='inner-modal'>
          <p className='invoice' >Owner: {this.state.homeOwner}</p>
          <p className='invoice'>HouseName: {this.state.homeFriendlyName}</p>
          <p className='invoice'>Address: {this.state.houseAddress}</p>
          <input type='text'
            className='invoice-input description'
            placeholder='Description of work'
            onChange={(event) => {
              this.handleInvoiceInput('descriptionOfWork', event);
            }}/>
          <input type='text'
            className='invoice-input'
            placeholder='Line Item'
            onChange={(event) => {
              this.handleInvoiceInput('lineItem', event);
            }}
            value={this.state.lineItem}/>
          <input type='number'
            className='invoice-input'
            min='0.00'
            step='0.01'
            placeholder='Amount'
            onChange={(event) => {
              this.handleInvoiceInput('amount', event);
            }}
            value={this.state.amount}/>
          <button onClick={(event) => this.updateRunningTotal(event)}
            className='invoice-input'>
            Add
          </button>
          {this.buildLineItems()}
          <p className='total invoice'>Total: {this.calculateTotal()}</p>
          <button onClick={(event) => this.props.cancel(event)}
            className='invoice-input'>
            Cancel
          </button>
          <button onClick={(event) => this.submitInvoices(event)}
            className='invoice-input'>
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
  submitInvoices: PropTypes.func,
  submitInvoice: PropTypes.func
};
