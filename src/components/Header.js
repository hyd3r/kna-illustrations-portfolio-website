import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
}

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>KNA</strong> <span>Artcellist</span>
    </Link>
    <nav>
      {/* <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a> */}
      <Link
        data-easing="easeInOutQuad"
        to="#section"
        onClick={() => props.handleClick(1)}
      >
        Illustrations
      </Link>
      <Link
        data-easing="easeInOutQuad"
        to="#section"
        onClick={() => props.handleClick(2)}
      >
        Concept
      </Link>
      <Link
        data-easing="easeInOutQuad"
        to="#section"
        onClick={() => props.handleClick(3)}
      >
        About
      </Link>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
