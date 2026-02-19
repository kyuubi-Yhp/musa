import { LoaderAudio } from "../components/LoaderAudio/LoaderAudio";

export const UploadPage = ({ addTrack }) => {
  return (
    <div>
      <h1>загрузка треков</h1>
      <LoaderAudio addTrack={addTrack} /> 
    </div>
  )
}