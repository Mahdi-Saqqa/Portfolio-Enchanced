import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Mood = (props) => {
  const { mood, setMood } = props;
  const { dark, setDark } = props;

  useEffect(() => {
    const isDark = JSON.parse(sessionStorage.getItem("dark"));
    if (isDark == null) {
      setDark(true);
    }
    else {
      setDark(false);
    }
    

  }, []);

  useEffect(() => {
    sessionStorage.setItem("dark", JSON.stringify(dark));
    console.log(dark);
  }, [dark]);

  const handleModeToggle = () => {
    const newMode = mood.color === "#45505b" ? { color: "#f2f3f5", backgroundColor: "#45505b" } : { color: "#45505b", backgroundColor: "#f2f3f5" };
    setMood(newMode);
    setDark(!dark);
  };

  return (
    <li>
      <Link style={mood} className="nav-link" onClick={handleModeToggle}>
        {dark ? (
          <FontAwesomeIcon icon={faMoon} className="navigate__icon" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="navigate__icon" />
        )}
        <span>{dark ? "Dark Mode" : "Light Mode"}</span>
      </Link>
    </li>
  );
};

export default Mood;
