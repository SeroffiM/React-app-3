import React from "react";
import './MenuCollapse.css'

const MenuCollapse = (props) => {
    const {collapseImg, changeSideMenu, open} = props

    return (
        <div onClick={changeSideMenu} className={open ? 'menu__logo-img' : 'mobile-menu__logo-img'}>
            <img src={collapseImg} alt='Collapse menu'/>
        </div>
    )
}

export default MenuCollapse