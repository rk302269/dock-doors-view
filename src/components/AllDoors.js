import React, { Component } from 'react';
import axios from 'axios'
import './styles/door.css'



class AllDoors extends Component {

    state = {
        doors: []
    }

    getAllDoors = () => {
                 axios.get('http://localhost:8080/api/getAllDoors')
                 .then(response => {
                     const doors = response.data
                     this.setState({doors})
                 })
    }

    componentWillMount = () => {
        this.getAllDoors()
    }

    render() {
        
        return (
            <div>
             
                <table id="doors" align="center">
                    <tbody>
                        <tr>
                            <th>Door ID</th>
                            <th>Door Name</th>
                            
                        </tr>
                                {this.state.doors.map((door,i) => {
                                    return (<tr>
                                                <td>{door.doorId}</td>
                                                <td>{door.doorName}</td>
                                            </tr>)
                                })
                                }  
                    </tbody>   
                </table>
            </div>
        );
    }
}

export default AllDoors;
