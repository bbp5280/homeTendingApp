import React from 'react';
import PropTypes from 'prop-types';

export const Invoices = ({invoices}) => {
  return (
    <article className='message-cards'>
      <p className='message-text message-name'>
        <span className='line-title'>
          Owner: </span> {invoices.homeOwner}
      </p>
      <p className='message-text message-name message-friendly'>
        <span className='line-title'>
          House: </span> {invoices.homeFriendlyName}
      </p>
      <p className='message-text'> {invoices.houseAddress}
      </p>
      <p className='message-text'>
        {invoices.date}
      </p>
    </article>
  );
};

Invoices.propTypes = {
  invoices: PropTypes.object
};
