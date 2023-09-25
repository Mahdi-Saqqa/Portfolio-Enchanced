import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHouse,
  faUser,
  faFile,
  faPager,
  faServer,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigate.css";
import Mood from "./Mood";

const Navigate = (props) => {
  const { mood, setMood } = props;
  const {dark, setDark} = props;

  const handleMobileNavToggle = () => {
    document.body.classList.toggle("mobile-nav-active");
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  };

  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <FontAwesomeIcon
        icon={faBars}
        className="mobile-nav-toggle d-lg-none"
        onClick={handleMobileNavToggle}
        style={mood}
      />

      <nav id="navbar" className=" nav-menu">
        <ul>
          <li>
            <Link to="/" style={mood} className="nav-link scrollto"
                    onClick={handleMobileNavToggle}

            >
              <FontAwesomeIcon
                icon={faHouse}
                className="navigate__icon"
              />{" "}
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" style={mood} className="nav-link scrollto"
                    onClick={handleMobileNavToggle}
                    >
              <FontAwesomeIcon icon={faUser} className="navigate__icon" />{" "}
              <span >About</span>
            </Link>
          </li>

          <li>
            <Link to="/portfolio" style={mood} className="nav-link scrollto"
            
            onClick={handleMobileNavToggle}
            >
              {" "}
              <FontAwesomeIcon icon={faPager} className="navigate__icon" 
              />
              <span >Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/services" style={mood} className="nav-link scrollto"
                    onClick={handleMobileNavToggle}
                    >
              {" "}
              <FontAwesomeIcon icon={faServer} className="navigate__icon" />
              <span >Services</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" style={mood} className="nav-link scrollto"
                    onClick={handleMobileNavToggle}
                    >
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="navigate__icon"
              />
              <span >Contact</span>
            </Link>
          </li>
          <Mood mood={mood}  setMood={setMood} dark={dark} setDark={setDark} 
                  onClick={handleMobileNavToggle}
                  />
        </ul>
      </nav>
    </header>
  );
};

export default Navigate;
