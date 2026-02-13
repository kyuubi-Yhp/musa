import { useRef, useState, useEffect } from "react"



export const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  //функция отслеживания и изсенения состояния и самого обьекта плей пауза
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(prev => !prev)
  }


// функция отслеживания прогресс бара 
  useEffect(() => {
    const audio = audioRef.current
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    }
    audio.addEventListener("timeupdate", updateProgress)
    return () => {
      audio.removeEventListener("timeupdate", updateProgress)
    }
  }, [])


  //перемотка по клику на прогресс бар
  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = percentage * audioRef.current.duration;
  };

  return (
    <div>
      <audio ref={audioRef} src="src/audio/Апология - Мосты.mp3" />
      <button onClick={togglePlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <div style={{ width: "300px", height: "10px", background: "#eee" }}
        onClick={handleProgressClick}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "green"
          }}
        />
      </div>

    </div>
  )
}