import { AudioPlayer } from './Pages/AudioPlayer/AudioPlayer'
import { LoaderAudio } from './Pages/LoaderAudio/LoaderAudio'

import { useState } from 'react'

import './App.css'

function App() {


  return (
    <div>
      <AudioPlayer />
      <LoaderAudio /> 
    </div>
  )
}

export default App
