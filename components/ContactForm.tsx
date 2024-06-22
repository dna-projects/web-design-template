'use client'

import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        findUs: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='self-center w-full max-w-[550px] lg:w-1/2'>
            <div className='font-semibold tracking-wider'>CONTACT</div>
            <h2 className='text-[33px] font-extrabold mb-5 xl:text-[45px]'>Get in Touch</h2>
            <p className='text-neutral-600 mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                    <div>
                        <label htmlFor='name' className='block font-bold mb-2'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full px-4 py-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:ring-1 focus:ring-primary'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block font-bold mb-2'>
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full px-4 py-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                            required
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-5'>
                    <div>
                        <label htmlFor='phone' className='block font-bold mb-2'>
                            Phone
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            placeholder='Phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='w-full px-4 py-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>
                    <div>
                        <label htmlFor='findUs' className='block font-bold mb-2'>
                            How Did You Find Us
                        </label>
                        <input
                            type='text'
                            id='findUs'
                            name='findUs'
                            placeholder='How did you find us?'
                            value={formData.findUs}
                            onChange={handleChange}
                            className='w-full px-4 py-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor='message' className='block font-bold mb-2'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Write message...'
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full px-4 py-4 border border-gray-300 font-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'
                        // rows='4'
                        required
                    />
                </div>

                {/* Submit button */}
                <button
                    type='submit'
                    className='border-2 border-primary bg-primary font-bold w-full mt-7 py-3 hover:bg-white hover:border-primary duration-200'
                >
                    SUBMIT MESSAGE
                </button>

            </form>
        </div>
    );
};
