import React from 'react';
import st from './SuperButton.module.scss';
import {icons} from "./utils/icons.jsx";

const SuperButton = ({ text, icon, onClick, type, style, children }) => {
    const iconGenerate = icons(icon);

    return (
        <button
            type={type}
            className={`${st.button} ${!text ? st.noText : ''}`}
            onClick={onClick}
            style={style}
        >
            <span>{iconGenerate}</span>
            {text ? <p>{text}</p> : children}
        </button>
    );
};

export default SuperButton;
