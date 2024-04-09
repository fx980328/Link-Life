import './App.css'
import {FiPlusCircle} from 'react-icons/fi'
import { CiLock } from "react-icons/ci";
import { useState } from 'react'

import Friend from './components/Friend'
import Tagbar from './components/Tagbar'
import NavbarFull_onlyFriend from './components/NavbarFull_onlyFriend'
import NavbarFull from './components/NavbarFull'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Modal from './components/Modal'
import Tabs from './components/Tabs'
import IntroduceTeam from './components/IntroduceTeam'
import InformationUpdate from './components/InformationUpdate'
import SignUp from './components/SignUp'
import Login from './components/Login'
import MyTimeLine from './components/MyTimeLine'

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  // modal을 위한 state
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div>
        {/* 0. 팀소개 화면 */}
        {/* <IntroduceTeam /> */}

         {/* 1. 회원가입 */}
        {/* <NavbarFull></NavbarFull>
        <SignUp></SignUp> */}

        {/* 2. 로그인 */}
        {/* <Login></Login> */}

        {/* 3. 개인정보수정 화면 */}
        {/* <div className='flex'>
          <Sidebar />
          <div className= 'w-full ml-96'>
            <Navbar />
            <InformationUpdate></InformationUpdate>
          </div>
        </div> */}
        
        {/* ------------- 여기까지는 UI 완성됨 ---------------- */}

        {/* 4. 내 타임라인 */}
        {/* <div className='flex'>
          <Sidebar />
          <div className= 'w-full ml-96'>
            <Navbar />
            <MyTimeLine />
          </div>
        </div> */}


        {/* 5. 친구 화면 */}
        <NavbarFull_onlyFriend /> 
        <Friend />
        {/* <Tagbar /> */}

        {/* 6. 그룹 화면 */}
        {/* <div className='flex'>
          <Sidebar />
          <div className= 'w-full ml-96'>
            <Navbar />
            <Group />
          </div>
        </div> */}

      </div>
        
      
    </>
  )
}

export default App
