import React from 'react';
import "../styles/wrapper.css";

function wrapper ({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default wrapper;