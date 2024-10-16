import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 w-full fixed">
      <nav className='flex items-center justify-between'>
        <h1 className="text-2xl font-bold text-left ">Ronak Katariya</h1>
        <ul className="list-none">
          <li className="inline-block mr-4"><Link to="/" className="text-white no-underline hover:text-blue-400">Home</Link></li>
          <li className="inline-block mr-4"><Link to="/about" className="text-white no-underline hover:text-blue-400">About</Link></li>
          <li className="inline-block mr-4"><Link to="/projects" className="text-white no-underline hover:text-blue-400">Projects</Link></li>
          <li className="inline-block mr-4"><Link to="/skills" className="text-white no-underline hover:text-blue-400">Skills</Link></li>
          <li className="inline-block mr-4"><Link to="/connect" className="text-white no-underline hover:text-blue-400">Connect</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
