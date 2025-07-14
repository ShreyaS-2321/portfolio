import React from "react";

// Import images as modules
import InnosphereImg from "../assets/p1.png";
import NcodeImg from "../assets/ncode.png";
import ManoscopeImg from "../assets/p2.png";

const projects = [
  {
    name: "InnoSphere",
    image: InnosphereImg,
    link: "https://innosphere.netlify.app/"
  },
  {
    name: "Ncode",
    image: NcodeImg,
    link: "https://ncodee.netlify.app/"
  },
  {
    name: "Manoscope",
    image: ManoscopeImg,
    link: "https://manoscope.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10 text-purple-500">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-56 object-cover object-top transition duration-500 group-hover:brightness-75"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-sm">Click to explore</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
