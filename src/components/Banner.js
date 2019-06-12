import React from 'react';
import logo from '../data/works/8.png';
import {
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaArtstation,
  FaProductHunt,
} from 'react-icons/fa';

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      {/* <header className="major"> */}
      <div>
        <img className="logo" src={logo} />
        <h2 align="center">KNA - Artcellist</h2>
      </div>
      {/* </header> */}
      <div className="container">
        <ul className="icons">
          <li>
            <a href="" className="icon alt fa-2x" title="Twitter">
              <FaTwitter />
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/kheenamarie"
              className="icon alt fa-2x"
              title="Facebook"
            >
              <FaFacebookF />
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kna_illustrations/"
              className="icon alt fa-2x"
              title="Instagram"
            >
              <FaInstagram />
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:artcellist25@gmail.com"
              className="icon alt fa-2x"
              title="Email"
            >
              <FaEnvelope />
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <a
              href="https://ac_artblog.artstation.com/"
              className="icon alt fa-2x"
              title="Art Station"
            >
              <FaArtstation />
              <span className="label">Art Station</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.pixiv.net/member.php?id=26641063"
              className="icon alt fa-2x"
              title="Pixiv"
            >
              <FaProductHunt />
              <span className="label">Pixiv</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Banner;
