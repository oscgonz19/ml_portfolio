'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-3">
      <div className="container mx-auto flex justify-between items-center max-w-full">
        <div className="text-xl font-bold">
          <Link href="/">ozzproject.com</Link>
        </div>
        
        <div className="hidden md:flex space-x-4 text-xl">
          <ul className="flex space-x-4">
            <li>
              <Link href="https://www.canva.com/design/DAGN2J0fx8I/G4VsXVOJivhV5m9JaULFbA/view?utm_content=DAGN2J0fx8I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h09d0d2c337">CV</Link>
            </li>
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/oscgonz19/recent-activity/articles/">Articles</Link>
            </li>
            <li>
              <Link href="/other-sites">Other Sites</Link>
            </li>
          </ul>
          <div className="flex space-x-2">
            <a href="https://github.com/oscgonz19" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6"/>
            </a>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FiX className="w-8 h-8"/> : <FiMenu className="w-8 h-8"/>}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden bg-black p-3">
          <ul className="space-y-4 text-xl">
            <li>
              <Link href="https://www.canva.com/design/DAFs7jzIutM/WkONmE7E75_GS3KU2lfbSg/view">CV</Link>
            </li>
            <li>
              <Link href="">Portfolio</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/oscgonz19/recent-activity/articles/">Articles</Link>
            </li>
            <li>
              <Link href="/other-sites">Other Sites</Link>
            </li>
          </ul>
          <div className="flex space-x-2 mt-4">
            <a href="https://github.com/oscgonz19" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6"/>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
