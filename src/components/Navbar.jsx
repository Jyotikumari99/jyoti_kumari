import React, { useState } from "react";
import jyoti from "../../public/jyoti.jpeg";
import { IoMenuSharp } from "react-icons/io5";
import { GiSplitCross } from "react-icons/gi";
import { Link } from "react-scroll";
function Navbar() {
  // to change state of navbar icon form cross to hamburger use state
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            {/* //for right image of logo */}
            <img src={jyoti} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Jyoti <span className="text-cyan-500 text-2xl">Kumari</span>
              <p className="text-sm">Web Developer</p>{" "}
            </h1>
          </div>
          <div>
            {/* for nav list for desktop */}
            <ul className="hidden md:flex space-x-8">
              {navItems.map(
                ({ id, text }) => (
                  <li
                    key={id}
                    className="hover:scale-105 duration-200 cursor-pointer"
                  >
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                ) // key is used to avoid warning
              )}
            </ul>
            <div onClick={() => setmenu(!menu)} className="md:hidden">
              {menu ? <GiSplitCross size={24} /> : <IoMenuSharp size={24} />}
            </div>
          </div>
        </div>
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl  ">
              {navItems.map(
                ({ id, text }) => (
                  <li
                    key={id}
                    className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  >
                    <Link onClick={() => setmenu(!menu)} 
                    // for scrolling o that section of the page
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                ) // key is used to avoid warning
              )}
            </ul>
          </div>
        )}
        {/* mobile nav */}
      </div>
    </>
  );
}

export default Navbar;
