import './Header.css';
import React from 'react';

function Header(){
    return(
        <header className="header">
            <h1>Adivina el número</h1>
            <img src="/img/logo-aidivina.png" alt="logo"/>
        </header>
    );
}

export default Header;