
import { useState } from 'react'
import './LoaderAudio.css'

export const LoaderAudio = () => {

  const [objTreck, setObjTreck] = useState({
    name: '',
    nameArtist: '',
    picture: '',
    songTrack: ''
  })

  return (
    <div className='Loader__audio-box'>
      <input type="text" name="name" placeholder="Название трека" />
      <input type="text" name="nameArtist" placeholder="Исполнитель" />
      <input type="file" accept="image/*" />
      <input type="file" accept="audio/*" />
    </div>
  )
}