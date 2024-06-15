// import axios from "axios";
import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
function Contact() {
  // const {
  //   register,
  //   handleSubmit,

  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     name: data.name,
  //     email: data.email,
  //     message: data.message,
  //   };
  //   try {
  //     await axios.post("https://getform.io/f/raeqjora", userInfo);
  //     toast.success("Your message has been sent");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  // };
    
  return (
    <>
      <div 
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 bg-white text-center"
      >
        <h1 className="text-3xl font-bold mb-4 text-cyan-500">Contact</h1>
        <span>I'd Love to hear from you.</span>
        <h1>If you Love my Resume Kindly drop your Information Below </h1>

        <div className="flex flex-col items-center mt-10 border rounded border-cyan-500 p-10 md:w-1/2 mx-auto">
          <form
            className="px-8 py-6 rounded-xl"
            // onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/zaxdknla"
            method="POST"
          >
            <div className="text-center">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                
              </label>
              <input
              // {...register("name", { required: true })}
                className="w-200 border-b border-cyan-500 block mx-auto text-center focus:outline-none focus:border-cyan-600"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
              {/* {errors.name && <span>This field is required</span>} */}
              <label className="block text-sm font-bold mb-2" htmlFor="email">
               
              </label>
              <input
              // {...register("email", { required: true })}
            
                className="w-200 border-b border-cyan-500 block mx-auto text-center focus:outline-none focus:border-cyan-600"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
                  />
              {/* {errors.email && <span>This field is required</span>} */}
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="subject"
              >
                
              </label>
              <input
              // {...register("subject", { required: true })}
            
                className="w-200 border-b border-cyan-500 block mx-auto text-center focus:outline-none focus:border-cyan-600"
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                 required />
              {/* {errors.subject && <span>This field is required</span>} */}
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="message"
              >
               
              </label>
              <textarea
              //  {...register("message")}
                className="w-200 border-b border-cyan-500 block mx-auto text-center focus:outline-none focus:border-cyan-600"
                id="message"
                name="message"
                placeholder="Message"
               
              />
            </div>
            <button className="border-2 rounded mt-10 border-cyan-500 hover:bg-cyan-500 text-cyan-500 hover:text-white p-2 font-bold block mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
