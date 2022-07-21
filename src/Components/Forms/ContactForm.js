import React from 'react';
import { onSubmit } from './util';



function ContactForm(props) {
    const handleSubmit = onSubmit((values) => {        
        console.log('submitting', values);
      });

    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="w-[90%] mx-auto flex flex-col justify-center p-5 items-center rounded-2xl my-36 bg-gray-400  md:w-[50%] lg:w-[30%]">

                <div className="input-group h-14">
                    <input type="text" id="name" name='name' required className="input h-full focus:ring-[#fdae5c]" />
                    <label htmlFor="Name" className="input-label">Name</label>
                </div>

                <div className="input-group h-14">
                    <input type="email" id="email" name='email' required className="input h-full focus:ring-[#fdae5c]" />
                    <label htmlFor="Email" className="input-label">Email Adress</label>
                </div>

                <div className="input-group h-14">
                    <input type="phonenumber" id="phone_number" name='phonenumber' required className="input h-full focus:ring-[#fdae5c]" />
                    <label htmlFor="PhoneNumber" className="input-label">Phone Number</label>
                </div>

                <div className="input-group h-32">
                    <textarea name="message" id="message" className="input h-full resize-none focus:ring-[#fdae5c]" ></textarea>
                    <label htmlFor="Message" className="input-label">Message</label>
                </div>

                <div className="input-group h-12 bg-[#fdae5c] p-2 text-center rounded-md cursor-pointer">
                    <button type="submit" className="bg-[#fdae5c] h h-full text text-white font-medium text-base cursor-pointer">Submit</button>
                </div>

            </div>

        </form>
    );
}

export default ContactForm;