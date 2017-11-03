import React from 'react';

const Homes = ({ home }) => {
  return (
    <article className='message-cards'>
      <p className='message-text message-name'>
        {home.ownerFirst} {home.ownerLast}</p>
      <p className='message-text message-name message-friendly'>
        {home.friendlyName}</p>
      <p className='message-text'>
        {home.street} {home.city}, {home.stateShort} {home.zip}</p>
      <p className='message-text'>
        Bendrooms {home.bedrooms}  Bathrooms {home.bathrooms}</p>
      <p className='message-text'>
        {home.discription}</p>
      <a>Invoices</a>
      <a>Messages</a>
    </article>
  );
};



export default Homes;
