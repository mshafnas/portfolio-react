import React from 'react';

const Bar = ({value: {icon,title,level}}) => {
    // change width dynamically based on level
    const bar_width = `${level}%`;
    
    return (
        <div className="bar">
            <div className="bar_wrapper" style={{'width': bar_width}}>
                <span className="bar_name">
                    <i className={icon}></i> {title}
                </span>
            </div>
        </div>
    )
}
export default Bar;