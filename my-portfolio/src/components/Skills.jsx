import React from 'react';
import SkillCard from './SkillCard';
import htmlpic from '../Assets/htmllogo.png'
import csspic from '../Assets/csslogo.jpg'
import jspic from '../Assets/jslogo.png'
import reactpic from '../Assets/reactlogo.png'
import nodepic from '../Assets/nodelogo.png'
import cprogram from '../Assets/clogo.jpg'
import c_program from '../Assets/c++logo.png'
import javapic from '../Assets/javalogo.png'
import pythonpic from '../Assets/pythonlogo.png'
import sqlpic from '../Assets/sqllogo.png'

const Skills = () => {
  const frontendSkills = [
    { title: 'HTML', img: 'htmlpic' },
    { title: 'CSS', img: '/workspaces/Portfolio/my-portfolio/src/Assets/csslogo.jpg' },
    { title: 'JavaScript', img: 'path_to_js_image' },
    { title: 'React', img: 'path_to_react_image' },
  ];

  const backendSkills = [
    { title: 'Node.js', img: 'path_to_node_image' },
  ];

  const programmingLanguages = [
    { title: 'C', img: 'path_to_c_image' },
    { title: 'C++', img: 'path_to_c++_image' },
    { title: 'Java', img: 'path_to_java_image' },
    { title: 'Python', img: 'path_to_python_image' },
  ];

  const databaseSkills = [
    { title: 'SQL', img: 'path_to_sql_image' },
  ];

  return (
    <section id='skills' className='min-h-screen pt-20 -mt-20'>
      <h2 className='text-base md:text-lg lg:text-3xl font-bold mb-8'>Skills</h2>

      <h3 className='text-lg font-bold mb-4'>Frontend</h3>
      <div className='flex flex-wrap justify-center'>
        {frontendSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>

      <h3 className='text-lg font-bold mb-4'>Backend</h3>
      <div className='flex flex-wrap justify-center'>
        {backendSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>

      <h3 className='text-lg font-bold mb-4'>Programming Languages</h3>
      <div className='flex flex-wrap justify-center'>
        {programmingLanguages.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>

      <h3 className='text-lg font-bold mb-4'>Database</h3>
      <div className='flex flex-wrap justify-center'>
        {databaseSkills.map(skill => (
          <SkillCard key={skill.title} title={skill.title} img={skill.img} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
