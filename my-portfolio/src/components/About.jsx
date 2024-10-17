import React from 'react';
import profile from '../Assets/profile.png';

const About = () => {
  return (
    <section id='about'className='min-h-screen p-2 mx-2 flex items-center justify-center'>
      <div className=' flex-shrink-0 justify-center'>
        <img src={profile} alt="Profile" className="rounded-full h-32 w-32 md:h-64 md:w-64" />
      </div>
      <div className='text-center ml-7 justify-center'>
        <h2 className="text-base md:text-lg lg:text-xl font-bold">About Me</h2>
        <p className='leading-loose text-wrap'>
          I am Ronak Katariya, an enthusiastic person who is eager to learn and evolve. 
          I am confident, good in communication, and I like browsing about recent trends 
          in Technology and Finance. I am interested in DSA, SQL, Cybersecurity, AI, and 
          Web Development.
        </p>
      </div>
    </section>
  );
};

export default About;
