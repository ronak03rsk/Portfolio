import React from 'react';

const ProjectCard = ({ name, image, link }) => {
  return (
    <div className='flex flex-col items-center justify-center flex-none w-64 p-6 bg-white border border-indigo-400 rounded-md shadow-md'>
      <h3 className='text-lg font-bold mb-4'>{name}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} className='rounded-md h-40 w-full object-cover' />
      </a>
    </div>
  );
};

export default ProjectCard;
