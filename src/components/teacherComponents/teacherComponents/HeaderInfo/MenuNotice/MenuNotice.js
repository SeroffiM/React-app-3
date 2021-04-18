import React from 'react'
import {NavLink} from "react-router-dom";
import './MenuNotice.css'

const MenuNotice = (props) => {

    const {noticeImg, noticeType} = props
    const noticeClass = noticeType === 'personal-img' ? 'notice__personal-img' : 'notice__img'
    return (

        <div className='notice__wrapper-image'>
            <NavLink to='/profile' className='header__notice-link'>
                <img src={noticeImg} alt="notice image"
                     className={noticeClass}/>
            </NavLink>
        </div>
    )
}

export default MenuNotice