import React from 'react'

export const NoteSelector = ({ notes, currentNote }) => {
    return (
        <div className='carousel-wrapper'>
            <div className='note-box'>{notes[currentNote]}</div>
        </div>
    )
}

export default NoteSelector;