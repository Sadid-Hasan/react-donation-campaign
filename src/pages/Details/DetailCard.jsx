import React from 'react';
import Swal from 'sweetalert2';

const DetailCard = ({ detail }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg, description, price } = detail || {};

  const handleAddToDonation =()=>{

       const addedDonationArray =[] ;

    const donationItems =JSON.parse(localStorage.getItem('donations'))
    if(!donationItems){
        addedDonationArray.push(detail)
        localStorage.setItem('donations',JSON.stringify(addedDonationArray))
        Swal.fire(
            'Good job!',
            'Donation Done!',
            'success'
          )
    }
    else{
        addedDonationArray.push(...donationItems,detail)
        localStorage.setItem('donations',JSON.stringify(addedDonationArray))
        Swal.fire(
            'Good job!',
            'Donation Done!',
            'success'
          )
    }
  }













  const badgeStyle = {
    backgroundColor: category_bg || '#FFFFFF',
    color: text_button_bg || '#000000',
  };

  const titleStyle = {
    color: text_button_bg || '#000000',
  };
  

  return (
    <div>
      <div className="container px-6 py-10 mx-auto content-center">
        <div className="flex items-end overflow-hidden bg-contain  bg-no-repeat rounded-lg h-96" style={{ backgroundImage: `url(${picture})` }}>
          <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
            <button onClick={handleAddToDonation} className="btn btn-secondary">Donate {price}</button>
          </div>
        </div>
        <div>
        </div>
        <h2 style={titleStyle}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DetailCard;
