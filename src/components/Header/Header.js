import React from 'react';
import { Link } from 'gatsby';

import './Header.css';

const links = [
  {
    href: '/music',
    title: 'Music',
  },
  {
    href: '/about',
    title: 'About',
  },
];

const Header = () => (
  <header className="header">
    <Link className="header__link" to="/">
      <h1 className="header__title">The Coffin Fits</h1>
    </Link>
    <ul className="header__links">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className="header__link"
            activeClassName="header__link--active"
            partiallyActive
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
