import React, { useEffect, useState } from 'react';
import SelectedCard from './SelectedCard';
import DonationCard from '../../components/Card/DonationCard';

const Donation = () => {

    const[donations,setDonation]=useState([])
    const [noFound,setNofound]=useState(false)
    const [isShow,setIsShow]=useState(false)
      useEffect(()=>{

        const donationItems =JSON.parse(localStorage.getItem('donations'));
         
        if (donationItems ){
          setDonation(donationItems)
        }
        else {
          setNofound('No donation Found')
        }

      },[])

  return (
    <div>
      {noFound ? <p className='h-[80vh] flex justify-center items-center' >{noFound}</p>:
      <div className='container px-6 py-10 mx-auto justify-center content-center'>
        <div className='grid grid-cols-1 gap-4 mt-8  lg:grid-cols-2'>
          {
            isShow ?donations.map((card) =>(
              <SelectedCard key={card.id} card={card} ></SelectedCard> ))
              :donations.slice(0,4).map((card) =>(
                <SelectedCard key={card.id} card={card} ></SelectedCard> ))

          }
        </div>
        {
          donations.length > 4 &&         <button onClick={()=>setIsShow(!isShow)} className='px-5 bg-green-400 block mx-auto'>
          {isShow ? "See less" : "See more" }
          </button>
        }

        
        </div>}
    </div>
  );
};

export default Donation;