// imports
import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

// css
import '../css/header.css'

const Header = (props) => {
    const {headerText,headerButtonText,headerButtonVisible, onSubmit}=props;

    useEffect(() => {

    }, [])

    return (
        <div className="app-header">
            <div className="header-text">
                {headerText}
            </div>
            <div className="header-btn">
            {
                headerButtonVisible ?
                    <button className="btn-new-pirate" onClick={onSubmit}>{headerButtonText}</button>
                    : null
            }
            </div>

        </div>
    )
}
export default Header;
