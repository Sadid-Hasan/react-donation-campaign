import React from 'react';
import DonationCard from './DonationCard';

const Cards = ({cards}) => {
        


    return (
        <div>
            <div className='grid grid-cols-1 gap-10 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-4 m-10'>
            {
                cards?.map(card=><DonationCard key={card.id} card={card}></DonationCard>)
            }
        </div>
        </div>
        
    );
};

export default Cards;