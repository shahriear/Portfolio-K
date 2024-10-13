import React from 'react';
import Navbar from '../Home/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
