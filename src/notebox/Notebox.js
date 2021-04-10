import RightNotebox from './RightNotebox'
import LeftNotebox from './LeftNotebox'
import NoteSelector from '../NoteSelector'

export const Notebox = ({notes, setCurrentNote, currentNote}) => {

    return (
        <div className='notebox'>
            <LeftNotebox currentNote={currentNote} setCurrentNote={setCurrentNote}/>
            <NoteSelector notes={notes} currentNote={currentNote}/>
            <RightNotebox currentNote={currentNote} setCurrentNote={setCurrentNote}/>
        </div>
    )
}

export default Notebox;