import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';

const Donations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-5 my-10'>
            {donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)}
        </div>
    );
};

export default Donations;