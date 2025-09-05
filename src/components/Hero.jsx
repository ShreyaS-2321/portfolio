import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

// Import image as a module
import aboutImg from '../assets/aboutimg.png';

export default function Hero() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center" id="home">
      <img
        src={aboutImg}
        alt="Shreya profile"
        className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-purple-500 shadow-lg object-cover"
      />
      <h1 className="text-5xl font-bold mb-4 text-white">
        Hey, I'm{' '}
        <span className="bg-purple-500 bg-clip-text text-transparent">
          Shreya Shrivastava
        </span>
      </h1>

      <h2 className="text-2xl text-gray-300 font-medium mb-6">
        <TypeAnimation
          sequence={['I am a UI/UX Designer', 2000, 'I am a Frontend Developer', 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </h2>

      {/* Resume Download Button */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
        <a
          href="public/Resume-Shreya.pdf" download
          className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center space-x-6 text-2xl text-white">
        <a href="https://www.linkedin.com/in/shreya-shrivastava-261245256/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ShreyaS-2321" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="https://dribbble.com/Shreya88" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
          <FaDribbble />
        </a>
      </div>
    </section>
  );
}
