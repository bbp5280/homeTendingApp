import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  homes,
  messages
} from '../mockData/mockData';
import {
  addHouses,
  addMessages
} from './actions';
import { Link } from 'react-router-dom';


class HomePageContent extends Component{


  componentDidMount(){
    this.props.addHouses(homes);
    this.props.addMessages(messages);

  }


  render(){
    return (
      <div>
        <Link to='/admin/messages'>Log In </Link>
      home page
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); }
});

export default connect(null, mapDispatchToProps)(HomePageContent);
