import React from 'react';

import './YouTubeEmbed.css';

const YouTubeEmbed = () => (
  <iframe
    className="youtube_embed"
    src="https://www.youtube.com/embed/h4GTLunqCC4"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

export default YouTubeEmbed;
