//INNER
import React, {useState} from "react";
import './Menu.css'


//LOCAL
import MenuTitle from "./MenuTitle/MenuTitle";
import MenuNav from "./MenuNav/MenuNav";
import MenuFooter from "./MenuFooter/MenuFooter";


const MenuComponent = (props) => {
    const {outToLogIn} = props
    const [sideMenu, setSideMenu] = useState('container__menu')
    const changeSideMenu = () => {
        sideMenu === 'container__menu' ? setSideMenu('container__menu-mobile') : setSideMenu('container__menu')
    }

    return (
        <div className={sideMenu}>
            <MenuTitle sideMenu={sideMenu} changeSideMenu={changeSideMenu}/>
            <MenuNav sideMenu={sideMenu}/>
            <MenuFooter sideMenu={sideMenu} outToLogIn={outToLogIn}/>
        </div>
    );
}


export default MenuComponent;
