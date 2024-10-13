import React from 'react';
import { Link } from 'react-router-dom';

const Navebar = () => {
  return (
    <nav>
      <div className="container flex m-auto justify-between	items-center py-8">
        <div className="div">
          <img src="/logo.png.png" alt="logo" />
        </div>
        <ul className="flex">
          <li className="px-5	py-9 font-medium">
            <Link to="/" className="hover:text-slate-400 transition-all">
              Home
            </Link>
          </li>
          <li className="px-5	py-9 font-medium">
            <Link to="/about" className="hover:text-slate-400 transition-all">
              About
            </Link>
          </li>
          <li className="px-5	py-9 font-medium">
            <Link to="/" className="hover:text-slate-400 transition-all">
              Portfolio Layouts
            </Link>
          </li>
          <li className="px-5	py-9 font-medium">
            <Link to="/" className="hover:text-slate-400 transition-all">
              Portfolio Single
            </Link>
          </li>
          <li className="px-5	py-9 font-medium">
            <Link to="/blog" className="hover:text-slate-400 transition-all">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navebar;
