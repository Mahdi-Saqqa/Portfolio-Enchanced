import React, { useState, useEffect } from 'react';
import ImgFluid from '../../components/ImgFluid/ImgFluid';
import { IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TypingEffect from '../../components/TypingEffect';
import './Home.css';

const Home = (props) => {
  const [style, setStyle] = useState({
    backgroundColor: 'rgb(32, 33, 36)',
    color: 'white',
  });

  useEffect(() => {
    if (props.dark) {
      setStyle({ backgroundColor: 'rgb(32, 33, 36)', color: 'white' });
    } else {
      setStyle({ backgroundColor: 'white', color: 'black' });
    }

    // // Add the event listener for scrolling
    // window.addEventListener('scroll', handleScroll);

    // // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [props.dark]);

  // Function to handle the scroll event
  const handleScroll = () => {
    const { innerHeight, scrollY } = window;
    const { clientHeight, scrollHeight } = document.documentElement;
    const scrollPosition = scrollY + innerHeight;
  
    // Define a threshold value for the scroll position to consider the user has scrolled to the end
    const threshold = scrollHeight - clientHeight;
  
    if (scrollPosition >= threshold) {
      // Navigate to the other page when the user has scrolled to the end
      window.location.href = '/other-page';
    }
  };
  return (
    <div
      className="Home justify-content-center d-flex align-content-center  mx-0"
      style={style}
      onScroll={handleScroll}
    >
      <div className="row  mx-0">
        <div className="col-sm-10 col-md-5 col-lg-5 justify-content-center flex-column d-flex align-content-center ">
          <ImgFluid />
        </div>
        <div className="text-center col-sm-10 col-md-5 col-lg-6 justify-content-center flex-column d-flex align-content-center">
          <h1 className="display-3">Meet Mahdi</h1>

          <TypingEffect />
          <p className="px-3">
            A passionate full stack developer with strong technical skills and a creative approach to problem-solving. I
            excel in crafting beautiful and functional digital solutions that exceed expectations.
          </p>
          <p className="lead">
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
