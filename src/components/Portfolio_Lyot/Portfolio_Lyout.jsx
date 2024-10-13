import React from 'react';

const Portfolio_Lyout = () => {
  return (
    <section>
      <div className="container m-auto">
        <h1 className="font-roboto font-medium text-6xl text-primary py-14 ">
          Grid Two Column
        </h1>
        <ul className="py-9	flex gap-3.5 ">
          <li>
            <a href="#" className="font-normal text-base">
              All /
            </a>
          </li>
          <li>
            <a href="#" className="font-normal text-base">
              Branding /
            </a>
          </li>
          <li>
            <a href="#" className="font-normal text-base">
              Illustration /
            </a>
          </li>
          <li>
            <a href="#" className="font-normal text-base">
              Logo
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
          <img src="/pic-4.png" alt="pic-1" className="w-full" />
          <img src="/pic-5.png" alt="pic-1" className="w-full" />
          <img src="/pic-6.png" alt="pic-1" className="w-full" />
          <img src="/pic-7.png" alt="pic-1" className="w-full" />
          <img src="/pic-8.png" alt="pic-1" className="w-full" />
          <img src="/pic-9.png" alt="pic-1" className="w-full" />
        </div>
      </div>
    </section>

    // <nav>
    //   <div className="container flex m-auto justify-between	items-center py-8">
    //     <div className="div">
    //       <img src="/logo.png.png" alt="logo" />
    //     </div>
    //     <ul className="flex">
    //       <li className="px-5	py-9 font-medium">
    //         <a href="#" className="hover:text-slate-400 transition-all">
    //           Home
    //         </a>
    //       </li>
    //       <li className="px-5	py-9 font-medium">
    //         <a href="#" className="hover:text-slate-400 transition-all">
    //           Pages
    //         </a>
    //       </li>
    //       <li className="px-5	py-9 font-medium">
    //         <Link
    //           to="/portfolio"
    //           className="hover:text-slate-400 transition-all"
    //         >
    //           Portfolio Layouts
    //         </Link>
    //       </li>
    //       <li className="px-5	py-9 font-medium">
    //         <a href="#" className="hover:text-slate-400 transition-all">
    //           Portfolio Single
    //         </a>
    //       </li>
    //       <li className="px-5	py-9 font-medium">
    //         <a href="#" className="hover:text-slate-400 transition-all">
    //           Blog
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Portfolio_Lyout;
