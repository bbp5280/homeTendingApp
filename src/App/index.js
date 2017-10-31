import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/index';
import  Catalog  from '../Catalog/index';
import Aside from '../Aside/index';
import HomePageContent from '../HomePageContent/index';

const App = () => {
  return (
    <div className='wrapper-div'>
      <Header />
      <Route exact path='/' component={HomePageContent} />
      <Route path='/admin' component={Aside} />
      <Route path='/admin' component={Catalog} />
    </div>
  );
};





export default App;
