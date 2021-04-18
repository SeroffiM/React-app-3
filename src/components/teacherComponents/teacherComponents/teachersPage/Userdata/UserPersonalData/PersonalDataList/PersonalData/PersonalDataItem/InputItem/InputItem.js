import React, {useState} from 'react'
import './InputItem.scss'
import {useInput} from './validator/validator'

const InputItem = (props) => {

    const {data, onChangeData, changeData} = props
    // const [inputValue, setInputValue] = useState({value: data.value})

    // const validator = (value) => {
    //     const reg = /^((\+375[ ]))((29|25|44|33)[ ])(\d{3}[ ])(\d{2}[ ])(\d{2})$/
    //     const test = /^(\+375)$/
    //     const match = value.replace(reg, '$&')
    //     console.log(match)
    //     // return '+8029 '
    // }
    // const onChangeInput = (e) => {
    //     const newValue = e.target.value
    //     // const reg = /^((\+375)[\ ])((29|25|44|33)[\ ])(\d{3}[\ ])(\d{2}[\ ])(\d{2})$/
    //     const validationValue = validator(newValue)
    //     setInputValue({value: validationValue})
    // }
    const value = useInput(data.value, {isEmpty: false, minLength: 1})
    return (
        <div className='input-area-container__manager'>

            <input type={data.inputType} name={data.inputName} value={value.value} placeholder={data.placeholder}
                   onChange={value.onChange} onBlur={value.onBlur}
                   className='personalDataItem-input-text__manager'/>

            {(value.isEmpty && value.isDirty) &&
            <div className='text-value-error__manager'>Input is can't be empty!!</div>}
            {(value.minLengthError && value.isDirty) &&
            <div className=''>Input is lent!!</div>}
        </div>
    )

}

export default InputItem