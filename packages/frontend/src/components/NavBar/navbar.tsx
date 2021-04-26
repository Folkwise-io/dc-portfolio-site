import React from 'react';
import { MenuList } from "./MenuList"; 

export const NavBar = () => {
  return (
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
  );
};

export default NavBar;