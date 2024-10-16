import React from 'react';

const ConnectLink = ({ name, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='block'>
      <img src={image} alt={name} className='w-10 h-10' />
      <h3 className='text-lg font-bold'>{name}</h3>
    </a>
  );
};

export default ConnectLink;
