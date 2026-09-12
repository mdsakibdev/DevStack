import React from "react";

const TachnolodgiSideBarCard = ({ selectedStack, onRemove, onRemoveAll }) => {
  return (
    <div className="sticky top-20 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#0F172A] mb-1">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-5">
        {selectedStack.length > 0
          ? `${selectedStack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {/* Conditional Rendering */}
      {selectedStack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-8 px-4 text-center">
          <p className="text-gray-400 text-sm font-normal">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div>
          <div className="space-y-3 mb-6 max-h-75 overflow-y-auto">
            {selectedStack.map((tech) => (
              <div
                key={tech.id || tech.name}
                className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">{tech.name}</h4>
                    <span className="text-[10px] text-gray-400">{tech.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(tech.id || tech.name)}
                  className="text-gray-400 hover:text-red-500 cursor-pointer p-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full border border-red-200 text-red-500 hover:bg-red-50 font-medium py-2 px-4 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default TachnolodgiSideBarCard;