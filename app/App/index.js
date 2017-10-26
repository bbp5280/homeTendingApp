import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/index';
import Catalog from '../Catalog/index';
import Aside from '../Aside/index';
import HomePageContent from '../HomePageContent/index';

export default class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route path='/' component={HomePageContent} />
        <Route path='/admin' component={Aside} />
        <Route path='/admin' component={Catalog} />
      </main>
    );
  }
}
