import React from 'react';
import {
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaArtstation,
  FaProductHunt,
} from 'react-icons/fa';

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <div className="container">
        <ul className="icons">
          <li>
            <a href="" className="icon alt" title="Twitter">
              <FaTwitter />
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/kheenamarie"
              className="icon alt"
              title="Facebook"
            >
              <FaFacebookF />
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kna_illustrations/"
              className="icon alt"
              title="Instagram"
            >
              <FaInstagram />
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:artcellist25@gmail.com"
              className="icon alt"
              title="Email"
            >
              <FaEnvelope />
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://ac_artblog.artstation.com/"
              className="icon alt"
              title="Art Station"
            >
              <FaArtstation />
              <span className="label">Art Station</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.pixiv.net/member.php?id=26641063"
              className="icon alt"
              title="Pixiv"
            >
              <FaProductHunt />
              <span className="label">Pixiv</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
