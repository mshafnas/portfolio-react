import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Navbar = () => {

    const [active, setActive] = useState('About');

    // fire a function based on url
    useEffect(() => {
        // get the current url
        let currentURL = window.location.href;

        if (currentURL.endsWith('/')) {
            setActive('About');
        }
        else if (currentURL.endsWith('/resume')) {
            setActive('Resume');
        }
        else if (currentURL.endsWith('/projects')) {
            setActive('Projects');
        }
        else if (currentURL.endsWith('/contact')) {
            setActive('Contact');
        }

    }, [active]);

    const navbar_variant = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },

        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration:0.7, type: "spring"
            }

        }
    }

    return (
        <motion.div className="navbar"
            variants={navbar_variant}
            initial= 'hidden'
            animate='visible'
        >
            <div className="navbar_active">
                {active}
            </div>
            <div className="navbar_items">
                {/* write conditions */}
                {/* show about if the active state is not equal to about */}
                {
                    active !== 'About' && 
                    <Link to="/">
                        <div className="navbar_item" onClick={()=>setActive('About')}>About</div>
                    </Link>
                }
                
                {/* show resume if the active state is not equal to resume */}
                {
                    active !== 'Resume' && 
                    <Link to="/resume">
                        <div className="navbar_item" onClick={()=>setActive('Resume')}>Resume</div>
                    </Link>
                }
                
                {/* show projects if the active state is not equal to projects */}
                {
                    active !== 'Projects' && 
                    <Link to="/projects">
                        <div className="navbar_item" onClick={()=>setActive('Projects')}>Projects</div>
                    </Link>
                }
                {/* show contact if the active state is not equal to contact */}
                {
                    active !== 'Contact' && 
                    <Link to="/contact">
                        <div className="navbar_item" onClick={()=>setActive('Contact')}>Contacts</div>
                    </Link>
                }
            </div>
        </motion.div>
    );
};

export default Navbar;