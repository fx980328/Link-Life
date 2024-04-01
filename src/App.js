import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Friend from './components/Friend'
import Tagbar from './components/Tagbar'
import NavbarFull from './components/NavbarFull'
import Navbar from './components/Navbar'
import {FiPlusCircle} from 'react-icons/fi'
import { CiLock } from "react-icons/ci";

import { useState } from 'react'
import Modal from './components/Modal'
import Tabs from './components/Tabs'



function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  // modal을 위한 state
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        {/* <Friend></Friend>
        <Tagbar></Tagbar> */}
        
        <div className='flex'>
          <Sidebar sidebarToggle={sidebarToggle}/>
          <Dashboard/>
          
        </div>
      </div>
        
      
    </>
  )
}

export default App
