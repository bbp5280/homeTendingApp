import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className='header'>
      <div>
        <h1>HOME TENDING</h1>
        <div className='log-in-div'>
          <Link to='/admin/messages' className='log-in'>Log In </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
