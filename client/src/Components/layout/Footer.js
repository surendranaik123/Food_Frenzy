import React from 'react';
/* src/index.css or src/App.css */
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';



const footerTextStyle = {
  marginBottom: "15px",
  fontFamily: "Arial",
  fontSize: "18px" // Adjust the font size as needed
};
const footerText = {
  textDecoration: "none",
  fontFamily: "Arial",
  fontSize: "15px",
  borderRadius: "8px",
  marginBottom: "10px", // You can adjust the value as needed
};
 
const Footer = () => {
  return (
    <footer className="bg-white text-dark">
       <div className="container mt-0 border-top border-dark" style={{ marginTop: "-3000px" }}></div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-2">
            <h3 className="text-uppercase" style={footerTextStyle}>SHOP</h3>
            <ul className="list-unstyled">
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-green" style={footerText}> By Category</a>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Veg</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>NonVeg</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Beverages</a>
                <a href="/" className="text-dark" style={footerText}>Non-veg</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Beverages</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Offers</a>
              </li>
        
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="text-uppercase" style={footerTextStyle}>Company</h3>
            <ul className="list-unstyled">
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Customer Service </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Terms of Use</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Priveacy</a>
              </li >
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Careers</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>About</a>
              </li>

              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>CA Supply Chains Act</a>
              </li >
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark " style={footerText}>Sustainabillity</a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a href="/" className="text-dark" style={footerText}>Affillites</a>
              </li>
              <li>
                <a href="/" className="text-dark" style={footerText}>Recall Info</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h3 className="text-uppercase" style={footerTextStyle}>CONTACT</h3>
            <ul className="list-unstyled">
              <li style={{ marginBottom: "10px" }}>
                <div>
                <a href="/" className="text-blue" style={footerText}>Email</a>
                </div>
                <div>
                <a href="/" className="text-dark" style={footerText}>Contact us</a>
                </div>
              </li>
            

              <li style={{ marginBottom: "10px" }}>
              <div>
                <a href="/" className="text-blue" style={footerText}>TelePhone</a>
                </div>
                <div> <a href="/" className="text-dark" style={footerText}>9999999999</a></div>
              </li>
             

              <li style={{ marginBottom: "10px" }}>
              <div>
                <a href="/" className="text-blue" style={footerText}>Address</a>
                </div>
                <div><a href="/" className="text-dark" style={footerText}> No. 7, 1st Cross Rd, Chunchanakatte, New Bank Colony, PNB Layout, Konanakunte, Bengaluru, Karnataka 560062</a></div>
              </li>
              

              <li style={{ marginBottom: "10px" }}>
              <div>
                <a href="/" className="text-blue" style={footerText}>Hours</a>
                </div>
                <div><a href="/" className="text-dark" style={footerText}>M-F:6.00am -8.00pm</a></div>
              </li>
              
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-uppercase" style={footerTextStyle}>Subscribe to our newsletter</h3>
            <p style={footerText}>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="form-inline">
              <input type="email" name="emailAddress" id="emailAddress" autoComplete="email" required
                style={{ fontFamily: "Arial", fontSize: "14px", padding: "10px", borderRadius: "8px", }}
                placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary" style={{ fontFamily: "Arial", fontSize: "14px", marginLeft: "200px",marginTop:"-70px",border:"2px solid white" ,color:"white",width:"90px",height:"40px"}}>Subscribe</button>
            </form>


          </div>

        </div>
      </div>


      <div className="container mt-0 border-top border-dark" style={{ marginTop: "-3000px" }}>
  <div className="row" style={{ paddingBottom: "50px" }}>

    {/* Copyright text */}
    <div className="col-md-6 col-12 text-center text-md-left mb-3">
      <p style={{ fontFamily: "Arial", fontSize: "20px", margin: 0 }}>
        &copy; 2024 Food-Frenzy, Inc. All rights reserved.
      </p>
    </div>

    {/* Social icons */}
    <div className="col-md-6 col-12 d-flex justify-content-center justify-content-md-end">
      <div className="social-icons" style={{margin:"10px"}}>
        <a href="https://www.facebook.com/" className="text-dark mr-3 ml-3" style={{marginLeft:"20px"}}>
          <FontAwesomeIcon icon={faFacebook} size="2x"  />
        </a>
        <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-dark mr-3" style={{marginLeft:"20px"}}>
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://twitter.com/" className="text-dark mr-3" style={{marginLeft:"20px"}}>
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/surendranaik123/Food_Frenzy" className="text-dark mr-3" style={{marginLeft:"20px"}}>
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.google.com/" className="text-dark mr-3" style={{marginLeft:"20px"}}>
          <FontAwesomeIcon icon={faDribbble} size="2x" />
        </a>
      </div>
    </div>

  </div>
</div>

    
    </footer>
  );
}

export default Footer