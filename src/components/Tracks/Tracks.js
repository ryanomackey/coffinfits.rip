import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import { PlayerContext } from '../Player';

import './Tracks.css';

const Tracks = ({ tracks }) => {
  const { playing, activeTrackIndex, setTracks, setActiveTrack, setPlaying } =
    useContext(PlayerContext);

  const handleTrackClick = (index) => {
    setTracks(tracks);

    setActiveTrack(tracks[index]);

    if (!playing) {
      setPlaying(true);
    }
  };

  return (
    <div className="tracks">
      {tracks.map((track, index) => (
        <div
          className="tracks__track"
          key={track.title}
          onClick={() => handleTrackClick(index)}
        >
          <span className="tracks__track-number">
            {activeTrackIndex === index && playing ? (
              <FontAwesomeIcon icon={faVolumeUp} size="1x" />
            ) : (
              index + 1
            )}
          </span>
          <span className="tracks__track-title">{track.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Tracks;
