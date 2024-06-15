import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Portfolio = () => {
  const experiences = [
    {
      title: "Front-end Developer",
      period: "May 2023 - May2024",
      company: "JMEDIA Corporation",
      description: `
        Implemented end-to-end web solutions, including HTML data insertion, CSS-based page design, and React.js functionality for a dynamic user experience.
        Integrated facial recognition using JavaScript and Face.io API, bolstering website security and user authentication.
        Designed and implemented a scalable architecture with MongoDB for efficient user data and task management, ensuring optimal performance.
        Developed data upload feature with version control, integrated text classification library (e.g., scikit-learn), and enabled real-time collaboration using WebSocket technology for enhanced productivity.
      `,
      
    },
    // Add more experiences here if needed
  ];

  return (
    <div name="Portfolio" id="resume" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-500">Work Experience</h2>
        </div>
        
        <div className="max-w-4xl mx-auto items-center ">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden md:block"></div>
              <div className="flex flex-col md:flex-row items-start md:items-center relative">
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-cyan-500 text-white rounded-full p-3 mb-4 md:mb-0 ">
                  <FaBriefcase className="text-xl" />
                </div>
                <div className="md:w-1/2 md:pr-8">
                  <div className="text-right">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.period}</p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                  <p className="text-gray-600 whitespace-pre-line">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
