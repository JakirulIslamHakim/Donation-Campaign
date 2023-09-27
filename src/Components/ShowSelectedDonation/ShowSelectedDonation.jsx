import React from 'react';

const ShowSelectedDonation = ({ selectedDonation }) => {
    const { donation_img, title, category, price ,card_bg,text_color,btn_bg} = selectedDonation;
    return (
        <div className={`flex gap-5  bg-[${card_bg}] `}>
            <div>
                <img src={donation_img} alt="" />
            </div>
            <div className='my-7 '>
                <div className='mb-7 space-y-2'>
                    <p><span className={`px-2 py-1 border text-[${text_color}]`}>{category}</span></p>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <p className={`text-[${text_color}]`}>${price}</p>
                </div>
                <button className={`bg-[${text_color}] px-4 py-2 text-white rounded-lg font-semibold`}>View Details</button>
            </div>
        </div>
    );
};

export default ShowSelectedDonation;