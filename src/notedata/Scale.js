import React from 'react'

export const Majorscale = ({notes, currentNote, scale, interval, title}) => {
    
    const createScale = (scale) => {
        let scaleArray = []
        const notesCombined = notes.concat(notes) 
        for(const note of scale){
            scaleArray.push(notesCombined[note + currentNote])
        }
        return scaleArray
    }

    return (
        <div className='data-wrapper'>
            <div className='type'>{title}</div>
            <div className='series-wrapper'>
            {interval.map(n => <div className='scale-degree'>{n}</div>)}
            </div>
            <div className='series-wrapper'>
            {createScale(scale).map(n => <div className='scale-degree'>{n}</div>)}
            </div>
        </div>
    )
}

export default Majorscale;