import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from '../assets/logo.png';


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(prevToggle => !prevToggle);

  const closeMenu = () => setToggle(false);

  return (
    <header className="navbar flex justify-between items-center px-4 sm:px-16 w-full sm:py-6 fixed bg-header h-16">
      <div className="flex items-center space-x-4 sm:space-x-2 cursor-pointer"onClick={() => window.scrollTo(0, 0)}>
        <img className="w-8 h-8 sm:w-8 sm:h-8" src={logo} alt="logo" />
        <div className="text-white font-bold sm:block">Designtechie</div>
      </div>

      <nav className="hidden md:block">
        <ul className="flex space-x-2 text-gray">
          <li><a href="#home" onClick={() => window.scrollTo(0, 0)}>Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <a className="bg-[#825aee] hover:bg-[#4A4453] text-white py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
              href="https://www.linkedin.com/in/designtechie/"> Get in touch </a>
          </li>
          
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={`sm:hidden ${toggle ? "block" : "hidden"} absolute top-0 right-0 h-24 bg-header w-56`}>
        <div className="text-gray hidden sm:block">Designtechie.</div>
        <ul className="flex flex-col p-4">
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#blogs" onClick={closeMenu}>Blogs</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/designtechie/"> Get in touch </a>
          </li>
        </ul>
        
        {/* Close button */}
        <button onClick={closeMenu} className="absolute top-2 right-2 text-white">
          <AiOutlineClose size={30} />
        </button>
      </nav>

      {/* Mobile Menu Toggle */}
      <button onClick={handleToggle} className="block md:hidden text-white">
        {toggle ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
    </header>
  );
};

export default Header;
