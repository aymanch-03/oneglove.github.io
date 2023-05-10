import { ClassNames } from "@emotion/react";
import React from "react";

const Hero = () => {
  const centerDiv = "flex items-center justify-center";
  return (
    <div className="bg-black/50">
      <section
        className={`${centerDiv} md:h-[50vh] h-[30vh] w-full container mx-auto`}
      >
        <div className="">
          <p className="text-white md:text-9xl z-10 font-bold text-5xl sm:text-7xl text-center">
            NEW
          </p>
          <p className="text-white md:text-9xl font-bold z-10 flex items-center justify-center sm:text-7xl text-5xl text-center">
            DR
            <div className="md:w-[300px] md:h-[90px] w-[80px] h-[34px] border-[8px] sm:w-[150px] sm:h-[51px] sm:border-[10px] rounded-full md:border-[18px] border-[#f2570f] md:mx-3 mx-1 sm:mx-2 transition-all duration-500 -z-1 relative" />
            P
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
