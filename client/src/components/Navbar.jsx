
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


const DropdownLinks = [
  {
    id: 1,
    name: "Pottery & Ceramics",
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
    <div className='shadow-md bg-white  duration-200 relative z-40'>
      {/* Upper Navbar */}
      <div className='bg-yellow-100 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-Agbalumo text-2xl sm:text-3xl flex gap-2 text-black'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdzik5yqGczSrtwqipPD6mnl7x4JL44LxHg&s" alt="Logo" className='w-10' />
              HandmadeHaven
            </a>
          </div>

          {/* Search bar and Sign Up */}
          <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='Search Here...'
                className=' font-dynapuff w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400'
              />
              <IoSearchOutline className='text-gray-500  group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>

            {/* Sign Up Button */}
            <Link to="/signup">
              <button className='bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 font-dynapuff'>
                Sign Up
              </button>
            </Link>
          </div>

          {/* Order button */}
          <button onClick={() => alert("Order not available yet")} className='bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
            <span className='group-hover:block hidden transition-all duration-200 font-dynapuff'>Cart</span>
            <IoMdCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
          </button>

          {/* User icon */}
          <div>
            <FaUserCircle className='text-3xl drop-shadow-sm cursor-pointer justify-center' />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center ">
        <ul className="sm:flex hidden items-center gap-4">
          <Link to='/'>
            <li className='hover:text-orange-500 cursor-pointer font-dynapuff'>Home</li>
          </Link>  
          <Link to='/about-us'>
            <li className='hover:text-orange-500 cursor-pointer font-dynapuff'>About Us</li>
          </Link>
          <Link to='/knowourartist'>
            <li className='hover:text-orange-500 cursor-pointer font-dynapuff'>Know Our Artist</li>
          </Link>

          {/* Categories Dropdown */}
          <div className="relative group">
            <a href="#categories" className="flex items-center gap-[2px] py-2 font-dynapuff">
              Categories
              <span>
                <FaAngleDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            {/* Dropdown menu */}
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md font-dynapuff'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-orange-300/20">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
