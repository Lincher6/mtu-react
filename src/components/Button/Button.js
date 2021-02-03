import React from "react";
import './Button.scss';

export const Button = (props) => {
    const {
        type = 'contained',
        color = 'primary',
        size = 'large',
        disabled = false,
        onCLick, children, ...rest
    } = props

    return (
        <button
            className={`button ${color} ${type} ${size}`}
            disabled={disabled}
            onClick={onCLick}
            {...rest}
        >
            {children}
        </button>
    )
}