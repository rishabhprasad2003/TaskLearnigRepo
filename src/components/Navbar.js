import React from 'react';
import { useRef } from 'react';


export default function Navbar() {

  return (
    <>
        <div className="navbar">

            {/* this is for Logo */}
            <div className="logo">          
                <a href=""><i class="fa-thin fa-industry-windows">
                </i></a>
            </div>


            <div className="icon-bar">
                <a  href="#target1">
                <div className="menu-items" >
                    Home
                </div>
                </a>
                <a  href="#target2">
                <div  className="menu-items" >
                    About
                </div>
                </a>
                <a href="#target3" >
                <div className="menu-items">
                    Events
                </div>
                </a>
                <a href="#target4" >
                <div className="menu-items">
                    Teams
                </div>
                </a>
                <a href="#target5">
                <div className="menu-items" >
                    Contact
                </div>
                </a>
                <a href="#target6" >
                <div className="menu-items">
                    Blog
                </div>
                </a>
                <a href="#target7" >
                <div className="menu-items">
                    Contributors
                </div>
                </a>
            </div>
            </div>
    </>
  )
}
