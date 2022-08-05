import React from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginIcon from '@mui/icons-material/Login';
import {Link} from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/'>
        <span className="logo">
          Admin Panel
        </span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li><snap><DashboardIcon  className="icon"/></snap> Dashboard</li>
          <Link to='/users'><li><snap><PersonIcon className="icon"/> </snap>Users</li></Link>
          <Link to="/products"><li><snap><StorefrontIcon className="icon"/> </snap>Products</li></Link>
          <li><snap><FilterFramesIcon className="icon"/> </snap>Orders</li>
          <li><snap><LocalShippingIcon className="icon"/> </snap>Delivery</li>
          <p className="title">Useful</p>
          <li><snap><QueryStatsIcon className="icon"/> </snap>Stats</li>
          <li><snap><CircleNotificationsIcon className="icon"/> </snap>Notifications</li>
          <p className="title">Service</p>
          <li><snap><HealthAndSafetyIcon className="icon"/> </snap>System Health</li>
          <li><snap><BookIcon className="icon"/> </snap>Logs</li>
          <li><snap><SettingsIcon className="icon"/> </snap>Settings</li>
          <p className="title">User</p>
          <li><snap><AccountBoxIcon className="icon"/> </snap>Profile</li>
          <li><snap><LoginIcon className="icon"/> </snap>Logout</li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
