import React, { useState } from 'react'

const TecnologiSingaleCard = ({tech}) => {

    const [isSelected, setIsSelected] = useState(false);
    const handaleSelected = () => {
    setIsSelected(true);
    
}

  return (
    <div className={`bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
        isSelected ? 'border-red-400 bg-red-50/20' : 'border-gray-100'
    }`}>
              
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  {tech.badge && (
                    <span className="bg-sky-50 text-sky-500 font-medium text-xs px-3 py-1.5 rounded-full">
                      {tech.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {tech.description}
                </p>
              </div>

              <div>
                {/* Details */}
                <div className="flex items-center justify-between text-xs pt-4 border-t border-gray-200 mb-5">
                  <span className="bg-gray-100 text-gray-700 font-medium px-3 py-1.5 rounded-md">
                    {tech.category}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {tech.difficulty}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400 text-sm">★</span>
                    <span className="font-semibold text-gray-800">
                      {tech.rating}
                    </span>
                  </div>
                </div>



                {/* Action Button */}
                <button
                  onClick={() => handaleSelected()}
                  className={`w-full font-medium py-3 px-4 rounded-xl transition-all duration-200 text-sm ${
                    isSelected ? 
                    'bg-red-500 text-white cursor-not-allowed opacity-90':
                    'bg-[#0F172A] hover:bg-slate-800 text-white cursor-pointer'
                  }`}
                >
                  {isSelected === true ? "✔ Added to Stack" : "Add to Stack"}
                </button>


                
              </div>
            </div>
  )
}

export default TecnologiSingaleCard
