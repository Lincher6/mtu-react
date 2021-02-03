import React from "react";
import './Input.scss';

export const Input = (props) => {

    const {
        type = 'text',
        theme = 'light',
        variant = 'regular',
        placeholder,
        errorText, children, ...rest
    } = props;

    return (
        <div className={`input ${theme}`}>
            <input
                required
                type={type}
                id='input'
                {...rest}
                className={`${variant} ${errorText && 'error'}`}
            />
            <label htmlFor="input">
                {placeholder}
            </label>
            <span className={`errorText ${!errorText && 'hide'}`}>
                {errorText}
            </span>
        </div>
    )
}