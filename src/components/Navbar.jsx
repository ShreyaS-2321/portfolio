import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full px-6 md:px-16 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md bg-black/30">
      <div className="text-2xl font-bold text-white">
        Port<span className="text-purple-400">folio</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-white text-lg font-medium">
        <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-3xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-white flex flex-col items-center py-6 space-y-4 md:hidden transition-all duration-300">
          <a href="#home" onClick={closeMenu} className="hover:text-purple-400 text-lg">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-purple-400 text-lg">About</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-purple-400 text-lg">Projects</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-purple-400 text-lg">Contact</a>
        </div>
      )}
    </nav>
  );
}
