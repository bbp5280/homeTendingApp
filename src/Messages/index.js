import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCalendar from 'react-add-to-calendar';


class Messages extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      location: '',
      description: '',
      date:'',
      startTime:'',
      endTime: ''
    };
  }

  componentDidMount(){
    this.setState({
      title: this.props.message.message.title,
      location: this.props.message.message.address,
      description: this.props.message.message.body
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

  render(){
    return (
      <article className='message-cards'>
        <p className='message-text message-name'>
          {this.props.message.message.owner}</p>
        <p className='message-text message-name message-friendly'>
          {this.props.message.message.friendlyName}</p>
        <p className='message-text'>
          {this.props.message.message.title}</p>
        <p className='message-text'>
          {this.props.message.message.body}</p>
        <input type='text'
          placeholder='date 1985-11-23'
          onChange={(event) => { this.handleInput('date', event); }}
          className='message-input'
        />
        <input type='text'
          placeholder='Start Time 00:00:00'
          onChange={(event) => { this.handleInput('startTime', event); }}
          className='message-input'
        />
        <input type='text'
          placeholder='End Time 00:00:00'
          onChange={(event) => { this.handleInput('endTime', event); }}
          className='message-input'
        />
        <div>
          <AddToCalendar event={this.setEvent()}/>
        </div>
      </article>
    );
  }
}

Messages.propTypes = {
  message: PropTypes.object
};

export default Messages;
