import React, {useMemo} from 'react'
import './PersonalData.scss'
import PersonalDataItem from "./PersonalDataItem/PersonalDataItem";

const PersonalData = (props) => {
    const {personalDataName, onChangeData, changeData} = props
    const depend = useMemo(() => personalDataName.map((item, index) => <PersonalDataItem key={index} data={item}
                                                                                         onChangeData={onChangeData}
                                                                                         changeData={changeData}/>), [onChangeData])

    return (
        <>
            <p className='userPersonalData-header__manager'>Личные данные</p>
            <div className='dataList-container__manager'>
                <ul className='dataList-name__manager'>
                    {depend}
                </ul>
            </div>
        </>
    )
}

export default PersonalData