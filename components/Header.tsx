"use client";
import { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { IoLogoOctocat } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blurHeader, setBlurHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBlurHeader(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        blurHeader ? 'backdrop-blur-md bg-opacity-50 bg-gray-800' : 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500'
      }`}
    >
      <nav className="relative h-14 flex justify-between items-center px-4 md:px-8">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <IoLogoOctocat className='w-6 h-6 text-yellow-400' />
          UIA
        </a>

        <div
          className={`fixed top-0 right-0 h-[100vh] bg-opacity-70 bg-gray-800 backdrop-blur-md p-8 transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-[100vw]'
          } w-[100vw]`}
        >
          <div
            className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <RiCloseLine />
          </div>
          <ul className="flex flex-col gap-8 mt-16">
            <li>
              <a href="#home" className="text-white text-lg font-audiowide hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white text-lg font-audiowide hover:text-yellow-400">
                about
              </a>
            </li>
            <li>
              <a href="#section" className="text-white text-lg font-audiowide hover:text-yellow-400">
                section
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-lg font-audiowide hover:text-yellow-400">
                contact
              </a>
            </li>
          </ul>
        </div>

        <div
          className="text-white text-2xl cursor-pointer md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <RiMenu4Line className={`${menuOpen && 'hidden'}`} />
        </div>

        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#home" className="text-white text-lg font-audiowide hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white text-lg font-audiowide hover:text-yellow-400">
              about
            </a>
          </li>
          <li>
            <a href="#section" className="text-white text-lg font-audiowide hover:text-yellow-400">
              section
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white text-lg font-audiowide hover:text-yellow-400">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
