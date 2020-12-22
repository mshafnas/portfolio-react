import React from 'react';
    

// import components
import Projectcard from '../components/Projectcard';

// import images 
import kaneda from '../assets/images/kaneda.png';
import covid from '../assets/images/covid.png';
import digital from '../assets/images/digital.png';
import buy from '../assets/images/buy.png';
import toonyfy from '../assets/images/toonyfy.png';
import radient from '../assets/images/radient.png';

const projects = [
    {
        image: kaneda,
        title: 'Kaneda Shokai',
        desc: 'Technologies used: Laravel, HTML5, CSS3, JQuery, AJAX',
        icon: 'fas fa-eye icon mr-1',
        link: 'https://kanedashokai.com/',
        btn_text: 'View'
    },
    {
        image: covid,
        title: 'COVID-19 Tracker',
        desc: 'Technologies used: React JS, HTML5, CSS3, REST API',
        icon: 'fas fa-eye icon mr-1',
        link: 'https://mshafnas.github.io/covid-19-tracker/',
        btn_text: 'View'
    },
    {
        image: radient,
        title: 'Radient Traders',
        desc: 'Technologies used: PHP, HTML5, CSS3, JQuery, AJAX',
        icon: 'fas fa-eye icon mr-1',
        link: 'https://radient.com/',
        btn_text: 'View'
    },
    {
        image: digital,
        title: 'Digital Marketing',
        desc: 'Technologies used: HTML5, CSS3, JQuery',
        icon: 'fab fa-github icon mr-1',
        link: 'https://github.com/mshafnas/quadrate',
        btn_text: 'GitHub'
    },
    {
        image: buy,
        title: 'Buy-U-Coin',
        desc: 'Technologies used: HTML5, CSS3, JQuery',
        icon: 'fab fa-github icon mr-1',
        link: 'https://github.com/mshafnas/buyUCoin',
        btn_text: 'GitHub'
    },
    {
        image: toonyfy,
        title: 'Toonofy',
        desc: 'Technologies used: HTML5, CSS3, JQuery',
        icon: 'fab fa-github icon mr-1',
        link: 'https://github.com/mshafnas/toonofy',
        btn_text: 'GitHub'
    }    
];


const Projects = () => {
    return (
        <div className="container projects">
            <div className="row">
                {
                    projects.map(project =>
                        <Projectcard project={project} />

                    )
                }
            </div>
        </div>
    );
}

export default Projects;