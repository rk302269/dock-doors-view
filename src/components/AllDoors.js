import React, { Component } from 'react';
import axios from 'axios'
import '/Users/thduser/ramworkspace/bootcamp-casestudy-view/src/styles/door.css'



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
                                                <td><h3>{door.doorId}</h3></td>
                                                <td><h3>{door.doorName}</h3></td>
                                                
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
