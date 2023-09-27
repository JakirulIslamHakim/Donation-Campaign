const getDonation = ()=>{
    const StoredItem = localStorage.getItem('Donation');
    if(StoredItem){
        return JSON.parse(StoredItem);
    }
    return [];
}

const savedDonation  = id => {
    const donation = getDonation();
    const exists = donation.find(donationId => donationId === id)
    if(!exists){
        donation.push(id)
        localStorage.setItem('Donation',JSON.stringify(donation))
    }
}

export {getDonation,savedDonation}