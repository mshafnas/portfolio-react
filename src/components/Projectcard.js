import React from 'react';

const Projectcard = ({project: {image,title,desc,icon,link,btn_text}}) =>
    <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="card shadow">
            <img src={image} className="card-img-top" alt="shafnas-projects"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={link} target="_blank" className="btn btn-primary btn-block" rel="noopener noreferrer"><i className={icon}></i>{btn_text}</a>
            </div>
        </div>
    </div>

export default Projectcard;