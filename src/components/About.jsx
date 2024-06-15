
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <div  name="About" id="resume " className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-500">Education</h2>
        </div>
        <div className="relative">
          {/* Conditionally render the middle line based on screen size */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center">
            <div className="w-1 h-full bg-gray-300"></div>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "10th",
                period: "April 2016 - March 2017",
                institution: "Kendriya Vidyalaya No-3, Jhansi",
                percentage: "95%",
              },
              {
                title: "12th",
                period: "April 2018 - March 2019",
                institution: "Kendriya Vidyalaya No-3, Jhansi",
                percentage: "90%",
              },
              {
                title: "Bachelor of Technology-Computer Science",
                period: "November 2020 - June 2024",
                institution: "Jaypee University of Engineering and Technology, Guna",
                percentage: "89%",
              },
            ].map((item, index) => (
              <div key={index} className="relative flex items-center">
                {/* Graduation Cap icon for both large and small devices */}
                <div className="md:block hidden absolute left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white rounded-full p-3">
                  <FaGraduationCap className="text-xl" />
                </div>
                <div className={`flex ${index % 2 === 0 ? 'justify-start md:pr-8' : 'justify-end md:pl-8'} items-center w-full`}>
                  <div className="w-full md:w-1/2 px-4">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-2xl font-bold"><FaGraduationCap className="inline-block mr-2 md:hidden" />{item.title}</h3>
                      <p className="text-gray-600">{item.period}</p>
                      <h4 className="text-xl font-semibold mt-4">{item.institution}</h4>
                      <p className="text-gray-600">Percentage = {item.percentage}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      
    </div>
    

  );
};

export default About;
