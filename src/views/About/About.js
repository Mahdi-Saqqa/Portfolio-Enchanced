import React from "react";
import "./About.css";
const About = (props) => {
    const { mood } = props
    return (
        <div className="About container" style={mood}>
            <div className="row border-bottom d-flex flex-column">
                <h3 className="title my-5">About Me</h3>
                <img className="img" src="https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg" alt="about" />
                <h4 className="mt-3">Mahdi Saqqa</h4>
                <span className="my-3">Full Stack Developer</span>
            </div>
            <div className=" mt-4 row border-bottom ">
                <div className="  par">
                    I am a passionate full stack developer with a background in electrical
                    engineering. With strong technical skills and a creative
                    problem-solving approach, I excel at bringing ideas to life and
                    delivering awesome projects. I am skilled in crafting beautiful and
                    functional digital solutions that exceed expectations. I am a quick
                    learner and thrive on challenges, constantly pushing the boundaries of
                    what is possible in software development.
                </div>
                <div className=" par ">
                    In addition to my technical expertise, I possess excellent
                    communication and collaboration skills. I value effective
                    communication with clients, stakeholders, and fellow developers to
                    ensure project success. Working well in a team environment, I thrive
                    on idea exchange and collaboration. Continuous learning is important
                    to me, as I stay updated with industry trends and deliver innovative
                    solutions that add value to users and businesses.
                </div>
                <div className="detail d-flex justify-content-evenly mt-5 pt-3 " style={mood}>
                    <div className="left col col-5">
                        <div className="info-section">
                            <ul>
                                <li>
                                    <span>Birthday:</span>
                                    <span>29.09.1997</span>
                                </li>
                                <li>
                                    <span>Age:</span>
                                    <span>26</span>
                                </li>
                                <li>
                                    <span>Address:</span>
                                    <span>Nablus, Palestine</span>
                                </li>
                                <li>
                                    <span>Email:</span>
                                    <span>
                                        <a href="mailto:mahdi.saqqa@gmail.com">mahdi.saqqa@gmail.com</a>
                                    </span>
                                </li>
                                <li>
                                    <span>Phone:</span>
                                    <span>
                                        <a href="tel:+970598888041">+970598888041</a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right col col-5">
                        <div className="info-section">
                            <ul>
                                <li>
                                    <span>Nationality:</span>
                                    <span>Palestinian</span>
                                </li>
                                <li>
                                    <span>Study:</span>
                                    <span>Coding Dojo</span>
                                </li>
                                <li>
                                    <span>Degree:</span>
                                    <span>BC in Electrical Engineer</span>
                                </li>
                                <li>
                                    <span>Interest:</span>
                                    <span>AI, Algorithms, Problems Solving</span>
                                </li>
                                <li>
                                    <span>Freelance:</span>
                                    <span>Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3 className="title mt-3">Coding Dojo Exams Result</h3>
                <img className="my-5" src="./results.png" alt="" />
            </div>
            <div className="row">
                <h3 className="title mt-3">skills</h3>
                <ul className="skils">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Netlify</li>
                    <li>Postman</li>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                    <li>Linux</li>
                    <li>Windows</li>
                    <li>MacOS</li>
                    <li>Microsoft Office</li>
                    <li>Adobe XD</li>
                </ul>

                </div>
            </div>
            );
};

            export default About;
