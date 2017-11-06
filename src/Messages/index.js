import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCalendar from 'react-add-to-calendar';
import  Weather  from '../Weather/index';



class Messages extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      location: '',
      description: '',
      date:'',
      startTime:'',
      endTime: '',
      modalOpen: false
    };
  }

  async componentDidMount(){
    this.setState({
      title: this.props.message.message.title,
      location: this.props.message.message.address,
      description: this.props.message.message.body
    });
  }

  handleModal(event){
    event.preventDefault();
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  setEvent(){
    return {
      title: this.state.title,
      description: this.state.description,
      location: this.state.location,
      startTime: `${this.state.date}T${this.state.startTime}-07:00`,
      endTime: `${this.state.date}T${this.state.endTime}-07:00`
    };
  }

  handleInput (field, event){
    this.setState({
      [field]: event.target.value
    });
  }

  updatedMessageObject(){
    let dateOfWork = this.state.date;
    let startTime = this.state.startTime;
    let endTime = this.state.endTime;
    let messageObject = Object.assign({},
      this.props.message.message,
      {dateOfWork,
        startTime,
        endTime
      });
    return Object.assign({}, this.props.message, {message: messageObject});
  }

  render(){
    return (
      <article className='message-cards'>
        <p className='message-text message-name'>
          <span className='line-title'>
            Owner: </span> {this.props.message.message.owner}
        </p>
        <p className='message-text message-name message-friendly'>
          <span className='line-title'>
            House: </span> {this.props.message.message.friendlyName}
        </p>
        <p className='message-text'> {this.props.message.message.title}
        </p>
        <p className='message-text'>
          {this.props.message.message.body}
        </p>
        <button onClick={this.handleModal.bind(this)}
          className='view-forcast'>
          View Forcast
        </button>
        {this.state.modalOpen && <Weather
          close={this.handleModal.bind(this)}
          message={this.props.message.message}/>}
        <input type='date'
          placeholder='date 1985-11-23'
          onChange={(event) => { this.handleInput('date', event); }}
          className='message-input'
        />
        <input type='time'
          placeholder='Start Time 00:00:00'
          onChange={(event) => { this.handleInput('startTime', event); }}
          className='message-input'
        />
        <input type='time'
          placeholder='End Time 00:00:00'
          onChange={(event) => { this.handleInput('endTime', event); }}
          className='message-input'
        />
        <div className='calendar'>
          <AddToCalendar event={this.setEvent()}/>
          <button
            onClick={(message) => this.props.clickEvent(
              this.updatedMessageObject())}
            className='scheduled'>
            Scheduled
          </button>
        </div>
      </article>
    );
  }
}

Messages.propTypes = {
  message: PropTypes.object,
  clickEvent: PropTypes.func
};

export default Messages;
