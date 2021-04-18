import React from 'react'
import './EditAvatar.scss'

const EditAvatar = (props) => {

    const {setAvatar, showInfo, returnAvatar} = props

    return (
        <form>
            <div>
                <input type='file'
                       id='upload-file__input_1'
                       className='upload-file__input'
                       accept='.jpg, .jpeg, .png'
                       onChange={setAvatar}/>
                <label className='editAvatar__manager' htmlFor='upload-file__input_1'>
                    <svg className='editAvatar-svg__manager' height='16.1' viewBox='0 0 16.1 16.1' version='1.1'
                         width='16'
                         aria-hidden="true">
                        <path
                            d='M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z'/>
                    </svg>
                    Edit
                </label>
                {/*<button style={{width: 50 + 'px', height: 30 + 'px'}} onClick={showInfo}>Save</button>*/}
                {/*<br/>*/}
                {/*<button style={{width: 50 + 'px', height: 30 + 'px'}} onClick={returnAvatar}>Delete</button>*/}
            </div>

        </form>

    )
}

export default EditAvatar