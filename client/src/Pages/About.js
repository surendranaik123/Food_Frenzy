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
    <div className='about_background'>
      <div className='.aboutUs_person_1_total'>
    <div className="video-background">
        <video autoPlay loop muted>
          <source src={AboutUs} type="video/mp4" />
          Sorry, your browser doesn't support videos.
        </video>
        </div>
    <p className='aboutUs_person_1'></p>
    <p className='aboutUs_person_1_name'> Name </p>
    <img className='profile1' src={img1} alt="Profile1" />
    <img className='mail_1' src={img2} alt="" />
    <img className='twitter_1' src={img4} alt="" />
    <img className='linkedin_1' src={img3} alt="" />
    </div>
    <div>
    <p className='aboutUs_person_2'></p>
    <p className='aboutUs_person_2_name'> Name </p>
    <img className='profile2' src={img1} alt="Profile1" />
    <img className='mail_2' src={img2} alt="" />
    <img className='twitter_2' src={img4} alt="" />
    <img className='linkedin_2' src={img3} alt="" />
    </div>
    <div>
    <p className='aboutUs_person_3'></p>
    <p className='aboutUs_person_3_name'> Name </p>
    <img className='profile3' src={img1} alt="Profile1" />
    <img className='mail_3' src={img2} alt="" />
    <img className='twitter_3' src={img4} alt="" />
    <img className='linkedin_3' src={img3} alt="" />
    </div>
    <div>
    <p className='aboutUs_person_4'></p>
    <p className='aboutUs_person_4_name'> Name </p>
    <img className='profile4' src={img1} alt="Profile1" />
    <img className='mail_4' src={img2} alt="" />
    <img className='twitter_4' src={img4} alt="" />
    <img className='linkedin_4' src={img3} alt="" />
    </div>
    <div>
    <p className='aboutUs_person_5'></p>
    <p className='aboutUs_person_5_name'> Name </p>
    <img className='profile5' src={img1} alt="Profile1" />
    <img className='mail_5' src={img2} alt="" />
    <img className='twitter_5' src={img4} alt="" />
    <img className='linkedin_5' src={img3} alt="" />
    </div>
    </div>
    </div>
  )
}

export default About