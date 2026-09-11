import React from 'react'

const TachnolodgiSideBarCard = () => {


  return (

    <div className="sticky top-20 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-[#0F172A] mb-1">Your Stack</h2>
      <p className="text-xs text-gray-400 mb-5">2 Technology Selected</p>

      {/* সিলেক্ট করা আইটেমগুলোর লিস্ট */}
      <div className="space-y-3 mb-6">
        
        {/* আইটেম ১ */}
        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
          <div className="flex items-center gap-3">
            <img src="svelte-icon-url" className="w-6 h-6" alt="Svelte" />
            <div>
              <h4 className="text-sm font-bold text-gray-800">Svelte</h4>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500">✕</button>
        </div>

        {/* আইটেম ২ */}
        <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50">
          <div className="flex items-center gap-3">
            <img src="redis-icon-url" className="w-6 h-6" alt="Redis" />
            <div>
              <h4 className="text-sm font-bold text-gray-800">Redis</h4>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500">✕</button>
        </div>

      </div>

      {/* সব রিমুভ করার বাটন */}
      <button className="w-full border border-red-300 text-red-500 hover:bg-red-50 font-medium py-2 px-4 rounded-xl text-sm transition-colors cursor-pointer">
        Remove All
      </button>
    </div>
  )
}

export default TachnolodgiSideBarCard
