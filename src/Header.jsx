import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='ui fixed menu'>
        <div className="ui container">
            <div className="right menu">
            <Link className="ui item" to='/'>Home </Link>
                <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>About Me</NavLink>
                <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>Projects</NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Header