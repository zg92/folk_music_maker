import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export const LeftNotebox = ({ currentNote, setCurrentNote }) => {

    const previousNumber = () => {
        currentNote < 0 ? setCurrentNote(11) : setCurrentNote(currentNote--)
    }

    return (
            <div className='left-arrow-box' onClick={previousNumber}>
                <FaAngleLeft alt='' className='fa-left'/>
            </div>
      
    )
}

export default LeftNotebox;