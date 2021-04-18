//OUTER
import React, {useEffect} from "react"

//LOCAL
import "./Userdata.scss";
import UserAvatar from "./UserAvatar/UserAvatar";
import userAvatar_img from './UserAvatar/userAvatarImage_1.png'
import UserGroups from "./UserGroups/UserGroups";
import UserPersonalData from "./UserPersonalData/UserPersonalData";


const userData = {
    id: 0,
    userAvatar: userAvatar_img,
    userGroups: [
        {
            id: 0,
            course: 'Web',
            number: '112',
            groupLink: '/educational_process/Web_112'
        },
        {
            id: 1,
            course: 'Python',
            number: '214',
            groupLink: '/educational_process/Python_214'
        },
        {
            id: 2,
            course: 'C++',
            number: '666',
            groupLink: '/educational_process/Python_666'
        },
        {
            id: 3,
            course: 'Pascal(for kids)',
            number: '01',
            groupLink: '/educational_process/Python_666'
        },
        {
            id: 4,
            course: 'QA',
            number: '666',
            groupLink: '/educational_process/Python_666'
        },
        {
            id: 5,
            course: 'DevOps',
            number: '666',
            groupLink: '/educational_process/Python_666'
        },
        {
            id: 6,
            course: 'Java',
            number: '666',
            groupLink: '/educational_process/Python_666'
        }
    ],
    userPersonalData: {
        name: 'Alex',
        surname: 'Johanovich',
        sex: 'male',
        phoneNumber: '+375445559987',
        email: 'joha@machina.net',
        age: '33',
        hobbies: ['Do nothing', 'Programming', 'Skip classes'],
    }

}


const Profile = (props) => {

    const {id, userAvatar, userGroups, userPersonalData} = userData

    return (
        <div className='userData-container__manager'>
            <UserAvatar userAvatar={userAvatar} userName={userPersonalData.name}
                        userSurname={userPersonalData.surname}/>
            <UserPersonalData userPersonalData={userPersonalData}/>
            <UserGroups userGroups={userGroups}/>
        </div>
    )
}


export default Profile;
