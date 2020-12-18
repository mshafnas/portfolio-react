import React from 'react';

// import components
import Skillcard from '../components/Skillcard';

// import images
import design from '../assets/images/design.png'
import developement from '../assets/images/develop.png'

// creating array of data
const skills = [
    {
        icon: design,
        title: "lorem op",
        desc:  "loersdsada"
    },
    {
        icon: developement,
        title: "lorem op",
        desc:  "loersdsada"
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

            </div>

        </div>
    );
}

export default About;