import React from 'react';

const Skillcard = ({skill: {icon,title,desc}}) =>
    <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="skill-card bg-white shadow">
            <img src={icon} alt="shafnas-development" className="skill-card_icon" />
            <div className="skill-card-body">
                <h6 className="skill-card_title">{title}</h6>
                <p className="skill-card_text">{desc}</p>
            </div>

        </div>
    </div>


export default Skillcard;