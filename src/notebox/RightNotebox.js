import React from 'react'
import { FaAngleRight } from "react-icons/fa";

export const RightNotebox = ({ currentNote, setCurrentNote }) => {
    
    const nextNumber = () => {
        currentNote > 11 ? setCurrentNote(0) : setCurrentNote(currentNote++) 
        }
        
    return (
            <div className='right-arrow-box' onClick={nextNumber}>
                <FaAngleRight alt ='' className='fa-right'/>
            </div>
      
    )
}

export default RightNotebox;