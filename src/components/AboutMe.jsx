import React from 'react';
import profilePic from './image.png';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <img src={profilePic} alt="Profile" className="profile-pic" />
    </div>
  );
};

export default AboutMe;
