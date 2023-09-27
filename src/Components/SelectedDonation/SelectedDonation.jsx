import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDonation } from '../ulility/localStorege';
import ShowSelectedDonation from '../ShowSelectedDonation/ShowSelectedDonation';

const SelectedDonation = () => {
    const [selectedDonations, setSelectedDonation] = useState([]);
    const [showAll, setShowAll] = useState(4);
    const donations = useLoaderData();


    useEffect(() => {
        const donationID = getDonation();
        const completeDonation = donations.filter(donation => donationID.includes(donation.id));
        setSelectedDonation(completeDonation)
    }, [])



    return (
        <div>
            <div className='md:grid grid-cols-2 gap-6'>
                {
                    selectedDonations.slice(0, showAll).map(selectedDonation => <ShowSelectedDonation key={selectedDonation.id} selectedDonation={selectedDonation}></ShowSelectedDonation>)
                }
            </div>
            <div className={`text-center my-5 ${showAll === selectedDonations.length && 'hidden'}`}>
                <button onClick={() => setShowAll(selectedDonations.length)} className='btn justify-center bg-[#009444] hover:bg-[#009444] '>show all</button>
            </div>
        </div>
    );
};

export default SelectedDonation;