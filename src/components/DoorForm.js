import React, { Component } from 'react';
import axios from 'axios'

class DoorForm extends Component {
constructor(props) {
    super(props);
    this.state= {doorName: '',
                };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
    this.setState({doorName:event.target.value});
}

handleSubmit(event) {
    alert('New Door Entry Submitted with Door Name : '+this.state.doorName);
    event.preventDefault();
    const restUri = 'http://localhost:8080/api/addDoor';
    const reqBody = this.state;
   
    axios.post(restUri, reqBody)
    .then( response => {
        const newDoor = response.data
        if(newDoor.doorName===null || newDoor.doorName===undefined)
        {
            window.alert("Invalid Door Name")
        } else {
            window.alert("Created a new Door Entry")
        }
    })
 
}

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <label>
          Door Name:
          <input type="text" required value={this.state.doorName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        );
    }
}

export default DoorForm;