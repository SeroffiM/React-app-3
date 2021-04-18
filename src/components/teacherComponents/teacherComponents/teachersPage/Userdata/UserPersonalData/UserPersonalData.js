import React from "react";
import './UserPersonalData.scss'
import PersonalDataList from "./PersonalDataList/PersonalDataList";

const UserPersonalData = (props) => {

    const {userPersonalData} = props

    return (
        <div className='userPersonalData-container__manager'>
            <PersonalDataList userPersonalData={userPersonalData}/>
        </div>
    )


}

export default UserPersonalData