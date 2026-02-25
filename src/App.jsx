import { Routes, Route, BrowserRouter } from "react-router-dom"

import { useEffect, useState } from 'react'

import { Layout } from "./components/Layout/Layout"
import { PlayerPage } from "./Pages/PlayerPage"
import { UploadPage } from "./Pages/UploadPage"
import { SignIn } from "./components/SignIn/SignIn"
import { SignUp } from "./components/SignUp/SignUp"

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
  const [person, setPerson] = useState({})

  const [personEP, setPersonEP] = useState([
    {
      email: 'south01village@gmail.com',
      pass: '123rrr'
    },
    {
      email: 'qwe123@gmail.com',
      pass: '123eee'
    }
  ])

  const handleSignUp = (newUser) => {
    const isPersonTru = personEP.some(user => user.email === newUser.email)

    if (isPersonTru) {
      alert("Пользователь уже существует")
      return
    }

    setPersonEP(prev => [...prev, newUser])
    setPerson(newUser)
  }


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout person={person} />}>
            <Route index element={<PlayerPage tracks={tracks} />} />
            <Route path="upload" element={<UploadPage addTrack={addTrack} />} />
            <Route path="signin" element={<SignIn personEP={personEP} setPerson={setPerson} />} />
            <Route path="signup" element={<SignUp personEP={personEP} handleSignUp={handleSignUp} />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
