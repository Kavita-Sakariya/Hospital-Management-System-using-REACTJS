import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Falcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Sidebar } from './Sidebar';
import { IconContext } from 'react-icons';
import './Navbar.css';



const Navbar = () => {
    const [sidebar,setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:'black'}}>
    <div className="navbarMain">
    <div className="navbar">
        <Link to="#" className='menu-bars'>
        <Falcons.FaBars onClick={showSidebar}/>
        </Link>
    </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            </ul>
        </nav>
        <Link to="/" className='logout'>Log Out</Link>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar