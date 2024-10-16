import React from 'react';
import ConnectLink from './ConnectLink';
import linkedin from '../Assets/linkedin.png';
import mail from '../Assets/gmail.png';
import github from '../Assets/github.png';

const Connect = () => {
  const connections = [
    { name: 'LinkedIn', image: linkedin, link: 'https://www.linkedin.com/in/ronak-katariya-2b3b4a1b9/' },
    { name: 'Mail', image: mail, link: 'mailto:ronakkatariya03@gmail.com' },
    { name: 'GitHub', image: github, link: 'https://github.com/ronak03rsk' }
  ];

  return (
    <section id="connect">
      <h2 className='text-base md:text-lg lg:text-xl font-bold my-8 p-8'>Connect</h2>
      <div className='flex justify-center gap-4 items-center m-4'>
        {connections.map((connection) => (
          <ConnectLink key={connection.name} name={connection.name} image={connection.image} link={connection.link} />
        ))}
      </div>
    </section>
  );
};

export default Connect;
