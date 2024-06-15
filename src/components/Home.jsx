import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import front from "../../public/portfoliofornt.png"
// import { Link } from 'react-router-dom';
function Home() {
  
  return (
    <>
      <div name="Home" className=" max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-0 bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">{/* //order will check if imgae is left right or up down according to order assigned */}
            <span className="text-xl">Welcome</span>
            <div className="flex space-x-1 text-xl md:text-3xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-cyan-500 font-bold ">Developer</span> */}
              <ReactTyped className="text-cyan-500 font-semibold 
              //for developer in form of typing"
         
          strings={["Developer.","Software Engineer."]}
          // we can add many values using comma
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-jusitfy">
              I'm an Enthusiast Web Developer and loves creative thinking.
              Looking for a good Job Opportunity to apply my theoritical
              knowledge in real life projects.
            </p>

            <button className="border-2 rounded p-2 text-bold cursor-pointer text-cyan-500 mt-3">
              Explore
            </button>

            {/* social media icon */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 ">
            <div className="space-y-2 ">
              <h1 className="font-bold ">Available on </h1>
              <ul className="flex space-x-5">
                <li >
                  <a href="https://www.linkedin.com/in/jyotikumari0/ " target="_blank"><GrLinkedin  className="text-2xl cursor-pointer"/>
                  </a>
                  </li>
                <li>
                  {" "}
                <a href="https://github.com/Jyotikumari99"target="_blank">  <FaGithub className="text-2xl cursor-pointer"/></a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
            <h1 className="font-bold">Currently working on </h1>
              <div className="flex space-x-5">
              <FaReact classname='text-2xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
              <RiNextjsFill classname='text-2xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
              <RiTailwindCssFill classname='text-2xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
              <FaWordpress classname='text-2xl md:text-2xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer'/>
              </div>
            </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-52 md:mt-16 order-1 md:order-2">
          <img src={front} className="md:h-[350] md:w-[350px] "/>

          </div>
        </div>

      </div>
     
      <hr />
    </>
  );
}

export default Home;
