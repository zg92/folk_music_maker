import React from 'react'

export const Progression = ({title, progression, progressionNotes, notes, currentNote}) => {

    const createProgression = (progressionNotes) => {
        let progressionArray = []
        const notesCombined = notes.concat(notes)
        for(const note of progressionNotes){
            progressionArray.push(notesCombined[note + currentNote])
        }
        return progressionArray;
    }

    return (
        <div className='data-wrapper'>
            <div className='type'>{title}</div>   
           <div className='progression-intervals'>
                {progression.map(degrees => <div className='progression-interval'>{degrees}</div>)}
            </div>
            <div className='progression-notes'>
                {createProgression(progressionNotes).map(note => <div className='progression-note'>{note}</div>)}
            </div> 
        </div>
    )
}

export default Progression;
