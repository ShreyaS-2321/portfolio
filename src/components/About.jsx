import GlassIcons from './GlassIcons';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava, FaBootstrap,
  FaFigma, FaGitAlt
} from 'react-icons/fa';
import {
  SiTailwindcss, SiC, SiCplusplus, SiFirebase, SiMysql, SiAppwrite
} from 'react-icons/si';

export default function About() {
  return (
    <section className="py-4 px-6 max-w-5xl mx-auto text-center text-white" id="about">
      <h2 className="text-4xl font-bold mb-6 text-purple-500">About Me</h2>

      <p className="text-lg mb-10 text-gray-300 leading-relaxed text-justify">
        I’m a final-year Computer Science student who blends logic with creativity.
        I love building beautiful interfaces with Figma, React, and Tailwind,
        and I enjoy turning ideas into real products. With a strong grasp on both
        design and code, I’m always exploring new ways to solve problems. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis sit et officia libero, nesciunt numquam facere reprehenderit.
      </p>

      <h3 className="text-3xl font-semibold mb-6">Skills</h3>

      {/* Skill Icons */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-6 justify-items-center">
        <FaHtml5 size={40} color="#E44D26" title="HTML5" />
        <FaCss3Alt size={40} color="#264DE4" title="CSS3" />
        <FaJsSquare size={40} color="#F0DB4F" title="JavaScript" />
        <FaReact size={40} color="#61DBFB" title="React" />
        <SiTailwindcss size={40} color="#38BDF8" title="Tailwind CSS" />
        <FaBootstrap size={40} color="#7952B3" title="Bootstrap" />
        <SiC size={40} color="#A8B9CC" title="C" />
        <SiCplusplus size={40} color="#00599C" title="C++" />
        <FaJava size={40} color="#f89820" title="Java" />
        <FaPython size={40} color="#306998" title="Python" />
        <SiFirebase size={40} color="#FFCA28" title="Firebase" />
        <SiAppwrite size={40} color="#F02E65" title="Appwrite" />
        <SiMysql size={40} color="#00758F" title="MySQL" />
        <FaFigma size={40} color="#F24E1E" title="Figma" />
      </div>
    </section>
  );
}
