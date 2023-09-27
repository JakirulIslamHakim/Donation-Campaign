import React from 'react';

const ShowSelectedDonation = ({ selectedDonation }) => {
    const { donation_img, title, category, price } = selectedDonation;
    return (
        <div className='flex gap-5 border-4'>
            <div>
                <img src={donation_img} alt="" />
            </div>
            <div className='my-7 '>
                <div className='mb-7 space-y-2'>
                    <p><span className='px-2 py-1 border'>{category}</span></p>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <p>${price}</p>
                </div>
                <button className='btn'>View Details</button>
            </div>
        </div>
    );
};

export default ShowSelectedDonation;