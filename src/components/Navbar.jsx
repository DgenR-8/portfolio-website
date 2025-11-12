import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 shadow-lg border-b border-gray-700'>
        <div className='container py-3 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Derick Tabios</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-black-100'>Home</a>
                <a href="#about" className='hover:text-black-100'>About Me</a>
                <a href="#project" className='hover:text-black-100'>Portfolio</a>
                <a href="#contact" className='hover:text-black-100'>Contact</a>
            </div>
        </div>
    </nav>
  )
}
export default Navbar