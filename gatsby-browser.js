/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import Player, { PlayerProvider } from './src/components/Player';

import '@fortawesome/fontawesome-svg-core/styles.css';

export const wrapRootElement = ({ element }) => (
  <PlayerProvider>
    <Player />
    {element}
  </PlayerProvider>
);
