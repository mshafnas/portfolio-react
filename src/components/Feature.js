import React from 'react';

const Feature = ({feature: {icon,title,desc}}) =>
    <div className="col-lg-3 col-md-3 col-sm-6">
        <div className="feature-card bg-white shadow">
            <img src={icon} alt="shafnas-development-feature-icon" className="feature-card_icon"/>
            <div className="feature-card-body">
                <h6 className="feature-card_title">{title}</h6>
                <p className="feature-card_text">{desc}</p>
            </div>
        </div>
    </div>

export default Feature;