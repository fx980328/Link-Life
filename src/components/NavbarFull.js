import React from 'react'
import { FaSearch, FaCalendarAlt, FaHashtag, FaAngleLeft, FaUserCircle, FaUsers, FaUserPlus} from 'react-icons/fa'
import logo from '../images/logo_Link-Life(1).png'

const NavbarFull = () => {
  return (
    <nav className='flex justify-between px-4 py-3 bg-white border'>
      <div className='items-center px-3 py-2.5 text-xl'>
        <span className='font-semibold text-white'><img src={logo} alt="link-life logo" className='h-5 w-25'/></span>
      </div>

      <div className='relative md:w-96'>
      </div>
      
      <div className='flex items-center m-1 gap-x-5'>
        <div className='text-black'><FaUserPlus className='w-6 h-6'/></div>
        <div className='text-black'><FaUsers className='w-6 h-6'/></div>
        <div className='text-black'><FaCalendarAlt className='w-6 h-6'/></div>
        <div className='text-black'><FaHashtag className='w-6 h-6'/></div>
        <div className='relative'>
          <button className='text-black group'>
              <FaUserCircle className='w-6 h-6 mt-1'/>
              <div className='absolute right-0 z-10 hidden w-32 rounded-lg shadow group-focus:block top-full'>
                  <ul className='py-4 text-sm bg-gray-100 text-gray-950'>
                      <li><a href="" className='hover:text-blue-500'>Profile</a></li>
                      <li><a href="" className='hover:text-blue-500'>Setting</a></li>
                      <li><a href="" className='hover:text-blue-500'>Log Out</a></li>
                  </ul>
              </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavbarFull
