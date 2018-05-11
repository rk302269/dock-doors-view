import React, { Component } from 'react';
import axios from 'axios'

class DoorForm extends Component {
constructor(props) {
    super(props);
    this.state= {doorName: '',
                 newDoor : {
                     doorId : '',
                     doorName : ''
                 }       
                };
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
    this.setState({doorName:event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    const restUri = 'http://localhost:8080/api/addDoor';
    const reqBody = this.state;
   
    axios.post(restUri, reqBody)
    .then( response => {
         this.newDoor = response.data
    })

    window.alert('Dock Door successfully created');
    
 
}

    render() {
        return (
            <div>
                <div>
                <h1 className="App-title">Dock Door Form</h1>
                </div>
                <div>
            <form onSubmit={this.handleSubmit}>
        <label>
          Door Name:
          <input type="text" required value={this.state.doorName} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      
      </div>
        );
    }
}

export default DoorForm;