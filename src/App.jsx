

import { Suspense } from "react"
import Banner from "./components/banner/Banner"
import Navbar from "./components/navbar/Navbar"
import Technologies from "./components/technologies/Technologies"


const technologiesFatch = async ()=> {
const res = await fetch('/public/data.json')
const data = await res.json()
return data
}

function App() {
  const technologiesPromis = technologiesFatch()

  return (
    <div className="font-inter">
      <Navbar/>
      <Banner/>
      <Suspense fallback={<h2>Lodding....</h2>}>
        <Technologies technologiesPromis = {technologiesPromis}/>
      </Suspense>
    </div>
  )
}

export default App
