import React from 'react';
import '../App.css';
import { Button } from './Button';
// import {heroImg} from 'images/heroImg.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      {/* Add img */}
      {/* <img src = 'images/heroImg.jpg' alt = 'Img'></img> */}
      <h1>EXPLORE COUNTLESS WORLDS</h1>
      <p>Start Today</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
