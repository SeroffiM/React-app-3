import React from "react";
import './UserGroupItem.scss'
import {NavLink} from "react-router-dom";

const UserGroupItem = (props) => {
    const {course, number, groupLink} = props

    return (
        <li className='userGroupsItem-container__manager'>
            <p className='userGroupItem-text__manager'>{course}</p>
            <NavLink to={groupLink} className='userGroupItem-text__manager userGroupItem-link__manager'>{number}</NavLink>
        </li>
    )
}

export default UserGroupItem