 import React from 'react'
 import Navbar from './Navbar';
//  import { BannerImage } from "../Assets/home-banner-background.png"
 import  BannerImage  from "../Assets/home-banner-image.png"
 import { FiArrowRight } from "react-icons/fi";
import { ArrowRight } from '@mui/icons-material';

 const Home = () => {
   return (
     <div className='home-container'>
      <Navbar/> 
      <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerImage} alt="" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Your favourite Food Deliverd Hot & fresh
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, earum.
        </p>
        <button className="secondary-button">
          OrderNow <ArrowRight />
        </button>
        </div>
      </div>
     </div> 
   );
 };
 
 export default Home;