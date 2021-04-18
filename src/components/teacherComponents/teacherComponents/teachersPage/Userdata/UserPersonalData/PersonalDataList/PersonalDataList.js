import React, {useState} from 'react'
import './PersonalDataList.scss'
import ChangeDataModal from "./ChangeDataModal/ChangeDataModal";
import PersonalData from "./PersonalData/PersonalData";

const PersonalDataList = (props) => {

    const {name, surname, sex, phoneNumber, email, age, hobbies} = props.userPersonalData
    const personalDataName = [
        {
            name: 'Фамилия',
            value: surname,
            inputName: 'surname',
            inputType: 'text'
        },
        {
            name: 'Имя',
            value: name,
            inputName: 'name',
            inputType: 'text'
        },
        {
            name: 'Пол',
            value: sex,
            inputName: 'sex',
            inputType: 'text'
        },
        {
            name: 'Телефон',
            value: phoneNumber,
            inputName: 'phoneNumber',
            inputType: 'tel',
            placeholder: '+375 XX XXX XX XX'
        },
        {
            name: 'Email',
            value: email,
            inputName: 'email',
            inputType: 'email'
        },
        {
            name: 'Возраст',
            value: age,
            inputName: 'age',
            inputType: 'number'
        },
        {
            name: 'Интересы',
            value: hobbies,
            inputName: 'hobbies',
            inputType: 'text'
        }
    ]
    const [modal, setModal] = useState(false)

    const showModal = () => {
        setModal(true)
    }
    const hideModal = (e) => {
        e.stopPropagation()
        setModal(false)
    }
    return (
        <div className='personalDataList-container__manager'>
            <PersonalData personalDataName={personalDataName}/>
            <div className='dataList__button-container__manager'>
                <button onClick={showModal} className='dataList__button__manager'>Внести изменения</button>
            </div>
            <ChangeDataModal showModal={modal} hideModal={hideModal} personalDataName={personalDataName}
                             initialState={props.userPersonalData}/>
        </div>
    )
}

export default PersonalDataList