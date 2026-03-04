import { AudioPlayer } from "../components/AudioPlayer/AudioPlayer"

export const PlayerPage = ({ tracks }) => {
  return (
    <div>
      <AudioPlayer tracks={tracks} />
    </div>
  )
}