import React from 'react';
import bgImg from './../../../public/media/banner-1.jpg';
const ContactBanner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImg})`}}>
            <div className='text-center py-28 text-white'>
                <p className="text-2xl indent-">FIND US</p>
                <h1 className="text-8xl font-bold">Contact</h1>
            </div>
        </div>
    );
};

export default ContactBanner;