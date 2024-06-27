import React from 'react';
import "../Styles/offers.css"
import Header from '../Components/layout/Header';
import chicken from "../Assets/chicken.jpg"
const offers = [
    {
        id: 1,
        image: chicken,
        title: '50% Off on All Pizzas',
        description: 'Get 50% off on all pizzas. Limited time offer!',
      },
      {
        id: 2,
        image: chicken,
        title: 'Buy 1 Get 1 Free',
        description: 'Buy one burger and get another one for free!',
      },
      {
        id: 3,
        image: chicken,
        title: '20% Off on First Order',
        description: 'Enjoy 20% off on your first order using our app.',
      },
      {
        id: 1,
        image: chicken,
        title: '50% Off on All Pizzas',
        description: 'Get 50% off on all pizzas. Limited time offer!',
      },
      {
        id: 1,
        image: chicken,
        title: '50% Off on All Pizzas',
        description: 'Get 50% off on all pizzas. Limited time offer!',
      },
      {
        id: 1,
        image: chicken,
        title: '50% Off on All Pizzas',
        description: 'Get 50% off on all pizzas. Limited time offer!',
      },
      {
        id: 1,
        image: chicken,
        title: '50% Off on All Pizzas',
        description: 'Get 50% off on all pizzas. Limited time offer!',
      },
      {
        id: 1,
        image: chicken,
        title: '50% Off on All Pizzas',
        description: 'Get 50% off on all pizzas. Limited time offer!',
      },
      
    ];
    
    const OffersPage = () => {
      return (
        <div>
          <Header />
          <div className="offers-container">
            {offers.map(offer => (
              <div className="offer-card" key={offer.id}>
                <img src={offer.image} alt={`Offer: ${offer.title}`} className="offer-image" />
                <div className="offer-details">
                  <h2 className="offer-title">{offer.title}</h2>
                  <p className="offer-description">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default OffersPage;