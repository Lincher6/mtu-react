import React from "react";
import './Button.scss';

export const Button = (props) => {
    const {
        type = 'contained',
        color = 'primary',
        disabled = false,
        onCLick, children, ...rest
    } = props

    return (
        <button
            className={`button ${color} ${type}`}
            disabled={disabled}
            onClick={onCLick}
            {...rest}
        >
            {children}
        </button>
    )
}