import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => {

  return (
    <aside className='aside'>
      <NavLink to='/admin/messages'
        className='side-nav'>Messages</NavLink>
      <NavLink to='/admin/properties'
        className='side-nav'>Properties</NavLink>
      <NavLink to='/admin/create-invoice'
        className='side-nav'>Create Invoice</NavLink>
    </aside>
  );
};

export default Aside;
