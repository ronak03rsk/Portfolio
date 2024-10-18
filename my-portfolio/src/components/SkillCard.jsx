import React from 'react';

const SkillCard = ({ title, img }) => {
  return (
    <div className='m-4 flex flex-col items-center justify-center text-center'>
      <img src={img} alt={title} className='w-20 h-20 mb-2' />
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
