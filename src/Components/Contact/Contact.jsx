import React from 'react';

const Contact = () => {
    return (
        <div className='bg-black text-neutral-content py-28'>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 pb-2">
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

            <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-5">
                <div>
                    <header className="text-3xl font-bold pb-2">Follow Us</header>
                    <ul>
                        <li className="link link-hover">Facebook</li>
                        <li className="link link-hover">Instagram</li>
                        <li className="link link-hover">TripAdvisor</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-4">Opening Hours</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <header className="footer-title">Lunch Time</header>
                            <ul>
                                <li className="link link-hover">Monday to Sunday</li>
                                <li className="link link-hover">10.30am-3:00pm</li>
                            </ul>
                        </div>
                        <div>
                            <header className="footer-title">Dinner Time</header>
                            <ul>
                                <li className="link link-hover">Monday to Sunday</li>
                                <li className="link link-hover">5.30am-11:00pm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;