import React, { useState, useEffect } from 'react';
import { MenuList } from "./MenuList"; 

const NavBar = () => {
  return (
    <main>
      <nav className="navbar">
          <div>Simulation</div>
        <ul className="hamburger">
          {MenuList.map( (item, index) => {
            return (
              <li key={index}>
                <a className={item.classNm} href={item.link}>
                  {item.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </main>
  )
}

export default NavBar;