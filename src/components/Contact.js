import React from 'react';

// import images
import contact from '../assets/images/contact.png';

const Contact = () => {
    return (
        <div className="container contact">
            <div className="contact-card">
                <div className="col-lg-4 col-md-4 col-sm-4 d-none d-md-block">
                    <img src={contact} className="contact-img"/>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12">
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name..." required/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter your email address..." required/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea cols="30" rows="10" className="form-control" placeholder="Write your message..." required></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Send" className="btn btn-primary btn-block" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;