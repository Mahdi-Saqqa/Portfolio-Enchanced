import React from "react";
import "./About.css";
import "./demo.css";

import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="About">
      <h1>About Me</h1>
      <div>
        <div className="intro">
          <p>
            I am a passionate full stack developer with strong technical skills
            and a creative approach to problem-solving. I excel in crafting
            beautiful and functional digital solutions that exceed expectations.
          </p>
          <br/>
        </div>
        <div className="midle d-flex row ">
          <div class="left  col-md-12 col-lg-6 ">
            <div class="tokyo_section_title">
              <h3 className="d">Education</h3>
            </div>
            <div class="tokyo_tm_resume_list">
              <ul >
                <li>
                  <div class="list_inner">
                    <div class="time">
                      <span>2023 - 2023</span>
                    </div>
                    <div class="place">
                      <h3>AXSOS Academy</h3>
                      <span>FSD BootCamp</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <div class="time">
                      <span>2016 - 2023</span>
                    </div>
                    <div class="place">
                      <h3>PTUK University</h3>
                      <span>Bachelor Degree</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <div class="time">
                      <span>2014 - 2015</span>
                    </div>
                    <div class="place">
                      <h3>NIS School</h3>
                      <span>Diploma Degree</span>
                    </div>
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="right  col-md-12 col-lg-6">
          <div class="tokyo_section_title">
              <h3 className="d">Projects</h3>
            </div>
            <div class="tokyo_tm_resume_list">
              <ul >
                <li>
                  <div class="list_inner">
                    <div class="time">
                      <span>April - 2023</span>
                    </div>
                    <div class="place">
                        <Link to="https://github.com/Mahdi-Saqqa/podcasti-python-project"><h3>Podcasti</h3></Link>
                      <span>Python Stack</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <div class="time">
                      <span>May - 2023</span>
                    </div>
                    <div class="place">
                    <Link to="https://github.com/Mahdi-Saqqa/CinePhilia"><h3>CinePhilia</h3></Link>
                      <span>Java Stack</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <div class="time">
                      <span>Jul - 2023</span>
                    </div>
                    <div class="place">
                    <Link to="https://github.com/TaleenMusa/CareerHive"><h3>CareerHive</h3></Link>
                      <span>MERN Stack</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div  className="end">
            <p>
            As a full-stack developer, my portfolio showcases my proficiency in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, Python, Git, and MongoDB. These skills serve as the foundation for creating dynamic web applications. Alongside these, I leverage popular code editors like VS Code and work seamlessly across operating systems such as Linux, Windows.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
