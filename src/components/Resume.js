import React from 'react';

const languages = [
    {
        icon:'fas fa-code icon',
        title:'HTML',
        level:'97'
    },
    {
        icon:'fab fa-php icon',
        title:'PHP',
        level:'96'
    },
    {
        icon:'fab fa-laravel icon',
        title:'Laravel',
        level:'89'
    },
    {
        icon:'fab fa-css3 icon',
        title:'CSS',
        level:'79'
    },
    {
        icon:'fab fa-js icon',
        title:'JavaScript',
        level:'75'
    },
    {
        icon:'fab fa-vuejs icon',
        title:'Vue JS',
        level:'69'
    },
    {
        icon:'fab fa-react icon',
        title:'React JS',
        level:'55'
    }
];

const tools = [
    {
        icon: 'fab fa-githhub icon',
        title: 'Git',
        level: '75',
    },
    {
        icon: 'fas fa-image icon',
        title: 'Photoshop',
        level: '68',
    }
];

const Resume = () => {
    return (
        <div className="conatiner resume">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 resume-card">
                    <h4 className="resume-card_heading">Work Experience</h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title"><i className="fas fa-briefcase"></i> Web Developer</h5>
                        <p className="resume-card_desc"><i className="fas fa-building"></i> VInnovate Technologies</p>
                        <p className="resume-card_desc"><i className="fas fa-calendar-alt"></i> 2020-09-15 to Date</p>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 resume-card">
                    <h4 className="resume-card_heading">Education</h4>
                    <div className="resume-card_body">
                        <h5 className="resume-card_title"><i className="fas fa-graduation-cap"></i> BSc (Hons) Software Engineering (First Class Hounrs)</h5>
                        <p className="resume-card_desc"><i className="fas fa-school"></i> VInnovate Technologies</p>
                        <p className="resume-card_desc"><i className="fas fa-calendar-alt"></i> 2019-09-27 to 2020-06-30</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h5 className="resume-language_heading">Language and Frameworks</h5>
                    <div className="resume-language_body">
                        {
                            languages.map(language =>
                                <Bar language={language} />
                            )
                        }
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h5 className="resume-tool_heading">Tools and Softwares</h5>
                    <div className="resume-tool_body">
                        {
                            tools.map(tool =>
                                <Tool tool={tool} />
                            )
                        }
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Resume;