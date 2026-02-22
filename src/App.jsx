import { Routes, Route, BrowserRouter } from "react-router-dom"

import { useState } from 'react'

import { Layout } from "./components/Layout/Layout"
import { PlayerPage } from "./Pages/PlayerPage"
import { UploadPage } from "./Pages/UploadPage"
import { SignIn } from "./components/SignIn/SignIn"

import song from "./audio/Апология - Мосты.mp3"
import songTwo from "./audio/найтивыход - был в сети 15 минут назад.mp3"
import pictureone from "./picture/fonpictureone.jpeg"
import picturetwo from "./picture/picturetwo.jpeg"

import './App.css'


function App() {

//моковые треки
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

  // моковый пользователь 
  const [person, setPerson] = useState([])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PlayerPage tracks={tracks} />} />
            <Route path="upload" element={<UploadPage addTrack={addTrack} />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
