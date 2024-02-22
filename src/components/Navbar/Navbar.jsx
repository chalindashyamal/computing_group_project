import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/dropdown_arrow2-512.webp'


const Navbar = () => {

    const [menu,setMenu] = useState("Timetable")
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref = {menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("bus")}}> <Link style={{textDecoration: 'none'}}to='/buses'>Buses</Link>{menu === "bus"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("timetable")}}> <Link style={{textDecoration: 'none'}}to='/timetable'>Timetable</Link> {menu === "timetable"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("1random")}}> <Link style={{textDecoration: 'none'}}to='/random1'>Random1 </Link>{menu === "1random"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("2random")}}> <Link style={{textDecoration: 'none'}}to='/random2'>Random2 </Link>{menu === "2random"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <img src={cart_icon} alt="" />
        </div>
    </div>
  )
}

export default Navbar