import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavItem,
  SideContent,
  SideItems,
  DropDown,
} from 'responsive-navigation';

const Navbarr = () => {
  return (
    <Navbar
      style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #dee2e6',
        padding: '20px 0',
      }}
    >
      <NavbarBrand>
        <img src="/logo.png.png" alt="logo" />
      </NavbarBrand>
      <NavbarContent>
        <DropDown style={{ width: '150px' }} label="Home">
          <NavItem>
            <Link to="/basic" className="hover:text-slate-400 transition-all">
              Basic
            </Link>
          </NavItem>
          <NavItem>
            <a href="/">home</a>
          </NavItem>
        </DropDown>
        <DropDown style={{ width: '150px' }} label="About">
          <NavItem>
            <a href="/service">Service 1</a>
          </NavItem>
          <NavItem>
            <a href="/about">about</a>
          </NavItem>
        </DropDown>
        <DropDown style={{ width: '150px' }} label="Portfolio Layouts">
          <NavItem>
            <a href="/portfolio">portfolio</a>
          </NavItem>
          <NavItem>
            <a href="/grid">grid</a>
          </NavItem>
        </DropDown>
        <DropDown style={{ width: '150px' }} label="Portfolio Single">
          <NavItem>
            <a href="/portfoliosingle">Service 1</a>
          </NavItem>
        </DropDown>
        <DropDown style={{ width: '150px' }} label="Blog">
          <NavItem>
            <a href="/blog">Service </a>
          </NavItem>
        </DropDown>
      </NavbarContent>
    </Navbar>
    // <nav>
    //   <div className="container flex m-auto justify-between	items-center py-8 ">
    //     <div>
    //       <img src="/logo.png.png" alt="logo" />
    //     </div>

    //     <div className="manu">
    //       <ul>
    //         <li>
    //           <Link to="/" className="hover:text-slate-400 transition-all">
    //             Home
    //           </Link>
    //           <ul>
    //             <li>
    //               <Link
    //                 to="/basic"
    //                 className="hover:text-slate-400 transition-all"
    //               >
    //                 Basic
    //               </Link>
    //             </li>
    //             <li>
    //               <a href="#">Clean</a>
    //             </li>
    //             <li>
    //               <a href="#">Basic</a>
    //             </li>
    //             <li>
    //               <a href="#">Centered</a>
    //             </li>
    //             <li>
    //               <a href="#">Contact</a>
    //             </li>
    //             <li>
    //               <a href="#">Basic</a>
    //             </li>
    //             <li>
    //               <a href="#">Fullwidth</a>
    //             </li>
    //             <li>
    //               <a href="#">Showcase</a>
    //             </li>
    //             <li>
    //               <a href="#">Single Row</a>
    //             </li>
    //             <li>
    //               <a href="#">Listing</a>
    //             </li>
    //             <li>
    //               <a href="#">Single Row</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <Link to="/about" className="hover:text-slate-400 transition-all">
    //             About
    //           </Link>
    //           <ul>
    //             <li>
    //               <Link
    //                 to="/service"
    //                 className="hover:text-slate-400 transition-all"
    //               >
    //                 Service
    //               </Link>
    //               <ul>
    //                 <li>
    //                   <a href="#">About</a>
    //                 </li>
    //                 <li>
    //                   <a href="#"> Extended</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">About Us</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="#">Contact</a>
    //               <ul>
    //                 <li>
    //                   <a href="#">Service</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Contact</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="#">Basic</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <Link
    //             to="/portfolio"
    //             className="hover:text-slate-400 transition-all"
    //           >
    //             Portfolio Layouts
    //           </Link>
    //           <ul>
    //             <li>
    //               <Link
    //                 to="/grid"
    //                 className="hover:text-slate-400 transition-all"
    //               >
    //                 Grid
    //               </Link>
    //               <ul>
    //                 <li>
    //                   <a href="#">Grid-Col-1</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Grid-Col-2</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="#">Masonary</a>
    //               <ul>
    //                 <li>
    //                   <a href="#">Masonary-1</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Masonary-2</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Masonary-3</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="#">Mosaic</a>
    //             </li>
    //             <li>
    //               <a href="#">Lembo</a>
    //             </li>
    //             <li>
    //               <a href="#">Basic</a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <Link
    //             to="/portfoliosingle"
    //             className="hover:text-slate-400 transition-all"
    //           >
    //             Portfolio Single
    //           </Link>
    //           <ul>
    //             <li>
    //               <a href="#">images</a>
    //               <ul>
    //                 <li>
    //                   <a href="#">Stack image</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Hero image</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Photos</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="#">Slider</a>
    //               <ul>
    //                 <li>
    //                   <a href="#">Service</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Contact</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="#">Gallery</a>
    //               <ul>
    //                 <li>
    //                   <a href="#">Videos</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Photos</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">App 2</a>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </li>
    //         <li>
    //           <Link to="/blog" className="hover:text-slate-400 transition-all">
    //             Blog
    //           </Link>
    //           <ul>
    //             <li>
    //               <a href="#">Blog List</a>
    //             </li>
    //             <li>
    //               <a href="#">Masonary-2</a>
    //             </li>
    //             <li>
    //               <a href="#">Blog classic</a>
    //             </li>
    //             <li>
    //               <a href="#">standerd</a>
    //             </li>
    //             <li>
    //               <a href="#">Single Slider</a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbarr;
