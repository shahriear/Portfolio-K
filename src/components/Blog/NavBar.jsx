import React from 'react';

const NavBar = () => {
  return (
    <nav>
      <div className="container flex m-auto justify-between	items-center py-8">
        <div className="div">
          <img src="/logo.png.png" alt="logo" />
        </div>
        <ul className="flex">
          <li className="px-5	py-9 font-medium">
            <a href="#" className="hover:text-slate-400 transition-all">
              Home
            </a>
          </li>
          <li className="px-5	py-9 font-medium">
            <a href="#" className="hover:text-slate-400 transition-all">
              Pages
            </a>
          </li>
          <li className="px-5	py-9 font-medium">
            <Link
              to="/portfolio"
              className="hover:text-slate-400 transition-all"
            >
              Portfolio Layouts
            </Link>
          </li>
          <li className="px-5	py-9 font-medium">
            <a href="#" className="hover:text-slate-400 transition-all">
              Portfolio Single
            </a>
          </li>
          <li className="px-5	py-9 font-medium">
            <a href="#" className="hover:text-slate-400 transition-all">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
