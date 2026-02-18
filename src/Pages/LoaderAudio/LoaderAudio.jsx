
import { useState } from 'react'
import './LoaderAudio.css'

export const LoaderAudio = ({ addTrack }) => {

  const [objTreck, setObjTreck] = useState({
    name: '',
    nameArtist: '',
    picture: null,
    songTrack: null
  })

  const handelInputChange = (e) => {
    const { name, value } = e.target

    setObjTreck(prev => ({
      ...prev, [name]: value
    }))
    console.log(objTreck)
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    const file = files[0]

    const fileURL = URL.createObjectURL(file)

    setObjTreck(prev => ({
      ...prev,
      [name]: fileURL
    }))
    console.log(objTreck)
  }

  const handelLoaderTreck = () => {
    addTrack(objTreck)
  }


  return (
    <div className='Loader__audio-box'>
      <input type="text"
        name="name"
        placeholder="Название трека"
        value={objTreck.name}
        onChange={handelInputChange}
      />

      <input type="text"
        name="nameArtist"
        placeholder="Исполнитель"
        value={objTreck.nameArtist}
        onChange={handelInputChange}
      />

      <input
        type="file"
        name="picture"
        accept="image/*"
        onChange={handleFileChange}
      />

      <input
        type="file"
        name="songTrack"
        accept="audio/*"
        onChange={handleFileChange}
      />

      <button className='btn__loader'
        onClick={handelLoaderTreck}
      >
        загрузить
      </button>

    </div>
  )
}