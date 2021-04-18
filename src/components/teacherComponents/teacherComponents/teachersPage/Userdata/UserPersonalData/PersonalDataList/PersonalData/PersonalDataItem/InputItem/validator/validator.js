import {useState, useEffect} from 'react'

const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(false)
    const [minLengthError, setMinLengthError] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            if (validations.hasOwnProperty(validation)) {
                switch (validation) {
                    case 'minLength':
                        value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                        console.log('minimum')
                        break
                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true)
                        break
                }
            }
        }
    },[value])

    return {
        isEmpty,
        minLengthError
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    console.log('CRY')
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)

    }

    return {
        value,
        onChange,
        onBlur,
        ...valid,
        isDirty
    }
}