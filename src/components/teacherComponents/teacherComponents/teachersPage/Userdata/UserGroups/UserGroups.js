import React from "react";
import './UserGroups.scss'
import UserGroupItem from "./UserGroupItem/UserGroupItem";
const UserGroups = (props) => {

    const {userGroups, userType} = props

    return (
        <div className='userGroups-container__manager'>
            <p className='userGroups-header__manager'>Мои группы</p>
            <ul className='userGroupsList-container__manager'>
                <li className='userGroupsItem-container__manager'>
                    <p className='userGroupItem-name__manager'>Курс</p>
                    <p className='userGroupItem-name__manager'>номер</p>
                </li>
                {userGroups.map((item) => <UserGroupItem groupLink={item.groupLink} course={item.course}
                                                         number={item.number} key={item.id}/>)}
            </ul>
        </div>
    )

}

export default UserGroups