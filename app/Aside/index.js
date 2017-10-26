import React from 'react';
import { NavLink } from 'react-router-dom';

export const Aside = () => {

  return (
    <aside>
      <NavLink to='/admin/messages'>Messages</NavLink>
      <NavLink to='/admin/properties'>Properties</NavLink>
      <NavLink to='/admin/create-invoice'>Create Invoice</NavLink>
    </aside>
  );
};
