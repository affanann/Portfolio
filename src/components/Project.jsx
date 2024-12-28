import React from "react";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "A responsive portfolio website built with React and animation libraries like Framer Motion. This project highlights skills in modern web development, including TailwindCSS and Vite, to create a smooth and engaging user experience.",
      tools: [ "React JS","TailwindCSS", "FramerMotion" ],
      image: Image1,
      githublink: "https://github.com/affanann/PortfolioReact",
    },
    {
      title: "Simple Calculator",
      description: "A functional calculator created using HTML, CSS, and JavaScript. It performs essential arithmetic operations with a clean and user-friendly design, ensuring smooth usability for basic calculations and is easy to understand.",
      tools: ["HTML", "CSS", "JavaScript"],
      image: Image2,
      githublink: "https://github.com/affanann/Simple-Calculator",
    },
    {
      title: "Student Data Management",
      description:"A dynamic CRUD (Create, Read, Update, Delete) application built with Laravel and Bootstrap. It manages student data efficiently with features for adding, editing, searching, and deleting, all through a clean and intuitive interface.",
      tools: ["Laravel", "Bootstrap", "PHP", "mySQL"],
      image: Image3,
      githublink: "https://github.com/affanann/ProjectCRUD",
    },
  ];

  return (
    <section id="project" className="bg-gradient-to-r bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tools, idx) => (
                    <div key={idx} className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">{tools}</div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.githublink} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"><FaGithub/>Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
