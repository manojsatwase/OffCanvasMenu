import React, { useState } from 'react'

function Sidebar() {
 const [opensidebar, setOpensidebar] = useState(false);
 return (
  <nav className={`${opensidebar ? 'nav shift' : 'nav'}`}>
   <ul className="menu">
    <li className="menu__item">Home</li>
    <li className="menu__item">About</li>
    <li className="menu__item">Services</li>
    <li className="menu__item">Products</li>
    <li className="menu__item">Contact</li>
   </ul>
   <div className="hamburger" onClick={() => setOpensidebar(!opensidebar)}>
    <span className={`${opensidebar ? 'first-bar change' : 'first-bar'}`}></span>
    <span className={`${opensidebar ? 'second-bar change' : 'second-bar'}`}></span>
    <span className={`${opensidebar ? 'third-bar change' : 'third-bar'}`}></span>
   </div>

  </nav>
 )
}

export default Sidebar
