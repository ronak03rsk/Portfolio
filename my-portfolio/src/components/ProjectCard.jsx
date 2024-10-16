import React from 'react';

const ProjectCard = ({ name, image, link }) => {
  return (
    <div className='border border-indigo-400 rounded-md p-4'>
      <h3 className='text-lg font-bold my-4'>{name}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className='rounded-md h-50 w-50' />
      </a>
    </div>
  );
};

export default ProjectCard;
