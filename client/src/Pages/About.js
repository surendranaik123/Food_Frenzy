import React from 'react'
import Header from "../Components/layout/Header";
import img1 from "../Assets/Profile.jpeg";
import "../Styles/About.css";
import img2 from "../Assets/Mail.svg";
import img3 from "../Assets/Linkedin.svg";
import img4 from "../Assets/Twitter.svg";
import AboutUs from "../Assets/AboutUs.mp4";


function About() {
  return (
    <div>
      <Header />
      <div className="about-container">
        <div className="video-background">
          <video autoPlay loop muted>
            <source src={AboutUs} type="video/mp4" />
            Sorry, your browser doesn't support videos.
          </video>
        </div>
        <div className="profiles-container">
          <div className="profile-card">
            <p className="profile-name">Name</p>
            <img className="profile-img" src={img1} alt="Profile1" />
            <div className="social-icons">
              <img src={img2} alt="Mail" />
              <img src={img4} alt="Twitter" />
              <img src={img3} alt="LinkedIn" />
            </div>
          </div>
          <div className="profile-card">
            <p className="profile-name">Name</p>
            <img className="profile-img" src={img1} alt="Profile2" />
            <div className="social-icons">
              <img src={img2} alt="Mail" />
              <img src={img4} alt="Twitter" />
              <img src={img3} alt="LinkedIn" />
            </div>
          </div>
          <div className="profile-card">
            <p className="profile-name">Name</p>
            <img className="profile-img" src={img1} alt="Profile3" />
            <div className="social-icons">
              <img src={img2} alt="Mail" />
              <img src={img4} alt="Twitter" />
              <img src={img3} alt="LinkedIn" />
            </div>
          </div>
          <div className="profile-card">
            <p className="profile-name">Name</p>
            <img className="profile-img" src={img1} alt="Profile4" />
            <div className="social-icons">
              <img src={img2} alt="Mail" />
              <img src={img4} alt="Twitter" />
              <img src={img3} alt="LinkedIn" />
            </div>
          </div>
          <div className="profile-card">
            <p className="profile-name">Name</p>
            <img className="profile-img" src={img1} alt="Profile5" />
            <div className="social-icons">
              <img src={img2} alt="Mail" />
              <img src={img4} alt="Twitter" />
              <img src={img3} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;