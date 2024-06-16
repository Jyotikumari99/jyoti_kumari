import React from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
const Portfolio = () => {
  const skills = [
    { skill: "HTML5", percentage: 90 },
    { skill: "CSS3", percentage: 85 },
    { skill: "Node Js", percentage: 70 },
    { skill: "Express Js", percentage: 95 },
    { skill: "React Js", percentage: 95 },
    { skill: "Tailwind Css", percentage: 95 },
    { skill: "Javascript", percentage: 85 },
    { skill: "Wordpress", percentage: 95 },
    { skill: "MongoDb", percentage: 70 },
    { skill: "Next Js", percentage: 90 },
    { skill: "Bootstrap", percentage: 90 },
  ];

  return (
    <div name="Portfolio" id="about" className="bg-white py-10 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-500">Skills</h1>
        </div>

        <div className="flex flex-wrap  justify-center">
          <div className="w-full md:w-3/4 flex flex-wrap justify-center">
            {skills.map((item, index) => (
              <div key={index} className="m-4 text-center">
                <div className="relative flex items-center justify-center">
                  <svg className="w-24 h-24">
                    <circle
                      className="text-gray-300"
                      strokeWidth="4"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="50%"
                      cy="50%"
                    />
                    <circle
                      className="text-cyan-500"
                      strokeWidth="4"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="36"
                      cx="50%"
                      cy="50%"
                      strokeDasharray="226.08"
                      strokeDashoffset={
                        226.08 - (226.08 * item.percentage) / 100
                      }
                    />
                  </svg>
                  <span className="absolute text-xl font-semibold text-black">
                    {item.percentage}%
                  </span>
                </div>
                <span className="mt-2 block">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5  ">
          <button className="border-2 rounded p-2 text-bold cursor-pointer border-cyan-500 hover:bg-cyan-500 hover:text-white text-cyan-500 mt-3">
            <a
              href="https://drive.google.com/file/d/1ZyV212hM65no7UvNjcEbhIW2Muwg-TOX/view?usp=sharing"
              target="_blank"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </button>{" "}
        </div>
      </div>
      {/* project */}

      <div className="mt-11 mx-12">
        <h1 className="text-center font-bold text-cyan-500 text-4xl">
          Project
        </h1>
        <div className="flex flex-col md:flex-row justify-between mt-7 md:space-y-0 space-y-4 md:space-x-4">
          <div className="flex flex-col items-center md:flex-row hover:border-cyan-500 hover:scale-105 hover:border-2 md:w-1/2 w-full p-4">
            <div className="space-y-2">
              <a href="https://healthbooker1.vercel.app/">
                <h1 className="font-bold">Health Booker</h1>
              </a>
              <p>
                The comprehensive healthcare platform! Our website offers
                experience for users and doctors alike. Sign up or login to
                unlock a range of features. Easily browse through a list of
                available doctors, manage your profile, and submit queries
                effortlessly.
              </p>
              <div className="flex space-x-5">
                <FaReact className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
                <SiMongodb className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
               <FaNodeJs className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
               <SiRedux className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
              
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row hover:border-cyan-500 hover:scale-105 hover:border-2 md:w-1/2 w-full p-4">
            <div className="space-y-2">
              <a href="https://dynamicdocs.vercel.app/">
                <h1 className="font-bold">Dynamic Docs</h1>
              </a>
              <p>
                Dynamic Docs, a comprehensive Saas platform developed from
                scratch . This platform is designed to provide a seamless and
                feature-rich experience for user dealing with douments.This is a
                group project in which I contributed to the UI design.{" "}
              </p>
              <div className="flex space-x-5">
                <SiMysql className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
                <RiNextjsFill className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
                <RiTailwindCssFill className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
                <SiTypescript className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
                <SiPrisma className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
                <SiShadcnui className="text-2xl hover:scale-110 duration-200 rounded-full border-2 border-transparent cursor-pointer hover:border-cyan-500 text-cyan-500 hover:text-cyan-700" />
              
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Portfolio;
