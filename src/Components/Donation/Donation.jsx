import React, { useState } from 'react';
import { Link, useNavigation } from 'react-router-dom';

const Donation = ({ donation }) => {
    const navigation = useNavigation()
    // console.log(navigation)
    // console.log(donation)
    const { category, donation_img, title, id } = donation;
    const [addDonaton,setAddDonation] =useState([]);
    console.log(addDonaton);

    const handleAddDonation =(donation)=>{
        setAddDonation([...addDonaton,donation]);
    }
    return (
        <Link >
            <div onClick={()=>handleAddDonation(donation)} className='border-4'>
                <div>
                    <img className='w-full' src={donation_img} alt="" />
                </div>
                <div className='p-4'>
                    <p className='my-5 '><span className='py-3 px-3 rounded-md font-semibold bg-gray-400'>{category}</span></p>
                    <h2 className='text-xl font-semibold'>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Donation;