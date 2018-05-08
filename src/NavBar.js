import React from 'react'
import logo from './images/TheHomeDepot.svg.png';
import './styles/App.css';

const NavBar=() => {
    return (
        <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <a href='/'>
        <button>Home</button></a>
        <a href='/dockDoors'>
        <button>Dock Doors</button></a>
    </div> 
    )
}

export default NavBar