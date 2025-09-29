import React from "react";

const Hero = () => {
  return (
    <div className="my-40 w-full flex flex-col justify-center items-center">
      <h1 className="max-w-2xl bg-clip-text text-center text-7xl font-bold leading-tight tracking-tight  text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 ">
        Unleash the power of intutive finance
      </h1>
      <p className="text-xl text-neutral-500 max-w-2xl mx-auto text-center mt-10 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
       </p>
       <div className="flex justify-center mt-8 w-full max-w-lg ">
        <input type="text" className="border border-neutral-600 rounded-xl mr-4 placeholder:text-neutral-500 text-white px-4 flex-1 focus:outline-none focus:ring-1 focus:ring-sky-500 transition duration-200" placeholder="Enter you email"/>
        <button className=" relative px-4 py-2 rounded-xl font-semibold border border-neutral-700 text-white cursor-pointer">
          <div className="absolute bottom-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
          Join wait list</button>
       </div>
    </div>
  );
};

export default Hero;