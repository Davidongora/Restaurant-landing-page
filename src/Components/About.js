import React from 'react';
import AboutBackgroundImage from "../Assets/about-background-image.png";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { PlayArrowOutlined } from '@mui/icons-material';



const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
            Lorem, ipsum dolor sit amet consecte tur adipisicing.
        </h1>
        <p className='primary-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Dicta sit harum enim commodi quisquam? Totam aliquam optio accusamus placeat similique!
         </p>
         <p className='primary-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, repellat.
         </p>
        <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
                <BsFillPlayCircleFill/>Watch Video
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;