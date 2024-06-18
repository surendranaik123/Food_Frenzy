import React from 'react'
import Header from '../Components/layout/Header'
import img from "../Assets/image.png";

function Veg() {
  return (
    <div>
        <Header/>
        <h1 className='header'>Dish</h1>
        <p className='background'></p>
      <div class="scroll-container " >
        <div className='product'>
          <img src={img} alt="Cinque Terre" className="gallery-image"/>
          <div className='Dish_text'>
          <p >Product1</p>
          <p>$10</p>
          </div>
          </div>
          <div className='product'>
          <img src={img} alt="Forest" className="gallery-image" />
          <p >Product2</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Northern Lights" className="gallery-image" />
          <p >Product3</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Mountains" className="gallery-image" />
          <p >Product4</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Cinque Terre" className="gallery-image"/>
          <p >Product5</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Forest" className="gallery-image" />
          <p >Product6</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Northern Lights" className="gallery-image" />
          <p >Product7</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Mountains" className="gallery-image" />
          <p >Product8</p>
          <p>$10</p>
          </div>
        </div>

        <p className='header1'>Restaurant</p>
        <div class="scroll-container " >
        <div className='product'>
          <img src={img} alt="Cinque Terre" className="gallery-image"/>
          <div className='Dish_text'>
          <p >Restaurant1</p>
          <p>$10</p>
          </div>
          </div>
          <div className='product'>
          <img src={img} alt="Forest" className="gallery-image" />
          <p >Restaurant2</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Northern Lights" className="gallery-image" />
          <p >Restaurant3</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Mountains" className="gallery-image" />
          <p >Restaurant4</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Cinque Terre" className="gallery-image"/>
          <p >Restaurant5</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Forest" className="gallery-image" />
          <p >Restaurant6</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Northern Lights" className="gallery-image" />
          <p >Restaurant7</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Mountains" className="gallery-image" />
          <p >Restaurant8</p>
          <p>$10</p>
          </div>
          </div>
        

    </div>
  )
}

export default Veg