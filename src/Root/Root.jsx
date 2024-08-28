import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`${
        darkMode ? 'dark' : 'light'
      } dark:bg-[#0F172A] h-screen max-w-7xl mx-auto`}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
