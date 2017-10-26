import React, { Component } from 'react';
import AddTodoFormContainer from '../containers/AddTodoFormContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodoFormContainer />
      </div>
    );
  }
}

export default App;
