import React, { useState } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format' // eslint-disable-line

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'

import useAudioPlayer from './useAudioPlayer'

import './Player.css'

const Player = ({ tracks }) => {
  const { playing, setPlaying, trackDuration, currentTime } = useAudioPlayer()
  const [activeTrack, setActiveTrack] = useState();

  const activeTrackIndex = activeTrack && tracks.findIndex(track => track.title === activeTrack.title);

  const togglePlay = () => {
    if (!activeTrack) {
      setActiveTrack(tracks[0]);
    }
 
    setPlaying(!playing);
  }

  const handleTrackClick = index => {
    setActiveTrack(tracks[index]);

    if (!playing) {
      setPlaying(true)
    }
  }

  const handleForwardClick = () => {
    if (activeTrackIndex + 1 < tracks.length) {
      return setActiveTrack(tracks[activeTrackIndex + 1])
    }

    return setActiveTrack(tracks[0])
  }

  const handleBackwardClick = () => {
    if (activeTrackIndex - 1 >= 0) {
      return setActiveTrack(tracks[activeTrackIndex - 1])
    }

    return setActiveTrack(tracks[tracks.length - 1])
  }

  const formatDuration = duration =>
    moment.duration(duration, 'seconds').format('mm:ss', { trim: false })

  return (
    <div className="player">
      <audio id="audio" src={activeTrack ? activeTrack.url : null} />
      <div className="player__active-track-info">
        <span>{activeTrack ? activeTrack.title : '--'}</span>
        <span>{`${activeTrack ? activeTrackIndex + 1 : '--'} of ${tracks.length}`}</span>
      </div>
      <div className="player__progress">
        <span>{formatDuration(currentTime)}</span>
        <span>{formatDuration(trackDuration - currentTime)}</span>
      </div>
      <div className="player__controls">
        <FontAwesomeIcon
          icon={faBackward}
          size="3x"
          onClick={() => handleBackwardClick()}
        />
        {playing ? (
          <FontAwesomeIcon
            icon={faPause}
            size="3x"
            onClick={() => togglePlay()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPlay}
            size="3x"
            onClick={() => togglePlay()}
          />
        )}
        <FontAwesomeIcon
          icon={faForward}
          size="3x"
          onClick={() => handleForwardClick()}
        />
      </div>
      <div className="player__tracks">
        {tracks.map((track, index) => (
          <div
            className="player__track"
            key={track.title}
            onClick={() => handleTrackClick(index)}
          >
            <span className="player__track-number">
              {activeTrackIndex === index && playing ? (
                <FontAwesomeIcon icon={faVolumeUp} size="1x" />
              ) : (
                index + 1
              )}
            </span>
            <span className="player__track-title">{track.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Player
