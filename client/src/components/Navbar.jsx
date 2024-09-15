import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import DarkMode from './DarkMode';
import { FaAngleDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "About Us",
      link: "/#services",
    },
    {
      id: 3,
      name: "Know our Artist",
      link: "/#",
    },
    {
      id: 3,
      name: "Blog",
      link: "/#",
    },
    
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Pottery&Ceramics",
      link: "/#",
    },
    {
      id: 2,
      name: "Accessories",
      link: "/#",
    },
    {
      id: 3,
      name: "Home Decor",
      link: "/#",
    },
  ];
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
            <div className='flex justify-between items-center gap-4 '>
                <div className=' relative group hidden sm:block'>
                    <input type="text"placeholder='Search Here...'className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400' />
                    <IoSearchOutline  className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                </div>
            </div>
            {/* order button  */}
            <button onClick={()=> alert ("order not avaliable yet")} className='bg-gradient-to-r bg-orange-400 to bg-orange-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                <span className='group-hover:block hidden transition-all duration-200'>Cart</span>
                <IoMdCart className='text-xl text-white drop-shadow-sm cursor-pointer '/>
            </button>
            <div>
            <FaUserCircle className='text-2xl drop-shadow-sm cursor-pointer justify-center'/>
            </div>
            {/* darkmode Switch */}
            <div>
              <DarkMode />  
            </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center"> 
        <ul className="sm:flex hidden items-center gap-4">
            {
                Menu.map((data)=>(
                    <li key={data.id}>
                        <a href={data.link} 
                        className='inline-block px-4 hover:text-orange-400 duration-200'>{data.name}</a>
                    </li>
                )
                
                )
            }
            <li className='group relative cursor-pointer'>
                <a href="#" className="flex items-center gap-[2px] py-2">Categories
                <span>
                <FaAngleDown className="transition-all duration-200 group-hover:rotate-180"/>
                </span>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
                <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-300/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
                </div>
            </li>


        </ul>
      </div>
    </div>
  )
}

export default Navbar
