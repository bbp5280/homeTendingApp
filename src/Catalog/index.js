import React, { Component } from 'react';
import { connect } from 'react-redux';
import Messages from '../Messages/index';
import Homes from '../Homes/index';
import {
  addHouses,
  addMessages
} from '../HomePageContent/actions';
import {
  homes,
  messages
} from '../mockData/mockData';
import PropTypes from 'prop-types';



class Catalog extends Component{
  async componentDidMount(){
    this.props.addHouses(homes);
    this.props.addMessages(messages);
  }

  buildMessages (display, AddComponent){
    return display.map(toDisplay => {
      return <AddComponent message={toDisplay}
        home={toDisplay}
        key={toDisplay.id}/>;
    });
  }

  render() {
    return (
      <section>
        {this.props.location.pathname === '/admin/messages' &&
        this.buildMessages(this.props.messages, Messages)}
        {this.props.location.pathname === '/admin/properties' &&
        this.buildMessages(this.props.homes, Homes)}
      </section>
    );
  }
}

Catalog.propTypes = {
  messages: PropTypes.array,
  homes: PropTypes.array,
  location: PropTypes.object,
  addHouses: PropTypes.func,
  addMessages: PropTypes.func
};

const mapStateToProps =  (store) => ({
  messages: store.messages,
  homes: store.homes
});

const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); }
});


export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
