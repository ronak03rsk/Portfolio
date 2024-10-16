import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Balance from '../Assets/Balancebudd.png';
import Landing from '../Assets/Landingpage.png';
import Stopwatch from '../Assets/Stopwatch.png';
import Tictactoe from '../Assets/Tictactoe.png';

const Projects = () => {
  // Initialize state for projects
  const [projects, setProjects] = useState([
    { name: 'BalanceBudd', image: Balance, link: 'https://cmpn-codecell.github.io/Syrus-2024-Web2-BlackPearlTrouve/' },
    { name: 'Responsive Landing Page', image: Landing, link: 'https://ronak03rsk.github.io/PRODIGY_WD_01/' },
    { name: 'Stopwatch', image: Stopwatch, link: 'https://ronak03rsk.github.io/PRODIGY_WD_02/' },
    { name: 'Tic Tac Toe', image: Tictactoe, link: 'https://ronak03rsk.github.io/PRODIGY_WD_03/' }
  ]);

  return (
    <section id='projects' className='min-h-screen pt-20 -mt-20'>
      <h2 className='text-base md:text-lg lg:text-3xl font-bold mb-8'>Projects</h2>
      <div className='flex flex-wrap justify-center gap-6'>
        {projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} image={project.image} link={project.link} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
