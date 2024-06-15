import React from 'react'

const Experience = () => {
     const skills = [
          { skill: 'HTML5', percentage: 90 },
          { skill: 'CSS3', percentage: 85 },
          { skill: 'Node Js', percentage: 70 },
          { skill: 'Express Js', percentage: 95 },
          { skill: 'React Js', percentage: 95 },
          { skill: 'Tailwind Css', percentage: 95 },
          { skill: 'Javascript', percentage: 85 },
          { skill: 'Wordpress', percentage: 95 },
          { skill: 'MongoDb', percentage: 70 },
        ];
      
        return (
          <div name="Experience" id="about" className="bg-white py-10 px-4 md:px-0">
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
                            strokeDashoffset={226.08 - (226.08 * item.percentage) / 100}
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
              
                <button className="border-2 rounded p-2 text-bold cursor-pointer text-cyan-500 mt-3">
                <a href="https://drive.google.com/file/d/1po34giO5eeZCC8DASvev5hJUBIwhkA8P/view?usp=drive_link" className="btn btn-primary">Download CV</a>
            
            </button>     </div>
            </div>
          </div>
        );
}

export default Experience
