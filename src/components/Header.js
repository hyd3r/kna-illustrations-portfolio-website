import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>KNA</strong> <span>Artcellist</span>
    </Link>
    <nav>
      {/* <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a> */}
      <Link onClick={() => props.handleClick(1)}>Illustrations</Link>
      <Link onClick={() => props.handleClick(2)}>Concept-Art</Link>
      <Link onClick={() => props.handleClick(3)}>About-Me</Link>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func,
};

export default Header;
