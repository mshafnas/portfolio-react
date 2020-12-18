import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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

    }, [active]);

    return (
        <div className="navbar">
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
                
            </div>
        </div>
    );
};

export default Navbar;