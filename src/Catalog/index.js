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



class Catalog extends Component{
  componentDidMount(){
    this.props.addHouses(homes);
    this.props.addMessages(messages);
  }

  buildMessages (messages, homes){
    if (this.props.location.pathname === '/admin/messages'){
      return messages.map(message => {
        return <Messages message={message}
          key={message.id}/>;
    })
  } else if(this.props.location.pathname === '/admin/properties'){
      return homes.map(home => {
        return <Homes home={home}
          key={home.id}/>
      })
  }
  }

  render() {
    console.log(this.props.homes);
    return (
      <section>
        {this.buildMessages(this.props.messages, this.props.homes)}
      </section>
    );
  }
}

const mapStateToProps =  (store) => ({
  messages: store.messages,
  homes: store.homes
});

const mapDispatchToProps = (dispatch) => ({
  addHouses: (homes) => { dispatch(addHouses(homes)); },
  addMessages: (messages) => { dispatch(addMessages(messages)); }
});


export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
