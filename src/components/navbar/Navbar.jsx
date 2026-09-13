
import logoImage from '../../assets/logo-text.png'
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <div className='shadow-[0_4px_4px_-1px_rgba(0,0,0,0.08)] sticky top-0 z-50 bg-white '>
       <div className='container mx-auto  ' >

        <nav className='flex justify-between items-center  px-2 py-3 md:py-5  '>

          <button className='text-3xl md:text-4xl text-zinc-800 md:hidden'> <HiOutlineMenu /></button>

        <img className='w-auto h-8 md:h-full' src={logoImage} alt="Navbar Logo" />

        <ul className='md:flex items-center gap-8 font-semibold hidden'>
            <li><a className='text-[#D91B7E]' href="#">Home</a></li>
            <li><a href="#" className='text-zinc-800 hover:text-[#D91B7E] duration-200 '>Technologies</a></li>
            <li><a href="#" className='text-zinc-800 hover:text-[#D91B7E] duration-200 '>Projects</a></li>
            <li><a href="#" className='text-zinc-800 hover:text-[#D91B7E] duration-200 '>About</a></li>
            <li><a href="#" className='text-zinc-800 hover:text-[#D91B7E] duration-200 '>Contact</a></li>
        </ul>

        <div className='flex gap-3 md:gap-4'>
            <button><a className='hover:text-[#D91B7E] duration-200' href="#">Sign In</a></button>
            <button className='bg-[#D91B7E]  rounded-full px-2 py-1 md:px-5 md:py-2.5 md:rounded-full text-white'><a href="#">Sign Up</a></button>
        </div>

    </nav>

    </div>
    </div>
  )
}

export default Navbar
