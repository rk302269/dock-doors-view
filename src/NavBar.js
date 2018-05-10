import React from 'react'
import logo from './images/TheHomeDepot.svg.png';
import './components/styles/App.css';
import './components/styles/table.css'

const NavBar=() => {
    return (
        <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>

        <table id="table" align="center">
                    <tbody>
                        <tr>
                            <th><a href='/'><button>Home</button></a></th>
                            <th><a href='/dockDoors'><button>Dock Doors</button></a></th>
                        </tr>
            </tbody>
            </table>
        
        
    </div> 
    )
}



export default NavBar