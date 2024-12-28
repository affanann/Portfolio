import React from "react";
import AboutImage from "../assets/About.png";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900 z-50 text-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-11 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-20 items-center">
         
          {/* img section */}
          <div className="relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <img
              src={AboutImage}
              className="w-[300px] md:w-[1500px] rounded-full border-blue-600 border shadow-blue-500 "/>
          </div>
          
          {/* paragraph section */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <p className="text-lg leading-7 mb-6">
              Hi, I’m Affan Madley, a Front-End Developer with a passion for 
              building simple, clean, and user-friendly web applications. I’m 
              skilled in HTML, CSS, JavaScript, and modern frameworks. I enjoy 
              solving problems and creating designs that are not just functional 
              but also visually appealing. Technology fascinates me, and I’m 
              always curious to learn something new.
            </p>
            <p className="text-lg leading-7 mb-6">
              I started my journey in tech from a non-IT background. Seeing the 
              impact of technology inspired me to dive in and start learning 
              everything I could. When I discovered front-end development, it 
              felt like the perfect fit. Since then, I’ve been constantly improving 
              my skills by learning from various sources like YouTube videos, online 
              courses, repositories, and documentation. Every step I take is focused 
              on getting better at what I do and building something meaningful.
            </p>
            <p className="text-lg leading-7 ">
              My goal is to become one of the best in this field and make a mark in 
              the tech industry. I’m inspired by successful people in technology who 
              have changed the world, and that motivates me to keep pushing forward. 
              Whether it’s learning a new tool or tackling a challenging project, 
              I’m always ready to take on the next big thing.
            </p>
            <div className="mt-5">
              
            {/* Skill Section */}
              <h1 className="font-bold text-2xl mb-5 text-blue-400">My Skills</h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">HTML</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">CSS</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">JavaScript</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">TypeScript</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">PHP</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">Java</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">React</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">Laravel</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">TailwindCSS</p>
                <p className="bg-gray-900 cursor-pointer text-gray-300 px-2 py-1 rounded-full">Bootstrap</p>
              </div>
              <a href="#contact"><button className="px-3 py-1 rounded-md bg-blue-500 text-white flex items-center gap-1">
                Contact Me
              <FaChevronRight/></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
