// import React, { useState } from 'react';
import { Helmet } from "react-helmet";

function ContactForm() {


    return (
        <form action="https://formsubmit.co/8f7c35f0c352b054e97b572a83e82de9"
            method="POST" className='contactForm'
        // onSubmit={onSubmit} 
        >
            <Helmet>
                <title>Rea Meir</title>
                <meta name="description" content="Contact Rea Meir - Saxophonist, Composer for Film&Media, Ewi player and Web developer." />
            </Helmet>
            <div className="contactLets">Let's talk</div>
            <div className="byMail">Write here or mail to <a href="mailto:rea.meir@gmail.com" className="green">rea.meir@gmail.com</a></div>
            <div className='contactName'>
                <label className="contactLable" htmlFor="name">Name:     </label>
                <input type="text" name="name" className="contactInput"
                // value={name} onChange={onChange}
                />
            </div>
            <div className='contactMail'>
                <label className="contactLable" htmlFor="email">Email:   </label>
                <input type="email" name="email" className="contactInput"
                // value={email} onChange={onChange}
                />
            </div >
            <div className='contactMsg'>
                <label className="contactLable" htmlFor="message">Message:  </label>
                <textarea name="message" className="contactInput"
                // value={message} onChange={onChange} 
                />
            </div>
            <input type="hidden" name="_captcha" value="false" />
            {/* insert thank you page link */}
            <input type="hidden" name="_next" value="https://reameir.com/thankyou"></input>
            <button className="contactBtn" type="submit">Send</button>
        </form>
    );
}

export default ContactForm