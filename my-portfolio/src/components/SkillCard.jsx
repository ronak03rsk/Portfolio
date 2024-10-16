import React from 'react';

const SkillCard = ({ title, img }) => {
  return (
    <div className='m-4'>
      <img src={img} alt={title} className='w-20 h-20' />
      <p>{title}</p>
    </div>
  );
};

export default SkillCard;
