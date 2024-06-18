import React from "react";
import Header from "../Components/layout/Header";
import img from "../Assets/image.png";
import "../Styles/Landing.css";
import { Navigate, useNavigate } from "react-router-dom";

function LandingPage() {
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
  };
  return (
    <div>
      <div className="landing_hero">
        <Header />
        
        <div style={{ display: "flex" }}>
          <div>
            <h3 className="biryani_text">Biryani</h3>
            <h3 className="biryani_text1"> We All Love</h3>
            <button className="homebutton">View More</button>
          </div>

          <div className="hero">
            <img src={img} alt="biryani" className="home_logo" />
          </div>
        </div>
      </div>
      <div className="Menu">
        <h1 className="Menu_Text">Menu</h1>
        <div onClick={Veg}>
          <img className="Img_Veg" src={img} alt="" />
          <p className="Menu_Text_Veg">Veg</p>
        </div>
        <div onClick={NonVeg}>
          <img className="Img_Non-Veg" src={img} alt="" />
          <p className="Menu_Text_Non-Veg">Non-Veg</p>
        </div>
        <div onClick={beverages}>
          <img className="Img_Beverages" src={img} alt="" />
          <p className="Menu_Text_Beverages">Beverages</p>
        </div>
      </div>
      <div className="Login_sections">
        <img className="Login_Image" src={img} alt="" />
        <h1 className="Login_Text">Ready to get Started?</h1>
        <p className="Login_info">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <p className="Login_Button" onClick={Login}>
          Login
        </p>
        <p className="SignUp_Button" onClick={SignUp}>
          SignUp
        </p>
      </div>

      
    </div>
  );
}

export default LandingPage;
