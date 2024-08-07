import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LandingPage from "./LandingPage";
import SignupPage from "./Signup";
import Login from "./Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Beverages from "./Beverages";
import About from "./About"
import Footer from "../Components/layout/Footer";
import UserData from "./UserData";
import ProductStore from "./ProductStore";
import ProductData from "./ProductData";
import OffersPage from "./offers";
import ForgetPassword from "./ForgetPage";

function RouterPage() {
  console.log("RouterPage rendered");
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/beve" element={<Beverages />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/userdata" element={<UserData/>} />
        <Route path="/productstore" element={<ProductStore/>} />
        <Route path="/productdata" element={<ProductData/>} />
        <Route path="/Offers" element={<OffersPage />} />
        <Route path="/forgetpage"element={<ForgetPassword />}/>

      </Routes>
    </Router>

    <Footer/>
    </>
  );
}

export default RouterPage;
