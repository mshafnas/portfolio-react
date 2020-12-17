import React from 'react';

// import avatar
import avatar from '../assets/images/shafnas-avatar.png';
// import resume
import resume from '../assets/images/resume.pdf';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:mshafnas125@gmail.com");
    }
    return (
        <div className="sidebar">
            <img src={avatar} alt="shafnas avatar" className="sidebar_avatar"/>
            <div className="sidebar_name"> Mohamed <span>Shafnas</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <div className="sidebar_item">
                <a className="btn btn-primary" href={resume} download="resume.pdf"><i class="fab fa-black-tie"></i> Download Resume</a>
            </div>
            <div className="sidebar_social-icons mt-5 mb-3">
                <a href="" className="mr-3"><i className="fab fa-2x fa-github black"></i></a>
                <a href="" className="mr-3"><i className="fab fa-2x fa-linkedin-in light-blue"></i></a>
                <a href="" className="mr-3"><i className="fab fa-2x fa-facebook blue"></i></a>
                <a href="tel::+94770048000"><i className="fab fa-2x fa-whatsapp green"></i></a>
            </div>
            <div className="sidebar_contact">
                <div className="sidebar_item"><i class="fas fa-envelope green"></i> mshafnas125@gmail.com</div>
                <div className="sidebar_item"><i class="fab fa-whatsapp green"></i>&nbsp;<i className="fab fa-viber green"></i>&nbsp;<i className="fas fa-phone green"></i> +94770048000</div>
                <div className="sidebar_item"><i class="fas fa-map-pin green"></i> Akurana, Sri Lanka</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email me!..</div>
        </div>
    );
}

export default Sidebar;