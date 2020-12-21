import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

// import avatar
import avatar from '../assets/images/shafnas-avatar.png';
// import resume
import resume from '../assets/images/resume.pdf';

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:mshafnas125@gmail.com");
    }

    const sidebar_variant = {
        hidden: {
            x: '-20vw',
            
        },

        visible: {
            x: 0,
            transition: {
                delay: 0.1, duration:0.5, type: "spring"
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants = {sidebar_variant}
            initial = 'hidden'
            animate = 'visible' 
        >
            <img src={avatar} alt="shafnas avatar" className="sidebar_avatar"/>
            <div className="sidebar_name"> Mohamed <span>Shafnas</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <div className="sidebar_item">
                <a className="btn btn-primary text-light" href={resume} download="resume.pdf"><i class="fab fa-black-tie"></i> Download Resume</a>
            </div>
            <div className="sidebar_social-icons mt-5 mb-3">
                <a href="" className="mr-3"><i className="fab fa-2x fa-github black"></i></a>
                <a href="" className="mr-3"><i className="fab fa-2x fa-linkedin-in light-blue"></i></a>
                <a href="" className="mr-3"><i className="fab fa-2x fa-facebook blue"></i></a>
                <a href="tel::+94770048000"><i className="fab fa-2x fa-whatsapp green"></i></a>
            </div>
            <div className="sidebar_contact">
                <div className="sidebar_item"><i class="fas fa-envelope light-blue"></i> mshafnas125@gmail.com</div>
                <div className="sidebar_item"><i class="fab fa-whatsapp light-blue"></i> +94770048000</div>
                <div className="sidebar_item"><i class="fas fa-map-pin light-blue"></i> Akurana, Sri Lanka</div>
            </div>
            <div className="sidebar_item sidebar_email" onClick={handleEmailMe}>Email me!..</div>
        </motion.div>
    );
}

export default Sidebar;