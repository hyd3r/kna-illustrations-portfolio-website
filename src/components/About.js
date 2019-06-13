import React from 'react';
import pic from '../assets/scss/images/astolf.png';

const About = props => (
  <section id="banner" className="major">
    <div className="inner">
      <div className="image"></div>
      <div className="txth1">Hi, KNA here!</div>
      <img src={pic} align="right" />
      <div className="txtp">
        I am a <b>Freelance Artist</b> who is currently studying{' '}
        <b>Video Game Design</b> <br />
        and <b>Animation.</b>
        <br />
        <br />I am heavily influenced by anime and manga where my art style has{' '}
        <br />
        evolved from. I tend to focus more on <b>character design</b> and{' '}
        <b> illustration,</b> <br />
        but I also have experience with <b>3D modeling</b> and
        <b> 3D animations.</b>
        <br />
        <br />
        <h4>Softwares</h4>I personally love Clip Studio Paint for illustration
        <br />
        <br />
        <h4>Hardwares</h4>Laptop:
        <br /> ROG Strix GL753 <br />​ Graphic Tablet:
        <br /> Huion GT156HD V2
      </div>
    </div>
    <style jsx="true">
      {`
        .log {
          display: block;
          margin-right: auto;
        }
        .image {
          position: relative;
          width: 100%;
        }

        .txth1 {
          color: #daf4fe;
          font-size: 40px;
          font-family: 'Signika', sans-serif;
          padding-bottom: 10px;
          position: absolute;
          top: 130px;
          left: 100px;
          width: 100%;
        }

        .txtp {
          font-family: 'Inder', sans-serif;
          line-height: 28px;
          margin-bottom: 15px;
          color: #ffffff;
          position: absolute;
          top: 220px;
          left: 0;
          width: 100%;
        }

        b {
          color: #33c8fe;
          transition: 0.5s;
          -moz-transition: 0.5s;
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          width: 100%;
        }

        b:hover {
          color: #a03c21;
        }
      `}
    </style>
  </section>
);

export default About;
