import React from 'react';
import '../Styles/Landing.css';
import Header from "../Components/layout/Header";
import img from '../Assets/image.png'; // Adjust the path to your image
import { Navigate, useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigation = useNavigate();

  const Veg = () => {
    navigation("/veg");
  };
  const NonVeg = () => {
    navigation("/nonveg");
  };

  const beverages = () => {
    navigation("/beve");
  };
  const Login = () => {
    navigation("/signin");
  };
  const SignUp = () => {
    navigation("/signup");
  }
;
    return (
        <div className="landing_hero">
            <Header />
            <div className="hero-section-modified">
                <div className="text-container">
                    <h3 className="biryani_text_modified">Biryani</h3>
                    <h3 className="biryani_text1_modified"> We All Love</h3>
                    <button className="homebutton_modified">View More</button>
                </div>
                <div className="hero_image_container">
                    <img src={img} alt="biryani" className="home_logo_modified" />
                </div>
            </div>

            <section className="menu-section" id="veg">
                <div className="menutext">
                    <h2>Menu</h2>
                </div>
                <div className="menu-categories">
                    <div onClick={Veg} className="menu-item">
                        <div className="box-container">
                            <img src={img} alt="Veg Biryani" className="biryani-image" />
                        </div>
                        <h3>Veg</h3>
                    </div>
                    <div onClick={NonVeg}className="menu-item" id="non-veg">
                        <div className="box-container">
                            <img src={img} alt="Non-Veg Biryani" className="biryani-image" />
                        </div>
                        <h3>Non-Veg</h3>
                    </div>
                    <div onClick={beverages} className="menu-item" id="beverages">
                        <div className="box-container">
                            <img src={img} alt="Beverages" className="biryani-image" />
                        </div>
                        <h3>Beverages</h3>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <div className="cta-text">
                        <h2>Ready to get Started?</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="cta-buttons">
                        <button className="login" onClick={Login}>Login</button>
                        <button className="signup" onClick={SignUp}>SignUp</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
