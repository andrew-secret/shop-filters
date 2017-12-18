import React from 'react';
import classNames from 'classnames';

import './Button.css'   

const Button = ({
    type,
    onClick,
    label,
    className
}) => {

    const buttonClasses = classNames(['buttonStyle'], className);

    return(
        <button 
        className={buttonClasses}
        type={type}
        onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;