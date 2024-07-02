import React, { useEffect, useState } from 'react';
import Header from '../Components/layout/Header';
import img from "../Assets/image.png";
import "../Styles/Veg.css";

function Veg() {
  const [ProductData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/productdata")
      .then(resp => resp.json())
      .then(data => setProductData(data))
      .catch(error => console.log(error));
  }, []);

// Filtered Data for 'veg' category (case insensitive)
const filteredData = ProductData.filter(item => {
  const categoryLowerCase = item.category.toLowerCase();
  return categoryLowerCase === 'veg' || categoryLowerCase === 'VEG';
});


  return (
    <div className='veg-page'>
      <Header />
      <div className='content'>
        <h1 className='header'>Dish</h1>
        <div className='scroll-containerveg'>
          {filteredData.map((product, index) => (
            <div className="card" style={{ width: "18rem", margin: "10px", height: "370px" }} key={index}>

              <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "230px", width: "100%" }} />
              
              {product.discount > 0 && (
                <div className="sc-ZUflv gRXfSm">
                  <img src="https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png" alt="Zomato Walkin" className="walkin-icn" />
                  <div className="walkin-offer-value">Flat <b>{product.discount}% OFF</b></div>
                </div>
              )}

              <div className="card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"15px" }}>
                  <h4 className="card-title">{product.title.substring(0, 11)}...</h4>
                  <h5 style={{ backgroundColor: "green", color: "white", padding: "4px", paddingLeft: "12px", paddingRight: "12px", borderRadius: "10px" }}>
                    {product.rating} <i className="bi bi-star" style={{ fontSize: "13px", position: "relative", top: "-2px" }}></i>
                  </h5>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h6 className="card-text" style={{ width: "450px" }}>{product.description.substring(0, 25)}...</h6>
                  <h6 style={{ width: "340px", textAlign: "right", marginLeft: "15px" }}>
                    <i className="bi bi-currency-rupee"></i>{product.price} for two
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h1 className='header1'>Restaurant</h1>
        <div className='scroll-container'>
          {[...Array(8)].map((_, index) => (
            <div className='product' key={index}>
              <img src={img} alt={`Restaurant ${index + 1}`} className="gallery-image" />
              <div className='Dish_text'>
                <p>Restaurant{index + 1}</p>
                <p>$10</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Veg;
