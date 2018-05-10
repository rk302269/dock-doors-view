import React from 'react'
import './styles/table.css'


const DockDoor=() => {
    return (
        <div>
             <table id="table" align="center">
                    <tbody>
                        <tr>
                            <th><a href='/addNewDoor'><button>Create a Door</button></a></th>
                            <th><a href='/getAllDoors'><button> Get All Doors</button></a></th>
                            
                        </tr>
            </tbody>
            </table>
            
       </div> 
    )
}

export default DockDoor