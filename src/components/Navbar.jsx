export default function Navbar() {
  return (
    <nav className="w-full px-16 py-4 flex items-center justify-between 
      sticky top-0 z-50 ">
      
      <div className="text-2xl font-bold text-white">
        Port<span className="text-purple-400">folio</span>
      </div>

      <ul className="flex space-x-6 text-white font-medium">
        <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
