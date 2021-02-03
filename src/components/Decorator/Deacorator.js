import React from "react";
import './Decorator.css'

export const Decorator = ({ children }) => {
    return (
        <div className='decorator'>
            {children}
        </div>
    )
}