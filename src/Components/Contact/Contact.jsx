import React from 'react';

const Contact = () => {
    return (
        <div className='bg-black text-neutral-content'>
            <div className="grid grid-cols-1 md:grid-cols-2 p-10">
                <div>
                    <h2 className='text-3xl font-semibold'>Contact</h2>
                    <p>732/21 Second Street, Manchester</p>
                    <p>Kingston United Kingdom</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold">T: +65 (0)76-890-214</h2>
                    <h2 className="text-3xl font-semibold">E: bookings@wilma.co.uk</h2>                    
                </div>
            </div>
            <footer className="footer p-10 text-neutral-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>

    );
};

export default Contact;