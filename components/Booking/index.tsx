
"use client";
import React, { useEffect, useState } from 'react';
import AutoCompleteAddress from './AutoCompleteAddress';

const Booking = () => {
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        // Only set the screen height in the browser
        setScreenHeight(window.innerHeight*0.75);
    }, []);

    return (
        <div className='p-5'>
            <h2 className='heading'>Booking</h2>
            <div className='border-[1px] p-5 rounded-lg' style={{ height: screenHeight }}>
                <AutoCompleteAddress />
            </div>
        </div>
    );
};

export default Booking;
