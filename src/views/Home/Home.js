import React, { useState, useEffect } from 'react';
import ImgFluid from '../../components/ImgFluid/ImgFluid';
import { IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TypingEffect from '../../components/TypingEffect';
import './Home.css';
const Home = (props) => {
  const {style} = props;
  return (
    <div id='home'
      className="Home justify-content-center d-flex align-content-center  mx-0"
      style={style}
    >
      <div className="row  mx-0">
        <div className="col-sm-10 col-md-5 col-lg-5 justify-content-center flex-column d-flex align-content-center ">
          <ImgFluid />
        </div>
        <div className="text-center col-sm-10 col-md-5 col-lg-6 justify-content-center flex-column d-flex align-content-center">
        <h1 className="display-3 text-center">Meet Mahdi</h1>

          <TypingEffect />
          <p className="px-3 text-center">
            A passionate full stack developer with strong technical skills and a creative approach to problem-solving. I
            excel in crafting beautiful and functional digital solutions that exceed expectations.
          </p>
          <p className="linksicons">
            <IconButton
              color="inherit"
              href="https://github.com/Mahdi-Saqqa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>

            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/mahdisaqqa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="inherit"
              href="mailto:mahdi.saqqa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://wa.me/message/CRDLOKVHQ2AEN1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </IconButton>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
