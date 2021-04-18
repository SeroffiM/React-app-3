import React from 'react'
import {NavLink} from "react-router-dom";
import './MenuItem.css'

const MenuItem = (props) => {

    const {menuLink, data, menuImg} = props
    if (menuLink === 'menu__link') {
        return (
            <li className='menu__item'>
                <NavLink to={data.path} className={menuLink}>
                    <p className='menu__item-text'>{data.name}</p>
                </NavLink>
            </li>
        )
    } else return (
        <li className='menu-mobile__item'>
            <NavLink to={data.path} className={menuLink}>
                <img alt='navigation Link' src={menuImg} className={menuLink}/>
            </NavLink>
        </li>
    )

}

export default MenuItem