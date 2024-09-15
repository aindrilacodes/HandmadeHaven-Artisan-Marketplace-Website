import React from 'react'


const Navbar = () => {
  return (
    <div className='shawdow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper Navbar */}
      <div className='bg-yellow-100 py-2'>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="#" className='font-mono text-2xl sm:text-3xl flex gap-2'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzik5yqGczSrtwqipPD6mnl7x4JL44LxHg&s" alt=""
                    className='w-10' />
                    HandmadeHaven
                </a>
            </div>
            {/* search bar and order button */}
            <div>
                <div className='group'>
                    <input type="text"placeholder='search'className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400' />
                </div>
            </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div></div>
    </div>
  )
}

export default Navbar
