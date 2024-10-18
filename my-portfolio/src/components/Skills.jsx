import React from 'react';
import SkillCard from './SkillCard';
import htmlpic from '../Assets/htmllogo.png';
import csspic from '../Assets/csslogo.jpg';
import jspic from '../Assets/jslogo.png';
import reactpic from '../Assets/reactlogo.png';
import nodepic from '../Assets/nodelogo.png';
import cprogram from '../Assets/clogo.jpg';
import c_program from '../Assets/c++logo.png';
import javapic from '../Assets/javalogo.png';
import pythonpic from '../Assets/pythonlogo.png';
import sqlpic from '../Assets/sqllogo.png';

const Skills = () => {
  const frontendSkills = [
    { title: 'HTML', img: htmlpic },
    { title: 'CSS', img: csspic },
    { title: 'JavaScript', img: jspic },
    { title: 'React', img: reactpic },
  ];

  const backendSkills = [
    { title: 'Node.js', img: nodepic },
  ];

  const programmingLanguages = [
    { title: 'C', img: cprogram },
    { title: 'C++', img: c_program },
    { title: 'Java', img: javapic },
    { title: 'Python', img: pythonpic },
  ];

  const databaseSkills = [
    { title: 'SQL', img: sqlpic },
  ];

  return (
    <section id='skills' className='min-h-screen flex flex-col justify-center items-center'>
      <h2 className='text-base md:text-lg lg:text-3xl font-bold p-8 mb-8 text-center'>Skills</h2>

      <h3 className='text-lg font-bold mb-4 text-center'>Frontend</h3>
      <div className='flex flex-wrap justify-center'>
        {frontendSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>

      <h3 className='text-lg font-bold mb-4 text-center'>Backend</h3>
      <div className='flex flex-wrap justify-center'>
        {backendSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>

      <h3 className='text-lg font-bold mb-4 text-center'>Programming Languages</h3>
      <div className='flex flex-wrap justify-center'>
        {programmingLanguages.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>

      <h3 className='text-lg font-bold mb-4 text-center'>Database</h3>
      <div className='flex flex-wrap justify-center'>
        {databaseSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
