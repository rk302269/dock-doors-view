import React from 'react'
import logo from './images/TheHomeDepot.svg.png';
import './components/styles/App.css';
import './components/styles/table.css';
import './components/styles/button.css'

const NavBar=() => {
    return (
        <div>
        <header className="App-header">

        <table align="center">
                        <tbody>
                            <tr>
                                <th> <img src={logo} className="App-logo" alt="logo"/></th>
                                <th><h1>One Supply Chain</h1></th>
                            </tr>
                        </tbody>
                    </table>
        
        </header>

        <header className="App-subheader">
                <div>
                    <table align="left">
                        <tbody>
                            <tr>
                                <th><a href='/'><button id="buttonhome">Home</button></a></th>
                                <th><a href='/dockDoors'><button id="buttonhome">Dock Doors</button></a></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </header>
       
    </div> 
    )
}



export default NavBar