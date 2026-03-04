import { LoaderAudio } from "../components/LoaderAudio/LoaderAudio";

export const UploadPage = ({ addTrack }) => {
  return (
    <div>
      <LoaderAudio addTrack={addTrack} /> 
    </div>
  )
}