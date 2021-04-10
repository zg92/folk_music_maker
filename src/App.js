import React, { useState } from 'react'
import './App.css';
import Notebox from './notebox/Notebox';
import NoteData from './notedata/NoteData';
import Logo from './logo_transparent.png'

function App() {

  const [notes] = useState(['A', 'A#', 'B', 'C', 'C#','D','D#','E','F','F#','G','G#'])
  const [currentNote, setCurrentNote] = useState(0)

  return (
    <div className="App">
      <div className='logo-top'>
      <img className='logo' src={Logo} alt='' />
      </div>
     <Notebox notes={notes} currentNote={currentNote} setCurrentNote = {setCurrentNote}/>
     <NoteData notes={notes} currentNote={currentNote} />
    </div>
  );
}

export default App;
