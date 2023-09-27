import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { savedDonation } from '../ulility/localStorege';

const DonationsDetails = () => {
    const AllCategoryJobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const selectedJobs = AllCategoryJobs.find(job => job.id === idInt);

    const { donation_img, description, price, text_color, title } = selectedJobs;
    // console.log(text_color)

    const handleAddDonation = () => {
            savedDonation(idInt);
            alert('added successfully')
    }

    return (
        <div className='my-7 w-3/4 mx-auto'>
            <div className='relative'>
                <div>
                    <img className='w-full ' src={donation_img} alt="" />
                </div>
                <div className='absolute -mt-24 ml-7'>
                    <button onClick={handleAddDonation} className={`bg-[${text_color}] px-6 py-4 rounded-lg text-xl text-white font-semibold`} >Donate ${price}</button>
                </div>
            </div>
            <div className='mt-14'>
                <h4 className='text-5xl font-bold'>{title}</h4>
                <p className='mt-6 text-justify'>{description}</p>
            </div>
        </div>
    );
};

export default DonationsDetails;