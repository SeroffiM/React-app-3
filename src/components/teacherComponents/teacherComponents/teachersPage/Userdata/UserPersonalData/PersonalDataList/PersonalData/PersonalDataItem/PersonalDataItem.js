import React, {useState} from 'react'
import './PersonalDataItem.scss'
import InputItem from "./InputItem/InputItem";

const PersonalDataItem = (props) => {

    const {data, changeData, onChangeData} = props


    if (data.name === 'Интересы') {
        return (
            <li className='personalDataItem-hobbies-container__manager'>
                <p className='personalDataItem-text__manager'>{data.name}:</p>
                <ul>
                    {data.value.map((item, index) => <li className='personalDataItem-hobbies__manager'
                                                         key={index}>{item}</li>)}
                </ul>
            </li>
        )
    } else return (
        <li className='personalDataItem-container__manager'>
            <div className='personalDataItem-content__manager'>
                <p className='personalDataItem-text__manager'>{data.name}:</p>
                {changeData
                    ? <InputItem data={data} onChangeData={onChangeData} changeData={changeData}/>
                    : <p className='personalDataItem-text-value__manager'>{data.value}</p>}
            </div>
        </li>
    )
}

export default PersonalDataItem