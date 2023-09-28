import React from 'react';

const ContactForm = () => {
    return (
        <div className="p-10 bg-black text-white">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="mr-4">
                    <h1>Get in touch</h1>
                    <p>
                        If you have questions or comments, please get a hold of us in whichever way is most convenient. Ask away. There is no reasonable question that our team can not answer. <br />

                        Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave doop vlaborum.
                    </p>
                </div>
                <div className='col-span-2 px-8'>
                    <form>
                        <div className='pb-4'>
                            <label for="name">Your name</label>
                            <input type="text" name='name' 
                                class="form-input 
                                px-5 py-3 w-full 
                                rounded-sm border-2 border-white 
                                bg-transparent" 
                            />
                        </div>
                        <div className='mb-4'>
                            <label for="email">Your email</label>
                            <input type="email" name='email' 
                                class="form-input 
                                px-5 py-3 w-full 
                                rounded-sm border-2 border-white 
                                bg-transparent" 
                            />
                        </div>
                        <div className='pb-3'>
                            <label for="message">Your message (optional)</label>
                            <textarea 
                                cols="5" 
                                rows="3"
                                name='message' 
                                class="form-input
                                px-5 py-3 w-full 
                                rounded-sm border-2
                                border-white 
                                bg-transparent"
                            />
                        </div>
                        <button className="btn btn-success text-white">Submit</button>
                       
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default ContactForm;