import React, { useEffect, useState } from 'react';
import Headers from '../Components/layout/Header.js';
import Rating from "react-rating-stars-component";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Styles/Product.css'

function ProductData() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/productdata")
      .then(resp => resp.json())
      .then(data => setProductData(data))
      .catch(error => console.log(error));
  }, []);

  console.log(productData);

  return (
    <>
      <Headers />
      <div style={{ height: "auto", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
        {productData.map((product, index) => (
          <div className="card"  key={index}>
            <img src={product.image} className="card-img-top" alt={product.title} style={{ height: "230px", width: "100%" }} />
           
            {product.discount > 0 && (
                <div className="sc-ZUflv gRXfSm">
                  <img src="https://b.zmtcdn.com/data/o2_assets/c0e0fe766225fb9cdb3245a9915571201716296953.png" alt="Zomato Walkin" className="walkin-icn" />
                  <div className="walkin-offer-value">Flat <b>{product.discount}% OFF</b></div>
                </div>
              )}


              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4 className="card-title " >{product.title.substring(0, 11)}...</h4>
                <h5 style={{backgroundColor:"green",color:"white",padding:"4px",paddingLeft:"12px",paddingRight:"12px",borderRadius:"10px"}}>{product.rating} <i className="bi bi-star" style={{ fontSize: "13px", position: "relative", top: "-2px" }}></i></h5>
                {/* <Rating count={5} value={product.rating} size={24} activeColor="green" /> */}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6 className="card-text" style={{ width: "480px" }}>{product.description.substring(0, 25)}...</h6>
                <h6 style={{ width: "340px", textAlign: "right", marginLeft: "15px" }}>
                  <i className="bi bi-currency-rupee"></i>{product.price} for two
                </h6>
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
}

export default ProductData;
