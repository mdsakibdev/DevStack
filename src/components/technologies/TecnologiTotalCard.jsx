import React, { useState } from "react";
import TachnolodgiSideBarCard from "./TachnolodgiSideBarCard";
import TecnologiSingaleCard from "./TecnologiSingaleCard";
import { Bounce, toast } from "react-toastify";

const TechnologiesCard = ({ technologicard }) => {
  const [selectedStack, setSelectedStack] = useState([]);

  // Selected Item
  const handleSelectTech = (tech) => {
    const isAlreadyAdded = selectedStack.some(
      (item) => (item.id || item.name) === (tech.id || tech.name)
    );
    if (!isAlreadyAdded) {
      setSelectedStack([...selectedStack, tech]);

      toast.success(`${tech.name} added to your stack!`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      })
    }
  };

  // Singale item Remove
const handleRemoveTech = (idOrName) => {
  const itemToRemove = selectedStack.find(
    (item) => (item.id || item.name) === idOrName
  );

  setSelectedStack(
    selectedStack.filter((item) => (item.id || item.name) !== idOrName)
  );

  toast.warn(`${itemToRemove?.name || "Item"} removed from your stack!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

// All Item Remove
const handleRemoveAll = () => {
  setSelectedStack([]);

  toast.error("All technologies removed from your stack!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 items-start md:px-0 px-5">
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

      <div className="lg:col-span-1 h-full">
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
