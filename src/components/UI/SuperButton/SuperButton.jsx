import React from 'react';
import st from './SuperButton.module.scss'
import {icons} from "./utils/icons.jsx";

const SuperButton = ({text, icon, onClick, type}) => {

    const iconGenerate = icons(icon)

    return (
        <button type={type} className={`${st.button} ${!text ? st.noText : ''}`} onClick={onClick}>
            <span>{iconGenerate}</span>
            <p>{text}</p>
        </button>
    );
};

export default SuperButton;