import React from 'react'
import menuExit from './../../../../../static/img/icons/menu_exit.svg'
import {NavLink} from "react-router-dom";
import './MenuFooter.css'
import {useHistory} from "react-router-dom";

const MenuFooter = (props) => {

    const {sideMenu} = props
    const history = useHistory()
    const exit = () => {
        history.replace('/', null)
    }

    if (sideMenu === 'container__menu') {
        return (
            <div className='menu__footer'>
                <img src={menuExit} alt='menu exit'/>
                <NavLink onClick={exit} to='/' className='menu__button'>Выйти</NavLink>
            </div>
        )
    } else return (
        <div className='menu-mobile__footer'>
            <NavLink onClick={exit} to='/'>
                <img src={menuExit} alt='Exit' align='menuMobile exit' className='menu-mobile__footer-img'/>
            </NavLink>
        </div>
    )
}

export default MenuFooter