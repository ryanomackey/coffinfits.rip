import { useState, useEffect } from 'react'

const useAudioPlayer = () => {
  const [playing, setPlaying] = useState(false)
  const [trackDuration, setTrackDuration] = useState()
  const [currentTime, setCurrentTime] = useState()

  useEffect(() => {
    const audio = document.getElementById('audio')

    const setAudioData = () => {
      setTrackDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    playing ? audio.play() : audio.pause()

    return () => {
      audio.removeEventListener('loadeddata', setAudioData)
      audio.removeEventListener('timeupdate', setAudioTime)
    }
  })

  return {
    playing,
    setPlaying,
    trackDuration,
    currentTime,
  }
}

export default useAudioPlayer
