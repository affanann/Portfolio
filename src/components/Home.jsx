import React from "react";
import Profile from "../assets/Profile.png";
import CV from "../assets/CV_Affan_Madley.pdf";
import { Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import "../css/Star.css";

const Home = () => {
  return (
    <section className="h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10">
      {/* star */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between">
        <div className="md:space-y-6 px-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-bold mb-4"
          > Hi👋, I'm <p className="text-blue-400">Affan Madley</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mb-3"
          > Front End Developer | Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300"
          >  I’m a 17-year-old Computer Systems student at Sriwijaya University, 
             passionate about front-end development. I aspire to collaborate with 
             talented individuals, continually enhance my skills, and thrive in 
             dynamic teamwork environments to create impactful and innovative solutions.
          </motion.p>
          <motion.a
            href={CV}
            target="_blank"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-2 gap-2 text-sm font-medium bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]">
            <Download className="w-5 h-5"/>
            Download CV
          </motion.a>
          <div className="flex gap-3 text-2xl transition-all mt-5 md:mt-0">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/affanmadley" target="_blank">
              <FaLinkedin className="hover:text-blue-400"/></a>
            {/* Github */}
            <a href="https://github.com/affanann" target="_blank">
              <FaGithub className="hover:text-blue-400"/></a>
            {/* Instagram */}
            <a href="https://instagram.com/affanmadley" target="_blank">
              <FaInstagram className="hover:text-blue-400"/></a>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt="profile picture"
            useMap="#profileMap"
            className="rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"/>
            <map name="profileMap">
              <area 
                shape="circle"
                coords="250,250,50"
                href="/"
                alt=""
              /> 
            </map>
        </div>
      </div>
    </section>
  );
};

export default Home;
