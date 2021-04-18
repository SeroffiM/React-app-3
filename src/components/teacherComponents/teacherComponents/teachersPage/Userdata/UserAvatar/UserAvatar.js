import React, {useState} from 'react'
import './UserAvatar.scss'
import EditAvatar from "./EditAvatar/EditAvatar";
const UserAvatar = (props) => {

    const {userAvatar, userName, userSurname, userType} = props
    const [avatar, setAvatar] = useState({file: '', userAvatar: userAvatar, imagePreviewUrl: userAvatar})

    function onChangeImg(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file === undefined) {
            return null
        }
        let url = URL.createObjectURL(file)
        setAvatar({file: avatar.file, imagePreviewUrl: url})
        reader.onloadend = () => {
            setAvatar({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)

    }

    async function showInfo(e) {
        const form = new FormData()
        form.append('file', avatar.file)
        e.preventDefault()
        let response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            body: form
        });
        let result = await response.blob()
        let img = URL.createObjectURL(result)
    }

    function returnAvatar(e) {
        e.preventDefault()
        setAvatar({...avatar, imagePreviewUrl: userAvatar})
    }

        return (
            <div className='userAvatar-container__manager'>
                <div className='userAvatar-data-container__manager'>
                    <div className='userAvatar-img-container__manager'>
                        <img className='userAvatar-img__manager' src={avatar.imagePreviewUrl} alt='user avatar'/>
                        <EditAvatar setAvatar={onChangeImg} showInfo={showInfo} avatar={avatar}
                                    returnAvatar={returnAvatar}/>
                    </div>
                    <p className='userAvatar-name__manager'>{userName} {userSurname}</p>
                </div>
            </div>
        )
}

export default UserAvatar