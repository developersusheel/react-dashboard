import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import './home.scss';


const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widgets/>
          <Widgets/>
          <Widgets/>
          <Widgets/>
        </div>
      </div>
    </div>
  )
}

export default Home
