import React from 'react';

const ConnectLink = ({ name, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='flex flex-col items-center justify-center gap-2'>
      <img src={image} alt={name} className='w-16 h-16' />
      <h3 className='text-lg font-bold'>{name}</h3>
    </a>
  );
};

export default ConnectLink;
