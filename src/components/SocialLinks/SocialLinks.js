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
    title: 'Coffin Fits Facebook page link'
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/coffinfits/',
    title: 'Coffin Fits Instagram page link'
  },
  {
    icon: faYoutube,
    href: 'https://www.youtube.com/channel/UCOERvp0TD-KHXMDQsIeu1bQ',
    title: 'Coffin Fits YouTube page link'
  },
  {
    icon: faBandcamp,
    href: 'https://coffinfits.bandcamp.com/',
    title: 'Coffin Fits Bandcamp page link'
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
              title={link.title}
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default SocialLinks
