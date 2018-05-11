import React from 'react'
import './styles/table.css'


const DockDoor=() => {
    return (
        <div>
            <div>
                </div>
                <div>
             <table id="table" align="center">
                    <tbody>
                        <tr>
                            <th><a href='/addNewDoor'><button id="button1">Create a Door</button></a></th>
                            <th><a href='/getAllDoors'><button id="button1"> Get All Doors</button></a></th> 
                        </tr>
            </tbody>
            </table>
            </div>
       </div> 
    )
}

export default DockDoor