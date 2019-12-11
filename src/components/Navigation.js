import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.scss';

const navs = [
    {name: "home", path: "/"},
    {name: "menu", path: "/menu"},
    {name: "build-a-burger", path: "/build-a-burger"}
];



const Navigation = () => {

    const menu = navs.map((item) => (
        <li key="item.name" className="Menu__Btn">
            <NavLink 
                className="Menu__Link" 
                to={item.path}
                data-text={item.name}
            >
                {item.name}
            </NavLink>
        </li>
    ))

    return (
        <div className="Nav">
            <div className="Nav__Logo">LOGO</div>
            <ul className="Nav__Menu">
                {menu}
            </ul>
        </div>
    );
}
 
export default Navigation;