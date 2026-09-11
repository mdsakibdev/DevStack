import React from "react";
import BannerImage from "../../assets/banner-stack.png";

const Banner = () => {
  return (

    <div className="container mx-auto px-4 py-8">
  <div className="flex flex-col lg:flex-row lg:gap-12 items-center text-center lg:text-left">
    
    {/* Content Area */}
    <div className="flex flex-col gap-6 items-center lg:items-start max-w-2xl">
      <h1 className="text-[#0F172A] text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight lg:leading-20">
        Build Your Ideal{" "}
        <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
          Development Stack
        </span>
      </h1>
      
      <p className="text-[#475569] text-base sm:text-xl lg:text-2xl leading-relaxed mb-2 md:mb-10">
        Explore frontend, backend, database, and tooling options, compare them
        side by side, and put together the stack that fits your next project.
      </p>

      <div className="flex flex-row items-center justify-center  gap-4  sm:w-auto">
        <button className=" sm:w-auto bg-linear-to-r from-[#FF6B35] via-[#FF535A] to-[#EC4899] text-white font-medium px-4 py-3 md:px-6 md:py-3 rounded-xl shadow-sm hover:opacity-95 transition-opacity duration-200 cursor-pointer">
          Explore Technologies
        </button>
        <button className=" sm:w-auto border border-gray-300 bg-white text-gray-700 font-medium px-4 py-3 md:px-6 md:py-3 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>

    {/* Image Area */}
    <div className=" flex  justify-center items-center">
      <img className="h-auto w-auto"
        src={BannerImage} 
        alt="Banner Image" 
      />
    </div>

  </div>
</div>

  );
};

export default Banner;
