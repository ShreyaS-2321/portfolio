import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaJava, FaBootstrap,
  FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiC, SiCplusplus, SiFirebase, SiMysql, SiAppwrite
} from 'react-icons/si';
import { Timeline } from "./ui/timeline";

// Import images as React components
import Gramhealth from "../assets/gramhealth.png";
import Swarnadeep from "../assets/swarnadeep.png";
import Bibliohive from "../assets/bibliohive.jpg";
import Manoscope from "../assets/p2.png";
import Mumgency from "../assets/m2.png";
import Travelo from "../assets/travelo.png";
import Skillquest from "../assets/sq.png"
import Khanabhilekh from "../assets/ka.png"

export default function About() {
const timelineData = [
  {
        title: "2025",
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200 font-['Space_Grotesk'] text-justify">
                    Currently diving into full-stack development to strengthen both frontend and backend skills. Also focusing on Data Structures and Algorithms using Java to sharpen problem-solving abilities. Actively looking for exciting job and internship opportunities!
                </p>
                <div className="grid grid-cols-1 gap-4"> 
                  <a href="https://www.linkedin.com/in/shreya-shrivastava-261245256/" className="bg-purple-600 text-white px-4 py-2 rounded-md text-md font-bold">Hire Me :)</a>
                </div>
            </div>
        )
    },
    {
        title: "2024",
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200 font-['Space_Grotesk'] text-justify">
                    UI/UX Design Intern at GramHealth & Freelance UI/UX Designer at Swarnadeep Castings Pvt. Ltd.: Contributed to real-time design systems, created responsive mobile/web interfaces, and participated in user research.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img src={Gramhealth} alt="Design Sample" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                    <img src={Swarnadeep} alt="UI" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                    <img src={Bibliohive} alt="UX" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                    <img src={Khanabhilekh} alt="Workflow" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                </div>
            </div>
        )
    },
    {
        title: "2023",
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-white md:text-sm dark:text-neutral-200 font-['Space_Grotesk'] text-justify">
                    Participated in multiple hackathons and built end-to-end UI/UX platforms. Started exploring more about frontend development, learning to bring ideas to life in the browser.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img src={Manoscope} alt="Hackathon" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                    <img src={Mumgency} alt="Design Sprint" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                </div>
            </div>
        )
    },
    {
        title: "2022",
        content: (
            <div>
                <p className="mb-4 text-xs font-normal text-white md:text-sm dark:text-neutral-200 font-['Space_Grotesk'] text-justify">
                    Started my journey in frontend development and UI/UX design. Got hands-on with Figma and began experimenting with personal designs and mini projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img src={Travelo} alt="Hackathon" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                    <img src={Skillquest} alt="Design Sprint" className="h-20 w-full rounded-lg object-cover object-top md:h-44 lg:h-60" />
                </div>
            </div>
        )
    }
];

  return (
    <section className="py-10 px-6 max-w-5xl mx-auto text-center text-white" id="about">
      <h2 className="text-4xl font-bold mb-6 text-purple-500">About Me</h2>

      <p className="text-lg mb-10 text-gray-300 leading-relaxed text-justify">
        I'm a final-year Computer Science student who loves mixing creativity with problem-solving. I enjoy designing clean and user-friendly interfaces and turning ideas into real, usable products. With a good understanding of both design and development, I’m always looking for new and better ways to make things work and look great.
      </p>

      <h3 className="text-3xl font-semibold mb-6">Skills</h3>

      {/* Skill Icons */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-6 justify-items-center mb-10">
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

      <h3 className="text-3xl font-semibold mb-6">My Journey</h3>
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
