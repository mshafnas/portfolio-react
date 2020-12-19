import React from 'react';

// import components
import Skillcard from '../components/Skillcard';
import Feature from '../components/Feature';

// import images
import design from '../assets/images/design.png'
import developement from '../assets/images/develop.png'
import fast from '../assets/images/fast.png';
import responsive from '../assets/images/responsive.png';
import ux from '../assets/images/ux.png';
import dynamic from '../assets/images/dynamic.png';

// creating array of data
const skills = [
    {
        icon: design,
        title: "Web Design",
        desc:  "Design Attractive and High User Friendly Websites."
    },
    {
        icon: developement,
        title: "Web Development",
        desc:  "Develop High Secure and Dynamic Websites."
    }
];

const features = [
    {
        icon: fast,
        title: "Fast",
        desc:  "Less load time and lag free."
    },
    {
        icon: responsive,
        title: "Responsive",
        desc:  "Layouts will fit with any size of screen."
    },
    {
        icon: ux,
        title: "UX",
        desc:  "User friendly navigation."
    },
    {
        icon: dynamic,
        title: "Dynamic",
        desc:  "Make updates to website."
    }
];

const About = () => {
    return (
        <div className="about">
            <p className="text-justify about_intro">
                Hi, I'm a Web Developer from Sri Lanka, I've got a serious passion for creating stunning & high accessible websites.
                As a beginning, I started my journey as a freelance web developer. Then I joined a company as a web developer. I've done some projects
                for Vehicle, Rubber Industry, Catering Service and Educational Sector, and collaborated with talented people to create stunning websites.
            </p>

            <div className="container about_container">
                <h6 className="about_heading">What I Offer</h6>

                <div className="row">
                    {
                        // create multiple component using one
                        skills.map(skill => 
                            // pass property
                            <Skillcard skill={skill} />
                        )
                    }
                </div>
                <h6 className="feature_heading">Features</h6>
                <div className="row mt-2">

                    {
                        features.map(feature => 
                            <Feature feature={feature} />
                        )
                    }
                </div>

            </div>

        </div>
    );
}

export default About;