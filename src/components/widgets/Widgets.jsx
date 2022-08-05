import React from 'react'
import './widgets.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widgets = ({type}) => {
  let data;
  
  // temp
  const amount  = 100
  const diff    = 20

  switch(type){
    case "user":
      data={
        title: "USERS",
        isMoney: false,
        link:"See all users",
        icon: (<PersonIcon 
          className='icon' 
          style={{
            color:"crimeson",
            background: "rgba(255, 0,0,0.2)",
          }}/>),
      };
      break;
    case "order":
      data={
        title: "ORDERS",
        isMoney: false,
        link:"View all orders",
        icon: (<ShoppingCartIcon className='icon'
        style={{
          color:"goldenrod",
          background: "rgba(218, 165,32,0.2)",
        }}/>),
      };
      break;
    case "earning":
      data={
        title: "EARNINGS",
        isMoney: true,
        link:"View all earnings",
        icon: (<MonetizationOnIcon className='icon'
        style={{
          color:"green",
          background: "rgba(0, 128,0,0.2)",
        }}/>),
      };
      break;
    case "balance":
      data={
        title: "BALANCE",
        isMoney: true,
        link:"View all balance",
        icon: (<AccountBalanceWalletIcon className='icon'
        style={{
          color:"purple",
          background: "rgba(128, 0, 128, 0.2)",
        }}/>),
      };
      break;
    default:
    break;
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$'} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          {diff} 20%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets
