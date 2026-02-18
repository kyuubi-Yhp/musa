import { AudioPlayer } from './Pages/AudioPlayer/AudioPlayer'
import { LoaderAudio } from './Pages/LoaderAudio/LoaderAudio'

import { useState } from 'react'

import song from "./audio/Апология - Мосты.mp3"
import songTwo from "./audio/найтивыход - был в сети 15 минут назад.mp3"
import pictureone from "./picture/fonpictureone.jpeg"
import picturetwo from "./picture/picturetwo.jpeg"

import './App.css'

function App() {


  const [tracks, setTracks] = useState([
    {
      name: 'Мосты',
      nameArtist: 'Апология',
      picture: pictureone,
      songTrack: song
    },
    {
      name: 'был в сети 15 минут назад',
      nameArtist: 'найтивыход',
      picture: picturetwo,
      songTrack: songTwo
    },
  ])

  const addTrack = (newTrack) => {
    setTracks(prev => ([...prev, newTrack]))
    console.log(tracks)
  }



  return (
    <div>
      <AudioPlayer tracks={tracks} />
      <LoaderAudio addTrack={addTrack} />
    </div>
  )
}

export default App
