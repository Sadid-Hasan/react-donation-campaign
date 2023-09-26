import React from 'react';
import DonationCard from './DonationCard';
import { Link } from 'react-router-dom';


const Cards = ({ cards }) => {
    return (
      <div className=''>
        <div className=' grid grid-cols-1 gap-10 mt-8 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:ml-12'>
          {cards?.map((card) => (
              <DonationCard card={card}></DonationCard>
          ))}
        </div>
      </div>
    );
  };

export default Cards;