import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="creative container">
        <div className="left__side">
          <h1 className="Ultrabold">Let's get</h1>
          <h1 className="Ultrabold">creative</h1>
        </div>
        <div className="right__side" style={{width: '70%'}}>
          <p style={{fontFamily: "Poppins, sans-serif",marginBottom:"2.2rem", fontSize: '1.4rem' ,lineHeight: "24px"}}>
            Design, learn and grow at Koncepted. It could be the smartest career
            choice you've ever made.
          </p>
          <a href="/" className="btn-creative">
            Apply Now
          </a>
        </div>
      </div>
      <hr style={{width: '80vw', margin: 'auto'}}/>
      <footer>
        <a
          href="/"
          className="footer__logo Ultrabold"
          style={{ color: "white" }}
        >
          Salaah.
        </a>
        <ul className="permalinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Skills</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="/">
            <BsLinkedin />
          </a>
          <a href="/">
            <FiInstagram />
          </a>
          <a href="/">
            <IoLogoTwitter />
          </a>
        </div>

        <div className="footer__copyright">
          <small className="Regular">&copy; Salaah All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
