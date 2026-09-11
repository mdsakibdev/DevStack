import React, { use } from "react";
import TechnologiesCard from "./TechnologiesCard";

const Technologies = ({ technologiesPromis }) => {
  const technologiCard = use(technologiesPromis);
  // console.log(technologiCard)

  return (
    <div className="container mx-auto">
      <div className="">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-2">
          Explore the{" "}
          <span className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
            Technologies
          </span>
        </h2>
        <p className="text-lg text-[#64748B] mb-7 ">Pick one technology per category to build your ideal stack.</p>
      </div>

      <TechnologiesCard technologicard={technologiCard} />
    </div>
  );
};

export default Technologies;
