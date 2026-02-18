import { useRef, useState, useEffect } from "react"

import { FaVolumeUp, FaVolumeMute, FaRedo } from "react-icons/fa";
import './AudioPlayer.css'

import song from "../../audio/Апология - Мосты.mp3"
import songTwo from "../../audio/найтивыход - был в сети 15 минут назад.mp3"
import pictureone from "../../picture/fonpictureone.jpeg"
import picturetwo from "../../picture/picturetwo.jpeg"
const objMus = [
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
]


export const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoop, setIsLoop] = useState(false);



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

  //кнопки переключения песен
  const nextTrack = () => {
    setCurrentTrackIndex(prev =>
      prev === objMus.length - 1 ? 0 : prev + 1
    )
  }
  const prevTrack = () => {
    setCurrentTrackIndex(prev =>
      prev === 0 ? objMus.length - 1 : prev - 1
    )
  }
  // обработка продолжения проигрывания если переключить трек
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  //функция отслеживания громкости
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
    console.log(volume)
  }, [volume]);
  //aункция зацикливания трека
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.loop = isLoop;
  }, [isLoop]);



  return (
    <div className="audio__box-player">
      <audio ref={audioRef} src={objMus[currentTrackIndex].songTrack} onEnded={nextTrack} />
      <img src={objMus[currentTrackIndex].picture} alt="cover" className="cover__picture" />
      <h3 className="song__name">{objMus[currentTrackIndex].name}</h3>
      <p className="artist__name">{objMus[currentTrackIndex].nameArtist}</p>

      <div className="controls">
        <button
          className="icon__btn"
          onClick={prevTrack}
        >⏮</button>

        <button
          className={`play__btn ${isPlaying ? "play__btn--pause" : ""}`}
          onClick={togglePlay} >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button
          className="icon__btn"
          onClick={nextTrack}
        >⏭</button>
      </div>

      <div className="time">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="progress" onClick={handleProgressClick}>
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="volume__box">
        <FaVolumeUp />
        <input
          className="volume__slider"
          type="range"
          min='0'
          max='1'
          step='0.01'
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{background: `linear-gradient(to right, #0ec84fc6 ${volume * 100}%, #444 ${volume * 100}%)`}}
        />
        <FaRedo
          onClick={() => setIsLoop(prev => !prev)}
          style={{ color: isLoop ? "#0ec84fc6" : "white", cursor: "pointer" }}
        />

      </div>
    </div>
  )
}