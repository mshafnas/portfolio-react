import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [active, setActive] = useState('About');

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