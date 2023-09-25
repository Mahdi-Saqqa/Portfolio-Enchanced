import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Mood = (props) => {
  const { dark, setDark } = props;


  useEffect(() => {
    sessionStorage.setItem("dark", JSON.stringify(dark));
    console.log(dark);
  }, [dark]);

  const handleModeToggle = () => {
    setDark(!dark);
  };

  return (
    <li>
      <Link className="nav-link" onClick={handleModeToggle}>
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
