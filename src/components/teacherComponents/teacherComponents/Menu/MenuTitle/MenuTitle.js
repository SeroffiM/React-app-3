import React from 'react'
import menuShow from '../../../../../static/img/menu_show.svg'
import menuMobileShow from '../../../../../static/img/menu_show_mobile.svg'
import {NavLink} from "react-router-dom";
import './MenuTitle.css'
import MenuCollapse from "./MenuCollapse/MenuCollapse";

const MenuTitle = (props) => {
    const {sideMenu, changeSideMenu} = props

    if (sideMenu === 'container__menu') {
        return (
            <div className='menu__title'>
                <div className='menu__logo'>
                    <NavLink exact to='/' className='menu__item-link'>
                        <p>ITEC</p>
                        <span>education complex</span>
                    </NavLink>
                </div>
                <MenuCollapse collapseImg={menuShow} changeSideMenu={changeSideMenu} open={true}/>
            </div>
        )
    } else return (
        <div className='menu-mobile__title'>
            <NavLink exact to='/' className='menu__item-link'>
                <p>ITEC</p>
            </NavLink>
            <MenuCollapse collapseImg={menuMobileShow} changeSideMenu={changeSideMenu}/>
        </div>
    )
}

export default MenuTitle