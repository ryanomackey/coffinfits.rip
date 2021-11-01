import React, { useContext, useRef } from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format' // eslint-disable-line
import {
  motion,
  useMotionValue,
  useDragControls,
  useTransform,
} from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from '@fortawesome/free-solid-svg-icons';

import { PlayerContext } from './useAudioPlayer';

import './Player.css';

const Player = () => {
  const {
    playing,
    setPlaying,
    trackDuration,
    currentTime,
    setClickedTime,
    tracks,
    activeTrack,
    activeTrackIndex,
    setActiveTrack,
  } = useContext(PlayerContext);

  const WIDTH = 175;

  const x = useMotionValue(0);
  const progressScaleX = useTransform(x, [0, WIDTH], [0, 1]);
  const dragControls = useDragControls();

  const currPercent = currentTime / trackDuration;
  x.set(currPercent * WIDTH);

  const togglePlay = () => {
    if (!activeTrack) {
      setActiveTrack(tracks[0]);
    }

    setPlaying(!playing);
  };

  const handleForwardClick = () => {
    if (activeTrackIndex + 1 < tracks.length) {
      return setActiveTrack(tracks[activeTrackIndex + 1]);
    }

    return setActiveTrack(tracks[0]);
  };

  const handleBackwardClick = () => {
    if (activeTrackIndex - 1 >= 0) {
      return setActiveTrack(tracks[activeTrackIndex - 1]);
    }

    return setActiveTrack(tracks[tracks.length - 1]);
  };

  const formatDuration = (duration) =>
    moment.duration(duration, 'seconds').format('mm:ss', { trim: false });

  return (
    <>
      <audio id="audio" src={activeTrack ? activeTrack.url : null} />
      {activeTrack && (
        <div className="player">
          <div className="player__album-art">
            <img
              src={activeTrack && activeTrack.art.src}
              alt={`${activeTrack.name} album art`}
            />
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
            <div className="player__progress-container">
              <span className="player__progress-time">
                {formatDuration(currentTime)}
              </span>
              <div
                className="player__progress-bar-container"
                style={{ width: `${WIDTH}px` }}
                onMouseDown={(event) => {
                  dragControls.start(event, { snapToCursor: true });
                  setClickedTime((trackDuration / WIDTH) * x.get());
                }}
              >
                <div className="player__progress-bar">
                  <motion.div
                    className="player__progress"
                    style={{ scaleX: progressScaleX }}
                  />
                </div>
                <motion.div
                  className="player__progress-knob"
                  drag="x"
                  dragConstraints={{ left: 0, right: WIDTH }}
                  dragControls={dragControls}
                  dragElastic={0}
                  dragMomentum={false}
                  onDragEnd={(event, info) => {
                    setClickedTime((trackDuration / WIDTH) * info.point.x);
                  }}
                  style={{ x }}
                />
              </div>
              <span className="player__progress-time">
                {formatDuration(trackDuration - currentTime)}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Player;
