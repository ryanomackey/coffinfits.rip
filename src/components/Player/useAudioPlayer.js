import React, { useState, useEffect, createContext } from 'react';

const useAudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [trackDuration, setTrackDuration] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [clickedTime, setClickedTime] = useState();
  const [tracks, setTracks] = useState([]);
  const [activeTrack, setActiveTrack] = useState();

  const activeTrackIndex =
    activeTrack &&
    tracks.findIndex((track) => track.title === activeTrack.title);

  useEffect(() => {
    const audio = document.getElementById('audio');

    const setAudioData = () => {
      setTrackDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  });

  return {
    playing,
    setPlaying,
    trackDuration,
    currentTime,
    setClickedTime,
    tracks,
    setTracks,
    activeTrack,
    activeTrackIndex,
    setActiveTrack,
  };
};

export const PlayerContext = createContext({});

export const PlayerProvider = ({ children }) => {
  const value = useAudioPlayer();

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
