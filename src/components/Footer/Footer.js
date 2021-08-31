import React from "react";
import useStyles from "./style";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className="footer">
      <div class="social-container">
        <h2>Created by :- </h2>
        <span style= {{fontSize : '23px'}}> Parth</span>
        <a
          href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/rituj.aryan"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/rituj-aryan-41a5a71a9/"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/ritujaryan/?hl=en"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://github.com/ritujaryan"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a><br/>
        <span  style= {{fontSize : '23px'}}> Rituj</span>
        <a
          href="https://www.youtube.com/channel/UCTLzD9A-M_ll2m7Wj45sHJg"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/rituj.aryan"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/rituj-aryan-41a5a71a9/"
          className="twitter social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/ritujaryan/?hl=en"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://github.com/ritujaryan"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
