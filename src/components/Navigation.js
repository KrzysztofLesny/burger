import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navigation.scss';

const navs = [
    {name: "home", path: "/", exact: true},
    {name: "menu", path: "/menu"},
    {name: "build-a-burger", path: "/build-a-burger"}
];

const Navigation = () => {

    const menu = navs.map((nav) => (
        <li key={nav.name} className="Menu__Btn">
            <NavLink 
                className="Menu__Link" 
                to={nav.path}
                exact={nav.exact}
                data-text={nav.name}
                activeClassName="Menu__Link-Active"
            >
                {nav.name}
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