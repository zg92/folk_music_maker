import Scale from './Scale'
import Progression from './Progression'

export const NoteData = ({notes, currentNote}) => {
    
    return (
        <div className='data-wrapper'>
            <div className='scale-grid'>
                <Scale notes={notes} currentNote={currentNote} scale={[0,2,4,7,9]} interval = {['I', 'II','III','V','VI']} title='Major Pentatonic Scale' />
                <span className='data-divider' />
                <Scale notes={notes} currentNote={currentNote} scale={[0,3,5,7,10]} interval = {['I', 'II','III','V','VI']} title='Minor Pentatonic Scale' />
            </div>
            <div className='progression-grid'>
                <Progression title='12 Bar Blues' progression={['I','I','I','I','IV','IV','I','I','V','IV','I','V']} progressionNotes={[0,0,0,0,5,5,0,0,7,5,0,7]} notes={notes} currentNote={currentNote}/>
                <Progression title='Bluegrass Progression' progression={['I','I','V','V','IV','IV','I','I']} progressionNotes={[0,0,5,5,0,0,7,7]} notes={notes} currentNote={currentNote}/>                </div>
            
        </div>
    )
}

export default NoteData;
