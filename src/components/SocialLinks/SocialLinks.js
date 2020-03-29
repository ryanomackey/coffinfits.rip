import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBandcamp,
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import './SocialLinks.css'

const links = [
  {
    icon: faFacebook,
    href: 'https://www.facebook.com/coffinfits/',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/coffinfits/',
  },
  {
    icon: faYoutube,
    href: 'https://www.youtube.com/channel/UCOERvp0TD-KHXMDQsIeu1bQ',
  },
  {
    icon: faBandcamp,
    href: 'https://coffinfits.bandcamp.com/',
  },
]

const SocialLinks = () => (
  <div className="social-links">
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a
            className="social-links__link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={link.icon}
              size="3x"
              className="social-links__icon"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialLinks
