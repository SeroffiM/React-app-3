import React from "react";
import "./HeaderInfo.css";
import alertImg from './../../../../static/img/alert.svg'
import personalImg from './../../../../static/img/personal-img.svg'
import MenuNotice from "./MenuNotice/MenuNotice";
import {connect} from "react-redux";

const HeaderInfo = (props) => {

    const {user} = props

    return (
        <div className='header_container_teacher'>
            <div className='main__header'>
                <p>Main page</p>
                <div className='main__notice'>

                    <MenuNotice noticeImg={alertImg}/>
                    <MenuNotice noticeImg={personalImg} noticeType={'personal-img'}/>
                    <p className='header__name'>{user.name}</p>
                    <p className='header__missing-message'>{user.missedMessages} missed mess</p>
                </div>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => ({
    user: state.userData.user
})

const HeaderInfoContainer = connect(mapStateToProps, null)(HeaderInfo)

export default HeaderInfoContainer;
