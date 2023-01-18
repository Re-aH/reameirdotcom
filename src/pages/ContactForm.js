// import React, { useState } from 'react';
import { Helmet } from "react-helmet";

function ContactForm() {
    /*
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // submit formData to backend, etc.
    };
*/
    return (
        <form action="https://formsubmit.co/8f7c35f0c352b054e97b572a83e82de9"
            method="POST" className='contactForm'
        // onSubmit={onSubmit}
        >
            <Helmet>
                <title>Rea Meir</title>
                <meta name="description" content="Contact Rea Meir - Saxophonist, Composer for Film&Media, Ewi player and Web developer." />
            </Helmet>
            <div className='contactName'>
                <label className="contactLable" htmlFor="name">Name:     </label>
                <input type="text" name="name"
                // value={name} onChange={onChange}
                />
            </div>
            <div className='contactMail'>
                <label className="contactLable" htmlFor="email">Email:   </label>
                <input type="email" name="email"
                // value={email} onChange={onChange}
                />
            </div >
            <div className='contactMsg'>
                <label className="contactLable" htmlFor="message">Message:  </label>
                <textarea name="message"
                // value={message} onChange={onChange} 
                />
            </div>
            <input type="hidden" name="_captcha" value="false" />
            {/* insert thank you page link */}
            {/* <input type="hidden" name="_next" value="https://reameir.com/thankyou.html"></input> */}
            <button className="contactBtn" type="submit">Submit</button>
        </form>
    );
}

export default ContactForm