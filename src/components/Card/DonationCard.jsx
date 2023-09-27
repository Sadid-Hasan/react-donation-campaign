import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({card}) => {
    const { id, picture, title, category,category_bg,card_bg,text_button_bg, description,price } = card || {};
    const cardStyle = {
        backgroundColor: card_bg || '#FFFFFF', 
      };
      const badgeStyle = {
        backgroundColor: category_bg || '#FFFFFF', 
        color: text_button_bg || '#000000'
      };
    
      const titleStyle = {
        color: text_button_bg || '#000000',
      };
    
    return (
          <Link to ={`/details/${id}`}>
        <div className="card w-96 shadow-xl" style={cardStyle}>
            <figure>
                <img  className="w-full object-cover" src={picture} alt="Donation" /> 
            </figure>
                <div className="card-body">
                     <div className="badge rounded-md" style={badgeStyle} >{category}</div>
                    <h2 className="card-title" style={titleStyle}>{title}</h2>
                </div>
        </div>
        </Link>  
    );
};

export default DonationCard;