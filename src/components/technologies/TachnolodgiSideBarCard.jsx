import React from "react";

const TachnolodgiSideBarCard = () => {
  return (
    <div className="sticky top-20 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#0F172A] mb-1">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-5">
        No technologies selected yet.
      </p>

      {/* সিলেক্ট করা আইটেমগুলোর লিস্ট */}
      <div className="border border-dashed border-gray-200 rounded-xl py-8 px-4 text-center">
        <p className="text-gray-400 text-sm font-normal">
          Your stack is empty.
        </p>
      </div>
    </div>
  );
};

export default TachnolodgiSideBarCard;
