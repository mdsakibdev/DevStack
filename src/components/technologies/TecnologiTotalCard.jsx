import React, { useState } from "react";
import TachnolodgiSideBarCard from "./TachnolodgiSideBarCard";
import TecnologiSingaleCard from "./TecnologiSingaleCard";

const TechnologiesCard = ({ technologicard }) => {
  const [selectedStack, setSelectedStack] = useState([]);

  // সিলেক্ট করার হ্যান্ডলার
  const handleSelectTech = (tech) => {
    const isAlreadyAdded = selectedStack.some(
      (item) => (item.id || item.name) === (tech.id || tech.name)
    );
    if (!isAlreadyAdded) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  // একটি আইটেম সরানোর হ্যান্ডলার
  const handleRemoveTech = (idOrName) => {
    setSelectedStack(
      selectedStack.filter(
        (item) => (item.id || item.name) !== idOrName
      )
    );
  };

  // সব আইটেম সরানোর হ্যান্ডলার
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start md:px-0 px-5 ">
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {technologicard.map((tech, index) => {
          const isSelected = selectedStack.some(
            (item) => (item.id || item.name) === (tech.id || tech.name)
          );

          return (
            <TecnologiSingaleCard
              key={tech.id || index}
              tech={tech}
              isSelected={isSelected}
              onSelect={() => handleSelectTech(tech)}
            />
          );
        })}
      </div>

      <div className="lg:col-span-1">
        <TachnolodgiSideBarCard
          selectedStack={selectedStack}
          onRemove={handleRemoveTech}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default TechnologiesCard;
