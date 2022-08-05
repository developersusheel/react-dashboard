import React from 'react'
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon className='icon' fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar val={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="description">Previous transactions processing. Last payments may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">$12K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">$12K</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultAmount">$12K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
