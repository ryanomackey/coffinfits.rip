import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBandcamp,
  faFacebook,
  faInstagram,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const links = [
  {
    icon: faFacebook,
    href: 'https://www.facebook.com/coffinfits/',
    title: 'Coffin Fits Facebook page link',
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/coffinfits/',
    title: 'Coffin Fits Instagram page link',
  },
  {
    icon: faSpotify,
    href: 'https://open.spotify.com/artist/0ePYQX8O7zvRoKLTvzHsff',
    title: 'Coffin Fits Spotify page link',
  },
  {
    icon: faYoutube,
    href: 'https://www.youtube.com/channel/UCOERvp0TD-KHXMDQsIeu1bQ',
    title: 'Coffin Fits YouTube page link',
  },
  {
    icon: faBandcamp,
    href: 'https://coffinfits.bandcamp.com/',
    title: 'Coffin Fits Bandcamp page link',
  },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t-2 border-orange-600">
      <div className="main-container">
        <span className="my-8 block w-full text-center">
          <a href="mailto:coffinfits@gmail.com">coffinfits@gmail.com</a> for
          booking
        </span>
        <ul className="my-8 flex justify-around">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={link.icon}
                  size="2x"
                  title={link.title}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
