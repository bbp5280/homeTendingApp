import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(){
    super();
    this.state = {
      showLogIn: true
    };
  }
  handleShowLogIn(){
    this.setState({
      showLogIn:!this.state.showLogIn
    });
  }

  render(){
    console.log(this.state);
    return (
      <header className='header'>
        <div>
          <h1>HOME TENDING</h1>
          <div className='log-in-div'>
            { this.state.showLogIn &&
            <Link to='/admin/messages' className='log-in' onClick={() => this.handleShowLogIn()}>Log In </Link>
          }
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
