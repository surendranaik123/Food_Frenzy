import React from 'react'
import Header from "../Components/layout/Header";
import img from "../Assets/image.png";
import "../Styles/About.css";

function About() {
  return (
    <div>
    <Header />
    <div className='about_background'>
      <div>
    <p className='aboutUs_person_1'></p>
    <p className='aboutUs_person_1_name'> Name </p>
    </div>
    <div>
    <p className='aboutUs_person_2'></p>
    <p className='aboutUs_person_2_name'> Name </p>
    </div>
    <div>
    <p className='aboutUs_person_3'></p>
    <p className='aboutUs_person_3_name'> Name </p>
    </div>
    <div>
    <p className='aboutUs_person_4'></p>
    <p className='aboutUs_person_4_name'> Name </p>
    </div>
    <div>
    <p className='aboutUs_person_5'></p>
    <p className='aboutUs_person_5_name'> Name </p>
    </div>
    </div>
    </div>
  )
}

export default About