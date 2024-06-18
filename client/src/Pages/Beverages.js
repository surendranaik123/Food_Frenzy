import React from 'react'
import Header from '../Components/layout/Header'
import img from "../Assets/image.png";
import "../Styles/Beverages.css"

function Veg() {
  return (
    <div>
        <Header/>
        <h1 className='header'>Berverages</h1>
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

        <p className='header1'>Top Selling</p>
        <div class="scroll-container " >
        <div className='product'>
          <img src={img} alt="Cinque Terre" className="gallery-image"/>
          <div className='Dish_text'>
          <p >Company1</p>
          <p>$10</p>
          </div>
          </div>
          <div className='product'>
          <img src={img} alt="Forest" className="gallery-image" />
          <p >Company2</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Northern Lights" className="gallery-image" />
          <p >Company3</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Mountains" className="gallery-image" />
          <p >Company4</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Cinque Terre" className="gallery-image"/>
          <p >Company5</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Forest" className="gallery-image" />
          <p >Company6</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Northern Lights" className="gallery-image" />
          <p >Company7</p>
          <p>$10</p>
          </div>
          <div className='product'>
          <img src={img} alt="Mountains" className="gallery-image" />
          <p >Company8</p>
          <p>$10</p>
          </div>
          </div>
        

    </div>
  )
}

export default Veg