import { useRef, useState, useEffect } from "react"
import song from "../../audio/Апология - Мосты.mp3";


export const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
    const audio = audioRef.current;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress); // чтобы duration был сразу

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);


  // Форматирование времени в MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };


  //перемотка по клику на прогресс бар
  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = percentage * audioRef.current.duration;
  };

  return (
    <div style={{ width: "320px", fontFamily: "sans-serif" }}>
      <audio ref={audioRef} src={song} />
      <button onClick={togglePlay} style={{ marginBottom: "10px" }}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      {/* Время */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Прогресс-бар */}
      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#eee",
          cursor: "pointer",
          borderRadius: "5px",
          overflow: "hidden"
        }}
        onClick={handleProgressClick}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "green",
            transition: "width 0.1s linear"
          }}
        />
      </div>
    </div>
  )
}