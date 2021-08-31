import React from 'react'
import "./index.css";
import {NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <nav>
            
            <a className = "main1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<NavLink exact to = "/" className = "main-nav " activeClassName = "main-nav-active">Fitness Tracker</NavLink></a>
            <a className = "main1">&nbsp;&nbsp;&nbsp;<NavLink exact to = "/bmi" className = "main-nav " activeClassName = "main-nav-active">BMI Calculator</NavLink></a>
            <a className = "main1">&nbsp;&nbsp;&nbsp;<NavLink exact to = "/watertracker" className = "main-nav " activeClassName = "main-nav-active">Water Tracker</NavLink></a>
            <a className = "main1">&nbsp;&nbsp;&nbsp;<NavLink exact to = "/trainers" className = "main-nav " activeClassName = "main-nav-active">Trainers</NavLink></a>
            <a className = "main1">&nbsp;&nbsp;&nbsp;<NavLink exact to = "/aboutus" className = "main-nav " activeClassName = "main-nav-active">About Us</NavLink></a>
        </nav>
    )
}

export default NavBar
