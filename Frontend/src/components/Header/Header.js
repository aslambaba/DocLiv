import React from 'react';
import './Header.css';
import AuthModal from '../AuthModal';

export const Header = () => {
    return (
        <nav className='header'>
            <div className='header__logo'>
                <h1>DocLiv</h1>
            </div>
            <AuthModal text_color="white" />
        </nav>
    )
}
