import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Main from './components/Main';
import NavBar from './NavBar'
import DockDoor from './components/DockDoor'
import DoorForm from './components/DoorForm'
import AllDoors from './components/AllDoors'
class App extends Component {

  
  render() {
    return (
      <div className="App">
     <div align="left">
  <NavBar/>
  </div>
  <div align="center">
      <Router>
        <Switch>
  <Route exact path="/" component={Main}/>
  <Route exact path="/dockDoors" component={DockDoor}/>
  <Route exact path="/getAllDoors" component={AllDoors}/>
  <Route exact path="/addNewDoor" component={DoorForm}/>
  </Switch>
  </Router>
  </div>
      </div>

    );
  }
}

export default App;
