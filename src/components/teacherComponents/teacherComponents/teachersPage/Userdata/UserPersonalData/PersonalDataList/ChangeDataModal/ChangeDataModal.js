import React, {useState, useMemo} from 'react'
import './ChangeDataModal.scss'
import PersonalData from "../PersonalData/PersonalData";


const ChangeDataModal = (props) => {
    const {showModal, hideModal, personalDataName, initialState} = props


    const [changeData, setChangeData] = useState(initialState)

    const dataValidation = (inputName, value) => {
        if (value === '') {
            console.log('FIELD EMPTY')
        }
        console.log(inputName, value)
    }
    const onChangeData = (inputName, value) => {
        dataValidation(inputName, value)
        setChangeData((prevState) => {
            let obj = {...prevState}
            console.log(obj)
            obj[inputName] = value
            return obj
        })
    }
    const cancelData = (e) => {
        setChangeData(initialState)
        e.stopPropagation()
        hideModal(e)
    }
    const saveData = (e) => {
        console.log(changeData)
        e.stopPropagation()
        hideModal(e)
    }
    const data = useMemo(() => <PersonalData personalDataName={personalDataName} changeData={changeData}
                                             onChangeData={onChangeData}/>, [initialState])

    if (showModal) {
        return (
            <div onMouseDown={cancelData} className='personalDataModal-container__manager'>
                <div onMouseDown={(e) => e.stopPropagation()} className='personalDataModal-main__manager'>

                    {data}

                    <div className='personalDataModal-btn-container__manager'>
                        <input type='button' onClick={saveData}
                               className='personalDataModal-btn__manager personalData-save-btn__manager'
                               value='Сохранить'/>
                        <input type='button' onClick={cancelData}
                               className='personalDataModal-btn__manager personalData-cancel-btn__manager'
                               value='Отменить'/>
                    </div>
                </div>
            </div>
        )
    } else return null

}


export default ChangeDataModal