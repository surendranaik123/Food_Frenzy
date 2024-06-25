import React from 'react'
import Header from '../Components/layout/Header'
import '../Styles/Beverages.css'
import img from "../Assets/image.png";

const Beverages = () => {
  return (
    <div className='veg-page'>
    <Header/>
    <div className='content'>
      <h1 className='header'>Dish</h1>
      <div className='scroll-container'>
        {[...Array(8)].map((_, index) => (
          <div className='product' key={index}>
            <img src={img} alt={`Product ${index + 1}`} className="gallery-image"/>
            <div className='Dish_text'>
              <p>Product{index + 1}</p>
              <p>$10</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className='header1'>Restaurant</h1>
      <div className='scroll-container'>
        {[...Array(8)].map((_, index) => (
          <div className='product' key={index}>
            <img src={img} alt={`Restaurant ${index + 1}`} className="gallery-image"/>
            <div className='Dish_text'>
              <p>Restaurant{index + 1}</p>
              <p>$10</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Beverages