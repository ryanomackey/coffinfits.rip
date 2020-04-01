import React, { useContext } from 'react'
import Img from 'gatsby-image'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format' // eslint-disable-line

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from '@fortawesome/free-solid-svg-icons'

import { PlayerContext } from './useAudioPlayer'

import './Player.css'

const Player = () => {
  const {
    playing,
    setPlaying,
    trackDuration,
    currentTime,
    tracks,
    activeTrack,
    activeTrackIndex,
    setActiveTrack,
  } = useContext(PlayerContext)

  const togglePlay = () => {
    if (!activeTrack) {
      setActiveTrack(tracks[0])
    }

    setPlaying(!playing)
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
    <>
      <audio id="audio" src={activeTrack ? activeTrack.url : null} />
      {activeTrack && (
        <div className="player">
          <div className="player__album-art">
            <img src={activeTrack && activeTrack.art.src} />
          </div>
          <div className="player__container">
            <div className="player__active-track-info">
              <span>{activeTrack ? activeTrack.title : '--'}</span>
              <span>{`${activeTrack ? activeTrackIndex + 1 : '--'} of ${
                tracks.length
              }`}</span>
            </div>
            <div className="player__controls">
              <FontAwesomeIcon
                icon={faBackward}
                size="2x"
                onClick={() => handleBackwardClick()}
              />
              {playing ? (
                <FontAwesomeIcon
                  icon={faPause}
                  size="2x"
                  onClick={() => togglePlay()}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlay}
                  size="2x"
                  onClick={() => togglePlay()}
                />
              )}
              <FontAwesomeIcon
                icon={faForward}
                size="2x"
                onClick={() => handleForwardClick()}
              />
            </div>
            <div className="player__progress">
              <span>{formatDuration(currentTime)}</span>
              <span>{formatDuration(trackDuration - currentTime)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Player
