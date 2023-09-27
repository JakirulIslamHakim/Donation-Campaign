import React from 'react';
import Home from '../Home/Home';
import Donations from '../Donations/Donations';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto my-8'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;