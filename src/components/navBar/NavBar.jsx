import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdOutlineDarkMode, MdOutlineWbSunny, MdApps, MdNotificationsNone, MdOutlineEmail, MdPersonOutline, MdSearch, MdEmail, MdOutlineMailOutline } from 'react-icons/md';
import "./navBar.css"


const NavBar = () => {
    return (
        <div className="navbar">
            <div className='left'>
                <img src='./img/logo.jpg' className='logo'/>
                    
                {/* <MdOutlineHome /> */}
                <MdOutlineDarkMode />
                <MdOutlineWbSunny/>
                {/* <MdApps /> */}


            </div>
            
            {/* <div className='search'>
                    <input type="text" placeholder="Search Twitter..." />
                    <MdSearch />
                </div> */}

                <strong>Home</strong>
            
            <div className='right'>
            <div className='search'>
                    <input type="text" placeholder="Search Twitter..." />
                    <MdSearch />
                </div>
                
                {/* <MdPersonOutline />
                <MdOutlineMailOutline />
                <MdNotificationsNone />
                <img src='https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' className='image' alt=''/>
                <div className='user'>
                    <span>Jana Smith</span>
                </div> */}



                
            </div>
        </div>
    );
};

export default NavBar;
