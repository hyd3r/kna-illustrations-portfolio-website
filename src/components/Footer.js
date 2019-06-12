import React from 'react';
import {
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaArtstation,
  FaProductHunt,
} from 'react-icons/fa';
import { Link } from 'gatsby';

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });
}

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <div className="container">
        <ul className="icons">
          <li>
            <Link to="#" data-easing="easeInOutQuad">
              Back to the top
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
