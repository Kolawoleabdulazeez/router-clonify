import React from 'react'
import Logoi from './assets/Logoi.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>
         <img src={Logoi} alt="Description" height ="40px" width='40px'/>
        <h2>Clonify</h2>
        </div>
        <div className='navbar-links'>
        <Link to ='/Home'className='link'><p>Home</p></Link>
        <Link to ='/About' className='link'><p>About</p></Link>
        <Link to ='/Contact'className='link'><p>Contact US</p></Link>
        </div>
        <div className='btn'>
            <button className='login'>Login</button>
            <button className='signup'>Sign Up</button>
        </div>
    </div>
)
}

export default Navbar