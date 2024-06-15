import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50">
        <hr />
        <div className="container mx-auto px-4 md:px-20 items-center justify-around">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Where to find me */}
            <div className="col-four tab-full text-center md:text-left">
              <h5 className="text-lg font-bold text-cyan-500 mt-4">
                Where to find me
              </h5>
              <p className="text-base mt-2">
                Jhansi Uttar Pradesh 
                <br />
                India
                <br />
                284003, India
              </p>
            </div>

            {/* Email Me At */}
            <div className="col-four tab-full text-center md:text-left">
              <h5 className="text-lg font-bold text-cyan-500 mt-4">
                Email Me At
              </h5>
              <p className="text-base mt-2">jyotiyadav97785@gmail.com</p>
            </div>

            {/* Call Me At */}
            <div className="col-four tab-full text-center md:text-left">
              <h5 className="text-lg font-bold text-cyan-500 mt-4">
                Call Me At
              </h5>
              <p className="text-base mt-2">Phone: 7905743315</p>
            </div>
          </div>
        </div>

        <footer className="py-12">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/jyotikumari0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-cyan-500 hover:text-cyan-700"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="https://github.com/Jyotikumari99"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-cyan-500 hover:text-cyan-700"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                <p className="text-sm">&copy; 2024 All rights reserved.</p>
                <p className="text-sm">Made with ❤️ by Jyoti Kumari</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
