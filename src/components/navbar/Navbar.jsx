import React from 'react'
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
              <TranslateIcon className="icon"/>
              English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })}/>
          </div>
          <div className="item">
              <FullscreenExitIcon className="icon"/>
          </div>
          <div className="item">
              <NotificationsNoneIcon className="icon"/>
          </div>
          <div className="item">
              <ChatBubbleIcon className="icon"/>
          </div>
          <div className="item">
              <FormatListBulletedIcon className="icon"/>
          </div>
          <div className="item">
              <img src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='avatar' alt="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
