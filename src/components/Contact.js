import React from 'react';
import emailjs from 'emailjs-com';

// import images
import contact from '../assets/images/contact.png';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_d4zbi7i', 'template_p7xsytb', e.target, 'user_HidN2H3qrpZF1zdrd1Ni7')
        .then((result) => {
            if (result.text === 'OK') {
                alert('Thanks for contacting me. I will reach to you soon....');
            }
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div className="container contact">
            <div className="contact-card">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 d-none d-md-block">
                        <img src={contact} className="contact-img" alt="shafnas-contact" />
                    </div>

                    <div className="col-lg-6 offset-lg-2 col-md-6 col-sm-12">
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" className="form-control" placeholder="Enter your name..." required/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email address..." required/>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea cols="30" rows="10" name="message" className="form-control" placeholder="Write your message..." required></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send" className="btn btn-primary btn-block" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;