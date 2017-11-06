import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CreateInvoice from '../CreateInvoice/index';

class Homes extends Component  {
  constructor(){
    super();
    this.state = {
      modalOpen: false
    };
    this.handleModal.bind(this);
  }

  handleModal(event){
    event.preventDefault();
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <article className='message-cards'>
        <p className='message-text message-name'>
          {this.props.home.ownerFirst}
          {this.props.home.ownerLast}</p>
        <p className='message-text message-name message-friendly'>
          {this.props.home.friendlyName}</p>
        <p className='message-text'>
          {this.props.home.street}
          {this.props.home.city},
          {this.props.home.stateShort}
          {this.props.home.zip}</p>
        <p className='message-text'>
          Bendrooms: {this.props.home.bedrooms}
          Bathrooms: {this.props.home.bathrooms}</p>
        <p className='message-text'>
          {this.props.home.discription}</p>
        <button onClick={this.handleModal.bind(this)}>Create Invoice</button>
        {this.state.modalOpen && <CreateInvoice
          submitInvoice={this.props.clickEvent}
          cancel={this.handleModal.bind(this)}
          home={this.props.home}/>}
      </article>
    );
  }
}

Homes.propTypes = {
  home: PropTypes.object,
  clickEvent: PropTypes.func
};

export default Homes;
