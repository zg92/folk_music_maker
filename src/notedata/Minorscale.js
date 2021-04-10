import React from 'react'

export const Minorscale = ({createScale, createInterval}) => {

    return (
        <div className='minor-wrapper'>
            <div className='type'>Minor Pentatonic Scale</div>
            <div className='interval-wrapper'>
            {createInterval(['I', 'II','III','V','VI']).map(n => <div className='scale-degree'>{n}</div>)}
            </div>
            <div className='scale-wrapper'>
            {createScale([0,3,5,7,10]).map(n => <div className='scale-degree'>{n}</div>)}
            </div>
        </div>
    )
}

export default Minorscale;
