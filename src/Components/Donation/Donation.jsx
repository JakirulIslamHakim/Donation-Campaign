import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';

const Donation = ({ donation }) => {
    // console.log(navigation)
    // console.log(donation)
    const { category, donation_img, title, id ,card_bg,text_color,btn_bg} = donation;
    const [addDonaton,setAddDonation] =useState([]);
    // console.log(card_bg,text_color,btn_bg);

    const handleAddDonation =(donation)=>{
        setAddDonation([...addDonaton,donation]);
    }
    return (
        <Link to={`/donations/${id}`}>
            <div onClick={()=>handleAddDonation(donation)} className={` bg-[${card_bg}] `}>
                <div>
                    <img className='w-full' src={donation_img} alt="" />
                </div>
                <div className={`p-4 text-[${text_color}] `}>
                    <p className={`my-5 `}><span className={`py-3 px-3 rounded-md font-semibold bg-[${btn_bg}]`}>{category}</span></p>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Donation;