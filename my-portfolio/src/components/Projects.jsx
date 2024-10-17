import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import Balance from '../Assets/Balancebudd.png';
import Landing from '../Assets/Landingpage.png';
import Stopwatch from '../Assets/Stopwatch.png';
import Tictactoe from '../Assets/Tictactoe.png';

const Projects = () => {
  const [projects] = useState([
    { name: 'BalanceBudd', image: Balance, link: 'https://cmpn-codecell.github.io/Syrus-2024-Web2-BlackPearlTrouve/' },
    { name: 'Responsive Landing Page', image: Landing, link: 'https://ronak03rsk.github.io/PRODIGY_WD_01/' },
    { name: 'Stopwatch', image: Stopwatch, link: 'https://ronak03rsk.github.io/PRODIGY_WD_02/' },
    { name: 'Tic Tac Toe', image: Tictactoe, link: 'https://ronak03rsk.github.io/PRODIGY_WD_03/' }
  ]);

  const scrollContainer = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollContainer;
    if (direction === 'left') {
      current.scrollLeft -= 300; // Adjust the scroll distance
    } else {
      current.scrollLeft += 300; // Adjust the scroll distance
    }
  };

  return (
    <section id='projects' className='min-h-screen relative'>
      <h2 className='justify-center text-base md:text-lg lg:text-3xl font-bold mb-8'>Projects</h2>
      
      <div className='relative justify-items-center'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-0 z-10 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-800'
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          ←
        </button>
        <button
          onClick={() => scroll('right')}
          className='absolute right-0 z-10 bg-gray-700 text-white px-3 py-2 rounded-full hover:bg-gray-800'
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          →
        </button>

        <div
          ref={scrollContainer}
          className='justify-center items-center flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide'
        >
          {projects.map((project) => (
            <ProjectCard key={project.name} name={project.name} image={project.image} link={project.link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
